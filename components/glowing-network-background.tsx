"use client"

import { useEffect, useRef } from "react"

export const GlowingNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Network nodes - refined for sophisticated look
    interface Node {
      x: number
      y: number
      vx: number
      vy: number
      color: string
      size: number
    }

    const nodes: Node[] = []
    const nodeCount = 35 // Very sparse for clean look
    const colors = ["rgba(236, 72, 153, 0.6)", "rgba(59, 130, 246, 0.6)"] // Pink and blue

    // Initialize nodes with calculated positions for balance
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15, // Very slow movement
        vy: (Math.random() - 0.5) * 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 0.8 + 0.2, // Varying sizes for depth
      })
    }

    const animate = () => {
      // Clear with very subtle fade
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position with soft movement
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges smoothly
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Clamp to canvas
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        // Draw connections only to nearest neighbors
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - node.x
          const dy = nodes[j].y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const connectionDistance = 280 // Slightly larger range

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.08 // Much more subtle
            
            // Single elegant line
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.7})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }

        // Draw refined node
        const isBlue = node.color.includes("59, 130, 246")
        const opacity = 0.5

        // Subtle glow
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 3)
        if (isBlue) {
          glowGradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * 0.2})`)
          glowGradient.addColorStop(1, `rgba(59, 130, 246, 0)`)
        } else {
          glowGradient.addColorStop(0, `rgba(236, 72, 153, ${opacity * 0.2})`)
          glowGradient.addColorStop(1, `rgba(236, 72, 153, 0)`)
        }

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx.fill()

        // Core node - very small and refined
        ctx.fillStyle = isBlue ? `rgba(59, 130, 246, ${opacity})` : `rgba(236, 72, 153, ${opacity})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: "radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(0, 0, 0, 1) 100%)",
      }}
    />
  )
}
