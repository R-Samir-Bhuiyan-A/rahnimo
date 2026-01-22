"use client";
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-secondary py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-secondary-foreground">

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 text-center sm:text-left">

          {/* Logo & Social */}
          <div className="flex flex-col items-center sm:items-start">
            <Image src="/logo2.svg" width={80} height={80} alt="Logo" className="" />
            <div className="flex gap-4 mt-4">
              <FaFacebook size={28} className="text-blue-500 cursor-pointer" />
              <AiFillTwitterCircle size={30} className="text-[#1c9ae8] cursor-pointer" />
              <FiInstagram size={28} className="text-[#ff3347] cursor-pointer" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Best price guarantee</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Contact Us</h4>
            <p className="text-sm text-muted-foreground">
              email: rahnimodesigns@gmail.com <br />
              mobile: +8801976761030
            </p>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Subscribe</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
          © 2026 RAHNIMO. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
