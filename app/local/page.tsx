import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowRight } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Local Digital Marketing Services in Montana | MH Digital Solution",
  description:
    "Digital marketing, SEO, and web design services in Montana cities including Billings, Bozeman, Great Falls, Missoula, and more. Find local services near you.",
  keywords:
    "digital marketing Montana, SEO Montana, web design Montana, digital marketing near me, local SEO services, Montana digital agency",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/local",
  },
}

const montanaCities = [
  { name: "Billings", slug: "billings", description: "Montana's largest city" },
  { name: "Bozeman", slug: "bozeman", description: "College town and tech hub" },
  { name: "Missoula", slug: "missoula", description: "Cultural center of Montana" },
  { name: "Great Falls", slug: "great-falls", description: "Central Montana hub" },
  { name: "Butte", slug: "butte", description: "Historic mining city" },
  { name: "Havre", slug: "havre", description: "Northern Montana" },
  { name: "Glasgow", slug: "glasgow", description: "Northeast Montana" },
  { name: "Glendive", slug: "glendive", description: "Eastern Montana" },
  { name: "Miles City", slug: "miles-city", description: "Southeast Montana" },
  { name: "Jordan", slug: "jordan", description: "Remote Montana" },
  { name: "Lewistown", slug: "lewistown", description: "Central Montana" },
  { name: "Round Up", slug: "round-up", description: "Central Montana" },
  { name: "Big Timber", slug: "big-timber", description: "South-central Montana" },
  { name: "Red Lodge", slug: "red-lodge", description: "Mountain community" },
]

export default function LocalServicesPage() {
  return (
    <div className="relative z-10">
      <StructuredData
        type="LocalBusiness"
        data={{
          name: "MH Digital Solution",
          description: "Digital marketing and web development services throughout Montana",
          areaServed: [
            "Billings, MT",
            "Bozeman, MT",
            "Missoula, MT",
            "Great Falls, MT",
            "Butte, MT",
            "Havre, MT",
            "Glasgow, MT",
            "Glendive, MT",
            "Miles City, MT",
            "Jordan, MT",
            "Lewistown, MT",
            "Round Up, MT",
            "Big Timber, MT",
            "Red Lodge, MT",
          ],
          telephone: "+17072491222",
          email: "info@mhdigitalsolution.com",
          serviceType: [
            "SEO Services",
            "Web Design",
            "Web Development",
            "Digital Marketing",
            "Social Media Marketing",
            "PPC Advertising",
            "Content Marketing",
          ],
        }}
      />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-8 w-8 text-fuchsia-600" />
              <h1 className="text-4xl md:text-5xl font-bold">Local Digital Marketing Services in Montana</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional digital marketing, SEO, and web development services for businesses throughout Montana. Find
              services near you and grow your local presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {montanaCities.map((city) => (
              <Link key={city.slug} href={`/local/${city.slug}`}>
                <Card className="glass-card hover:shadow-lg transition-all hover:scale-105 h-full cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{city.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{city.description}</p>
                    <div className="flex items-center gap-2 text-fuchsia-600 font-semibold">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="glass-card mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Serving All of Montana</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're in a major city like Billings or Missoula, or a smaller community, we have the expertise
                to help your business grow online. Our local SEO strategies are designed to help you reach customers in
                your area and expand your market reach.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Our Local Services Include:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Local SEO optimization</li>
                    <li>• Google Business Profile management</li>
                    <li>• Local citation building</li>
                    <li>• Location-based PPC campaigns</li>
                    <li>• Local content marketing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Why Local Matters:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Reach customers searching "near me"</li>
                    <li>• Improve local search rankings</li>
                    <li>• Build community trust</li>
                    <li>• Increase foot traffic</li>
                    <li>• Boost local brand awareness</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Local Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how we can help your Montana business thrive online.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
