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
        "container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 min-h-[200px] relative z-10 w-full",
        className,
        glass && "transparent-section",
      )}
      {...props}
    >
      {children}
    </section>
  )
}
