import React from 'react';
import ContactClient from './ContactClient';
import { getPageContent } from "@/lib/ai-optimized-content";

const pageData = getPageContent('contact');

export const metadata = {
  title: pageData.title,
  description: "Book your interior design consultation in Bangladesh. Request a quote, schedule an appointment, or inquire about our design services for your space.",
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: "Book your interior design consultation in Bangladesh. Request a quote, schedule an appointment, or inquire about our design services for your space.",
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
    description: "Book your interior design consultation in Bangladesh.",
  },
  alternates: {
    canonical: "https://rahnimo.com/contact",
  },
};

const Contact = () => {
    return (
        <>
            <h1 className="sr-only">Interior Design Consultation in Bangladesh | Book with Rahnimo Studio</h1>
            <ContactClient />
        </>
    )
};

export default Contact;