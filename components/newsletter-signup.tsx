"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Gift, Zap, TrendingUp, CheckCircle, Sparkles } from "lucide-react"

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "footer"
  className?: string
}

export function NewsletterSignup({ variant = "default", className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubscribed(true)
    setIsSubmitting(false)
    setEmail("")
  }

  if (isSubscribed) {
    return (
      <Card className={`glass-card border-2 border-green-500/20 ${className}`}>
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Welcome Aboard!</h3>
          <p className="text-muted-foreground text-sm">
            You're now subscribed to our newsletter. Check your inbox for a welcome gift!
          </p>
        </CardContent>
      </Card>
    )
  }

  if (variant === "compact") {
    return (
      <div className={`flex gap-2 ${className}`}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSubmit} disabled={!email || isSubmitting} className="gradient-button">
          {isSubmitting ? "..." : "Subscribe"}
        </Button>
      </div>
    )
  }

  if (variant === "footer") {
    return (
      <div className={`space-y-4 ${className}`}>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get the latest digital marketing insights and exclusive offers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-background/50"
              required
            />
          </div>
          <Button type="submit" disabled={!email || isSubmitting} className="w-full gradient-button">
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Subscribing...
              </div>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Subscribe Now
              </>
            )}
          </Button>
        </form>

        <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
          <span>✨ No spam</span>
          <span>•</span>
          <span>📧 Weekly insights</span>
          <span>•</span>
          <span>🎁 Exclusive offers</span>
        </div>
      </div>
    )
  }

  return (
    <Card className={`glass-card border-2 border-fuchsia-500/20 ${className}`}>
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold gradient-text">Join 5,000+ Digital Marketers</CardTitle>
        <CardDescription className="text-muted-foreground">
          Get weekly insights, exclusive tips, and special offers delivered to your inbox.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
            <TrendingUp className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <h4 className="font-semibold text-blue-700 text-sm">Growth Tips</h4>
            <p className="text-xs text-blue-600">Weekly strategies</p>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <Gift className="h-6 w-6 text-purple-500 mx-auto mb-2" />
            <h4 className="font-semibold text-purple-700 text-sm">Exclusive Offers</h4>
            <p className="text-xs text-purple-600">Subscriber-only deals</p>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
            <Zap className="h-6 w-6 text-orange-500 mx-auto mb-2" />
            <h4 className="font-semibold text-orange-700 text-sm">Early Access</h4>
            <p className="text-xs text-orange-600">New tools & features</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12 border-2 focus:border-fuchsia-500"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={!email || isSubmitting}
            className="w-full h-12 text-lg font-semibold gradient-button"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Subscribing...
              </div>
            ) : (
              <>
                <Sparkles className="h-5 w-5 mr-2" />
                Subscribe & Get Free Guide
              </>
            )}
          </Button>
        </form>

        <div className="text-center">
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 mb-2">
            <Gift className="h-3 w-3 mr-1" />
            FREE Digital Marketing Guide
          </Badge>
          <p className="text-xs text-muted-foreground">🔒 Your email is safe with us. Unsubscribe anytime.</p>
        </div>
      </CardContent>
    </Card>
  )
}
