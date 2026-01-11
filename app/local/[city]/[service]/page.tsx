import type { Metadata } from "next"
import { Section } from "@/components/Section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

interface LocalServicePageProps {
  params: {
    city: string
    service: string
  }
}

export async function generateMetadata({ params }: LocalServicePageProps): Promise<Metadata> {
  const cityName = params.city.replace(/-/g, " ")
  const serviceName = params.service.replace(/-/g, " ")

  return {
    title: `${serviceName} Services in ${cityName} | MH Digital Solution`,
    description: `Professional ${serviceName} services in ${cityName}. Trusted local expertise with proven results. Get a free consultation today!`,
    keywords: `${serviceName} ${cityName}, local ${serviceName}, ${serviceName} services near me`,
    alternates: {
      canonical: `https://www.mhdigitalsolution.com/local/${params.city}/${params.service}`,
    },
  }
}

export default function LocalServicePage({ params }: LocalServicePageProps) {
  const cityName = params.city.replace(/-/g, " ").toUpperCase()
  const serviceName = params.service.replace(/-/g, " ")

  return (
    <div className="relative z-10">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              Local Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {serviceName} in {cityName}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get expert {serviceName} services tailored to your {cityName} business. Our local team understands your
              market and delivers proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border-cyan-500/50 hover:border-cyan-500 bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent mb-4">
                Why Choose MH Digital for {serviceName}?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Local Market Expertise",
                "Proven Results in Your Area",
                "Dedicated Support Team",
                "Customized Strategies",
                "Transparent Reporting",
                "Competitive Pricing",
              ].map((benefit, index) => (
                <Card key={index} className="glass-card border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <p className="font-semibold">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-fuchsia-600/10 to-cyan-600/10 border border-fuchsia-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your {cityName} Business?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our {serviceName} services can help you achieve your goals.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
              >
                Schedule Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
