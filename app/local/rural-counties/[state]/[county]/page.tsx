import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, TrendingUp, DollarSign, MapPin } from "lucide-react"
import { ruralCounties } from "@/lib/content-data"
import type { Metadata } from "next"

export const dynamicParams = false

export async function generateStaticParams() {
  const params: { state: string; county: string }[] = []
  Object.entries(ruralCounties).forEach(([stateKey, stateData]) => {
    stateData.counties.forEach((county) => {
      params.push({
        state: stateKey,
        county: county.slug,
      })
    })
  })
  return params
}

export function generateMetadata({ params }: { params: { state: string; county: string } }): Metadata {
  const stateData = ruralCounties[params.state as keyof typeof ruralCounties]
  const county = stateData?.counties.find((c) => c.slug === params.county)

  return {
    title: `${county?.keyword || "Digital Marketing"} | ${county?.name} County, ${stateData?.state} | MH Digital Solution`,
    description: `${county?.description} Starting at just $499. Serving ${county?.businessTypes?.join(", ")} businesses in ${county?.name} County.`,
    keywords: [
      county?.keyword,
      `${county?.name} County ${stateData?.state}`,
      ...((county?.keywords as string[]) || []),
    ],
  }
}

export default function RuralCountyPage({ params }: { params: { state: string; county: string } }) {
  const stateData = ruralCounties[params.state as keyof typeof ruralCounties]
  const county = stateData?.counties.find((c) => c.slug === params.county)

  if (!stateData || !county) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">County Not Found</h1>
          <Button asChild>
            <Link href="/local/rural-counties">View All Rural Markets</Link>
          </Button>
        </div>
      </div>
    )
  }

  const startingPrice = county.startingPrice || "$499"

  return (
    <main className="min-h-screen bg-background py-12 md:py-20 section-with-blobs">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-coral-600 mb-2 uppercase tracking-wide">
            {county.name} County, {stateData.state}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{county.keyword}</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">{county.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="glass-card p-4 flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-warm-peach" aria-hidden="true" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase">Starting at</p>
                <p className="text-2xl font-bold text-warm-coral">{startingPrice}</p>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-warm-peach" aria-hidden="true" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase">Local to</p>
                <p className="font-semibold">{county.name} County</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 border border-warm-peach/30">
            <TrendingUp className="h-8 w-8 text-warm-coral mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-lg mb-2">Quick Results</h3>
            <p className="text-sm text-muted-foreground">Rank on Google Maps & local search in 30-60 days</p>
          </div>
          <div className="glass-card p-6 border border-warm-peach/30">
            <CheckCircle className="h-8 w-8 text-warm-coral mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-lg mb-2">No Hidden Fees</h3>
            <p className="text-sm text-muted-foreground">Fixed pricing, no surprises. Pay monthly if you prefer.</p>
          </div>
          <div className="glass-card p-6 border border-warm-peach/30">
            <CheckCircle className="h-8 w-8 text-warm-coral mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-lg mb-2">Local Expert</h3>
            <p className="text-sm text-muted-foreground">We understand {county.name} County's unique market</p>
          </div>
        </div>

        {/* Business Types Served */}
        {county.businessTypes && county.businessTypes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">We Serve {county.businessTypes.join(", ")} Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {county.businessTypes.map((type) => (
                <div key={type} className="flex gap-4 items-start p-4 glass-card border border-warm-peach/20">
                  <CheckCircle className="h-6 w-6 text-warm-coral flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold mb-1">{type}</h3>
                    <p className="text-sm text-muted-foreground">Get found online and convert more customers</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Services Available in {county.name} County</h2>
          <div className="space-y-4">
            {county.services && county.services.length > 0 ? (
              county.services.map((service) => (
                <div key={service} className="flex gap-4 items-start">
                  <CheckCircle className="h-6 w-6 text-warm-coral flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">{service}</h3>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-6 w-6 text-warm-coral flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Website Design & Development</h3>
                    <p className="text-sm text-muted-foreground">Professional websites that attract customers</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-6 w-6 text-warm-coral flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Google Maps & Local SEO</h3>
                    <p className="text-sm text-muted-foreground">Dominate local search results in your area</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-6 w-6 text-warm-coral flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Google Ads Management</h3>
                    <p className="text-sm text-muted-foreground">Get instant visibility and customers</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="h-6 w-6 text-warm-coral flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Business Listing Optimization</h3>
                    <p className="text-sm text-muted-foreground">Get claimed and verified on Google Maps</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center border-t border-warm-peach/20 pt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your {county.name} County Business?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Schedule a free consultation. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-warm-coral hover:bg-warm-coral/90">
              <a href="https://formsubmit.co/mhdigitalsolutionsus@gmail.com" target="_blank" rel="noopener noreferrer">
                Schedule Free Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get More Information</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
