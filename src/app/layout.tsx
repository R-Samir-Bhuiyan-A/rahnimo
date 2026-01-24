import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import ThemeProvider from "../wrapper/ThemeProvider"
import LenisProvider from "../wrapper/LenisProvider"
import QueryProvider from "../wrapper/QueryProvider"
import TransitionProvider from "../wrapper/TransitionProvider"
import GeoLocationProvider from "../wrapper/GeoLocationProvider"
import AICrawlingOptimizer from "../components/seo/AICrawlingOptimizer";
import AIContentSuggestions from "../components/seo/AIContentSuggestions";
import { AnimationProvider } from "../context/AnimationContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rahnimo.com'),
  title: {
    default: "Rahnimo | Premium Interior Design Studio in Bangladesh | Transform Your Space",
    template: "%s | Rahnimo Interior Design Studio in Bangladesh",
  },
  description: "Rahnimo is a premium interior design studio in Bangladesh specializing in luxury residential and commercial spaces. Our award-winning designers create stunning, functional environments.",
  keywords: [
    "interior design Bangladesh",
    "interior designer Bangladesh",
    "home design Bangladesh",
    "commercial design Bangladesh",
    "luxury interiors Bangladesh",
    "residential design Bangladesh",
    "space planning Bangladesh",
    "furniture design Bangladesh",
    "architecture Bangladesh",
    "design services Bangladesh",
    "Bangladesh interior design",
    "Dhaka interior design",
    "Chittagong interior design",
    "Khulna interior design",
    "renovation Bangladesh",
    "decorating Bangladesh",
    "modern design Bangladesh",
    "contemporary design Bangladesh",
    "minimalist design Bangladesh"
  ],
  authors: [{ name: "Rahnimo Interior Design Studio", url: "https://rahnimo.com" }],
  creator: "Rahnimo",
  publisher: "Rahnimo Interior Design Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahnimo.com",
    title: "Rahnimo | Premium Interior Design Studio in Bangladesh | Transform Your Space",
    description: "Rahnimo is a premium interior design studio in Bangladesh specializing in luxury residential and commercial spaces. Our award-winning designers create stunning, functional environments.",
    siteName: "Rahnimo Interior Design Studio in Bangladesh",
    images: [
      {
        url: "/og-image.jpg", // You should create an optimized OG image
        width: 1200,
        height: 630,
        alt: "Rahnimo Interior Design Studio in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahnimo | Premium Interior Design Studio in Bangladesh",
    description: "Transform your space with our award-winning interior design services in Bangladesh.",
    images: ["/og-image.jpg"], // You should create an optimized Twitter image
    creator: "@rahnimodesign",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://rahnimo.com",
    languages: {
      'en-US': '/en',
      'en-GB': '/en-GB',
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION || '',
    yandex: process.env.YANDEX_VERIFICATION || '',
    yahoo: process.env.YAHOO_VERIFICATION || '',
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/favicon-32x32.png",
    }
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var localTheme = localStorage.getItem('theme');
                var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                if (!localTheme && supportDarkMode) {
                  document.documentElement.classList.add('dark');
                } else if (localTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            })();
          `}
        </Script>
        <ThemeProvider>
          <AnimationProvider>
            <LenisProvider>
              <QueryProvider>
                <GeoLocationProvider>
                  <AICrawlingOptimizer />
                  <AIContentSuggestions />
                  <Navbar />
                  <main>
                    <TransitionProvider>
                      {children}
                    </TransitionProvider>
                  </main>
                  <Footer />
                </GeoLocationProvider>
              </QueryProvider>
            </LenisProvider>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
