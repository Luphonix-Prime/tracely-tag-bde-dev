import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Automotive Parts Authentication | TracelyTag',
    description: 'Prevent counterfeit parts and ensure safety with digital authentication for the automotive supply chain.',
};

export default function AutomotivePage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-secondary-200">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
                            Industry Solutions: Automotive
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-8">
                            Genuine Parts. <br />
                            <span className="text-blue-600">Guaranteed Performance.</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl">
                            Counterfeit parts compromise safety and brand reputation. Secure your supply chain with immutable digital identities for every component.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Secure Your Supply Chain
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Feature Image */}
            <section className="py-12 bg-white">
                <Container>
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-secondary-200 group">
                        <Image
                            src="/images/auto-hero.png"
                            alt="Automotive Parts Digital Verification"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent pointer-events-none" />
                        <div className="absolute bottom-8 left-8 text-white z-10">
                            <div className="text-2xl font-bold mb-2">Precision Authentication</div>
                            <p className="text-white/90 max-w-md">Verify distinct part DNA against digital twin specifications instantly.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
