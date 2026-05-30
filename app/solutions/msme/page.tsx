import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MSME Growth & Barcode Solutions',
    description: 'Supporting MSMEs to boost sales, expand market reach, and access reimbursement schemes through GS1 barcodes.',
};

export default function MSMESolution() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-primary-100">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-sm font-medium mb-6">
                            Industry Solutions: MSME
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-8">
                            Scale Your Small Business: <br className="hidden md:block" />
                            <span className="text-pink-600">Unlock Global Market Access.</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl">
                            Go from local to global. List your products on top e-commerce platforms, enter big retail chains, and claim government reimbursements with GS1-compliant barcode registration.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Get Your Business Barcoded
                        </Link>
                    </div>
                </Container>
            </section>

            {/* The Challenge */}
            <section className="py-20 bg-secondary-50 border-b border-secondary-200">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-primary-900 mb-6">Don&apos;t Let Lack of Standards Stop Your Growth</h2>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                Thousands of MSMEs fail to reach retail shelves or online marketplaces like Amazon and Flipkart simply because they lack standardized product identification. Without a global barcode, your product is invisible to the world. We help you break that barrier and get your brand noticed.
                            </p>
                        </div>
                        <div className="relative h-96 bg-white rounded-2xl overflow-hidden border border-secondary-200 shadow-xl group">
                            <Image
                                src="/images/msme-growth.png"
                                alt="MSME Business Growth"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 to-transparent" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Solution Features */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-pink-600 font-medium tracking-wider uppercase mb-4 text-sm">Opportunities</h2>
                        <h3 className="text-3xl md:text-5xl font-bold font-display text-primary-900">Scale Your Business</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-pink-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Instant Market Access</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Sell Everywhere:</strong> Meet the mandatory barcode requirements of major retailers and global e-commerce giants. Open the doors to Flipkart, Amazon, and big-box retail stores instantly.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-pink-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Government Reimbursements</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Zero Cost Identification:</strong> Don&apos;t let fees hold you back. We provide expert assistance in availing Ministry of MSME schemes, helping you get your barcode registration fees reimbursed by the government.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-200 hover:border-pink-300 transition-all hover:shadow-md group">
                            <h4 className="text-xl font-bold text-primary-900 mb-4">Export Readiness</h4>
                            <p className="text-secondary-600 text-sm leading-relaxed">
                                <strong>Global Standards, Local Brand:</strong> Make your products export-ready from day one. By adopting global GS1 standards, you ensure your brand is recognized and accepted in international markets without any compliance hurdles.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
