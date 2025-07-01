"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  text: string
  name: string
  position: string
  company: string
  avatar?: string
  rating: number
  logo?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  className?: string
}

export default function Testimonials({ testimonials, className = "" }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">What Our</span>{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">Clients</span>{" "}
            <span className="text-gray-900 dark:text-white">Say</span>
          </h2>
        </div>

        <div className="flex justify-center items-center max-w-4xl mx-auto">
          <Button variant="ghost" size="icon" className="mr-2" onClick={prev} aria-label="Previous testimonial">
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Card className="glass border-0 flex-1 hover-lift">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-lg">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] rounded-full flex items-center justify-center mr-4">
                    {testimonials[currentIndex].avatar ? (
                      <Image
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        width={48}
                        height={48}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-white font-bold text-sm">
                        {testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
                {testimonials[currentIndex].logo && (
                  <Image
                    src={testimonials[currentIndex].logo || "/placeholder.svg"}
                    alt={`${testimonials[currentIndex].company} logo`}
                    width={60}
                    height={30}
                    className="h-8 w-auto opacity-70"
                  />
                )}
              </div>
            </CardContent>
          </Card>

          <Button variant="ghost" size="icon" className="ml-2" onClick={next} aria-label="Next testimonial">
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentIndex ? "bg-gradient-to-r from-[#8B5CF6] to-[#F472B6]" : "bg-gray-300 dark:bg-gray-700"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
