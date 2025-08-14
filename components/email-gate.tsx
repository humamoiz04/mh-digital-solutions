"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Lock, Gift, Timer, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface EmailGateProps {
  onUnlock: () => void
}

export function EmailGate({ onUnlock }: EmailGateProps) {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hour in seconds

  useState(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  })

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !phone) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Store in localStorage for persistence
    localStorage.setItem(
      "pricingAccess",
      JSON.stringify({
        email,
        phone,
        timestamp: Date.now(),
      }),
    )

    setIsSubmitting(false)
    onUnlock()
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 section-with-blobs">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center mb-8">
          <Badge className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-6 py-2 text-lg mb-4 animate-pulse">
            <Gift className="h-5 w-5 mr-2" />
            Limited Time: 70% OFF Consultation
          </Badge>
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-6">
            <Timer className="h-5 w-5" />
            <span className="font-mono text-xl font-bold">{formatTime(timeLeft)}</span>
            <span>remaining</span>
          </div>
        </div>

        <Card className="glass-card border-2 border-fuchsia-500/20 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold gradient-text mb-2">Unlock Exclusive Pricing</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Get instant access to our special rates and limited-time offers
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-lg border border-fuchsia-200">
                <Star className="h-8 w-8 text-fuchsia-500 mx-auto mb-2" />
                <h3 className="font-semibold text-fuchsia-700">70% OFF</h3>
                <p className="text-sm text-fuchsia-600">Consultation</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                <Gift className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold text-purple-700">Free Audit</h3>
                <p className="text-sm text-purple-600">Worth $500</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border border-pink-200">
                <Timer className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                <h3 className="font-semibold text-pink-700">24h Response</h3>
                <p className="text-sm text-pink-600">Guaranteed</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 border-2 focus:border-fuchsia-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10 h-12 border-2 focus:border-fuchsia-500"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={!email || !phone || isSubmitting}
                className="w-full h-12 text-lg font-semibold gradient-button"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Unlocking Pricing...
                  </div>
                ) : (
                  "Unlock Exclusive Pricing"
                )}
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              <p>🔒 Your information is secure and will never be shared</p>
              <p className="mt-1">✨ Instant access • No spam • Unsubscribe anytime</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">Trusted by 500+ businesses worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-xs font-semibold">Google Partner</div>
            <div className="text-xs font-semibold">Meta Certified</div>
            <div className="text-xs font-semibold">HubSpot Partner</div>
            <div className="text-xs font-semibold">Clutch Verified</div>
          </div>
        </div>
      </div>
    </div>
  )
}
