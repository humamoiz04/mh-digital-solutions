"use client"

interface DecorativeBackgroundProps {
  variant?: "hero" | "section" | "minimal" | "accent"
  className?: string
}

export function DecorativeBackground({ variant = "section", className = "" }: DecorativeBackgroundProps) {
  const getVariantConfig = () => {
    switch (variant) {
      case "hero":
        return {
          blobs: [
            { size: "w-96 h-96", color: "bg-[#f1cea7]/08", top: "-10%", left: "-5%", delay: "0s" },
            { size: "w-80 h-80", color: "bg-[#a8d0d6]/06", top: "20%", right: "0%", delay: "0.5s" },
            { size: "w-72 h-72", color: "bg-[#e49273]/05", bottom: "10%", right: "5%", delay: "1s" },
          ],
        }
      case "section":
        return {
          blobs: [
            { size: "w-80 h-80", color: "bg-[#f1cea7]/06", top: "-10%", left: "5%", delay: "0s" },
            { size: "w-72 h-72", color: "bg-[#a8d0d6]/05", bottom: "-5%", right: "10%", delay: "0.5s" },
          ],
        }
      case "minimal":
        return {
          blobs: [{ size: "w-64 h-64", color: "bg-[#f1cea7]/04", top: "15%", left: "10%", delay: "0s" }],
        }
      case "accent":
        return {
          blobs: [{ size: "w-96 h-96", color: "bg-[#f1cea7]/08", top: "-5%", right: "-10%", delay: "0s" }],
        }
      default:
        return { blobs: [] }
    }
  }

  const config = getVariantConfig()

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {config.blobs.map((blob, index) => (
        <div
          key={index}
          className={`absolute rounded-full blur-3xl ${blob.size} ${blob.color} animate-blob-enhanced`}
          style={{
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
            animationDelay: blob.delay,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  )
}
