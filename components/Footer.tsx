import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './ui/Container';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/platform', label: 'Services' }, // Corrected link
    ];

    const serviceLinks = [
        { href: '/solutions/retail', label: 'Retail & Marketplaces' },
        { href: '/solutions/food-agriculture', label: 'Food & Agriculture' },
        { href: '/solutions/defence', label: 'Defence' },
        { href: '/solutions/healthcare', label: 'Healthcare' },
        { href: '/solutions/construction', label: 'Construction' },
        { href: '/solutions/msme', label: 'MSME' },
        { href: '/solutions/transport', label: 'Transport & Logistics' },
    ];

    return (
        <footer className="bg-white border-t border-secondary-200 pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="relative w-40 h-10 mb-6">
                            <Image
                                src="/images/tracely-tag-logo.png" // Using the primary colored logo for light theme
                                alt="TracelyTag Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-secondary-600 mb-8 max-w-sm leading-relaxed text-sm">
                            Digital Identity For Every Product. Enable product transparency and authenticity with TracelyTag's GS1-compliant smart tagging platform.
                        </p>
                        <div className="flex items-center space-x-2 text-secondary-500 text-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>Systems Operational</span>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-primary-900 font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-secondary-500 hover:text-accent-600 transition-colors text-sm font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 - Spans wider to accommodate 2 columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-primary-900 font-bold mb-6 text-sm uppercase tracking-wider">Solutions</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-secondary-500 hover:text-accent-600 transition-colors text-sm font-medium whitespace-nowrap"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-secondary-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-secondary-400 text-xs">
                        © {currentYear} TracelyTag. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-secondary-400 hover:text-primary-900 transition-colors">
                            <span className="sr-only">X (formerly Twitter)</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                        </a>
                        <a href="#" className="text-secondary-400 hover:text-primary-900 transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
