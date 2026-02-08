"use client"

import { useEffect, useRef, useState } from "react"

export const GlowingNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) return

    const canvas = canvasRef.current
    if (!canvas) return

    try {
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Set canvas size
      const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      resizeCanvas()
      window.addEventListener("resize", resizeCanvas)

      // Network nodes
      interface Node {
        x: number
        y: number
        vx: number
        vy: number
        color: string
      }

      const nodes: Node[] = []
      const nodeCount = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 50000)) // responsive node count
      const colors = ["rgba(255, 0, 255, 0.8)", "rgba(0, 240, 255, 0.8)"]

      // Initialize nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      let animationId: number

      const animate = () => {
        // Clear with dark background
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Update and draw nodes
        nodes.forEach((node, i) => {
          // Update position
          node.x += node.vx
          node.y += node.vy

          // Bounce off edges
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1

          // Clamp to canvas
          node.x = Math.max(0, Math.min(canvas.width, node.x))
          node.y = Math.max(0, Math.min(canvas.height, node.y))

          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[j].x - node.x
            const dy = nodes[j].y - node.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const connectionDistance = 250

            if (distance < connectionDistance) {
              const opacity = (1 - distance / connectionDistance) * 0.2
              const gradient = ctx.createLinearGradient(node.x, node.y, nodes[j].x, nodes[j].y)
              gradient.addColorStop(0, `rgba(255, 0, 255, ${opacity})`)
              gradient.addColorStop(0.5, `rgba(0, 240, 255, ${opacity * 0.6})`)
              gradient.addColorStop(1, `rgba(0, 240, 255, ${opacity})`)

              ctx.strokeStyle = gradient
              ctx.lineWidth = 0.3
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(nodes[j].x, nodes[j].y)
              ctx.stroke()

              // Add subtle glow
              ctx.strokeStyle = `rgba(255, 0, 255, ${opacity * 0.25})`
              ctx.lineWidth = 1.5
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(nodes[j].x, nodes[j].y)
              ctx.stroke()
            }
          }

          // Draw node with subtle glow
          const isMagenta = Math.random() > 0.5
          const nodeR = isMagenta ? 255 : 0
          const nodeG = isMagenta ? 0 : 240
          const nodeB = isMagenta ? 255 : 255

          const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 2)
          glowGradient.addColorStop(0, `rgba(${nodeR}, ${nodeG}, ${nodeB}, 0.25)`)
          glowGradient.addColorStop(1, `rgba(${nodeR}, ${nodeG}, ${nodeB}, 0)`)

          ctx.fillStyle = glowGradient
          ctx.beginPath()
          ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
          ctx.fill()

          // Core node - very tiny at 0.3px
          ctx.fillStyle = `rgba(${nodeR}, ${nodeG}, ${nodeB}, 0.7)`
          ctx.beginPath()
          ctx.arc(node.x, node.y, 0.3, 0, Math.PI * 2)
          ctx.fill()
        })

        animationId = requestAnimationFrame(animate)
      }

      animate()

      const handleCleanup = () => {
        window.removeEventListener("resize", resizeCanvas)
        cancelAnimationFrame(animationId)
      }

      return handleCleanup
    } catch (error) {
      console.error("[v0] Canvas animation error:", error)
      return undefined
    }
  }, [isHydrated])

  if (!isHydrated) {
    return (
      <canvas
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)",
        }}
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: "radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)",
      }}
    />
  )
}
