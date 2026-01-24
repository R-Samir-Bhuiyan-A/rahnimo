import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from 'next/image';
import NewsletterForm from '../newsletter/NewsletterForm';
import { Reveal } from '../animations/Reveal';


const Footer = () => {
  return (
    <footer className="bg-secondary py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-secondary-foreground">

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 text-center sm:text-left">

          {/* Logo & Social */}
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-4">
                <Image src="/logo2.svg" width={120} height={120} alt="Rahnimo Logo" className="" />
                <Image
                  src="/BEST PRICS SVG.svg"
                  width={140}
                  height={140}
                  alt="Best Price Guarantee Seal"
                  className="w-[100px]"
                />
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.2}>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Contact Us</h4>
              <p className="text-sm text-foreground">
                Email: rahnimodesigns@gmail.com <br />
                Mobile: +8801976761030
              </p>
            </div>
          </Reveal>

          {/* Subscribe */}
          <Reveal delay={0.3}>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Subscribe</h4>
              <NewsletterForm />
              <div className="flex gap-4 mt-6 justify-center">
                <a
                  href="https://www.facebook.com/rahnimodesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  <FaFacebook size={28} className="text-blue-500 cursor-pointer hover:scale-110 hover:text-blue-600 transition-all duration-300" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter page"
                >
                  <AiFillTwitterCircle size={30} className="text-[#1c9ae8] cursor-pointer hover:scale-110 hover:text-[#1689d0] transition-all duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/rahnimodesigns/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                >
                  <FiInstagram size={28} className="text-[#ff3347] cursor-pointer hover:scale-110 hover:text-[#e02e3f] transition-all duration-300" />
                </a>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-4 text-center text-sm text-foreground">
          © 2026 RAHNIMO. All rights reserved.
          <div className="mt-2 flex justify-center gap-4 text-xs text-foreground">
            <a href="/terms" className="hover:underline hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="/privacy" className="hover:underline hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
