"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { OptimizedImage } from "@/components/optimized-image"
import Link from "next/link"
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react"

export function PortfolioShowcaseSection() {
  const featuredProjects = [
    {
      slug: "movie-discovery-app",
      title: "Movie Discovery App",
      industry: "Entertainment",
      image: "/images/digital-art-style-illustration-graphic-designer.webp",
      description: "Interactive movie discovery platform with advanced search and recommendations",
      results: "Live App",
      metrics: ["React.js", "API Integration", "Responsive Design"],
      link: "https://farhansiddiqui-movie.netlify.app/",
      external: true,
    },
    {
      slug: "climate-tracker",
      title: "Climate Data Tracker",
      industry: "Environmental",
      image: "/images/business-consultation-analytics.webp",
      description: "Real-time climate data visualization and tracking application",
      results: "Data Insights",
      metrics: ["Data Visualization", "Real-time Updates", "Analytics"],
      link: "https://farhansiddiqui-climate.netlify.app/",
      external: true,
    },
    {
      slug: "fitness-gym-website",
      title: "Fitness Gym Website",
      industry: "Fitness",
      image: "/images/social-media-celebration.webp",
      description: "Modern fitness center website with membership management",
      results: "Member Growth",
      metrics: ["Modern Design", "Membership System", "Mobile Optimized"],
      link: "https://farhansiddiqui-gym.netlify.app/",
      external: true,
    },
    {
      slug: "nebraska-auto-detailing",
      title: "Nebraska Auto Detailing",
      industry: "Automotive",
      image: "/images/business-office-remote-lifestyle.webp",
      description: "Professional auto detailing service website with booking system",
      results: "Business Growth",
      metrics: ["Booking System", "SEO Optimized", "Local Business"],
      link: "https://www.nebraskaautodetailing.com/",
      external: true,
    },
    {
      slug: "luxury-fin-detail",
      title: "Luxury Fin Detail",
      industry: "Automotive",
      image: "/images/ai-chatbot-automation.webp",
      description: "Premium automotive detailing service with luxury branding",
      results: "Premium Brand",
      metrics: ["Luxury Design", "Service Showcase", "Contact Integration"],
      link: "https://www.luxuryfindetail.com/",
      external: true,
    },
    {
      slug: "aesthetic-haven-store",
      title: "Aesthetic Haven Store",
      industry: "E-commerce",
      image: "/images/flat-illustration-social-media-day-celebration.webp",
      description: "Modern e-commerce platform for aesthetic and beauty products",
      results: "Online Store",
      metrics: ["E-commerce", "Product Catalog", "Payment Integration"],
      link: "https://www.aesthetichaven.store/",
      external: true,
    },
  ]

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="text-center mb-8 md:mb-12">
        <Badge className="mb-3 md:mb-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-sm">
          Our Portfolio
        </Badge>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 gradient-text">
          Success Stories That Speak Volumes
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Discover how we've transformed businesses across industries with innovative digital solutions and measurable
          results.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-12">
        {featuredProjects.map((project, index) => (
          <Card key={index} className="glass-card group hover-scale-optimized">
            <div className="relative overflow-hidden rounded-t-lg">
              <OptimizedImage
                src={project.image}
                alt={`${project.title} - ${project.industry} project showcase`}
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
              <div className="absolute top-3 md:top-4 left-3 md:left-4">
                <Badge variant="secondary" className="bg-white/90 text-gray-800 text-xs">
                  {project.industry}
                </Badge>
              </div>
              <div className="absolute top-3 md:top-4 right-3 md:right-4">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {project.results}
                </Badge>
              </div>
            </div>

            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </CardHeader>

            <CardContent className="space-y-4 p-4 md:p-6 pt-0">
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-foreground">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.metrics.map((metric, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {metric}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.external ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gradient-button group text-sm">
                    View Live Project
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              ) : (
                <Link href={project.link}>
                  <Button className="w-full gradient-button group text-sm">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href="/portfolio">
          <Button size="lg" className="gradient-button group">
            View All Portfolio Projects
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
