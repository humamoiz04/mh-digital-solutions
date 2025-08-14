"use client"

import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface RatingDisplayProps {
  rating?: number
  maxRating?: number
  reviewCount?: number
  showReviewCount?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export function RatingDisplay({
  rating = 4.9,
  maxRating = 5,
  reviewCount = 127,
  showReviewCount = true,
  size = "md",
  className = "",
}: RatingDisplayProps) {
  const filledStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = maxRating - filledStars - (hasHalfStar ? 1 : 0)

  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center">
        {/* Filled stars */}
        {Array.from({ length: filledStars }).map((_, index) => (
          <Star key={`filled-${index}`} className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} />
        ))}

        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star className={`${sizeClasses[size]} text-gray-300`} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
              <Star className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} />
            </div>
          </div>
        )}

        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <Star key={`empty-${index}`} className={`${sizeClasses[size]} text-gray-300`} />
        ))}
      </div>

      <div className={`flex items-center gap-2 ${textSizeClasses[size]}`}>
        <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
        {showReviewCount && (
          <>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{reviewCount.toLocaleString()} reviews</span>
          </>
        )}
      </div>

      <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
        Excellent
      </Badge>
    </div>
  )
}
