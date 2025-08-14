import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm py-12 md:py-16 border-t">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link className="flex items-center gap-2" href="/">
            <Image src="/images/mh-digital-solutions-logo.webp
" alt="MH Digital Solution Logo" width={40} height={40} />
            <span className="text-lg font-bold text-foreground">MH Digital Solution</span>
          </Link>
          <p className="text-muted-foreground">
            Your trusted partner for innovative digital marketing and IT solutions.
          </p>
          <div className="flex space-x-4">
            <Link
              className="text-muted-foreground hover:text-primary transition-colors"
              href="https://facebook.com/mhdigitalsolution"
              target="_blank"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              className="text-muted-foreground hover:text-primary transition-colors"
              href="https://twitter.com/mhdigitalsol"
              target="_blank"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              className="text-muted-foreground hover:text-primary transition-colors"
              href="https://linkedin.com/company/mh-digital-solution"
              target="_blank"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              className="text-muted-foreground hover:text-primary transition-colors"
              href="https://instagram.com/mhdigitalsolutions"
              target="_blank"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="space-y-2">
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
          </ul>
        </div>
        <div className="space-y-2">
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
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">Company</h3>
          <ul className="space-y-1">
            <li>
              <Link className="text-muted-foreground hover:text-primary transition-colors" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-primary transition-colors" href="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-primary transition-colors" href="/the-mh-edge">
                The MH Edge
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-primary transition-colors" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-primary transition-colors" href="/case-studies">
                Case Studies
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-primary transition-colors" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-primary transition-colors" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-primary transition-colors" href="/terms-of-service">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
        © 2024 MH Digital Solution. All rights reserved.
      </div>
    </footer>
  )
}
