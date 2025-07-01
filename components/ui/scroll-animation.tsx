"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "slideInUp"
  delay?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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
  }, [delay, isMounted])

  if (!isMounted) {
    return <div className={className}>{children}</div>
  }

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-700 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClass} opacity-0 translate-y-8`
        case "fadeInLeft":
          return `${baseClass} opacity-0 -translate-x-8`
        case "fadeInRight":
          return `${baseClass} opacity-0 translate-x-8`
        case "slideInUp":
          return `${baseClass} opacity-0 translate-y-12`
        case "fadeIn":
        default:
          return `${baseClass} opacity-0`
      }
    }

    return `${baseClass} opacity-100 translate-x-0 translate-y-0`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
