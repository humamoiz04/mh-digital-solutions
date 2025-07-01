import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
  price?: string
  href?: string
  className?: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  color,
  price,
  href,
  className = "",
}: ServiceCardProps) {
  return (
    <Card className={`border-0 hover-lift ${className}`}>
      <CardContent className="p-8">
        <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-6`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <CheckCircle className="h-4 w-4 text-[#FF7600] mr-2 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>

        {price && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold text-gray-900 dark:text-white">{price}</span>
            </div>
          </div>
        )}

        <Button className={`w-full bg-gradient-to-r ${color} hover:opacity-90 text-white border-0`}>
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
