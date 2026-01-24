// Structured data schemas for SEO optimization
type FAQ = { question: string; answer: string };
type Breadcrumb = { name: string; url: string };

export const createOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rahnimo",
    "alternateName": "Rahnimo Interior Design Studio Bangladesh",
    "url": "https://rahnimo.com",
    "logo": "https://rahnimo.com/logo.png",
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person",
        "name": "Rahnimo Team"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880-XXX-XXX-XXXX",
      "contactType": "customer service",
      "areaServed": "BD",
      "availableLanguage": ["English", "Bengali"]
    },
    "sameAs": [
      "https://www.facebook.com/rahnimodesign",
      "https://www.instagram.com/rahnimodesign",
      "https://www.linkedin.com/company/rahnimo",
      "https://www.pinterest.com/rahnimo"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Design Street",
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka Division",
      "postalCode": "1200",
      "addressCountry": "BD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };
};

export const createLocalBusinessSchema = (city?: string, country?: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Rahnimo Interior Design Studio",
    "image": "https://rahnimo.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Design Street",
      "addressLocality": city || "Dhaka",
      "addressRegion": country || "Dhaka Division",
      "postalCode": "1200",
      "addressCountry": country || "BD"
    },
    "telephone": "+880-XXX-XXX-XXXX",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
    "priceRange": "BDT",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.8103,
      "longitude": 90.4125
    },
    "url": "https://rahnimo.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "servesCoversArea": {
      "@type": "AdministrativeArea",
      "name": city || country || "Bangladesh"
    }
  };
};

export const createServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": ["Interior Design", "Space Planning", "Furniture Selection", "Renovation Consulting"],
    "provider": {
      "@type": "Organization",
      "name": "Rahnimo Interior Design Studio"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Bangladesh"
    },
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "BDT"
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
      "merchantReturnDays": 0
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };
};

export interface Project {
  projectTitle: string;
  description?: string;
  image: string;
  category?: string;
  createdAt?: string;
}

export const createProjectSchema = (project: Project) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.projectTitle,
    "description": project.description || `View this stunning interior design project by Rahnimo`,
    "image": project.image,
    "creator": {
      "@type": "Organization",
      "name": "Rahnimo Interior Design Studio"
    },
    "dateCreated": project.createdAt || new Date().toISOString(),
    "genre": project.category || "Interior Design",
    "about": project.category || "Interior Design Project"
  };
};

export const createFAQSchema = (faqs: FAQ[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const createBreadcrumbSchema = (breadcrumbs: Breadcrumb[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://rahnimo.com${crumb.url}`
    }))
  };
};