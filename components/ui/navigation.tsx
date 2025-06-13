"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { name: "AI & Automation", href: "/services/ai-automation", color: "hover:text-[#F472B6]" },
    { name: "Digital Marketing", href: "/services/digital-marketing", color: "hover:text-[#F472B6]" },
    { name: "Web Development", href: "/services/web-development", color: "hover:text-[#F472B6]" },
    { name: "Business Consulting", href: "/services/business-consulting", color: "hover:text-[#F472B6]" },
    { name: "SEO Services", href: "/services/seo", color: "hover:text-[#F472B6]" },
    { name: "PPC Advertising", href: "/services/ppc-advertising", color: "hover:text-[#F472B6]" },
    { name: "Social Media Marketing", href: "/services/social-media-marketing", color: "hover:text-[#F472B6]" },
    { name: "E-commerce Solutions", href: "/services/e-commerce", color: "hover:text-[#F472B6]" },
    { name: "Lead Generation", href: "/services/lead-generation", color: "hover:text-[#F472B6]" },
    { name: "HR Solutions", href: "/services/hr-solutions", color: "hover:text-[#F472B6]" },
    { name: "Graphic Design", href: "/services/graphic-design", color: "hover:text-[#F472B6]" },
    { name: "Business Cost Optimization", href: "/services/business-cost-optimization", color: "hover:text-[#F472B6]" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2 shadow-lg" : "py-4"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 relative">
              <Image src="/images/mh-logo.webp" alt="MH Digital Solutions" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#F472B6] to-[#8B5CF6] bg-clip-text text-transparent">
              MH Digital Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-[#F472B6] transition-colors text-gray-700 dark:text-gray-300">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass border-0 w-64 grid grid-cols-1 gap-1">
                {services.map((service, index) => (
                  <DropdownMenuItem key={index} className="text-gray-700 dark:text-gray-300">
                    <Link href={service.href} className={`w-full ${service.color}`}>
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/case-studies"
              className="hover:text-[#F472B6] transition-colors text-gray-700 dark:text-gray-300"
            >
              Case Studies
            </Link>
            <Link href="/tools" className="hover:text-[#F472B6] transition-colors text-gray-700 dark:text-gray-300">
              Tools
            </Link>
            <Link href="/about" className="hover:text-[#F472B6] transition-colors text-gray-700 dark:text-gray-300">
              About
            </Link>
            <Link href="/blog" className="hover:text-[#F472B6] transition-colors text-gray-700 dark:text-gray-300">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-[#F472B6] transition-colors text-gray-700 dark:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Theme Toggle and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://calendly.com/mhdigitalsolutionsus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] hover:opacity-90 text-white border-0 rounded-full px-6 py-2 font-medium transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button className="text-gray-700 dark:text-gray-300" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <div className="text-gray-700 dark:text-gray-300 font-medium">Services</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className={`text-gray-700 dark:text-gray-300 ${service.color} transition-colors pl-4`}
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/case-studies"
                className="text-gray-700 dark:text-gray-300 hover:text-[#F472B6] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/tools"
                className="text-gray-700 dark:text-gray-300 hover:text-[#F472B6] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-[#F472B6] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 dark:text-gray-300 hover:text-[#F472B6] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-[#F472B6] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://calendly.com/mhdigitalsolutionsus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] hover:opacity-90 text-white border-0 rounded-full w-full py-2 text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
