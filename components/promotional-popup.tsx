'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PromotionalPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasSeenPopup, setHasSeenPopup] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem('promo_popup_seen')
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem('promo_popup_seen', 'true')
        setHasSeenPopup(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  const offers = [
    {
      title: 'SEO & GMB',
      price: '$49',
      period: '/week',
      description: 'Local SEO + Google My Business Optimization',
      features: ['Keyword Research', 'On-page SEO', 'GMB Optimization', 'Local Citations'],
    },
    {
      title: 'Web Design',
      price: '$100',
      period: 'one-time',
      description: 'Professional Website Design',
      features: ['Responsive Design', 'Mobile Optimized', 'SEO Ready', 'Fast Loading'],
    },
    {
      title: 'Social Management',
      price: '$29',
      period: '/week',
      description: 'Social Media Management',
      features: ['Content Creation', 'Posting Schedule', 'Community Management', 'Analytics'],
    },
    {
      title: 'Combo Package',
      price: '$299',
      period: 'one-time',
      description: 'Web + SEO + Social (1 Year Free Domain & Hosting)',
      features: ['Web Design', 'SEO Optimization', 'Social Management', 'Free Domain 1yr', 'Free Hosting 1yr'],
      highlighted: true,
    },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse" />

      <div className="relative max-w-4xl w-full bg-slate-950 border border-cyan-500/50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-cyan-400" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-magenta-600 to-cyan-600 px-8 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Special Offers</h2>
          <p className="text-cyan-100 text-lg">Limited Time Promotional Packages</p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`relative rounded-xl border transition-all duration-300 hover:scale-105 ${
                offer.highlighted
                  ? 'border-cyan-400 bg-gradient-to-br from-slate-900 to-slate-800 ring-2 ring-cyan-400/50 shadow-lg shadow-cyan-500/20'
                  : 'border-slate-700 bg-slate-900/50 hover:border-cyan-400/50'
              }`}
            >
              {offer.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-magenta-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{offer.title}</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-cyan-400">{offer.price}</span>
                  <span className="text-sm text-slate-400 ml-2">{offer.period}</span>
                </div>
                <p className="text-sm text-slate-300 mb-4">{offer.description}</p>

                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-semibold transition-all ${
                    offer.highlighted
                      ? 'bg-gradient-to-r from-magenta-600 to-cyan-600 hover:from-magenta-700 hover:to-cyan-700 text-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-400/50'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="bg-slate-900/80 border-t border-slate-700 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-300">
            Not sure which package fits your needs?{' '}
            <span className="text-cyan-400 font-semibold">Contact our team today!</span>
          </p>
          <Button
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
            onClick={() => setIsOpen(false)}
          >
            Talk to Us
          </Button>
        </div>
      </div>
    </div>
  )
}
