import React from 'react';
import TeamClient from './TeamClient';
import { getPageContent } from "@/lib/ai-optimized-content";

const pageData = getPageContent('team');

export const metadata = {
  title: pageData.title,
  description: "Meet our team of interior design professionals in Bangladesh. Learn about their expertise, specializations, and design approaches in creating beautiful spaces.",
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: "Meet our team of interior design professionals in Bangladesh. Learn about their expertise, specializations, and design approaches in creating beautiful spaces.",
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
    description: "Meet our interior design professionals in Bangladesh.",
  },
  alternates: {
    canonical: "https://rahnimo.com/team",
  },
};

const Team = () => {
    return (
        <>
            <h1 className="sr-only">Interior Design Professionals in Bangladesh | Rahnimo Creative Team</h1>
            <TeamClient />
        </>
    )
};

export default Team;