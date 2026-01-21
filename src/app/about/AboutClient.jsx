"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutClient = () => {
  return (
    <section className="w-full bg-white text-gray-900">

      {/* HERO VIDEO */}
      <div className="relative overflow-hidden">
        <video
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[45vh] md:h-[65vh] object-cover"
        >
          <source src="/about_video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-center px-4"
          >
            Designing Meaningful Experiences
          </motion.h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="space-y-2">
            <div className="w-20 h-[3px] bg-black" />
            <h5 className="uppercase tracking-[0.25em] font-semibold text-sm text-gray-700">
              About Studio Rahnimo
            </h5>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            We design <br className="hidden md:block" /> experiences.
          </h2>

          <p className="text-lg font-medium text-gray-700 border-t pt-6">
            We made our name rethinking the impact workplace has on work,
            but today our reach extends far beyond the physical environment.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-gray-600 leading-relaxed"
        >
          <p>
            Every client has a story. We treat each workspace as a powerful
            storytelling medium — discovering not only what teams need, but
            who they are and how they work.
          </p>

          <p>
            This mindset shapes every service we deliver: interiors,
            branding, environmental graphics, tenant improvements, and
            strategic design consulting.
          </p>

          <p className="border-t pt-6">
            We’re inspired by what’s happening in the design world —
            and proud to help set its direction.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutClient;
