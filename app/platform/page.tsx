import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The TracelyTag Platform',
    description: 'A unified cloud platform for end-to-end supply chain visibility, digital identity management, and real-time analytics.',
};

export default function PlatformPage() {
    return (
        <main className="bg-white min-h-screen">
            <section className="relative pt-32 pb-20 border-b border-primary-100">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-accent-600 font-medium tracking-widest uppercase text-sm mb-4 block">
                            The Tech Stack
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 mb-8">
                            The Intelligence <br />
                            <span className="text-accent-600">
                                Connective Tissue
                            </span>
                        </h1>
                        <p className="text-xl text-secondary-600 leading-relaxed mb-10">
                            TracelyTag isn't just a database. It's a living, breathing nervous system for your products.
                            From the factory floor to the customer's hands, we capture every heartbeat of your supply chain.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Platform Layers */}
            <section className="py-24 bg-secondary-50">
                <Container>
                    <div className="space-y-24">
                        {/* Layer 1: Physical */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-3xl font-bold text-primary-900 mb-4">1. The Physical Layer</h3>
                                <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                                    <strong>Tag Agnostic Identity.</strong> We don't force you into one form factor. Our platform ingests data from:
                                </p>
                                <ul className="space-y-3 text-secondary-600">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                                        Encrypted QR Code (GS1 Digital Link)
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                                        NFC / RFID Inlays
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                                        IoT Sensors (Temperature/Humidity)
                                    </li>
                                </ul>
                            </div>
                            <div className="order-1 md:order-2 bg-white h-auto aspect-video rounded-xl border border-secondary-200 shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                <Image
                                    src="/images/platform-tags.png"
                                    alt="Diverse Tracking Tags"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Layer 2: Cloud */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="bg-white h-auto aspect-video rounded-xl border border-secondary-200 shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                <Image
                                    src="/images/platform-cloud.png"
                                    alt="Central Cloud Data Flow"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-primary-900 mb-4">2. The Logic Cloud</h3>
                                <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                                    <strong>Real-Time Orchestration.</strong> Data is useless without context. Our cloud engine correlates scan events to flag issues instantly.
                                </p>
                                <ul className="space-y-3 text-secondary-600">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                                        Grey Market Detection Algorithms
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                                        Automated Recall Management
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                                        Supply Chain Mapping
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Layer 3: Experience */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-3xl font-bold text-primary-900 mb-4">3. The Experience Layer</h3>
                                <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                                    <strong>Consumer Connection.</strong> Authenticity is a marketing asset. Turn a compliance requirement into a loyalty engine.
                                </p>
                                <ul className="space-y-3 text-secondary-600">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                        Instant Authenticity Verification
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                        Digital Product Manuals & Storytelling
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                        Direct Warranty Registration
                                    </li>
                                </ul>
                            </div>
                            <div className="order-1 md:order-2 bg-white h-auto aspect-video rounded-xl border border-secondary-200 shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                <Image
                                    src="/images/platform-mobile.png"
                                    alt="Mobile Consumer Experience"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
