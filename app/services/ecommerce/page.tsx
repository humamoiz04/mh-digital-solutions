"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, CreditCard, Truck, ArrowRight, CheckCircle, Star, TrendingUp, BarChart3 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ECommercePage() {
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      title: "Store Setup & Design",
      description: "Custom e-commerce store design and setup",
      price: "$2,997",
      features: ["Custom design", "Mobile responsive", "Payment integration", "Basic SEO"],
    },
    {
      title: "Complete E-commerce Solution",
      description: "Full-featured online store with advanced capabilities",
      price: "$5,997",
      features: [
        "Everything in Store Setup",
        "Inventory management",
        "Analytics dashboard",
        "Marketing tools",
        "Customer support",
      ],
    },
    {
      title: "Enterprise E-commerce",
      description: "Advanced e-commerce platform for large businesses",
      price: "$9,997",
      features: [
        "Everything in Complete Solution",
        "Multi-store management",
        "Advanced integrations",
        "Dedicated support",
        "Custom features",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Fashion Boutique",
      text: "Our online sales increased by 400% within 6 months of launching our new e-commerce store.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=SJ",
    },
    {
      name: "Mike Chen",
      company: "Tech Gadgets Store",
      text: "The conversion rate optimization helped us achieve a 65% increase in sales conversion.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=MC",
    },
    {
      name: "Lisa Rodriguez",
      company: "Home Decor Shop",
      text: "Professional setup and ongoing support made our e-commerce journey seamless and profitable.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=LR",
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      {/* Hero Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white border-0 mb-6">
              🛒 E-commerce Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Build E-commerce Stores
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">That Convert & Generate Revenue</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Create powerful online stores that maximize sales with seamless shopping experiences, advanced features,
              and conversion optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/mhdigitalsolutionsus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Start E-commerce Project
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { metric: "$50M+", label: "Revenue Generated", icon: TrendingUp },
              { metric: "350%", label: "Average Sales Increase", icon: BarChart3 },
              { metric: "200+", label: "Stores Launched", icon: ShoppingCart },
              { metric: "98%", label: "Client Satisfaction", icon: Star },
            ].map((stat, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-[#4F46E5] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.metric}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Our</span>{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                E-commerce Process
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Store Analysis",
                  description: "Comprehensive audit of your business needs and target market",
                  side: "left",
                },
                {
                  step: "02",
                  title: "Design & Development",
                  description: "Custom store design with user experience optimization",
                  side: "right",
                },
                {
                  step: "03",
                  title: "Integration & Testing",
                  description: "Payment systems, inventory management, and thorough testing",
                  side: "left",
                },
                {
                  step: "04",
                  title: "Launch & Optimization",
                  description: "Store launch with ongoing performance optimization",
                  side: "right",
                },
                {
                  step: "05",
                  title: "Growth & Scaling",
                  description: "Continuous improvements and feature enhancements",
                  side: "left",
                },
              ].map((process, index) => (
                <div key={index} className={`flex items-center ${process.side === "right" ? "flex-row-reverse" : ""}`}>
                  <div className="w-1/2 pr-8">
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                            {process.step}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{process.title}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-[#4F46E5] rounded-full border-4 border-white dark:border-gray-800 relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Complete</span>{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                E-commerce Solutions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "Custom Store Development",
                description: "Build unique e-commerce platforms tailored to your brand",
                features: ["Custom design", "Mobile-responsive", "Product catalogs", "User-friendly navigation"],
                color: "from-[#4F46E5] to-[#7C3AED]",
              },
              {
                icon: CreditCard,
                title: "Payment Integration",
                description: "Secure payment processing with multiple gateway options",
                features: ["Multiple gateways", "Secure checkout", "Subscription management", "International payments"],
                color: "from-[#7C3AED] to-[#EC4899]",
              },
              {
                icon: Truck,
                title: "Inventory & Shipping",
                description: "Comprehensive inventory management and shipping solutions",
                features: ["Real-time tracking", "Automated shipping", "Multi-warehouse", "Order fulfillment"],
                color: "from-[#EC4899] to-[#F59E0B]",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 hover:shadow-lg transition-shadow group"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-[#4F46E5] mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">E-commerce</span>{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-1 border border-white/20">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === index
                      ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {features[index].title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{features[activeTab].title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{features[activeTab].description}</p>
                <div className="text-4xl font-bold text-[#4F46E5] mb-6">{features[activeTab].price}</div>
                <ul className="space-y-3 mb-8">
                  {features[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:opacity-90 text-white w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Client</span>{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Launch Your Store?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create an e-commerce platform that drives sales and grows your business
            </p>
            <a
              href="https://calendly.com/mhdigitalsolutionsus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Start E-commerce Project
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
