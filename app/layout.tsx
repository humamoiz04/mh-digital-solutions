import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingBlobs } from "@/components/floating-blobs"
import { ChatWidget } from "@/components/chat-widget"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { PromotionalBanner } from "@/components/promotional-banner"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { StructuredData } from "@/components/structured-data"

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
        <link rel="preload" href="/images/mh-digital-solutions-logo.webp" as="image" type="image/webp" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
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

        <link rel="canonical" href="https://www.mhdigitalsolution.com" />

        <StructuredData type="Organization" />
        <StructuredData type="LocalBusiness" />
        <StructuredData type="AggregateRating" />
        <StructuredData type="BreadcrumbList" />
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
            <Header />
            <main id="main-content" className="flex-1 relative z-10" role="main">
              {children}
            </main>
            <Footer />
            <ChatWidget />
            <WhatsAppWidget />
            <PromotionalBanner />
            <CookieConsentBanner />
          </div>
        </ThemeProvider>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Core Web Vitals monitoring
              if ('web-vital' in window) {
                import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                  getCLS(console.log);
                  getFID(console.log);
                  getFCP(console.log);
                  getLCP(console.log);
                  getTTFB(console.log);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
