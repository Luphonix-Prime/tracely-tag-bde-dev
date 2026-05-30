'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/solutions', label: 'Solutions' },
        { href: '/platform', label: 'Platform' }, // Added Platform explicitly
        { href: '/about', label: 'About' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
            >
                {/* Floating Island Container */}
                <div
                    className={cn(
                        "relative flex items-center justify-between px-6 py-3 transition-all duration-500 ease-spring",
                        "bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl shadow-primary-900/5",
                        "w-full max-w-5xl rounded-2xl md:rounded-full",
                        isScrolled ? "bg-white/90 shadow-2xl shadow-primary-900/10" : "bg-white/60"
                    )}
                >
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center group relative z-10 pr-8">
                        <div className="relative w-32 h-8 transition-transform group-hover:scale-105">
                            <Image
                                src="/images/tracely-tag-logo.png"
                                alt="TracelyTag"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 relative z-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden",
                                    pathname === link.href ? "text-primary-900 font-bold bg-secondary-100/50" : "text-secondary-600 hover:text-primary-900 hover:font-semibold"
                                )}
                            >
                                <span className="relative z-10">{link.label}</span>
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-white shadow-sm border border-secondary-100 rounded-full"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        style={{ zIndex: 0 }}
                                    />
                                )}
                                {/* Background hover effect (subtle) */}
                                <div className="absolute inset-0 bg-secondary-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center space-x-4 pl-8 relative z-10">
                        <Link
                            href="/contact"
                            className="bg-primary-900 text-white hover:bg-accent-600 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-full bg-secondary-50 text-secondary-800 hover:bg-secondary-100 transition-colors relative z-10 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - "Sheet" Style */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-32 px-6"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-display font-medium text-primary-900 block border-b border-secondary-100 pb-4"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="pt-8"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full block text-center bg-primary-900 text-white py-4 rounded-xl text-lg font-bold shadow-xl"
                                >
                                    Start Now
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
