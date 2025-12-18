// Blog Posts Data
export const blogPosts = [
  {
    slug: "seo-strategy-2024",
    title: "Complete SEO Strategy Guide for 2024: Dominate Local Search Rankings",
    description:
      "Learn the proven SEO strategies that help businesses rank #1 in local search results and attract qualified leads.",
    searchSnippet:
      "Master local SEO with our 2024 strategy guide. Technical SEO, E-E-A-T optimization, and link building strategies for #1 rankings.",
    category: "SEO",
    date: "December 15, 2024",
    author: "MH Digital Solution",
    image: "/images/seo-search-analytics.webp",
    imageAlt: "SEO strategy dashboard showing search rankings and analytics for 2024",
    featured: true,
    content: `<h2>Introduction</h2><p>SEO has evolved significantly in 2024. This guide covers the latest strategies that actually work.</p>`,
  },
  {
    slug: "digital-marketing-trends",
    title: "Top 10 Digital Marketing Trends Dominating 2024",
    description: "Discover the digital marketing trends that are reshaping how businesses connect with customers.",
    searchSnippet:
      "Top digital marketing trends for 2024: AI-powered personalization, video content, and automation strategies that drive results.",
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
    searchSnippet:
      "Web design best practices for conversions: user experience, mobile optimization, and A/B testing strategies.",
    category: "Web Design",
    date: "December 5, 2024",
    author: "MH Digital Solution",
    image: "/images/web-development-design.webp",
    imageAlt: "Responsive web design mockup on multiple devices",
    featured: true,
    content: `<h2>Design Principles</h2><p>User experience and mobile optimization...</p>`,
  },
  {
    slug: "ppc-advertising-guide",
    title: "PPC Advertising Mastery: Generate Qualified Leads with Google Ads",
    description: "Complete guide to running profitable PPC campaigns that deliver ROI.",
    searchSnippet:
      "PPC advertising guide: keyword research, ad copy optimization, and landing page strategies for high ROAS.",
    category: "PPC Advertising",
    date: "November 28, 2024",
    author: "MH Digital Solution",
    image: "/images/ppc-advertising.webp",
    imageAlt: "Google Ads dashboard with keyword targeting and performance metrics",
    featured: false,
    content: `<h2>PPC Strategy</h2><p>Keyword research, ad copy, landing pages...</p>`,
  },
]

// Categories for filtering
export const categories = [
  "All",
  "SEO",
  "Digital Marketing",
  "Web Design",
  "PPC Advertising",
  "Social Media",
  "E-Commerce",
  "AI & Automation",
  "Content Marketing",
  "Mobile Development",
  "Business Consulting",
]

// Industries for filtering
export const industries = [
  "All",
  "Industrial Supply",
  "Legal Services",
  "Automotive Services",
  "Hospitality & Tourism",
  "Digital Marketing",
  "E-Commerce",
  "Automotive & Marine Services",
]

