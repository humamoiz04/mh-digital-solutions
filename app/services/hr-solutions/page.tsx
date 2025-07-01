"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import ScrollAnimation from "@/components/scroll-animation"
import FAQ from "@/components/faq"

export default function HRSolutionsPage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const faqs = [
    {
      question: "What HR processes can you automate?",
      answer:
        "We can automate recruitment workflows, employee onboarding, time tracking, performance reviews, leave management, payroll processing, and compliance reporting. Our solutions integrate with existing HR systems for seamless operations.",
    },
    {
      question: "How long does HR system implementation take?",
      answer:
        "Implementation typically takes 4-8 weeks depending on complexity. This includes system setup, data migration, staff training, and testing. We provide full support throughout the process.",
    },
    {
      question: "Is employee data secure with your HR solutions?",
      answer:
        "Yes, we implement enterprise-grade security including data encryption, secure access controls, GDPR compliance, and regular security audits. Employee data privacy and security are our top priorities.",
    },
    {
      question: "Can you integrate with our existing HR software?",
      answer:
        "Our HR solutions integrate with most major HR platforms including BambooHR, Workday, ADP, and custom systems. We use APIs and secure data connections for seamless integration.",
    },
    {
      question: "What ROI can we expect from HR automation?",
      answer:
        "Most clients see 40-60% reduction in HR administrative time, 50% faster hiring processes, and improved employee satisfaction. ROI typically ranges from 200-400% within the first year.",
    },
  ]

  const caseStudies = [
    {
      client: "Tech Startup - Austin, TX",
      challenge: "Manual HR processes causing delays in hiring and employee management",
      solution: "Implemented automated recruitment system with AI-powered candidate screening and digital onboarding",
      results: "50% faster hiring process, 80% reduction in paperwork, improved candidate experience",
      timeframe: "6 weeks",
      image: "/images/hr-management-illustration.webp",
    },
    {
      client: "Manufacturing Company - Detroit, MI",
      challenge: "Complex time tracking and compliance reporting across multiple locations",
      solution: "Digital time tracking system with automated compliance reporting and performance analytics",
      results: "90% reduction in time tracking errors, automated compliance reports, 30% improvement in productivity",
      timeframe: "8 weeks",
      image: "/images/team-collaboration-online.webp",
    },
  ]

  const hrFeatures = [
    {
      title: "Recruitment & Onboarding",
      description: "Streamline your hiring process with automated workflows",
      image: "/images/hr-management-illustration.webp",
      benefits: ["50% faster hiring", "Automated screening", "Digital onboarding", "Candidate tracking"],
    },
    {
      title: "Employee Management",
      description: "Centralized employee data with self-service portals",
      image: "/images/team-collaboration-online.webp",
      benefits: ["Centralized database", "Self-service access", "Document management", "Performance tracking"],
    },
    {
      title: "Time & Attendance",
      description: "Automated time tracking and attendance management",
      image: "/images/digital-marketing-workspace.webp",
      benefits: ["Digital time tracking", "Automated reports", "Leave management", "Compliance tracking"],
    },
  ]

  const hrPackages = [
    {
      name: "HR Starter",
      description: "Perfect for small teams",
      features: [
        "Up to 25 employees",
        "Basic HR tools",
        "Time tracking",
        "Employee database",
        "Email support",
        "3 months support",
      ],
      popular: false,
      cta: "Start HR Automation",
      offer: "FREE HR audit ($500 value)",
    },
    {
      name: "HR Professional",
      description: "Ideal for growing companies",
      features: [
        "Up to 100 employees",
        "Advanced HR features",
        "Performance management",
        "Automated workflows",
        "Priority support",
        "6 months support",
      ],
      popular: true,
      cta: "Scale HR Operations",
      offer: "FREE system integration ($1000 value)",
    },
    {
      name: "HR Enterprise",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Full HR suite",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support",
        "12 months support",
      ],
      popular: false,
      cta: "Transform HR",
      offer: "FREE custom development ($2000 value)",
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white border-0 mb-6">
                👥 HR Solutions
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  Smart HR Management
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">That Scales With You</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Streamline your human resources with intelligent automation, digital workflows, and data-driven insights
                that improve employee experience and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                  aria-label="Get HR automation consultation"
                >
                  Get HR Assessment
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white rounded-full transition-all duration-300"
                  aria-label="View HR automation case studies"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Case Studies Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">HR Automation</span>{" "}
                <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Real results from real businesses</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 hover-lift overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={`${study.client} HR automation case study results`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white">
                          {study.timeframe} Results
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{study.client}</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                          <p className="text-gray-600 dark:text-gray-400">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                          <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Results:</h4>
                          <p className="text-gray-600 dark:text-gray-400 font-medium">{study.results}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Interactive Features Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Comprehensive</span>{" "}
                <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  HR Solutions
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Feature Navigation */}
              <div className="space-y-4">
                {hrFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all border-0 ${
                      activeFeature === index
                        ? "bg-gradient-to-r from-[#4F46E5]/10 to-[#7C3AED]/10 border-l-4 border-l-[#4F46E5]"
                        : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-700/90"
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-[#4F46E5] mr-2" />
                            <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Feature Display */}
              <div>
                <Image
                  src={hrFeatures[activeFeature].image || "/placeholder.svg"}
                  alt={`${hrFeatures[activeFeature].title} - HR automation feature illustration`}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* HR Packages */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">HR Packages</span>{" "}
                <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  That Scale
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Choose the package that fits your team size</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {hrPackages.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.popular ? "border-2 border-[#4F46E5] scale-105 shadow-2xl" : "shadow-lg"} glass`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{plan.description}</p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
                      <p className="text-sm font-semibold text-green-700 dark:text-green-300">🎁 {plan.offer}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#4F46E5] mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://calendly.com/mhdigitalsolutionsus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:opacity-90 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
                      }`}
                      aria-label={`Get started with ${plan.name} HR package`}
                    >
                      {plan.cta}
                    </a>

                    <p className="text-xs text-center text-gray-500 mt-4">
                      No setup fees • Cancel anytime • 30-day money-back guarantee
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Need a custom HR solution for your unique business needs?
              </p>
              <a
                href="https://calendly.com/mhdigitalsolutionsus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white rounded-full transition-all duration-300"
                aria-label="Schedule custom HR consultation"
              >
                Get Custom HR Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <FAQ
        title="HR Solutions Questions Answered"
        subtitle="Everything you need to know about our HR automation services"
        faqs={faqs}
      />

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Ready to Transform</span>{" "}
                <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  Your HR Operations?
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's digitize your HR processes and create efficient workflows that improve employee experience and
                reduce administrative burden.
              </p>
              <a
                href="https://calendly.com/mhdigitalsolutionsus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 text-lg"
                aria-label="Get HR assessment worth $500"
              >
                Get HR Assessment ($500 Value)
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
