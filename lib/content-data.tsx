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
  "B2B Marketing",
  "Professional Services",
  "Digital Marketing & Web Design",
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
  kansas: {
    state: "Kansas",
    cities: [
      {
        name: "Sherman",
        slug: "sherman",
        keywords: ["AG Equipment Repair Website - Urgent Mobile Search Optimization"],
      },
      {
        name: "Thomas",
        slug: "thomas",
        keywords: ["Affordable Website Hosting for Colby Kansas Businesses - Local Trust"],
      },
    ],
  },
  alabama: {
    state: "Alabama",
    cities: [
      {
        name: "Macon",
        slug: "macon",
        keywords: ["Affordable Church Website Design for Macon County, AL"],
      },
      {
        name: "Greene",
        slug: "greene",
        keywords: ["Small Business Loans Help & Digital Marketing for Greene County, AL"],
      },
      {
        name: "Hale",
        slug: "hale",
        keywords: ["Cheap Website Builder for Mechanics & Trade Services in Hale County"],
      },
      {
        name: "Winston",
        slug: "winston",
        keywords: ["Get Your Business on Google Maps - Free Guidance in Winston County"],
      },
      {
        name: "Wilcox",
        slug: "wilcox",
        keywords: ["Low Cost Funeral Home Marketing & Reputation Management"],
      },
    ],
  },
  arizona: {
    state: "Arizona",
    cities: [
      {
        name: "Cochise",
        slug: "cochise",
        keywords: ["RV Park Website Design & Booking System for Snowbird Season"],
      },
      {
        name: "Gila",
        slug: "gila",
        keywords: ["Mining Contractor Safety & Professional Website for Gila County"],
      },
      {
        name: "Graham",
        slug: "graham",
        keywords: ["Affordable Web Design for Safford, Arizona Businesses - Starting at $299/month"],
      },
      {
        name: "La Paz",
        slug: "la-paz",
        keywords: ["Mobile Home Dealer Marketing & Lead Generation Agency"],
      },
    ],
  },
  montana: {
    state: "Montana",
    cities: [
      {
        name: "Beaverhead",
        slug: "beaverhead",
        keywords: ["Hunting Guide Website Design & Booking System for Seasonal Businesses"],
      },
      {
        name: "Daniels",
        slug: "daniels",
        keywords: ["Cattle Ranch Logo & Direct-to-Consumer Beef Website Design"],
      },
      {
        name: "Carter",
        slug: "carter",
        keywords: ["Dillon MT Small Business Marketing - Own Your Town's Search"],
      },
    ],
  },
}

