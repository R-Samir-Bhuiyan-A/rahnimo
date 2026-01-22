// import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import ThemeProvider from "../wrapper/ThemeProvider"
import LenisProvider from "../wrapper/LenisProvider"
import QueryProvider from "../wrapper/QueryProvider"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
    default: "Rahnimo",
    template: "%s | Rahnimo",
  },
  description: "Wellcome to interior Studio",
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
          <LenisProvider>
            <QueryProvider>
              <Navbar />
              {children}
              <Footer />
            </QueryProvider>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
