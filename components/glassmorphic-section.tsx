import type React from "react"

interface GlassmorphicSectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  bgImage?: string
  variant?: "dark" | "light"
}

export function GlassmorphicSection({
  title,
  subtitle,
  children,
  className = "",
  bgImage,
  variant = "light",
}: GlassmorphicSectionProps) {
  return (
    <section
      className={`relative py-16 md:py-24 px-4 md:px-6 section-with-blobs overflow-hidden ${className}`}
      style={
        bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundAttachment: "fixed" } : {}
      }
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal-grey">{title}</h2>
            {subtitle && <p className="text-lg md:text-xl text-medium-grey max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}
