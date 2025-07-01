"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  const popularPages = [
    { href: "/services", label: "Our Services", description: "Explore our digital marketing solutions" },
    { href: "/services/seo", label: "SEO Services", description: "Professional SEO optimization" },
    { href: "/services/web-development", label: "Web Development", description: "Custom website development" },
    { href: "/case-studies", label: "Case Studies", description: "See our success stories" },
    { href: "/contact", label: "Contact Us", description: "Get in touch with our team" },
    { href: "/blog", label: "Blog", description: "Latest digital marketing insights" },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent pt-20">
      <div className="container mx-auto px-6">
        <Card className="border-0 max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/mh-logo.webp"
                alt="MH Digital Solutions"
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>

            {/* 404 Error */}
            <div className="text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
              404
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Oops! Page Not Found</h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you're looking for seems to have moved or doesn't exist. Don't worry, we're here to help you find
              what you need!
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/">
                <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
              <Link href="/services">
                <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
                  <Search className="mr-2 h-5 w-5" />
                  Browse Services
                </Button>
              </Link>
            </div>

            {/* Popular Pages */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Popular Pages You Might Be Looking For
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {popularPages.map((page, index) => (
                  <Link key={index} href={page.href}>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 mb-1">
                        {page.label}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{page.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Need Help? Contact Our Team</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+17075822255"
                  className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +1 (707) 582-2255
                </a>
                <a
                  href="mailto:info@mhdigitalsolution.com"
                  className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  info@mhdigitalsolution.com
                </a>
              </div>
            </div>

            {/* SEO-friendly content */}
            <div className="mt-8 text-left max-w-2xl mx-auto">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About MH Digital Solutions</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                We're a leading digital marketing agency specializing in SEO services, web development, PPC advertising,
                and comprehensive digital marketing solutions. Since 2020, we've helped 500+ businesses achieve
                remarkable growth through our proven strategies and expert team.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
