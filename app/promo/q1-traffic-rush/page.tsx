import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Zap, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Q1 Traffic Rush - PPC Setup for January | MH Digital Solution",
  description: "Fill your calendar for January with high-intent Google Ads. Setup fee waived with 3-month commitment.",
}

export default function Q1TrafficRushPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-fuchsia-600/10 border border-fuchsia-600 rounded-full mb-4">
            <span className="text-fuchsia-600 font-semibold text-sm">FOR RETAIL & SERVICE BUSINESSES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Q1 Traffic Rush
          </h1>
          <p className="text-xl text-muted-foreground">Fill Your Calendar for January. Capture the Peak Season Rush.</p>
        </div>

        <div className="bg-gradient-to-r from-fuchsia-600/10 to-pink-600/10 border border-fuchsia-600 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">SETUP FEE</p>
              <div className="text-3xl font-bold mb-2">$750</div>
              <p className="text-sm text-muted-foreground">Or FREE with 3-month commitment</p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground mb-2">MONTHLY BUDGET</p>
              <div className="text-3xl font-bold mb-2">You Choose</div>
              <p className="text-sm text-muted-foreground">$500-$5,000+ depending on goals</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What's Included</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start p-6 border border-border rounded-lg bg-muted/50">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Complete PPC Strategy</h3>
                <p className="text-muted-foreground">
                  Custom campaign strategy targeting high-intent customers ready to buy now
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 border border-border rounded-lg bg-muted/50">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Free Ad Creative Design</h3>
                <p className="text-muted-foreground">
                  Professional ad copy and design that attracts your ideal customer
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 border border-border rounded-lg bg-muted/50">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Landing Page Optimization</h3>
                <p className="text-muted-foreground">
                  Custom landing pages designed to convert Google Ads clicks to sales
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 border border-border rounded-lg bg-muted/50">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Retargeting Campaign</h3>
                <p className="text-muted-foreground">
                  Capture visitors who don't convert on first visit with strategic retargeting
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 border border-border rounded-lg bg-muted/50">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Daily Optimization</h3>
                <p className="text-muted-foreground">
                  Daily monitoring and adjustments to maximize ROI and minimize waste
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 border border-border rounded-lg bg-muted/50">
            <Zap className="h-8 w-8 text-fuchsia-600 mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-4">Why January?</h3>
            <p className="text-muted-foreground mb-4">
              People make New Year's resolutions and search for services they've been putting off:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Home services (contractors, cleaners)</li>
              <li>• Fitness and wellness</li>
              <li>• Business services</li>
              <li>• Professional services</li>
            </ul>
          </div>

          <div className="p-6 border border-border rounded-lg bg-muted/50">
            <TrendingUp className="h-8 w-8 text-fuchsia-600 mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-4">Your Results</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">Our clients in January typically see:</p>
              <ul className="space-y-2 text-sm">
                <li>• 30-50% lower cost per lead</li>
                <li>• Higher quality leads</li>
                <li>• 3-5x ROAS in first month</li>
                <li>• Full calendar by mid-January</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-fuchsia-600/10 border border-fuchsia-600 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Perfect For:</h2>
          <ul className="space-y-2">
            <li className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>Home service businesses (contractors, plumbers, electricians)</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>Fitness and wellness services</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>Professional services (accounting, legal, consulting)</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>Retail businesses (3x+ higher conversion rates in January)</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss the January Rush</h2>
          <p className="text-lg text-muted-foreground mb-6">
            January is the highest-intent season for most service businesses. Schedule your setup today.
          </p>
          <Button size="lg" asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
            <Link href="/contact">Fill Your Calendar for January</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
