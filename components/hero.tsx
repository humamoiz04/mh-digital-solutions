"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ServiceDashboard } from "@/components/service-dashboard"
import { Rocket, ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[auto] sm:min-h-[600px] md:min-h-[700px] relative z-10">
      <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1">
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-[#ff6b9d]/20 via-[#e49273]/20 to-[#a8d0d6]/20 border border-[#e49273]/40 w-fit mx-auto lg:mx-0 text-xs sm:text-sm">
            <Sparkles size={14} className="text-[#ff6b9d] animate-pulse" />
            <span className="font-semibold bg-gradient-to-r from-[#ff6b9d] to-[#a8d0d6] bg-clip-text text-transparent">
              Transforming Digital Presence
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
            <span className="gradient-text block mb-1 sm:mb-2 md:mb-3 drop-shadow-lg">Premium Web</span>
            <span className="gradient-text block mb-1 sm:mb-2 md:mb-3 drop-shadow-lg">Design</span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent block drop-shadow-lg">
              & Digital Growth.
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#ff6b9d] via-[#e49273] to-[#a8d0d6] bg-clip-text text-transparent drop-shadow-md">
            Small Business Prices. Enterprise Results.
          </p>
        </div>

        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 font-semibold leading-relaxed">
          Serving Solano County Locals & Rural Businesses Nationwide.
        </h2>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-400 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-medium">
          Enterprise-quality web design & SEO for small businesses. Professional results. Budget-friendly prices. We
          make digital growth accessible to every business.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start pt-2 md:pt-4">
          <Link href="/appointment" passHref>
            <Button
              size="lg"
              className="gradient-button text-white font-bold h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
            >
              <Rocket size={16} className="mr-1.5 sm:mr-2" />
              Book Free Strategy Call
              <ArrowRight size={16} className="ml-1.5 sm:ml-2" />
            </Button>
          </Link>
          <Link href="/services" passHref>
            <Button
              size="lg"
              className="border-2 border-[#a8d0d6] text-[#a8d0d6] hover:bg-[#a8d0d6]/20 bg-transparent font-bold h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 hover:border-[#a8d0d6] hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
            >
              Explore Services
              <ArrowRight size={16} className="ml-1.5 sm:ml-2" />
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start pt-1 md:pt-2 text-xs sm:text-xs text-slate-400">
          <div className="flex items-center gap-2 p-1.5 sm:p-2 md:p-3 rounded-lg bg-[#a8d0d6]/10 border border-[#a8d0d6]/30">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#a8d0d6] rounded-full animate-pulse"></div>
            <span className="font-medium">500+ Satisfied Clients</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 sm:p-2 md:p-3 rounded-lg bg-[#e49273]/10 border border-[#e49273]/30">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#e49273] rounded-full animate-pulse"></div>
            <span className="font-medium">Free 30-Min Consultation</span>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center order-1 lg:order-2 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
        <ServiceDashboard />
      </div>
    </div>
  )
}
