import { Metadata } from 'next';

const siteConfig = {
    name: 'TracelyTag',
    description: 'Digital Identity For Every Product. Enable product transparency and authenticity with TracelyTag\'s GS1-compliant smart tagging platform.',
    url: 'https://tracelytag.com',
    ogImage: '/images/og-image.jpg',
    links: {
        instagram: 'https://www.instagram.com/tracelytag/',
    },
};

export function generateMetadata({
    title,
    description,
    image,
    url,
    type = 'website',
}: {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}): Metadata {
    const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
    const metaDescription = description || siteConfig.description;
    const metaImage = image || siteConfig.ogImage;
    const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;



    return {
        title: metaTitle,
        description: metaDescription,
        icons: {
            icon: '/images/logo-icon.png',
            shortcut: '/images/logo-icon.png',
            apple: '/images/logo-icon.png',
        },
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url: metaUrl,
            siteName: siteConfig.name,
            images: [
                {
                    url: metaImage,
                    width: 1200,
                    height: 630,
                    alt: metaTitle,
                },
            ],
            locale: 'en_US',
            type: type as any,
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: metaDescription,
            images: [metaImage],
        },
        alternates: {
            canonical: metaUrl,
        },
    };
}

export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo.png`,
        description: siteConfig.description,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Surat',
            addressCountry: 'IN',
        },
        sameAs: [siteConfig.links.instagram],
    };
}

export function generateWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
    };
}

export function generateArticleSchema({
    title,
    description,
    image,
    datePublished,
    dateModified,
    authorName,
    url,
}: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    authorName: string;
    url: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Person',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/images/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
    };
}

export { siteConfig };
