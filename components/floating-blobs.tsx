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
    "rgba(0, 240, 255, 0.25)", // Electric Teal
    "rgba(255, 0, 255, 0.2)", // Luminous Magenta
    "rgba(0, 255, 65, 0.15)", // Neon Green
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()

    const generateBlobs = () => {
      const newBlobs: Blob[] = []
      const numberOfBlobs = 3
      const positions = [
        { x: 5, y: 95 },
        { x: 95, y: 5 },
        { x: 50, y: 50 },
      ]

      for (let i = 0; i < numberOfBlobs; i++) {
        newBlobs.push({
          id: i,
          size: 450 + Math.random() * 100, // Increased blob sizes to 450-550px for more impact
          x: positions[i].x,
          y: positions[i].y,
          color: colors[i % colors.length],
          animationDuration: 25 + i * 5,
          animationDelay: i * 2,
        })
      }
      setBlobs(newBlobs)
    }

    generateBlobs()

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
          className="absolute rounded-full mix-blend-screen blur-3xl"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            backgroundColor: blob.color,
            animation: `blob-float ${blob.animationDuration}s ease-in-out ${blob.animationDelay}s infinite`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes blob-float {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.08);
          }
        }
      `}</style>
    </div>
  )
}

export default FloatingBlobs
