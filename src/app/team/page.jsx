import React from 'react';
import TeamClient from './TeamClient';
import { getPageContent } from "@/lib/ai-optimized-content";

const pageData = getPageContent('team');

export const metadata = {
  title: pageData.title,
  description: pageData.description,
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: pageData.description,
    type: "website",
    url: "https://rahnimo.com/team",
    images: [
      {
        url: "/og-team.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design Professionals - Rahnimo Creative Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: pageData.description,
  },
  alternates: {
    canonical: "https://rahnimo.com/team",
  },
};

const Team = () => {
    return <TeamClient />
};

export default Team;