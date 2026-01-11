"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cookie, Settings, Shield } from "lucide-react"
import Link from "next/link"

export default function CookieSettingsPage() {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true,
    performance: true,
  })

  const handleToggle = (key: string) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences))
    alert("Cookie preferences saved successfully!")
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      performance: true,
    }
    localStorage.setItem("cookie-preferences", JSON.stringify(allAccepted))
    alert("All cookies accepted!")
  }

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      performance: false,
    }
    localStorage.setItem("cookie-preferences", JSON.stringify(onlyEssential))
    alert("Only essential cookies enabled!")
  }

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF00FF] to-[#00F0FF] rounded-full mb-6">
              <Cookie className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FF00FF] to-[#00F0FF] bg-clip-text text-transparent">
              Cookie Settings
            </h1>
            <p className="text-lg text-slate-400">Manage your cookie preferences and privacy settings</p>
          </div>

          <div className="space-y-8">
            <Card className="glass-card border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Shield className="h-6 w-6 text-[#00F0FF]" />
                  Essential Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Essential cookies are required for the website to function properly. These cookies cannot be disabled
                  as they are necessary for basic functionality and security.
                </p>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <span className="text-white font-semibold">Status: Always Enabled</span>
                  <input type="checkbox" checked={true} disabled className="w-5 h-5 cursor-not-allowed" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Settings className="h-6 w-6 text-[#00F0FF]" />
                  Analytics Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Analytics cookies help us understand how visitors use our website. They collect anonymous usage data
                  to improve your experience.
                </p>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <span className="text-white font-semibold">Allow Analytics</span>
                  <button
                    onClick={() => handleToggle("analytics")}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      preferences.analytics ? "bg-[#00F0FF]" : "bg-slate-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        preferences.analytics ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Settings className="h-6 w-6 text-[#00F0FF]" />
                  Marketing Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Marketing cookies are used to track visitors across websites and display relevant ads based on their
                  browsing history.
                </p>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <span className="text-white font-semibold">Allow Marketing</span>
                  <button
                    onClick={() => handleToggle("marketing")}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      preferences.marketing ? "bg-[#00F0FF]" : "bg-slate-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        preferences.marketing ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Settings className="h-6 w-6 text-[#00F0FF]" />
                  Performance Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Performance cookies help us understand website performance and user behavior to optimize our services.
                </p>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <span className="text-white font-semibold">Allow Performance</span>
                  <button
                    onClick={() => handleToggle("performance")}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      preferences.performance ? "bg-[#00F0FF]" : "bg-slate-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        preferences.performance ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
            <Button
              onClick={handleRejectAll}
              variant="outline"
              className="border-slate-600 hover:bg-slate-800 bg-transparent text-white"
            >
              Reject All
            </Button>
            <Button
              onClick={handleSavePreferences}
              className="bg-gradient-to-r from-[#FF00FF] to-[#00F0FF] hover:opacity-90 text-black font-semibold"
            >
              Save Preferences
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] hover:opacity-90 text-black font-semibold"
            >
              Accept All
            </Button>
          </div>

          {/* Links to other legal pages */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-slate-400">Learn more about our policies:</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/privacy-policy" className="text-[#00F0FF] hover:text-[#FF00FF] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-[#00F0FF] hover:text-[#FF00FF] transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-[#00F0FF] hover:text-[#FF00FF] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
