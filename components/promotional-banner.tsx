"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Sparkles, Clock } from "lucide-react"
import Link from "next/link"

export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm">
      <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-4 rounded-lg shadow-2xl border border-fuchsia-400 animate-pulse">
        <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 text-white/80 hover:text-white">
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-yellow-300" />
          <span className="font-bold text-lg">Limited Time Offer!</span>
        </div>

        <div className="mb-3">
          <div className="text-3xl font-bold mb-1">70% OFF</div>
          <div className="text-sm">Paid Consultation</div>
          <div className="text-xs opacity-90">Usually $50 - Now only $15!</div>
        </div>

        <div className="flex items-center gap-2 mb-3 text-sm">
          <Clock className="h-4 w-4" />
          <span>
            Expires in: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
        </div>

        <Link href="/contact">
          <Button className="w-full bg-white text-fuchsia-600 hover:bg-gray-100 font-semibold">Claim Offer Now</Button>
        </Link>
      </div>
    </div>
  )
}
