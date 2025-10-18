import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, ArrowRight } from "lucide-react"

const montanaCities = {
  billings: { name: "Billings", state: "Montana" },
  bozeman: { name: "Bozeman", state: "Montana" },
  "red-lodge": { name: "Red Lodge", state: "Montana" },
  "big-timber": { name: "Big Timber", state: "Montana" },
  "round-up": { name: "Round Up", state: "Montana" },
  lewistown: { name: "Lewistown", state: "Montana" },
  "great-falls": { name: "Great Falls", state: "Montana" },
  jordan: { name: "Jordan", state: "Montana" },
  "miles-city": { name: "Miles City", state: "Montana" },
  glendive: { name: "Glendive", state: "Montana" },
  glasgow: { name: "Glasgow", state: "Montana" },
  havre: { name: "Havre", state: "Montana" },
  butte: { name: "Butte", state: "Montana" },
  missoula: { name: "Missoula", state: "Montana" },
}

interface NearMePageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: NearMePageProps): Promise<Metadata> {
  const city = montanaCities[params.city as keyof typeof montanaCities]

  if (!city) {
    return { title: "Not Found" }
  }

  const title = `Digital Marketing Near Me in ${city.name}, ${city.state}`
  const description = `Looking for digital marketing services near you in ${city.name}? MH Digital Solution offers local expertise with proven results. Call today!`

  return {
    title,
    description,
    keywords: `digital marketing near me ${city.name}, services near me, local digital agency, ${city.name} marketing`,
    alternates: {
      canonical: `https://www.mhdigitalsolution.com/local/${params.city}/near-me`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(montanaCities).map((city) => ({
    city,
  }))
}

export default function NearMePage({ params }: NearMePageProps) {
  const city = montanaCities[params.city as keyof typeof montanaCities]

  if (!city) {
    notFound()
  }

  return (
    <div className="relative z-10">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href={`/local/${params.city}`} className="text-fuchsia-600 hover:text-fuchsia-700 mb-6 inline-block">
            ← Back to {city.name}
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-8 w-8 text-fuchsia-600" />
              <h1 className="text-4xl md:text-5xl font-bold">Digital Marketing Services Near You</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Looking for digital marketing services near {city.name}? We're here to help your business grow with proven
              strategies and local expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Services Available Near You</h3>
                <ul className="space-y-3">
                  {[
                    "SEO Optimization",
                    "Web Design & Development",
                    "Digital Marketing Campaigns",
                    "Social Media Management",
                    "PPC Advertising",
                    "Content Marketing",
                    "Email Marketing",
                    "Business Consulting",
                  ].map((service) => (
                    <li key={service} className="flex items-center gap-2">
                      <span className="text-fuchsia-600">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Local Services?</h3>
                <ul className="space-y-3">
                  {[
                    "Understand local market dynamics",
                    "Personalized service and support",
                    "Quick response times",
                    "Local business knowledge",
                    "Community connections",
                    "Flexible scheduling",
                    "Face-to-face meetings available",
                    "Proven local results",
                  ].map((reason) => (
                    <li key={reason} className="flex items-center gap-2">
                      <span className="text-fuchsia-600">✓</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">How to Get Started</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Getting started with our services is easy. Here's what to expect:
                </p>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="font-semibold text-fuchsia-600 flex-shrink-0">1.</span>
                    <div>
                      <h4 className="font-semibold mb-1">Contact Us</h4>
                      <p className="text-muted-foreground">
                        Call or fill out our contact form to schedule a consultation.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-fuchsia-600 flex-shrink-0">2.</span>
                    <div>
                      <h4 className="font-semibold mb-1">Free Consultation</h4>
                      <p className="text-muted-foreground">We'll discuss your business goals and how we can help.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-fuchsia-600 flex-shrink-0">3.</span>
                    <div>
                      <h4 className="font-semibold mb-1">Custom Strategy</h4>
                      <p className="text-muted-foreground">We'll create a tailored plan for your specific needs.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-fuchsia-600 flex-shrink-0">4.</span>
                    <div>
                      <h4 className="font-semibold mb-1">Implementation & Results</h4>
                      <p className="text-muted-foreground">We execute the plan and deliver measurable results.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss how we can help your {city.name} business succeed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
              >
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+17072491222" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
