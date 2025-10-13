"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Code, Megaphone, Cloud, Smartphone, Laptop, BarChart, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ThreeDIcon from "@/components/ui/three-d-icon"

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Boost your search engine rankings and drive organic traffic.",
      link: "/services/seo-services",
      color: "text-dark-pastel-blue",
      image: "/images/seo-digital-marketing.webp",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your needs.",
      link: "/services/web-development",
      color: "text-dark-pastel-green",
      image: "/images/digital-transformation-ai.webp",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive strategies to enhance your online presence.",
      link: "/services/digital-marketing",
      color: "text-dark-pastel-purple",
      image: "/images/social-media-marketing.webp",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure for your business.",
      link: "/services/cloud-solutions",
      color: "text-dark-pastel-yellow",
      image: "/images/cloud-network-infrastructure.webp",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Building native and cross-platform mobile applications.",
      link: "/services/mobile-app-development",
      color: "text-dark-pastel-teal",
      image: "/images/mobile-app-ui-design.webp",
    },
    {
      icon: Laptop,
      title: "IT Consulting",
      description: "Expert guidance for your technology strategy and operations.",
      link: "/services/it-consulting",
      color: "text-dark-pastel-orange",
      image: "/images/customer-support-service.webp",
    },
    {
      icon: BarChart,
      title: "Business Analytics",
      description: "Transforming data into actionable insights for growth.",
      link: "/services/business-analytics",
      color: "text-dark-pastel-pink",
      image: "/images/data-analytics-dashboard.webp",
    },
    {
      icon: Briefcase,
      title: "Business Consulting",
      description: "Strategic advice to optimize operations and achieve goals.",
      link: "/services/business-consulting",
      color: "text-dark-pastel-indigo",
      image: "/images/ecommerce-online-shopping.webp",
    },
  ]

  const variants: Array<"brand" | "blue" | "teal"> = ["brand", "blue", "teal"]

  return (
    <>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 gradient-text px-2 sm:px-0 text-center">
        Our Comprehensive Digital Services
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 md:mb-12 px-4 sm:px-2 md:px-0 max-w-4xl mx-auto text-center">
        We offer a wide range of digital solutions designed to help your business thrive in the modern landscape.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <Card className="glass-card flex flex-col items-center p-3 sm:p-4 md:p-6 text-center h-full transition-all group">
              <div className="relative w-full h-32 sm:h-40 md:h-48 mb-3 sm:mb-4 overflow-hidden rounded-lg">
                <Image
                  src={service.image || "/placeholder.svg?height=400&width=600&query=service illustration"}
                  alt={`${service.title} Illustration`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mb-2 sm:mb-3">
                <ThreeDIcon icon={service.icon} size={40} variant={variants[index % variants.length]} />
              </div>
              <CardHeader className="pb-1 sm:pb-2 md:pb-4 px-0">
                <CardTitle className="text-base sm:text-lg md:text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 px-0">
                <CardDescription className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
