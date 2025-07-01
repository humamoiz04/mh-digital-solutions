"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application Error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto glass-card rounded-3xl">
          <div className="p-12 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">MH</span>
              </div>
            </div>

            {/* Error Icon */}
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-4xl">⚠️</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Something Went Wrong</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We apologize for the inconvenience. Our team has been notified and is working to resolve this issue.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={reset}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white rounded-2xl font-semibold transition-all duration-300"
              >
                Try Again
              </button>
              <Link href="/">
                <button className="px-8 py-4 glass border border-white/30 text-gray-900 dark:text-white hover:bg-white/20 rounded-2xl font-semibold transition-all duration-300">
                  Go Home
                </button>
              </Link>
            </div>

            {/* Contact Support */}
            <div className="glass border border-white/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Need Immediate Assistance?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+17075822255"
                  className="flex items-center text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 transition-colors font-semibold"
                >
                  📞 Call: +1 (707) 582-2255
                </a>
                <a
                  href="mailto:support@mhdigitalsolution.com"
                  className="flex items-center text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 transition-colors font-semibold"
                >
                  ✉️ Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
