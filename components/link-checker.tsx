"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ExternalLink, AlertTriangle } from "lucide-react"

interface SafeLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
  target?: string
  rel?: string
}

export function SafeLink({ href, children, className, external, target, rel, ...props }: SafeLinkProps) {
  const [isValidLink, setIsValidLink] = useState(true)

  useEffect(() => {
    // Check if internal link exists (basic validation)
    if (!external && href.startsWith("/")) {
      // You could implement more sophisticated link checking here
      // For now, we'll assume internal links are valid
      setIsValidLink(true)
    }
  }, [href, external])

  // External link
  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={`${className} inline-flex items-center gap-1`}
        {...props}
      >
        {children}
        <ExternalLink className="h-3 w-3" />
      </a>
    )
  }

  // Internal link with validation
  if (!isValidLink) {
    return (
      <span className={`${className} text-red-500 inline-flex items-center gap-1`}>
        {children}
        <AlertTriangle className="h-3 w-3" />
      </span>
    )
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}
