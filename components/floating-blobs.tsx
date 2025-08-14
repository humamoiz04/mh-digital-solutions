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

  const blobColors = [
 
    "bg-dark-pastel-yellow",
    "bg-dark-pastel-purple",
    "bg-dark-pastel-red",
    "bg-dark-pastel-orange",
    "bg-dark-pastel-pink",
    "bg-dark-pastel-teal",
    "bg-dark-pastel-indigo",
    "bg-dark-pastel-lime",
    "bg-dark-pastel-cyan",
    "bg-dark-pastel-fuchsia",
    "bg-[#b8eac7]", // Specific color requested
  ]

  useEffect(() => {
    const generateBlobs = () => {
      const newBlobs: Blob[] = []
      const numberOfBlobs = 27
      for (let i = 0; i < numberOfBlobs; i++) {
        newBlobs.push({
          id: i,
          size: Math.random() * (200 - 80) + 80,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: blobColors[Math.floor(Math.random() * blobColors.length)],
          animationDuration: Math.random() * (30 - 15) + 15,
          animationDelay: Math.random() * 10,
        })
      }
      setBlobs(newBlobs)
    }

    generateBlobs()

    // Optional: regenerate blobs on window resize to adjust positions
    const handleResize = () => generateBlobs()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob ${blob.color}`}
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            animationDuration: `${blob.animationDuration}s`,
            animationDelay: `${blob.animationDelay}s`,
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
