import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Rocket, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New Business Launchpad - Start Your Business in 30 Days | MH Digital Solution",
  description:
    "Complete digital foundation for new businesses: domain, website, Google Business Profile, and startup consultation. Just $1,200.",
}

export default function LaunchpadPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-fuchsia-600/10 border border-fuchsia-600 rounded-full mb-4">
            <span className="text-fuchsia-600 font-semibold text-sm">PERFECT FOR STARTUPS & NEW ENTREPRENEURS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
            New Business Launchpad
          </h1>
          <p className="text-xl text-muted-foreground">
            Launch Your Business in 30 Days. Everything You Need to Get Started.
          </p>
        </div>

        <div className="bg-gradient-to-r from-fuchsia-600/10 to-pink-600/10 border border-fuchsia-600 rounded-lg p-8 mb-12">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">SPECIAL PRICING</p>
            <div className="text-5xl font-bold mb-2">$1,200</div>
            <p className="text-muted-foreground">One-time investment • 30-day turnaround</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What's Included</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start p-6 border border-border rounded-lg bg-muted/50">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Domain Name Selection & Purchase</h3>
                <p className="text-muted-foreground">
                  We help you choose and register the perfect domain for your brand
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 border border-border rounded-lg bg-muted/50">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">5-Page Starter Website (WordPress)</h3>
                <p className="text-muted-foreground">Professional, mobile-friendly website with all essential pages</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 border border-border rounded-lg bg-muted/50">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Google Business Profile Setup</h3>
                <p className="text-muted-foreground">Get found on Google Maps and local search results</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 border border-border rounded-lg bg-muted/50">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Startup Consultation</h3>
                <p className="text-muted-foreground">
                  1-hour consultation covering entity setup (LLC vs Solo), business registration, and insurance basics
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 border border-border rounded-lg text-center">
            <Rocket className="h-8 w-8 text-fuchsia-600 mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-semibold mb-2">Fast Launch</h3>
            <p className="text-sm text-muted-foreground">Go live in 30 days with a professional online presence</p>
          </div>
          <div className="p-6 border border-border rounded-lg text-center">
            <Clock className="h-8 w-8 text-fuchsia-600 mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-semibold mb-2">All-in-One</h3>
            <p className="text-sm text-muted-foreground">Everything you need included, no hidden fees or surprises</p>
          </div>
          <div className="p-6 border border-border rounded-lg text-center">
            <CheckCircle className="h-8 w-8 text-fuchsia-600 mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-semibold mb-2">Expert Guidance</h3>
            <p className="text-sm text-muted-foreground">
              Dedicated support throughout launch and free consultation included
            </p>
          </div>
        </div>

        <div className="bg-fuchsia-600/10 border border-fuchsia-600 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Perfect For:</h2>
          <ul className="space-y-2">
            <li className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>New entrepreneurs starting their first business</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>Freelancers going independent</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>Small service businesses that need an online presence</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>Coaches, consultants, and solo practitioners</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Business in 2026</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Don't let 2026 be another year without an online presence. Get started today.
          </p>
          <Button size="lg" asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
            <Link href="/contact">Launch Your Business Today</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
