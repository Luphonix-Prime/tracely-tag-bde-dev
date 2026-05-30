import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FMCG Supply Chain Transparency | TracelyTag',
    description: 'Farm-to-fork visibility for food and consumer goods. Ensure freshness, safety, and origin verification.',
};

export default function FMCGPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-secondary-200">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
                            Industry Solutions: FMCG & Food
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-8">
                            Trust on Every Table. <br />
                            <span className="text-green-600">Farm to Fork Visibility.</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl">
                            Consumers demand to know where their food comes from. Give them the full story with verifiable traceability data.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Request Demo
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Feature Image */}
            <section className="py-12 bg-white">
                <Container>
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-secondary-200 group">
                        <Image
                            src="/images/fmcg-hero.png"
                            alt="Farm to Fork Supply Chain Visualization"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent pointer-events-none" />
                        <div className="absolute bottom-8 left-8 text-white z-10">
                            <div className="text-2xl font-bold mb-2">Real-Time Freshness Tracking</div>
                            <p className="text-white/90 max-w-md">Monitor temperature, location, and handling from harvest to retail shelf.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
