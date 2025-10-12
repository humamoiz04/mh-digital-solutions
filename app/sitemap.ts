import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mhdigitalsolution.com"
  const now = new Date()

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
    // Services (top)
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
  ]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }))
}
