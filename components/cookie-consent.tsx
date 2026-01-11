"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookie-consent")
    if (!consentGiven) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950 to-slate-900 border-t border-[#FF00FF]/30 backdrop-blur-sm">
      <div className="container px-4 md:px-6 py-6 md:py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-sm md:text-base font-semibold text-white mb-2">Cookie Consent</h3>
            <p className="text-xs md:text-sm text-slate-300">
              We use cookies to enhance your experience, analyze site performance, and serve personalized content. By
              clicking "Accept All," you consent to our use of cookies. View our{" "}
              <a href="/privacy-policy" className="text-[#00F0FF] hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/cookie-settings" className="text-[#00F0FF] hover:underline">
                Cookie Settings
              </a>
              .
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Button
              onClick={handleReject}
              variant="outline"
              size="sm"
              className="flex-1 md:flex-initial border-slate-600 hover:bg-slate-800 bg-transparent"
            >
              Reject All
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="flex-1 md:flex-initial bg-gradient-to-r from-[#FF00FF] to-[#00F0FF] hover:opacity-90 text-black font-semibold"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
