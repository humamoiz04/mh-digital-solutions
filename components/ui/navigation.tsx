"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    {
      label: "Services",
      submenu: [
        { href: "/services", label: "All Services" },
        { href: "/services/seo", label: "SEO Services" },
        { href: "/services/digital-marketing", label: "Digital Marketing" },
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/ai-automation", label: "AI & Automation" },
        { href: "/services/lead-generation", label: "Lead Generation" },
        { href: "/services/business-consulting", label: "Business Consulting" },
        { href: "/services/business-analytics", label: "Business Analytics" },
        { href: "/services/ppc-advertising", label: "PPC Advertising" },
        { href: "/services/social-media-marketing", label: "Social Media Marketing" },
        { href: "/services/content-marketing", label: "Content Marketing" },
        { href: "/services/email-marketing", label: "Email Marketing" },
        { href: "/services/ecommerce", label: "E-commerce Solutions" },
        { href: "/services/hr-solutions", label: "HR Solutions" },
        { href: "/services/operational-services", label: "Operational Services" },
      ],
    },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Our Team" },
    { href: "/the-mh-edge", label: "The MH Edge" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+17075822255" className="hover:underline transition-all duration-200">
                +1 (707) 582-2255
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:info@mhdigitalsolution.com" className="hover:underline transition-all duration-200">
                info@mhdigitalsolution.com
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="animate-pulse">🎯 Free Strategy Session Available - Book Now!</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-40 mx-2 md:mx-4 mt-2 md:mt-4 rounded-xl md:rounded-2xl glass-nav shadow-lg">
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="relative">
                <Image
                  src="/images/mh-logo.webp"
                  alt="MH Digital Solutions Logo"
                  width={32}
                  height={32}
                  className="md:w-10 md:h-10 rounded-lg transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    target.nextElementSibling?.classList.remove("hidden")
                  }}
                />
                <div className="hidden w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-lg">MH</span>
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                MH Digital Solution
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button className="text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium flex items-center group">
                        {item.label}
                        <span className="ml-1 transition-transform duration-200 group-hover:rotate-180">▼</span>
                      </button>
                      {servicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl shadow-xl py-2 z-50 max-h-96 overflow-y-auto">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/20 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-200 rounded-lg mx-2"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="https://calendly.com/mhdigitalsolutionsus"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg glass hover:bg-white/20 transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-white/30">
              <div className="flex flex-col space-y-3 max-h-80 overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-200 font-medium flex items-center w-full text-sm"
                        >
                          {item.label}
                          <span
                            className={`ml-1 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                          >
                            ▼
                          </span>
                        </button>
                        {servicesOpen && (
                          <div className="ml-3 mt-2 space-y-1 max-h-40 overflow-y-auto">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block text-xs text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-200 py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        className="text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-200 font-medium text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-full font-semibold w-fit text-sm"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
