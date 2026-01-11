import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, TrendingUp } from "lucide-react"
import { ruralCounties } from "@/lib/content-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rural County Digital Marketing Services | MH Digital Solution",
  description:
    "Affordable web design and SEO for rural businesses. Serving farmers, ranches, and small businesses in underserved counties across the US.",
  keywords: ["rural web design", "small business marketing", "farm website", "county SEO", "affordable web design"],
}

export default function RuralCountiesPage() {
  const stateCount = Object.keys(ruralCounties).length
  const countyCount = Object.values(ruralCounties).reduce((sum, state) => sum + state.counties.length, 0)

  return (
    <main className="min-h-screen bg-background py-12 md:py-20 section-with-blobs">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rural County Digital Marketing</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Affordable, no-nonsense web design and SEO for rural businesses. Serving farmers, ranchers, and small-town
            businesses with budgets that make sense.
          </p>
          <div className="inline-block glass-card p-4 mb-8">
            <p className="text-sm text-muted-foreground mb-2">We're serving</p>
            <p className="text-2xl font-bold text-warm-coral">{countyCount}+ Rural Counties</p>
            <p className="text-sm text-muted-foreground">across {stateCount} states</p>
          </div>
        </div>

        {/* States Grid */}
        <div className="space-y-12">
          {Object.entries(ruralCounties).map(([stateKey, stateData]) => (
            <div key={stateKey} className="glass-card p-8 border border-warm-peach/30">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-8 w-8 text-warm-coral" aria-hidden="true" />
                {stateData.state}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stateData.counties.map((county) => (
                  <Link
                    key={county.slug}
                    href={`/local/rural-counties/${stateKey}/${county.slug}`}
                    className="group p-4 border border-warm-peach/20 rounded-lg hover:border-warm-coral hover:bg-warm-peach/5 transition-all"
                  >
                    <h3 className="font-semibold text-lg mb-2 text-warm-coral group-hover:text-warm-coral transition-colors">
                      {county.name} County
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{county.description}</p>
                    <div className="flex items-center gap-2 text-warm-peach text-sm font-medium">
                      Learn more
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Rural Markets Section */}
        <div className="mt-16 glass-card p-8 border border-warm-peach/30">
          <h2 className="text-3xl font-bold mb-6">Why Our Rural Strategy Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-warm-coral" aria-hidden="true" />
                Low Competition
              </h3>
              <p className="text-muted-foreground">
                We target under 50 monthly searches. Big agencies ignore these markets. You own them.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-warm-coral" aria-hidden="true" />
                High Intent
              </h3>
              <p className="text-muted-foreground">
                These searchers are ready to buy. Not tire-kickers. Real prospects with real budgets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-warm-coral" aria-hidden="true" />
                Affordable
              </h3>
              <p className="text-muted-foreground">
                Starting at $299/month. We understand rural budgets. No premium pricing here.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Your County's Search?</h2>
          <Button size="lg" asChild className="bg-warm-coral hover:bg-warm-coral/90">
            <a href="https://formsubmit.co/mhdigitalsolutionsus@gmail.com" target="_blank" rel="noopener noreferrer">
              Schedule Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
