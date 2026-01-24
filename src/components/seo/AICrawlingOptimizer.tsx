'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Head from 'next/head';
import {
  createBreadcrumbSchema,
  createFAQSchema,
  createLocalBusinessSchema,
  createOrganizationSchema,
  createServiceSchema
} from '@/lib/structured-data';
import { useGeo } from '@/context/GeoContext';

// AI Crawling Optimizer Component
const AICrawlingOptimizer = () => {
  const pathname = usePathname();
  const { userLocation, localizedContent } = useGeo();
  
  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    const pathParts = pathname.split('/').filter(part => part !== '');
    const breadcrumbs = [{ name: 'Home', url: '/' }];
    
    let currentPath = '';
    pathParts.forEach(part => {
      currentPath += `/${part}`;
      breadcrumbs.push({
        name: part.charAt(0).toUpperCase() + part.slice(1),
        url: currentPath
      });
    });
    
    return breadcrumbs;
  };

  // Generate AI-optimized content suggestions based on current page
  const generatePageSpecificSuggestions = () => {
    const suggestions: string[] = [];

    // Page-specific keyword suggestions
    if (pathname === '/') {
      suggestions.push(
        "affordable interior design ideas",
        "small space interior design tips",
        "DIY interior design mistakes to avoid",
        "budget interior design solutions",
        "minimalist interior design trends"
      );
    } else if (pathname.includes('/work')) {
      suggestions.push(
        "interior design project examples",
        "interior design case studies",
        "before and after interior design",
        "interior design process explained",
        "interior design cost breakdown"
      );
    } else if (pathname.includes('/about')) {
      suggestions.push(
        "interior design company profile",
        "professional interior design team",
        "interior design expertise",
        "interior design philosophy",
        "interior design approach"
      );
    } else if (pathname.includes('/contact')) {
      suggestions.push(
        "interior design consultation booking",
        "interior design project inquiry",
        "interior design quote request",
        "interior design appointment scheduling",
        "interior design free consultation"
      );
    } else if (pathname.includes('/faq')) {
      suggestions.push(
        "interior design frequently asked questions",
        "interior design process questions",
        "interior design cost questions",
        "interior design timeline questions",
        "interior design service questions"
      );
    } else if (pathname.includes('/team')) {
      suggestions.push(
        "interior design professionals",
        "interior design team profiles",
        "interior design expertise showcase",
        "interior design creative team",
        "interior design staff profiles"
      );
    }

    return suggestions;
  };

  // Generate semantic content structure
  const generateSemanticStructure = () => {
    const suggestions = generatePageSpecificSuggestions();
    const breadcrumbs = generateBreadcrumbs();
    
    // Create structured data for AI crawlers
    const allSchemas = [
      createOrganizationSchema(),
      createLocalBusinessSchema(userLocation?.city, userLocation?.country),
      createServiceSchema(),
      createBreadcrumbSchema(breadcrumbs),
      pathname.includes('/faq') ? createFAQSchema([
        { question: "What interior design services do you offer?", answer: "We offer comprehensive interior design services including space planning, furniture selection, color consultation, lighting design, and project management." },
        { question: "How much do interior design services cost?", answer: "Our interior design services vary based on project scope, size, and complexity. We offer packages starting from $X and provide custom quotes for each project." },
        { question: "How long does an interior design project take?", answer: "Timeline varies by project size and complexity. Small projects typically take 2-4 weeks, while larger projects may take 2-6 months." }
      ] as FAQ[]) : null
    ];

    const schemas = allSchemas.filter(Boolean) as object[];
    
    return schemas;
  };

  useEffect(() => {
    // Add structured data to the page
    const schemas = generateSemanticStructure();
    if (schemas.length > 0) {
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.innerHTML = JSON.stringify(schemas);
      document.head.appendChild(schemaScript);
    }

    // Add additional AI crawling optimization meta tags
    const keywords = generatePageSpecificSuggestions();
    if (keywords.length > 0) {
      const keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = keywords.slice(0, 10).join(', ');
      document.head.appendChild(keywordsMeta);
    }

    // Add content suggestion hints for AI crawlers
    const contentHint = document.createElement('meta');
    contentHint.name = 'content-type';
    contentHint.content = 'informational, educational, commercial';
    document.head.appendChild(contentHint);

    // Add AI-focused meta tags
    const aiFocusMeta = document.createElement('meta');
    aiFocusMeta.name = 'ai-content-type';
    aiFocusMeta.content = 'interior-design, home-improvement, space-planning, decoration';
    document.head.appendChild(aiFocusMeta);

    // Cleanup function
    return () => {
      // Remove schema script if it exists
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) {
        document.head.removeChild(existingSchema);
      }
      // Note: We don't remove the meta tags as they're dynamically added and will be replaced on route change
    };
  }, [pathname, userLocation]);

  return null;
};

export default AICrawlingOptimizer;