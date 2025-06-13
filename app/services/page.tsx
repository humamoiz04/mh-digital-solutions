import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Target, Palette, Code, Brain, ShoppingCart } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Boost your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building", "Local SEO"],
      color: "from-[#8B5CF6] to-[#F472B6]",
      price: "Starting at $999/month",
    },
    {
      icon: Target,
      title: "PPC Management",
      description: "Maximize your ROI with expertly managed pay-per-click advertising campaigns across all platforms.",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "A/B Testing", "Performance Tracking"],
      color: "from-[#FF7600] to-[#8B5CF6]",
      price: "Starting at $1,299/month",
    },
    {
      icon: Palette,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage your audience with strategic social media campaigns.",
      features: ["Content Creation", "Community Management", "Influencer Outreach", "Social Advertising", "Analytics"],
      color: "from-[#F472B6] to-[#00F5FF]",
      price: "Starting at $799/month",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Create stunning, high-performance websites that convert visitors into customers.",
      features: [
        "Custom Design",
        "Responsive Development",
        "E-commerce Integration",
        "CMS Setup",
        "Performance Optimization",
      ],
      color: "from-[#00F5FF] to-[#8B5CF6]",
      price: "Starting at $2,999",
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Streamline your business processes with intelligent automation and AI-powered solutions.",
      features: [
        "Chatbot Development",
        "Workflow Automation",
        "Data Analysis",
        "Predictive Analytics",
        "Custom AI Solutions",
      ],
      color: "from-[#8B5CF6] to-[#FF7600]",
      price: "Starting at $1,999/month",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Build and optimize online stores that drive sales and provide exceptional customer experiences.",
      features: ["Store Setup", "Payment Integration", "Inventory Management", "Order Processing", "Marketing Tools"],
      color: "from-[#FF7600] to-[#F472B6]",
      price: "Starting at $3,999",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business, goals, and market to create a tailored strategy.",
      color: "from-[#FF7600] to-[#F472B6]",
    },
    {
      step: "02",
      title: "Planning & Design",
      description: "Our team develops detailed plans and creates compelling designs for your project.",
      color: "from-[#8B5CF6] to-[#00F5FF]",
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "We bring your vision to life with expert development and careful implementation.",
      color: "from-[#F472B6] to-[#8B5CF6]",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing ensures everything works perfectly before we launch your project.",
      color: "from-[#00F5FF] to-[#FF7600]",
    },
    {
      step: "05",
      title: "Optimization & Support",
      description: "Ongoing optimization and support to ensure continued success and growth.",
      color: "from-[#8B5CF6] to-[#F472B6]",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Badge className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] text-white border-0 mb-6">
              🚀 Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Comprehensive</span>{" "}
              <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital services that drive growth and deliver
              measurable results for your business
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Grid */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`service-card-${(index % 6) + 1} border-0 hover-lift`}>
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                        <Badge className={`bg-gradient-to-r ${service.color} text-white border-0 text-xs`}>
                          Popular
                        </Badge>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-bold text-gray-900 dark:text-white">{service.price}</span>
                        </div>
                        <Button
                          className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white border-0`}
                        >
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Process Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <div className="flex items-center space-x-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
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
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Get Started
                  </span>
                  ?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and create a custom solution that drives results for your business
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Schedule Consultation
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full px-8"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
