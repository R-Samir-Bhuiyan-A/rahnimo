// "use client";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const QueryProvider = ({ children }) => {
//   const queryClient = new QueryClient();

//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//     </QueryClientProvider>
//   );
// };

// export default QueryProvider;


 "use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const QueryProvider = ({ children }) => {
  const queryClient = new QueryClient();
  const [closing, setClosing] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleVideoEnd = () => {
    setClosing(true);                 // curtain up animation start
    setTimeout(() => setHidden(true), 1200); // animation শেষ হলে hide
  };

  if (!hidden) {
    return (
      <div
        className={`fixed inset-0 z-50 bg-black overflow-hidden transition-transform duration-1500 ease-in-out
        ${closing ? "-translate-y-full" : "translate-y-0"}`}
      >
        <video
          src="/banner_video_2.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          // className="w-full h-full object-contain md:object-cover"
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