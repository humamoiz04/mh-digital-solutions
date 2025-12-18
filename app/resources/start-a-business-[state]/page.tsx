import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, DollarSign, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Complete Guide to Starting a Business | MH Digital Solution",
  description:
    "Step-by-step guide for starting your business: registration, insurance, and going digital with a professional online presence.",
}

export default function StartBusinessGuidePage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Complete Guide to Starting Your Business
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Everything you need to know to start your business right, from registration through going digital.
        </p>

        <div className="mb-12 p-8 border-l-4 border-fuchsia-600 bg-muted/50 rounded">
          <div className="flex gap-4 items-start mb-4">
            <FileText className="h-8 w-8 text-fuchsia-600 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Step 1: Register Your Business</h2>

              <h3 className="font-semibold text-lg mb-3">Business Structure Options</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">Sole Proprietorship</h4>
                  <p className="text-sm text-muted-foreground">
                    Simplest option. No formal registration in most states, but you're personally liable.
                  </p>
                </div>
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">LLC (Limited Liability Company)</h4>
                  <p className="text-sm text-muted-foreground">
                    Best for most small businesses. Offers liability protection and tax flexibility. Filing fee
                    typically $100-200.
                  </p>
                </div>
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">Corporation</h4>
                  <p className="text-sm text-muted-foreground">
                    More complex. Consider if you're raising investment or have multiple owners.
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-3">Registration Steps</h3>
              <ol className="space-y-3 ml-4 list-decimal text-muted-foreground">
                <li>Check availability of your desired business name</li>
                <li>File Articles of Organization (LLC) or Incorporation (Corp) with Secretary of State</li>
                <li>Pay filing fee</li>
                <li>Receive Certificate of Formation by mail (5-14 business days)</li>
                <li>Get an EIN from the IRS (free)</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mb-12 p-8 border-l-4 border-fuchsia-600 bg-muted/50 rounded">
          <div className="flex gap-4 items-start mb-4">
            <DollarSign className="h-8 w-8 text-fuchsia-600 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Step 2: Get Business Insurance</h2>

              <p className="text-muted-foreground mb-6">
                Protect your business and personal assets with appropriate insurance coverage based on your industry.
              </p>

              <h3 className="font-semibold text-lg mb-3">Common Insurance Types</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">General Liability</h4>
                  <p className="text-sm text-muted-foreground">
                    Required for most businesses. Covers injuries and accidents. $300-1,000/year.
                  </p>
                </div>
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">Professional Liability</h4>
                  <p className="text-sm text-muted-foreground">
                    For service-based businesses. Covers professional mistakes. $400-2,000/year.
                  </p>
                </div>
                <div className="p-4 bg-background rounded border">
                  <h4 className="font-semibold mb-2">Commercial Auto</h4>
                  <p className="text-sm text-muted-foreground">
                    If you use vehicles for business. Required in most states. $1,000-3,000/year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 p-8 border-l-4 border-fuchsia-600 bg-muted/50 rounded">
          <div className="flex gap-4 items-start mb-4">
            <CheckCircle className="h-8 w-8 text-fuchsia-600 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Step 3: Go Digital</h2>

              <p className="text-muted-foreground mb-6">
                Today's customers find businesses online. You need a digital presence to compete.
              </p>

              <h3 className="font-semibold text-lg mb-3">Your Digital Checklist</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">Professional Website</h4>
                    <p className="text-sm text-muted-foreground">
                      Your 24/7 salesperson. Get started with our New Business Launchpad package ($1,200).
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">Google Business Profile</h4>
                    <p className="text-sm text-muted-foreground">
                      Free listing on Google Maps and local search results.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">Social Media</h4>
                    <p className="text-sm text-muted-foreground">
                      Start with 1-2 platforms (Facebook, Instagram). Post regularly to build audience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">Email List</h4>
                    <p className="text-sm text-muted-foreground">
                      Start collecting customer emails. Highest ROI marketing channel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center border-t pt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We help entrepreneurs get their businesses online and running. Let's talk about your vision.
          </p>
          <Button size="lg" asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
