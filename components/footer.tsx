"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import { NewsletterSignup } from "@/components/newsletter-signup"

export function Footer() {
  return (
    <footer className="bg-background py-12 md:py-16 border-t" role="contentinfo">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="space-y-4 md:col-span-2">
          <Link className="flex items-center gap-2" href="/" aria-label="MH Digital Solution Home">
            <Image
              src="/images/mh-digital-solutions-logo.webp"
              alt="MH Digital Solution Logo"
              width={40}
              height={40}
              loading="lazy"
            />
            <span className="text-lg font-bold text-foreground">MH Digital Solution</span>
          </Link>
          <p className="text-muted-foreground">
            Your trusted partner for innovative digital marketing and IT solutions.
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <a
                href="tel:+17075822255"
                className="hover:text-primary transition-colors"
                aria-label="Call us at +1 (707) 582-2255"
              >
                +1 (707) 249-1222
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <a
                href="mailto:info@mhdigitalsolution.com"
                className="hover:text-primary transition-colors"
                aria-label="Email us at info@mhdigitalsolution.com"
              >
                info@mhdigitalsolution.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>Serving Businesses Nationwide</span>
            </div>
          </div>

          <div className="flex space-x-4" role="list" aria-label="Social media links">
            <Link
              className="text-muted-foreground hover:text-fuchsia-600 transition-colors"
              href="https://www.facebook.com/profile.php?id=61569037172478"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              className="text-muted-foreground hover:text-fuchsia-600 transition-colors"
              href="https://twitter.com/mhdigitalsol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-6 w-6" />
            </Link>
            <Link
              className="text-muted-foreground hover:text-fuchsia-600 transition-colors"
              href="https://linkedin.com/company/mh-digital-solution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              className="text-muted-foreground hover:text-fuchsia-600 transition-colors"
              href="https://www.instagram.com/mh_digitalsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <nav className="space-y-2" aria-label="Marketing services">
          <h3 className="text-lg font-semibold text-foreground">Marketing Services</h3>
          <ul className="space-y-1">
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/digital-marketing"
              >
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/ppc-advertising"
              >
                PPC Advertising
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/social-media-marketing"
              >
                Social Media Marketing
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/content-marketing"
              >
                Content Marketing
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/email-marketing"
              >
                Email Marketing
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/seo-services"
              >
                SEO Services
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/lead-generation"
              >
                Lead Generation
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="space-y-2" aria-label="Development and technology services">
          <h3 className="text-lg font-semibold text-foreground">Development & Tech</h3>
          <ul className="space-y-1">
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/web-development"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-primary transition-colors" href="/services/web-design">
                Web Design
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/mobile-app-development"
              >
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/ecommerce-solutions"
              >
                E-commerce Solutions
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/ai-automation"
              >
                AI & Automation
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/cloud-solutions"
              >
                Cloud Solutions
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/it-consulting"
              >
                IT Consulting
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/business-analytics"
              >
                Business Analytics
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/business-consulting"
              >
                Business Consulting
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/business-registration"
              >
                Business Registration
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                href="/services/business-insurance"
              >
                Business Insurance
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="space-y-2" aria-label="Resources and partner websites">
          <h3 className="text-lg font-semibold text-foreground">Resources & Partners</h3>
          <ul className="space-y-1">
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                href="https://www.nebraskaautodetailing.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nebraska Auto Detailing - Opens in new tab"
              >
                Nebraska Auto Detailing
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                href="https://www.luxuryfindetail.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Luxury Fin Detail - Opens in new tab"
              >
                Luxury Fin Detail
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                href="https://www.aesthetichaven.store/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aesthetic Haven Store - Opens in new tab"
              >
                Aesthetic Haven Store
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                href="https://www.mhdazzles.store/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MH Dazzles Store - Opens in new tab"
              >
                MH Dazzles Store
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google AI Studio - Opens in new tab"
              >
                Google AI Studio
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                href="https://www.seoreviewtools.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SEO Review Tools - Opens in new tab"
              >
                SEO Review Tools
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                href="https://www.aureusintelligence.ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aureus Intelligence AI - Opens in new tab"
              >
                Aureus Intelligence AI
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="space-y-2">
          <NewsletterSignup variant="footer" />
        </div>
      </div>
      <Separator className="my-8" />
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">© 2024 MH Digital Solution. All rights reserved.</div>
        <nav className="flex gap-4 text-sm" aria-label="Legal links">
          <Link className="text-muted-foreground hover:text-primary transition-colors" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="text-muted-foreground hover:text-primary transition-colors" href="/terms-of-service">
            Terms of Service
          </Link>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                localStorage.removeItem("cookieConsent")
                const event = new CustomEvent("showCookieConsent")
                window.dispatchEvent(event)
              }
            }}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Reset cookie preferences"
          >
            Cookie Settings
          </button>
        </nav>
      </div>
    </footer>
  )
}
