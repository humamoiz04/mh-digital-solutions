"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ServiceDashboard } from "@/components/service-dashboard"
import { Rocket, ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[600px] md:min-h-[700px] relative z-10">
      <div className="space-y-8 md:space-y-10 text-center lg:text-left order-2 lg:order-1">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff6b9d]/20 via-[#e49273]/20 to-[#a8d0d6]/20 border border-[#e49273]/40 w-fit mx-auto lg:mx-0">
            <Sparkles size={16} className="text-[#ff6b9d] animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#ff6b9d] to-[#a8d0d6] bg-clip-text text-transparent">
              Transforming Digital Presence
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight px-4 sm:px-0">
            <span className="gradient-text block mb-3 drop-shadow-lg">Premium Web</span>
            <span className="gradient-text block mb-3 drop-shadow-lg">Design</span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent block drop-shadow-lg">
              & Digital Growth.
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#ff6b9d] via-[#e49273] to-[#a8d0d6] bg-clip-text text-transparent px-4 sm:px-0 drop-shadow-md">
            Small Business Prices. Enterprise Results.
          </p>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl text-slate-300 font-semibold leading-relaxed px-4 sm:px-0">
          Serving Solano County Locals & Rural Businesses Nationwide.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 px-4 sm:px-0 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-medium">
          Enterprise-quality web design & SEO for small businesses. Professional results. Budget-friendly prices. We
          make digital growth accessible to every business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0 pt-6">
          <Link href="/appointment" passHref>
            <Button
              size="lg"
              className="gradient-button text-white font-bold h-16 px-10 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Rocket size={20} className="mr-2" />
              Book Free Strategy Call
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
          <Link href="/services" passHref>
            <Button
              size="lg"
              className="border-2 border-[#a8d0d6] text-[#a8d0d6] hover:bg-[#a8d0d6]/20 bg-transparent font-bold h-16 px-10 text-lg rounded-lg transition-all duration-300 hover:border-[#a8d0d6] hover:scale-110 hover:-translate-y-1"
            >
              Explore Services
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start px-4 sm:px-0 pt-4 text-sm text-slate-400">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-[#a8d0d6]/10 border border-[#a8d0d6]/30">
            <div className="w-2 h-2 bg-[#a8d0d6] rounded-full animate-pulse"></div>
            <span className="font-medium">500+ Satisfied Clients</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-[#e49273]/10 border border-[#e49273]/30">
            <div className="w-2 h-2 bg-[#e49273] rounded-full animate-pulse"></div>
            <span className="font-medium">Free 30-Min Consultation</span>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px]">
        <ServiceDashboard />
      </div>
    </div>
  )
}
