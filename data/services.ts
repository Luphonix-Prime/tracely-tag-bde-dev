export interface Service {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    benefits: string[];
    icon: string;
}

export const services: Service[] = [
    {
        id: '1',
        title: 'GS1-Smart Tags',
        slug: 'gs1-smart-tags',
        shortDescription: 'GS1-compliant QR codes that connect each product to real-time scan intelligence.',
        fullDescription: 'Our GS1-Smart Tags provide a globally recognized standard for product identification. Each tag contains unique, serialized data that enables real-time tracking, authentication, and consumer engagement. Built on GS1 standards, these tags ensure interoperability across supply chains worldwide.',
        features: [
            'GS1-compliant QR code generation',
            'Unique serialization for every product',
            'Real-time scan tracking and analytics',
            'Global supply chain compatibility',
            'Secure data encryption',
            'Mobile-friendly scanning',
        ],
        benefits: [
            'Ensure product authenticity',
            'Enable global traceability',
            'Improve supply chain visibility',
            'Enhance consumer trust',
            'Comply with international standards',
            'Reduce counterfeiting risks',
        ],
        icon: 'qrcode',
    },
    {
        id: '2',
        title: 'Consumer Verification',
        slug: 'consumer-verification',
        shortDescription: 'Enable customers to verify product authenticity with a simple scan.',
        fullDescription: 'Empower your customers to verify the authenticity of your products instantly. Our consumer verification system provides a seamless experience where customers can scan a QR code and immediately confirm they have a genuine product, building trust and loyalty.',
        features: [
            'One-scan product verification',
            'User-friendly mobile interface',
            'Instant authenticity confirmation',
            'Product information display',
            'Warranty registration',
            'Customer engagement portal',
        ],
        benefits: [
            'Build customer confidence',
            'Reduce counterfeit complaints',
            'Increase brand loyalty',
            'Gather customer insights',
            'Enable direct communication',
            'Enhance customer experience',
        ],
        icon: 'shield-check',
    },
    {
        id: '3',
        title: 'Track & Trace Solutions',
        slug: 'track-trace-solutions',
        shortDescription: 'Complete visibility of your products from production to delivery.',
        fullDescription: 'Gain complete visibility into your product journey with our comprehensive track and trace solutions. Monitor every step from manufacturing through distribution to final delivery, ensuring quality control and supply chain efficiency.',
        features: [
            'Real-time location tracking',
            'Supply chain event logging',
            'Batch and lot tracking',
            'Temperature and condition monitoring',
            'Automated alerts and notifications',
            'Comprehensive reporting dashboard',
        ],
        benefits: [
            'Improve supply chain efficiency',
            'Ensure product quality',
            'Enable rapid recall management',
            'Reduce losses and theft',
            'Optimize inventory management',
            'Meet regulatory requirements',
        ],
        icon: 'map-pin',
    },
    {
        id: '4',
        title: 'Serialization & Aggregation',
        slug: 'serialization-aggregation',
        shortDescription: 'Unique identification and hierarchical tracking for every product unit.',
        fullDescription: 'Implement comprehensive serialization and aggregation to track individual items and their relationships throughout the supply chain. Our solution creates a digital hierarchy from individual products to cases, pallets, and shipments.',
        features: [
            'Unit-level serialization',
            'Parent-child relationship tracking',
            'Automated aggregation processes',
            'Integration with production lines',
            'Real-time data synchronization',
            'Compliance with global regulations',
        ],
        benefits: [
            'Enable item-level tracking',
            'Improve recall precision',
            'Enhance supply chain visibility',
            'Meet regulatory compliance',
            'Reduce operational costs',
            'Streamline logistics operations',
        ],
        icon: 'layers',
    },
    {
        id: '5',
        title: 'Anti-Counterfeiting Solutions',
        slug: 'anti-counterfeiting-solutions',
        shortDescription: 'Protect your brand with advanced anti-counterfeiting technology.',
        fullDescription: 'Safeguard your brand reputation and revenue with our multi-layered anti-counterfeiting solutions. We combine secure QR codes, encryption, and real-time monitoring to detect and prevent counterfeit products from entering your supply chain.',
        features: [
            'Secure QR code technology',
            'Duplicate detection algorithms',
            'Real-time fraud alerts',
            'Geographic scanning analysis',
            'Tamper-evident features',
            'Blockchain integration options',
        ],
        benefits: [
            'Protect brand reputation',
            'Prevent revenue loss',
            'Ensure customer safety',
            'Reduce legal liabilities',
            'Gain market intelligence',
            'Build consumer trust',
        ],
        icon: 'lock',
    },
    {
        id: '6',
        title: 'Consumer Engagement Tools',
        slug: 'consumer-engagement-tools',
        shortDescription: 'Transform every scan into a meaningful customer interaction.',
        fullDescription: 'Turn product authentication into customer engagement opportunities. Our platform enables you to deliver personalized content, promotions, and experiences to customers when they scan your products, building lasting relationships.',
        features: [
            'Personalized content delivery',
            'Promotional campaigns',
            'Loyalty program integration',
            'Product usage instructions',
            'Customer feedback collection',
            'Social media integration',
        ],
        benefits: [
            'Increase customer engagement',
            'Drive repeat purchases',
            'Collect valuable insights',
            'Build brand community',
            'Enhance customer experience',
            'Boost marketing ROI',
        ],
        icon: 'users',
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return services.map((service) => service.slug);
}
