import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  TrendingDown,
  BarChart3,
  Target,
  ArrowRight,
  CheckCircle,
  Calculator,
  PieChart,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import { Star } from "lucide-react"

export default function BusinessCostOptimizationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] text-white border-0 mb-6">
                  💰 Cost Optimization
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Cut Business Costs by 40%
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Increase Profits, Optimize Operations</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  We help small to medium businesses identify cost-saving opportunities and optimize business operations
                  to reduce expenses by up to 40% while maintaining quality and performance.
                </p>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-300 ml-2">4.9★ Rating</span>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-gray-600 dark:text-gray-300 font-semibold">$5M+ Saved for Clients</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button pulse-animation"
                  >
                    Get Cost Analysis
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#FF7600] text-[#FF7600] hover:bg-[#FF7600] hover:text-white rounded-full"
                  >
                    View Savings Report
                  </Button>
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/business-process-optimization.png"
                    alt="Business Cost Optimization"
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

      {/* Is This You? Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Is This</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">You?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Recognize any of these common business challenges?
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <Card className="glass border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Costs spiraling out of control
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    No visibility into where money goes
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Vendor contracts bleeding profits
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Inefficient processes wasting resources
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Cost Optimization Services */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Strategic</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                  Cost Reduction
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive cost analysis and optimization strategies that deliver immediate and long-term savings
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Calculator,
                  title: "Cost Analysis & Audit",
                  description: "Comprehensive analysis of all business expenses to identify saving opportunities",
                  features: [
                    "Detailed expense breakdown",
                    "Cost center analysis",
                    "Vendor cost comparison",
                    "ROI assessment",
                  ],
                  color: "from-[#FF7600] to-[#F472B6]",
                },
                {
                  icon: TrendingDown,
                  title: "Process Optimization",
                  description: "Streamline operations to eliminate waste and improve efficiency",
                  features: [
                    "Workflow automation",
                    "Resource optimization",
                    "Waste elimination",
                    "Efficiency improvements",
                  ],
                  color: "from-[#F472B6] to-[#8B5CF6]",
                },
                {
                  icon: DollarSign,
                  title: "Vendor Management",
                  description: "Optimize vendor relationships and negotiate better contracts",
                  features: [
                    "Vendor performance analysis",
                    "Contract renegotiation",
                    "Supplier consolidation",
                    "Cost benchmarking",
                  ],
                  color: "from-[#8B5CF6] to-[#00F5FF]",
                },
                {
                  icon: BarChart3,
                  title: "Technology Cost Reduction",
                  description: "Optimize technology spending and eliminate redundant systems",
                  features: [
                    "Software license optimization",
                    "Cloud cost management",
                    "System consolidation",
                    "Technology ROI analysis",
                  ],
                  color: "from-[#00F5FF] to-[#FF7600]",
                },
                {
                  icon: Target,
                  title: "Energy & Facilities",
                  description: "Reduce operational costs through energy and facility optimization",
                  features: [
                    "Energy usage analysis",
                    "Facility cost optimization",
                    "Utility management",
                    "Space utilization",
                  ],
                  color: "from-[#FF7600] to-[#8B5CF6]",
                },
                {
                  icon: PieChart,
                  title: "Financial Planning",
                  description: "Strategic financial planning to optimize cash flow and reduce costs",
                  features: [
                    "Budget optimization",
                    "Cash flow management",
                    "Financial forecasting",
                    "Cost control systems",
                  ],
                  color: "from-[#8B5CF6] to-[#F472B6]",
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
                            <CheckCircle className="h-4 w-4 text-[#FF7600] mr-2 flex-shrink-0" />
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

      {/* Our Solution Process */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                  Solution
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A step-by-step process to optimize your business costs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Cost Audit</div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Opportunity Analysis</div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Implementation</div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Monitoring</div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Continuous Optimization
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Cost Savings Process */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fadeInLeft">
                <div className="relative">
                  <Image
                    src="/images/roi-strategy.webp"
                    alt="Cost Optimization Process"
                    width={600}
                    height={500}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/20 to-transparent rounded-2xl"></div>
                </div>
              </ScrollAnimation>

              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Our</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Optimization Process
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  A systematic approach to identifying and implementing cost-saving opportunities
                </p>

                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Cost Assessment",
                      description: "Comprehensive analysis of current expenses and cost structures",
                    },
                    {
                      step: "02",
                      title: "Opportunity Identification",
                      description: "Identify specific areas for cost reduction and efficiency improvements",
                    },
                    {
                      step: "03",
                      title: "Strategy Development",
                      description: "Create detailed cost optimization strategies with clear timelines",
                    },
                    {
                      step: "04",
                      title: "Implementation & Monitoring",
                      description: "Execute strategies and continuously monitor savings performance",
                    },
                  ].map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{phase.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{phase.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Social Proof Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Real Results,</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                  Happy Clients
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Hear from businesses just like yours</p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
              <Card className="glass border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Rebecca Martinez from Regional Manufacturing
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    "Thanks to their cost optimization program, we achieved a 40% reduction in operational costs,
                    resulting in $500K annual savings."
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Cost Optimization Pricing */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Transparent</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                  Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Choose the plan that fits your needs</p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Cost Audit</div>
                  <div className="text-xl text-gray-600 dark:text-gray-400 mb-4">$1,997 one-time</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Comprehensive analysis of your current expenses
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Cost Optimization Program</div>
                  <div className="text-xl text-gray-600 dark:text-gray-400 mb-4">$3,997/mo</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Our most popular program</div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Enterprise Cost Management
                  </div>
                  <div className="text-xl text-gray-600 dark:text-gray-400 mb-4">$7,997/mo</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    For large organizations with complex needs
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Cost Savings Results */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Cost</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                  Savings Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Real savings achieved for our clients</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "40%", label: "Average Cost Reduction", description: "Typical savings achieved" },
                { metric: "$2.5M", label: "Total Savings", description: "Cumulative client savings" },
                { metric: "6 Months", label: "Payback Period", description: "Average ROI timeline" },
                { metric: "95%", label: "Success Rate", description: "Projects meeting targets" },
              ].map((result, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
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

      {/* Cost Optimization FAQ Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Frequently Asked</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to know</p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
              <Card className="glass border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    How long does it take to see results?
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Most clients see significant cost reductions within the first 3-6 months.
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    What types of businesses do you work with?
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    We specialize in helping small to medium-sized businesses across various industries.
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    How is your service different from other cost consultants?
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    We provide a comprehensive, data-driven approach with a focus on long-term sustainable savings.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7600]/10 via-[#8B5CF6]/10 to-[#F472B6]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Reduce
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Your Business Costs?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's identify cost-saving opportunities and implement strategies that improve your bottom line
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get Free Cost Analysis
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#FF7600] text-[#FF7600] hover:bg-[#FF7600] hover:text-white rounded-full"
                  >
                    View Savings Case Studies
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