// Rural Counties Data for rural county landing pages
export const ruralCounties = {
  nebraska: {
    state: "Nebraska",
    counties: [
      {
        name: "Box Butte",
        slug: "box-butte",
        keyword: "Low-Cost Website Help Near Alliance, Nebraska - No Jargon, Just Results",
        description:
          "We understand ranching families. Professional websites without confusing tech talk or crazy prices.",
        searchVolume: 40,
        businessTypes: ["Ranches", "Farm Operations", "Agricultural Businesses"],
        services: ["Website Design", "Business Listing", "Local SEO", "Simple Email Setup"],
        startingPrice: "$299/month",
        keywords: ["Website help Alliance NE", "Low cost web design Box Butte", "Farm website design Nebraska"],
      },
      {
        name: "Cherry",
        slug: "cherry",
        keyword: "Crop Insurance Agent Website Design & Lead Generation Systems",
        description: "Crop insurance agents have budget and need qualified leads. We deliver both.",
        searchVolume: 40,
        businessTypes: ["Insurance Agents", "Financial Services", "Agricultural Services"],
        services: ["Agent Website Design", "Lead Generation System", "Email Marketing", "Client Portal"],
        startingPrice: "$599",
        keywords: [
          "Crop insurance website Valentine NE",
          "Insurance agent marketing Cherry County",
          "Financial services website design",
        ],
      },
    ],
  },
  wyoming: {
    state: "Wyoming",
    counties: [
      {
        name: "Crook",
        slug: "crook",
        keyword: "Oil Field Services SEO & B2B Marketing for Industrial Contractors",
        description:
          "Industrial services need professional positioning. Rank higher than national competitors on Google.",
        searchVolume: 50,
        businessTypes: ["Oil & Gas Services", "Industrial Contractors", "Equipment Rental"],
        services: ["B2B Website Design", "Technical SEO", "Lead Generation", "Email Marketing"],
        startingPrice: "$699/month",
        keywords: ["Oil field services SEO Sundance WY", "Industrial contractor marketing", "B2B oil and gas"],
      },
      {
        name: "Niobrara",
        slug: "niobrara",
        keyword: "Cheap SEO for Seasonal Tourism & Dude Ranches in Niobrara County",
        description:
          "Seasonal tourism requires smart, budget-conscious marketing. Get booked solid during peak season.",
        searchVolume: 40,
        businessTypes: ["Dude Ranches", "Outfitters", "Tourism Businesses", "Lodges"],
        services: ["Seasonal SEO", "Website Design", "Booking System", "Review Management"],
        startingPrice: "$399/month",
        keywords: ["Dude ranch marketing Lusk WY", "Tourism website design Wyoming", "Seasonal business SEO"],
      },
    ],
  },
  massachusetts: {
    state: "Massachusetts",
    counties: [
      {
        name: "Franklin",
        slug: "franklin",
        keyword: "Small Business Website Design & Pricing - Western Massachusetts Specialist",
        description:
          "Rural Western Massachusetts. We know your market. Professional websites at prices that make sense for small shops.",
        searchVolume: 50,
        businessTypes: ["Retail", "Services", "Restaurants", "Professional Services"],
        services: ["Website Design", "Pricing Page Optimization", "Local SEO", "Mobile Responsive"],
        startingPrice: "$399",
        keywords: [
          "Website design Franklin MA",
          "Small business website Greenfield",
          "Affordable web design Western MA",
        ],
      },
      {
        name: "Dukes",
        slug: "dukes",
        keyword: "Contractor Marketing & High-Ticket Services for Martha's Vineyard",
        description:
          "Martha's Vineyard contractors have premium budgets. We help contractors and service pros win high-value clients.",
        searchVolume: 40,
        businessTypes: ["Contractors", "Service Professionals", "High-Ticket Services"],
        services: ["Contractor Website Design", "Lead Generation", "Project Portfolio", "Premium Brand Positioning"],
        startingPrice: "$899",
        keywords: [
          "Contractor marketing Martha's Vineyard",
          "Service professional website Edgartown",
          "Premium contractor SEO",
        ],
      },
    ],
  },
  vermont: {
    state: "Vermont",
    counties: [
      {
        name: "Orleans",
        slug: "orleans",
        keyword: "Maple Syrup Farm Website & Direct-to-Consumer Sales Platform",
        description:
          "Turn farm traffic into online sales. Build an e-commerce site for syrup, honey, and farm products.",
        searchVolume: 60,
        businessTypes: ["Maple Syrup Farms", "Agritourism", "Farm Products", "Direct Sales"],
        services: ["E-commerce Website", "Product Photography", "Email Marketing", "Farm Branding"],
        startingPrice: "$699",
        keywords: ["Maple syrup farm website Newport VT", "Farm e-commerce setup", "Agritourism website design"],
      },
      {
        name: "Essex",
        slug: "essex",
        keyword: "Affordable SEO for Dairy Farms - Essex County Vermont's Specialist",
        description: "Dairy farms in Essex County have specific needs. We understand your market and your budget.",
        searchVolume: 40,
        businessTypes: ["Dairy Farms", "Agriculture", "Agritourism"],
        services: ["Local SEO", "Farm Website Design", "Supplier Listings", "Google Maps Optimization"],
        startingPrice: "$399/month",
        keywords: ["Dairy farm SEO Essex VT", "Affordable farm marketing", "Agricultural website design Vermont"],
      },
    ],
  },
  kansas: {
    state: "Kansas",
    counties: [
      {
        name: "Sherman",
        slug: "sherman",
        keyword: "AG Equipment Repair Website - Urgent Mobile Search Optimization",
        description:
          "Farmers search on mobile when equipment breaks. Rank #1 in Goodland for equipment repair emergencies.",
        searchVolume: 70,
        businessTypes: ["Farm Equipment Repair", "Agricultural Services", "Heavy Equipment"],
        services: ["Website Design", "Mobile Optimization", "Emergency Service Listing", "Local SEO"],
        startingPrice: "$499",
        keywords: [
          "Equipment repair website Goodland KS",
          "Farm equipment service marketing",
          "Agricultural repair SEO",
        ],
      },
      {
        name: "Thomas",
        slug: "thomas",
        keyword: "Affordable Website Hosting for Colby Kansas Businesses - Local Trust",
        description:
          "Rural businesses want local trust, not faceless hosting companies. We handle everything from one place.",
        searchVolume: 40,
        businessTypes: ["All Local Businesses", "Small Retailers", "Services"],
        services: ["Website Design & Hosting", "Email Setup", "Backup & Security", "Local Support"],
        startingPrice: "$199/month (Hosting + Website)",
        keywords: ["Website hosting Colby KS", "Local web design Thomas County", "Small business hosting Kansas"],
      },
    ],
  },
  alabama: {
    state: "Alabama",
    counties: [
      {
        name: "Macon",
        slug: "macon",
        keyword: "Affordable Church Website Design for Macon County, AL",
        description:
          "Help your church reach the community with an affordable website featuring streaming, donations, and event management.",
        searchVolume: 90,
        businessTypes: ["Churches", "Nonprofits", "Community Organizations"],
        services: ["Website Design", "Donation Setup", "Event Management", "Google Maps Listing"],
        startingPrice: "$299/month",
        keywords: ["Church website design Macon AL", "Affordable church website Tuskegee", "Nonprofit website design"],
      },
      {
        name: "Greene",
        slug: "greene",
        keyword: "Small Business Loans Help & Digital Marketing for Greene County, AL",
        description:
          "We guide small business owners through DBA registration and help you get found online so loans are easier to secure.",
        searchVolume: 40,
        businessTypes: ["Startups", "Small Retail", "Service Businesses"],
        services: ["Business Registration Guide", "Website Design", "Local SEO", "Google Ads"],
        startingPrice: "$499",
        keywords: ["Small business loans Greene AL", "DBA registration help", "Business setup Eutaw"],
      },
      {
        name: "Hale",
        slug: "hale",
        keyword: "Cheap Website Builder for Mechanics & Trade Services in Hale County",
        description:
          "Get your trade business online with affordable web design starting at $299/month. No fancy jargon, just results.",
        searchVolume: 50,
        businessTypes: ["Mechanics", "HVAC", "Plumbers", "Contractors"],
        services: ["Website Design", "Service Area Mapping", "Local SEO", "Lead Generation"],
        startingPrice: "$299/month",
        keywords: ["Cheap website builder Greensboro AL", "Mechanic website design", "HVAC marketing"],
      },
      {
        name: "Winston",
        slug: "winston",
        keyword: "Get Your Business on Google Maps - Free Guidance in Winston County",
        description:
          "Many Winston County businesses are missing from Google Maps. We help you claim and verify your listing free.",
        searchVolume: 20,
        businessTypes: ["All Local Businesses"],
        services: ["Google Business Profile Optimization", "Maps Verification", "Business Registration"],
        startingPrice: "$50 (Free Guidance)",
        keywords: [
          "Get on Google Maps Hayleyville",
          "Google business listing Winston County",
          "Local search optimization",
        ],
      },
      {
        name: "Wilcox",
        slug: "wilcox",
        keyword: "Low Cost Funeral Home Marketing & Reputation Management",
        description:
          "Recession-proof marketing for funeral homes. Help families find your services and build trust with your community.",
        searchVolume: 40,
        businessTypes: ["Funeral Homes", "Cemeteries", "Memorial Services"],
        services: ["Website Design", "Reputation Management", "Local SEO", "Lead Generation"],
        startingPrice: "$499/month",
        keywords: [
          "Funeral home marketing Camden AL",
          "Low cost funeral advertising",
          "Reputation management funeral services",
        ],
      },
    ],
  },
  arizona: {
    state: "Arizona",
    counties: [
      {
        name: "Cochise",
        slug: "cochise",
        keyword: "RV Park Website Design & Booking System for Snowbird Season",
        description:
          "Get booked solid with an RV park website optimized for snowbird searches. Streamline reservations and maximize occupancy.",
        searchVolume: 110,
        businessTypes: ["RV Parks", "Campgrounds", "Vacation Rentals"],
        services: ["Website Design", "Booking System Integration", "Seasonal Marketing", "Reviews Management"],
        startingPrice: "$799",
        keywords: ["RV park website design Arizona", "Bisbee vacation rental", "Campground booking system"],
      },
      {
        name: "Gila",
        slug: "gila",
        keyword: "Mining Contractor Safety & Professional Website for Gila County",
        description:
          "B2B website design specifically for mining and construction contractors. Build legitimacy and win bids.",
        searchVolume: 50,
        businessTypes: ["Mining Contractors", "Construction", "Industrial Services"],
        services: ["B2B Website Design", "Safety Portfolio Setup", "Local SEO", "Bid Management System"],
        startingPrice: "$699",
        keywords: ["Mining contractor website Globe AZ", "Construction website Payson", "B2B mining services"],
      },
      {
        name: "Graham",
        slug: "graham",
        keyword: "Affordable Web Design for Safford, Arizona Businesses - Starting at $299/month",
        description:
          "Get a professional online presence without the premium price tag. Direct service search with high conversion rates.",
        searchVolume: 90,
        businessTypes: ["All Local Businesses", "Retail", "Services"],
        services: ["Website Design", "Mobile Optimization", "Local SEO", "Basic Analytics"],
        startingPrice: "$299/month",
        keywords: ["Affordable web design Safford AZ", "Website builder Graham County", "Business website setup"],
      },
      {
        name: "La Paz",
        slug: "la-paz",
        keyword: "Mobile Home Dealer Marketing & Lead Generation Agency",
        description:
          "High-ticket sales require high-impact marketing. We specialize in getting qualified buyers for mobile home dealers.",
        searchVolume: 30,
        businessTypes: ["Mobile Home Dealers", "RV Dealers", "Real Estate"],
        services: ["Website Design", "Lead Generation Ads", "Social Media Marketing", "Email Campaigns"],
        startingPrice: "$599/month",
        keywords: ["Mobile home dealer marketing Parker AZ", "RV sales marketing", "High ticket sales ads"],
      },
    ],
  },
  montana: {
    state: "Montana",
    counties: [
      {
        name: "Beaverhead",
        slug: "beaverhead",
        keyword: "Hunting Guide Website Design & Booking System for Seasonal Businesses",
        description:
          "High-ticket seasonal business? Get an online booking system that attracts out-of-state hunters year-round.",
        searchVolume: 80,
        businessTypes: ["Hunting Guides", "Outfitters", "Lodges", "Adventure Tourism"],
        services: ["Website Design", "Booking System", "Photo Gallery", "Email Marketing"],
        startingPrice: "$799",
        keywords: ["Hunting guide website Dillon MT", "Outfitter booking system", "Adventure tourism website"],
      },
      {
        name: "Daniels",
        slug: "daniels",
        keyword: "Cattle Ranch Logo & Direct-to-Consumer Beef Website Design",
        description: "Modern ranches sell direct. We build beautiful websites that help you sell premium beef online.",
        searchVolume: 40,
        businessTypes: ["Cattle Ranches", "Grass-Fed Beef", "Agricultural Businesses"],
        services: ["Brand Design", "E-commerce Setup", "Email Marketing", "Farm-to-Table Positioning"],
        startingPrice: "$699",
        keywords: ["Cattle ranch website Ekalaka MT", "Grass fed beef website", "Farm branding design"],
      },
      {
        name: "Carter",
        slug: "carter",
        keyword: "Dillon MT Small Business Marketing - Own Your Town's Search",
        description: "In a town of 4,000 people, you can dominate all local search. Let's make Dillon find you first.",
        searchVolume: 30,
        businessTypes: ["All Local Businesses"],
        services: ["Local SEO", "Google Business Profile", "Website Design", "Local Ads"],
        startingPrice: "$499",
        keywords: ["Small business marketing Dillon MT", "Dillon local SEO", "Montana small business help"],
      },
    ],
  },
}
