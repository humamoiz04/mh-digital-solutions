import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, FileText, DollarSign } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Complete Guide to Starting a Business in Nebraska 2026",
  description:
    "Step-by-step guide for Nebraska entrepreneurs: business registration, insurance requirements, and going digital.",
}

export default function StartBusinessNebraskaPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Complete Guide to Starting a Business in Nebraska
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Everything you need to know to start your business in 2026, from registration to digital marketing.
        </p>

        {/* Step 1 */}
        <div className="mb-12 p-8 border-l-4 border-fuchsia-600 bg-muted/50 rounded">
          <div className="flex gap-4 items-start mb-4">
            <FileText className="h-8 w-8 text-fuchsia-600 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Step 1: Register Your Nebraska Business</h2>

              <h3 className="font-semibold text-lg mb-3">LLC vs. Sole Proprietorship vs. Corporation</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">Sole Proprietorship</h4>
                  <p className="text-sm text-muted-foreground">
                    Simplest option. No registration needed, but you're personally liable. Good for solo consulting.
                  </p>
                </div>
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">LLC (Limited Liability Company)</h4>
                  <p className="text-sm text-muted-foreground">
                    Best for most small businesses. Offers liability protection and tax flexibility. Filing fee:
                    ~$100-150.
                  </p>
                </div>
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">Corporation</h4>
                  <p className="text-sm text-muted-foreground">
                    Complex, often overkill for startups. Consider only if you plan to raise investment capital.
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-3">How to Register in Nebraska</h3>
              <ol className="space-y-3 ml-4 list-decimal text-muted-foreground">
                <li>Visit Nebraska Secretary of State website (sos.nebraska.gov)</li>
                <li>File Articles of Organization (LLC) or Articles of Incorporation (Corp)</li>
                <li>Choose a business name and verify it's available</li>
                <li>Pay filing fee (~$100-150 for LLC)</li>
                <li>You'll receive your Certificate of Formation by mail (takes 5-10 business days)</li>
              </ol>

              <div className="mt-6 p-4 bg-fuchsia-600/10 border border-fuchsia-600 rounded">
                <p className="text-sm">
                  <strong>Tip:</strong> Consider using services like ZenBusiness or LegalZoom to simplify the process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-12 p-8 border-l-4 border-fuchsia-600 bg-muted/50 rounded">
          <div className="flex gap-4 items-start mb-4">
            <DollarSign className="h-8 w-8 text-fuchsia-600 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Step 2: Get Business Insurance</h2>

              <p className="text-muted-foreground mb-6">
                Protect your business and personal assets with appropriate insurance coverage.
              </p>

              <h3 className="font-semibold text-lg mb-3">Types of Business Insurance</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">General Liability Insurance</h4>
                  <p className="text-sm text-muted-foreground">
                    Required for most businesses. Covers injuries on your property and accidents caused by your
                    business. Cost: $300-1,000/year.
                  </p>
                </div>
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">Professional Liability Insurance</h4>
                  <p className="text-sm text-muted-foreground">
                    For service-based businesses (consulting, freelancing, etc.). Covers professional mistakes. Cost:
                    $400-2,000/year.
                  </p>
                </div>
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">Workers Compensation Insurance</h4>
                  <p className="text-sm text-muted-foreground">
                    Required if you have employees in Nebraska. Covers employee injuries. Cost: varies by payroll and
                    industry.
                  </p>
                </div>
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">Commercial Auto Insurance</h4>
                  <p className="text-sm text-muted-foreground">
                    Required if you use vehicles for business. Cost: $1,000-3,000/year.
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-3">Getting Insurance</h3>
              <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
                <li>Contact local insurance brokers in Nebraska (recommended for personalized advice)</li>
                <li>Compare quotes from multiple providers</li>
                <li>Start with General Liability + Professional Liability if applicable</li>
                <li>Review and update coverage annually</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-12 p-8 border-l-4 border-fuchsia-600 bg-muted/50 rounded">
          <div className="flex gap-4 items-start mb-4">
            <CheckCircle className="h-8 w-8 text-fuchsia-600 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Step 3: Go Digital with Your Business</h2>

              <p className="text-muted-foreground mb-6">
                Today's customers find businesses online. You need a digital presence to compete.
              </p>

              <h3 className="font-semibold text-lg mb-3">Your Digital Checklist</h3>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">Professional Website</h4>
                    <p className="text-sm text-muted-foreground">
                      Even a 5-page site costs under $2,000. This is your 24/7 salesperson. See our New Business
                      Launchpad package.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">Google Business Profile</h4>
                    <p className="text-sm text-muted-foreground">
                      Free listing on Google Maps. Get found by local customers searching for your services.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">Social Media Presence</h4>
                    <p className="text-sm text-muted-foreground">
                      Start with 1-2 platforms (Facebook, Instagram). Post 2-3 times weekly to build audience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">Email List</h4>
                    <p className="text-sm text-muted-foreground">
                      Start collecting customer emails. Email marketing has the highest ROI of any marketing channel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-fuchsia-600/10 border border-fuchsia-600 rounded">
                <p className="text-sm mb-4">
                  <strong>Need help getting online?</strong> Check out our New Business Launchpad package - get your
                  website, Google Business Profile, and startup consultation for just $1,200.
                </p>
                <Button size="sm" asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
                  <Link href="/promo/new-business-launchpad">Learn About Launchpad</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Additional Resources for Nebraska Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://sos.nebraska.gov"
              className="p-6 border border-border rounded-lg hover:border-fuchsia-600 transition"
            >
              <h3 className="font-semibold mb-2">Nebraska Secretary of State</h3>
              <p className="text-sm text-muted-foreground">Official business registration and requirements</p>
            </a>
            <a
              href="https://nol.org"
              className="p-6 border border-border rounded-lg hover:border-fuchsia-600 transition"
            >
              <h3 className="font-semibold mb-2">Nebraska Opportunity Link</h3>
              <p className="text-sm text-muted-foreground">Business resources and startup support</p>
            </a>
            <a
              href="https://www.nsmallbiz.org"
              className="p-6 border border-border rounded-lg hover:border-fuchsia-600 transition"
            >
              <h3 className="font-semibold mb-2">Nebraska Small Business Development</h3>
              <p className="text-sm text-muted-foreground">Free consulting and training</p>
            </a>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Work With Us</h3>
              <p className="text-sm text-muted-foreground">Need digital marketing help? Let's talk strategy.</p>
              <Button size="sm" asChild variant="outline" className="mt-4 bg-transparent">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t pt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Nebraska Business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're here to help with digital marketing, web design, and business consulting.
          </p>
          <Button size="lg" asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
