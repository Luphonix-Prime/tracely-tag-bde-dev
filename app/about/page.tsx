import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { generateMetadata as genMeta } from '@/lib/metadata';
import Container from '@/components/ui/Container';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = genMeta({
    title: 'About Us',
    description: 'Authenticity First. TracelyTag provides secure, GS1-compliant QR codes for detailed product authentication, supply chain visibility, and anti-counterfeiting.',
    url: '/about',
});

export default function AboutPage() {
    return (
        <div className="pt-20 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden border-b border-primary-100">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                <Container className="relative z-10">
                    <AnimatedSection className="text-center max-w-5xl mx-auto">
                        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary-100 border border-primary-200 text-primary-700 font-semibold text-sm tracking-wide uppercase">
                            Our Mission
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display text-primary-900">
                            <span className="text-accent-600">Authenticity First</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary-600 leading-relaxed max-w-3xl mx-auto">
                            We are building the trust layer for the physical world. TracelyTag empowers brands with GS1-compliant technology to secure products, visualize supply chains, and guarantee authenticity with every scan.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* The 4 Pillars Section */}
            <section className="py-24 bg-secondary-50 relative overflow-hidden border-b border-secondary-200">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Product Integrity',
                                description: 'We prioritize genuine product verification above all else, ensuring that every item carries a verifiable digital passport.',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                color: 'text-green-600',
                                bg: 'bg-green-100'
                            },
                            {
                                title: 'GS1-Compliant',
                                description: 'Built on the global gold standard for identification, guaranteeing interoperability across borders and supply chain partners.',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                color: 'text-blue-600',
                                bg: 'bg-blue-100'
                            },
                            {
                                title: 'Built for Visibility',
                                description: 'Shine a light on your entire supply chain. Gain real-time insights into product movement, location, and handling status.',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                ),
                                color: 'text-purple-600',
                                bg: 'bg-purple-100'
                            },
                            {
                                title: 'Trust',
                                description: 'The currency of modern commerce. We help you build and maintain unshakable confidence with your consumers.',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                ),
                                color: 'text-orange-600',
                                bg: 'bg-orange-100'
                            }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="p-8 rounded-2xl bg-white border border-secondary-200 h-full hover:shadow-xl transition-all duration-300 hover:border-primary-200 group">
                                    <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-primary-900 group-hover:text-primary-700">{item.title}</h3>
                                    <p className="text-secondary-600 leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Core Capabilities Deep Dive */}
            <section className="py-24 bg-white border-t border-primary-100">
                <Container>
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-primary-900">
                            Core Capabilities
                        </h2>
                        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                            A comprehensive suite of technologies designed to protect your brand integrity and optimize operations.
                        </p>
                    </AnimatedSection>

                    <div className="space-y-32">
                        {/* 1. Product Authentication */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <AnimatedSection className="order-2 lg:order-1">
                                <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-xs uppercase tracking-wider">
                                    Digital Passport
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary-900">Product Authentication</h3>
                                <div className="prose prose-lg text-secondary-600 leading-relaxed space-y-6">
                                    <p>
                                        In an era of sophisticated counterfeiting, physical labels aren&apos;t enough. TracelyTag assigns a unique, secure digital identity to every single product unit you manufacture.
                                    </p>
                                    <p>
                                        Our <strong>GS1-compliant QR codes</strong> act as a digital passport. Consumers and inspectors can verify authenticity instantly with a smartphone scan, retrieving immutable proof of origin and product details. This direct connection eliminates doubt and builds immediate brand loyalty.
                                    </p>
                                    <ul className="space-y-3 mt-4">
                                        <li className="flex items-center space-x-3 text-primary-800">
                                            <span className="text-accent-600">✓</span>
                                            <span>Serialized unique identity for every unit</span>
                                        </li>
                                        <li className="flex items-center space-x-3 text-primary-800">
                                            <span className="text-accent-600">✓</span>
                                            <span>Instant smartphone verification (no app needed)</span>
                                        </li>
                                        <li className="flex items-center space-x-3 text-primary-800">
                                            <span className="text-accent-600">✓</span>
                                            <span>Bank-grade encryption security</span>
                                        </li>
                                    </ul>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-white border border-secondary-200 group">
                                    <Image
                                        src="/images/digital-passport.png"
                                        alt="Digital Product Passport Visualization"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-secondary-50 border-t border-secondary-200">
                <Container>
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-primary-900">
                            Secure your products. <br />
                            <span className="text-accent-600">Build your legacy.</span>
                        </h2>
                        <p className="text-xl text-secondary-600 mb-10 max-w-2xl mx-auto">
                            Join the leading brands using TracelyTag to guarantee authenticity and gain unprecedented visibility.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-accent-600 text-white rounded-xl font-bold hover:bg-accent-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    Get Started Now
                                </button>
                            </Link>
                            <Link href="/solutions">
                                <button className="px-8 py-4 bg-white border border-secondary-300 text-primary-900 rounded-xl font-bold hover:border-primary-500 hover:text-primary-700 transition-all shadow-sm">
                                    Explore Solutions
                                </button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </div>
    );
}
