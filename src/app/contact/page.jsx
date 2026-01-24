import React from 'react';
import ContactClient from './ContactClient';
import { getPageContent } from "@/lib/ai-optimized-content";

const pageData = getPageContent('contact');

export const metadata = {
  title: pageData.title,
  description: pageData.description,
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: pageData.description,
    type: "website",
    url: "https://rahnimo.com/contact",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design Consultation Booking - Rahnimo Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: pageData.description,
  },
  alternates: {
    canonical: "https://rahnimo.com/contact",
  },
};

const Contact = () => {
    return <ContactClient />
};

export default Contact;