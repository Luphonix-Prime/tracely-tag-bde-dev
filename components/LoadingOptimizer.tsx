'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingOptimizer() {
    const pathname = usePathname();

    useEffect(() => {
        // Prefetch all main pages on initial load
        const pages = ['/', '/about', '/services', '/contact'];

        pages.forEach(page => {
            if (page !== pathname) {
                // Create a link element to trigger prefetch
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = page;
                document.head.appendChild(link);
            }
        });
    }, [pathname]);

    return null;
}
