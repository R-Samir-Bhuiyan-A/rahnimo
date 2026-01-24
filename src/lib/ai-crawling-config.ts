// AI Crawling Optimization Configuration
// This file contains configurations to help AI crawlers index the site more effectively

export const AICrawlingConfig = {
  // Semantic HTML structure for better AI understanding
  semanticStructure: {
    useMainTag: true,
    useArticleTags: true,
    useSectionTags: true,
    useHeaderTags: true,
    useNavTags: true,
    useFooterTags: true,
    useAsideTags: true,
  },

  // Rich snippets and structured data
  richSnippets: {
    enableFAQ: true,
    enableBreadcrumbs: true,
    enableLocalBusiness: true,
    enableService: true,
    enableOrganization: true,
  },

  // Content optimization for AI
  contentOptimization: {
    // Target long-tail, less competitive keywords
    longTailKeywords: [
      // Interior design specific
      "affordable interior design ideas",
      "small space interior design tips",
      "DIY interior design mistakes to avoid",
      "budget interior design solutions",
      "minimalist interior design trends",
      "modern farmhouse interior design",
      "industrial interior design concepts",
      "coastal interior design style",
      "bohemian interior design inspiration",
      "eclectic interior design mixing",
      "mid century modern interior design",
      "Scandinavian interior design elements",
      "transitional interior design style",
      "contemporary interior design trends",
      "traditional interior design features",
      
      // Room-specific
      "bedroom interior design ideas",
      "living room interior design tips",
      "kitchen interior design layouts",
      "bathroom interior design trends",
      "office interior design solutions",
      "dining room interior design",
      "entryway interior design ideas",
      "nursery interior design themes",
      
      // Commercial
      "commercial interior design services",
      "office interior design solutions",
      "retail interior design concepts",
      "restaurant interior design ideas",
      "hotel interior design concepts",
      "spa interior design relaxation",
      
      // Process和服务
      "interior design consultation process",
      "interior design project timeline",
      "interior design cost estimation",
      "interior design budget planning",
      "interior design inspiration sources",
      "interior design color schemes",
      "interior design furniture selection",
      "interior design lighting solutions",
      "interior design space planning",
      "interior design style consultation",
    ],

    // Semantic content structure
    contentHierarchy: {
      h1: "Primary topic (1 per page)",
      h2: "Main sections",
      h3: "Subsections",
      h4: "Detailed points",
      p: "Supporting content",
      strong: "Important keywords",
      em: "Emphasized terms",
      blockquote: "Expert quotes",
      ul: "Lists with keywords",
      ol: "Step-by-step guides",
    },
  },

  // Schema markup types to implement
  schemaTypes: [
    "FAQPage",
    "HowTo",
    "Article",
    "LocalBusiness",
    "Service",
    "Organization",
    "BreadcrumbList",
    "Product",
    "Review",
    "AggregateRating",
  ],

  // Internal linking strategy
  internalLinking: {
    relatedContentSuggestions: true,
    crossPageReferences: true,
    contextualLinks: true,
    navigationDepth: 3, // Maximum depth for crawling
  },

  // Metadata optimization
  metadataOptimization: {
    dynamicTitleGeneration: true,
    contextualDescriptions: true,
    keywordRichTitles: true,
    locationBasedMeta: true,
  },

  // Technical SEO for AI crawlers
  technicalSeo: {
    cleanUrls: true,
    fastLoading: true,
    mobileOptimized: true,
    structuredData: true,
    sitemapOptimized: true,
    canonicalTags: true,
    hreflangTags: true,
  },

  // Content freshness signals
  freshnessSignals: {
    lastUpdated: true,
    contentAuditSchedule: "monthly",
    trendingTopicsIntegration: true,
    seasonalContentUpdates: true,
  },
};

// Function to generate AI-optimized content suggestions
export const generateContentSuggestions = (primaryKeyword: string) => {
  const suggestions = [];
  
  // Generate long-tail variations
  const prefixes = [
    "how to", "what is", "best", "top", "guide to", "tips for", 
    "ideas for", "ways to", "benefits of", "importance of"
  ];
  
  const suffixes = [
    "for beginners", "on a budget", "quick guide", "step by step", 
    "in 2026", "for small spaces", "for families", "for renters"
  ];
  
  prefixes.forEach(prefix => {
    suggestions.push(`${prefix} ${primaryKeyword}`);
  });
  
  suffixes.forEach(suffix => {
    suggestions.push(`${primaryKeyword} ${suffix}`);
  });
  
  // Generate comparison content
  suggestions.push(`difference between ${primaryKeyword} and alternatives`);
  suggestions.push(`pros and cons of ${primaryKeyword}`);
  suggestions.push(`${primaryKeyword} vs alternatives`);
  
  return suggestions;
};

// Function to create semantic content structure
export const createSemanticStructure = (content: string, keywords: string[]) => {
  return {
    introduction: `Begin with an engaging introduction that incorporates primary keywords: ${keywords.slice(0, 3).join(', ')}`,
    mainSections: keywords.map((keyword, index) => ({
      heading: `Section ${index + 1}: ${keyword}`,
      content: `Detailed content focusing on ${keyword} with semantic markup`,
      subSections: [`Subtopic 1 for ${keyword}`, `Subtopic 2 for ${keyword}`]
    })),
    conclusion: `Summarize key points and include call-to-action with relevant keywords`
  };
};

export default AICrawlingConfig;