import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  glass?: boolean
}

export function Section({ children, className, glass, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 min-h-[200px] relative z-10 w-full max-w-full",
        className,
        glass && "transparent-section",
      )}
      {...props}
    >
      {children}
    </section>
  )
}
