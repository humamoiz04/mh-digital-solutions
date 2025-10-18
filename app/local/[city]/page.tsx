import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Phone } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

const montanaCities = {
  billings: {
    name: "Billings",
    state: "Montana",
    description: "Digital marketing and web development services in Billings, Montana",
    zip: "59101",
    lat: 45.7833,
    lng: -103.6964,
  },
  bozeman: {
    name: "Bozeman",
    state: "Montana",
    description: "SEO and digital marketing agency serving Bozeman, Montana",
    zip: "59715",
    lat: 45.6769,
    lng: -111.0429,
  },
  "red-lodge": {
    name: "Red Lodge",
    state: "Montana",
    description: "Web design and SEO services for Red Lodge, Montana businesses",
    zip: "59068",
    lat: 45.1833,
    lng: -109.25,
  },
  "big-timber": {
    name: "Big Timber",
    state: "Montana",
    description: "Digital marketing solutions for Big Timber, Montana",
    zip: "59011",
    lat: 45.8333,
    lng: -109.95,
  },
  "round-up": {
    name: "Round Up",
    state: "Montana",
    description: "SEO and web development services in Round Up, Montana",
    zip: "59072",
    lat: 46.4333,
    lng: -109.5833,
  },
  lewistown: {
    name: "Lewistown",
    state: "Montana",
    description: "Digital marketing agency serving Lewistown, Montana",
    zip: "59457",
    lat: 47.0667,
    lng: -109.5833,
  },
  "great-falls": {
    name: "Great Falls",
    state: "Montana",
    description: "Web design and SEO services for Great Falls, Montana",
    zip: "59401",
    lat: 47.5,
    lng: -111.3,
  },
  jordan: {
    name: "Jordan",
    state: "Montana",
    description: "Digital marketing solutions for Jordan, Montana businesses",
    zip: "59337",
    lat: 48.3833,
    lng: -109.3833,
  },
  "miles-city": {
    name: "Miles City",
    state: "Montana",
    description: "SEO and web development services in Miles City, Montana",
    zip: "59301",
    lat: 46.4,
    lng: -105.8333,
  },
  glendive: {
    name: "Glendive",
    state: "Montana",
    description: "Digital marketing agency serving Glendive, Montana",
    zip: "59330",
    lat: 48.1,
    lng: -104.7167,
  },
  glasgow: {
    name: "Glasgow",
    state: "Montana",
    description: "Web design and SEO services for Glasgow, Montana",
    zip: "59230",
    lat: 48.2,
    lng: -106.6333,
  },
  havre: {
    name: "Havre",
    state: "Montana",
    description: "Digital marketing solutions for Havre, Montana businesses",
    zip: "59501",
    lat: 48.5667,
    lng: -109.6667,
  },
  butte: {
    name: "Butte",
    state: "Montana",
    description: "SEO and web development services in Butte, Montana",
    zip: "59701",
    lat: 46.0,
    lng: -112.5333,
  },
  missoula: {
    name: "Missoula",
    state: "Montana",
    description: "Digital marketing agency serving Missoula, Montana",
    zip: "59801",
    lat: 46.8667,
    lng: -113.9833,
  },
}

const wyomingCities = {
  cheyenne: {
    name: "Cheyenne",
    state: "Wyoming",
    description: "Digital marketing company and SEO services in Cheyenne, Wyoming",
    zip: "82001",
    lat: 41.14,
    lng: -104.8202,
    keywords:
      "digital marketing company Cheyenne, SEO services Cheyenne WY, web design Cheyenne, PPC advertising Cheyenne, hire Google Ads expert Cheyenne",
  },
  casper: {
    name: "Casper",
    state: "Wyoming",
    description: "SEO services and eCommerce solutions in Casper, Wyoming",
    zip: "82601",
    lat: 42.8333,
    lng: -106.3167,
    keywords:
      "SEO services Casper, eCommerce SEO Casper WY, affordable eCommerce SEO package Casper, web development Casper",
  },
  laramie: {
    name: "Laramie",
    state: "Wyoming",
    description: "WordPress development and web design services in Laramie, Wyoming",
    zip: "82070",
    lat: 41.14,
    lng: -105.5883,
    keywords:
      "WordPress developer Laramie, cost to hire WordPress developer Laramie WY, web design Laramie, custom ecommerce Laramie",
  },
  "rock-springs": {
    name: "Rock Springs",
    state: "Wyoming",
    description: "Website redesign and digital marketing in Rock Springs, Wyoming",
    zip: "82901",
    lat: 41.5867,
    lng: -109.2167,
    keywords:
      "website redesign Rock Springs, request quote website redesign Rock Springs WY, web development, digital marketing",
  },
  sheridan: {
    name: "Sheridan",
    state: "Wyoming",
    description: "Content strategy and marketing services in Sheridan, Wyoming",
    zip: "82801",
    lat: 44.8067,
    lng: -106.9567,
    keywords: "content strategy Sheridan, hire long-term content writer Sheridan WY, digital marketing, SEO services",
  },
  jackson: {
    name: "Jackson",
    state: "Wyoming",
    description: "Luxury web design and resort marketing in Jackson, Wyoming",
    zip: "83001",
    lat: 43.4799,
    lng: -110.7624,
    keywords:
      "luxury resort website design Jackson WY, Jackson Hole web design, resort digital marketing agency, luxury web design",
  },
  gillette: {
    name: "Gillette",
    state: "Wyoming",
    description: "Local SEO and B2B digital marketing in Gillette, Wyoming",
    zip: "82716",
    lat: 44.2998,
    lng: -105.5007,
    keywords:
      "local SEO Gillette, guaranteed Google My Business optimization Gillette, B2B digital marketing Wyoming, drilling supply marketing",
  },
}

