import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    image?: string;
    content: string;
    readTime?: number;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    try {
        if (!fs.existsSync(postsDirectory)) {
            return [];
        }

        const fileNames = fs.readdirSync(postsDirectory);
        const allPostsData = await Promise.all(
            fileNames
                .filter((fileName) => fileName.endsWith('.md'))
                .map(async (fileName) => {
                    try {
                        const slug = fileName.replace(/\.md$/, '');
                        const fullPath = path.join(postsDirectory, fileName);
                        const fileContents = fs.readFileSync(fullPath, 'utf8');
                        const { data, content } = matter(fileContents);

                        const processedContent = await remark().use(html).process(content);
                        const contentHtml = processedContent.toString();

                        const wordCount = content.trim().split(/\s+/).length;
                        const readTime = Math.ceil(wordCount / 200);

                        return {
                            slug,
                            title: data.title || 'Untitled',
                            date: data.date || new Date().toISOString(),
                            author: data.author || 'TracelyTag Team',
                            excerpt: data.excerpt || '',
                            image: data.image,
                            content: contentHtml,
                            readTime,
                        } as BlogPost;
                    } catch (error) {
                        console.error(`Error processing ${fileName}:`, error);
                        return null;
                    }
                })
        );

        const validPosts = allPostsData.filter((post): post is BlogPost => post !== null);
        return validPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
    } catch (error) {
        console.error('Error in getAllPosts:', error);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        const wordCount = content.trim().split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);

        return {
            slug,
            title: data.title || 'Untitled',
            date: data.date || new Date().toISOString(),
            author: data.author || 'TracelyTag Team',
            excerpt: data.excerpt || '',
            image: data.image,
            content: contentHtml,
            readTime,
        };
    } catch (error) {
        console.error(`Error getting post ${slug}:`, error);
        return null;
    }
}

export function getAllPostSlugs(): string[] {
    try {
        if (!fs.existsSync(postsDirectory)) {
            return [];
        }

        const fileNames = fs.readdirSync(postsDirectory);
        return fileNames
            .filter((fileName) => fileName.endsWith('.md'))
            .map((fileName) => fileName.replace(/\.md$/, ''));
    } catch (error) {
        console.error('Error getting post slugs:', error);
        return [];
    }
}
