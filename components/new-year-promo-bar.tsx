"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export function NewYearPromoBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        } else {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <>
      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .promo-animation {
          animation: slideRight 8s linear infinite;
        }
      `}</style>
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FF00FF] via-[#00F0FF] to-[#FF00FF] text-white py-3 border-b-2 border-[#00F0FF]/80 shadow-2xl shadow-[#FF00FF]/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="flex items-center gap-8 promo-animation">
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <span className="text-sm font-bold uppercase tracking-wide">🎉 New Year Mega Sale</span>
                  <span className="text-sm font-semibold">Save up to 70% • FREE $500 consultation</span>
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <span className="text-sm font-bold uppercase tracking-wide">🎉 New Year Mega Sale</span>
                  <span className="text-sm font-semibold">Save up to 70% • FREE $500 consultation</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-sm font-mono bg-white/20 px-3 py-1 rounded-full whitespace-nowrap border border-white/30 backdrop-blur-md shadow-lg shadow-[#00F0FF]/30">
                <span className="font-bold">{String(timeLeft.days).padStart(2, "0")}</span>
                <span>d</span>
                <span className="font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
                <span>h</span>
                <span className="font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span>m</span>
              </div>
              <Link href="/pricing">
                <button className="bg-white text-[#FF00FF] hover:bg-[#00F0FF] hover:text-[#000000] font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm whitespace-nowrap shadow-xl shadow-white/40 hover:shadow-2xl hover:shadow-[#00F0FF]/60">
                  View Offers
                </button>
              </Link>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors shadow-lg"
                aria-label="Close promotion banner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 sm:pt-12" />
    </>
  )
}
