"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  threshold?: number
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, threshold = 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: threshold,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  // Add a timeout to prevent unhandled promise rejections
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!ref.current) {
        setIsVisible(true) // Default to visible if ref is not available
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation
