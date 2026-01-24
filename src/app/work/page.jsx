import React from 'react';
import WorkClient from './WorkClient';
import { getPageContent } from "@/lib/ai-optimized-content";

const pageData = getPageContent('work');

export const metadata = {
  title: pageData.title,
  description: "Explore our interior design portfolio featuring completed projects across Bangladesh. See our work in residential and commercial spaces with before and after transformations.",
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: "Explore our interior design portfolio featuring completed projects across Bangladesh. See our work in residential and commercial spaces with before and after transformations.",
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
    description: "Explore our interior design portfolio in Bangladesh.",
  },
  alternates: {
    canonical: "https://rahnimo.com/work",
  },
};

const Work = () => {
    return (
        <>
            <h1 className="sr-only">Interior Design Portfolio in Bangladesh | Rahnimo Studio Projects</h1>
            <WorkClient />
        </>
    )
};

export default Work;