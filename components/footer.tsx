import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-transparent relative z-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="glass-card p-8 rounded-2xl shadow-xl">
          {/* Partner Badges */}
          <div className="mb-12">
            <h4 className="text-center font-semibold dark:text-white mb-6 text-purple-900 text-2xl">
              Certified Partners & Trusted by Industry Leaders
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="group">
                <div className="w-24 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-xs">Google Partner</span>
                </div>
              </div>
              <div className="group">
                <div className="w-24 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-xs">Meta Partner</span>
                </div>
              </div>
              <div className="group">
                <div className="w-24 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-xs">HubSpot</span>
                </div>
              </div>
              <div className="group">
                <div className="w-24 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-xs">Clutch</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">MH</span>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  MH Digital Solution
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Leading digital marketing agency since 2020, specializing in comprehensive digital solutions that drive
                measurable growth and sustainable success for businesses worldwide.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 group">
                  <span className="text-purple-600 group-hover:scale-110 transition-transform duration-200">✉️</span>
                  <div className="flex flex-col">
                    <a
                      href="mailto:info@mhdigitalsolution.com"
                      className="hover:text-purple-600 transition-colors duration-200"
                      aria-label="Email MH Digital Solutions at info@mhdigitalsolution.com"
                    >
                      info@mhdigitalsolution.com
                    </a>
                    <a
                      href="mailto:humamoiz04@gmail.com"
                      className="hover:text-purple-600 transition-colors duration-200"
                      aria-label="Email CEO at humamoiz04@gmail.com"
                    >
                      humamoiz04@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 group">
                  <span className="text-purple-600 group-hover:scale-110 transition-transform duration-200">📞</span>
                  <a
                    href="tel:+17075822255"
                    className="hover:text-purple-600 transition-colors duration-200"
                    aria-label="Call MH Digital Solutions at +1 707 582 2255"
                  >
                    +1 (707) 582-2255
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 group">
                  <span className="text-purple-600 group-hover:scale-110 transition-transform duration-200">💬</span>
                  <a
                    href="https://wa.me/17075822255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 transition-colors duration-200"
                    aria-label="Contact MH Digital Solutions on WhatsApp"
                  >
                    WhatsApp: +1 (707) 582-2255
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 group">
                  <span className="text-purple-600 group-hover:scale-110 transition-transform duration-200">📍</span>
                  <span>United States (Serving Globally)</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 group">
                  <span className="text-purple-600 group-hover:scale-110 transition-transform duration-200">🕒</span>
                  <span>24/7 Support Available</span>
                </div>
              </div>

              {/* Supervision Notice */}
              <div className="glass p-4 rounded-lg border border-purple-200/30">
                <p className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                  Operated under the supervision of Abdul Moiz Khan, CEO & Founder
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/team", label: "Our Expert Team" },
                  { href: "/case-studies", label: "Case Studies" },
                  { href: "/contact", label: "Contact Us" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/blog", label: "Blog" },
                  { href: "/faq", label: "FAQ" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-all duration-200 relative group"
                      aria-label={`Go to ${link.label}`}
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* All Services */}
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg">Our Services</h4>
              <ul className="space-y-3">
                {[
                  { href: "/services/seo", label: "SEO Services" },
                  { href: "/services/web-development", label: "Web Development" },
                  { href: "/services/digital-marketing", label: "Digital Marketing" },
                  { href: "/services/ppc-advertising", label: "PPC Advertising" },
                  { href: "/services/social-media-marketing", label: "Social Media Marketing" },
                  { href: "/services/content-marketing", label: "Content Marketing" },
                  { href: "/services/email-marketing", label: "Email Marketing" },
                  { href: "/services/ai-automation", label: "AI & Automation" },
                  { href: "/services/business-analytics", label: "Business Analytics" },
                  { href: "/services/business-consulting", label: "Business Consulting" },
                  { href: "/services/ecommerce", label: "E-commerce Solutions" },
                  { href: "/services/lead-generation", label: "Lead Generation" },
                ].map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-all duration-200 relative group"
                      aria-label={service.label}
                    >
                      {service.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Links & Copyright */}
          <div className="border-t border-white/30 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
                © {new Date().getFullYear()} MH Digital Solution. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors duration-200 text-sm relative group"
                  aria-label="Read our privacy policy"
                >
                  Privacy Policy
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full" />
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors duration-200 text-sm relative group"
                  aria-label="Read our terms of service"
                >
                  Terms of Service
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
