import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { locations } from "@/lib/content-data"
import type { Metadata } from "next"

export const dynamicParams = false

export async function generateStaticParams() {
  return Object.keys(locations).map((state) => ({
    state,
  }))
}

export function generateMetadata({ params }: { params: { state: string } }): Metadata {
  const location = locations[params.state as keyof typeof locations]
  const stateName = location?.state || "Unknown"

  return {
    title: `Digital Marketing & Web Design in ${stateName} | MH Digital Solution`,
    description: `${location?.description} Serving businesses in ${location?.cities.map((c) => c.name).join(", ")} and more.`,
  }
}

export default function StatePage({ params }: { params: { state: string } }) {
  const location = locations[params.state as keyof typeof locations]

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">State Not Found</h1>
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
          Digital Marketing & Web Design in {location.state}
        </h1>
        <p className="text-lg text-muted-foreground mb-12">{location.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {location.cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${params.state}/${city.slug}`}
              className="p-6 border border-border rounded-lg hover:border-fuchsia-600 hover:bg-muted transition-all group"
            >
              <div className="flex items-center gap-3">
                <MapPin
                  className="h-5 w-5 text-fuchsia-600 flex-shrink-0 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-fuchsia-600 transition-colors">{city.name}</h3>
                  <p className="text-xs text-muted-foreground">{city.keywords}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center border-t pt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business in {location.state}?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Let's discuss how we can help your business thrive with digital marketing, SEO, and web design.
          </p>
          <Button size="lg" asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
