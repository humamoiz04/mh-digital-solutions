"use client"

import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FloatingBlobs } from "@/components/floating-blobs"
import { Gift, Zap, BarChart3, Share2 } from "lucide-react"

export default function ReferralRewardsPage() {
  const rewards = [
    {
      tier: 1,
      icon: Zap,
      title: "Free AI Chatbot",
      description: "Get an AI-powered customer service bot installed on your website",
      value: "$300 value",
      referrals: "1 Referral",
      color: "text-warm-coral",
    },
    {
      tier: 2,
      icon: BarChart3,
      title: "Built-in CRM",
      description: "Automatically organize and track every customer lead",
      value: "$500 value",
      referrals: "2 Referrals",
      color: "text-warm-coral",
    },
    {
      tier: 3,
      icon: Share2,
      title: "Social Media Takeover",
      description: "We manage your social media for 15 days (3 posts/week)",
      value: "$750 value",
      referrals: "3 Referrals",
      color: "text-warm-coral",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <FloatingBlobs />

      {/* Hero */}
      <Section className="py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge className="bg-warm-coral text-white mx-auto">Loyalty Program</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Earn Premium Features <span className="text-warm-coral">For Free</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Refer friends and get powerful tools at no cost. The more you share, the more you earn.
          </p>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="py-16 bg-soft-salmon-pink/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Share Your Link", desc: "Send your unique referral link to friends and family" },
              { num: "2", title: "They Sign Up", desc: "Your referral uses the link to get their website" },
              { num: "3", title: "You Earn", desc: "Once they become a customer, you unlock free rewards" },
            ].map((step) => (
              <div key={step.num} className="text-center space-y-4">
                <div className="w-12 h-12 bg-warm-coral text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Reward Tiers */}
      <Section className="py-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Reward Tiers</h2>
            <p className="text-muted-foreground">Unlock premium features as you refer more customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {rewards.map((reward) => {
              const Icon = reward.icon
              return (
                <Card key={reward.tier} className="border-warm-coral/20 bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="space-y-2">
                      <Icon className={`h-8 w-8 ${reward.color}`} />
                      <CardTitle className="text-foreground">{reward.title}</CardTitle>
                      <CardDescription>{reward.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-2xl font-bold text-warm-coral">{reward.value}</p>
                      <p className="text-sm text-muted-foreground">Reward value</p>
                    </div>
                    <div className="pt-4 border-t border-soft-salmon-pink/20">
                      <Badge className="bg-warm-coral/20 text-warm-coral border-warm-coral/30">
                        {reward.referrals}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Why Refer */}
      <Section className="py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Why Refer a Friend?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "They Save Money",
                desc: "Your friend gets a professional website for just $100, not thousands",
              },
              {
                title: "You Get Premium Tools",
                desc: "Unlock features that would normally cost hundreds of dollars",
              },
              {
                title: "We All Win",
                desc: "You help a small business grow their digital presence sustainably",
              },
              {
                title: "No Limit",
                desc: "Refer as many people as you want. There's no cap on rewards",
              },
            ].map((item, i) => (
              <Card key={i} className="border-soft-salmon-pink/30">
                <CardHeader>
                  <CardTitle className="text-warm-coral text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 bg-warm-coral/10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Gift className="h-12 w-12 text-warm-coral mx-auto" />
          <h2 className="text-3xl font-bold text-foreground">Get Your Referral Link</h2>
          <p className="text-lg text-muted-foreground">
            Once you're a customer, we'll send you a unique referral link. Share it with friends and start earning.
          </p>
          <Button size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white px-8">
            Become a Customer Today
          </Button>
        </div>
      </Section>
    </main>
  )
}
