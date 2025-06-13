import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found - 404 | MH Digital Solutions",
  description:
    "The page you're looking for doesn't exist. Explore our digital marketing services, SEO, web development, and more.",
  robots: "noindex, nofollow",
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <Card className="glass border-0 max-w-2xl mx-auto">
          <CardContent className="p-12 text-center">
            <div className="text-8xl font-bold bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent mb-6">
              404
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              The page you're looking for doesn't exist. Let's get you back on track with our digital marketing
              services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/">
                <Button className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] hover:opacity-90 text-white">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Browse Services
                </Button>
              </Link>
            </div>

            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Pages:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="/services/seo" className="text-[#FF7600] hover:underline">
                  SEO Services
                </Link>
                <Link href="/services/digital-marketing" className="text-[#FF7600] hover:underline">
                  Digital Marketing
                </Link>
                <Link href="/services/web-development" className="text-[#FF7600] hover:underline">
                  Web Development
                </Link>
                <Link href="/services/lead-generation" className="text-[#FF7600] hover:underline">
                  Lead Generation
                </Link>
                <Link href="/about" className="text-[#FF7600] hover:underline">
                  About Us
                </Link>
                <Link href="/contact" className="text-[#FF7600] hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
