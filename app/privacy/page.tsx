import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-20 bg-transparent">
      {/* Hero Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <Badge className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white border-0 mb-6">
            🔒 Privacy Policy
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Your</span>{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Privacy Matters
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <strong>Last updated:</strong> December 15, 2024
                  </p>

                  <h2 className="text-gray-900 dark:text-white">1. Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, contact us,
                    or use our services.
                  </p>

                  <h2 className="text-gray-900 dark:text-white">2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                  </ul>

                  <h2 className="text-gray-900 dark:text-white">3. Contact Us</h2>
                  <p>
                    If you have any questions about this privacy policy, please contact us at:
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
