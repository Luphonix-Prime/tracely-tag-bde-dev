'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import AnimatedSection from '@/components/AnimatedSection';


export default function ContactPage() {
    return (
        <div className="min-h-screen pt-20 flex flex-col bg-white">
            {/* Hero Section */}
            <section className="flex-grow py-12 md:py-20 bg-gradient-to-b from-secondary-50 to-white border-b border-primary-100 flex items-center">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-16">
                        <AnimatedSection className="text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display text-primary-900">
                                <span className="text-accent-600">Get in Touch</span>
                            </h1>
                            <p className="text-xl text-secondary-600 leading-relaxed max-w-2xl mx-auto">
                                Have a question, want a demo, or ready to start your authentication journey? The TracelyTag team is here to help.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                {/* Email */}
                                <div className="bg-white p-8 rounded-2xl border border-secondary-200 shadow-xl hover:shadow-2xl transition-all hover:border-accent-200 group">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 text-accent-600 border border-primary-100">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2 text-primary-900 group-hover:text-accent-600 transition-colors">Email Us</h3>
                                            <a href="mailto:info@tracelytag.com" className="text-secondary-600 hover:text-accent-600 transition-colors text-lg">
                                                info@tracelytag.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="bg-white p-8 rounded-2xl border border-secondary-200 shadow-xl hover:shadow-2xl transition-all hover:border-orange-200 group">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-500 border border-orange-100">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2 text-primary-900 group-hover:text-orange-500 transition-colors">Location</h3>
                                            <p className="text-secondary-600 text-lg">SNS Platina, Surat, IN</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="bg-white p-8 rounded-2xl border border-secondary-200 shadow-xl hover:shadow-2xl transition-all hover:border-blue-200 group">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-500 border border-blue-100">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2 text-primary-900 group-hover:text-blue-500 transition-colors">Business Hours</h3>
                                            <div className="space-y-1 text-secondary-600">
                                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social */}
                                <div className="bg-white p-8 rounded-2xl border border-secondary-200 shadow-xl hover:shadow-2xl transition-all hover:border-pink-200 group">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0 text-pink-500 border border-pink-100">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2 text-primary-900 group-hover:text-pink-500 transition-colors">Follow Us</h3>
                                            <a
                                                href="https://www.instagram.com/tracelytag/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-pink-500 hover:text-pink-600 transition-colors text-lg font-medium"
                                            >
                                                @tracelytag
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>
        </div>
    );
}
