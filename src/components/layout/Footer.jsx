"use client";
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 text-center sm:text-left">

          {/* Logo & Social */}
          <div className="flex flex-col items-center sm:items-start">
            <Image src="/logo2.svg" width={50} height={50} alt="Logo" />
            <div className="flex gap-4 mt-4">
              <FaFacebook size={28} className="text-blue-500 cursor-pointer" />
              <AiFillTwitterCircle size={30} className="text-[#1c9ae8] cursor-pointer" />
              <FiInstagram size={28} className="text-[#ff3347] cursor-pointer" />
            </div>
            <p className="mt-2 text-sm opacity-70">Best price guarantee</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact Us</h4>
            <p className="text-sm opacity-80">
              email: eng.tuhin77@gmail.com <br />
              mobile: +8801711111111
            </p>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-3">Subscribe</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-400 pt-4 text-center text-sm opacity-70">
          © 2026 RAHNIMO. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
