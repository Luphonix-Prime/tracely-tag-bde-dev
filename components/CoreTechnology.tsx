'use client';

import React from 'react';
import Container from './ui/Container';
import { motion } from 'framer-motion';

const coreFeatures = [
    {
        title: 'Secure Digital IDs',
        subtitle: 'One product. One unique digital identity.',
        description: 'Every product is assigned a tamper-proof digital ID using secure QR / DataMatrix (and optional NFC or RFID. This ID cannot be duplicated, copied, or reused — ensuring every item is uniquely identifiable and verifiable across the supply chain.',
        icon: (
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4h-4v-4H8m13-9v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2m-3-2v2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        )
    },
    {
        title: 'The Logic Cloud',
        subtitle: 'Real-time intelligence for your entire supply chain.',
        description: 'Our cloud platform continuously tracks product movement from factory to retail. Detect suspicious activity, identify diversion or duplication, monitor inventory flow, and generate actionable insights — all in real time.',
        icon: (
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        )
    },
    {
        title: 'Consumer Bridge',
        subtitle: 'Turn authentication into engagement.',
        description: 'With a single scan, consumers can instantly verify product authenticity, view origin details, and interact with your brand. Convert trust into loyalty through offers, rewards, and direct communication — powered by verified data.',
        icon: (
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    }
];

export default function CoreTechnology() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />

            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-accent-600 font-bold tracking-wider uppercase mb-4 text-sm">The TracelyTag Ecosystem</h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-display text-primary-900 mb-6">THE CORE TECHNOLOGY</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coreFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl border border-secondary-100 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-primary-900 mb-2">{feature.title}</h4>
                            <p className="text-sm font-semibold text-accent-600 mb-4">{feature.subtitle}</p>
                            <p className="text-secondary-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
