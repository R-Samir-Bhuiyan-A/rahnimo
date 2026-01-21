"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,          // scroll smoothness
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
