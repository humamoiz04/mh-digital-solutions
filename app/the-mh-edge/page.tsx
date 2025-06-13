import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Target, Users, Award, CheckCircle } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"

export default function TheMHEdgePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Badge className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] text-white border-0 mb-6">
              ⚡ The MH Edge
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">What Makes Us</span>
              <br />
              <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                Different
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the unique advantages that set M&H Digital Solutions apart and why leading businesses choose us
              for their digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/mhdigitalsolutionsus"
                target="_blank"
                rel="noopener noreferrer"
                className="calendly-button pulse-animation"
              >
                Experience The Difference
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
          </div>
        </section>
      </ScrollAnimation>

      {/* Core Advantages */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Competitive Edge
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                The key differentiators that drive exceptional results for our clients
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] bg-clip-text text-transparent">
                    Data-Driven Decision Making
                  </span>
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Every strategy, every campaign, and every optimization is backed by comprehensive data analysis and
                  real-time performance metrics.
                </p>
                <div className="space-y-4">
                  {[
                    "Advanced analytics and reporting",
                    "Real-time performance monitoring",
                    "Predictive modeling and forecasting",
                    "ROI-focused optimization",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#FF7600] mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/analytics-growth.webp"
                    alt="Data Analytics"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FF7600]/20 to-transparent rounded-2xl"></div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fadeInLeft">
                <div className="relative order-2 lg:order-1">
                  <Image
                    src="/images/roi-strategy.webp"
                    alt="ROI Strategy"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/20 to-transparent rounded-2xl"></div>
                </div>
              </ScrollAnimation>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                    Proven ROI Methodology
                  </span>
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Our systematic approach ensures every dollar invested delivers measurable returns and sustainable
                  business growth.
                </p>
                <div className="space-y-4">
                  {[
                    "250% average ROI across all projects",
                    "Transparent cost-benefit analysis",
                    "Performance-based optimization",
                    "Continuous improvement cycles",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#8B5CF6] mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Unique Value Propositions */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Why Choose</span>{" "}
                <span className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent">
                  M&H Digital
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                The unique advantages that make us the preferred choice for digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Lightning-Fast Delivery",
                  description: "Rapid implementation without compromising quality",
                  metric: "50% Faster",
                  color: "from-[#FF7600] to-[#F472B6]",
                },
                {
                  icon: Target,
                  title: "Precision Targeting",
                  description: "Laser-focused strategies that hit the mark every time",
                  metric: "98% Accuracy",
                  color: "from-[#F472B6] to-[#8B5CF6]",
                },
                {
                  icon: Users,
                  title: "Dedicated Team",
                  description: "Expert professionals committed to your success",
                  metric: "24/7 Support",
                  color: "from-[#8B5CF6] to-[#00F5FF]",
                },
                {
                  icon: Award,
                  title: "Industry Recognition",
                  description: "Award-winning solutions and certified expertise",
                  metric: "Top 1% Agency",
                  color: "from-[#00F5FF] to-[#FF7600]",
                },
              ].map((advantage, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`service-card-${(index % 4) + 1} border-0 hover-lift text-center`}>
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                      >
                        <advantage.icon className="h-8 w-8 text-white" />
                      </div>
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent mb-2`}
                      >
                        {advantage.metric}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{advantage.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{advantage.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Process Excellence */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Excellence Framework
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                The systematic approach that ensures consistent, exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Discovery",
                  title: "Deep Understanding",
                  description:
                    "We invest time to truly understand your business, challenges, and goals before proposing solutions.",
                  features: ["Comprehensive business analysis", "Stakeholder interviews", "Market research"],
                },
                {
                  phase: "Strategy",
                  title: "Custom Solutions",
                  description: "Every solution is tailored specifically to your unique needs and business objectives.",
                  features: ["Bespoke strategy development", "Technology selection", "Implementation planning"],
                },
                {
                  phase: "Execution",
                  title: "Flawless Implementation",
                  description: "Meticulous execution with continuous monitoring and optimization for maximum impact.",
                  features: ["Agile implementation", "Quality assurance", "Performance optimization"],
                },
              ].map((phase, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 hover-lift">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white border-0">
                          {phase.phase}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">{phase.description}</p>
                      <ul className="space-y-2">
                        {phase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-[#8B5CF6] mr-2 flex-shrink-0" />
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

      {/* Success Metrics */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Proven</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                  Track Record
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Numbers that speak for themselves</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "500+", label: "Projects Delivered", description: "Successful implementations" },
                { metric: "98%", label: "Client Satisfaction", description: "Happy customers" },
                { metric: "250%", label: "Average ROI", description: "Return on investment" },
                { metric: "24/7", label: "Support Available", description: "Always here for you" },
              ].map((stat, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                        {stat.metric}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Client Testimonials */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">What Our</span>{" "}
                <span className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Real feedback from real businesses</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  company: "TechStart Inc.",
                  text: "The MH Edge is real. Their data-driven approach increased our revenue by 300% in just 6 months. The team's expertise and dedication are unmatched.",
                  color: "from-[#FF7600] to-[#F472B6]",
                },
                {
                  name: "Michael Chen",
                  company: "GrowthCorp",
                  text: "What sets M&H apart is their commitment to ROI. Every recommendation is backed by data, and the results speak for themselves. 450% ROI in our first year.",
                  color: "from-[#8B5CF6] to-[#00F5FF]",
                },
                {
                  name: "Emily Rodriguez",
                  company: "BrandForward",
                  text: "The strategic thinking and execution quality is exceptional. They don't just deliver projects; they deliver transformational business outcomes.",
                  color: "from-[#F472B6] to-[#8B5CF6]",
                },
              ].map((testimonial, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 hover-lift">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 bg-gradient-to-r from-[#FF7600] to-[#F472B6] rounded-full mr-1"
                          ></div>
                        ))}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center mr-4`}
                        >
                          <span className="text-white font-bold">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</div>
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

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7600]/10 via-[#F472B6]/10 to-[#8B5CF6]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to Experience</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    The MH Edge?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of successful businesses that have transformed their operations with our proven
                  methodology and expertise
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Schedule Strategy Session
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full"
                  >
                    Download Case Studies
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
