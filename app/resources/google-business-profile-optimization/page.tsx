"use client"

import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FloatingBlobs } from "@/components/floating-blobs"
import { CheckCircle2, MapPin, Star, Phone, Camera } from "lucide-react"

export default function GoogleBusinessProfileOptimization() {
  const steps = [
    {
      num: "1",
      title: "Claim Your Listing",
      desc: "Go to Google Business Profile and search for your business. If it exists, claim it. If not, create a new listing.",
      icon: MapPin,
    },
    {
      num: "2",
      title: "Complete Your Profile 100%",
      desc: "Fill in every field: business hours, phone, website, service areas, description, and payment methods.",
      icon: CheckCircle2,
    },
    {
      num: "3",
      title: "Add 20+ High-Quality Photos",
      desc: "Photos of your storefront, team, services, and work. Google favors businesses with visual content.",
      icon: Camera,
    },
    {
      num: "4",
      title: "Get Reviews & Respond",
      desc: "Ask customers to leave reviews. Respond to all reviews (positive and negative) within 48 hours.",
      icon: Star,
    },
    {
      num: "5",
      title: "Post Regularly",
      desc: "Post 2-4 times per month about promotions, events, or news. Fresh content tells Google you're active.",
      icon: Phone,
    },
  ]

  const checklist = [
    "Business name matches everywhere (consistency is key for Google)",
    "Phone number is clickable and current",
    "Website linked to your domain",
    "Complete address with ZIP code",
    "Business hours including holidays",
    "Service areas defined (if you serve multiple towns)",
    "Categories selected (at least 3)",
    "Attributes filled (wheelchair accessible, online ordering, etc.)",
    "20+ photos uploaded",
    "Respond to all new reviews within 48 hours",
    "Post updates at least weekly",
    "Monitor and reply to customer questions",
  ]

  return (
    <main className="min-h-screen bg-background">
      <FloatingBlobs />

      {/* Hero */}
      <Section className="py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge className="bg-warm-coral text-white mx-auto">Local SEO Strategy</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Dominate Google Maps with Your Business Profile
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            70% of customers search for local businesses online before visiting. Make sure they find you first.
          </p>
        </div>
      </Section>

      {/* Why This Matters */}
      <Section className="py-16 bg-soft-salmon-pink/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Why Google Business Profile Matters</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "70%", desc: "of consumers search for local businesses online" },
              { stat: "50%", desc: "of map searches lead to a visit within 24 hours" },
              { stat: "88%", desc: "of customers trust online reviews as much as personal recommendations" },
            ].map((item, i) => (
              <Card key={i} className="border-warm-coral/20 bg-white text-center">
                <CardContent className="pt-8 space-y-2">
                  <p className="text-4xl font-bold text-warm-coral">{item.stat}</p>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 5-Step Process */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold text-foreground">The 5-Step Process</h2>
            <p className="text-muted-foreground">Follow this checklist to optimize your Google Business Profile</p>
          </div>

          <div className="space-y-6">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.num} className="border-warm-coral/20 bg-white">
                  <CardContent className="pt-8 flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warm-coral/10">
                        <Icon className="h-6 w-6 text-warm-coral" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Complete Checklist */}
      <Section className="py-16 bg-soft-salmon-pink/10">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-3xl font-bold text-foreground">Complete Optimization Checklist</h2>
            <p className="text-muted-foreground">Use this to ensure every detail is perfect</p>
          </div>

          <Card className="border-warm-coral/20 bg-white">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-4">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-warm-coral flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Photo Strategy */}
      <Section className="py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-3xl font-bold text-foreground">Photo Strategy (The Hidden Ranking Factor)</h2>
            <p className="text-muted-foreground">Google gives more visibility to profiles with 20+ photos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: "Storefront & Exterior",
                items: ["Main entrance", "Business signage", "Parking lot", "Street view"],
              },
              {
                category: "Team & Culture",
                items: ["Team photo", "Owner/founder", "Staff working", "Team events"],
              },
              {
                category: "Products/Services",
                items: ["Main offering", "Before/after", "Process photos", "Customer testimonials"],
              },
              {
                category: "Interior",
                items: ["Main counter", "Work area", "Customer seating", "Product display"],
              },
            ].map((section, i) => (
              <Card key={i} className="border-soft-salmon-pink/30">
                <CardHeader>
                  <CardTitle className="text-warm-coral text-base">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-warm-coral" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Review Strategy */}
      <Section className="py-16 bg-warm-coral/10">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-3xl font-bold text-foreground">Review Strategy (The Conversion Driver)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-warm-coral/20 bg-white">
              <CardHeader>
                <CardTitle className="text-warm-coral">How to Get More Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Ask at the end of every transaction",
                  "Send follow-up emails with review link",
                  "Include Google review QR code on receipts",
                  "Incentivize with small discounts (ethically)",
                  "Make it easy - share direct link",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-warm-coral flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-warm-coral/20 bg-white">
              <CardHeader>
                <CardTitle className="text-warm-coral">How to Handle Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Respond within 48 hours (algorithm favors fast responses)",
                  "Thank positive reviewers by name",
                  "Address concerns in negative reviews professionally",
                  "Never argue or get defensive",
                  "Offer to solve problems offline (email/phone)",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-warm-coral flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Let Us Handle It For You</h2>
          <p className="text-lg text-muted-foreground">
            We can set up, optimize, and manage your Google Business Profile so you can focus on running your business.
          </p>
          <Button size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white px-8">
            Schedule Your Free Optimization Audit
          </Button>
        </div>
      </Section>
    </main>
  )
}
