"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="relative z-10 w-full max-w-full min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#a8d0d6] bg-clip-text text-transparent mb-4">500</h1>
            <h2 className="text-3xl font-bold text-white mb-4">Something went wrong!</h2>
            <p className="text-lg text-gray-400 mb-8">
              We're experiencing some technical difficulties. Our team has been notified and is working to fix the
              issue.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} className="bg-gradient-to-r from-[#ff6b9d] to-[#a8d0d6] text-white">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button variant="outline" asChild className="border-[#a8d0d6] text-[#a8d0d6] bg-transparent">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
          </div>

          <div className="mt-12">
            <img
              src="/images/business-automation.webp"
              alt="Technical error illustration"
              className="mx-auto max-w-md opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
