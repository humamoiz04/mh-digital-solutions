import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Brain,
  Palette,
  Code,
  Star,
  CheckCircle,
  Target,
  Search,
  ShoppingCart,
  TrendingUp,
  DollarSign,
  Users,
  Globe,
  Zap,
  Shield,
  Award,
  BarChart3,
  Settings,
  Lightbulb,
  Clock,
} from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import HubSpotForm from "@/components/hubspot-form"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MH Digital Solutions - Leading Digital Marketing Agency & Web Development Company",
  description:
    "Top-rated digital marketing agency specializing in SEO services, PPC management, social media marketing, web design, and AI automation. Serving businesses nationwide with proven results.",
  keywords:
    "digital marketing agency, M&H Digital Solutions, SEO services, PPC management, social media marketing, web design, content marketing, online marketing services, USA, nationwide, small businesses, startups",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com",
  },
}

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MH Digital Solutions - Leading Digital Marketing Agency",
  description:
    "Top-rated digital marketing agency specializing in SEO, PPC, social media marketing, web design, and AI automation services.",
  url: "https://www.mhdigitalsolution.com",
  mainEntity: {
    "@type": "Organization",
    name: "MH Digital Solutions",
    description:
      "Leading digital marketing agency providing comprehensive online marketing solutions for small businesses and startups nationwide.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services",
            description: "Search engine optimization services to improve website rankings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PPC Management",
            description: "Pay-per-click advertising management and optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing",
            description: "Social media strategy and management services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Design",
            description: "Custom website design and development services",
          },
        },
      ],
    },
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />

      <div className="min-h-screen">
        {/* Hero Section with Dashboard */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <ScrollAnimation animation="fadeInLeft" className="space-y-8">
                <Badge className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] text-white border-0">
                  🚀 Top-Rated Digital Marketing Agency Since 2020
                </Badge>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#FF7600] via-[#F472B6] to-[#8B5CF6] bg-clip-text text-transparent text-3xl text-xl text-center">
                    Digital Marketing Agency
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">That Delivers Results</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                  Leading digital marketing agency specializing in SEO services, PPC management, social media marketing,
                  and web design for small businesses and startups nationwide. Proven results with 4.9-star reviews.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] hover:opacity-90 text-white border-0 rounded-full px-8 py-3 font-medium transition-all inline-flex items-center justify-center"
                    aria-label="Schedule free digital marketing consultation"
                  >
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full px-8"
                    >
                      View Our Digital Marketing Services
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              {/* Right Dashboard */}
              <ScrollAnimation animation="fadeInRight" delay={200} className="relative">
                <div className="glass p-8 space-y-6 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Digital Marketing Performance
                    </h3>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Live Results
                    </Badge>
                  </div>

                  {/* Enhanced Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#FF7600]">500+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Successful Projects</div>
                    </div>
                    <div className="glass p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#8B5CF6]">4.9★</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Client Reviews</div>
                    </div>
                    <div className="glass p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#F472B6]">250%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Average ROI</div>
                    </div>
                    <div className="glass p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#00F5FF]">24/7</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                    </div>
                  </div>

                  {/* Enhanced Progress Bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SEO Services</span>
                        <span className="text-sm text-[#FF7600]">94%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] h-2 rounded-full"
                          style={{ width: "94%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">PPC Management</span>
                        <span className="text-sm text-[#8B5CF6]">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Social Media Marketing
                        </span>
                        <span className="text-sm text-[#00F5FF]">96%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#00F5FF] to-[#F472B6] h-2 rounded-full"
                          style={{ width: "96%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Web Design</span>
                        <span className="text-sm text-[#F472B6]">89%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] h-2 rounded-full"
                          style={{ width: "89%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Content Marketing</span>
                        <span className="text-sm text-[#00F5FF]">91%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] h-2 rounded-full"
                          style={{ width: "91%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <ScrollAnimation>
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 mb-4">
                  🎯 Your Challenges, Our Solutions
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Common Problems</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] bg-clip-text text-transparent">
                    We Solve
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Every business faces challenges. We turn your biggest obstacles into competitive advantages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    problem: "Low Customer Acquisition",
                    solution: "300% increase in qualified leads through targeted digital marketing campaigns",
                    icon: Users,
                    color: "from-red-500 to-pink-500",
                    image: "/images/analytics-growth.webp",
                  },
                  {
                    problem: "High Operational Costs",
                    solution: "70% cost reduction through AI automation and process optimization",
                    icon: DollarSign,
                    color: "from-orange-500 to-red-500",
                    image: "/images/business-process-optimization.png",
                  },
                  {
                    problem: "Weak Online Presence",
                    solution: "Dominate search results with our proven SEO and web development strategies",
                    icon: Globe,
                    color: "from-blue-500 to-cyan-500",
                    image: "/images/analytics-dashboard.webp",
                  },
                  {
                    problem: "Inefficient Processes",
                    solution: "Streamlined operations that save 40+ hours per week through smart automation",
                    icon: Zap,
                    color: "from-purple-500 to-pink-500",
                    image: "/images/ai-automation.webp",
                  },
                ].map((item, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="glass border-0 hover:scale-105 transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <div className="relative mb-6">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.problem}
                            width={200}
                            height={150}
                            className="w-full h-32 object-cover rounded-lg mb-4"
                          />
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto -mt-6 relative z-10`}
                          >
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-red-600 dark:text-red-400">❌ {item.problem}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                          <strong className="text-green-600 dark:text-green-400">✅ Our Solution:</strong>{" "}
                          {item.solution}
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Key Differentiators Section */}
        <ScrollAnimation>
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 mb-4">
                  🏆 Why Choose M&H Digital Solutions
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">What Makes Us</span>{" "}
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                    Different
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  We're not just another agency. We're your strategic partner for complete business transformation.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: "Proven Track Record",
                    description: "500+ successful projects with measurable results",
                    icon: Award,
                    stat: "4.9★ Rating",
                    color: "from-yellow-500 to-orange-500",
                  },
                  {
                    title: "Fast Implementation",
                    description: "See results in 30 days or less with our rapid deployment",
                    icon: Clock,
                    stat: "30 Days",
                    color: "from-green-500 to-teal-500",
                  },
                  {
                    title: "Expert Team",
                    description: "Certified specialists in every aspect of digital growth",
                    icon: Shield,
                    stat: "15+ Experts",
                    color: "from-blue-500 to-purple-500",
                  },
                ].map((item, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="glass border-0 hover:scale-105 transition-all duration-300 text-center">
                      <CardContent className="p-8">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                        >
                          <item.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                        <Badge className={`bg-gradient-to-r ${item.color} text-white border-0`}>{item.stat}</Badge>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>

              {/* Key Benefits */}
              <div className="glass rounded-2xl p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-[#FF7600] mb-2">70%</div>
                    <p className="text-gray-600 dark:text-gray-400">Labor Cost Reduction</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#8B5CF6] mb-2">300%</div>
                    <p className="text-gray-600 dark:text-gray-400">Digital Marketing Growth</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#00F5FF] mb-2">1</div>
                    <p className="text-gray-600 dark:text-gray-400">Partner for Complete Transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Categorized Services Section */}
        <ScrollAnimation>
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 bg-rose-300 bg-rose-700 bg-red-100">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white border-0 mb-4">
                  🌟 Our Complete Service Portfolio
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Comprehensive</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Business Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  From strategy to execution, we provide end-to-end solutions that drive measurable business growth
                </p>
              </div>

              <div className="space-y-16">
                {/* Strategic & Management Consulting */}
                <div>
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Strategic & Management Consulting
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Transform your business strategy and optimize operations for maximum growth and efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { name: "Business Strategy Development", href: "/services/business-consulting", icon: Target },
                      { name: "Process Optimization", href: "/services/operational-services", icon: Settings },
                      { name: "Performance Analytics", href: "/services/business-analytics", icon: BarChart3 },
                    ].map((service, index) => (
                      <Link key={index} href={service.href}>
                        <Card className="glass border-0 hover:scale-105 transition-all duration-300 group cursor-pointer">
                          <CardContent className="p-6 text-center">
                            <service.icon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                              {service.name}
                            </h4>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Marketing Services */}
                <div>
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Marketing Services</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Comprehensive digital marketing solutions that drive traffic, generate leads, and increase
                        revenue.
                      </p>
                    </div>
                  </div>

                  {/* Marketing Subcategories */}
                  <div className="space-y-8">
                    {/* Inbound/Organic Marketing */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Inbound/Organic Marketing
                      </h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        {[
                          { name: "SEO Services", href: "/services/seo", icon: Search },
                          { name: "Content Marketing", href: "/services/content-marketing", icon: Palette },
                          { name: "Social Media Marketing", href: "/services/social-media-marketing", icon: Users },
                          { name: "Email Marketing", href: "/services/email-marketing", icon: Target },
                        ].map((service, index) => (
                          <Link key={index} href={service.href}>
                            <Card className="glass border-0 hover:scale-105 transition-all duration-300 group cursor-pointer">
                              <CardContent className="p-4 text-center">
                                <service.icon className="h-6 w-6 text-green-500 mx-auto mb-2" />
                                <h5 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-green-500 transition-colors">
                                  {service.name}
                                </h5>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Paid/Outbound Marketing */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Paid/Outbound Marketing
                      </h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        {[
                          { name: "PPC Advertising", href: "/services/ppc-advertising", icon: Target },
                          { name: "Social Media Ads", href: "/services/social-media-ads", icon: Users },
                          { name: "Display Advertising", href: "/services/display-advertising", icon: Globe },
                          { name: "Lead Generation", href: "/services/lead-generation", icon: TrendingUp },
                        ].map((service, index) => (
                          <Link key={index} href={service.href}>
                            <Card className="glass border-0 hover:scale-105 transition-all duration-300 group cursor-pointer">
                              <CardContent className="p-4 text-center">
                                <service.icon className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                                <h5 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                                  {service.name}
                                </h5>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Digital Presence */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Digital Presence
                      </h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        {[
                          { name: "Web Development", href: "/services/web-development", icon: Code },
                          { name: "E-commerce Solutions", href: "/services/e-commerce", icon: ShoppingCart },
                          { name: "Graphic Design", href: "/services/graphic-design", icon: Palette },
                          { name: "Branding & Marketing", href: "/services/branding-marketing", icon: Star },
                        ].map((service, index) => (
                          <Link key={index} href={service.href}>
                            <Card className="glass border-0 hover:scale-105 transition-all duration-300 group cursor-pointer">
                              <CardContent className="p-4 text-center">
                                <service.icon className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                                <h5 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                                  {service.name}
                                </h5>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operational Support & Technology */}
                <div>
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Operational Support & Technology
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Advanced technology solutions and operational support to streamline your business processes.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { name: "AI & Automation", href: "/services/ai-automation", icon: Brain },
                      { name: "HR Solutions", href: "/services/hr-solutions", icon: Users },
                      { name: "Cost Optimization", href: "/services/business-cost-optimization", icon: DollarSign },
                    ].map((service, index) => (
                      <Link key={index} href={service.href}>
                        <Card className="glass border-0 hover:scale-105 transition-all duration-300 group cursor-pointer">
                          <CardContent className="p-6 text-center">
                            <service.icon className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">
                              {service.name}
                            </h4>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] hover:opacity-90 text-white"
                  >
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* How We Work Process Section */}
        <ScrollAnimation>
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 mb-4">
                  🚀 Our Proven Process
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Our Proven Process
                  </span>{" "}
                  <span className="text-gray-900 dark:text-white">to Your Success</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  A systematic approach that has delivered results for 500+ businesses nationwide
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discover & Strategize",
                    description: "Free consultation and comprehensive needs assessment to understand your goals",
                    icon: Search,
                    color: "from-blue-500 to-cyan-500",
                    image: "/images/business-consulting.webp",
                  },
                  {
                    step: "02",
                    title: "Plan & Design",
                    description: "Custom strategy development with clear timelines and measurable objectives",
                    icon: Target,
                    color: "from-purple-500 to-pink-500",
                    image: "/images/data-analytics.webp",
                  },
                  {
                    step: "03",
                    title: "Implement & Optimize",
                    description: "Execute the strategy with continuous monitoring and real-time optimization",
                    icon: Zap,
                    color: "from-orange-500 to-red-500",
                    image: "/images/business-process-optimization.png",
                  },
                  {
                    step: "04",
                    title: "Analyze & Scale",
                    description: "Detailed reporting, performance analysis, and scaling successful initiatives",
                    icon: TrendingUp,
                    color: "from-green-500 to-teal-500",
                    image: "/images/business-analytics-3d.png",
                  },
                ].map((process, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="glass border-0 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                      <CardContent className="p-6 text-center">
                        <div className="relative mb-6">
                          <Image
                            src={process.image || "/placeholder.svg"}
                            alt={process.title}
                            width={200}
                            height={120}
                            className="w-full h-24 object-cover rounded-lg mb-4"
                          />
                          <div
                            className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}
                          >
                            {process.step}
                          </div>
                        </div>
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <process.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{process.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{process.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Results & Case Studies Section */}
        <ScrollAnimation>
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 mb-4">
                  📈 Results That Speak Volumes
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Our</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] bg-clip-text text-transparent">
                    Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Real results from real businesses. See how we've transformed companies across industries.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: "TechStart Inc.",
                    result: "300% Growth in 6 Months",
                    description:
                      "Complete digital transformation including website redesign, SEO optimization, and automated lead generation system.",
                    metrics: [
                      "300% increase in organic traffic",
                      "250% boost in conversion rate",
                      "40% reduction in customer acquisition cost",
                    ],
                    image: "/images/analytics-growth.webp",
                    color: "from-green-500 to-teal-500",
                  },
                  {
                    title: "Elite Fitness Chain",
                    result: "400% Revenue Increase",
                    description:
                      "Multi-location digital marketing strategy with local SEO, PPC campaigns, and social media management.",
                    metrics: ["400% revenue growth", "5x faster website loading", "60% increase in membership"],
                    image: "/images/business-operations.jpeg",
                    color: "from-blue-500 to-purple-500",
                  },
                  {
                    title: "Manufacturing Corp",
                    result: "$500K Annual Savings",
                    description:
                      "AI automation implementation and business process optimization across all departments.",
                    metrics: [
                      "$500K cost savings annually",
                      "70% reduction in manual tasks",
                      "50% faster order processing",
                    ],
                    image: "/images/ai-automation.webp",
                    color: "from-orange-500 to-red-500",
                  },
                ].map((caseStudy, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="glass border-0 hover:scale-105 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="relative mb-6">
                          <Image
                            src={caseStudy.image || "/placeholder.svg"}
                            alt={caseStudy.title}
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover rounded-lg"
                          />
                          <div
                            className={`absolute top-4 left-4 bg-gradient-to-r ${caseStudy.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                          >
                            Case Study
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{caseStudy.title}</h3>
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent mb-3`}
                        >
                          {caseStudy.result}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{caseStudy.description}</p>
                        <div className="space-y-2">
                          {caseStudy.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-600 dark:text-gray-400">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>

              <div className="text-center">
                <Link href="/case-studies">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] hover:opacity-90 text-white"
                  >
                    View All Case Studies
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Enhanced Testimonials with Social Proof */}
        <ScrollAnimation>
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <div className="flex justify-center items-center mb-4">
                  <Image
                    src="/images/clutch-verified.png"
                    alt="Clutch Premier Verified"
                    width={100}
                    height={100}
                    className="mr-4"
                  />
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                    ⭐ 4.9-Star Rated Agency
                  </Badge>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">What Our</span>{" "}
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                    Clients
                  </span>{" "}
                  <span className="text-gray-900 dark:text-white">Say</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Trusted by 500+ businesses nationwide with proven results
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    name: "Sarah Johnson",
                    company: "TechStart Inc.",
                    industry: "Technology",
                    text: "M&H Digital Solutions transformed our online presence completely. Our website traffic increased by 300% and revenue grew by 250% in just 6 months through their SEO services!",
                    rating: 5,
                    color: "from-[#FF7600] to-[#F472B6]",
                    avatar: "SJ",
                    companyLogo: "/images/content-marketing.webp",
                  },
                  {
                    name: "Michael Chen",
                    company: "Elite Fitness",
                    industry: "Health & Fitness",
                    text: "Their PPC management and social media marketing saved us 40 hours per week while generating 3x more qualified leads. Incredible ROI and professional service.",
                    rating: 5,
                    color: "from-[#8B5CF6] to-[#00F5FF]",
                    avatar: "MC",
                    companyLogo: "/images/business-consulting.webp",
                  },
                  {
                    name: "Emily Rodriguez",
                    company: "BrandForward",
                    industry: "Marketing Agency",
                    text: "The web design and content marketing expertise took our startup from unknown to industry leader. Their digital marketing strategies are simply outstanding.",
                    rating: 5,
                    color: "from-[#F472B6] to-[#FCFBCF]",
                    avatar: "ER",
                    companyLogo: "/images/data-analytics.webp",
                  },
                ].map((testimonial, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="glass border-0 hover:scale-105 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center mr-4`}
                            >
                              <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.industry}</div>
                            </div>
                          </div>
                          <Image
                            src={testimonial.companyLogo || "/placeholder.svg"}
                            alt={`${testimonial.company} logo`}
                            width={40}
                            height={40}
                            className="rounded opacity-60"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="glass rounded-2xl p-8">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#FF7600] mb-2">500+</div>
                    <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#8B5CF6] mb-2">4.9★</div>
                    <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00F5FF] mb-2">98%</div>
                    <p className="text-gray-600 dark:text-gray-400">Client Retention</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#F472B6] mb-2">24/7</div>
                    <p className="text-gray-600 dark:text-gray-400">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Contact Form Section */}
        <ScrollAnimation>
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    <span className="text-gray-900 dark:text-white">Get Your Free</span>{" "}
                    <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                      Digital Marketing Consultation
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    Ready to grow your business with proven digital marketing strategies? Get a free consultation with
                    our experts and discover how we can help you achieve your goals.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Free SEO audit and strategy",
                      "Custom digital marketing plan",
                      "ROI projections and timeline",
                      "No obligation consultation",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Start Your Digital Marketing Journey
                  </h3>
                  <HubSpotForm />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation>
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7600]/10 via-[#F472B6]/10 to-[#8B5CF6]/10"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                    <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                      Transform
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">Your Digital Presence?</span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join hundreds of successful businesses that have accelerated their growth with our proven digital
                    marketing solutions
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://calendly.com/mhdigitalsolutionsus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] hover:opacity-90 text-white border-0 rounded-full px-8 py-3 font-medium transition-all inline-flex items-center justify-center"
                      aria-label="Start your digital marketing project today"
                    >
                      Start Your Project Today
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </a>
                    <Link href="/contact">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full px-8"
                      >
                        Get Free Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </>
  )
}
