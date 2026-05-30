import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Transport & Logistics Traceability',
    description: 'Building a resilient supply chain through standardized logistics, FASTag integration, and end-to-end visibility.',
};

export default function TransportSolution() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-primary-100">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
                            Industry Solutions: Logistics
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-8">
                            Moving the World: <br className="hidden md:block" />
                            <span className="text-blue-600">Intelligent Logistics & Velocity.</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl">
                            Achieve total supply chain visibility with automated vehicle tracking, standardized location numbering, and real-time shipment monitoring. Eliminate delays and cut logistics costs with GS1-compliant data.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Optimize Your Logistics
                        </Link>
                    </div>
                </Container>
            </section>

            {/* The Challenge */}
            <section className="py-20 bg-secondary-50 border-b border-secondary-200">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-primary-900 mb-6">Stop Losing Time in Fragmented Supply Chains</h2>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                Inefficiency at toll plazas, lack of real-time visibility, and manual errors at checkpoints are driving up your logistics costs. In today&apos;s fast-paced market, delayed shipments don&apos;t just hurt your bottom line—they damage your customer trust. You need a connected supply chain that never stops moving.
                            </p>
                        </div>
                        <div className="relative h-96 bg-white rounded-2xl overflow-hidden border border-secondary-200 shadow-xl group">
                            <Image
                                src="/images/logistics-transport.png"
                                alt="Smart Transport and Logistics"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Solution Features */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-blue-600 font-medium tracking-wider uppercase mb-4 text-sm">Efficiency</h2>
                        <h3 className="text-3xl md:text-5xl font-bold font-display text-primary-900">Connected Supply Chain</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-blue-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">FASTag & Automated Transit</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Frictionless Movement:</strong> Reduce transit times with seamless FASTag integration. Automate toll payments and vehicle tracking to ensure your fleet spends less time at checkpoints and more time on the road.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-blue-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Standardized Global IDs</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Zero-Error Identification:</strong> Eliminate warehouse confusion. Use GLNs (Global Location Numbers) and SSCCs (Serial Shipping Container Codes) to ensure every shipment is identified accurately across the entire global network.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-blue-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Real-Time Interoperable Data</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Warehouse-to-Door Visibility:</strong> Track your goods with 100% precision. Our platform uses interoperable data standards, giving you a live view of your inventory at every stage of the journey.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
