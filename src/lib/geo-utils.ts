// Geo-targeting utilities for Rahnimo Interior Design Studio

// Define serviceable regions for Rahnimo - Bangladesh focused
export const SERVICEABLE_REGIONS = [
  {
    code: 'BD',
    name: 'Bangladesh',
    cities: [
      'Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Cumilla', 'Barisal',
      'Rangpur', 'Mymensingh', 'Narayanganj', 'Gazipur', 'Cox\'s Bazar', 'Saidpur',
      'Jessore', 'Comilla', 'Tangail', 'Faridpur', 'Kushtia', 'Bogra', 'Pabna'
    ]
  }
];

// Get region info by country code
export const getRegionByCountryCode = (countryCode: string) => {
  return SERVICEABLE_REGIONS.find(region => region.code === countryCode);
};

// Get all serviceable cities
export const getAllServiceableCities = (): string[] => {
  return SERVICEABLE_REGIONS.flatMap(region => region.cities);
};

// Check if a city is serviceable
export const isCityServiceable = (city: string): boolean => {
  const lowerCity = city.toLowerCase();
  return SERVICEABLE_REGIONS.some(region => 
    region.cities.some(serviceableCity => 
      serviceableCity.toLowerCase() === lowerCity
    )
  );
};

// Get localized content based on detected location
export const getLocalizedContent = (countryCode: string, city?: string) => {
  const region = getRegionByCountryCode(countryCode);
  
  if (!region) {
    return {
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
    };
  }

  // Localized content for specific regions
  switch (countryCode) {
    case 'US':
      return {
        title: `Rahnimo | Interior Design in ${city || 'the USA'} | Transform Your Space`,
        description: `Rahnimo offers premium interior design services in ${city || 'the United States'}. Our award-winning designers create stunning, functional environments tailored to your unique vision and lifestyle.`,
        keywords: [
          `interior design ${city || 'USA'}`,
          `interior designer ${city || 'USA'}`,
          `home design ${city || 'USA'}`,
          `commercial design ${city || 'USA'}`,
          `luxury interiors ${city || 'USA'}`,
          `residential design ${city || 'USA'}`,
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
      };
    
    case 'CA':
      return {
        title: `Rahnimo | Interior Design in ${city || 'Canada'} | Transform Your Space`,
        description: `Rahnimo offers premium interior design services in ${city || 'Canada'}. Our award-winning designers create stunning, functional environments tailored to your unique vision and lifestyle.`,
        keywords: [
          `interior design ${city || 'Canada'}`,
          `interior designer ${city || 'Canada'}`,
          `home design ${city || 'Canada'}`,
          `commercial design ${city || 'Canada'}`,
          `luxury interiors ${city || 'Canada'}`,
          `residential design ${city || 'Canada'}`,
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
      };
      
    case 'UK':
      return {
        title: `Rahnimo | Interior Design in ${city || 'the UK'} | Transform Your Space`,
        description: `Rahnimo offers premium interior design services in ${city || 'the United Kingdom'}. Our award-winning designers create stunning, functional environments tailored to your unique vision and lifestyle.`,
        keywords: [
          `interior design ${city || 'UK'}`,
          `interior designer ${city || 'UK'}`,
          `home design ${city || 'UK'}`,
          `commercial design ${city || 'UK'}`,
          `luxury interiors ${city || 'UK'}`,
          `residential design ${city || 'UK'}`,
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
      };
      
    default:
      return {
        title: `Rahnimo | Interior Design in ${region.name} | Transform Your Space`,
        description: `Rahnimo offers premium interior design services in ${region.name}. Our award-winning designers create stunning, functional environments tailored to your unique vision and lifestyle.`,
        keywords: [
          `interior design ${region.name}`,
          `interior designer ${region.name}`,
          `home design ${region.name}`,
          `commercial design ${region.name}`,
          `luxury interiors ${region.name}`,
          `residential design ${region.name}`,
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
      };
  }
};

// Detect user's location (client-side)
export const detectUserLocation = async (): Promise<{ country: string; city?: string; region?: string } | null> => {
  try {
    // First try to get location from IP geolocation service
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    if (data.country) {
      return {
        country: data.country,
        city: data.city || undefined,
        region: data.region || undefined
      };
    }
    
    return null;
  } catch (error) {
    console.warn('Could not detect user location:', error);
    return null;
  }
};

// Alternative location detection using browser's geolocation API
export const getUserLocationFromBrowser = (): Promise<{ lat: number; lng: number; accuracy: number } | null> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        });
      },
      () => {
        // Error getting location
        resolve(null);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  });
};