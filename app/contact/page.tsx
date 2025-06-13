import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import HubSpotForm from "@/components/hubspot-form"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@mhdigitalsolutions.com",
      description: "Send us an email anytime",
      color: "from-[#FF7600] to-[#F472B6]",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (757) 550-4040",
      description: "Mon-Fri from 9am to 6pm EST",
      color: "from-[#8B5CF6] to-[#00F5FF]",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "United States",
      description: "Serving clients nationwide",
      color: "from-[#F472B6] to-[#8B5CF6]",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We respond to all inquiries quickly",
      color: "from-[#00F5FF] to-[#FF7600]",
    },
  ]

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Results vary by service, but most clients see initial improvements within 30-90 days. SEO typically takes 3-6 months for significant results, while PPC and social media can show results within weeks.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "We specialize in helping small and medium-sized businesses grow their digital presence. We offer scalable solutions that fit various budgets and business sizes.",
    },
    {
      question: "What's included in your digital marketing services?",
      answer:
        "Our services include strategy development, implementation, ongoing optimization, detailed reporting, and regular consultations. Each package is customized to your specific needs and goals.",
    },
    {
      question: "Can you help with website redesign?",
      answer:
        "Yes, we offer complete website redesign and development services. We focus on creating user-friendly, mobile-responsive websites that convert visitors into customers.",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Badge className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] text-white border-0 mb-6">
              💬 Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Let's</span>{" "}
              <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our team of digital marketing experts and let's
              discuss how we can help you achieve your goals
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Info Cards */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`service-card-${(index % 4) + 1} border-0 hover-lift text-center`}>
                    <CardContent className="p-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <info.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                      <p className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{info.details}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Form Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Send Us a</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours. Let's discuss your project and how
                  we can help you achieve your digital marketing goals.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FF7600] to-[#F472B6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Free Consultation</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We'll analyze your current situation and provide initial recommendations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Custom Strategy</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We'll create a tailored digital marketing strategy for your business
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#F472B6] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Implementation</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We'll execute the strategy and provide ongoing optimization
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Start Your Digital Transformation
                </h3>
                <HubSpotForm />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Frequently Asked</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Get answers to common questions about our services
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
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
                  Schedule a free consultation and let's discuss how we can help transform your digital presence
                </p>
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="calendly-button"
                >
                  Schedule Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
