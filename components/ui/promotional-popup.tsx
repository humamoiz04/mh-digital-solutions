"use client"

import { useState, useEffect } from "react"

export default function PromotionalPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000) // Show after 5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="glass-card max-w-md w-full rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">🎉 Special Offer!</h2>
          <p className="text-lg">Get 70% OFF on Web Development</p>
        </div>
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Limited time offer! Transform your business with our premium web development services.
          </p>
          <div className="flex gap-3">
            <a
              href="https://calendly.com/mhdigitalsolutionsus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg text-center font-semibold hover:opacity-90 transition-opacity"
            >
              Claim Offer
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Later
            </button>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          aria-label="Close popup"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
