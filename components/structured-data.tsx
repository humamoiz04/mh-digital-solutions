"use client"

import { usePathname } from "next/navigation"

interface StructuredDataProps {
  type?:
    | "Organization"
    | "LocalBusiness"
    | "Service"
    | "Article"
    | "BreadcrumbList"
    | "Review"
    | "AggregateRating"
    | "FAQPage"
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
              telephone: "+17072491222",
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
              telephone: "+17072491222",
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
            reviewCount: "127",
          },
          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Maria S.",
                url: "https://www.mhdigitalsolution.com",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "Within 3 weeks of launching our new website, we had our first 25 online customers. The ROI has been incredible! Highly recommend MH Digital Solution for any business looking to grow online.",
              datePublished: "2024-11-15",
              name: "Outstanding Results and Professional Service",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "James T.",
                url: "https://www.mhdigitalsolution.com",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "Our website conversion rate went from 1.2% to 4.8% after the redesign. We're booking 3x more appointments! The team's expertise in UX and conversion optimization is unmatched.",
              datePublished: "2024-11-10",
              name: "Conversion Rate Optimization Excellence",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Lisa R.",
                url: "https://www.mhdigitalsolution.com",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "We went from 50 to 300+ leads per month. Our revenue has tripled and we're expanding to new locations! MH Digital Solution truly understands digital marketing.",
              datePublished: "2024-11-05",
              name: "Exceptional Lead Generation Results",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "David M.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "Professional, knowledgeable, and results-driven team. They took the time to understand our business needs and delivered a comprehensive strategy that exceeded expectations.",
              datePublished: "2024-10-28",
              name: "Professional and Results-Driven",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Sarah K.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "The SEO improvements we saw within 3 months were remarkable. Our organic traffic increased by 180% and we're finally on page 1 for our target keywords!",
              datePublished: "2024-10-15",
              name: "Outstanding SEO Results",
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
          telephone: "+17072491222",
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
            telephone: "+17072491222",
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
            telephone: "+17072491222",
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

      case "FAQPage":
        return {
          ...baseData,
          mainEntity: data.faqs || [
            {
              "@type": "Question",
              name: "What digital marketing services do you offer in Valletta Malta?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer social media management, PPC advertising, SEO, content marketing, and reputation management tailored to businesses in Valletta Malta.",
              },
            },
            {
              "@type": "Question",
              name: "How do your SEO services help local Montana businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our SEO services focus on local keyword targeting, Google My Business optimization, competitor analysis, and quality link building to increase local search rankings.",
              },
            },
            {
              "@type": "Question",
              name: "What types of websites do you develop for Wichita businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We design responsive, mobile-friendly websites including corporate sites, e-commerce stores, landing pages, and custom applications tailored to client needs.",
              },
            },
            {
              "@type": "Question",
              name: "What services do your small business consulting offers include?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We provide strategic planning, digital transformation guidance, market analysis, and process optimization tailored for Charleston WV businesses.",
              },
            },
            {
              "@type": "Question",
              name: "What ecommerce platforms do you specialize in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We primarily work with Shopify and WooCommerce, offering full-service store development, customization, and optimization.",
              },
            },
            {
              "@type": "Question",
              name: "What Shopify services do you provide?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "From store setup and theme customization to marketing strategy and sales optimization, we cover all aspects of Shopify development.",
              },
            },
            {
              "@type": "Question",
              name: "What kind of AI automation solutions do you offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We provide workflow automation, customer engagement bots, data analytics, and process optimization tools powered by AI.",
              },
            },
            {
              "@type": "Question",
              name: "What workflow automation services are available?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We implement CRM automation, task management systems, email marketing automation, and custom business process tools.",
              },
            },
            {
              "@type": "Question",
              name: "What digital marketing channels do you specialize in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our expertise spans SEO, PPC advertising, social media marketing, content marketing, and email campaigns.",
              },
            },
            {
              "@type": "Question",
              name: "What SEO strategies are best for restaurants?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Optimizing Google My Business, integrating menu keywords, acquiring local citations, and managing customer reviews.",
              },
            },
          ],
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
