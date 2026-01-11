"use client"

import { Section } from "@/components/Section"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Zap } from "lucide-react"
import { FloatingBlobs } from "@/components/floating-blobs"

export default function HundredDollarWebsite() {
  return (
    <main className="min-h-screen bg-background">
      <FloatingBlobs />

      {/* Hero Section */}
      <Section className="py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge className="bg-warm-coral text-white mx-auto">Limited Time Offer</Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Professional Website for <span className="text-warm-coral">Just $100</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop paying thousands for a website. Get a professional, mobile-optimized site for $100 upfront, then just
            $20/month for hosting and maintenance.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm">
            <div className="space-y-1">
              <p className="font-semibold text-warm-coral">$100</p>
              <p className="text-muted-foreground">Setup Fee</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-warm-coral">$20/mo</p>
              <p className="text-muted-foreground">Hosting</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-warm-coral">5 Pages</p>
              <p className="text-muted-foreground">Minimum</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-warm-coral">24hrs</p>
              <p className="text-muted-foreground">Turnaround</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white px-8">
              Claim My $100 Website
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-warm-coral text-warm-coral hover:bg-warm-coral/10 bg-transparent"
            >
              See What's Included
            </Button>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section className="py-16 bg-soft-salmon-pink/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Here's What You Get</h2>
            <p className="text-muted-foreground">No hidden fees. No surprises. Just a professional website.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "5-Page Design", desc: "Home, About, Services, Blog, Contact" },
              { icon: Shield, title: "Mobile-Optimized", desc: "Looks perfect on all devices" },
              { icon: CheckCircle, title: "FREE Domain (1 Year)", desc: "yourbusiness.com included" },
              { icon: Clock, title: "FREE SSL Certificate", desc: "Secure & trusted" },
            ].map((item, i) => (
              <Card key={i} className="border-warm-coral/20 bg-white">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <item.icon className="h-6 w-6 text-warm-coral flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-foreground">{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Why This Works */}
      <Section className="py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Why $100 is Possible</h2>
            <p className="text-muted-foreground text-lg">We keep it simple. You keep your costs low.</p>
          </div>

          <div className="space-y-4">
            <Card className="border-soft-salmon-pink/30">
              <CardHeader>
                <CardTitle className="text-warm-coral">Volume Over Margin</CardTitle>
                <CardDescription>
                  We make money on 12 months of $20 hosting fees. One setup fee, long-term value.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-soft-salmon-pink/30">
              <CardHeader>
                <CardTitle className="text-warm-coral">Transparency Builds Trust</CardTitle>
                <CardDescription>
                  No upsells. No surprises. You know exactly what you're paying, when, and why.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-soft-salmon-pink/30">
              <CardHeader>
                <CardTitle className="text-warm-coral">You Keep Hosting Forever</CardTitle>
                <CardDescription>
                  If you ever leave, the site stays with you. We don't lock you in. Ever.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 bg-warm-coral/10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Launch?</h2>
          <p className="text-lg text-muted-foreground">
            Small business owners across rural America are building their web presence for $100. Join them.
          </p>
          <Button size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white px-8">
            Get Started Today
          </Button>
        </div>
      </Section>
    </main>
  )
}
