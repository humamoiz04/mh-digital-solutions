import type { Metadata } from "next"

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  canonical?: string
  openGraph?: {
    title: string
    description: string
    image?: string
  }
}

export const defaultSEO: SEOConfig = {
  title: "MH Digital Solution - AI-Powered Digital Marketing & Web Development",
  description:
    "Transform your business with innovative digital marketing, web development, and AI automation solutions. Trusted by 500+ clients worldwide.",
  keywords: [
    "digital marketing",
    "web development",
    "AI automation",
    "SEO services",
    "PPC advertising",
    "social media marketing",
    "content marketing",
    "email marketing",
    "mobile app development",
    "e-commerce solutions",
  ],
  canonical: "https://www.mhdigitalsolution.com",
  openGraph: {
    title: "MH Digital Solution - AI-Powered Digital Marketing & Web Development",
    description:
      "Transform your business with innovative digital marketing, web development, and AI automation solutions. Trusted by 500+ clients worldwide.",
    image: "https://www.mhdigitalsolution.com/images/og-image.webp",
  },
}

export const serviceSEO = {
  "digital-marketing": {
    title: "Digital Marketing Services | MH Digital Solution",
    description:
      "Boost your online presence with our comprehensive digital marketing services. SEO, PPC, social media, and content marketing solutions.",
    keywords: [
      "digital marketing services",
      "online marketing",
      "digital advertising",
      "marketing strategy",
      "brand awareness",
    ],
    canonical: "https://www.mhdigitalsolution.com/services/digital-marketing",
  },
  "web-development": {
    title: "Professional Web Development Services | MH Digital Solution",
    description:
      "Custom web development solutions using modern technologies. Responsive, fast, and SEO-optimized websites for your business.",
    keywords: ["web development", "custom websites", "responsive design", "web applications", "frontend development"],
    canonical: "https://www.mhdigitalsolution.com/services/web-development",
  },
  "mobile-app-development": {
    title: "Mobile App Development Services | iOS & Android Apps",
    description:
      "Professional mobile app development for iOS and Android. Custom mobile solutions to grow your business and engage customers.",
    keywords: ["mobile app development", "iOS apps", "Android apps", "mobile applications", "app design"],
    canonical: "https://www.mhdigitalsolution.com/services/mobile-app-development",
  },
  "ecommerce-solutions": {
    title: "E-commerce Development Solutions | Online Store Development",
    description:
      "Complete e-commerce solutions to launch and grow your online store. Custom shopping platforms with payment integration.",
    keywords: ["e-commerce development", "online store", "shopping cart", "payment integration", "e-commerce platform"],
    canonical: "https://www.mhdigitalsolution.com/services/ecommerce-solutions",
  },
  "it-consulting": {
    title: "IT Consulting Services | Technology Strategy & Solutions",
    description:
      "Expert IT consulting services to optimize your technology infrastructure and drive digital transformation.",
    keywords: [
      "IT consulting",
      "technology strategy",
      "digital transformation",
      "IT solutions",
      "technology consulting",
    ],
    canonical: "https://www.mhdigitalsolution.com/services/it-consulting",
  },
}

export function generateMetadata(config: SEOConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(", "),
    alternates: {
      canonical: config.canonical,
    },
    openGraph: config.openGraph
      ? {
          title: config.openGraph.title,
          description: config.openGraph.description,
          url: config.canonical,
          siteName: "MH Digital Solution",
          images: config.openGraph.image
            ? [
                {
                  url: config.openGraph.image,
                  width: 1200,
                  height: 630,
                  alt: config.openGraph.title,
                },
              ]
            : [],
          locale: "en_US",
          type: "website",
        }
      : undefined,
    twitter: config.openGraph
      ? {
          card: "summary_large_image",
          title: config.openGraph.title,
          description: config.openGraph.description,
          images: config.openGraph.image ? [config.openGraph.image] : [],
        }
      : undefined,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
