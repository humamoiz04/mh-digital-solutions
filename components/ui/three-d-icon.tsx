"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface ThreeDIconProps {
  icon: LucideIcon
  size?: number
  className?: string
  // Keep to 1 primary + up to 2 accents to respect color system
  variant?: "brand" | "blue" | "teal"
}

export function ThreeDIcon({ icon: Icon, size = 32, className, variant = "brand" }: ThreeDIconProps) {
  const variantClass =
    variant === "blue"
      ? "from-sky-500 to-blue-600 shadow-blue-600/40"
      : variant === "teal"
        ? "from-teal-400 to-emerald-500 shadow-emerald-600/40"
        : "from-fuchsia-600 to-pink-600 shadow-fuchsia-700/40"

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-2xl",
        "bg-gradient-to-br text-white",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_20px_-10px] ",
        variantClass,
        // subtle 3D without animation
        "border border-white/10",
        className,
      )}
      style={{
        width: size + 16,
        height: size + 16,
      }}
      aria-hidden="true"
    >
      <span
        className="relative inline-flex items-center justify-center rounded-xl bg-black/10"
        style={{ width: size + 6, height: size + 6 }}
      >
        <Icon width={size} height={size} className="drop-shadow-sm text-right text-fuchsia-600 shadow-lg" />
      </span>
    </span>
  )
}

export default ThreeDIcon
