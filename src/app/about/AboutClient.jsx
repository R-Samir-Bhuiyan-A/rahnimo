"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutClient = () => {
  return (
    <section className="w-full bg-background text-foreground">

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
            <div className="w-20 h-[3px] bg-foreground" />
            <h5 className="uppercase tracking-[0.25em] font-semibold text-sm text-muted-foreground">
              About Studio Rahnimo
            </h5>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            A multidisciplinary  <br className="hidden md:block" /> design practice.
          </h2>

          <p className="text-lg font-medium text-muted-foreground border-t border-border pt-6">
            Rahnimo is built on clarity, craft, and culture.
            We design for impact today, relevance tomorrow, and meaning that lasts.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-muted-foreground leading-relaxed"
        >
          <p>
            We believe every space, brand, and object carries a story. At Rahnimo, design is not decoration—it is strategy, emotion, and experience woven together.

            We work across Interior Architecture, Furniture Design, Brand Identity, Graphic Design, and Digital Experiences, shaping environments and brands that feel intentional, timeless, and human.
          </p>

          <p>
            Our process begins with understanding—how a space is used, how a brand speaks, and how people move, feel, and connect. Beyond measurements, materials, and visuals, we study behavior, culture, and purpose.
          </p>

          <p className="border-t border-border pt-6">
            Interior Architecture & Spatial Design
            Custom Furniture Design
            Brand Identity & Visual Systems
            Graphic Design & Environmental Graphics
            Website & Digital Design

            Each project is treated as a complete narrative—where form, function, and identity align seamlessly.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutClient;
