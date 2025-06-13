import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 relative">
                <Image src="/images/mh-logo.webp" alt="MH Digital Solutions" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#F472B6] to-[#8B5CF6] bg-clip-text text-transparent">
                MH Digital Solutions
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Transforming businesses through innovative digital solutions and strategic growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#F472B6]" />
                <span className="text-gray-600 dark:text-gray-400">Sacramento, California</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#F472B6]" />
                <span className="text-gray-600 dark:text-gray-400">WhatsApp +1(707)582-2255</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#F472B6]" />
                <span className="text-gray-600 dark:text-gray-400">info@mhdigitalsolutions.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-automation"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors"
                >
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-consulting"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors"
                >
                  Business Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Subscribe to Our Newsletter</h3>
            <div id="hubspot-form-container" className="mb-6">
              <script charSet="utf-8" type="text/javascript" src="//js-na2.hsforms.net/forms/embed/v2.js"></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    hbspt.forms.create({
                      portalId: "242866469",
                      formId: "bb55b981-6240-448b-8bae-e286be4f4d90",
                      region: "na2",
                      target: "#hubspot-form-container"
                    });
                  `,
                }}
              />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h4 className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-6">
            Our Partners & Certifications
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Image
              src="/images/google-partner.webp"
              alt="Google Partner"
              width={120}
              height={60}
              className="object-contain h-12"
            />
            <Image
              src="/images/hubspot-partner.webp"
              alt="HubSpot Partner"
              width={120}
              height={60}
              className="object-contain h-12"
            />
            <Image
              src="/images/meta-partner.webp"
              alt="Meta Business Partner"
              width={120}
              height={60}
              className="object-contain h-12"
            />
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#F472B6] transition-colors"
            >
              Sitemap
            </Link>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} MH Digital Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
