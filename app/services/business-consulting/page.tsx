import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, Users, Briefcase, ArrowRight, CheckCircle, BarChart, Star, Award } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import HubSpotForm from "@/components/hubspot-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Strategic Business Consulting Services | M&H Digital Solutions",
  description:
    "Transform your business strategy with expert consulting services that drive growth, optimize operations, and maximize profitability. Get strategic guidance for sustainable business success.",
  keywords:
    "business consulting, strategic planning, business growth, cost optimization, performance analytics, organizational development",
  alternates: {
    canonical: "https://www.mhdigitalsolutions.com/services/business-consulting",
  },
}

const consultingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Consulting Services",
  description:
    "Strategic business consulting services that drive growth, optimize operations, and maximize profitability.",
  provider: {
    "@type": "Organization",
    name: "M&H Digital Solutions",
  },
  serviceType: "Business Consulting",
  areaServed: "United States",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Plan Development",
          description: "Comprehensive business planning with clear objectives and actionable strategies",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cost Optimization",
          description: "Identify and eliminate inefficiencies while maximizing operational effectiveness",
        },
      },
    ],
  },
}

export default function BusinessConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(consultingSchema) }} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] text-white border-0 mb-6">
                    📊 Strategic Consulting
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                      Transform Your
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">Business Strategy</span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    Expert consulting services that drive growth, optimize operations, and maximize profitability for
                    small and medium-sized businesses.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://calendly.com/mhdigitalsolutionsus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="calendly-button pulse-animation"
                    >
                      Get Strategy Assessment
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-[#FF7600] text-[#FF7600] hover:bg-[#FF7600] hover:text-white rounded-full"
                    >
                      View Success Stories
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">4.9/5 Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-[#FF7600]" />
                      <span className="text-sm font-medium">250% Average ROI</span>
                    </div>
                  </div>
                </div>

                <ScrollAnimation animation="fadeInRight" delay={200}>
                  <div className="relative">
                    <Image
                      src="/images/business-process-optimization.png"
                      alt="Business Consulting Services"
                      width={600}
                      height={500}
                      className="rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FF7600]/20 to-transparent rounded-2xl"></div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Is This You? Problem Section */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-red-600 dark:text-red-400">Is This You?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                  If these challenges sound familiar, our consulting services can help...
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">📉</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Stagnant Growth</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Your business has plateaued and you're struggling to find new growth opportunities
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">💸</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Profit Leakage</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Revenue is good but profits are disappointing due to inefficiencies
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">🧩</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Strategic Confusion</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Unclear direction and lack of actionable business planning
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">⏰</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Operational Bottlenecks</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Inefficient processes that waste time and resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Our Solution: Clear Path to Results */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Our Solution:</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Strategic Business Transformation
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our proven 4-step consulting process that delivers measurable results
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "01",
                      icon: Target,
                      title: "Discovery & Analysis",
                      description:
                        "Comprehensive assessment of your current business state, challenges, and opportunities",
                      color: "from-[#FF7600] to-[#8B5CF6]",
                    },
                    {
                      step: "02",
                      icon: Briefcase,
                      title: "Strategy Development",
                      description: "Custom strategic plan with clear objectives, timelines, and measurable outcomes",
                      color: "from-[#8B5CF6] to-[#F472B6]",
                    },
                    {
                      step: "03",
                      icon: TrendingUp,
                      title: "Implementation",
                      description: "Guided execution of strategies with ongoing support and course corrections",
                      color: "from-[#F472B6] to-[#FF7600]",
                    },
                    {
                      step: "04",
                      icon: BarChart,
                      title: "Optimization",
                      description: "Continuous monitoring, measurement, and refinement for sustained growth",
                      color: "from-[#FF7600] to-[#8B5CF6]",
                    },
                  ].map((phase, index) => (
                    <ScrollAnimation key={index} delay={index * 100}>
                      <div className="text-center">
                        <div
                          className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <phase.icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="text-sm font-bold text-gray-500 mb-2">STEP {phase.step}</div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{phase.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{phase.description}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Services Overview */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Strategic</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Business Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Comprehensive consulting services designed to optimize your business performance and accelerate growth
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Briefcase,
                    title: "Business Plan Development",
                    description:
                      "Comprehensive business planning that sets clear objectives and actionable strategies for sustainable growth",
                    features: [
                      "Market analysis and competitive research",
                      "Financial projections and modeling",
                      "Strategic roadmap development",
                      "Risk assessment and mitigation",
                      "Investor-ready documentation",
                      "Performance metrics and KPIs",
                    ],
                  },
                  {
                    icon: TrendingUp,
                    title: "Cost Optimization",
                    description:
                      "Identify and eliminate inefficiencies while maximizing operational effectiveness and profitability",
                    features: [
                      "Process efficiency analysis",
                      "Resource allocation optimization",
                      "Technology cost reduction",
                      "Vendor negotiation strategies",
                      "Workflow streamlining",
                      "ROI improvement initiatives",
                    ],
                  },
                  {
                    icon: BarChart,
                    title: "Performance Analytics",
                    description:
                      "Data-driven insights to measure, track, and improve your business performance across all metrics",
                    features: [
                      "KPI dashboard development",
                      "Performance benchmarking",
                      "Predictive analytics",
                      "Custom reporting solutions",
                      "Business intelligence tools",
                      "Decision support systems",
                    ],
                  },
                  {
                    icon: Users,
                    title: "Organizational Development",
                    description:
                      "Build high-performing teams and optimize organizational structure for maximum efficiency",
                    features: [
                      "Team structure optimization",
                      "Leadership development",
                      "Change management",
                      "Culture transformation",
                      "Skills gap analysis",
                      "Succession planning",
                    ],
                  },
                ].map((service, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="border-0 hover-lift shadow-lg">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] rounded-lg flex items-center justify-center mb-6">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-[#FF7600] mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
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

        {/* Service-Specific Social Proof */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] text-white border-0 mb-6">
                  ⭐ Client Success Story
                </Badge>

                <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-relaxed">
                  "M&H's strategic consulting helped us{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    increase revenue by 180%
                  </span>{" "}
                  while reducing operational costs by 40% in just 12 months."
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JT</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Jennifer Thompson</div>
                    <div className="text-gray-600 dark:text-gray-400">CEO, Innovative Solutions Inc.</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                      180%
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                      40%
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                      12 Months
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Implementation Time</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Pricing Packages */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Consulting Packages That</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Drive Results
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Flexible consulting solutions tailored to your business needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "Strategy Session",
                    price: "$2,997",
                    period: "one-time",
                    description: "Perfect for businesses needing strategic direction",
                    badge: "Quick Win",
                    features: [
                      "2-day intensive strategy session",
                      "Business assessment",
                      "SWOT analysis",
                      "90-day action plan",
                      "Implementation roadmap",
                      "30-day follow-up call",
                    ],
                    popular: false,
                    cta: "Book Strategy Session",
                  },
                  {
                    name: "Business Transformation",
                    price: "$4,997",
                    period: "/month",
                    description: "Comprehensive consulting for serious business growth",
                    badge: "Most Popular",
                    features: [
                      "Full business assessment",
                      "Custom strategic plan",
                      "Implementation support",
                      "Weekly strategy calls",
                      "Performance tracking",
                      "Process optimization",
                      "Team alignment",
                      "3-month minimum engagement",
                    ],
                    popular: true,
                    cta: "Start Transformation",
                  },
                  {
                    name: "Executive Advisory",
                    price: "$9,997",
                    period: "/month",
                    description: "Ongoing strategic guidance for established businesses",
                    badge: "Premium",
                    features: [
                      "Everything in Business Transformation",
                      "Dedicated consultant",
                      "On-site quarterly sessions",
                      "Board meeting participation",
                      "Crisis management support",
                      "Acquisition strategy",
                      "Executive coaching",
                      "6-month minimum engagement",
                    ],
                    popular: false,
                    cta: "Get Executive Support",
                  },
                ].map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative ${plan.popular ? "border-2 border-[#FF7600] scale-105 shadow-2xl" : "shadow-lg"}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] text-white px-4 py-1">
                          {plan.badge}
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <div className="mb-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.description}</p>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#FF7600] mr-3 mt-0.5 flex-shrink-0" />
                            <span className={feature.includes("Everything in") ? "font-semibold" : ""}>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full ${plan.popular ? "bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] hover:opacity-90" : ""}`}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Need a custom consulting solution? Contact us for a tailored approach.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#FF7600] text-[#FF7600] hover:bg-[#FF7600] hover:text-white"
                >
                  Request Custom Proposal
                </Button>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Service-Specific FAQ */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Consulting Questions</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Answered
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Everything you need to know about our business consulting services
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  {
                    question: "How quickly will I see results from your consulting services?",
                    answer:
                      "Most clients see initial improvements within 30-60 days as we implement quick wins identified during our assessment. Significant business transformation typically occurs over 3-6 months as we implement strategic changes. Long-term sustainable growth continues to build over 12+ months. We focus on both immediate improvements and long-term strategic advantages.",
                  },
                  {
                    question: "What industries do you specialize in?",
                    answer:
                      "We have extensive experience across multiple industries including technology, professional services, manufacturing, healthcare, retail, and e-commerce. Our consultants bring both broad business expertise and industry-specific knowledge. During our initial consultation, we'll determine if we have the right expertise for your specific industry challenges.",
                  },
                  {
                    question: "How involved will I need to be in the consulting process?",
                    answer:
                      "Your involvement is crucial for success. The initial assessment and strategy development phases require significant input from you and your leadership team. During implementation, we work collaboratively with your team while minimizing disruption to your day-to-day operations. We believe in teaching your team to fish, not just giving you fish, so knowledge transfer is a key part of our approach.",
                  },
                  {
                    question: "What's your approach to implementing recommendations?",
                    answer:
                      "Unlike many consultants who deliver recommendations and leave, we partner with you through implementation. We create detailed action plans with clear responsibilities, timelines, and metrics. Our consultants provide hands-on support, training, and accountability to ensure recommendations translate into real-world results. We adjust strategies based on feedback and changing conditions.",
                  },
                  {
                    question: "What ROI can I expect from your consulting services?",
                    answer:
                      "Our clients typically see a 250% return on their consulting investment within 12 months. This comes through revenue growth, cost reduction, improved operational efficiency, and better strategic decision-making. We establish clear metrics at the beginning of our engagement and track progress throughout. If we don't believe we can deliver significant ROI for your business, we'll tell you upfront.",
                  },
                ].map((faq, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Final CTA Section */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7600]/10 via-[#8B5CF6]/10 to-[#F472B6]/10"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                    <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                      Transform
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">Your Business Strategy?</span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Let our expert consultants help you develop and implement strategies that drive sustainable growth
                    and competitive advantage
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="glass p-8 rounded-2xl">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Schedule Your Free Strategy Session
                      </h3>
                      <HubSpotForm />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="space-y-4 text-left">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What You'll Get:</h3>
                        {[
                          "60-minute strategy consultation",
                          "Business assessment overview",
                          "Key opportunity identification",
                          "Strategic recommendations",
                          "Implementation roadmap",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-[#FF7600] mr-3" />
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </div>
                        ))}
                        <div className="pt-4">
                          <Badge className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] text-white border-0">
                            $1,500 Value - Yours Free
                          </Badge>
                        </div>
                      </div>
                    </div>
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
