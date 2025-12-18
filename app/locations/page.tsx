import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Services in Your State | MH Digital Solution",
  description:
    "We serve businesses nationwide. Find digital marketing, web design, and business consulting services in your state.",
}

export default function LocationsPage() {
  const states = [
    { slug: "nebraska", name: "Nebraska", cities: 7 },
    { slug: "wyoming", name: "Wyoming", cities: 4 },
    { slug: "maine", name: "Maine", cities: 3 },
    { slug: "rhode-island", name: "Rhode Island", cities: 4 },
    { slug: "new-mexico", name: "New Mexico", cities: 4 },
    { slug: "iowa", name: "Iowa", cities: 4 },
    { slug: "massachusetts", name: "Massachusetts", cities: 5 },
    { slug: "west-virginia", name: "West Virginia", cities: 3 },
    { slug: "vermont", name: "Vermont", cities: 3 },
  ]

  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4 text-center">
          Areas We Serve Nationwide
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Digital marketing, web design, and business consulting for businesses in 9 states and 35+ cities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {states.map((state) => (
            <Link
              key={state.slug}
              href={`/locations/${state.slug}`}
              className="p-6 border border-border rounded-lg hover:border-fuchsia-600 hover:bg-muted transition-all group"
            >
              <div className="flex items-start gap-4">
                <MapPin
                  className="h-8 w-8 text-fuchsia-600 flex-shrink-0 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold group-hover:text-fuchsia-600 transition-colors">{state.name}</h2>
                  <p className="text-muted-foreground">{state.cities} cities served</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center border-t mt-12 pt-12">
          <h2 className="text-2xl font-bold mb-4">Don't See Your Area?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We work with businesses nationwide. Contact us to discuss services in your area.
          </p>
          <Button size="lg" asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
