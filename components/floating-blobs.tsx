"use client"

import { useEffect, useState } from "react"

interface Blob {
  id: number
  size: number
  x: number
  y: number
  color: string
  animationDuration: number
  animationDelay: number
}

export function FloatingBlobs() {
  const [blobs, setBlobs] = useState<Blob[]>([])
  const [isMobile, setIsMobile] = useState(false)

  const colors = [
    "hsl(var(--dark-pastel-yellow))",
    "hsl(var(--dark-pastel-purple))",
    "hsl(var(--dark-pastel-red))",
    "hsl(var(--dark-pastel-orange))",
    "hsl(var(--dark-pastel-pink))",
    "hsl(var(--dark-pastel-teal))",
    "hsl(var(--dark-pastel-indigo))",
    "hsl(var(--dark-pastel-lime))",
    "hsl(var(--dark-pastel-cyan))",
    "hsl(var(--dark-pastel-fuchsia))",
    "#b8eac7",
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()

    const generateBlobs = () => {
      const newBlobs: Blob[] = []
      const numberOfBlobs = 27
      for (let i = 0; i < numberOfBlobs; i++) {
        newBlobs.push({
          id: i,
          size: Math.random() * (200 - 80) + 80,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: colors[i % colors.length],
          animationDuration: Math.random() * (30 - 15) + 15,
          animationDelay: Math.random() * 10,
        })
      }
      setBlobs(newBlobs)
    }

    generateBlobs()

    // Optional: regenerate blobs on window resize to adjust positions
    const handleResize = () => {
      generateBlobs()
      checkMobile()
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-50 pointer-events-none" aria-hidden="true">
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full mix-blend-multiply blur-xl"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            backgroundColor: colors[blob.id % colors.length],
            opacity: isMobile ? 0.18 : 0.08,
            animation: `blob ${blob.animationDuration}s ease-in-out ${blob.animationDelay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.05);
          }
          66% {
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(0.95);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
      `}</style>
    </div>
  )
}

export default FloatingBlobs
