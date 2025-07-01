import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, TrendingUp, BarChart3, CheckCircle, Target, Users, Globe } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comprehensive SEO Services for Digital Growth | MH Digital Solutions",
  description:
    "Boost visibility for businesses from local startups to global enterprises. Expert SEO services with proven results. Get your free SEO audit today!",
  keywords:
    "SEO services, search engine optimization, local SEO, enterprise SEO, digital growth, organic traffic, search rankings",
}

export default function SEOPage() {
  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer:
        "Most clients see initial improvements in 3-4 months, with significant results in 6-12 months. SEO is a long-term strategy - we typically see the biggest gains between months 6-18. However, technical fixes and local SEO improvements can show results much faster, sometimes within 30-60 days. The timeline depends on your industry competition, current website status, and the scope of optimization needed.",
    },
    {
      question: "What is included in your SEO services package?",
      answer:
        "Our comprehensive SEO packages include: technical SEO audits and fixes, on-page optimization (title tags, meta descriptions, content optimization), off-page link building from high-authority sites, comprehensive keyword research and strategy, content creation and optimization, local SEO optimization (Google My Business, citations), monthly performance reporting, and ongoing strategy adjustments based on results.",
    },
    {
      question: "Do you offer local SEO optimization for businesses in Huntsville, Alabama?",
      answer:
        "Yes, we specialize in local SEO optimization for businesses in Huntsville, Alabama and surrounding areas. Our local SEO services include Google My Business optimization, local citation building, location-based keyword targeting, local content creation, review management, and ensuring your business appears in local map results. We understand the Huntsville market and can help you dominate local search results.",
    },
    {
      question: "How do you measure the success of an SEO campaign?",
      answer:
        "We track multiple KPIs to measure SEO success: organic traffic growth, keyword ranking improvements, local search visibility, conversion rates from organic traffic, lead quality and quantity, click-through rates, page load speeds, and most importantly - revenue generated from SEO efforts. You'll receive detailed monthly reports showing progress on all key metrics with actionable insights for continued improvement.",
    },
  ]

  const testimonials = [
    {
      text: "Our organic traffic increased by 300% in 6 months. MH Digital's SEO expertise helped us dominate local search results and generate 5x more qualified leads.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Local Restaurant Chain",
      rating: 5,
    },
    {
      text: "As an enterprise client, we needed scalable SEO across multiple locations. MH Digital delivered exceptional results with a 500% increase in organic visibility.",
      name: "Michael Chen",
      position: "VP of Marketing",
      company: "Tech Startup",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-1">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white border-0">
                  🚀 #1 SEO Services
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Comprehensive SEO Services
                  </span>
                  <br />
                  <span className="text-white">for Digital Growth</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  Boosting visibility for businesses from local startups to global enterprises with proven SEO
                  strategies that drive measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get a Free SEO Audit
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-full bg-transparent"
                  >
                    View Success Stories
                  </Button>
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/seo-analytics-optimized.webp"
                    alt="SEO Services - Search Engine Optimization"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* What is SEO Section */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-2">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">What is SEO and How Can It</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Benefit Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Search Engine Optimization (SEO) is the practice of optimizing your website to rank higher in search
                engine results, driving more organic traffic and qualified leads to your business.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Search,
                    title: "Increased Visibility",
                    description: "Get found by customers actively searching for your services",
                  },
                  {
                    icon: TrendingUp,
                    title: "Higher Quality Traffic",
                    description: "Attract visitors who are more likely to convert into customers",
                  },
                  {
                    icon: BarChart3,
                    title: "Measurable ROI",
                    description: "Track and measure the direct impact on your business growth",
                  },
                ].map((benefit, index) => (
                  <Card key={index} className="glass-card border-0 text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our SEO Process */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-3">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Our Proven</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  SEO Process for Measurable Results
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our transparent, step-by-step methodology ensures consistent results and builds long-term success
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Comprehensive SEO Audit",
                    description:
                      "We analyze your website's current performance, identify opportunities, and create a custom strategy.",
                    color: "from-purple-600 to-pink-600",
                  },
                  {
                    step: "02",
                    title: "Keyword Research & Strategy",
                    description: "Identify high-value keywords that your target audience is searching for.",
                    color: "from-pink-600 to-orange-500",
                  },
                  {
                    step: "03",
                    title: "Technical Optimization",
                    description:
                      "Fix technical issues that prevent search engines from properly crawling and indexing your site.",
                    color: "from-orange-500 to-red-500",
                  },
                  {
                    step: "04",
                    title: "Content Optimization",
                    description: "Create and optimize content that ranks well and converts visitors into customers.",
                    color: "from-red-500 to-purple-600",
                  },
                  {
                    step: "05",
                    title: "Monitoring & Reporting",
                    description: "Track progress with detailed reports and continuous optimization for better results.",
                    color: "from-purple-600 to-pink-600",
                  },
                ].map((phase, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="flex items-start space-x-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-2xl font-bold text-white">{phase.step}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                        <p className="text-gray-400">{phase.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Core SEO Solutions */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-4">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Our Core</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  SEO Solutions Include:
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Technical SEO",
                  description: "Website speed optimization, mobile responsiveness, and technical fixes",
                  features: ["Site speed optimization", "Mobile-first indexing", "Schema markup", "XML sitemaps"],
                },
                {
                  icon: Target,
                  title: "Local SEO",
                  description: "Dominate local search results and attract nearby customers",
                  features: [
                    "Google My Business optimization",
                    "Local citations",
                    "Review management",
                    "Local content",
                  ],
                },
                {
                  icon: Globe,
                  title: "National SEO",
                  description: "Scale your visibility across broader markets and regions",
                  features: ["National keyword targeting", "Content marketing", "Link building", "Competitor analysis"],
                },
                {
                  icon: BarChart3,
                  title: "SEO Analytics",
                  description: "Data-driven insights to track and improve your SEO performance",
                  features: ["Performance tracking", "ROI reporting", "Keyword monitoring", "Traffic analysis"],
                },
                {
                  icon: TrendingUp,
                  title: "Content SEO",
                  description: "Create and optimize content that ranks and converts",
                  features: ["Content strategy", "Blog optimization", "Keyword integration", "User intent matching"],
                },
                {
                  icon: Users,
                  title: "E-commerce SEO",
                  description: "Specialized SEO strategies for online stores and product pages",
                  features: [
                    "Product page optimization",
                    "Category structure",
                    "Shopping feed optimization",
                    "Conversion tracking",
                  ],
                },
              ].map((service, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`service-card-${(index % 6) + 1} border-0 hover-lift`}>
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-400 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Solutions for Different Business Sizes */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  SEO Tailored for Your Business Size
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Small & Local Businesses */}
              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">For Small & Local Businesses: SEO on a Budget</h3>
                  <p className="text-gray-400 mb-6">
                    Cost-effective SEO solutions designed for local businesses looking to dominate their local market
                    without breaking the bank.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Local keyword optimization",
                      "Google My Business setup & optimization",
                      "Local citation building",
                      "Review management strategy",
                      "Mobile-first optimization",
                      "Basic technical SEO fixes",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600">
                    View Local SEO Packages
                  </Button>
                </CardContent>
              </Card>

              {/* Mid-Market & Enterprise */}
              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    For Mid-Market & Enterprise: Scalable SEO Strategies
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Comprehensive SEO solutions for larger businesses with complex needs, multiple locations, and
                    advanced analytics requirements.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Multi-location SEO management",
                      "Enterprise-level keyword research",
                      "Advanced technical SEO audits",
                      "Custom analytics & reporting",
                      "Dedicated SEO team",
                      "ROI tracking at scale",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    View Enterprise SEO Solutions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* FAQ Section */}
      <FAQ title="SEO Services FAQ" subtitle="Common questions about our SEO services" faqs={faqs} />

      {/* Final CTA */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-1">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Ready to Transform Your</span>{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    SEO Strategy?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get your free SEO audit and discover exactly how we can help you dominate search results and grow your
                  business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button text-lg px-8 py-4"
                  >
                    Get a Free SEO Consultation
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-full px-8 bg-transparent"
                  >
                    View Our SEO Packages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