// Case Studies Data
export const caseStudies = [
  {
    slug: "drilling-supply-gillette-wy",
    title: "How We Increased Leads by 125% for a Drilling Supply Company in Gillette, WY",
    description: "B2B digital marketing strategy that transformed lead generation for a drilling supply distributor.",
    searchSnippet: "B2B digital marketing case study: 125% lead increase for Gillette drilling supplier.",
    category: "B2B Marketing",
    industry: "Industrial Supply",
    location: "Gillette, Wyoming",
    client: "Rocky Mountain Drilling Supply",
    challenge: "Low visibility in B2B search results, competing against national suppliers.",
    solution: "Implemented technical SEO and created industry-specific content targeting high-intent keywords.",
    results: [
      "125% increase in qualified leads",
      "3 new enterprise contracts worth $500K+",
      "Ranked #1 for 'drilling supply Gillette WY'",
      "45% improvement in lead quality score",
    ],
    metrics: { leadIncrease: "125%", contractValue: "$500K+", timeframe: "6 months", roi: "340%" },
    featured: true,
    image: "/images/business-growth-arrow.webp",
    imageAlt: "Industrial drilling supply facility and B2B marketing analytics",
  },
  {
    slug: "morgantown-law-firm-seo",
    title: "Morgantown Law Firm Achieves 1st Page Ranking for 5 Key Practice Areas & 42% Increase in Consultations",
    description: "Professional services SEO strategy that dominated local search for a specialized law firm.",
    searchSnippet:
      "Professional services SEO case study: Law firm achieved 5 page-1 rankings and 42% consultation increase.",
    category: "Professional Services",
    industry: "Legal Services",
    location: "Morgantown, West Virginia",
    client: "Mountain State Legal Group",
    challenge: "Invisible for key transactional keywords like 'Morgantown DUI lawyer'.",
    solution: "Comprehensive local SEO strategy with practice area-specific landing pages.",
    results: [
      "42% increase in consultation calls",
      "5 practice areas on Google Page 1",
      "28% growth in organic traffic",
      "#1 ranking for 'Morgantown DUI lawyer'",
    ],
    metrics: { consultationIncrease: "42%", pageOneRankings: 5, trafficGrowth: "28%", timeframe: "6 months" },
    featured: true,
    image: "/images/business-consultation-analytics.webp",
    imageAlt: "Professional law office with client consultation",
  },
  {
    slug: "prestigious-marine-auto-care",
    title: "Luxury Automotive & Marine Detailing: 280% Lead Increase & Premium Client Acquisition",
    description:
      "Digital marketing transformation for a high-end automotive and marine detailing company, targeting affluent clientele in luxury resort communities.",
    searchSnippet:
      "Luxury auto care case study: 280% lead increase and premium client acquisition through targeted digital marketing and brand positioning.",
    category: "Digital Marketing & Web Design",
    industry: "Automotive & Marine Services",
    location: "Jackson Hole, Wyoming",
    client: "Prestigious Marine Auto Care",
    challenge:
      "Limited online visibility despite premium service offerings. Struggling to reach high-net-worth clientele with discretionary budget for luxury automotive care.",
    solution:
      "Comprehensive digital strategy including luxury brand positioning, targeted PPC campaigns, premium content marketing, and strategic partnerships with high-end hospitality venues.",
    results: [
      "280% increase in qualified leads",
      "45% increase in conversion rate (premium service inquiries)",
      "Established as #1 luxury auto care provider in Jackson Hole region",
      "Average deal value increased by 62% through proper lead qualification",
      "Expanded service offerings based on demand insights",
    ],
    metrics: {
      leadIncrease: "280%",
      conversionIncrease: "45%",
      dealValueIncrease: "62%",
      timeframe: "9 months",
      roi: "520%",
    },
    featured: true,
    image: "/images/prestigious-marine-auto-care.webp",
    imageAlt: "Luxury automotive detailing facility with premium vehicles",
  },
]

