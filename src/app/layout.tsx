// import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import ThemeProvider from "../wrapper/ThemeProvider"
import LenisProvider from "../wrapper/LenisProvider"
import QueryProvider from "../wrapper/QueryProvider"
import TransitionProvider from "../wrapper/TransitionProvider"
import { AnimationProvider } from "../context/AnimationContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
    default: "Rahnimo",
    template: "%s | Rahnimo",
  },
  description: "Welcome to interior Studio",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
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
                <Navbar />
                <TransitionProvider>
                  {children}
                </TransitionProvider>
                <Footer />
              </QueryProvider>
            </LenisProvider>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
