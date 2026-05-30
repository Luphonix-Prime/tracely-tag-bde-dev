'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from './ui/Container';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-36 md:pt-44 overflow-hidden bg-gradient-to-b from-primary-50 to-white border-b border-primary-100">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl filter opacity-50 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-100/60 rounded-full blur-3xl filter opacity-60 animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] bg-[size:30px_30px]" />
            </div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left lg:order-last"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-900 leading-tight mb-6">
                            Absolute Visibility. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                                From Factory to Fingertip.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-secondary-600 mb-8 leading-relaxed max-w-lg">
                            The enterprise-grade traceability platform for authenticating products, securing supply chains, and connecting with consumers in real-time.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-primary-800 hover:bg-primary-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                            >
                                Start Tracing
                            </Link>
                            <Link
                                href="/demo"
                                className="w-full sm:w-auto px-8 py-4 bg-white border border-secondary-200 hover:border-primary-500 text-secondary-700 hover:text-primary-800 font-semibold rounded-lg transition-all duration-300 group flex items-center justify-center shadow-sm hover:shadow"
                            >
                                <svg className="w-5 h-5 mr-2 text-accent-600 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Watch Demo
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-secondary-200 bg-white group hover:shadow-3xl transition-shadow duration-500">
                            <Image
                                src="/images/hero-dashboard-v2.png"
                                alt="TracelyTag Supply Chain Intelligence Dashboard"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                                priority
                            />
                            {/* Gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