// Locations Data for state/city pages
export const locations = {
  nebraska: {
    state: "Nebraska",
    cities: [
      {
        name: "Omaha",
        slug: "omaha",
        population: "468,000",
        keywords: ["Omaha digital marketing", "web design Omaha", "Omaha SEO"],
      },
      {
        name: "Lincoln",
        slug: "lincoln",
        population: "285,000",
        keywords: ["Lincoln web design", "Lincoln SEO", "digital marketing Lincoln"],
      },
      {
        name: "Millard",
        slug: "millard",
        population: "62,000",
        keywords: ["SEO services Millard NE", "web design Millard"],
      },
      {
        name: "Elkhorn",
        slug: "elkhorn",
        population: "29,000",
        keywords: ["web design Elkhorn NE", "Elkhorn digital marketing"],
      },
      {
        name: "Grand Island",
        slug: "grand-island",
        population: "52,000",
        keywords: ["agribusiness marketing Grand Island", "Grand Island web design"],
      },
      {
        name: "Kearney",
        slug: "kearney",
        population: "33,000",
        keywords: ["Local SEO Kearney NE", "Kearney digital marketing"],
      },
      {
        name: "Bellevue",
        slug: "bellevue",
        population: "62,000",
        keywords: ["contractor website design Bellevue", "web design Bellevue NE"],
      },
    ],
  },
  wyoming: {
    state: "Wyoming",
    cities: [
      {
        name: "Jackson Hole",
        slug: "jackson-hole",
        keywords: ["Real estate web design Jackson Hole", "Jackson Hole digital marketing"],
      },
      { name: "Cheyenne", slug: "cheyenne", keywords: ["SEO company Cheyenne WY", "web design Cheyenne"] },
      { name: "Casper", slug: "casper", keywords: ["small business website Casper WY", "Casper digital marketing"] },
      { name: "Laramie", slug: "laramie", keywords: ["PPC management Laramie", "Laramie web design"] },
    ],
  },
  maine: {
    state: "Maine",
    cities: [
      {
        name: "Portland",
        slug: "portland",
        keywords: ["Restaurant SEO Portland Maine", "Portland web design", "digital marketing Portland ME"],
      },
      { name: "Bangor", slug: "bangor", keywords: ["web designer Bangor ME", "Bangor digital marketing"] },
      { name: "Augusta", slug: "augusta", keywords: ["Local business SEO Augusta ME", "Augusta web design"] },
    ],
  },
  "rhode-island": {
    state: "Rhode Island",
    cities: [
      {
        name: "Providence",
        slug: "providence",
        keywords: ["Lead generation Providence", "Providence web design", "digital marketing Providence"],
      },
      { name: "Warwick", slug: "warwick", keywords: ["SEO agency Warwick RI", "Warwick web design"] },
      { name: "Newport", slug: "newport", keywords: ["custom web design Newport RI", "Newport digital marketing"] },
      { name: "Cranston", slug: "cranston", keywords: ["SEO consultant Cranston RI", "Cranston web design"] },
    ],
  },
  "new-mexico": {
    state: "New Mexico",
    cities: [
      {
        name: "Santa Fe",
        slug: "santa-fe",
        keywords: ["E-commerce web design Santa Fe", "Santa Fe digital marketing"],
      },
      { name: "Albuquerque", slug: "albuquerque", keywords: ["SEO services Albuquerque", "Albuquerque web design"] },
      { name: "Las Cruces", slug: "las-cruces", keywords: ["Law firm marketing Las Cruces", "Las Cruces web design"] },
      { name: "Rio Rancho", slug: "rio-rancho", keywords: ["Google maps ranking Rio Rancho", "Rio Rancho web design"] },
    ],
  },
  iowa: {
    state: "Iowa",
    cities: [
      {
        name: "Des Moines",
        slug: "des-moines",
        keywords: ["Digital marketing Des Moines", "web design Des Moines", "Des Moines SEO"],
      },
      {
        name: "Cedar Rapids",
        slug: "cedar-rapids",
        keywords: ["WordPress developer Cedar Rapids", "Cedar Rapids web design"],
      },
      { name: "Davenport", slug: "davenport", keywords: ["PPC agency Davenport Iowa", "Davenport web design"] },
      { name: "Ankeny", slug: "ankeny", keywords: ["Website redesign Ankeny", "Ankeny web design"] },
    ],
  },
  massachusetts: {
    state: "Massachusetts",
    cities: [
      { name: "Worcester", slug: "worcester", keywords: ["SEO company Worcester MA", "Worcester web design"] },
      {
        name: "Springfield",
        slug: "springfield",
        keywords: ["web design Springfield MA", "Springfield digital marketing"],
      },
      { name: "Cape Cod", slug: "cape-cod", keywords: ["Vacation rental web design Cape Cod", "Cape Cod web design"] },
      { name: "Lowell", slug: "lowell", keywords: ["Local SEO Lowell MA", "Lowell web design"] },
      { name: "Newton", slug: "newton", keywords: ["Dental marketing Newton MA", "Newton web design"] },
    ],
  },
  "west-virginia": {
    state: "West Virginia",
    cities: [
      {
        name: "Morgantown",
        slug: "morgantown",
        keywords: ["web development Morgantown WV", "Morgantown digital marketing"],
      },
      { name: "Charleston", slug: "charleston", keywords: ["Lawyer SEO Charleston WV", "Charleston web design"] },
      { name: "Huntington", slug: "huntington", keywords: ["Google ads Huntington WV", "Huntington web design"] },
    ],
  },
  vermont: {
    state: "Vermont",
    cities: [
      { name: "Burlington", slug: "burlington", keywords: ["Shopify experts Burlington VT", "Burlington web design"] },
      { name: "Stowe", slug: "stowe", keywords: ["Resort marketing agency Stowe", "Stowe web design"] },
      { name: "Rutland", slug: "rutland", keywords: ["Local SEO Rutland VT", "Rutland web design"] },
    ],
  },
}
