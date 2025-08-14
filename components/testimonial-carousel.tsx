"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, Tech Innovations",
      quote:
        "MH Digital Solution transformed our online presence. Their SEO strategies are top-notch, and we've seen a 300% increase in organic traffic and leads.",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-RljVsxL1tHzCmmETafXY64XMyxedlw.webp",
      rating: 5,
      company: "Tech Innovations",
    },
    {
      name: "Michael Chen",
      title: "Founder, E-commerce Hub",
      quote:
        "The web development team built us an amazing e-commerce platform. It's fast, user-friendly, and has boosted our sales by 250%.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2810%29%20%281%29-qikp2lMQkhn16XnLeqMXWAWjbM2gZ2.webp",
      rating: 5,
      company: "E-commerce Hub",
    },
    {
      name: "Emily Rodriguez",
      title: "Marketing Director, Global Brands",
      quote:
        "Their digital marketing campaigns are incredibly effective. We've achieved 400% ROI and expanded our reach to 15 new markets globally.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%282%29-pVYxyzw3jc2Sg0rKYeoHLcJJQMza6z.webp",
      rating: 5,
      company: "Global Brands",
    },
    {
      name: "Jessica Thompson",
      title: "Startup Founder",
      quote:
        "From concept to launch, MH Digital Solution guided us every step. Our mobile app now has over 100K downloads with a 4.8-star rating.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%281%29-qwPqtSLZajxiCrOfrtRlvq8fMqo2gi.webp",
      rating: 5,
      company: "InnovateTech",
    },
    {
      name: "David Martinez",
      title: "Business Owner",
      quote:
        "Outstanding results! Their PPC campaigns generated 500+ qualified leads in just 3 months. Highly recommend their services.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%289%29%20%281%29-0OII6OB90mb9Cyt4k87Tg0h28WCHxY.webp",
      rating: 5,
      company: "Martinez Enterprises",
    },
    {
      name: "Robert Wilson",
      title: "Operations Manager",
      quote:
        "The cloud solutions they implemented saved us 40% on infrastructure costs while improving our system performance dramatically.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2811%29%20%281%29-glw5u6nBxFjyVlBEu6sYiCq2CSfsfF.webp",
      rating: 5,
      company: "CloudTech Solutions",
    },
    {
      name: "Alex Thompson",
      title: "Creative Director",
      quote:
        "Their UI/UX design transformed our user experience. We saw a 60% increase in user engagement and 35% boost in conversions.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%288%29-8E91Jo9cejRyp275T0cHP5gaodSjyS.webp",
      rating: 5,
      company: "Creative Studios",
    },
    {
      name: "Lisa Anderson",
      title: "Product Manager",
      quote:
        "Exceptional AI automation solutions! They streamlined our workflows and increased our team productivity by 70%.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%282%29-PbCOueP33t15ItCfMyJjCjXvFa8dzn.webp",
      rating: 5,
      company: "ProductFlow",
    },
    {
      name: "James Parker",
      title: "CEO, FinTech Solutions",
      quote:
        "Their cybersecurity expertise protected our platform from threats while ensuring compliance. Truly professional service.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-yo5PADeIwpaxGsg7ZCOyxNM6xzlxvF.webp",
      rating: 5,
      company: "FinTech Solutions",
    },
    {
      name: "Maria Garcia",
      title: "Marketing Specialist",
      quote:
        "The content marketing strategy they developed increased our brand awareness by 200% and generated high-quality leads consistently.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%283%29-oxD0ekYxx1DHpF5Iw3G6OcTDnIl7Vl.webp",
      rating: 5,
      company: "BrandBoost",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Testimonial Display */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="glass-card p-8 mx-2">
                <CardContent className="text-center space-y-6">
                  {/* Avatar */}
                  <div className="relative">
                    <Avatar className="h-20 w-20 mx-auto ring-4 ring-primary/20">
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-lg font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 bg-primary rounded-full p-1">
                      <Star className="h-4 w-4 text-white fill-current" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-1">
                    <h4 className="text-xl font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary scale-110" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Floating Animation Elements */}
      <div
        className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute -top-2 -right-6 w-6 h-6 bg-secondary/30 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute -bottom-4 left-8 w-4 h-4 bg-accent/40 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
