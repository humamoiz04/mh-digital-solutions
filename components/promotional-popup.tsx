'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PromotionalPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem('promo_popup_seen')
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem('promo_popup_seen', 'true')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-orange-600/20 to-red-600/20 animate-pulse" />

      <div className="relative max-w-lg w-full bg-slate-950 border border-red-500/50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Content */}
        <div className="px-8 py-12 text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-red-500 to-orange-500 p-4 rounded-full">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Special Offer!
          </h2>

          {/* Discount Badge */}
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-full">
              <span className="text-4xl font-bold">25% OFF</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-slate-300 mb-3">
            All Detailing Services
          </p>
          
          <p className="text-slate-400 mb-8">
            Use code <span className="text-red-400 font-bold bg-slate-800 px-3 py-1 rounded">LOVE25</span> at checkout
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg"
              onClick={() => {
                setIsOpen(false)
                window.location.href = '/booking'
              }}
            >
              Book Now & Save
            </Button>
            
            <Button
              variant="outline"
              className="border-red-400 text-red-400 hover:bg-red-400/10 bg-transparent px-8 py-6 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Maybe Later
            </Button>
          </div>

          {/* Fine print */}
          <p className="text-xs text-slate-500 mt-6">
            Limited time offer. Valid until February 15, 2026
          </p>
        </div>
      </div>
    </div>
  )
}
