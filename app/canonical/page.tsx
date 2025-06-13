import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Canonical URL Information | MH Digital Solutions",
  description: "Information about canonical URLs and redirects for MH Digital Solutions website.",
  robots: "noindex, nofollow",
}

export default function CanonicalPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <Card className="glass border-0 max-w-4xl mx-auto">
          <CardContent className="p-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Canonical URL Information</h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Primary Domain</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our primary domain is: <strong>www.mhdigitalsolutions.com</strong>
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200">
                    All traffic is automatically redirected to our primary domain to ensure consistent SEO and user
                    experience.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">URL Redirects</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-gray-600 dark:text-gray-300">mhdigitalsolutions.com</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <span className="text-[#FF7600] font-medium">www.mhdigitalsolutions.com</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-gray-600 dark:text-gray-300">http://www.mhdigitalsolutions.com</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <span className="text-[#FF7600] font-medium">https://www.mhdigitalsolutions.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">SEO Benefits</h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Prevents duplicate content issues</li>
                  <li>• Consolidates link equity to primary domain</li>
                  <li>• Improves search engine rankings</li>
                  <li>• Provides consistent user experience</li>
                  <li>• Ensures proper analytics tracking</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/">
                  <Button className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] hover:opacity-90 text-white">
                    Visit Homepage
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
