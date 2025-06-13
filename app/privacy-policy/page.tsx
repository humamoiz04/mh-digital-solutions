import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollAnimation from "@/components/scroll-animation"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white border-0 mb-6">
              🔒 Privacy Policy
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Your</span>{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                Privacy Matters
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Privacy Policy Content */}
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

                    <h2>1. Information We Collect</h2>
                    <p>
                      We collect information you provide directly to us, such as when you create an account, contact us,
                      or use our services. This may include:
                    </p>
                    <ul>
                      <li>Name, email address, and contact information</li>
                      <li>Business information and project details</li>
                      <li>Communication preferences</li>
                      <li>Payment and billing information</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices and support messages</li>
                      <li>Respond to your comments and questions</li>
                      <li>Communicate about products, services, and events</li>
                    </ul>

                    <h2>3. Information Sharing</h2>
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties without
                      your consent, except as described in this policy:
                    </p>
                    <ul>
                      <li>With service providers who assist in our operations</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect our rights and safety</li>
                      <li>In connection with a business transfer</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    <p>
                      We implement appropriate security measures to protect your personal information against
                      unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul>
                      <li>Encryption of sensitive data</li>
                      <li>Regular security assessments</li>
                      <li>Access controls and authentication</li>
                      <li>Secure data transmission protocols</li>
                    </ul>

                    <h2>5. Cookies and Tracking</h2>
                    <p>
                      We use cookies and similar tracking technologies to enhance your experience on our website. You
                      can control cookie settings through your browser preferences.
                    </p>

                    <h2>6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Object to processing of your information</li>
                      <li>Data portability</li>
                    </ul>

                    <h2>7. Children's Privacy</h2>
                    <p>
                      Our services are not intended for children under 13. We do not knowingly collect personal
                      information from children under 13.
                    </p>

                    <h2>8. International Data Transfers</h2>
                    <p>
                      Your information may be transferred to and processed in countries other than your own. We ensure
                      appropriate safeguards are in place for such transfers.
                    </p>

                    <h2>9. Changes to This Policy</h2>
                    <p>
                      We may update this privacy policy from time to time. We will notify you of any changes by posting
                      the new policy on this page and updating the "Last updated" date.
                    </p>

                    <h2>10. Contact Us</h2>
                    <p>
                      If you have any questions about this privacy policy, please contact us at:
                      <br />
                      Email: help@mhdigitalsolution.com
                      <br />
                      Phone: +1 (757)550-4040
                    </p>
                      WhatsaApp: +1 (707)582-2255
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
