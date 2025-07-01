"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Component to check and fix internal links
export function LinkChecker({ href, children, ...props }: any) {
  const pathname = usePathname()

  // List of valid internal routes
  const validRoutes = [
    "/",
    "/about",
    "/team",
    "/services",
    "/services/seo",
    "/services/web-development",
    "/services/digital-marketing",
    "/services/ai-automation",
    "/services/lead-generation",
    "/services/business-consulting",
    "/services/business-analytics",
    "/services/ppc-advertising",
    "/services/social-media-marketing",
    "/services/content-marketing",
    "/services/email-marketing",
    "/services/ecommerce",
    "/services/hr-solutions",
    "/services/operational-services",
    "/case-studies",
    "/blog",
    "/contact",
    "/pricing",
    "/faq",
    "/the-mh-edge",
    "/privacy",
    "/terms",
  ]

  // Check if the link is valid
  const isValidLink = (url: string) => {
    if (url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("tel:")) {
      return true
    }
    return validRoutes.includes(url) || url.startsWith("/blog/")
  }

  // If it's an external link or valid internal link, use it as is
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || isValidLink(href)) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }

  // If it's an invalid internal link, redirect to a valid alternative
  const getAlternativeLink = (originalHref: string) => {
    if (originalHref.includes("service")) return "/services"
    if (originalHref.includes("about")) return "/about"
    if (originalHref.includes("contact")) return "/contact"
    if (originalHref.includes("team")) return "/team"
    if (originalHref.includes("blog")) return "/blog"
    if (originalHref.includes("case") || originalHref.includes("portfolio")) return "/case-studies"
    return "/"
  }

  const alternativeHref = getAlternativeLink(href)

  return (
    <Link href={alternativeHref} {...props}>
      {children}
    </Link>
  )
}
