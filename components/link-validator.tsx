"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ExternalLink, AlertTriangle, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ValidatedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
  showStatus?: boolean
}

export function ValidatedLink({
  href,
  children,
  className = "",
  external = false,
  showStatus = false,
}: ValidatedLinkProps) {
  const [linkStatus, setLinkStatus] = useState<"checking" | "valid" | "broken" | "external">("checking")

  useEffect(() => {
    const validateLink = async () => {
      // Check if it's an external link
      if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        setLinkStatus("external")
        return
      }

      // For internal links, check if they exist in our route structure
      const internalRoutes = [
        "/",
        "/about",
        "/team",
        "/the-mh-edge",
        "/services",
        "/services/digital-marketing",
        "/services/seo-services",
        "/services/ppc-advertising",
        "/services/social-media-marketing",
        "/services/content-marketing",
        "/services/email-marketing",
        "/services/lead-generation",
        "/services/web-development",
        "/services/web-design",
        "/services/mobile-app-development",
        "/services/ui-ux-design",
        "/services/ecommerce-solutions",
        "/services/ai-automation",
        "/services/cloud-solutions",
        "/services/business-analytics",
        "/services/it-consulting",
        "/services/business-consulting",
        "/services/business-registration",
        "/services/business-insurance",
        "/case-studies",
        "/blog",
        "/pricing",
        "/faq",
        "/contact",
        "/appointment",
        "/portfolio",
        "/privacy-policy",
        "/terms-of-service",
        "/cookie-settings",
        "/offers/hundred-dollar-website",
        "/tools/website-cost-calculator",
        "/referral-rewards",
        "/local",
        "/local/rural-counties",
        "/locations",
        "/resources",
      ]

      if (internalRoutes.includes(href)) {
        setLinkStatus("valid")
      } else {
        setLinkStatus("broken")
      }
    }

    validateLink()
  }, [href])

  const getStatusIcon = () => {
    switch (linkStatus) {
      case "valid":
        return <CheckCircle className="h-3 w-3 text-green-500" />
      case "broken":
        return <AlertTriangle className="h-3 w-3 text-red-500" />
      case "external":
        return <ExternalLink className="h-3 w-3 text-blue-500" />
      default:
        return null
    }
  }

  const getStatusBadge = () => {
    if (!showStatus) return null

    switch (linkStatus) {
      case "broken":
        return (
          <Badge variant="destructive" className="ml-2 text-xs">
            404
          </Badge>
        )
      case "external":
        return (
          <Badge variant="secondary" className="ml-2 text-xs">
            External
          </Badge>
        )
      default:
        return null
    }
  }

  if (external || linkStatus === "external") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} ${linkStatus === "broken" ? "text-red-500" : ""}`}
      >
        {children}
        {showStatus && getStatusIcon()}
        {getStatusBadge()}
      </a>
    )
  }

  return (
    <Link href={href} className={`${className} ${linkStatus === "broken" ? "text-red-500" : ""}`}>
      {children}
      {showStatus && getStatusIcon()}
      {getStatusBadge()}
    </Link>
  )
}
