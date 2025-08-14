"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { Home, ArrowLeft, Search } from "lucide-react"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="relative z-10 section-with-blobs">
      <Section glass>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">404</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you
                entered the wrong URL.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild className="gradient-button">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button
                variant="outline"
                className="gradient-button bg-transparent"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
              <Button variant="outline" className="gradient-button bg-transparent" asChild>
                <Link href="/services">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Services
                </Link>
              </Button>
            </div>

            <div className="glass-card p-8 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Popular Pages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
                <Link href="/appointment" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Consultation
                </Link>
              </div>
            </div>

            <div className="mt-12">
              <Image
                src="/images/repair-work-setup.webp"
                alt="Technical support illustration"
                width={400}
                height={300}
                className="mx-auto max-w-md opacity-80 rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
