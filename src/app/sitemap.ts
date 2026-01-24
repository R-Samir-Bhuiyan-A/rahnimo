import { getAllServiceableCities } from '@/lib/geo-utils';

export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rahnimo.com';
    const serviceableCities = getAllServiceableCities();

    // Base pages - prioritizing AI crawling optimization
    const basePages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const, // Increased frequency for AI crawlers
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const, // Increased frequency
            priority: 0.95,
        },
        {
            url: `${baseUrl}/work`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const, // High frequency for portfolio updates
            priority: 0.95,
        },
        {
            url: `${baseUrl}/team`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const, // Daily for fresh content
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`, // Potential blog section for fresh content
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/interior-design-guide`, // Educational content
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
    ];

    // Add location-specific pages for serviceable cities in Bangladesh
    const locationPages = serviceableCities.map(city => ({
        url: `${baseUrl}/locations/${city.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const, // Increased frequency for local SEO
        priority: 0.75,
    }));

    // Add service-specific pages for AI optimization
    const servicePages = [
        `${baseUrl}/services/interior-design`,
        `${baseUrl}/services/residential-design`,
        `${baseUrl}/services/commercial-design`,
        `${baseUrl}/services/consultation`,
        `${baseUrl}/services/renovation`,
        `${baseUrl}/services/furniture-selection`,
        `${baseUrl}/services/color-consultation`,
        `${baseUrl}/services/space-planning`,
        `${baseUrl}/services/lighting-design`,
        `${baseUrl}/services/project-management`,
    ].map(url => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Combine all pages
    const allPages = [...basePages, ...locationPages, ...servicePages];

    return allPages;
}
