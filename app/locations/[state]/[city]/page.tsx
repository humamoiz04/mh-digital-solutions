import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, TrendingUp, Award } from "lucide-react"
import { locations } from "@/lib/content-data"
import type { Metadata } from "next"

export const dynamicParams = false

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = []
  Object.entries(locations).forEach(([stateKey, stateData]) => {
    stateData.cities.forEach((city) => {
      params.push({
        state: stateKey,
        city: city.slug,
      })
    })
  })
  return params
}

export function generateMetadata({ params }: { params: { state: string; city: string } }): Metadata {
  const location = locations[params.state as keyof typeof locations]
  const city = location?.cities.find((c) => c.slug === params.city)

  return {
    title: `Top Rated Digital Marketing & Web Design in ${city?.name}, ${location?.state} | MH Digital Solution`,
    description: `Professional digital marketing, SEO, and web design services in ${city?.name}, ${location?.state}. Serving local businesses with proven results.`,
  }
}

export default function CityPage({ params }: { params: { state: string; city: string } }) {
  const location = locations[params.state as keyof typeof locations]
  const city = location?.cities.find((c) => c.slug === params.city)

  if (!location || !city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
          <Button asChild>
            <Link href="/locations">View All Locations</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Top Rated Digital Marketing in {city.name}, {location.state}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Professional digital solutions for {city.name} businesses. We serve clients from all neighborhoods and
          communities in {city.name} with proven digital marketing and web design expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 border border-border rounded-lg bg-muted/50">
            <TrendingUp className="h-8 w-8 text-fuchsia-600 mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
            <p className="text-sm text-muted-foreground">Average client sees 150%+ growth in first year</p>
          </div>
          <div className="p-6 border border-border rounded-lg bg-muted/50">
            <Award className="h-8 w-8 text-fuchsia-600 mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
            <p className="text-sm text-muted-foreground">
              10+ years serving {city.name} and {location.state} businesses
            </p>
          </div>
          <div className="p-6 border border-border rounded-lg bg-muted/50">
            <CheckCircle className="h-8 w-8 text-fuchsia-600 mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-lg mb-2">Dedicated Support</h3>
            <p className="text-sm text-muted-foreground">Your dedicated account manager available</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Services in {city.name}</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold mb-2">SEO Services</h3>
                <p className="text-muted-foreground">Dominate Google search in {city.name} for your local keywords</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold mb-2">Web Design & Development</h3>
                <p className="text-muted-foreground">Professional websites that convert visitors to customers</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold mb-2">PPC Advertising</h3>
                <p className="text-muted-foreground">Instant visibility with profitable Google Ads campaigns</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold mb-2">Social Media Marketing</h3>
                <p className="text-muted-foreground">Build your community and engage customers on social platforms</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center border-t pt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your {city.name} Business?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Schedule a free consultation to discuss your digital marketing needs.
          </p>
          <Button size="lg" asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
