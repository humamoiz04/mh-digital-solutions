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
        "container mx-auto px-4 py-8 min-h-[200px] relative z-10",
        className,
        glass && "transparent-section",
      )}
      {...props}
    >
      {children}
    </section>
  )
}
