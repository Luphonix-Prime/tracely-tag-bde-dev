import React from 'react';
import { generateMetadata as genMeta } from '@/lib/metadata';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/AnimatedSection';
import { services } from '@/data/services';

export const metadata = genMeta({
    title: 'Services',
    description: 'At TracelyTag, we provide essential tools to secure, track, and authenticate your products — building trust with every scan.',
    url: '/services',
});

export default function ServicesPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                <Container>
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
                            <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            At TracelyTag, we provide essential tools to secure, track, and authenticate your products - building trust with every scan.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.id} delay={index * 0.1}>
                                <Card
                                    title={service.title}
                                    description={service.shortDescription}
                                    href={`/services/${service.slug}`}
                                />
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <Container>
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                            Not sure which service is right for you?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
                            Our team can help you choose the perfect solution for your business needs.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-lg shadow-lg"
                        >
                            Contact Us
                        </a>
                    </AnimatedSection>
                </Container>
            </section>
        </div>
    );
}
