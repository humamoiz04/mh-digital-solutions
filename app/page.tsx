import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Brain,
  Code,
  CheckCircle,
  Target,
  Search,
  ShoppingCart,
  DollarSign,
  Users,
  Globe,
  Zap,
  Lightbulb,
  Building,
} from "lucide-react"
import Link from "next/link"
import HubSpotForm from "@/components/ui/hubspot-form"
import CaseStudiesCarousel from "@/components/case-studies-carousel"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Transformation & Growth Solutions | MH Digital Solutions",
  description:
    "MH Digital Solutions empowers businesses from local startups to global enterprises with tailored digital marketing, web development, AI automation, and strategic growth solutions. Partner for measurable results.",
  keywords:
    "digital transformation, business growth solutions, digital marketing agency, web development, AI automation, strategic consulting, small business to enterprise",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen pt-20 bg-transparent">
      {/* Hero Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-[#F59E0B] to-[#EC4899] text-white border-0">
                🚀 Top-Rated Digital Marketing Agency Since 2020
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Your Strategic Partner for</span>
                <br />
                <span className="bg-gradient-to-r from-[#F59E0B] via-[#EC4899] to-[#7C3AED] bg-clip-text text-transparent">
                  Digital Transformation
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">& Measurable Business Growth</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Empowering businesses from local startups to global enterprises with tailored digital marketing, web
                development, AI automation, and strategic growth solutions. Your partner for measurable results and
                sustainable success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#F59E0B] to-[#EC4899] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
                  aria-label="Schedule free digital marketing consultation"
                >
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white rounded-full px-8 text-indigo-950 bg-cyan-50"
                  >
                    View Our Digital Marketing Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Dashboard */}
            <div className="relative">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 space-y-6 rounded-2xl border border-white/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Digital Marketing Performance</h3>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Live Results
                  </Badge>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 dark:bg-gray-700/60 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-[#F59E0B]">500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Successful Projects</div>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-700/60 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-[#7C3AED] text-lime-300">4.9★</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Client Reviews</div>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-700/60 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-[#EC4899]">250%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Average ROI</div>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-700/60 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-[#4F46E5] text-fuchsia-600">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                  </div>
                </div>

                {/* Enhanced Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SEO Services</span>
                      <span className="text-sm text-[#F59E0B]">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#F59E0B] to-[#EC4899] h-2 rounded-full"
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">PPC Management</span>
                      <span className="text-sm text-[#7C3AED]">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Social Media Marketing
                      </span>
                      <span className="text-sm text-[#4F46E5]">96%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#4F46E5] to-[#EC4899] h-2 rounded-full"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Size & Industry Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 mb-4">
              🎯 Driving Impact Across All Business Sizes & Industries
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Tailored Solutions for</span>{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#EC4899] bg-clip-text text-transparent">
                Every Business Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From local service providers to Fortune 500 companies, we deliver customized digital strategies that drive
              measurable growth at every scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Small & Local Businesses */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Small & Local Businesses</h3>
                    <p className="text-green-600 font-semibold">Affordable Growth Solutions</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Comprehensive digital marketing packages designed for local service providers, restaurants, retail
                  stores, and small businesses ready to dominate their local market and expand their reach.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Local SEO & Google My Business optimization",
                    "Professional website development",
                    "Social media marketing & management",
                    "Review management & reputation building",
                    "Affordable monthly packages starting at $599",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500">
                  Explore Small Business Solutions
                </Button>
              </CardContent>
            </Card>

            {/* Mid-Market & Enterprise */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mid-Market & Enterprise</h3>
                    <p className="text-blue-600 font-semibold">Scalable Strategic Solutions</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Advanced digital transformation strategies for growing companies, multi-location businesses, and
                  enterprises requiring sophisticated marketing automation, custom development, and strategic
                  consulting.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Enterprise SEO & multi-location strategies",
                    "Custom web applications & integrations",
                    "Advanced marketing automation & AI",
                    "Dedicated account management & strategy",
                    "Custom solutions & enterprise pricing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  Explore Enterprise Solutions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 mb-4">
              🎯 Your Challenges, Our Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Common Challenges</span>{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#EC4899] bg-clip-text text-transparent">
                We Solve
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every business faces obstacles. We turn your biggest challenges into competitive advantages through
              strategic digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: "Low Customer Acquisition",
                solution: "300% increase in qualified leads through targeted digital marketing campaigns",
                icon: Users,
                color: "from-red-500 to-pink-500",
              },
              {
                problem: "High Operational Costs",
                solution: "70% cost reduction through AI automation and process optimization",
                icon: DollarSign,
                color: "from-orange-500 to-red-500",
              },
              {
                problem: "Weak Online Presence",
                solution: "Dominate search results with our proven SEO and web development strategies",
                icon: Globe,
                color: "from-blue-500 to-cyan-500",
              },
              {
                problem: "Inefficient Processes",
                solution: "Streamlined operations that save 40+ hours per week through smart automation",
                icon: Zap,
                color: "from-purple-500 to-pink-500",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center text-orange-100 bg-lime-100">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 dark:text-red-400 text-rose-400">❌ {item.problem}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    <strong className="dark:text-green-400 text-indigo-950"> 💡 Our Solution:</strong> {item.solution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white border-0 mb-4">
              🔥 Most Popular Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Our Integrated Digital Solutions:</span>{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#7C3AED] bg-clip-text text-transparent">
                Crafted for Your Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions that work together to drive measurable growth and sustainable
              success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "SEO Services",
                href: "/services/seo",
                icon: Search,
                color: "from-[#4F46E5] to-[#7C3AED]",
                badge: "Most Popular",
                description: "Dominate search results and drive organic traffic",
                features: ["Keyword Research", "On-Page SEO", "Link Building"],
                offer: "Free SEO Audit ($500 Value)",
              },
              {
                name: "Web Development",
                href: "/services/web-development",
                icon: Code,
                color: "from-[#7C3AED] to-[#EC4899]",
                badge: "70% OFF",
                description: "Custom websites that convert visitors into customers",
                features: ["Responsive Design", "E-commerce", "CMS Integration"],
                offer: "70% Off Launch Pricing",
              },
              {
                name: "Digital Marketing",
                href: "/services/digital-marketing",
                icon: Target,
                color: "from-[#EC4899] to-[#F59E0B]",
                badge: "Complete Package",
                description: "Full-service marketing campaigns that scale",
                features: ["PPC Ads", "Social Media", "Content Marketing"],
                offer: "Free Strategy Session",
              },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${service.color} text-white border-0`}>{service.badge}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-green-700 dark:text-green-300">🎁 {service.offer}</p>
                    </div>
                    <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white border-0`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <CaseStudiesCarousel />

      {/* Services Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white border-0 mb-4">
              🌟 Our Complete Service Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Complete Digital</span>{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#7C3AED] bg-clip-text text-transparent">
                Transformation Suite
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "SEO Services", href: "/services/seo", icon: Search, color: "from-[#4F46E5] to-[#7C3AED]" },
              {
                name: "Web Development",
                href: "/services/web-development",
                icon: Code,
                color: "from-[#7C3AED] to-[#EC4899]",
              },
              {
                name: "Digital Marketing",
                href: "/services/digital-marketing",
                icon: Target,
                color: "from-[#EC4899] to-[#F59E0B]",
              },
              {
                name: "AI & Automation",
                href: "/services/ai-automation",
                icon: Brain,
                color: "from-[#F59E0B] to-[#4F46E5]",
              },
              {
                name: "E-commerce Solutions",
                href: "/services/ecommerce",
                icon: ShoppingCart,
                color: "from-[#4F46E5] to-[#EC4899]",
              },
              {
                name: "Business Consulting",
                href: "/services/business-consulting",
                icon: Lightbulb,
                color: "from-[#7C3AED] to-[#F59E0B]",
              },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#4F46E5] transition-colors">
                      {service.name}
                    </h4>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services">
              <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#7C3AED] hover:opacity-90 text-white">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Ready to Accelerate Your</span>{" "}
                <span className="bg-gradient-to-r from-[#F59E0B] to-[#7C3AED] bg-clip-text text-transparent">
                  Digital Journey?
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Let's Connect.</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Ready to grow your business with proven digital marketing strategies? Get a free consultation with our
                experts and discover how we can help you achieve your goals.
              </p>
              <div className="space-y-3">
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
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Start Your Digital Marketing Journey
              </h3>
              <HubSpotForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
