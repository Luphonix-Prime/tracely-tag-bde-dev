'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if this is the first load in the session
        const hasLoaded = sessionStorage.getItem('hasLoaded');

        if (hasLoaded) {
            // eslint-disable-next-line
            setLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('hasLoaded', 'true');
        }, 2000); // Shorter duration for a snappy feel

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-64 h-auto"
                    >
                        <Image
                            src="/images/tracely-tag-logo.png"
                            alt="TracelyTag Logo"
                            width={300}
                            height={80}
                            className="object-contain"
                            priority
                        />
                    </motion.div>

                    {/* Minimalist Spinner */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8"
                    >
                        <div className="w-6 h-6 border-2 border-secondary-100 border-t-primary-600 rounded-full animate-spin" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
