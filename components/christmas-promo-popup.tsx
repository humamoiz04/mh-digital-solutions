"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Gift, Sparkles } from "lucide-react"

export function ChristmasPromoPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("christmas-popup-seen")
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("christmas-popup-seen", "true")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

      {/* Popup Content */}
      <div className="relative max-w-md w-full bg-gradient-to-br from-red-500 via-green-500 to-red-600 rounded-2xl p-8 shadow-2xl border-4 border-yellow-400 animate-bounce">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-all"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Decorative Elements */}
        <div className="absolute top-2 left-4 text-2xl animate-pulse">🎄</div>
        <div className="absolute top-2 right-4 text-2xl animate-pulse">⛄</div>
        <div className="absolute bottom-4 left-6 text-2xl animate-bounce" style={{ animationDelay: "0.2s" }}>
          🎅
        </div>
        <div className="absolute bottom-4 right-6 text-2xl animate-pulse">🎁</div>

        {/* Content */}
        <div className="text-center relative z-10">
          <div className="flex justify-center mb-4">
            <Gift className="h-12 w-12 text-yellow-300 animate-bounce" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">🎄 Holiday Special! 🎄</h2>

          <p className="text-white font-semibold mb-2 drop-shadow-md">Up to 50% OFF All Services</p>

          <div className="bg-white/90 rounded-lg p-4 mb-6 border-2 border-yellow-300">
            <p className="text-sm font-bold text-red-600 mb-2">Limited Time Offer:</p>
            <ul className="text-left text-sm font-semibold text-gray-800 space-y-1">
              <li className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-yellow-500" /> Web Design: NOW $1,499
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-yellow-500" /> SEO Package: NOW $799/mo
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-yellow-500" /> Digital Marketing: NOW $999/mo
              </li>
            </ul>
          </div>

          <p className="text-white text-xs font-semibold mb-4 drop-shadow-md">⏰ Offer expires Dec 31st, 2025</p>

          <div className="flex gap-3">
            <Button asChild className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-red-600 font-bold text-lg h-12">
              <a href="https://calendly.com/mhdigitalsolutionsus">Claim Offer</a>
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-white/90 hover:bg-white text-red-600 font-bold border-2 border-white h-12"
            >
              Later
            </Button>
          </div>

          <p className="text-white text-xs mt-4 drop-shadow-md">✨ Transform your business before the new year! ✨</p>
        </div>
      </div>
    </div>
  )
}
