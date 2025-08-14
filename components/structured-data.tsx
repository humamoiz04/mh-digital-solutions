"use client"

import { usePathname } from "next/navigation"

interface StructuredDataProps {
  type?: "Organization" | "LocalBusiness" | "Service" | "Article" | "BreadcrumbList" | "Review" | "AggregateRating"
  data?: Record<string, any>
}

export function StructuredData({ type = "Organization", data = {} }: StructuredDataProps) {
  const pathname = usePathname()

  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
    }

    switch (type) {
      case "Organization":
        return {
          ...baseData,
          name: "MH Digital Solution",
          alternateName: "MH Digital Solutions",
          url: "https://www.mhdigitalsolution.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.mhdigitalsolution.com/images/mh-digital-solutions-logo.webp",
            width: 300,
            height: 100,
          },
          image: "https://www.mhdigitalsolution.com/images/mh-digital-solutions-logo.webp",
          description: "AI-Powered Digital Marketing & Web Development Solutions trusted by 500+ businesses worldwide",
          slogan: "Transforming Businesses Through Digital Excellence",
          founder: {
            "@type": "Person",
            name: "MK",
            jobTitle: "CEO & Founder",
            image: "https://www.mhdigitalsolution.com/images/mk-ceo.webp",
          },
          foundingDate: "2019",
          numberOfEmployees: "10-50",
          industry: "Digital Marketing and Web Development",
          sameAs: [
            "https://www.linkedin.com/company/mh-digital-solution",
            "https://twitter.com/mhdigitalsol",
            "https://facebook.com/mhdigitalsolution",
            "https://instagram.com/mhdigitalsolutions",
            "https://www.youtube.com/@mhdigitalsolutions",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+17075822255",
              contactType: "customer service",
              availableLanguage: ["English"],
              hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
              },
            },
            {
              "@type": "ContactPoint",
              contactType: "sales",
              telephone: "+17075822255",
              availableLanguage: ["English"],
            },
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
            addressRegion: "United States",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "127",
            reviewCount: "98",
          },
          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Maria S.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "Within 3 weeks of launching, we had our first 25 online customers. The ROI has been incredible!",
              datePublished: "2024-11-15",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "James T.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "Our website conversion rate went from 1.2% to 4.8% after the redesign. We're booking 3x more appointments!",
              datePublished: "2024-11-10",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Lisa R.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "We went from 50 to 300+ leads per month. Our revenue has tripled and we're expanding to new locations!",
              datePublished: "2024-11-05",
            },
          ],
          ...data,
        }

      case "LocalBusiness":
        return {
          ...baseData,
          "@type": ["LocalBusiness", "ProfessionalService"],
          name: "MH Digital Solution",
          alternateName: "MH Digital Solutions",
          image: [
            "https://www.mhdigitalsolution.com/images/mh-digital-solutions-logo.webp",
            "https://www.mhdigitalsolution.com/images/office-exterior.webp",
            "https://www.mhdigitalsolution.com/images/team-working.webp",
          ],
          "@id": "https://www.mhdigitalsolution.com",
          url: "https://www.mhdigitalsolution.com",
          telephone: "+17075822255",
          email: "info@mhdigitalsolution.com",
          description:
            "Leading digital marketing agency specializing in AI-powered solutions, web development, and business growth strategies. Serving businesses nationwide with proven results.",
          priceRange: "$149-$2499",
          currenciesAccepted: "USD",
          paymentAccepted: ["Credit Card", "PayPal", "Bank Transfer", "Check"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Digital Marketing Hub",
            addressLocality: "Austin",
            addressRegion: "TX",
            postalCode: "78701",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 30.2672,
            longitude: -97.7431,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00",
              validFrom: "2024-01-01",
              validThrough: "2024-12-31",
            },
          ],
          areaServed: [
            {
              "@type": "Country",
              name: "United States",
            },
            {
              "@type": "State",
              name: "Texas",
            },
            {
              "@type": "State",
              name: "California",
            },
            {
              "@type": "State",
              name: "New York",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "127",
            reviewCount: "98",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Digital Marketing & Web Development Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SEO Services",
                  description: "Search Engine Optimization to improve your website's visibility",
                },
                priceRange: "$249-$999",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Web Development",
                  description: "Custom website development and design services",
                },
                priceRange: "$149-$1299",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Automation",
                  description: "AI-powered business automation solutions",
                },
                priceRange: "$1699-$2499",
              },
            ],
          },
          sameAs: [
            "https://www.linkedin.com/company/mh-digital-solution",
            "https://twitter.com/mhdigitalsol",
            "https://facebook.com/mhdigitalsolution",
            "https://instagram.com/mhdigitalsolutions",
            "https://www.youtube.com/@mhdigitalsolutions",
            "https://www.yelp.com/biz/mh-digital-solution",
            "https://www.google.com/maps/place/mh-digital-solution",
          ],
          ...data,
        }

      case "Service":
        return {
          ...baseData,
          name: data.serviceName || "Digital Marketing Services",
          serviceType: data.serviceType || "Digital Marketing Services",
          description: data.description || "Comprehensive digital marketing solutions to grow your business online",
          provider: {
            "@type": "LocalBusiness",
            name: "MH Digital Solution",
            url: "https://www.mhdigitalsolution.com",
            telephone: "+17075822255",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "127",
            },
          },
          areaServed: {
            "@type": "Country",
            name: "United States",
          },
          category: "Digital Marketing",
          brand: {
            "@type": "Brand",
            name: "MH Digital Solution",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: data.price || "249",
            priceValidUntil: "2024-12-31",
            availability: "https://schema.org/InStock",
            validFrom: "2024-01-01",
          },
          ...data,
        }

      case "Review":
        return {
          ...baseData,
          itemReviewed: {
            "@type": "LocalBusiness",
            name: "MH Digital Solution",
            image: "https://www.mhdigitalsolution.com/images/mh-digital-solutions-logo.webp",
            telephone: "+17075822255",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Austin",
              addressRegion: "TX",
              addressCountry: "US",
            },
          },
          author: {
            "@type": "Person",
            name: data.authorName || "Satisfied Customer",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: data.rating || "5",
            bestRating: "5",
            worstRating: "1",
          },
          reviewBody: data.reviewText || "Excellent service and outstanding results!",
          datePublished: data.datePublished || new Date().toISOString().split("T")[0],
          ...data,
        }

      case "AggregateRating":
        return {
          ...baseData,
          itemReviewed: {
            "@type": "LocalBusiness",
            name: "MH Digital Solution",
            image: "https://www.mhdigitalsolution.com/images/mh-digital-solutions-logo.webp",
          },
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "127",
          reviewCount: "98",
          ...data,
        }

      case "BreadcrumbList":
        const pathSegments = pathname.split("/").filter(Boolean)
        const breadcrumbs = [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.mhdigitalsolution.com",
          },
        ]

        pathSegments.forEach((segment, index) => {
          const url = `https://www.mhdigitalsolution.com/${pathSegments.slice(0, index + 1).join("/")}`
          const name = segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

          breadcrumbs.push({
            "@type": "ListItem",
            position: index + 2,
            name,
            item: url,
          })
        })

        return {
          ...baseData,
          itemListElement: breadcrumbs,
          ...data,
        }

      default:
        return { ...baseData, ...data }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}
