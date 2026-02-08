import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

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

interface SEOPageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: SEOPageProps): Promise<Metadata> {
  const city = montanaCities[params.city as keyof typeof montanaCities]

  if (!city) {
    return { title: "Not Found" }
  }

  const title = `SEO Services in ${city.name}, ${city.state} | Local Search Optimization`
  const description = `Professional SEO services in ${city.name}, ${city.state}. Improve your search rankings and get found by local customers searching for your services.`

  return {
    title,
    description,
    keywords: `SEO ${city.name}, local SEO ${city.name}, search engine optimization ${city.name}, SEO services near me`,
    alternates: {
      canonical: `https://www.mhdigitalsolution.com/local/${params.city}/seo`,
    },
  }
}

export const dynamicParams = false

export async function generateStaticParams() {
  return Object.keys(montanaCities).map((city) => ({
    city,
  }))
}

export default function LocalSEOPage({ params }: SEOPageProps) {
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SEO Services in {city.name}, {city.state}
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Get found by local customers searching for your services. Our proven SEO strategies help {city.name}
            businesses rank higher in search results and attract more qualified leads.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Our SEO Services</h3>
                <ul className="space-y-3">
                  {[
                    "Local keyword research and optimization",
                    "Google Business Profile optimization",
                    "Local citation building",
                    "On-page SEO optimization",
                    "Technical SEO improvements",
                    "Link building and authority",
                    "Content optimization",
                    "Local schema markup",
                  ].map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Why Local SEO Matters</h3>
                <ul className="space-y-3">
                  {[
                    "72% of searches have local intent",
                    "Local searches drive foot traffic",
                    "Build trust with local customers",
                    "Compete with larger companies",
                    "Increase phone calls and inquiries",
                    "Improve online visibility",
                    "Higher conversion rates",
                    "Cost-effective marketing",
                  ].map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Our SEO Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Audit & Analysis",
                    description: "We analyze your current SEO performance and identify opportunities for improvement.",
                  },
                  {
                    step: "2",
                    title: "Strategy Development",
                    description: `Create a customized SEO strategy tailored to your ${city.name} market and business goals.`,
                  },
                  {
                    step: "3",
                    title: "Implementation",
                    description: "Execute on-page, technical, and local SEO improvements to boost your rankings.",
                  },
                  {
                    step: "4",
                    title: "Monitoring & Optimization",
                    description: "Continuously monitor performance and optimize for better results and ROI.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-fuchsia-600 text-white font-semibold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Dominate Local Search?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help your {city.name} business rank higher and attract more customers.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
            >
              <Link href="/contact">
                Schedule Free SEO Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
