"use client"

import { useState, useEffect } from "react"
import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles } from "lucide-react"
import Link from "next/link"
import { EmailGate } from "@/components/email-gate"
import { Badge } from "@/components/ui/badge"
import { pricingPlans } from "@/lib/content-data"

export default function PricingPage() {
  const [hasAccess, setHasAccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const accessData = localStorage.getItem("pricingAccess")
    if (accessData) {
      const { timestamp } = JSON.parse(accessData)
      const hoursPassed = (Date.now() - timestamp) / (1000 * 60 * 60)
      if (hoursPassed < 24) {
        setHasAccess(true)
      }
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!hasAccess) {
    return <EmailGate onUnlock={() => setHasAccess(true)} />
  }

  return (
    <div className="relative z-10 section-with-blobs">
      {/* Promotional Banners */}
      <div className="bg-gradient-to-r from-red-600 via-fuchsia-600 to-pink-600 text-white py-3 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-lg font-semibold animate-bounce">
            <Sparkles className="h-6 w-6 animate-spin" />
            <span>🔥 FLASH SALE: Up to 70% OFF All Plans + FREE $500 Bonus Package!</span>
            <Sparkles className="h-6 w-6 animate-spin" />
          </div>
        </div>
      </div>

      {/* ... existing promotional banners ... */}

      <Section className="py-16 md:py-24">
        <div className="text-center mb-12 scroll-fade-in">
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 mb-4 animate-pulse">
            🎉 Exclusive Access Unlocked - Limited Time Only!
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">Exclusive Pricing & Packages</h1>
          <p className="text-lg text-muted-foreground mb-2">
            Transform your business with our proven digital marketing solutions
          </p>
          <p className="text-sm text-fuchsia-600 font-semibold animate-bounce">
            ⚡ Special Launch Pricing - Save up to 70% + Bonus Features Worth $1000+
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`glass-card flex flex-col relative transition-all duration-300 hover:scale-105 scroll-fade-in ${
                plan.highlight ? "border-fuchsia-500 shadow-2xl shadow-fuchsia-500/20 scale-105" : "hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* ... existing card content using plan data ... */}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl font-bold text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-2">{plan.tagline}</CardDescription>
                <CardDescription className="text-muted-foreground">
                  {plan.originalPrice && plan.originalPrice !== "Custom" && (
                    <span className="text-lg text-red-500 line-through mr-2">{plan.originalPrice}</span>
                  )}
                  <span className="text-5xl font-extrabold text-foreground gradient-text">{plan.price}</span>
                  <span className="text-lg text-muted-foreground"> {plan.frequency}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{plan.targetAudience.title}</h3>
                  <p className="text-sm text-muted-foreground">{plan.targetAudience.description}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Why:</strong> {plan.targetAudience.why}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">What's Included:</h3>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle
                          className={`h-5 w-5 ${feature.startsWith("FREE:") ? "text-green-500" : "text-fuchsia-500"} colorful-icon`}
                        />
                        <span className={feature.startsWith("FREE:") ? "font-semibold text-green-600" : ""}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <Link href="/contact" className="w-full">
                  <Button className="gradient-button w-full text-lg py-3 hover:shadow-lg transition-all duration-300 animate-pulse">
                    {plan.buttonText} - SAVE 70%!
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* ... existing guarantee and CTA sections ... */}
      </Section>
    </div>
  )
}
