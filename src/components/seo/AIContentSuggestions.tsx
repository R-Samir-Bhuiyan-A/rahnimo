'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { generateRelatedContent } from '@/lib/ai-optimized-content';

// AI Content Suggestions Component
const AIContentSuggestions = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    // Generate related content suggestions for AI crawlers
    const relatedPages = generateRelatedContent(pathname);
    
    // Add related content hints as hidden structured data for AI
    const relatedContentDiv = document.createElement('div');
    relatedContentDiv.style.display = 'none';
    relatedContentDiv.setAttribute('data-ai-content-type', 'related-pages');
    
    // Add related pages as data attributes
    relatedContentDiv.setAttribute('data-related-pages', JSON.stringify(relatedPages));
    
    // Add to body
    document.body.appendChild(relatedContentDiv);
    
    // Cleanup function
    return () => {
      document.body.removeChild(relatedContentDiv);
    };
  }, [pathname]);

  return null;
};

export default AIContentSuggestions;