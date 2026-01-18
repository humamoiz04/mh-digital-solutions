// --- TYPES & INTERFACES ---
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  searchSnippet: string;
  category: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  searchSnippet: string;
  category: string;
  industry: string;
  location: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    [key: string]: string | number;
  };
  featured: boolean;
  image: string;
  imageAlt: string;
}

// --- BLOG POSTS ---
export const blogPosts: BlogPost[] = [
  {
    slug: "seo-strategy-2024",
    title: "Complete SEO Strategy Guide for 2024: Dominate Local Search Rankings",
    description: "Learn the proven SEO strategies that help businesses rank #1 in local search results and attract qualified leads.",
    searchSnippet: "Master local SEO with our 2024 strategy guide. Technical SEO, E-E-A-T optimization, and link building strategies for #1 rankings.",
    category: "SEO",
    date: "December 15, 2024",
    author: "MH Digital Solution",
    image: "/images/seo-search-analytics.webp",
    imageAlt: "SEO strategy dashboard showing search rankings and analytics for 2024",
    featured: true,
    content: `<h2>Introduction</h2><p>SEO has evolved significantly in 2024. This guide covers the latest strategies that actually work.</p><h3>Key Pillars of Modern SEO</h3><ul><li>Technical Foundation</li><li>Content Authority (E-E-A-T)</li><li>Local Optimization</li></ul>`,
  },
  {
    slug: "digital-marketing-trends",
    title: "Top 10 Digital Marketing Trends Dominating 2024",
    description: "Discover the digital marketing trends that are reshaping how businesses connect with customers.",
    searchSnippet: "Top digital marketing trends for 2024: AI-powered personalization, video content, and automation strategies that drive results.",
    category: "Digital Marketing",
    date: "December 10, 2024",
    author: "MH Digital Solution",
    image: "/images/digital-marketing-megaphone.webp",
    imageAlt: "Digital marketing trends visualization with AI and automation icons",
    featured: true,
    content: `<h2>2024 Marketing Trends</h2><p>AI, personalization, and video content are leading the way...</p>`,
  },
  {
    slug: "web-design-best-practices",
    title: "Web Design Best Practices: Creating High-Converting Websites",
    description: "Master the principles of web design that convert visitors into customers.",
    searchSnippet: "Web design best practices for conversions: user experience, mobile optimization, and A/B testing strategies.",
    category: "Web Design",
    date: "December 5, 2024",
    author: "MH Digital Solution",
    image: "/images/web-development-design.webp",
    imageAlt: "Responsive web design mockup on multiple devices",
    featured: true,
    content: `<h2>Design Principles</h2><p>User experience and mobile optimization are no longer optional...</p>`,
  },
  {
    slug: "ppc-advertising-guide",
    title: "PPC Advertising Mastery: Generate Qualified Leads with Google Ads",
    description: "Complete guide to running profitable PPC campaigns that deliver ROI.",
    searchSnippet: "PPC advertising guide: keyword research, ad copy optimization, and landing page strategies for high ROAS.",
    category: "PPC Advertising",
    date: "November 28, 2024",
    author: "MH Digital Solution",
    image: "/images/ppc-advertising.webp",
    imageAlt: "Google Ads dashboard with keyword targeting and performance metrics",
    featured: false,
    content: `<h2>PPC Strategy</h2><p>Keyword research, ad copy, and landing pages are the triad of success.</p>`,
  },
];

