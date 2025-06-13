import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Bot, Zap, TrendingUp, ArrowRight, CheckCircle, Clock, DollarSign, Star } from "lucide-react"

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90">🤖 AI & Automation</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-[#8B5CF6]">Automate Your Business</span>, Reduce Costs by 60%, Scale Without
                Hiring More Staff
              </h1>
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-300">4.9★ Rating</span>
              </div>
              <p className="text-xl text-gray-300 mb-4">
                Specifically designed for service businesses and agencies, our AI automation solutions are proven to cut
                costs and boost your capacity.
              </p>
              <p className="text-xl text-gray-300 mb-8">
                Automate repetitive tasks, eliminate bottlenecks, and focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white">
                  Get AI Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FCFBCF] text-[#FCFBCF] hover:bg-[#FCFBCF] hover:text-black"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#8B5CF6]/20 to-[#2e0034] p-8 rounded-lg">
                <Brain className="h-32 w-32 text-[#8B5CF6] mx-auto mb-6" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#FCFBCF] mb-2">60%</div>
                  <div className="text-[#8B5CF6] font-semibold">Cost Reduction</div>
                  <div className="text-sm text-gray-400 mt-2">Average savings with our AI solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is This You? - Problem Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Is This You?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common problems we solve for service businesses and agencies:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass border-0 text-center hover-lift bg-transparent">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Drowning in repetitive manual tasks?</div>
                <div className="text-sm text-gray-400">Free up your team to focus on high-value activities.</div>
              </CardContent>
            </Card>
            <Card className="glass border-0 text-center hover-lift bg-transparent">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Team spending time on low-value work?</div>
                <div className="text-sm text-gray-400">
                  Automate data entry, reporting, and other time-consuming tasks.
                </div>
              </CardContent>
            </Card>
            <Card className="glass border-0 text-center hover-lift bg-transparent">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Scaling bottlenecks limiting growth?</div>
                <div className="text-sm text-gray-400">Remove obstacles to growth with automated processes.</div>
              </CardContent>
            </Card>
            <Card className="glass border-0 text-center hover-lift bg-transparent">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">High operational costs eating profits?</div>
                <div className="text-sm text-gray-400">Reduce costs by up to 60% with AI-powered automation.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution - Process Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Our Solution: A Proven Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful AI automation implementation:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="bg-transparent border-[#8B5CF6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Process Audit</div>
                <div className="text-sm text-gray-400">Identify areas for automation.</div>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#8B5CF6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Automation Strategy</div>
                <div className="text-sm text-gray-400">Develop a tailored automation plan.</div>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#8B5CF6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Implementation</div>
                <div className="text-sm text-gray-400">Build and deploy AI solutions.</div>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#8B5CF6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Testing</div>
                <div className="text-sm text-gray-400">Ensure seamless operation.</div>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#8B5CF6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Optimization</div>
                <div className="text-sm text-gray-400">Continuously improve performance.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Real Results for Real Businesses</h2>
            <p className="text-xl text-gray-300">Don't just take our word for it. See what our clients are saying:</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            <Card className="bg-transparent border-[#8B5CF6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Tom Wilson from Digital Marketing Agency</div>
                <div className="text-sm text-gray-400 mb-4">
                  "AI automation transformed our agency. We achieved a 60% reduction in operational costs and a 300%
                  increase in client capacity."
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Automation Pricing Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">AI Automation Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that best fits your business needs:</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-transparent border-[#8B5CF6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Automation Starter</div>
                <div className="text-sm text-gray-400 mb-4">One-time setup for basic automation needs.</div>
                <div className="text-3xl font-bold text-[#8B5CF6]">$2,997</div>
                <Button className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-semibold mt-4">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#8B5CF6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Business Automation (Most Popular)</div>
                <div className="text-sm text-gray-400 mb-4">Monthly plan for comprehensive automation.</div>
                <div className="text-3xl font-bold text-[#8B5CF6]">$4,997/mo</div>
                <Button className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-semibold mt-4">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#8B5CF6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-2">Enterprise AI</div>
                <div className="text-sm text-gray-400 mb-4">Custom AI solutions for large organizations.</div>
                <div className="text-3xl font-bold text-[#8B5CF6]">$9,997/mo</div>
                <Button className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-semibold mt-4">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">AI & Automation Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions designed to streamline your operations and accelerate growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Custom AI Chatbots",
                description:
                  "24/7 customer support automation that handles 80% of inquiries with natural language processing",
                features: ["Multi-language support", "CRM integration", "Lead qualification", "Escalation protocols"],
              },
              {
                icon: Zap,
                title: "Process Automation",
                description: "Streamline workflows and eliminate repetitive tasks with intelligent automation systems",
                features: ["Workflow optimization", "Data processing", "Report generation", "Task scheduling"],
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description:
                  "Data-driven insights and forecasting to make better business decisions and identify opportunities",
                features: [
                  "Sales forecasting",
                  "Customer behavior analysis",
                  "Market trend prediction",
                  "Risk assessment",
                ],
              },
              {
                icon: Clock,
                title: "Marketing Automation",
                description: "Intelligent marketing campaigns that nurture leads and convert prospects automatically",
                features: ["Email sequences", "Lead scoring", "Campaign optimization", "Performance tracking"],
              },
              {
                icon: DollarSign,
                title: "Financial Automation",
                description:
                  "Automate invoicing, expense tracking, and financial reporting for better cash flow management",
                features: ["Invoice generation", "Expense categorization", "Financial reporting", "Payment reminders"],
              },
              {
                icon: Brain,
                title: "AI Consulting",
                description: "Strategic guidance on implementing AI solutions that align with your business objectives",
                features: [
                  "AI strategy development",
                  "Technology assessment",
                  "Implementation planning",
                  "ROI analysis",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-all duration-300 bg-transparent"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-[#8B5CF6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#FCFBCF] mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-[#8B5CF6] mr-2 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Why Choose Our AI Solutions?</h2>
            <p className="text-xl text-gray-300">Measurable results that transform your business operations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "60%", label: "Cost Reduction", description: "Average operational cost savings" },
              { metric: "24/7", label: "Availability", description: "Round-the-clock automated support" },
              { metric: "80%", label: "Query Resolution", description: "Automated customer service success rate" },
              { metric: "3x", label: "Efficiency Boost", description: "Improvement in process speed" },
            ].map((benefit, index) => (
              <Card key={index} className="bg-transparent border-[#8B5CF6]/30 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-[#8B5CF6] mb-2">{benefit.metric}</div>
                  <div className="text-lg font-semibold text-[#FCFBCF] mb-2">{benefit.label}</div>
                  <div className="text-sm text-gray-400">{benefit.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation FAQ Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about AI automation:</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            <Card className="bg-transparent border-[#8B5CF6]/30">
              <CardContent className="p-8">
                <div className="text-xl font-bold text-[#FCFBCF] mb-2">What types of tasks can be automated?</div>
                <div className="text-sm text-gray-400">
                  We can automate a wide range of tasks, including data entry, customer support, report generation, and
                  more.
                </div>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#8B5CF6]/30">
              <CardContent className="p-8">
                <div className="text-xl font-bold text-[#FCFBCF] mb-2">
                  How long does it take to implement AI automation?
                </div>
                <div className="text-sm text-gray-400">
                  Implementation time varies depending on the complexity of the project, but we strive to deliver
                  results quickly.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-[#8B5CF6]">Automate</span> Your Success?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI automation can transform your business operations and drive unprecedented growth
          </p>
          <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-semibold">
            Schedule AI Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
