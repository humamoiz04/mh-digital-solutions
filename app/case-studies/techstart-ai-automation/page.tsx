import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, BarChart3, Target } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import FAQ from "@/components/faq"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TechStart Inc. | AI Automation Success Story - MH Digital Solutions",
  description:
    "Discover how MH Digital Solutions partnered with TechStart Inc. to reduce operational costs by 30% through custom AI solutions. Learn about our approach & measurable results.",
  keywords:
    "AI automation case study, enterprise AI solutions, operational cost reduction, business process automation, TechStart Inc success story",
  openGraph: {
    title: "TechStart Inc. AI Automation Success Story",
    description: "See how we helped TechStart Inc. reduce operational costs by 30% through custom AI solutions.",
    images: ["/images/case-study-techstart.webp"],
  },
}

export default function TechStartCaseStudyPage() {
  const faqs = [
    {
      question: "How did MH Digital Solutions tailor its approach for TechStart Inc.'s industry?",
      answer:
        "We conducted a comprehensive analysis of TechStart's SaaS operations, identifying key bottlenecks in customer support, data processing, and workflow management. Our AI solutions were specifically designed for their tech stack and integrated seamlessly with their existing systems.",
    },
    {
      question: "What was the timeframe for achieving these results?",
      answer:
        "The initial AI implementation took 3 months, with measurable results appearing within 6 weeks. The full 30% cost reduction was achieved over 6 months as the AI systems learned and optimized processes.",
    },
    {
      question: "What specific tools or technologies were used in this project?",
      answer:
        "We implemented custom machine learning models, integrated with their existing CRM, deployed chatbot automation using natural language processing, and created predictive analytics dashboards using Python, TensorFlow, and cloud-based AI services.",
    },
    {
      question: "Can MH Digital Solutions achieve similar results for a business of my size?",
      answer:
        "We scale our AI solutions based on business size and budget. Small businesses can start with basic automation (20-40% efficiency gains), while enterprises can implement comprehensive AI systems like TechStart's for maximum impact.",
    },
  ]

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            name: "TechStart Inc. AI Automation Success Story",
            description:
              "How MH Digital Solutions helped TechStart Inc. reduce operational costs by 30% through custom AI automation solutions.",
            author: {
              "@type": "Organization",
              name: "MH Digital Solutions",
            },
            datePublished: "2024-12-15",
            mainEntity: {
              "@type": "Organization",
              name: "TechStart Inc.",
            },
            result: [
              {
                "@type": "QuantitativeValue",
                name: "Cost Reduction",
                value: 30,
                unitText: "PERCENT",
              },
              {
                "@type": "QuantitativeValue",
                name: "Efficiency Improvement",
                value: 45,
                unitText: "PERCENT",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-1" id="main-content">
          <div className="container mx-auto container-mobile">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white border-0">
                📈 Case Study
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Case Study:</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  TechStart Inc.
                </span>
                <br />
                <span className="text-white">30% Cost Reduction Through AI Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we transformed TechStart Inc.'s operations with custom AI solutions, reducing costs by 30%
                and improving efficiency by 45% in just 6 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="calendly-button"
                  aria-label="Schedule a free consultation to discuss your AI automation needs"
                >
                  Get Similar Results
                  <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-full"
                >
                  View All Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Overview */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-2">
          <div className="container mx-auto container-mobile">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: DollarSign,
                  value: "30%",
                  label: "Cost Reduction",
                  description: "Operational costs decreased",
                  color: "text-green-400",
                },
                {
                  icon: TrendingUp,
                  value: "45%",
                  label: "Efficiency Gain",
                  description: "Process automation improvement",
                  color: "text-blue-400",
                },
                {
                  icon: Clock,
                  value: "6 Months",
                  label: "Implementation",
                  description: "From start to full results",
                  color: "text-purple-400",
                },
                {
                  icon: Users,
                  value: "200+",
                  label: "Employees Impacted",
                  description: "Staff productivity enhanced",
                  color: "text-pink-400",
                },
              ].map((stat, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass-card border-0 text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                      <h3 className="text-lg font-bold text-white mb-1">{stat.label}</h3>
                      <p className="text-gray-400 text-sm">{stat.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* The Challenge */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-3">
          <div className="container mx-auto container-mobile">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-white">The Challenge:</span>{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Understanding TechStart Inc.'s Pain Points
                  </span>
                </h2>
                <div className="space-y-6">
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-3">Manual Process Overload</h3>
                    <p className="text-gray-300">
                      TechStart Inc., a rapidly growing SaaS company with 200+ employees, was struggling with manual
                      customer support processes, data entry, and workflow management that consumed 60% of their team's
                      time.
                    </p>
                  </div>
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-3">Scaling Challenges</h3>
                    <p className="text-gray-300">
                      As their customer base grew from 1,000 to 10,000+ users, their support tickets increased by 400%,
                      but their response time suffered, leading to customer dissatisfaction and churn.
                    </p>
                  </div>
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-3">Inefficient Resource Allocation</h3>
                    <p className="text-gray-300">
                      High-skilled developers were spending time on repetitive tasks instead of innovation, resulting in
                      delayed product releases and increased operational costs.
                    </p>
                  </div>
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/business-operations.jpeg"
                    alt="TechStart Inc. business operations before AI automation implementation"
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

      {/* Our Strategic Approach */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-4">
          <div className="container mx-auto container-mobile">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Our Strategic Approach:</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Tailored Solutions by MH Digital Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We developed a comprehensive AI automation strategy specifically designed for TechStart's SaaS
                environment and growth trajectory.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Comprehensive Process Audit",
                    description:
                      "We analyzed TechStart's entire workflow, identifying 15 key processes that could benefit from automation, prioritizing by impact and implementation complexity.",
                    tools: ["Process mapping", "Time tracking analysis", "Bottleneck identification"],
                    color: "from-purple-600 to-pink-600",
                  },
                  {
                    step: "02",
                    title: "Custom AI Solution Design",
                    description:
                      "Developed tailored AI models for customer support automation, predictive analytics for resource allocation, and intelligent workflow management.",
                    tools: ["Machine learning models", "Natural language processing", "Predictive algorithms"],
                    color: "from-pink-600 to-orange-500",
                  },
                  {
                    step: "03",
                    title: "Seamless Integration",
                    description:
                      "Integrated AI solutions with TechStart's existing tech stack including Salesforce, Slack, and their proprietary SaaS platform without disrupting operations.",
                    tools: ["API development", "System integration", "Data migration"],
                    color: "from-orange-500 to-red-500",
                  },
                  {
                    step: "04",
                    title: "Team Training & Optimization",
                    description:
                      "Provided comprehensive training to TechStart's team and continuously optimized AI performance based on real-world usage data.",
                    tools: ["Staff training programs", "Performance monitoring", "Continuous optimization"],
                    color: "from-red-500 to-purple-600",
                  },
                ].map((phase, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="flex items-start space-x-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-2xl font-bold text-white">{phase.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                        <p className="text-gray-300 mb-4">{phase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.tools.map((tool, toolIndex) => (
                            <Badge
                              key={toolIndex}
                              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border border-purple-600/30"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Measurable Results */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-5">
          <div className="container mx-auto container-mobile">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Measurable Results:</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Quantifying Success
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hard numbers that demonstrate the transformative impact of our AI automation solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: DollarSign,
                  title: "30% Cost Reduction",
                  value: "$2.4M",
                  description: "Annual savings in operational costs",
                  details: "Reduced from $8M to $5.6M annually",
                },
                {
                  icon: Clock,
                  title: "75% Faster Response Time",
                  value: "2 Hours",
                  description: "Average customer support response",
                  details: "Improved from 8 hours to 2 hours",
                },
                {
                  icon: TrendingUp,
                  title: "45% Efficiency Increase",
                  value: "18 Hours",
                  description: "Weekly time saved per employee",
                  details: "From 40 hours to 22 hours of manual work",
                },
                {
                  icon: Users,
                  title: "90% Customer Satisfaction",
                  value: "4.8/5",
                  description: "Customer support rating",
                  details: "Improved from 3.2/5 to 4.8/5",
                },
                {
                  icon: BarChart3,
                  title: "400% Ticket Processing",
                  value: "12,000",
                  description: "Monthly tickets handled",
                  details: "Increased from 3,000 to 12,000 tickets",
                },
                {
                  icon: Target,
                  title: "60% Faster Development",
                  value: "2 Weeks",
                  description: "Average feature release cycle",
                  details: "Reduced from 5 weeks to 2 weeks",
                },
              ].map((result, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`service-card-${(index % 6) + 1} border-0 hover-lift`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <result.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{result.title}</h3>
                      <div className="text-3xl font-bold text-purple-400 mb-2">{result.value}</div>
                      <p className="text-gray-300 mb-2">{result.description}</p>
                      <p className="text-sm text-gray-400">{result.details}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            {/* Results Timeline */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Results Timeline</h3>
              <div className="space-y-6">
                {[
                  { month: "Month 1", achievement: "AI systems deployed and initial training completed" },
                  { month: "Month 2", achievement: "15% improvement in response times observed" },
                  { month: "Month 3", achievement: "25% cost reduction achieved through automation" },
                  { month: "Month 4", achievement: "Customer satisfaction scores improved by 40%" },
                  { month: "Month 5", achievement: "Full integration completed, 35% efficiency gains" },
                  { month: "Month 6", achievement: "Target 30% cost reduction exceeded, 45% efficiency gain" },
                ].map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <span className="font-bold text-purple-400">{milestone.month}:</span>{" "}
                      <span className="text-gray-300">{milestone.achievement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Client Testimonial */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-1">
          <div className="container mx-auto container-mobile">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-white">Client Testimonial &</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Future Outlook
                </span>
              </h2>

              <Card className="glass-card border-0 mb-12">
                <CardContent className="p-12 text-center">
                  <div className="text-6xl text-purple-400 mb-6" aria-hidden="true">
                    "
                  </div>
                  <blockquote className="text-xl text-gray-300 mb-8 italic leading-relaxed">
                    "MH Digital Solutions transformed our entire operation. The AI automation they implemented didn't
                    just save us money – it revolutionized how we work. Our team is now focused on innovation instead of
                    repetitive tasks, and our customers are happier than ever. The 30% cost reduction was just the
                    beginning; we're seeing compound benefits every month."
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">JS</span>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white">John Smith</div>
                      <div className="text-gray-400">CEO, TechStart Inc.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Future Collaboration</h3>
                <p className="text-gray-300">
                  TechStart Inc. has engaged us for Phase 2 of their AI transformation, focusing on predictive customer
                  analytics and automated marketing campaigns. They're projected to achieve an additional 20% efficiency
                  gain by Q2 2025.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <FAQ
        title="Frequently Asked Questions About This Case Study"
        subtitle="Get detailed insights into our approach and results"
        faqs={faqs}
      />

      {/* Final CTA */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-4">
          <div className="container mx-auto container-mobile">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Ready to Achieve</span>{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Similar Results?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can implement AI automation solutions tailored to your business needs and help
                  you achieve measurable cost reductions and efficiency gains.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button text-lg px-8 py-4"
                    aria-label="Schedule a free consultation to discuss your AI automation needs"
                  >
                    Schedule a Free Consultation
                    <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-full px-8"
                  >
                    Explore All Services
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
