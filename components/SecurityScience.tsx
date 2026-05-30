'use client';

import React from 'react';
import Container from './ui/Container';
import { motion } from 'framer-motion';

const layers = [
    {
        id: '01',
        title: 'Physical Identity | Unique DNA',
        description: 'We assign a biological-grade unique identity to every material—be it plastics, coatings, inks, paperboard, or fabrics. This is the physical foundation that cannot be cloned.'
    },
    {
        id: '02',
        title: 'Overt & Covert Security Matrix',
        description: 'A fusion of visible and invisible security pigments. While overt features allow for quick checks, our hidden \'covert\' layers provide forensic-level authentication.'
    },
    {
        id: '03',
        title: 'AI-Driven Encrypted QR Codes',
        description: 'We grant a unique "Digital Life" to every single unit. These codes are not mere data points; they are secured by AI-driven algorithms to be tamper proof.'
    },
    {
        id: '04',
        title: 'The Activation Lens',
        description: 'Every code remains \'Passive\' and unverified until it passes through our proprietary activation lens during the supply chain journey. Outside this lens, the code is useless.'
    },
    {
        id: '05',
        title: 'Non-Reproducible Cryptography',
        description: 'Our system ensures a zero-reproduction guarantee. Each code is generated via a one-way cryptographic journey—even we cannot reproduce the same code twice.'
    },
    {
        id: '06',
        title: 'Visual Cryptography (Invisible Signatures)',
        description: 'Unique signatures are embedded directly into your packaging. They remain invisible to the naked eye and can only be authenticated via the TracelyTag Verified App.'
    },
    {
        id: '07',
        title: 'Actionable Intelligence | Zero CAPEX',
        description: 'The final layer turns data into decisions. Monitor your supply chain in real time with zero investment in new hardware or production modifications.'
    }
];

export default function SecurityScience() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary-400 font-bold tracking-wider uppercase mb-4 text-sm"
                        >
                            The Science of Invisible Security
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold font-display text-white mb-8 leading-tight"
                        >
                            World’s Most Advanced <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                                7-Layer Authentication
                            </span>
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-300 text-lg mb-12 leading-relaxed"
                        >
                            Protect your brand with a unique &apos;DNA&apos; that counterfeiters cannot decode. Our proprietary framework is an unbreakable fusion of digital and physical security.
                        </motion.p>

                        <div className="space-y-10">
                            {/* Feature 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-primary-900/50 border border-primary-500/30 flex items-center justify-center text-primary-400 text-sm mr-3">01</span>
                                    Unique Product DNA
                                </h4>
                                <p className="text-slate-400 leading-relaxed pl-11">
                                    We assign a biological-grade unique identity to every material. To ensure maximum protection, our specific security 'recipe' remains confidential.
                                </p>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-accent-900/50 border border-accent-500/30 flex items-center justify-center text-accent-400 text-sm mr-3">02</span>
                                    AI-Driven Encrypted QR Codes
                                </h4>
                                <p className="text-slate-400 leading-relaxed pl-11">
                                    Every code remains 'Passive' until it passes through our proprietary activation lens. Outside this lens, the code is useless to counterfeiters.
                                </p>
                            </motion.div>

                            {/* Feature 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm mr-3">03</span>
                                    Visual Cryptography
                                </h4>
                                <p className="text-slate-400 leading-relaxed pl-11">
                                    Embed unique signatures directly into your packaging that are invisible to the naked eye. Zero CAPEX solution that integrates with your existing lines.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: The 7 Layers List */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm"
                    >
                        <h4 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">The 7-Layer Fortress</h4>
                        <div className="space-y-6">
                            {layers.map((layer, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="flex items-start group"
                                >
                                    <div className="mr-4 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-primary-500 group-hover:shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)] transition-all" />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-semibold text-sm mb-1 group-hover:text-primary-400 transition-colors">
                                            <span className="text-slate-500 mr-2 font-mono text-xs">L{layer.id}</span>
                                            {layer.title}
                                        </h5>
                                        <p className="text-slate-400 text-xs leading-relaxed">
                                            {layer.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
