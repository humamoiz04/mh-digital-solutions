"use client"

import { useState } from "react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Open chat widget"
      >
        {isOpen ? <span className="text-xl">✕</span> : <span className="text-xl">💬</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 glass-card rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
            <h3 className="font-semibold">Chat with us!</h3>
            <p className="text-sm opacity-90">We're here to help 24/7</p>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                <p className="text-sm">Hi! How can we help you today?</p>
              </div>
              <div className="text-center">
                <a
                  href="https://wa.me/17075822255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <span className="mr-2">💬</span>
                  WhatsApp
                </a>
              </div>
              <div className="text-center">
                <a
                  href="tel:+17075822255"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <span className="mr-2">📞</span>
                  Call Now
                </a>
              </div>
              <div className="text-center">
                <a
                  href="mailto:info@mhdigitalsolution.com"
                  className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <span className="mr-2">✉️</span>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
