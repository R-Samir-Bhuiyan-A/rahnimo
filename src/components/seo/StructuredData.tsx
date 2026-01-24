'use client';

import { useGeo } from '@/context/GeoContext';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Head from 'next/head';
import { 
  createOrganizationSchema, 
  createLocalBusinessSchema, 
  createServiceSchema,
  createBreadcrumbSchema
} from '@/lib/structured-data';

const StructuredData = () => {
  const pathname = usePathname();
  const { userLocation } = useGeo();
  
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

  // Get the appropriate schema based on the current page
  const getSchemas = () => {
    const schemas = [];
    
    // Always include organization schema
    schemas.push(createOrganizationSchema());
    
    // Include local business schema with location if available
    schemas.push(createLocalBusinessSchema(
      userLocation?.city, 
      userLocation?.country
    ));
    
    // Include service schema
    schemas.push(createServiceSchema());
    
    // Include breadcrumb schema
    schemas.push(createBreadcrumbSchema(generateBreadcrumbs()));
    
    return schemas;
  };

  useEffect(() => {
    // Add structured data to the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(getSchemas());
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, [pathname, userLocation]);

  return null;
};

export default StructuredData;