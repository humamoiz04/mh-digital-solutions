"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-xs"></div>
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-900">Business Growth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                <span>Tools</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <Link href="/case-studies" className="text-gray-700 hover:text-gray-900 transition-colors">
              Case Studies
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>

            {/* Mobile menu button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
                Services
              </Link>
              <Link href="/tools" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
                Tools
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
                Case Studies
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
