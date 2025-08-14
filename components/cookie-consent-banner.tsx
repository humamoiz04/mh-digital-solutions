"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, Settings, Check, X, Shield, Eye, BarChart3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted))
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(onlyNecessary))
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(savedPreferences))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="glass-card border-2 border-fuchsia-500/20 shadow-2xl max-w-4xl mx-auto">
        <CardContent className="p-6">
          {!showSettings ? (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">We Value Your Privacy</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our
                    traffic. By clicking "Accept All", you consent to our use of cookies. You can customize your
                    preferences or learn more in our{" "}
                    <a href="/privacy-policy" className="text-fuchsia-600 hover:underline font-medium">
                      Privacy Policy
                    </a>
                    .
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      <Shield className="h-3 w-3 mr-1" />
                      GDPR Compliant
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      Transparent
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Check className="h-3 w-3 mr-1" />
                      Your Choice
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-end">
                <Button variant="outline" onClick={() => setShowSettings(true)} className="text-sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Customize
                </Button>
                <Button variant="outline" onClick={handleRejectAll} className="text-sm bg-transparent">
                  <X className="h-4 w-4 mr-2" />
                  Reject All
                </Button>
                <Button onClick={handleAcceptAll} className="gradient-button text-sm">
                  <Check className="h-4 w-4 mr-2" />
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">Cookie Preferences</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowSettings(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="h-4 w-4 text-green-500" />
                      <h4 className="font-semibold text-foreground">Necessary Cookies</h4>
                      <Badge variant="secondary" className="text-xs">
                        Required
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Essential for website functionality and security. Cannot be disabled.
                    </p>
                  </div>
                  <Switch checked={true} disabled />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <BarChart3 className="h-4 w-4 text-blue-500" />
                      <h4 className="font-semibold text-foreground">Analytics Cookies</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, analytics: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Eye className="h-4 w-4 text-purple-500" />
                      <h4 className="font-semibold text-foreground">Marketing Cookies</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Used to deliver personalized advertisements and track campaign performance.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, marketing: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Settings className="h-4 w-4 text-orange-500" />
                      <h4 className="font-semibold text-foreground">Functional Cookies</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enable enhanced functionality like chat widgets and personalized content.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.functional}
                    onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, functional: checked }))}
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={handleRejectAll} className="text-sm bg-transparent">
                  Reject All
                </Button>
                <Button onClick={handleSavePreferences} className="gradient-button text-sm">
                  Save Preferences
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
