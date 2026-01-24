import React from 'react';
import WorkClient from './WorkClient';
import { getPageContent } from "@/lib/ai-optimized-content";

const pageData = getPageContent('work');

export const metadata = {
  title: pageData.title,
  description: pageData.description,
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: pageData.description,
    type: "website",
    url: "https://rahnimo.com/work",
    images: [
      {
        url: "/og-work.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design Portfolio - Rahnimo Studio Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: pageData.description,
  },
  alternates: {
    canonical: "https://rahnimo.com/work",
  },
};

const Work = () => {
    return <WorkClient />
};

export default Work;