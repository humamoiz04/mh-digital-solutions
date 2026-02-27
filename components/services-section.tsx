"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Code, Megaphone, Cloud, Smartphone, Laptop, BarChart, Briefcase, ArrowRight, Zap } from "lucide-react"
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
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      badge: "TOP RANKED",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your needs.",
      link: "/services/web-development",
      color: "text-dark-pastel-green",
      image: "/images/digital-transformation-ai.webp",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      badge: "AWARD WINNING",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive strategies to enhance your online presence.",
      link: "/services/digital-marketing",
      color: "text-dark-pastel-purple",
      image: "/images/social-media-marketing.webp",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      badge: "RESULTS DRIVEN",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure for your business.",
      link: "/services/cloud-solutions",
      color: "text-dark-pastel-yellow",
      image: "/images/cloud-network-infrastructure.webp",
      gradient: "from-yellow-500 via-orange-500 to-amber-500",
      badge: "ENTERPRISE GRADE",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Building native and cross-platform mobile applications.",
      link: "/services/mobile-app-development",
      color: "text-dark-pastel-teal",
      image: "/images/mobile-app-ui-design.webp",
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      badge: "CUTTING EDGE",
    },
    {
      icon: Laptop,
      title: "IT Consulting",
      description: "Expert guidance for your technology strategy and operations.",
      link: "/services/it-consulting",
      color: "text-dark-pastel-orange",
      image: "/images/customer-support-service.webp",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      badge: "TRUSTED PARTNER",
    },
    {
      icon: BarChart,
      title: "Business Analytics",
      description: "Transforming data into actionable insights for growth.",
      link: "/services/business-analytics",
      color: "text-dark-pastel-pink",
      image: "/images/data-analytics-dashboard.webp",
      gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
      badge: "DATA DRIVEN",
    },
    {
      icon: Briefcase,
      title: "Business Consulting",
      description: "Strategic advice to optimize operations and achieve goals.",
      link: "/services/business-consulting",
      color: "text-dark-pastel-indigo",
      image: "/images/ecommerce-online-shopping.webp",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      badge: "STRATEGIC",
    },
  ]

  const variants: Array<"brand" | "blue" | "teal"> = ["brand", "blue", "teal"]

  return (
    <>
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-[#ff6b9d]/20 via-[#e49273]/20 to-[#a8d0d6]/20 border border-[#e49273]/40 mb-4 sm:mb-6 text-xs sm:text-sm">
          <Zap size={16} className="text-[#ff6b9d]" />
          <span className="font-semibold bg-gradient-to-r from-[#ff6b9d] to-[#a8d0d6] bg-clip-text text-transparent">
            Industry Leading Solutions
          </span>
        </div>

        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 gradient-text drop-shadow-lg px-2">
          Our Comprehensive Digital Services
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto px-2">
          We offer a wide range of digital solutions designed to help your business thrive in the modern landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <Card
              className="glass-card flex flex-col items-center p-4 sm:p-5 md:p-6 text-center h-full transition-all duration-500 group relative overflow-hidden hover:scale-105 sm:hover:scale-110 hover:shadow-3xl cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: `fadeInUp 0.6s ease-out forwards`,
              }}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl pointer-events-none group-hover:blur-sm`}
                style={{
                  background: `linear-gradient(135deg, ${service.gradient})`,
                  padding: "2px",
                }}
              />

              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-[#ff6b9d]/80 to-[#e49273]/80 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.badge}
              </div>

              <div className="relative w-full h-32 sm:h-40 md:h-48 mb-3 sm:mb-4 overflow-hidden rounded-lg">
                <Image
                  src={service.image || "/placeholder.svg?height=400&width=600&query=service illustration"}
                  alt={`${service.title} Illustration`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-125 transition-transform duration-500 brightness-95 group-hover:brightness-110"
                  unoptimized
                />
              </div>

              <div className="mb-2 sm:mb-3 relative z-10">
                <ThreeDIcon icon={service.icon} size={32} className="sm:size-40" variant={variants[index % variants.length]} />
              </div>

              <CardHeader className="text-center pb-1 sm:pb-2 relative z-10 px-2">
                <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#ff6b9d] transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center flex-1 relative z-10 px-2">
                <CardDescription className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 line-clamp-2 sm:line-clamp-none">
                  {service.description}
                </CardDescription>
              </CardContent>

              <div className="mt-2 sm:mt-4 text-[#a8d0d6] group-hover:translate-x-2 group-hover:text-[#ff6b9d] transition-all duration-300 relative z-10">
                <ArrowRight size={16} className="sm:size-20" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
