// import type { Metadata } from "next";
import {Montserrat} from "next/font/google"
import "./globals.css";
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
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
        <LenisProvider>
          <QueryProvider>
            <Navbar />
            {children}
            <Footer />
          </QueryProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
