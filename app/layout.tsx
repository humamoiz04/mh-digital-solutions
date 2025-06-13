import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/ui/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/ui/theme-provider"
import ChatWidget from "@/components/ui/chat-widget"
import FloatingBackground from "@/components/ui/floating-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MH Digital Solutions | Digital Marketing, Web Development & Business Consulting",
  description:
    "M&H Digital Solutions provides digital marketing, web development, AI automation, and business consulting services to help businesses grow and succeed in the digital age.",
  metadataBase: new URL("https://www.mhdigitalsolution.com"),
  alternates: {
    canonical: "https://www.mhdigitalsolution.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {typeof window !== "undefined" && <FloatingBackground />}
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
