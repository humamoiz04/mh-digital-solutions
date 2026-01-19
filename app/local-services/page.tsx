import type { Metadata } from "next"
import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Local Services - Digital Marketing & Web Design | MH Digital Solution",
  description:
    "Discover our comprehensive digital marketing and web development services in your area. Serving Vacaville, Fairfield, Dixon, Vallejo, and surrounding Northern California communities.",
  keywords:
    "local digital marketing, web design near me, digital services, local SEO, service areas, Northern California",
}

const serviceAreas = [
  {
    region: "Northern California Hub",
    cities: [
      { name: "Vacaville", slug: "vacaville", description: "Digital marketing hub serving Solano County" },
      { name: "Fairfield", slug: "fairfield", description: "Web design and SEO services" },
      { name: "Dixon", slug: "dixon", description: "Business consulting and automation" },
      { name: "Vallejo", slug: "vallejo", description: "Marketing and branding solutions" },
    ],
  },
  {
    region: "Extended Service Area",
    cities: [
      { name: "Concord", slug: "concord", description: "Enterprise digital solutions" },
      { name: "Walnut Creek", slug: "walnut-creek", description: "Premium marketing services" },
      { name: "Pleasant Hill", slug: "pleasant-hill", description: "Web development and design" },
      { name: "Martinez", slug: "martinez", description: "Local business growth strategies" },
    ],
  },
  {
    region: "Rural Markets",
    cities: [
      { name: "Nebraska Counties", slug: "nebraska", description: "Rural market specialization" },
      { name: "Wyoming Counties", slug: "wyoming", description: "Mountain region marketing" },
      { name: "Alabama Counties", slug: "alabama", description: "Southeast digital services" },
      { name: "Arizona Counties", slug: "arizona", description: "Southwest business solutions" },
    ],
  },
]

export default function LocalServicesPage() {
  return (
    <main>
      <Section className="pt-12 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Local Digital Services</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Comprehensive digital marketing and web development services tailored to your local market. Whether you're
            in Northern California or our rural market specialization areas, we're here to help your business thrive.
          </p>
        </div>
      </Section>

      {serviceAreas.map((region) => (
        <Section key={region.region} className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
              <MapPin className="h-8 w-8 text-[#e49273]" />
              {region.region}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {region.cities.map((city) => (
                <Card
                  key={city.slug}
                  className="glass-card border-[#f1cea7]/30 hover:border-[#e49273]/50 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="text-[#e49273]">{city.name}</CardTitle>
                    <CardDescription>{city.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="text-sm text-foreground space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#e49273]"></span>
                          Digital Marketing Strategy
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#e49273]"></span>
                          Web Design & Development
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#e49273]"></span>
                          SEO & Local Optimization
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#e49273]"></span>
                          Social Media Management
                        </li>
                      </ul>
                      <Link href={`/locations/${city.slug}`}>
                        <Button className="w-full bg-[#e49273] hover:bg-[#d47a5f] text-white">
                          Explore {city.name}
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

      <Section className="py-12 bg-gradient-to-r from-[#e49273]/10 via-[#f1cea7]/10 to-[#e49273]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started with a free consultation tailored to your local market and business goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#e49273] hover:bg-[#d47a5f] text-white">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </Section>
    </main>
  )
}
