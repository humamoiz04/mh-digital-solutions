export const dynamic = 'force-static';

import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mhdigitalsolution.com"
  const now = new Date()

  const montanaCities = [
    "billings",
    "bozeman",
    "red-lodge",
    "big-timber",
    "round-up",
    "lewistown",
    "great-falls",
    "jordan",
    "miles-city",
    "glendive",
    "glasgow",
    "havre",
    "butte",
    "missoula",
  ]

  const wyomingCities = ["cheyenne", "casper", "laramie", "rock-springs", "sheridan", "jackson", "gillette"]
  const westVirginiaCities = ["morgantown", "charleston", "huntington", "wheeling", "fairmont", "martinsburg"]
  const kansasCities = ["olathe", "wichita"]

  const allCities = [...montanaCities, ...wyomingCities, ...westVirginiaCities, ...kansasCities]

  const localServicePages = allCities.flatMap((city) => [
    `/local/${city}`,
    `/local/${city}/seo`,
    `/local/${city}/web-design`,
    `/local/${city}/digital-marketing`,
    `/local/${city}/near-me`,
  ])



  const paths = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/pricing",
    "/portfolio",
    "/case-studies",
    "/faq",
    "/team",
    "/the-mh-edge",
    "/appointment",
    "/privacy-policy",
    "/terms-of-service",
    // Services
    "/services/seo-services",
    "/services/social-media-marketing",
    "/services/web-design",
    "/services/web-development",
    "/services/mobile-app-development",
    "/services/business-analytics",
    "/services/cloud-solutions",
    "/services/it-consulting",
    "/services/lead-generation",
    "/services/ppc-advertising",
    "/services/content-marketing",
    "/services/email-marketing",
    "/services/business-registration",
    "/services/business-insurance",
    "/services/ai-automation",
    "/services/digital-marketing",
    "/services/ecommerce-solutions",
    // Blog posts
    "/blog/dual-track-seo-strategy",
    "/blog/digital-marketing-services-valletta-malta",
    "/blog/affordable-seo-agency-billings-montana",
    "/blog/best-web-design-company-wichita-kansas",
    "/blog/small-business-consulting-charleston-wv",
    "/blog/ecommerce-solutions-casper-wyoming",
    "/blog/shopify-experts-anchorage-alaska",
    "/blog/ai-automation-tools-montana-businesses",
    "/blog/workflow-automation-malta-city",
    "/blog/digital-marketing-agency-glendive-montana",
    "/blog/seo-for-restaurants-malta",
    "/blog/ai-automation-revolution-2024",
    "/blog/seo-strategies-2024",
    "/blog/mobile-app-development-trends-2024",
    "/blog/content-marketing-strategies-2024",
    "/blog/social-media-marketing-2024",
    // Case studies
    "/case-studies/techcorp-ai-automation",
    "/case-studies/fitlife-gyms-scaling",
    "/case-studies/healthcare-digital-transformation",
    "/case-studies/ecommerce-platform-growth",
    "/case-studies/saas-lead-generation",
    "/case-studies/local-business-seo",
    "/case-studies/drilling-supply-gillette-wy",
    "/case-studies/jackson-hole-resort-website-redesign",
    "/case-studies/cheyenne-ppc-management-success",
    "/case-studies/casper-ecommerce-seo-package",
    "/case-studies/morgantown-law-firm-seo",
    "/case-studies/charleston-real-estate-ppc",
    "/case-studies/huntington-app-development",
    "/case-studies/olathe-automotive-local-seo",
    "/case-studies/wichita-affordable-seo-package",
    // Local SEO pages
    ...localServicePages,
  ]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path.includes("/local/") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path.includes("/local/") ? 0.6 : 0.7,
  }))
}
