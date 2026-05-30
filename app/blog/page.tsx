import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/lib/metadata';
import Container from '@/components/ui/Container';
import AnimatedSection from '@/components/AnimatedSection';
import { getAllPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export const metadata = genMeta({
    title: 'Blog',
    description: 'Insights, updates, and best practices for product authentication and supply chain security.',
    url: '/blog',
});

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                <Container>
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
                            <span className="gradient-text">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            Insights, updates, and best practices for product authentication and supply chain security.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Blog Posts */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <Container>
                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                No blog posts available yet. Check back soon!
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <AnimatedSection key={post.slug} delay={index * 0.1}>
                                    <Link href={`/blog/${post.slug}`}>
                                        <article className="group h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all hover:-translate-y-1">
                                            {post.image && (
                                                <div className="relative h-48 w-full overflow-hidden">
                                                    <Image
                                                        src={post.image}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                </div>
                                            )}

                                            <div className="p-6">
                                                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                                                    {post.readTime && (
                                                        <>
                                                            <span>•</span>
                                                            <span>{post.readTime} min read</span>
                                                        </>
                                                    )}
                                                </div>

                                                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                    {post.title}
                                                </h2>

                                                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                                    {post.excerpt}
                                                </p>

                                                <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                                                    Read more
                                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    )}
                </Container>
            </section>
        </div>
    );
}
