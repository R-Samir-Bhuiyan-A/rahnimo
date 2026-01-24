export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/', '/node_modules/', '/.next/'],
                crawlDelay: 2, // Reduced crawl delay for better indexing
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/', '/node_modules/', '/.next/'],
                crawlDelay: 1, // Faster crawling for Google
            },
            {
                userAgent: 'Googlebot-News',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/', '/node_modules/', '/.next/'],
                crawlDelay: 1,
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/', '/node_modules/', '/.next/'],
                crawlDelay: 1,
            },
            {
                userAgent: 'Googlebot-Video',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/', '/node_modules/', '/.next/'],
                crawlDelay: 1,
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/', '/node_modules/', '/.next/'],
                crawlDelay: 2, // Reduced for better Bing indexing
            },
            {
                userAgent: 'Slurp',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/', '/node_modules/', '/.next/'],
                crawlDelay: 5, // Reduced for better Yahoo indexing
            },
            {
                userAgent: 'facebookexternalhit',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/', '/node_modules/', '/.next/'],
                crawlDelay: 1,
            },
            {
                userAgent: 'LinkedInBot',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/', '/node_modules/', '/.next/'],
                crawlDelay: 2,
            },
            {
                userAgent: 'Twitterbot',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/', '/node_modules/', '/.next/'],
                crawlDelay: 1,
            }
        ],
        sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://rahnimo.com'}/sitemap.xml`,
        host: process.env.NEXT_PUBLIC_SITE_URL || 'https://rahnimo.com',
    }
}
