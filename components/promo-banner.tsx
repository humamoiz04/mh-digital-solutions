"use client"

import { useEffect, useState } from "react"
import { X, Bolt } from "lucide-react"

// Assuming the MH Digital Solution palette uses a strong Primary color (e.g., deep blue)
// and a vibrant Accent color (e.g., bright orange/yellow) for urgency.

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
    const d = new Date()
    d.setDate(d.getDate() + 7)
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
    // Banner Styling: BG Primary (deep blue), Text Primary-Foreground (white/light)
    <div className="w-full bg-primary text-primary-foreground border-b-2 border-accent shadow-xl sticky top-0 z-[100]">
      <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Icon Styling: Using Accent color for the icon to stand out against the Primary BG */}
        <Bolt className="h-5 w-5 hidden sm:block shrink-0 text-accent" aria-hidden="true" />

        {/* Main Offer Text: Bolder font and adjusted color if needed (default to foreground) */}
        <p className="text-sm font-bold text-center md:text-left tracking-tight">
          <span className="text-accent uppercase mr-2">Hurry!</span>LIMITED OFFER: Get a Free Dual-Market SEO Audit (US
          & Malta Focus)
        </p>

        {/* Countdown Timer Styling: High-contrast Accent background and foreground text for urgency */}
        <div className="flex items-center text-base font-extrabold bg-accent text-primary px-3 py-1 rounded-full shadow-md shrink-0">
          <span className="mr-2">ENDS IN:</span>
          <span className="tabular-nums">{days}d</span>
          <span className="mx-1">:</span>
          <span className="tabular-nums">{hours}h</span>
          <span className="mx-1">:</span>
          <span className="tabular-nums">{minutes}m</span>
          <span className="mx-1">:</span>
          <span className="tabular-nums">{seconds}s</span>
        </div>

        <div className="flex items-center gap-3">
          {/* CTA Button Styling: Strong primary text, underlined, clear transition */}
          <a
            href="/contact"
            className="text-sm font-extrabold text-primary-foreground underline hover:no-underline underline-offset-4 tracking-wide transition-colors hover:text-accent"
            aria-label="Claim your free dual-market SEO audit on the contact page"
          >
            Request Audit →
          </a>

          {/* Dismiss Button Styling: Color matches the CTA text for cohesion */}
          <button
            onClick={handleDismiss}
            className="p-1 rounded-full text-primary-foreground opacity-90 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground transition-opacity"
            aria-label="Dismiss promotion banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export { PromoBanner }
export default PromoBanner
