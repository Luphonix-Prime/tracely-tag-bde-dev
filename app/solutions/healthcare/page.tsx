import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Healthcare Traceability & Safety',
    description: 'Enhancing Patient Safety and Supply Chain Efficiency. Compliant with ROHINI, unique identification for drugs, and medical devices.',
};

export default function HealthcareSolution() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-primary-100">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium mb-6">
                            Industry Solutions: Healthcare
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-8">
                            Patient First: <br className="hidden md:block" />
                            <span className="text-teal-600">Traceability That Saves Lives.</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl">
                            Protect your patients and your reputation with end-to-end supply chain visibility. Ensure 100% authenticity and seamless compliance with ROHINI registry and global UDI standards.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Ensure Patient Safety
                        </Link>
                    </div>
                </Container>
            </section>

            {/* The Challenge */}
            <section className="py-20 bg-secondary-50 border-b border-secondary-200">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-primary-900 mb-6">The Crisis of Counterfeit Medicine</h2>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                Counterfeit drugs and unverified medical devices are not just business risks—they are fatal. With tightening global standards and the ROHINI registry requirements, healthcare providers cannot afford gaps in their supply chain. Every second lost in a recall is a life at risk.
                            </p>
                            <ul className="space-y-4 mt-8">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="text-secondary-700">Patient safety risks</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="text-secondary-700">Medical device recall efficiency</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-96 bg-white rounded-2xl overflow-hidden border border-secondary-200 shadow-xl group">
                            <Image
                                src="/images/healthcare-rohini.png"
                                alt="Healthcare ROHINI Compliance"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 to-transparent" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Solution Features */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-teal-600 font-medium tracking-wider uppercase mb-4 text-sm">Our Solution</h2>
                        <h3 className="text-3xl md:text-5xl font-bold font-display text-primary-900">Compliant & Secure</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-teal-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">ROHINI & Regulatory Compliance</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Seamless GS1 Integration:</strong> Stay ahead of the curve. Adhere to GS1 India's ROHINI registry for medical devices and ensure your products meet all national and international safety mandates.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-teal-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Global UDI Implementation</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Universal Tracking:</strong> Implement Unique Device Identification (UDI) for precision tracking. Ensure your medical devices are recognized, verified, and approved for global markets.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-teal-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Advanced Anti-Counterfeit</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Block Falsified Medicines:</strong> Secure your supply chain with tamper-proof digital IDs. Prevent falsified medicines from entering the market and protect your brand from the devastating impact of fakes.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
