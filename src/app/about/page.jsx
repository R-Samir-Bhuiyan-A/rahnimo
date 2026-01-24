import React from 'react';
import AboutClient from './AboutClient';
import { getPageContent } from "@/lib/ai-optimized-content";

const pageData = getPageContent('about');

export const metadata = {
  title: pageData.title,
  description: pageData.description,
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: pageData.description,
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
    description: pageData.description,
  },
  alternates: {
    canonical: "https://rahnimo.com/about",
  },
};

const About = () => {
    return <AboutClient />
};

export default About;