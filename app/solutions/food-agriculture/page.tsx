import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Food & Agriculture Traceability',
    description: 'Strengthening India’s food supply chain with GS1 Standards for FSSAI compliance and farm-to-fork visibility.',
};

export default function FoodAgSolution() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-primary-100">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
                            Industry Solutions: Food & Agriculture
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-8">
                            Safe Food, Secure Future: <br className="hidden md:block" />
                            <span className="text-green-600">Farm-to-Fork Visibility.</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl">
                            Ensure FSSAI compliance, track pesticide usage, and guarantee authenticity from the farm to the consumer's plate.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Start Tracing
                        </Link>
                    </div>
                </Container>
            </section>

            {/* The Challenge */}
            <section className="py-20 bg-secondary-50 border-b border-secondary-200">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-primary-900 mb-6">Protecting Your Brand From Seed to Shelf</h2>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                Food safety incidents and a lack of transparency are critical global risks. A single recall can cost millions and destroy consumer trust forever. In an era of demanding transparency, manual tracking is no longer enough.
                            </p>
                            <ul className="space-y-4 mt-8">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="text-secondary-700"><strong>Contamination Risks:</strong> Rapidly identify and isolate contaminated batches before they reach the consumer.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="text-secondary-700"><strong>Counterfeit Organic Claims:</strong> Verify authenticity and stop fraudulent "organic" labels from devaluing your premium products.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-96 bg-white rounded-2xl overflow-hidden border border-secondary-200 shadow-xl group">
                            <Image
                                src="/images/fmcg-hero.png"
                                alt="Food Safety and Traceability"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Solution Features */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-green-600 font-medium tracking-wider uppercase mb-4 text-sm">Key Capabilities</h2>
                        <h3 className="text-3xl md:text-5xl font-bold font-display text-primary-900">Total Food Safety</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-green-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Origin Tracing</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                Verify the source of every ingredient instantly. Use secure QR codes to tell the transparent story of your produce from farm to shelf.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-green-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">FSSAI Compliance</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                Automate your regulatory requirements. Meet FSSAI and global safety standards seamlessly with standardized, audit-ready data reporting.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-green-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Precision Recalls</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                Execute targeted recalls in minutes, not days. Minimize waste, protect public health, and save your brand&apos;s reputation during a crisis.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
