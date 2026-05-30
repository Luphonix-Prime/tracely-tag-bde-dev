import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Defence Supply Chain Traceability',
    description: 'Facilitating traceability and data management in defence supply chains for asset management and security.',
};

export default function DefenceSolution() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-primary-100">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium mb-6">
                            Industry Solutions: Defence
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-8">
                            Mission-Critical Precision: <br className="hidden md:block" />
                            <span className="text-indigo-600">Zero-Fail Asset Management.</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl">
                            Enhance operational readiness with total visibility of ammunition, equipment, and sensitive assets. Secure your supply chain against counterfeits and ensure every component is combat-ready.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Secure Your Supply Chain
                        </Link>
                    </div>
                </Container>
            </section>

            {/* The Challenge */}
            <section className="py-20 bg-secondary-50 border-b border-secondary-200">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-primary-900 mb-6">Securing the Frontline of Logistics</h2>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                Defence logistics leave no room for error. Tracking ammunition, managing equipment lifecycles, and blocking counterfeit parts are not just operational tasks—they are matters of national security. Traditional tracking is too slow and prone to risk.
                            </p>
                        </div>
                        <div className="relative h-96 bg-white rounded-2xl overflow-hidden border border-secondary-200 shadow-xl group">
                            <Image
                                src="/images/defence-security.png"
                                alt="Secure Defence Supply Chain"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Solution Features */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-indigo-600 font-medium tracking-wider uppercase mb-4 text-sm">Capabilities</h2>
                        <h3 className="text-3xl md:text-5xl font-bold font-display text-primary-900">Defense-Grade Reliability</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-indigo-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Ammunition Tracking</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Ammunition & Expiry Management:</strong> Monitor lot numbers and expiry dates in real-time. Ensure safety and mission readiness by using only verified, in-date ordinance.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-indigo-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">MRO (Maintenance, Repair & Overhaul)</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Authentic Spare Parts Verification:</strong> Extend equipment life with precise usage tracking. Verify the authenticity of every spare part to prevent catastrophic failures caused by fakes.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-indigo-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Asset Management</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Strategic Asset Visibility:</strong> Gain real-time visibility of high-value assets across bases and depots. Eliminate manual errors and ensure equipment is exactly where it needs to be.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
