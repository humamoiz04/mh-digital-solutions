"use client"

import { useEffect, useState } from "react"
import { X, Gift } from "lucide-react"
import Link from "next/link"

function PromoBanner() {
  const [dismissed, setDismissed] = useState(false)
  const [end, setEnd] = useState<Date | null>(null)
  const [remaining, setRemaining] = useState<number>(0)

  useEffect(() => {
    if (typeof window === "undefined") return
    const isDismissed = window.localStorage.getItem("promoBannerDismissed")
    if (isDismissed) setDismissed(true)
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    if (typeof window !== "undefined") {
      window.localStorage.setItem("promoBannerDismissed", "true")
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    const savedEndTime = window.localStorage.getItem("promoEndTime")
    if (savedEndTime) {
      setEnd(new Date(savedEndTime))
      return
    }
    const d = new Date("2025-12-31T23:59:59")
    window.localStorage.setItem("promoEndTime", d.toISOString())
    setEnd(d)
  }, [])

  useEffect(() => {
    if (!end) return
    const update = () => setRemaining(end.getTime() - Date.now())
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [end])

  useEffect(() => {
    if (end && remaining <= 0) {
      setDismissed(true)
    }
  }, [end, remaining])

  if (dismissed || !end || remaining <= 0) return null

  const sec = Math.max(0, Math.floor(remaining / 1000))
  const days = Math.floor(sec / 86400)
  const hours = Math.floor((sec % 86400) / 3600)
  const minutes = Math.floor((sec % 3600) / 60)
  const seconds = sec % 60

  return (
    <div className="w-full bg-gradient-to-r from-red-600 via-red-500 to-green-600 text-white border-b-2 border-yellow-300 shadow-2xl sticky top-0 z-[100]">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
        <Gift className="h-6 w-6 hidden sm:block shrink-0 text-yellow-300 animate-pulse" aria-hidden="true" />

        <div className="flex-1 text-center md:text-left">
          <p className="text-sm md:text-base font-bold tracking-tight">
            <span className="text-yellow-300 uppercase font-black text-lg">🎄 HOLIDAY SPECIAL 🎄</span>
            <br className="md:hidden" />
            <span className="md:ml-2">Get 70% OFF on Web Design, SEO, Business Registration & Insurance!</span>
          </p>
          <p className="text-xs md:text-sm text-yellow-100 mt-1">Limited Time Offer for New Year 2026 Preparation</p>
        </div>

        <div className="flex items-center text-sm md:text-base font-extrabold bg-yellow-300 text-red-700 px-3 py-1.5 rounded-full shadow-md shrink-0 whitespace-nowrap">
          <span className="mr-2 hidden sm:inline">ENDS:</span>
          <span className="tabular-nums">{days}d</span>
          <span className="mx-0.5">:</span>
          <span className="tabular-nums">{hours}h</span>
          <span className="mx-0.5">:</span>
          <span className="tabular-nums">{minutes}m</span>
          <span className="mx-0.5">:</span>
          <span className="tabular-nums">{seconds}s</span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/promo/holiday-season"
            className="text-xs md:text-sm font-extrabold text-white bg-yellow-500 hover:bg-yellow-400 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all hover:shadow-lg active:scale-95"
            aria-label="View holiday promotional packages"
          >
            VIEW PACKAGES →
          </Link>

          <button
            onClick={handleDismiss}
            className="p-1 rounded-full text-white opacity-90 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 transition-opacity"
            aria-label="Dismiss promotion banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export { PromoBanner }
export default PromoBanner
