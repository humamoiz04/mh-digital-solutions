import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Settings,
  BarChart3,
  Monitor,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
  Star,
  Award,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import HubSpotForm from "@/components/hubspot-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Operational Services | Business Process Optimization | M&H Digital Solutions",
  description:
    "Optimize your business operations with comprehensive services that improve efficiency, reduce costs, and drive sustainable growth. Expert operational consulting for businesses of all sizes.",
  keywords:
    "operational services, business process optimization, efficiency improvement, cost reduction, workflow automation, performance management",
  alternates: {
    canonical: "https://www.mhdigitalsolutions.com/services/operational-services",
  },
}

const operationalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Operational Services",
  description: "Comprehensive operational services designed to streamline your business and maximize performance.",
  provider: {
    "@type": "Organization",
    name: "M&H Digital Solutions",
  },
  serviceType: "Operational Services",
  areaServed: "United States",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Operational Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Process Optimization",
          description: "Streamline business processes for maximum efficiency and cost reduction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance Management",
          description: "Implement systems to track, measure, and improve business performance",
        },
      },
    ],
  },
}

export default function OperationalServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(operationalSchema) }} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white border-0 mb-6">
                    ⚙️ Operational Excellence
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                      Streamline Operations,
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">Maximize Performance</span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    Comprehensive operational services that optimize your business processes, reduce costs, and drive
                    sustainable growth for small and medium-sized businesses.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://calendly.com/mhdigitalsolutionsus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="calendly-button pulse-animation"
                    >
                      Get Operations Audit
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full"
                    >
                      View Case Studies
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
                      <Award className="h-5 w-5 text-[#8B5CF6]" />
                      <span className="text-sm font-medium">35% Average Cost Reduction</span>
                    </div>
                  </div>
                </div>

                <ScrollAnimation animation="fadeInRight" delay={200}>
                  <div className="relative">
                    <Image
                      src="/images/business-process-optimization.png"
                      alt="Operational Services Dashboard"
                      width={600}
                      height={500}
                      className="rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/20 to-transparent rounded-2xl"></div>
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
                  If these operational challenges sound familiar, we can help...
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  <div className="text-center p-6 bg-transparent dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">🔄</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Inefficient Processes</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Manual tasks and outdated workflows that waste time and resources
                    </p>
                  </div>
                  <div className="text-center p-6 bg-transparent dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">📊</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">No Performance Visibility</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Can't measure what matters or identify improvement opportunities
                    </p>
                  </div>
                  <div className="text-center p-6 bg-transparent dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">💸</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Rising Operational Costs</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Expenses keep growing but efficiency and profits don't improve
                    </p>
                  </div>
                  <div className="text-center p-6 bg-transparent dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">🤯</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Team Overwhelm</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Staff spending too much time on repetitive tasks instead of growth activities
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
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                    Operational Excellence
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our proven 5-step process that transforms your operations for maximum efficiency
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-5 gap-8">
                  {[
                    {
                      step: "01",
                      icon: BarChart3,
                      title: "Operations Audit",
                      description: "Comprehensive analysis of your current processes, systems, and performance metrics",
                      color: "from-[#8B5CF6] to-[#F472B6]",
                    },
                    {
                      step: "02",
                      icon: Settings,
                      title: "Process Mapping",
                      description: "Document and visualize all workflows to identify bottlenecks and inefficiencies",
                      color: "from-[#F472B6] to-[#FF7600]",
                    },
                    {
                      step: "03",
                      icon: Zap,
                      title: "Optimization Design",
                      description: "Create streamlined processes and automation solutions for maximum efficiency",
                      color: "from-[#FF7600] to-[#00F5FF]",
                    },
                    {
                      step: "04",
                      icon: Monitor,
                      title: "Implementation",
                      description: "Deploy new systems and train your team on optimized workflows",
                      color: "from-[#00F5FF] to-[#8B5CF6]",
                    },
                    {
                      step: "05",
                      icon: TrendingUp,
                      title: "Performance Tracking",
                      description: "Monitor results and continuously improve operations for sustained growth",
                      color: "from-[#8B5CF6] to-[#F472B6]",
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
                  <span className="text-gray-900 dark:text-white">Comprehensive</span>{" "}
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                    Operational Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  End-to-end operational services designed to optimize every aspect of your business
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Settings,
                    title: "Process Optimization",
                    description:
                      "Streamline your business processes to eliminate waste, reduce costs, and improve efficiency across all departments",
                    features: [
                      "Workflow analysis and redesign",
                      "Automation implementation",
                      "Standard operating procedures",
                      "Quality control systems",
                      "Resource allocation optimization",
                      "Bottleneck identification and resolution",
                    ],
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Management",
                    description:
                      "Implement comprehensive systems to track, measure, and improve your business performance",
                    features: [
                      "KPI dashboard development",
                      "Performance benchmarking",
                      "Real-time reporting systems",
                      "Goal setting and tracking",
                      "Performance review processes",
                      "Continuous improvement programs",
                    ],
                  },
                  {
                    icon: Monitor,
                    title: "Technology Integration",
                    description:
                      "Leverage technology to automate processes, improve communication, and enhance operational efficiency",
                    features: [
                      "Business software selection",
                      "System integration planning",
                      "Workflow automation tools",
                      "Data management systems",
                      "Communication platforms",
                      "Training and support",
                    ],
                  },
                  {
                    icon: Users,
                    title: "Team Optimization",
                    description:
                      "Optimize your team structure and processes to maximize productivity and employee satisfaction",
                    features: [
                      "Role definition and clarity",
                      "Team structure optimization",
                      "Communication improvement",
                      "Skill development planning",
                      "Productivity enhancement",
                      "Change management support",
                    ],
                  },
                ].map((service, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="border-0 hover-lift shadow-lg">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] rounded-lg flex items-center justify-center mb-6">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-[#8B5CF6] mr-3 mt-0.5 flex-shrink-0" />
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
                <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white border-0 mb-6">
                  ⭐ Client Success Story
                </Badge>

                <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-relaxed">
                  "M&H's operational optimization{" "}
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                    reduced our costs by 45%
                  </span>{" "}
                  while improving productivity by 60% in just 4 months."
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">RK</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Robert Kim</div>
                    <div className="text-gray-600 dark:text-gray-400">Operations Director, TechFlow Solutions</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent mb-2">
                      45%
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent mb-2">
                      60%
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Productivity Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent mb-2">
                      4 Months
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
                  <span className="text-gray-900 dark:text-white">Operational Services That</span>{" "}
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                    Deliver Results
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Flexible operational solutions tailored to your business size and needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "Operations Audit",
                    price: "$1,997",
                    period: "one-time",
                    description: "Perfect for identifying operational improvement opportunities",
                    badge: "Quick Assessment",
                    features: [
                      "Comprehensive operations review",
                      "Process mapping",
                      "Efficiency analysis",
                      "Cost reduction opportunities",
                      "Detailed improvement plan",
                      "30-day follow-up consultation",
                    ],
                    popular: false,
                    cta: "Get Operations Audit",
                  },
                  {
                    name: "Process Optimization",
                    price: "$3,997",
                    period: "/month",
                    description: "Comprehensive operational improvement for growing businesses",
                    badge: "Most Popular",
                    features: [
                      "Full operations audit",
                      "Process redesign",
                      "Automation implementation",
                      "Performance tracking setup",
                      "Team training",
                      "Weekly optimization calls",
                      "Monthly progress reports",
                      "3-month minimum engagement",
                    ],
                    popular: true,
                    cta: "Optimize Operations",
                  },
                  {
                    name: "Operational Excellence",
                    price: "$7,997",
                    period: "/month",
                    description: "Complete operational transformation for established businesses",
                    badge: "Maximum Impact",
                    features: [
                      "Everything in Process Optimization",
                      "Advanced automation systems",
                      "Custom dashboard development",
                      "Change management support",
                      "Executive reporting",
                      "Dedicated operations consultant",
                      "On-site quarterly reviews",
                      "6-month minimum engagement",
                    ],
                    popular: false,
                    cta: "Achieve Excellence",
                  },
                ].map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative ${plan.popular ? "border-2 border-[#8B5CF6] scale-105 shadow-2xl" : "shadow-lg"}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white px-4 py-1">
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
                            <CheckCircle className="h-5 w-5 text-[#8B5CF6] mr-3 mt-0.5 flex-shrink-0" />
                            <span className={feature.includes("Everything in") ? "font-semibold" : ""}>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full ${plan.popular ? "bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] hover:opacity-90" : ""}`}
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
                  Need a custom operational solution? We create tailored approaches for unique business needs.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
                >
                  Request Custom Solution
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
                  <span className="text-gray-900 dark:text-white">Operational Questions</span>{" "}
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                    Answered
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Everything you need to know about our operational services
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  {
                    question: "How quickly will I see improvements in my operations?",
                    answer:
                      "Most clients see initial improvements within 2-4 weeks as we implement quick wins identified during our audit. Significant operational improvements typically occur within 60-90 days as new processes are fully implemented and optimized. Long-term efficiency gains continue to compound over 6-12 months as systems mature and teams adapt to new workflows.",
                  },
                  {
                    question: "Will operational changes disrupt my current business?",
                    answer:
                      "We design our implementation approach to minimize disruption to your daily operations. We typically implement changes in phases, starting with low-risk improvements and gradually introducing more significant changes. Our team works closely with yours to ensure smooth transitions, and we provide comprehensive training to help your team adapt to new processes.",
                  },
                  {
                    question: "What types of businesses benefit most from operational services?",
                    answer:
                      "Any business with repetitive processes, growing teams, or increasing operational complexity can benefit significantly. We've helped manufacturing companies, service businesses, professional firms, e-commerce stores, and technology companies. The key indicators are: manual processes that could be automated, unclear workflows, rising costs without proportional growth, or team members spending too much time on administrative tasks.",
                  },
                  {
                    question: "How do you measure the success of operational improvements?",
                    answer:
                      "We establish clear metrics before starting any project, including cost reduction targets, efficiency improvements, time savings, and quality metrics. We track these KPIs throughout the engagement and provide regular reports showing progress. Common success metrics include: reduced processing time, lower operational costs, improved quality scores, increased employee productivity, and better customer satisfaction.",
                  },
                  {
                    question: "Do you provide ongoing support after implementation?",
                    answer:
                      "Yes, we believe operational excellence requires ongoing attention. All our packages include follow-up support to ensure changes stick and continue delivering results. We provide training for your team, documentation of new processes, and regular check-ins to identify additional optimization opportunities. Many clients continue with our monthly optimization services to maintain momentum and drive continuous improvement.",
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-[#F472B6]/10 to-[#FF7600]/10"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                    <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                      Optimize
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">Your Operations?</span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Get a free operational audit and discover how we can streamline your processes, reduce costs, and
                    improve efficiency.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="glass p-8 rounded-2xl">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Schedule Your Free Operations Audit
                      </h3>
                      <HubSpotForm />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="space-y-4 text-left">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What You'll Get:</h3>
                        {[
                          "60-minute operations assessment",
                          "Process efficiency analysis",
                          "Cost reduction opportunities",
                          "Automation recommendations",
                          "Implementation roadmap",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-[#8B5CF6] mr-3" />
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </div>
                        ))}
                        <div className="pt-4">
                          <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white border-0">
                            $1,200 Value - Yours Free
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
