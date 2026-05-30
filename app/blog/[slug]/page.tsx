import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { generateMetadata as genMeta, generateArticleSchema } from '@/lib/metadata';
import Container from '@/components/ui/Container';
import AnimatedSection from '@/components/AnimatedSection';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {};
    }

    return genMeta({
        title: post.title,
        description: post.excerpt,
        url: `/blog/${post.slug}`,
        image: post.image,
        type: 'article',
    });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const articleSchema = generateArticleSchema({
        title: post.title,
        description: post.excerpt,
        image: post.image || '/images/og-image.jpg',
        datePublished: post.date,
        authorName: post.author,
        url: `https://tracelytag.com/blog/${post.slug}`,
    });

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                <Container>
                    <AnimatedSection className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Blog
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                            {post.title}
                        </h1>

                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-8">
                            <span className="font-medium">{post.author}</span>
                            <span>•</span>
                            <time dateTime={post.date}>{formatDate(post.date)}</time>
                            {post.readTime && (
                                <>
                                    <span>•</span>
                                    <span>{post.readTime} min read</span>
                                </>
                            )}
                        </div>

                        {post.image && (
                            <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-8">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </AnimatedSection>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection>
                            <article
                                className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:font-display prose-headings:font-bold
                  prose-a:text-primary-600 dark:prose-a:text-primary-400
                  prose-img:rounded-2xl prose-img:shadow-lg"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </AnimatedSection>

                        {/* Share Section */}
                        <AnimatedSection delay={0.2} className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <p className="text-gray-600 dark:text-gray-400">Share this article:</p>
                                <div className="flex items-center space-x-4">
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://tracelytag.com/blog/${post.slug}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://tracelytag.com/blog/${post.slug}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
                <Container>
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                            Ready to secure your products?
                        </h2>
                        <p className="text-xl mb-10 opacity-90">
                            Discover how TracelyTag can help protect your brand and build customer trust.
                        </p>
                        <Link href="/contact">
                            <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg shadow-xl">
                                Get Started
                            </button>
                        </Link>
                    </AnimatedSection>
                </Container>
            </section>
        </div>
    );
}
