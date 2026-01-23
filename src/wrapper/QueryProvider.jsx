"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ENABLE_LOADING_VIDEO = false; // 👈 toggle here

const QueryProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        refetchOnWindowFocus: true,
      },
    },
  }));
  const [closing, setClosing] = useState(false);
  const [hidden, setHidden] = useState(!ENABLE_LOADING_VIDEO);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleVideoEnd = () => {
    setClosing(true);
    setTimeout(() => setHidden(true), 1200);
  };

  if (ENABLE_LOADING_VIDEO && !hidden) {
    return (
      <div
        className={`fixed inset-0 z-50 bg-black overflow-hidden transition-transform duration-[1500ms] ease-in-out
        ${closing ? "-translate-y-full" : "translate-y-0"}`}
      >
        <video
          src="/banner_video_2.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
