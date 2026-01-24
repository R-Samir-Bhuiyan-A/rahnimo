import React from 'react';
import AboutClient from './AboutClient';
import { getPageContent } from "@/lib/ai-optimized-content";

const pageData = getPageContent('about');

export const metadata = {
  title: pageData.title,
  description: "Meet our professional interior design team in Bangladesh. Learn about our expertise, design philosophy, and commitment to creating beautiful, functional spaces.",
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: "Meet our professional interior design team in Bangladesh. Learn about our expertise, design philosophy, and commitment to creating beautiful, functional spaces.",
    type: "website",
    url: "https://rahnimo.com/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Interior Design Team - Rahnimo Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: "Meet our professional interior design team in Bangladesh.",
  },
  alternates: {
    canonical: "https://rahnimo.com/about",
  },
};

const About = () => {
    return (
        <>
            <h1 className="sr-only">Professional Interior Design Team in Bangladesh | Rahnimo Studio</h1>
            <AboutClient />
        </>
    )
};

export default About;