import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/ui/navigation"
import Footer from "@/components/footer"
import FloatingBackground from "@/components/ui/floating-background"
import ChatWidget from "@/components/ui/chat-widget"
import PromotionalPopup from "@/components/ui/promotional-popup"
import { ThemeProvider } from "@/components/ui/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "MH Digital Solutions | AI-Powered Digital Marketing & Web Development",
    template: "%s | MH Digital Solutions",
  },
  description:
    "Transform your business with AI-powered digital marketing, custom web development, and automation solutions. Serving small businesses to enterprises with measurable ROI.",
  keywords:
    "digital marketing, web development, AI automation, SEO services, lead generation, business consulting, PPC advertising, social media marketing",
  authors: [{ name: "MH Digital Solutions" }],
  creator: "MH Digital Solutions",
  publisher: "MH Digital Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.mhdigitalsolution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mhdigitalsolution.com",
    siteName: "MH Digital Solutions",
    title: "MH Digital Solutions | AI-Powered Digital Marketing & Web Development",
    description:
      "Transform your business with AI-powered digital marketing, custom web development, and automation solutions. Serving small businesses to enterprises with measurable ROI.",
    images: [
      {
        url: "/images/mh-digital-og.webp",
        width: 1200,
        height: 630,
        alt: "MH Digital Solutions - AI-Powered Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MH Digital Solutions | AI-Powered Digital Marketing & Web Development",
    description:
      "Transform your business with AI-powered digital marketing, custom web development, and automation solutions.",
    images: ["/images/mh-digital-og.webp"],
    creator: "@mhdigitalsolutions",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://calendly.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MH Digital Solutions",
              url: "https://www.mhdigitalsolution.com",
              logo: "https://www.mhdigitalsolution.com/images/mh-logo.webp",
              description:
                "AI-powered digital marketing and web development agency serving small businesses to enterprises with measurable ROI.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Huntsville",
                addressRegion: "AL",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-256-XXX-XXXX",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.linkedin.com/company/mh-digital-solutions",
                "https://twitter.com/mhdigitalsolutions",
                "https://www.facebook.com/mhdigitalsolutions",
              ],
              service: [
                {
                  "@type": "Service",
                  name: "Digital Marketing",
                  description:
                    "Comprehensive digital marketing services including SEO, PPC, and social media marketing",
                },
                {
                  "@type": "Service",
                  name: "Web Development",
                  description: "Custom web development and e-commerce solutions",
                },
                {
                  "@type": "Service",
                  name: "AI Automation",
                  description: "Business process automation using artificial intelligence",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {/* Skip to main content link for accessibility */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          {/* Floating background elements */}
          <FloatingBackground />

          {/* Main navigation */}
          <Navigation />

          {/* Main content */}
          <main id="main-content" className="relative z-10">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Interactive elements */}
          <ChatWidget />
          <PromotionalPopup />
        </ThemeProvider>
      </body>
    </html>
  )
}
