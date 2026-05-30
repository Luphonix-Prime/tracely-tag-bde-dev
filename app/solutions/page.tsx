import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Industry Solutions | TracelyTag',
    description: 'Tailored traceability and authentication solutions for Pharmaceuticals, Luxury Goods, FMCG, and Automotive industries.',
};

const industries = [
    {
        title: 'Retail & Online Marketplaces',
        description: 'From sellers to consumers - empowering the entire retail journey with verifiable product information and inventory visibility.',
        href: '/solutions/retail',
        image: '/images/retail-icon.svg',
        color: 'text-orange-600',
        borderColor: 'hover:border-orange-500/50',
        bgHover: 'group-hover:bg-orange-50',
        iconBg: 'bg-orange-100 text-orange-700',
    },
    {
        title: 'Food & Agriculture',
        description: 'Strengthening India’s food supply chain with GS1 Standards for FSSAI compliance, pesticide traceability, and farm-to-fork visibility.',
        href: '/solutions/food-agriculture',
        image: '/images/fmcg-icon.svg',
        color: 'text-green-600',
        borderColor: 'hover:border-green-500/50',
        bgHover: 'group-hover:bg-green-50',
        iconBg: 'bg-green-100 text-green-700',
    },
    {
        title: 'Defence',
        description: 'Facilitating traceability & data management in defence supply chains for asset management, ammunition tracking, and effective recalls.',
        href: '/solutions/defence',
        image: '/images/defence-icon.svg',
        color: 'text-indigo-600',
        borderColor: 'hover:border-indigo-500/50',
        bgHover: 'group-hover:bg-indigo-50',
        iconBg: 'bg-indigo-100 text-indigo-700',
    },
    {
        title: 'Healthcare',
        description: 'Enhancing Patient Safety & Supply Chain Efficiency. Compliant with ROHINI, unique identification for drugs, and medical devices.',
        href: '/solutions/healthcare',
        image: '/images/pharma-icon.svg',
        color: 'text-teal-600',
        borderColor: 'hover:border-teal-500/50',
        bgHover: 'group-hover:bg-teal-50',
        iconBg: 'bg-teal-100 text-teal-700',
    },
    {
        title: 'Construction',
        description: 'Enabling building material traceability for digitisation, better procurement, and data-driven decision making.',
        href: '/solutions/construction',
        image: '/images/construction-icon.svg',
        color: 'text-amber-600',
        borderColor: 'hover:border-amber-500/50',
        bgHover: 'group-hover:bg-amber-50',
        iconBg: 'bg-amber-100 text-amber-700',
    },
    {
        title: 'MSME',
        description: 'Supporting the development of micro enterprises to boost sales, market reach, and access to reimbursement schemes.',
        href: '/solutions/msme',
        image: '/images/msme-icon.svg',
        color: 'text-pink-600',
        borderColor: 'hover:border-pink-500/50',
        bgHover: 'group-hover:bg-pink-50',
        iconBg: 'bg-pink-100 text-pink-700',
    },
    {
        title: 'Transport & Logistics',
        description: 'Building a resilient supply chain through standardised logistics, FASTag integration, and improved visibility.',
        href: '/solutions/transport',
        image: '/images/auto-icon.svg',
        color: 'text-blue-600',
        borderColor: 'hover:border-blue-500/50',
        bgHover: 'group-hover:bg-blue-50',
        iconBg: 'bg-blue-100 text-blue-700',
    },
];

export default function SolutionsPage() {
    return (
        <main className="bg-secondary-50 min-h-screen pt-32 pb-20">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-500 text-sm font-medium uppercase tracking-widest mb-4 block">
                        Industries
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-900 mb-6">
                        Solutions Built for Your Sector
                    </h1>
                    <p className="text-xl text-secondary-600 leading-relaxed">
                        Every industry faces unique challenges. Our platform is architected to meet specific regulatory and operational demands.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {industries.map((industry) => (
                        <Link
                            key={industry.title}
                            href={industry.href}
                            className={`group relative bg-white border border-secondary-200 rounded-2xl p-8 transition-all duration-300 ${industry.borderColor} hover:shadow-xl overflow-hidden`}
                        >
                            <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${industry.bgHover}`} />

                            <div className="relative z-10 flex items-start justify-between">
                                <div>
                                    <h3 className={`text-2xl font-bold text-primary-900 mb-3 group-hover:${industry.color} transition-colors`}>
                                        {industry.title}
                                    </h3>
                                    <p className="text-secondary-600 text-lg leading-relaxed max-w-md">
                                        {industry.description}
                                    </p>
                                </div>
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${industry.iconBg}`}>
                                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </main>
    );
}
