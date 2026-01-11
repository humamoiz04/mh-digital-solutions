"use client"

import { useEffect, useRef } from "react"

export const CentralNetworkDiagram = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const width = 600
    const height = 600
    canvas.width = width
    canvas.height = height

    const centerX = width / 2
    const centerY = height / 2
    const radius = 180

    // Central hub
    const hubRadius = 15
    const orbitNodes = 12
    let rotation = 0

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, width, height)

      rotation += 0.005

      // Draw central hub glow
      const hubGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, hubRadius * 3)
      hubGlow.addColorStop(0, "rgba(255, 0, 255, 0.3)")
      hubGlow.addColorStop(1, "rgba(255, 0, 255, 0)")
      ctx.fillStyle = hubGlow
      ctx.beginPath()
      ctx.arc(centerX, centerY, hubRadius * 3, 0, Math.PI * 2)
      ctx.fill()

      // Draw central hub
      ctx.fillStyle = "rgba(255, 0, 255, 0.9)"
      ctx.beginPath()
      ctx.arc(centerX, centerY, hubRadius, 0, Math.PI * 2)
      ctx.fill()

      // Draw orbiting nodes
      const nodes: Array<{ x: number; y: number; color: string }> = []

      for (let i = 0; i < orbitNodes; i++) {
        const angle = (i / orbitNodes) * Math.PI * 2 + rotation
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        const isMagenta = i % 2 === 0
        const color = isMagenta ? "rgba(255, 0, 255, 0.8)" : "rgba(0, 240, 255, 0.8)"

        nodes.push({ x, y, color })

        // Draw connecting line to hub
        const lineGradient = ctx.createLinearGradient(centerX, centerY, x, y)
        lineGradient.addColorStop(0, "rgba(255, 0, 255, 0.3)")
        lineGradient.addColorStop(1, isMagenta ? "rgba(255, 0, 255, 0.1)" : "rgba(0, 240, 255, 0.1)")

        ctx.strokeStyle = lineGradient
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()

        // Draw node glow
        const nodeGlow = ctx.createRadialGradient(x, y, 0, x, y, 8)
        nodeGlow.addColorStop(0, color)
        nodeGlow.addColorStop(1, color.replace("0.8", "0"))

        ctx.fillStyle = nodeGlow
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fill()

        // Draw node core
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x
          const dy = nodes[j].y - nodes[i].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 250

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
            gradient.addColorStop(0, `rgba(255, 0, 255, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(0, 240, 255, ${opacity * 0.6})`)
            gradient.addColorStop(1, `rgba(0, 240, 255, ${opacity})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.3
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="flex justify-center items-center py-12">
      <canvas
        ref={canvasRef}
        className="w-full max-w-2xl h-auto rounded-2xl"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(0, 240, 255, 0.2)",
        }}
      />
    </div>
  )
}
