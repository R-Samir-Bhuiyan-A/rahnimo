"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from 'next/image';


const Footer = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          alert("Subscribed successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to subscribe.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <footer className="bg-secondary py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-secondary-foreground">

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 text-center sm:text-left">

          {/* Logo & Social */}
          <div className="flex flex-col items-center sm:items-start">
            <Image src="/logo2.svg" width={80} height={80} alt="Logo" className="" />
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/rahnimodesigns" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={28} className="text-blue-500 cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle size={30} className="text-[#1c9ae8] cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/rahnimodesigns/" target="_blank" rel="noopener noreferrer">
                <FiInstagram size={28} className="text-[#ff3347] cursor-pointer" />
              </a>
            </div>
            {/* <p className="mt-2 text-sm text-muted-foreground">Best price guarantee</p> */}
            <Image
              src="/BEST PRICS SVG.svg"
              width={100}
              height={100}
              alt="Best Price Guarantee"
              className="mt-2 sm:w-[30%] w-[50%]"
            />
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Contact Us</h4>
            <p className="text-sm text-muted-foreground">
              Email: rahnimodesigns@gmail.com <br />
              Mobile: +8801976761030
            </p>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Subscribe</h4>
            <form ref={formRef} onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white py-2 rounded transition-colors"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
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
