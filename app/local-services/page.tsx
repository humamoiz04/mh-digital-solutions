import type { Metadata } from "next"
import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
// Import the central data source
import { locations } from "@/lib/content-data"

export const metadata: Metadata = {
  title: "Local Services - Digital Marketing & Web Design | MH Digital Solution",
  description:
    "Discover our comprehensive digital marketing and web development services. Serving Nebraska, Wyoming, California, and rural markets across the US.",
  keywords:
    "local digital marketing, web design near me, SEO services, Nebraska marketing, Wyoming web design, California SEO",
}

export default function LocalServicesPage() {
  // Convert the locations object into an array we can map through
  const regions = Object.entries(locations).map(([key, value]) => ({
    state: value.state,
    slug: key,
    cities: value.cities,
  }))

  return (
    <main>
      {/* Hero Section */}
      <Section className="pt-16 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Service Areas & Local Solutions
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Tailored digital marketing and web development for local businesses. 
            From major hubs to rural counties, we bring enterprise-level results 
            to your backyard.
          </p>
        </div>
      </Section>

      {/* Dynamic Regions from Content Data */}
      {regions.map((region) => (
        <Section key={region.slug} className="py-12 border-t border-border/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
              <MapPin className="h-8 w-8 text-[#e49273]" />
              {region.state} Market
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {region.cities.map((city) => (
                <Card
                  key={city.slug}
                  className="glass-card border-[#f1cea7]/30 hover:border-[#e49273]/50 transition-all hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-[#e49273]">{city.name}</CardTitle>
                    <CardDescription>
                      {city.keywords?.[0] || `Digital solutions for ${city.name} businesses`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="text-sm text-foreground space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#e49273]" />
                          Web Design
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#e49273]" />
                          Local SEO
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#e49273]" />
                          Lead Generation
                        </li>
                      </ul>
                      
                      {/* Linking to the dynamic service route we fixed earlier */}
                      <Link href={`/local/${city.slug}/web-design`}>
                        <Button className="w-full bg-[#e49273] hover:bg-[#d47a5f] text-white">
                          View Services
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-b from-background to-[#f1cea7]/10">
        <div className="max-w-3xl mx-auto text-center glass-card p-12 border-[#e49273]/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Don&apos;t See Your City?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We provide remote and on-site digital services to businesses across the United States. 
            Contact us today to see how we can help your specific location.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#e49273] hover:bg-[#d47a5f] text-white px-8">
              Get a Custom Proposal
            </Button>
          </Link>
        </div>
      </Section>
    </main>
  )
}
