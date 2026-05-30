import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pharmaceutical Traceability & DSCSA Compliance',
    description: 'Ensure DSCSA compliance, prevent counterfeiting, and secure your pharmaceutical supply chain with TracelyTag.',
};

export default function PharmaSolution() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-primary-100">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium mb-6">
                            Industry Solutions: Life Sciences
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-8">
                            Beyond Compliance: <br className="hidden md:block" />
                            <span className="text-accent-600">Total Integrity for Life Sciences.</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl">
                            Meet DSCSA requirements, eliminate falsified medicines, and ensure absolute patient safety with item-level serialization and real-time visibility.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Secure Your Chain of Custody
                        </Link>
                    </div>
                </Container>
            </section>

            {/* The Challenge */}
            <section className="py-20 bg-secondary-50 border-b border-secondary-200">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-primary-900 mb-6">The Challenge</h2>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                In the pharmaceutical industry, traceability isn't just a "nice-to-have"—it's the law. But meeting <strong className="text-primary-900">DSCSA</strong> (Drug Supply Chain Security Act) requirements is just the baseline.
                            </p>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                The real threats are sophisticated falsified medicines, supply chain diversion, and inefficient recalls that put patient lives and brand reputation at risk.
                            </p>
                            <ul className="space-y-4 mt-8">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="text-secondary-700">Regulatory fines for non-compliance</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="text-secondary-700">Risk of patient harm from counterfeits</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-96 bg-white rounded-2xl overflow-hidden border border-secondary-200 shadow-xl group">
                            <Image
                                src="/images/pharma-demo.png"
                                alt="Pharmaceutical Serialization Flow"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Solution Features */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-accent-600 font-medium tracking-wider uppercase mb-4 text-sm">The TracelyTag Advantage</h2>
                        <h3 className="text-3xl md:text-5xl font-bold font-display text-primary-900">Full-Stack Integrity</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-accent-300 transition-all hover:shadow-md group">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 text-accent-600 border border-secondary-100 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Item-Level Serialization</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                Assign a unique serial number to every single unit, case, and pallet. Our system handles complex <strong>aggregation</strong> hierarchies automatically, ensuring you know exactly which bottle is in which box.
                            </p>
                        </div>

                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-accent-300 transition-all hover:shadow-md group">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 text-accent-600 border border-secondary-100 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Anti-Counterfeit Shield</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                Deploy <strong>tamper-evident</strong> distinct digital seals. If a product is diverted or opened, the digital twin updates instantly, flagging the risk before it reaches the patient.
                            </p>
                        </div>

                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-accent-300 transition-all hover:shadow-md group">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 text-accent-600 border border-secondary-100 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Regulatory Automations</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                One-click reporting for global standards. Whether it's FDA in the US or FMD in Europe, our platform keeps your data audit-ready 24/7.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20 border-t border-primary-100 bg-primary-50">
                <Container>
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-900 mb-6">
                            Ready to secure your supply chain?
                        </h2>
                        <p className="text-secondary-600 mb-10 text-lg">
                            Schedule a consultation with our compliance experts to see how TracelyTag fits into your existing manufacturing line.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-primary-900 text-white hover:bg-primary-800 font-bold rounded-lg transition-colors shadow-lg"
                            >
                                Schedule Compliance Consultation
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
