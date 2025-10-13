"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ServiceDashboard } from "@/components/service-dashboard"
import { Rocket } from "lucide-react"
import ThreeDIcon from "@/components/ui/three-d-icon"

export function Hero() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight gradient-text px-4 sm:px-0">
            Innovate. Grow. Succeed.
            <br />
            Your Digital Journey Starts Here.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            We are a leading digital solution agency specializing in web development, SEO, digital marketing, and IT
            consulting. Partner with us to transform your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
            <Link href="/appointment" passHref>
              <Button size="lg" className="gradient-button w-full sm:w-auto text-base font-medium">
                <span className="mr-2 inline-flex align-middle">
                  <ThreeDIcon icon={Rocket} size={16} variant="brand" />
                </span>
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/services" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent w-full sm:w-auto text-base font-medium"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center order-1 lg:order-2">
          <ServiceDashboard />
        </div>
      </div>
    </>
  )
}
