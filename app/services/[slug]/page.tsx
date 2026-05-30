import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateMetadata as genMeta } from '@/lib/metadata';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/AnimatedSection';
import { getServiceBySlug, getAllServiceSlugs, services } from '@/data/services';

export async function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {};
    }

    return genMeta({
        title: service.title,
        description: service.shortDescription,
        url: `/services/${service.slug}`,
    });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    // Get related services (exclude current service)
    const relatedServices = services.filter(s => s.id !== service.id).slice(0, 3);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                <Container>
                    <AnimatedSection className="max-w-4xl mx-auto">
                        <Link href="/services" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Services
                        </Link>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
                            <span className="gradient-text">{service.title}</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            {service.shortDescription}
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Description Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                                {service.fullDescription}
                            </p>
                        </AnimatedSection>

                        {/* Features */}
                        <AnimatedSection delay={0.2}>
                            <h2 className="text-3xl font-bold mb-8 font-display">Key Features</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-16">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Benefits */}
                        <AnimatedSection delay={0.3}>
                            <h2 className="text-3xl font-bold mb-8 font-display">Benefits</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-800">
                                        <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Related Services */}
            {relatedServices.length > 0 && (
                <section className="py-20 bg-gray-50 dark:bg-gray-800">
                    <Container>
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                                Related <span className="gradient-text">Services</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Explore other solutions that complement {service.title}
                            </p>
                        </AnimatedSection>

                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedServices.map((relatedService, index) => (
                                <AnimatedSection key={relatedService.id} delay={index * 0.1}>
                                    <Link href={`/services/${relatedService.slug}`}>
                                        <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                                            <h3 className="text-xl font-bold mb-3">{relatedService.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-4">{relatedService.shortDescription}</p>
                                            <span className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center">
                                                Learn more
                                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
                <Container>
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                            Ready to get started with {service.title}?
                        </h2>
                        <p className="text-xl mb-10 opacity-90">
                            Let's discuss how this solution can help protect your brand and build customer trust.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                                Contact Us Today
                            </Button>
                        </Link>
                    </AnimatedSection>
                </Container>
            </section>
        </div>
    );
}
