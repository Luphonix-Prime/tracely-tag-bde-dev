'use client';

import React from 'react';
import Container from './ui/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
    { label: 'Lost to Counterfeiting', value: '$4.5T', sub: 'Globally' },
    { label: 'Revenue Leakage', value: '30%', sub: 'In Grey Markets' },
    { label: 'Real-time Data', value: '0%', sub: 'At Point of Sale' },
];

export default function ProblemSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary-50 to-transparent pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-accent-600 font-bold tracking-wider uppercase mb-4 text-sm"
                        >
                            The Silent Killers
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-primary-900 mb-6 leading-tight"
                        >
                            What You Can&apos;t See Is <br /> Costing You Millions
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-secondary-600 mb-6 leading-relaxed"
                        >
                            When your products move without visibility, losses move faster than revenue. Counterfeits slip in, genuine products leak into grey markets, and by the time issues surface, the damage is already done.
                            <br /><br />
                            Without item-level, real-time intelligence, brands don&apos;t lose control slowly — they lose it suddenly.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg"
                        >
                            <p className="text-red-800 font-semibold italic">
                                "If you can&apos;t see every product, you can&apos;t protect your brand."
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="p-6 rounded-lg bg-secondary-50 border border-secondary-100 hover:border-primary-200 transition-colors shadow-sm"
                                >
                                    <div className="text-3xl font-bold text-primary-800 mb-1">{stat.value}</div>
                                    <div className="text-primary-600 font-medium text-sm mb-1">{stat.label}</div>
                                    <div className="text-secondary-500 text-xs">{stat.sub}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract Representation of Broken Chain / Loss */}
                        <div className="aspect-square relative rounded-2xl overflow-hidden bg-secondary-50 border border-secondary-100 flex items-center justify-center group shadow-md">
                            <Image
                                src="/images/problem-broken-chain.png"
                                alt="Visualization of broken supply chain and data loss"
                                fill
                                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay for text legibility if needed, though image stands on its own */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
