"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FAQ from "@/components/faq"
import { ArrowRight, Bot, Zap, Target, TrendingUp, Users, Building, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const AIAutomationPage = () => {
  const aiAutomationFAQs = [
    {
      question: "Will AI replace digital marketing jobs or agencies?",
      answer:
        "No, AI will not replace digital marketing jobs or agencies. Instead, it serves as a powerful tool that enhances human expertise, streamlines repetitive processes, and opens new opportunities for innovation. We leverage AI to automate mundane tasks, analyze vast datasets, and optimize campaigns, allowing our human experts to focus on high-level strategy, creativity, and client relationships. This positions our agency at the forefront of AI adoption, delivering superior results.",
    },
    {
      question: "What kind of business processes can AI automate?",
      answer:
        "AI can automate a wide range of business processes, including customer service (via chatbots and virtual assistants), data entry and processing, lead qualification, personalized email marketing, social media scheduling and content generation (for internal use), ad campaign optimization, predictive analytics for sales forecasting, and inventory management. These automations lead to increased efficiency, reduced costs, and improved accuracy.",
    },
    {
      question: "Is AI automation affordable for small and medium-sized businesses?",
      answer:
        "Yes, AI automation is increasingly affordable and accessible for small and medium-sized businesses (SMBs). Modern AI tools and platforms offer scalable solutions that can be implemented without a massive upfront investment. We design our AI automation packages specifically with SMB budgets in mind, focusing on solutions that deliver a rapid return on investment through significant cost savings and efficiency gains.",
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer:
        "The implementation timeline for an AI solution varies depending on its complexity and integration requirements. Basic AI automations, such as a simple chatbot or email sequence, can be deployed within 2-4 weeks. More advanced workflows and integrations might take 6-8 weeks, while custom-developed AI solutions could range from 8-12 weeks. We provide a detailed project timeline and regular updates throughout the development and implementation process.",
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                  <Bot className="w-4 h-4 mr-2" />
                  AI Automation Solutions
                </Badge>

                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Transform Your Business with
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    {" "}
                    AI Automation
                  </span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Unlock the power of artificial intelligence to streamline operations, reduce costs, and scale your
                  business efficiently. Our AI automation solutions work 24/7 to boost productivity and drive growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white border-0"
                    >
                      Start Your AI Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass border-white/30 text-white hover:bg-white/10 bg-transparent"
                    >
                      View Success Stories
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20">
                  <Image
                    src="/images/ai-automation-optimized.webp"
                    alt="AI Automation Dashboard"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Automation Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Why AI Automation is Essential for Modern Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                In today's competitive landscape, businesses that leverage AI automation gain significant advantages in
                efficiency, cost reduction, and scalability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "24/7 Operations",
                  description:
                    "AI systems work around the clock, handling tasks and customer inquiries even when your team is offline.",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Precision & Accuracy",
                  description: "Eliminate human errors and ensure consistent, accurate execution of repetitive tasks.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Scalable Growth",
                  description: "Handle increased workload without proportional increases in staffing costs.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Automation Process Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Our AI Automation Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful AI integration that delivers measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Business Analysis",
                  description: "Identify automation opportunities and assess current workflows",
                },
                {
                  step: "02",
                  title: "Solution Design",
                  description: "Create custom AI solutions tailored to your specific needs",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Deploy and integrate AI systems with your existing infrastructure",
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Monitor performance and continuously improve AI effectiveness",
                },
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-indigo-900/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Key AI Automation Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI tools designed to transform every aspect of your business operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Intelligent Chatbots",
                  description: "24/7 customer support with natural language processing",
                  features: ["Multi-language support", "Lead qualification", "Order processing", "FAQ automation"],
                },
                {
                  title: "Process Automation",
                  description: "Streamline repetitive tasks and workflows",
                  features: [
                    "Data entry automation",
                    "Document processing",
                    "Inventory management",
                    "Report generation",
                  ],
                },
                {
                  title: "Predictive Analytics",
                  description: "AI-powered insights for better decision making",
                  features: [
                    "Sales forecasting",
                    "Customer behavior analysis",
                    "Market trend prediction",
                    "Risk assessment",
                  ],
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 group hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Size Solutions */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-purple-900/10 to-blue-900/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">AI Automation for Every Business Size</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Scalable AI solutions designed to meet the unique needs and budgets of businesses at every stage.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Small Businesses",
                  description: "Cost-effective AI tools to compete with larger companies",
                  features: [
                    "Basic chatbot setup",
                    "Email automation",
                    "Social media scheduling",
                    "Simple workflow automation",
                  ],
                  price: "Starting at $497/month",
                },
                {
                  icon: <Building className="w-8 h-8" />,
                  title: "Medium Enterprises",
                  description: "Advanced AI systems for growing operations",
                  features: [
                    "Custom AI solutions",
                    "CRM integration",
                    "Advanced analytics",
                    "Multi-department automation",
                  ],
                  price: "Starting at $1,497/month",
                },
                {
                  icon: <Briefcase className="w-8 h-8" />,
                  title: "Large Corporations",
                  description: "Enterprise-grade AI infrastructure and support",
                  features: [
                    "Custom AI development",
                    "Enterprise integrations",
                    "Dedicated support",
                    "Advanced security",
                  ],
                  price: "Custom pricing",
                },
              ].map((tier, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.title}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-white mb-6">{tier.price}</div>
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white border-0">
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Get answers to common questions about AI automation implementation and benefits.
              </p>
            </div>

            <FAQ faqs={aiAutomationFAQs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-3xl p-12 backdrop-blur-xl border border-white/20">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to Automate Your Success?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have transformed their operations with our AI automation solutions.
                Start your journey today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white border-0"
                  >
                    Start Your AI Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button
                    size="lg"
                    variant="outline"
                    className="glass border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    View Success Stories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIAutomationPage
