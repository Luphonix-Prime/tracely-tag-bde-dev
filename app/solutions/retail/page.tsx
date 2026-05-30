import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Retail & Online Marketplaces Traceability',
    description: 'Empower the retail journey from seller to consumer with verifiable product information and inventory visibility.',
};

export default function RetailSolution() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-primary-100">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium mb-6">
                            Industry Solutions: Retail
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-8">
                            Trust in Every Transaction: <br className="hidden md:block" />
                            <span className="text-orange-600">Verifiable Retail Intelligence.</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl">
                            From manufacturing to the digital shelf, eliminate product fakes and inventory blind spots. Manage your supply chain with GS1-compliant data that builds unshakeable consumer trust.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Digitize Your Inventory
                        </Link>
                    </div>
                </Container>
            </section>

            {/* The Challenge */}
            <section className="py-20 bg-secondary-50 border-b border-secondary-200">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-primary-900 mb-6">Is Your Supply Chain Leaking Revenue?</h2>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                Modern retail involves complex supply chains and demanding consumers who expect total transparency. Undetected counterfeits and inventory inefficiencies don&apos;t just hurt margins—they erode your brand value.
                            </p>
                            <ul className="space-y-4 mt-8">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="text-secondary-700"><strong>Counterfeits on marketplaces:</strong> Stop fakes from stealing your sales.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="text-secondary-700"><strong>Inventory shrinkage and loss:</strong> Real-time tracking to prevent "invisible" inventory drain.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-96 bg-white rounded-2xl overflow-hidden border border-secondary-200 shadow-xl group">
                            <Image
                                src="/images/retail-dashboard.png"
                                alt="Retail Dashboard and Warehouse"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Solution Features */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-orange-600 font-medium tracking-wider uppercase mb-4 text-sm">Our Solution</h2>
                        <h3 className="text-3xl md:text-5xl font-bold font-display text-primary-900">Seamless Retail Operations</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-orange-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Master Data Control</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                Centralize your product master data and share it seamlessly across platforms using global GS1 standards.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-orange-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Unique Digital Identity</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                Assign unique digital identities GTINs to every product for unambiguous identification online and offline.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-orange-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">100% Inventory Visibility</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                Track accurate stock levels in real-time to prevent out-of-stocks and eliminate overstocking costs.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
