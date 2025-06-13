import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  UserCheck,
  Calendar,
  FileText,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Lightbulb,
  AlertTriangle,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"

export default function HRSolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white border-0 mb-6">
                  👥 HR Solutions
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                    Smart HR
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Management</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Streamline HR Operations, Reduce Costs by 60%, Improve Employee Satisfaction
                </h2>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 mr-2">4.9★ Rating</span>
                  <span className="text-gray-600 dark:text-gray-300">|</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-300">150+ HR Systems Optimized</span>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Streamline your human resources with intelligent automation, digital workflows, and data-driven
                  insights that improve employee experience and operational efficiency. Designed specifically for small
                  to medium-sized businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button pulse-animation"
                  >
                    Get HR Assessment
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full"
                  >
                    View HR Solutions
                  </Button>
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/team-collaboration.webp"
                    alt="HR Solutions"
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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Is This</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">You?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Common HR challenges we solve for SMBs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Time-Consuming Manual Processes",
                  description: "Manual HR tasks are eating up valuable time and resources.",
                },
                {
                  icon: AlertTriangle,
                  title: "Compliance & Legal Risks",
                  description: "Navigating complex HR regulations and avoiding costly legal issues.",
                },
                {
                  icon: Users,
                  title: "High Employee Turnover",
                  description: "Struggling to retain top talent and reduce employee churn.",
                },
                {
                  icon: Lightbulb,
                  title: "Lack of HR Insights",
                  description: "Missing clear HR metrics and data-driven insights for decision-making.",
                },
              ].map((problem, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="border-0 hover-lift">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] rounded-xl flex items-center justify-center mb-6">
                        <problem.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{problem.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{problem.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Solution - 5 Step Process */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Solution
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A streamlined 5-step process to transform your HR
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: 1, title: "HR Assessment", description: "In-depth analysis of your current HR processes." },
                { step: 2, title: "System Design", description: "Customized HR system design tailored to your needs." },
                { step: 3, title: "Implementation", description: "Seamless implementation of your new HR system." },
                {
                  step: 4,
                  title: "Training",
                  description: "Comprehensive training for your team to maximize system use.",
                },
                {
                  step: 5,
                  title: "Optimization",
                  description: "Ongoing optimization to ensure continuous improvement.",
                },
              ].map((process, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent mb-2">
                        Step {process.step}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{process.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{process.description}</div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* HR Services */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Comprehensive</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  HR Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From recruitment to performance management, we digitize and optimize your entire HR workflow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: UserCheck,
                  title: "Recruitment & Onboarding",
                  description: "Streamline hiring processes with automated workflows and digital onboarding",
                  features: [
                    "Applicant tracking system",
                    "Digital onboarding workflows",
                    "Background check automation",
                    "Interview scheduling tools",
                  ],
                  color: "from-[#8B5CF6] to-[#F472B6]",
                },
                {
                  icon: Users,
                  title: "Employee Management",
                  description: "Centralized employee data management with self-service portals",
                  features: [
                    "Employee database management",
                    "Self-service employee portals",
                    "Document management",
                    "Organizational charts",
                  ],
                  color: "from-[#F472B6] to-[#FF7600]",
                },
                {
                  icon: Calendar,
                  title: "Time & Attendance",
                  description: "Automated time tracking and attendance management systems",
                  features: ["Digital time tracking", "Attendance monitoring", "Leave management", "Shift scheduling"],
                  color: "from-[#FF7600] to-[#00F5FF]",
                },
                {
                  icon: Award,
                  title: "Performance Management",
                  description: "Digital performance reviews and goal tracking systems",
                  features: [
                    "Performance review automation",
                    "Goal setting and tracking",
                    "360-degree feedback",
                    "Performance analytics",
                  ],
                  color: "from-[#00F5FF] to-[#8B5CF6]",
                },
                {
                  icon: FileText,
                  title: "Payroll & Benefits",
                  description: "Automated payroll processing and benefits administration",
                  features: [
                    "Automated payroll processing",
                    "Benefits enrollment",
                    "Tax compliance",
                    "Expense management",
                  ],
                  color: "from-[#8B5CF6] to-[#00F5FF]",
                },
                {
                  icon: Clock,
                  title: "HR Analytics",
                  description: "Data-driven insights for better HR decision making",
                  features: [
                    "Employee analytics dashboard",
                    "Turnover analysis",
                    "Performance metrics",
                    "Predictive insights",
                  ],
                  color: "from-[#F472B6] to-[#8B5CF6]",
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

      {/* Social Proof Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Don't Just Take Our</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Word For It
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how we've helped other businesses like yours
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
              <ScrollAnimation delay={100}>
                <Card className="border-0 hover-lift">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Mark Stevens from TechStart Inc
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        "Thanks to MH Digital Solutions, we achieved a 60% reduction in HR admin time and a 40%
                        improvement in employee satisfaction."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
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
                <span className="text-gray-900 dark:text-white">HR</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Measurable improvements in HR efficiency</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "70%", label: "Time Savings", description: "Reduction in HR administrative tasks" },
                { metric: "85%", label: "Employee Satisfaction", description: "Improvement in HR service delivery" },
                { metric: "50%", label: "Faster Hiring", description: "Reduction in time-to-hire" },
                { metric: "90%", label: "Compliance Rate", description: "Improvement in regulatory compliance" },
              ].map((result, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent mb-2">
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

      {/* Pricing Structure Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Simple & Transparent</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your needs
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "HR Optimization",
                  price: "$2,497/mo",
                  description: "Optimize your existing HR processes",
                  features: ["HR Assessment", "System Design", "Implementation"],
                },
                {
                  title: "Complete HR Solution",
                  price: "$4,997/mo",
                  description: "End-to-end HR solution for your business",
                  features: ["All Optimization features", "Training", "Ongoing Support"],
                  popular: true,
                },
                {
                  title: "Enterprise HR",
                  price: "$7,997/mo",
                  description: "Custom HR solution for large organizations",
                  features: ["All Complete HR features", "Dedicated Account Manager", "Custom Integrations"],
                },
              ].map((plan, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card
                    className={`border-0 hover-lift ${plan.popular ? "bg-gradient-to-br from-purple-50 to-pink-50" : ""}`}
                  >
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{plan.title}</h3>
                      <div className="text-xl text-gray-600 dark:text-gray-400 mb-4">{plan.price}</div>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-[#8B5CF6] mr-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4 bg-[#8B5CF6] text-white hover:bg-[#F472B6]">Get Started</Button>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Frequently Asked</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about our HR solutions
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
              {[
                {
                  question: "What types of businesses do you work with?",
                  answer:
                    "We specialize in providing HR solutions for small to medium-sized businesses across various industries.",
                },
                {
                  question: "How long does it take to implement a new HR system?",
                  answer:
                    "The implementation timeline varies depending on the complexity of your needs, but we strive to make the process as efficient as possible.",
                },
                {
                  question: "Do you offer ongoing support and training?",
                  answer:
                    "Yes, we provide comprehensive training and ongoing support to ensure you get the most out of your HR system.",
                },
              ].map((faq, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="border-0 hover-lift">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{faq.question}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
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
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-[#F472B6]/10 to-[#FF7600]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                    Transform
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Your HR Operations?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's digitize your HR processes and create efficient workflows that improve employee experience and
                  business outcomes
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get HR Assessment
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full"
                  >
                    View HR Case Studies
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
