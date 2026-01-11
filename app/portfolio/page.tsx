import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio - MH Digital Solutions",
  description:
    "Explore our portfolio of successful digital projects including web development, mobile apps, and digital marketing campaigns.",
  openGraph: {
    title: "Portfolio - MH Digital Solutions",
    description: "Explore our successful digital projects and case studies.",
    url: "https://www.mhdigitalsolution.com/portfolio",
  },
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
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-[#e49273] to-[#f1cea7] text-slate-900 text-sm px-4 py-2">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Digital Solutions That Drive Results</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
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
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs bg-slate-700 text-slate-200 px-2 py-1 rounded">{project.category}</span>
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#a8d0d6] hover:text-[#7ec8d3] font-semibold mt-4"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
