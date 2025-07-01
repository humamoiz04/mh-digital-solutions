import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Briefcase, LineChart, Users, Target, CheckCircle, BarChart3, Brain } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"

export default function BusinessConsultingPage() {
  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in a wide range of industries including technology, healthcare, finance, retail, manufacturing, and professional services. Our consultants have diverse backgrounds and expertise, allowing us to provide valuable insights regardless of your industry.",
    },
    {
      question: "How long does a typical business consulting project take?",
      answer:
        "Project timelines vary based on scope and complexity. Strategic planning typically takes 4-8 weeks, operational improvement projects 2-6 months, and full business transformations 6-12 months. We'll provide a detailed timeline after understanding your specific needs.",
    },
    {
      question: "What is your consulting approach?",
      answer:
        "Our approach combines data-driven analysis with practical experience. We start with a thorough assessment of your current situation, develop strategic recommendations based on best practices and industry benchmarks, create implementation plans, and provide ongoing support to ensure sustainable results.",
    },
    {
      question: "Do you offer implementation support or just recommendations?",
      answer:
        "We provide end-to-end support, from initial strategy development through implementation and beyond. Unlike some consulting firms that deliver recommendations and leave, we partner with you to implement solutions, measure results, and make adjustments as needed.",
    },
    {
      question: "How do you measure the success of your consulting engagements?",
      answer:
        "We establish clear, measurable objectives at the beginning of each engagement and track progress throughout. These typically include financial metrics (revenue growth, cost reduction, profitability), operational improvements, and other key performance indicators specific to your business goals.",
    },
  ]

  const testimonials = [
    {
      text: "The strategic planning session with MH Digital Solutions transformed our business direction. Their market analysis and growth strategy helped us increase revenue by 45% in just one year.",
      name: "Jennifer Roberts",
      position: "CEO",
      company: "Dynamic Ventures",
      rating: 5,
    },
    {
      text: "Their process optimization recommendations reduced our operational costs by 30% while improving customer satisfaction. They truly understand how to balance efficiency with quality.",
      name: "Robert Chen",
      position: "Operations Director",
      company: "Precision Manufacturing",
      rating: 5,
    },
    {
      text: "MH Digital Solutions provided invaluable guidance during our digital transformation. Their expertise in both business strategy and technology implementation was exactly what we needed.",
      name: "Emily Thompson",
      position: "CIO",
      company: "Healthcare Innovators",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white border-0">
                  🚀 Strategic Business Consulting
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Transform Your Business
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Drive Sustainable Growth</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Strategic consulting solutions to overcome challenges, optimize operations, and accelerate growth for
                  businesses of all sizes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Schedule Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full"
                  >
                    View Case Studies
                  </Button>
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/business-planning.webp"
                    alt="Business Consulting Services"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Competitor Comparison */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Consulting</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Firm Comparison
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See why businesses choose our consulting approach over traditional firms
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Competitor 1 */}
              <Card className="glass-card border-0 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold">E1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">E1Sol</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Consulting Rate:</span>
                      <span className="font-bold">$250/hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Project Duration:</span>
                      <span>6-12 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Implementation:</span>
                      <span>Recommendations only</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ongoing Support:</span>
                      <span>❌</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" disabled>
                    Their Package
                  </Button>
                </CardContent>
              </Card>

              {/* MH Digital (Center - Featured) */}
              <Card className="glass-card border-2 border-purple-500 scale-105 hover-lift">
                <CardContent className="p-8 text-center relative">
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Best Value
                  </Badge>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold">MH</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    MH Digital
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Consulting Rate:</span>
                      <span className="font-bold text-green-600">$150/hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Project Duration:</span>
                      <span className="text-green-600">2-6 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Implementation:</span>
                      <span className="text-green-600">Full support</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ongoing Support:</span>
                      <span className="text-green-600">✅</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">Check Pricing</Button>
                </CardContent>
              </Card>

              {/* Competitor 2 */}
              <Card className="glass-card border-0 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold">TD</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Thomas Digital</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Consulting Rate:</span>
                      <span className="font-bold">$300/hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Project Duration:</span>
                      <span>8-18 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Implementation:</span>
                      <span>Limited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ongoing Support:</span>
                      <span>Extra cost</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" disabled>
                    Their Package
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Offered */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our Business Consulting</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive consulting services that address your most critical business challenges and opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Strategic Planning",
                  description:
                    "Develop clear, actionable business strategies that align with your vision and drive sustainable growth",
                  features: [
                    "Market opportunity analysis",
                    "Competitive positioning",
                    "Growth strategy development",
                    "Long-term vision planning",
                    "Strategic roadmapping",
                  ],
                  color: "from-purple-600 to-pink-600",
                },
                {
                  icon: LineChart,
                  title: "Business Process Optimization",
                  description:
                    "Streamline operations, reduce costs, and improve efficiency with our process improvement expertise",
                  features: [
                    "Workflow analysis",
                    "Process redesign",
                    "Efficiency improvement",
                    "Cost reduction",
                    "Quality enhancement",
                  ],
                  color: "from-pink-600 to-orange-500",
                },
                {
                  icon: BarChart3,
                  title: "Performance Analytics",
                  description:
                    "Data-driven insights and performance measurement systems to drive better business decisions",
                  features: [
                    "KPI development",
                    "Performance dashboards",
                    "Data analysis",
                    "Actionable insights",
                    "Decision support",
                  ],
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: Users,
                  title: "Organizational Development",
                  description: "Build high-performing teams and organizational structures that drive success",
                  features: [
                    "Talent strategy",
                    "Leadership development",
                    "Team effectiveness",
                    "Organizational design",
                    "Culture transformation",
                  ],
                  color: "from-red-500 to-purple-600",
                },
                {
                  icon: Briefcase,
                  title: "Change Management",
                  description: "Successfully navigate complex business transformations with minimal disruption",
                  features: [
                    "Change readiness assessment",
                    "Stakeholder engagement",
                    "Communication planning",
                    "Training development",
                    "Implementation support",
                  ],
                  color: "from-purple-600 to-pink-600",
                },
                {
                  icon: Brain,
                  title: "Digital Strategy",
                  description:
                    "Leverage technology and digital solutions to transform your business and create competitive advantage",
                  features: [
                    "Digital transformation roadmap",
                    "Technology assessment",
                    "Digital capabilities development",
                    "Digital customer experience",
                    "Data strategy",
                  ],
                  color: "from-pink-600 to-orange-500",
                },
              ].map((service, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`service-card-${(index % 6) + 1} border-0 hover-lift`}>
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
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

      {/* Consulting Process */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our Consulting</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Approach
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven methodology that delivers tangible, sustainable results
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Discovery & Assessment",
                    description:
                      "We begin by thoroughly understanding your business challenges, goals, and current state through interviews, data analysis, and market research.",
                    color: "from-purple-600 to-pink-600",
                  },
                  {
                    step: "02",
                    title: "Strategy Development",
                    description:
                      "Based on our findings, we develop strategic recommendations, action plans, and implementation roadmaps tailored to your specific situation.",
                    color: "from-pink-600 to-orange-500",
                  },
                  {
                    step: "03",
                    title: "Implementation Support",
                    description:
                      "We work alongside your team to implement recommendations, providing guidance, tools, and expertise to ensure successful execution.",
                    color: "from-orange-500 to-red-500",
                  },
                  {
                    step: "04",
                    title: "Measurement & Refinement",
                    description:
                      "We establish key metrics to track progress, evaluate results, and make adjustments to optimize outcomes.",
                    color: "from-red-500 to-purple-600",
                  },
                  {
                    step: "05",
                    title: "Knowledge Transfer & Sustainability",
                    description:
                      "We ensure your team has the skills, knowledge, and tools to maintain and build upon improvements long after our engagement ends.",
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
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{phase.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Results That</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Drive Business Success
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real metrics from our business consulting engagements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "45%", label: "Average Revenue Growth", description: "Within first year" },
                { metric: "30%", label: "Cost Reduction", description: "Through process optimization" },
                { metric: "60%", label: "Productivity Improvement", description: "Through operational changes" },
                { metric: "87%", label: "Client Success Rate", description: "Meeting or exceeding targets" },
              ].map((result, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
                        {result.metric}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{result.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{result.description}</div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* FAQ Section */}
      <FAQ
        title="Business Consulting FAQ"
        subtitle="Common questions about our business consulting services"
        faqs={faqs}
      />

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Transform
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Your Business?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss your business challenges and create a strategic plan to achieve your goals
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Schedule Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full"
                  >
                    View Case Studies
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
