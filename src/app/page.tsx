import HomePage from "../page/HomePage"
import { getPageContent } from "@/lib/ai-optimized-content";

const pageData = getPageContent('home');

export const metadata = {
  title: pageData.title,
  description: pageData.description,
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: pageData.description,
    type: "website",
    url: "https://rahnimo.com",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Interior Design Ideas - Rahnimo Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: pageData.description,
  },
  alternates: {
    canonical: "https://rahnimo.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300">
      <HomePage />
    </div>
  );
}