const westVirginiaCities = {
  morgantown: {
    name: "Morgantown",
    state: "West Virginia",
    description: "Law firm marketing and social media services in Morgantown, West Virginia",
    zip: "26505",
    lat: 39.6393,
    lng: -79.9789,
    keywords:
      "law firm marketing Morgantown, social media marketing law firms Morgantown WV, legal marketing services, SEO consultant Morgantown",
  },
  charleston: {
    name: "Charleston",
    state: "West Virginia",
    description: "Web development and custom SEO services in Charleston, West Virginia",
    zip: "25301",
    lat: 38.3498,
    lng: -81.6326,
    keywords:
      "web development company Charleston, custom web development Charleston WV, long-tail transactional SEO keywords, digital marketing",
  },
  huntington: {
    name: "Huntington",
    state: "West Virginia",
    description: "Mobile app development and custom software in Huntington, West Virginia",
    zip: "25701",
    lat: 38.4159,
    lng: -82.4452,
    keywords:
      "mobile app development Huntington, price quote custom app development Huntington WV, software development, tech solutions",
  },
  wheeling: {
    name: "Wheeling",
    state: "West Virginia",
    description: "Lead generation and performance-based digital marketing in Wheeling, West Virginia",
    zip: "26003",
    lat: 40.064,
    lng: -80.7209,
    keywords:
      "lead generation Wheeling, hire pay-per-lead digital agency Wheeling WV, performance marketing, digital marketing services",
  },
  fairmont: {
    name: "Fairmont",
    state: "West Virginia",
    description: "SEO audit and website optimization services in Fairmont, West Virginia",
    zip: "26554",
    lat: 39.4833,
    lng: -80.1333,
    keywords: "SEO audit Fairmont, free SEO audit small business Fairmont WV, website optimization, digital marketing",
  },
  martinsburg: {
    name: "Martinsburg",
    state: "West Virginia",
    description: "WordPress maintenance and web support in Martinsburg, West Virginia",
    zip: "25401",
    lat: 39.4667,
    lng: -77.9667,
    keywords:
      "WordPress maintenance Martinsburg, monthly WordPress maintenance Martinsburg WV, web support, website management",
  },
}

const kansasCities = {
  olathe: {
    name: "Olathe",
    state: "Kansas",
    description: "Local SEO and digital marketing for Olathe, Kansas businesses",
    zip: "66061",
    lat: 38.8864,
    lng: -94.8185,
    keywords: "local SEO Olathe, shop digital marketing Kansas, automotive repair SEO, local business marketing",
  },
  wichita: {
    name: "Wichita",
    state: "Kansas",
    description: "Affordable SEO packages and digital marketing in Wichita, Kansas",
    zip: "67202",
    lat: 37.6872,
    lng: -97.3301,
    keywords: "affordable SEO Wichita, best SEO package price Wichita KS, digital marketing services, web design",
  },
}

const allCities = { ...montanaCities, ...wyomingCities, ...westVirginiaCities, ...kansasCities }

interface LocalPageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: LocalPageProps): Promise<Metadata> {
  const city = allCities[params.city as keyof typeof allCities]

  if (!city) {
    return {
      title: "Not Found",
    }
  }

  const title = `Digital Marketing & SEO Services in ${city.name}, ${city.state} | MH Digital Solution`
  const description = `Professional digital marketing, SEO, and web design services in ${city.name}, ${city.state}. Local expertise with proven results. Call us today!`

  return {
    title,
    description,
    keywords:
      city.keywords ||
      `digital marketing ${city.name}, SEO ${city.name}, web design ${city.name}, web development ${city.name}, digital marketing near me, SEO near me, ${city.name} digital agency`,
    alternates: {
      canonical: `https://www.mhdigitalsolution.com/local/${params.city}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.mhdigitalsolution.com/local/${params.city}`,
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(allCities).map((city) => ({
    city,
  }))
}

export default function LocalCityPage({ params }: LocalPageProps) {
  const city = allCities[params.city as keyof typeof allCities]

  if (!city) {
    notFound()
  }

  return (
    <div className="relative z-10">
      <StructuredData
        type="LocalBusiness"
        data={{
          name: "MH Digital Solution",
          description: `Digital marketing and web development services in ${city.name}, ${city.state}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: city.name,
            addressRegion: city.state,
            postalCode: city.zip,
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: city.lat,
            longitude: city.lng,
          },
          telephone: "+17072491222",
          email: "info@mhdigitalsolution.com",
          areaServed: {
            "@type": "City",
            name: city.name,
          },
        }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-fuchsia-600" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Digital Marketing Services in {city.name}, {city.state}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              Professional digital marketing, SEO, and web development services tailored for {city.name} businesses. We
              help local companies grow their online presence and reach more customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Our Services in {city.name}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>SEO Optimization for local search visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>Web Design & Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>Digital Marketing Campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>Social Media Marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>PPC Advertising</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>Content Marketing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>Local expertise with proven results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>Personalized strategies for your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>Transparent reporting and communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>Affordable pricing for local businesses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>Dedicated support team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>Measurable ROI</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Ready to grow your business in {city.name}? Contact us for a free consultation and let's discuss how we
                can help you achieve your digital marketing goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Service Areas Near {city.name}</h3>
            <p className="text-muted-foreground mb-6">
              We serve businesses throughout {city.state} and surrounding areas. Looking for services near you?
            </p>
            <Link href="/local" className="text-fuchsia-600 hover:text-fuchsia-700 font-semibold">
              View all service areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
