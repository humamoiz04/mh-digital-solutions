"use client"

import type React from "react"

import FloatingBlobs from "./floating-blobs"

interface GlassBackgroundProps {
  children: React.ReactNode
  className?: string
}

export default function GlassBackground({ children, className = "" }: GlassBackgroundProps) {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Floating Blobs Background */}
      <FloatingBlobs />

      {/* Glass Morph Container */}
      <div className="relative z-10 backdrop-blur-sm bg-white/5">{children}</div>
    </div>
  )
}
