"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
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
    <Section glass>
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl font-bold gradient-text mb-4">500</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Something went wrong!</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're experiencing some technical difficulties. Our team has been notified and is working to fix the
              issue.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} className="gradient-button">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button variant="outline" asChild>
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
    </Section>
  )
}
