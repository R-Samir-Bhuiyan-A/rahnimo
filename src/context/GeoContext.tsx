'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { detectUserLocation, getLocalizedContent, isCityServiceable, getAllServiceableCities } from '../lib/geo-utils';

interface GeoContextType {
  userLocation: { country: string; city?: string; region?: string } | null;
  localizedContent: {
    title: string;
    description: string;
    keywords: string[];
  } | null;
  serviceableCities: string[];
  isLocationDetected: boolean;
  refreshLocation: () => Promise<void>;
}

const GeoContext = createContext<GeoContextType | undefined>(undefined);

export function GeoProvider({ children }: { children: ReactNode }) {
  const [userLocation, setUserLocation] = useState<{ country: string; city?: string; region?: string } | null>(null);
  const [localizedContent, setLocalizedContent] = useState<GeoContextType['localizedContent']>(null);
  const [isLocationDetected, setIsLocationDetected] = useState(false);
  const [serviceableCities] = useState<string[]>(getAllServiceableCities());

  const detectAndSetLocation = async () => {
    setIsLocationDetected(false);
    const location = await detectUserLocation();
    
    if (location) {
      setUserLocation(location);
      const content = getLocalizedContent(location.country, location.city);
      setLocalizedContent(content);
    } else {
      // Default content if location detection fails
      setLocalizedContent({
        title: "Rahnimo | Premium Interior Design Studio | Transform Your Space",
        description: "Rahnimo is a premium interior design studio specializing in luxury residential and commercial spaces worldwide. Our award-winning designers create stunning, functional environments tailored to your unique vision and lifestyle.",
        keywords: [
          "interior design",
          "interior designer",
          "home design",
          "commercial design",
          "luxury interiors",
          "residential design",
          "space planning",
          "furniture design",
          "architecture",
          "design services",
          "renovation",
          "decorating",
          "modern design",
          "contemporary design",
          "minimalist design"
        ]
      });
    }
    
    setIsLocationDetected(true);
  };

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      detectAndSetLocation();
    }
  }, []);

  const refreshLocation = async () => {
    await detectAndSetLocation();
  };

  const value = {
    userLocation,
    localizedContent,
    serviceableCities,
    isLocationDetected,
    refreshLocation
  };

  return (
    <GeoContext.Provider value={value}>
      {children}
    </GeoContext.Provider>
  );
}

export function useGeo() {
  const context = useContext(GeoContext);
  if (context === undefined) {
    throw new Error('useGeo must be used within a GeoProvider');
  }
  return context;
}