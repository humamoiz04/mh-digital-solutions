import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FloatingBlobs from "@/components/floating-blobs"
import { EnhancedChatWidget } from "@/components/enhanced-chat-widget"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { PromoBanner } from "@/components/promo-banner"
import { ChristmasPromoPopup } from "@/components/christmas-promo-popup"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "MH Digital Solution - AI-Powered Digital Marketing & Web Development",
  description:
    "Transform your business with our innovative digital marketing, web development, and AI automation solutions. Trusted by 500+ clients worldwide with proven ROI results.",
  keywords:
    "digital marketing, web development, AI automation, SEO services, PPC advertising, social media marketing, business consulting, e-commerce solutions, mobile app development",
  authors: [{ name: "MH Digital Solution", url: "https://www.mhdigitalsolution.com" }],
  creator: "MH Digital Solution",
  publisher: "MH Digital Solution",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com",
    languages: {
      "x-default": "/",
      "en-US": "/",
      "en-MT": "/mt",
    },
  },
  openGraph: {
    title: "MH Digital Solution - AI-Powered Digital Marketing & Web Development",
    description:
      "Transform your business with our innovative digital marketing, web development, and AI automation solutions. Trusted by 500+ clients worldwide with proven ROI results.",
    url: "https://www.mhdigitalsolution.com",
    siteName: "MH Digital Solution",
    images: [
      {
        url: "https://www.mhdigitalsolution.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "MH Digital Solution - Digital Marketing & Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MH Digital Solution - AI-Powered Digital Marketing",
    description:
      "Transform your business with innovative digital solutions. Trusted by 500+ clients worldwide with proven ROI results.",
    images: ["https://www.mhdigitalsolution.com/images/og-image.webp"],
    creator: "@mhdigitalsolution",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Digital Marketing Services",
  classification: "Business Services",
  other: {
    "msapplication-TileColor": "#d946ef",
    "msapplication-config": "/browserconfig.xml",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JQ9GMD3G1C" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JQ9GMD3G1C');
            `,
          }}
        />

        <link rel="preload" href="/images/mh-digital-solutions-logo.webp" as="image" type="image/webp" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/colorful-chatbot-icon.png" as="image" type="image/png" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//api.whatsapp.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5" />
        <meta name="theme-color" content="#d946ef" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MH Digital Solution" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MH Digital Solution",
              url: "https://www.mhdigitalsolution.com",
              telephone: "+17072491222",
              email: "info@mhdigitalsolution.com",
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "Malta" },
                { "@type": "State", name: "Wyoming" },
                { "@type": "State", name: "Colorado" },
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=61569037172478",
                "https://www.instagram.com/mh_digitalsolutions/",
                "https://linkedin.com/company/mh-digital-solution",
              ],
              serviceType: [
                "SEO Services",
                "Web Design",
                "Web Development",
                "PPC Advertising",
                "Social Media Marketing",
                "AI Automation",
                "Mobile App Development",
                "E-commerce Solutions",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "127",
                reviewCount: "127",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MH Digital Solution",
              url: "https://www.mhdigitalsolution.com",
              logo: "https://www.mhdigitalsolution.com/images/mh-digital-solutions-logo.webp",
              description: "AI-Powered Digital Marketing & Web Development Solutions",
              founder: {
                "@type": "Person",
                name: "MK",
              },
              contact: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+17072491222",
                email: "info@mhdigitalsolution.com",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "127",
                reviewCount: "127",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.mhdigitalsolution.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://www.mhdigitalsolution.com/services",
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "LocalBusiness",
                name: "MH Digital Solution",
                url: "https://www.mhdigitalsolution.com",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
              },
              author: {
                "@type": "Organization",
                name: "MH Digital Solution Clients",
              },
              datePublished: new Date().toISOString().split("T")[0],
              reviewBody:
                "MH Digital Solution delivers exceptional results with innovative strategies and expert execution.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "127",
                reviewCount: "127",
                itemReviewed: {
                  "@type": "LocalBusiness",
                  name: "MH Digital Solution",
                  url: "https://www.mhdigitalsolution.com",
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen flex flex-col">
            <FloatingBlobs />
            <div className="relative z-10 backdrop-blur-sm bg-white/5 min-h-screen flex flex-col">
              <Header />
              <PromoBanner />
              <main id="main-content" className="flex-1" role="main">
                {children}
              </main>
              <Footer />
            </div>
            <EnhancedChatWidget />
            <ChristmasPromoPopup />
            <WhatsAppWidget />
            <CookieConsentBanner />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
