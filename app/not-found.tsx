"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <Section glass>
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you
              entered the wrong URL.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="gradient-button">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="mt-12">
            <img
              src="/images/repair-work-setup.webp"
              alt="Technical support illustration"
              className="mx-auto max-w-md opacity-80"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
