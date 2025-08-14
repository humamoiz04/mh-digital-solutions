import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, TrendingUp, Calendar, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio - MH Digital Solutions",
  description:
    "Explore our portfolio of successful digital projects including web development, mobile apps, and digital marketing campaigns.",
}

export default function PortfolioPage() {
  const allProjects = [
    {
      title: "Movie Discovery App",
      industry: "Entertainment",
      image: "/images/digital-art-style-illustration-graphic-designer.webp",
      description:
        "Interactive movie discovery platform with advanced search, filtering, and personalized recommendations. Built with React.js and integrated with movie databases.",
      results: "Live Application",
      technologies: ["React.js", "API Integration", "Responsive Design", "Search Functionality"],
      link: "https://farhansiddiqui-movie.netlify.app/",
      year: "2024",
      category: "Web Application",
    },
    {
      title: "Climate Data Tracker",
      industry: "Environmental",
      image: "/images/business-consultation-analytics.webp",
      description:
        "Real-time climate data visualization and tracking application with interactive charts and environmental insights.",
      results: "Data Visualization",
      technologies: ["Data Visualization", "Real-time Updates", "Analytics Dashboard", "Environmental APIs"],
      link: "https://farhansiddiqui-climate.netlify.app/",
      year: "2024",
      category: "Data Application",
    },
    {
      title: "Fitness Gym Website",
      industry: "Fitness & Health",
      image: "/images/social-media-celebration.webp",
      description: "Modern fitness center website with membership management, class schedules, and trainer profiles.",
      results: "Member Growth",
      technologies: ["Modern Design", "Membership System", "Mobile Optimized", "Booking Integration"],
      link: "https://farhansiddiqui-gym.netlify.app/",
      year: "2024",
      category: "Business Website",
    },
    {
      title: "Death Date Calculator",
      industry: "Entertainment",
      image: "/images/ai-chatbot-automation.webp",
      description:
        "Fun interactive application that calculates estimated life expectancy based on various lifestyle factors.",
      results: "Interactive Tool",
      technologies: ["JavaScript", "Interactive UI", "Calculations", "Responsive Design"],
      link: "https://farhansiddiqui-deathdate.netlify.app/",
      year: "2024",
      category: "Interactive Tool",
    },
    {
      title: "Art Web Portfolio",
      industry: "Creative Arts",
      image: "/images/flat-illustration-social-media-day-celebration.webp",
      description:
        "Creative portfolio website showcasing artistic works with elegant galleries and interactive features.",
      results: "Creative Showcase",
      technologies: ["Portfolio Design", "Gallery System", "Creative Layout", "Image Optimization"],
      link: "https://farhansiddiqui-artweb.netlify.app/",
      year: "2024",
      category: "Portfolio Website",
    },
    {
      title: "Nebraska Auto Detailing",
      industry: "Automotive Services",
      image: "/images/business-office-remote-lifestyle.webp",
      description:
        "Professional auto detailing service website with service booking, pricing, and customer testimonials.",
      results: "Business Growth",
      technologies: ["Booking System", "SEO Optimized", "Local Business", "Service Showcase"],
      link: "https://www.nebraskaautodetailing.com/",
      year: "2024",
      category: "Service Business",
    },
    {
      title: "Luxury Fin Detail",
      industry: "Premium Automotive",
      image: "/images/ai-chatbot-automation.webp",
      description:
        "Premium automotive detailing service with luxury branding, high-end service packages, and professional presentation.",
      results: "Premium Brand",
      technologies: ["Luxury Design", "Service Showcase", "Contact Integration", "Premium UX"],
      link: "https://www.luxuryfindetail.com/",
      year: "2024",
      category: "Premium Service",
    },
    {
      title: "Aesthetic Haven Store",
      industry: "E-commerce Beauty",
      image: "/images/business-consultation-analytics.webp",
      description:
        "Modern e-commerce platform for aesthetic and beauty products with secure payments and inventory management.",
      results: "Online Store",
      technologies: ["E-commerce Platform", "Product Catalog", "Payment Integration", "Inventory Management"],
      link: "https://www.aesthetichaven.store/",
      year: "2024",
      category: "E-commerce",
    },
  ]

  const categories = [
    "All",
    "Web Application",
    "Business Website",
    "E-commerce",
    "Service Business",
    "Interactive Tool",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-sm px-4 py-2">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Digital Solutions That Drive Results</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio of successful digital projects spanning web development, mobile
              applications, e-commerce platforms, and innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project, index) => (
              <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {project.results}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {project.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full gradient-button group">
                      <Globe className="mr-2 h-4 w-4" />
                      View Live Project
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your digital vision to life with our proven expertise and innovative
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gradient-button group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
