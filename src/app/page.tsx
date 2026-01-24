import HomePage from "../page/HomePage"
import { getPageContent } from "@/lib/ai-optimized-content";

const pageData = getPageContent('home');

export const metadata = {
  title: pageData.title,
  description: "Transform your space with Rahnimo's affordable interior design ideas and expert tips in Bangladesh. Discover budget-friendly solutions and creative inspiration.",
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: "Transform your space with Rahnimo's affordable interior design ideas and expert tips in Bangladesh. Discover budget-friendly solutions and creative inspiration.",
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
    description: "Transform your space with Rahnimo's affordable interior design ideas and expert tips in Bangladesh.",
  },
  alternates: {
    canonical: "https://rahnimo.com/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300">
      <h1 className="sr-only">Rahnimo | Premium Interior Design Studio in Bangladesh</h1>
      <HomePage />
    </div>
  );
}
