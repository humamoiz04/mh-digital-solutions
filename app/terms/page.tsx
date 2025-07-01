import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-20 bg-transparent">
      {/* Hero Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <Badge className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white border-0 mb-6">
            📋 Terms of Service
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Terms of</span>{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <strong>Last updated:</strong> December 15, 2024
                  </p>

                  <h2 className="text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using M&H Digital Solutions services, you accept and agree to be bound by the terms
                    and provision of this agreement.
                  </p>

                  <h2 className="text-gray-900 dark:text-white">2. Description of Service</h2>
                  <p>M&H Digital Solutions provides digital transformation services including:</p>
                  <ul>
                    <li>AI automation and implementation</li>
                    <li>Web development and design</li>
                    <li>Digital marketing and branding</li>
                    <li>Business consulting and strategy</li>
                    <li>SEO optimization services</li>
                  </ul>

                  <h2 className="text-gray-900 dark:text-white">3. Contact Information</h2>
                  <p>
                    For questions about these terms, contact us at:
                    <br />
                    Email: help@mhdigitalsolution.com
                    <br />
                    Phone: +1 (707) 582-2255
                    <br />
                    WhatsApp: +1 (707) 582-2255
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
