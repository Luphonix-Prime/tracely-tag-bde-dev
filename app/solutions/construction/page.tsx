import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Construction & Building Materials Traceability',
    description: 'Enabling building material traceability for digitization, better procurement, and data-driven decision making.',
};

export default function ConstructionSolution() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-primary-100">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
                            Industry Solutions: Construction
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-8">
                            Build with Confidence: <br className="hidden md:block" />
                            <span className="text-amber-600">Precision Material Traceability.</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl">
                            Digitally track every building material from the factory floor to the final installation. Eliminate supply chain delays, reduce on-site waste, and guarantee the structural integrity of your projects with GS1-compliant data.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Digitize Your Construction Site
                        </Link>
                    </div>
                </Container>
            </section>

            {/* The Challenge */}
            <section className="py-20 bg-secondary-50 border-b border-secondary-200">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-primary-900 mb-6">The Hidden Costs of Supply Chain Opacity</h2>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                The construction industry is plagued by material verification gaps, unexpected project delays, and fragmented data. When you can&apos;t track your assets, you lose control over your budget and safety. Managing long-term asset data for maintenance shouldn&apos;t be a struggle—it should be a strategic advantage.
                            </p>
                        </div>
                        <div className="relative h-96 bg-white rounded-2xl overflow-hidden border border-secondary-200 shadow-xl group">
                            <Image
                                src="/images/construction-site.png"
                                alt="Construction Material Traceability"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Solution Features */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-amber-600 font-medium tracking-wider uppercase mb-4 text-sm">Key Benefits</h2>
                        <h3 className="text-3xl md:text-5xl font-bold font-display text-primary-900">Smart Construction</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-amber-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Procurement Efficiency</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Streamlined Logistics:</strong> End the guessing game. Use automated data exchange and real-time tracking to ensure materials arrive exactly when they are needed, keeping your project on schedule and under budget.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-amber-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Sustainability & Circularity</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Lifecycle Tracking:</strong> Build for the future. Track material lifecycles and recycling potential to enable circular economy practices, reducing environmental impact and meeting modern green building standards.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-amber-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Data-Driven Facility Management</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Smarter Execution:</strong> Use standardized digital data to improve project planning and execution. Provide future facility managers with a "Digital Twin" of the materials used, making long-term maintenance effortless.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
