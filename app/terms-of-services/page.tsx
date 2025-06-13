import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollAnimation from "@/components/scroll-animation"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Badge className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] text-white border-0 mb-6">
              📋 Terms of Service
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Terms of</span>{" "}
              <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Terms Content */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="glass border-0">
                <CardContent className="p-12">
                  <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 prose-headings:text-gray-900 dark:prose-headings:text-white">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                      <strong>Last updated:</strong> December 15, 2024
                    </p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                      By accessing and using M&H Digital Solutions services, you accept and agree to be bound by the
                      terms and provision of this agreement.
                    </p>

                    <h2>2. Description of Service</h2>
                    <p>M&H Digital Solutions provides digital transformation services including but not limited to:</p>
                    <ul>
                      <li>AI automation and implementation</li>
                      <li>Web development and design</li>
                      <li>Digital marketing and branding</li>
                      <li>Business consulting and strategy</li>
                      <li>SEO optimization services</li>
                    </ul>

                    <h2>3. User Obligations</h2>
                    <p>You agree to:</p>
                    <ul>
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the confidentiality of your account</li>
                      <li>Use our services in compliance with applicable laws</li>
                      <li>Not interfere with or disrupt our services</li>
                      <li>Respect intellectual property rights</li>
                    </ul>

                    <h2>4. Payment Terms</h2>
                    <p>Payment terms are specified in individual service agreements. Generally:</p>
                    <ul>
                      <li>Invoices are due within 30 days of receipt</li>
                      <li>Late payments may incur additional fees</li>
                      <li>Refunds are subject to our refund policy</li>
                      <li>All prices are in USD unless otherwise specified</li>
                    </ul>

                    <h2>5. Intellectual Property</h2>
                    <p>
                      All content, features, and functionality of our services are owned by M&H Digital Solutions and
                      are protected by copyright, trademark, and other intellectual property laws.
                    </p>

                    <h2>6. Confidentiality</h2>
                    <p>
                      We respect the confidentiality of your business information and will not disclose confidential
                      information to third parties without your consent.
                    </p>

                    <h2>7. Limitation of Liability</h2>
                    <p>
                      M&H Digital Solutions shall not be liable for any indirect, incidental, special, consequential, or
                      punitive damages resulting from your use of our services.
                    </p>

                    <h2>8. Service Availability</h2>
                    <p>
                      While we strive for 100% uptime, we do not guarantee uninterrupted access to our services.
                      Scheduled maintenance will be communicated in advance.
                    </p>

                    <h2>9. Termination</h2>
                    <p>
                      Either party may terminate services with appropriate notice as specified in individual service
                      agreements. Termination does not relieve obligations incurred prior to termination.
                    </p>

                    <h2>10. Governing Law</h2>
                    <p>
                      These terms are governed by the laws of the United States. Any disputes will be resolved through
                      binding arbitration.
                    </p>

                    <h2>11. Changes to Terms</h2>
                    <p>
                      We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                      posting on our website.
                    </p>

                    <h2>12. Contact Information</h2>
                    <p>
                      For questions about these terms, contact us at:
                      <br />
                      Email: help@mhdigitalsolution.com
                      <br />
                      Phone: +1 (757) 5550-4040
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
