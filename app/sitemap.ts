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
  ]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }))
}
