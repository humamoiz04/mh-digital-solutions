import type { Metadata } from "next"

interface PageMetadata {
  title: string
  description: string
  keywords?: string
  image?: string
  path: string
}

export function generatePageMetadata({
  title,
  description,
  keywords,
  image = "/images/og-image.webp",
  path,
}: PageMetadata): Metadata {
  const baseUrl = "https://www.mhdigitalsolution.com"
  const fullUrl = `${baseUrl}${path}`
  const fullTitle = `${title} | MH Digital Solution`

  return {
    title: fullTitle,
    description,
    keywords: keywords || "digital marketing, web development, AI automation, business consulting",
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: "MH Digital Solution",
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${baseUrl}${image}`],
    },
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

// Service page metadata generator
export function generateServiceMetadata(serviceName: string, serviceDescription: string): Metadata {
  return generatePageMetadata({
    title: `${serviceName} Services`,
    description: `Professional ${serviceName.toLowerCase()} services that drive results. ${serviceDescription}`,
    keywords: `${serviceName.toLowerCase()}, digital marketing, web development, business growth, professional services`,
    path: `/services/${serviceName.toLowerCase().replace(/\s+/g, "-")}`,
  })
}

// Blog post metadata generator
export function generateBlogMetadata(title: string, excerpt: string, slug: string): Metadata {
  return generatePageMetadata({
    title,
    description: excerpt,
    keywords: "digital marketing blog, business insights, marketing tips, web development",
    path: `/blog/${slug}`,
  })
}

// Case study metadata generator
export function generateCaseStudyMetadata(title: string, description: string, slug: string): Metadata {
  return generatePageMetadata({
    title,
    description,
    keywords: "case studies, client success stories, digital marketing results, business growth",
    path: `/case-studies/${slug}`,
  })
}
