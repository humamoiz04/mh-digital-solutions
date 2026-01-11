"use client"

import { useState } from "react"
import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FloatingBlobs } from "@/components/floating-blobs"
import { CheckCircle2 } from "lucide-react"

export default function WebsiteCostCalculator() {
  const [hasDomain, setHasDomain] = useState(false)
  const [needsEcommerce, setNeedsEcommerce] = useState(false)
  const [hasLogo, setHasLogo] = useState(false)

  // Calculate based on selections
  let marketAverage = 2500
  let ourPrice = 100
  let monthlyPrice = 20

  if (needsEcommerce) {
    marketAverage = 5000
    ourPrice = 299
    monthlyPrice = 35
  }

  const savings = marketAverage - ourPrice

  return (
    <main className="min-h-screen bg-background">
      <FloatingBlobs />

      {/* Header */}
      <Section className="py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge className="bg-warm-coral text-white mx-auto">Free Calculator</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">How Much Should Your Website Cost in 2026?</h1>
          <p className="text-xl text-muted-foreground">
            Answer 3 quick questions and see the market average vs. our transparent pricing.
          </p>
        </div>
      </Section>

      {/* Calculator */}
      <Section className="py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="border-warm-coral/30 bg-white shadow-lg">
            <CardHeader className="bg-soft-salmon-pink/10 border-b border-warm-coral/20">
              <CardTitle className="text-foreground">Quick Assessment</CardTitle>
              <CardDescription>Your answers help us recommend the right package</CardDescription>
            </CardHeader>
            <CardContent className="pt-8 space-y-8">
              {/* Question 1 */}
              <div className="space-y-4">
                <label className="text-lg font-semibold text-foreground">1. Do you already have a domain?</label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="domain-yes"
                      name="domain"
                      checked={hasDomain}
                      onChange={() => setHasDomain(true)}
                      className="w-4 h-4 accent-warm-coral"
                    />
                    <label htmlFor="domain-yes" className="text-muted-foreground cursor-pointer">
                      Yes, I have yourbusiness.com
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="domain-no"
                      name="domain"
                      checked={!hasDomain}
                      onChange={() => setHasDomain(false)}
                      className="w-4 h-4 accent-warm-coral"
                    />
                    <label htmlFor="domain-no" className="text-muted-foreground cursor-pointer">
                      No, I need to buy one
                    </label>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="space-y-4 pt-4 border-t border-soft-salmon-pink/20">
                <label className="text-lg font-semibold text-foreground">2. Do you need to sell products online?</label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="ecom-no"
                      name="ecommerce"
                      checked={!needsEcommerce}
                      onChange={() => setNeedsEcommerce(false)}
                      className="w-4 h-4 accent-warm-coral"
                    />
                    <label htmlFor="ecom-no" className="text-muted-foreground cursor-pointer">
                      No, just a brochure site
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="ecom-yes"
                      name="ecommerce"
                      checked={needsEcommerce}
                      onChange={() => setNeedsEcommerce(true)}
                      className="w-4 h-4 accent-warm-coral"
                    />
                    <label htmlFor="ecom-yes" className="text-muted-foreground cursor-pointer">
                      Yes, I want to accept payments
                    </label>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="space-y-4 pt-4 border-t border-soft-salmon-pink/20">
                <label className="text-lg font-semibold text-foreground">3. Do you have a logo?</label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="logo-yes"
                      name="logo"
                      checked={hasLogo}
                      onChange={() => setHasLogo(true)}
                      className="w-4 h-4 accent-warm-coral"
                    />
                    <label htmlFor="logo-yes" className="text-muted-foreground cursor-pointer">
                      Yes, I have a logo
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="logo-no"
                      name="logo"
                      checked={!hasLogo}
                      onChange={() => setHasLogo(false)}
                      className="w-4 h-4 accent-warm-coral"
                    />
                    <label htmlFor="logo-no" className="text-muted-foreground cursor-pointer">
                      No, I need one designed
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Results */}
      <Section className="py-16">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Market Average */}
          <Card className="border-gray-300 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-700">Market Average Price</CardTitle>
              <CardDescription className="text-gray-600">What agencies typically charge</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-gray-900">${marketAverage.toLocaleString()}</div>
              <p className="text-sm text-gray-600">Upfront cost • 3-6 month timeline • Often includes ongoing costs</p>
            </CardContent>
          </Card>

          {/* Our Price */}
          <Card className="border-warm-coral/50 bg-warm-coral/10">
            <CardHeader>
              <CardTitle className="text-warm-coral">Our Price (Transparent)</CardTitle>
              <CardDescription className="text-warm-coral/70">How we keep it simple & affordable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Setup Fee</p>
                <p className="text-3xl font-bold text-warm-coral">${ourPrice}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Monthly (includes hosting)</p>
                <p className="text-2xl font-bold text-warm-coral">${monthlyPrice}/mo</p>
              </div>
              <div className="pt-4 border-t border-warm-coral/20">
                <p className="text-sm font-semibold text-warm-coral">You save ${savings.toLocaleString()} upfront</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Why This Works */}
      <Section className="py-16 bg-soft-salmon-pink/10">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-3xl font-bold text-foreground">What This Includes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Mobile-responsive design",
              "FREE SSL certificate",
              `${needsEcommerce ? "Payment processing" : "Contact forms"}`,
              "SEO setup",
              "FREE domain (1st year)",
              "FREE hosting (1st month)",
              "Fast loading speeds",
              "24/7 security monitoring",
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-warm-coral flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground">
            We'll build your site for ${ourPrice} upfront, then ${monthlyPrice}/month thereafter. No hidden fees. Ever.
          </p>
          <Button size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white px-8">
            Get Your Website Today
          </Button>
        </div>
      </Section>
    </main>
  )
}