// --- CASE STUDIES ---
export const caseStudies: CaseStudy[] = [
  {
    slug: "drilling-supply-gillette-wy",
    title: "How We Increased Leads by 125% for a Drilling Supply Company in Gillette, WY",
    description: "B2B digital marketing strategy that transformed lead generation for a drilling supply distributor.",
    searchSnippet: "B2B digital marketing case study: 125% lead increase for Gillette drilling supplier.",
    category: "B2B Marketing",
    industry: "Industrial Supply",
    location: "Gillette, Wyoming",
    client: "Rocky Mountain Drilling Supply",
    challenge: "Low visibility in B2B search results, competing against national suppliers with larger budgets.",
    solution: "Implemented technical SEO and created industry-specific content targeting high-intent industrial keywords and local proximity.",
    results: [
      "125% increase in qualified leads",
      "3 new enterprise contracts worth $500K+",
      "Ranked #1 for 'drilling supply Gillette WY'",
      "45% improvement in lead quality score",
    ],
    metrics: { 
      "Lead Increase": "125%", 
      "Contract Value": "$500K+", 
      "Timeframe": "6 months", 
      "ROI": "340%" 
    },
    featured: true,
    image: "/images/business-growth-arrow.webp",
    imageAlt: "Industrial drilling supply facility and B2B marketing analytics",
  },
  {
    slug: "morgantown-law-firm-seo",
    title: "Morgantown Law Firm Achieves 1st Page Ranking for 5 Key Practice Areas",
    description: "Professional services SEO strategy that dominated local search for a specialized law firm in West Virginia.",
    searchSnippet: "Professional services SEO case study: Law firm achieved 5 page-1 rankings and 42% consultation increase.",
    category: "Professional Services",
    industry: "Legal Services",
    location: "Morgantown, West Virginia",
    client: "Mountain State Legal Group",
    challenge: "The firm was invisible for key transactional keywords like 'Morgantown DUI lawyer' and 'Personal Injury attorney'.",
    solution: "Comprehensive local SEO strategy including Google Business Profile optimization and practice area-specific landing pages.",
    results: [
      "42% increase in consultation calls",
      "5 practice areas on Google Page 1",
      "28% growth in organic traffic",
      "#1 ranking for 'Morgantown DUI lawyer'",
    ],
    metrics: { 
      "Consultation Increase": "42%", 
      "Page 1 Rankings": 5, 
      "Traffic Growth": "28%", 
      "Timeframe": "6 months" 
    },
    featured: true,
    image: "/images/business-consultation-analytics.webp",
    imageAlt: "Professional law office with client consultation",
  },
  {
    slug: "prestigious-marine-auto-care",
    title: "Luxury Automotive & Marine Detailing: 280% Lead Increase",
    description: "Digital marketing transformation for a high-end automotive and marine detailing company in luxury resort communities.",
    searchSnippet: "Luxury auto care case study: 280% lead increase and premium client acquisition through targeted digital marketing.",
    category: "Digital Marketing & Web Design",
    industry: "Automotive & Marine Services",
    location: "Jackson Hole, Wyoming",
    client: "Prestigious Marine Auto Care",
    challenge: "Limited online visibility despite premium service offerings. Struggling to reach high-net-worth clientele.",
    solution: "Comprehensive strategy including luxury brand positioning, targeted PPC campaigns, and premium content marketing.",
    results: [
      "280% increase in qualified leads",
      "45% increase in conversion rate",
      "Established as #1 luxury provider in Jackson Hole",
      "Average deal value increased by 62%",
    ],
    metrics: {
      "Lead Increase": "280%",
      "Conversion Increase": "45%",
      "Deal Value Increase": "62%",
      "Timeframe": "9 months",
      "ROI": "520%",
    },
    featured: true,
    image: "/images/prestigious-marine-auto-care.webp",
    imageAlt: "Luxury automotive detailing facility with premium vehicles",
  },
];

// --- HELPER DATA FOR FILTERS ---
export const categories = [
  "All", "SEO", "Digital Marketing", "Web Design", "PPC Advertising", "Social Media", 
  "E-Commerce", "AI & Automation", "Content Marketing", "Mobile Development", 
  "Business Consulting", "B2B Marketing", "Professional Services", "Digital Marketing & Web Design"
];

export const industries = [
  "All", "Industrial Supply", "Legal Services", "Automotive Services", 
  "Hospitality & Tourism", "Digital Marketing", "E-Commerce", "Automotive & Marine Services"
];

// --- LOCATIONS & RURAL COUNTIES ---
export const locations = {
  nebraska: {
    state: "Nebraska",
    cities: [
      { name: "Omaha", slug: "omaha", keywords: ["Omaha digital marketing", "web design Omaha", "Omaha SEO"] },
      { name: "Lincoln", slug: "lincoln", keywords: ["Lincoln web design", "Lincoln SEO", "digital marketing Lincoln"] },
      { name: "Millard", slug: "millard", keywords: ["SEO services Millard NE", "web design Millard"] },
      { name: "Elkhorn", slug: "elkhorn", keywords: ["web design Elkhorn NE", "Elkhorn digital marketing"] },
      { name: "Grand Island", slug: "grand-island", keywords: ["agribusiness Grand Island", "Grand Island web design"] },
      { name: "Kearney", slug: "kearney", keywords: ["Local SEO Kearney NE", "Kearney digital marketing"] },
      { name: "Bellevue", slug: "bellevue", keywords: ["contractor web design Bellevue", "web design Bellevue NE"] },
    ],
  },
  wyoming: {
    state: "Wyoming",
    cities: [
      { name: "Jackson Hole", slug: "jackson-hole", keywords: ["Real estate web design Jackson Hole", "Jackson Hole digital marketing"] },
      { name: "Cheyenne", slug: "cheyenne", keywords: ["SEO company Cheyenne WY", "web design Cheyenne"] },
      { name: "Casper", slug: "casper", keywords: ["small business website Casper WY", "Casper digital marketing"] },
      { name: "Laramie", slug: "laramie", keywords: ["PPC management Laramie", "Laramie web design"] },
    ],
  },
  // Add other states similarly...
};

export const ruralCounties = {
  nebraska: {
    state: "Nebraska",
    counties: [
      {
        name: "Box Butte",
        slug: "box-butte",
        keyword: "Low-Cost Website Help Near Alliance, Nebraska",
        description: "We understand ranching families. Professional websites without tech talk.",
        businessTypes: ["Ranches", "Farm Operations", "Agricultural Businesses"],
        services: ["Website Design", "Business Listing", "Local SEO"],
        startingPrice: "$299/month",
        keywords: ["Website help Alliance NE", "Farm website design Nebraska"],
      },
    ],
  },
  // Add other counties similarly...
};
