import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Luxury Brand Protection & Anti-Counterfeiting',
    description: 'Protect your luxury brand equity, fight counterfeiting, and engage consumers with TracelyTag\'s digital product passports.',
};

export default function LuxurySolution() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-secondary-200">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                {/* Elegant gold/purple accents for luxury vibe */}
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-50 to-transparent pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
                            Industry Solutions: Luxury & Fashion
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-8">
                            Protecting the <span className="text-purple-600">Authentic</span>. <br />
                            Connecting the <span className="text-purple-600">Exclusive</span>.
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl">
                            Stop counterfeits from devaluing your brand. Use invisible tech to verify provenance and unlock direct-to-consumer engagement channels.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Request Brand Protection Audit
                        </Link>
                    </div>
                </Container>
            </section>

            {/* The Challenge */}
            <section className="py-20 bg-secondary-50 border-b border-secondary-200">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-primary-900 mb-6">The Counterfeit Crisis</h2>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                Copycats don't just steal sales—they steal your brand's soul. When a customer unknowingly buys a fake, their disappointment is directed at <strong>you</strong>.
                            </p>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                Maintaining exclusivity in a digital-first world requires more than just craftsmanship; it requires cryptographic proof of origin.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-white rounded-lg border border-secondary-200 shadow-sm">
                                    <div className="text-2xl font-bold text-primary-900 mb-1">30%</div>
                                    <div className="text-sm text-secondary-500">Brand Value Erosion</div>
                                </div>
                                <div className="p-4 bg-white rounded-lg border border-secondary-200 shadow-sm">
                                    <div className="text-2xl font-bold text-primary-900 mb-1">Low</div>
                                    <div className="text-sm text-secondary-500">Customer Trust in Resale</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] bg-white rounded-2xl overflow-hidden border border-secondary-200 shadow-xl group">
                            <Image
                                src="/images/luxury-demo.png"
                                alt="Luxury Handbag Authentication Demo"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Scanning Animation Overlay */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 animate-scan" style={{ animationDuration: '3s' }} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-purple-300 transition-all group hover:shadow-md">
                            <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-purple-600 transition-colors">Digital Product Passports</h3>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                Give every item a unique ID. Customers can scan to see the artisan who made it, the materials used, and verify it's 100% authentic.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-purple-300 transition-all group hover:shadow-md">
                            <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-purple-600 transition-colors">Invisible Integration</h3>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                NFC chips embedded in leather, secure QR codes woven into labels. Our tech is invisible to the eye but impossible to clone.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-purple-300 transition-all group hover:shadow-md">
                            <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-purple-600 transition-colors">Resale Revenue</h3>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                authenticate pre-owned items instantly. Control the secondary market and even earn royalties on resale.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
