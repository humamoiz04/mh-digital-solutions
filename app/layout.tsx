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

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MH Digital Solution",
  description: "Your trusted partner for innovative digital marketing and IT solutions.",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com",
  },
  openGraph: {
    title: "MH Digital Solution - AI-Powered Digital Marketing & Web Development",
    description:
      "Transform your business with our innovative digital marketing, web development, and AI automation solutions. Trusted by 500+ clients worldwide.",
    url: "https://www.mhdigitalsolution.com",
    siteName: "MH Digital Solution",
    images: [
      {
        url: "https://www.mhdigitalsolution.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "MH Digital Solution - Digital Marketing & Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MH Digital Solution - AI-Powered Digital Marketing",
    description: "Transform your business with innovative digital solutions. Trusted by 500+ clients worldwide.",
    images: ["https://www.mhdigitalsolution.com/images/og-image.webp"],
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.mhdigitalsolution.com" />
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
                jobTitle: "CEO & Founder",
              },
              sameAs: ["https://www.linkedin.com/company/mh-digital-solution", "https://twitter.com/mhdigitalsol"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen flex flex-col">
            <FloatingBlobs />
            <Header />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
            <ChatWidget />
            <WhatsAppWidget />
            <PromotionalBanner />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
