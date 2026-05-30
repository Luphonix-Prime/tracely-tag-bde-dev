'use client';

import React from 'react';
import Container from './ui/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';

const metrics = [
    { value: '10M+', label: 'Products Digitized' },
    { value: '50+', label: 'Enterprise Partners' },
    { value: '100%', label: 'GS1 Compliant' },
];

export default function SocialProof() {
    return (
        <section className="py-20 bg-white border-y border-secondary-200 text-primary-900">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left: Headline & Trust */}
                    <div className="md:w-1/3">
                        <motion.h4
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold font-display text-primary-900 mb-2"
                        >
                            Trusted by Global Leaders
                        </motion.h4>
                        <p className="text-secondary-600 text-sm">
                            Powering supply chains across Pharma, Luxury, and FMCG.
                        </p>
                    </div>

                    {/* Right: Metrics */}
                    <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center md:text-left"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-1 font-display">
                                    {metric.value}
                                </div>
                                <div className="text-secondary-600 text-xs font-medium uppercase tracking-wide">
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Logo Strip (Placeholder) */}
                <div className="mt-12 pt-8 border-t border-secondary-100">
                    <p className="text-center text-secondary-500 text-sm mb-6">Partnering with industry standards</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
                        <div className="text-xl font-bold font-display text-primary-900/40 hover:text-primary-900/80 transition-colors">GS1 Member</div>
                        <div className="text-xl font-bold font-display text-primary-900/40 hover:text-primary-900/80 transition-colors">ISO 9001</div>
                        <div className="text-xl font-bold font-display text-primary-900/40 hover:text-primary-900/80 transition-colors">FDA Compliant</div>
                        <div className="text-xl font-bold font-display text-primary-900/40 hover:text-primary-900/80 transition-colors">SOC2 Type II</div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
