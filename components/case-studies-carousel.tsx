"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Revenue Growth",
    client: "Fashion Boutique",
    industry: "Retail",
    challenge: "Low online sales and poor website conversion rates",
    solution: "Complete website redesign, SEO optimization, and targeted PPC campaigns",
    results: {
      revenue: "+300%",
      traffic: "+250%",
      conversion: "+180%",
    },
    timeframe: "6 months",
    image: "/images/ecommerce-ecosystem.jpeg",
    color: "from-purple-600 to-pink-600",
  },
  {
    id: 2,
    title: "Local SEO Domination",
    client: "Medical Practice",
    industry: "Healthcare",
    challenge: "Invisible in local search results, losing patients to competitors",
    solution: "Local SEO strategy, Google My Business optimization, and content marketing",
    results: {
      rankings: "#1 Local",
      leads: "+400%",
      patients: "+150%",
    },
    timeframe: "4 months",
    image: "/images/business-consulting.webp",
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: 3,
    title: "SaaS Lead Generation",
    client: "Tech Startup",
    industry: "Technology",
    challenge: "High customer acquisition costs and low-quality leads",
    solution: "Inbound marketing strategy, content creation, and marketing automation",
    results: {
      leads: "+500%",
      cost: "-60%",
      revenue: "+280%",
    },
    timeframe: "8 months",
    image: "/images/digital-workspace.jpeg",
    color: "from-green-600 to-emerald-600",
  },
  {
    id: 4,
    title: "Restaurant Chain Expansion",
    client: "Local Restaurant",
    industry: "Food & Beverage",
    challenge: "Limited brand awareness and declining foot traffic",
    solution: "Social media marketing, local advertising, and reputation management",
    results: {
      awareness: "+350%",
      traffic: "+200%",
      revenue: "+180%",
    },
    timeframe: "5 months",
    image: "/images/digital-marketing-team.png",
    color: "from-orange-600 to-red-600",
  },
  {
    id: 5,
    title: "Local to National Expansion",
    client: "Premium Auto Detailing",
    industry: "Automotive Services",
    challenge:
      "Local detailing business with excellent service but limited to neighborhood customers, struggling with lead generation",
    solution:
      "Comprehensive digital marketing strategy including national SEO, Google Ads campaigns, social media marketing, and franchise-ready website development",
    results: {
      expansion: "50 States",
      leads: "+1200%",
      revenue: "+800%",
    },
    timeframe: "18 months",
    image: "/images/business-operations.jpeg",
    color: "from-teal-600 to-blue-600",
  },
  {
    id: 6,
    title: "Restaurant Digital Transformation",
    client: "Bella Vista Restaurant",
    industry: "Food & Beverage",
    challenge:
      "Excellent food and ratings but no online presence, causing long wait times and frustrated customers leading to negative reviews",
    solution:
      "Complete digital ecosystem including online reservation system, digital menu, order management, review management, and customer communication platform",
    results: {
      satisfaction: "+95%",
      efficiency: "+60%",
      revenue: "+220%",
    },
    timeframe: "10 weeks",
    image: "/images/digital-marketing-laptop.jpeg",
    color: "from-amber-600 to-orange-600",
  },
]

export default function CaseStudiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentStudy = caseStudies[currentIndex]

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 mb-4">
            📈 Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Real-World Results:</span>{" "}
            <span className="bg-gradient-to-r from-[#F59E0B] to-[#7C3AED] bg-clip-text text-transparent">
              Case Studies of Transformation & Growth
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable growth through strategic digital
            marketing and innovative solutions
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`bg-gradient-to-r ${currentStudy.color} text-white border-0`}>
                        {currentStudy.industry}
                      </Badge>
                      <span className="text-sm text-gray-500">{currentStudy.timeframe}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{currentStudy.title}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Client: {currentStudy.client}</p>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                        <p className="text-gray-600 dark:text-gray-400">{currentStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h4>
                        <p className="text-gray-600 dark:text-gray-400">{currentStudy.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(currentStudy.results).map(([key, value], index) => (
                        <div key={index} className="text-center">
                          <div
                            className={`text-2xl font-bold bg-gradient-to-r ${currentStudy.color} bg-clip-text text-transparent`}
                          >
                            {value}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <Link href="/case-studies">
                      <Button className={`bg-gradient-to-r ${currentStudy.color} hover:opacity-90 text-white`}>
                        View Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Image Side */}
                  <div className="relative h-64 lg:h-auto">
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-r-2xl"
                      style={{ backgroundImage: `url(${currentStudy.image})` }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${currentStudy.color} opacity-20 rounded-r-2xl`}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? `bg-gradient-to-r ${currentStudy.color}` : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
