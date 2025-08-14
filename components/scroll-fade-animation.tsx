"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollFadeProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "fade"
  delay?: number
  duration?: number
}

export function ScrollFadeAnimation({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
}: ScrollFadeProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay * 1000)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  const getTransformClass = () => {
    if (isVisible) return "translate-x-0 translate-y-0 opacity-100"

    switch (direction) {
      case "up":
        return "translate-y-8 opacity-0"
      case "down":
        return "-translate-y-8 opacity-0"
      case "left":
        return "translate-x-8 opacity-0"
      case "right":
        return "-translate-x-8 opacity-0"
      case "fade":
      default:
        return "opacity-0"
    }
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${getTransformClass()} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: isVisible ? `${delay}s` : "0s",
      }}
    >
      {children}
    </div>
  )
}
