import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Palette, ArrowRight, CheckCircle, Zap, Shield, Star, Award } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import HubSpotForm from "@/components/hubspot-form"

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-white border-0 mb-6">
                  💻 Web Development Experts
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    Custom Websites
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">That Convert Visitors</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Into Customers</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                  We help <strong>small businesses and e-commerce stores</strong> build high-performance websites that
                  load 400% faster, convert better, and drive real business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button pulse-animation"
                  >
                    Get Website Consultation
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-white rounded-full"
                  >
                    View Portfolio
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#00F5FF]" />
                    <span className="text-sm font-medium">200+ Websites Built</span>
                  </div>
                </div>
              </div>

              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/business-analytics.png"
                    alt="Web Development Services"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00F5FF]/10 to-transparent rounded-2xl"></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Is This You? Problem Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent dark:bg-red-950/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-red-600 dark:text-red-400">Is This You?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                These website problems are costing you customers every day...
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">🐌</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Slow Loading Website</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Your site takes forever to load, causing visitors to leave before they see your content
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Not Mobile-Friendly</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Your website looks terrible on phones and tablets where most traffic comes from
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Outdated Design</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Your website looks like it's from 2010 and doesn't build trust with modern customers
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">📞</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">No Clear Call-to-Action</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Visitors don't know what to do next or how to contact you for business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Solution: Clear Path to Results */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our Solution:</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  Websites That Work
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our proven 5-step development process that creates high-converting websites
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-5 gap-8">
                {[
                  {
                    step: "01",
                    icon: Palette,
                    title: "Discovery & Design",
                    description: "Research your audience and create stunning designs that convert",
                    color: "from-[#00F5FF] to-[#8B5CF6]",
                  },
                  {
                    step: "02",
                    icon: Code,
                    title: "Development",
                    description: "Build your website with clean code and modern technologies",
                    color: "from-[#8B5CF6] to-[#F472B6]",
                  },
                  {
                    step: "03",
                    icon: Smartphone,
                    title: "Mobile Optimization",
                    description: "Ensure perfect functionality on all devices and screen sizes",
                    color: "from-[#F472B6] to-[#FF7600]",
                  },
                  {
                    step: "04",
                    icon: Zap,
                    title: "Speed Optimization",
                    description: "Optimize for lightning-fast loading speeds and SEO",
                    color: "from-[#FF7600] to-[#00F5FF]",
                  },
                  {
                    step: "05",
                    icon: Shield,
                    title: "Launch & Support",
                    description: "Launch your site and provide ongoing maintenance and updates",
                    color: "from-[#00F5FF] to-[#8B5CF6]",
                  },
                ].map((phase, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="text-center">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <phase.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="text-sm font-bold text-gray-500 mb-2">STEP {phase.step}</div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{phase.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{phase.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Service-Specific Social Proof */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent bg-gradient-to-r from-[#00F5FF]/5 to-[#8B5CF6]/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-white border-0 mb-6">
                ⭐ Client Success Story
              </Badge>

              <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-relaxed">
                "Our new website from M&H Digital increased our{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  online sales by 400%
                </span>{" "}
                and loads 5x faster than our old site. Best investment we've made!"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MC</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">Mike Chen</div>
                  <div className="text-gray-600 dark:text-gray-400">Owner, Elite Fitness</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                    400%
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                    5x
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Faster Loading</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                    2 Weeks
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Project Completion</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Who Is This For */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent dark:bg-blue-950/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Perfect For</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  These Businesses
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Small Business Owners",
                  description: "Local businesses needing professional websites that attract and convert customers",
                  icon: "🏪",
                },
                {
                  title: "E-commerce Stores",
                  description: "Online retailers wanting high-converting websites that maximize sales",
                  icon: "🛒",
                },
                {
                  title: "Service Professionals",
                  description: "Consultants, contractors, and service providers showcasing their expertise",
                  icon: "💼",
                },
              ].map((target, index) => (
                <Card key={index} className="text-center p-8">
                  <div className="text-6xl mb-4">{target.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{target.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{target.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Pricing Packages */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Website Packages That</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  Drive Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Choose your perfect website solution. All packages include hosting and support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Professional",
                  price: "$2,997",
                  period: "",
                  description: "Perfect for small businesses and service providers",
                  badge: "Most Popular",
                  features: [
                    "5-page custom website",
                    "Mobile-responsive design",
                    "Contact forms and maps",
                    "Basic SEO optimization",
                    "1 year hosting included",
                    "SSL certificate",
                    "Email support",
                  ],
                  popular: true,
                  cta: "Start Your Website",
                },
                {
                  name: "E-commerce",
                  price: "$4,997",
                  period: "",
                  description: "Complete online store solution for retailers",
                  badge: "Best for Sales",
                  features: [
                    "Full e-commerce website",
                    "Payment gateway integration",
                    "Inventory management",
                    "Product catalog (up to 100)",
                    "Order management system",
                    "Advanced SEO optimization",
                    "Priority support",
                  ],
                  popular: false,
                  cta: "Launch Your Store",
                },
                {
                  name: "Enterprise",
                  price: "$7,997",
                  period: "",
                  description: "Custom solution for growing businesses",
                  badge: "Maximum Features",
                  features: [
                    "Unlimited pages",
                    "Custom functionality",
                    "Advanced integrations",
                    "Multi-user management",
                    "Custom analytics dashboard",
                    "Performance optimization",
                    "Dedicated project manager",
                  ],
                  popular: false,
                  cta: "Get Custom Quote",
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.popular ? "border-2 border-[#00F5FF] scale-105 shadow-2xl" : "shadow-lg"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-white px-4 py-1">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-sm text-gray-500">Starting at</span>
                        <div>
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#00F5FF] mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] hover:opacity-90" : ""}`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                      30-day money-back guarantee • Free revisions included
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Service-Specific FAQ */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent dark:bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Website Questions</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  Answered
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Everything you need to know about our web development services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How long does it take to build a website?",
                  answer:
                    "Most websites are completed in 2-4 weeks depending on complexity. Simple business websites typically take 2 weeks, while e-commerce sites take 3-4 weeks. We'll give you an exact timeline during your consultation based on your specific requirements.",
                },
                {
                  question: "Do you provide website hosting and maintenance?",
                  answer:
                    "Yes! All our packages include 1 year of hosting, SSL certificates, and basic maintenance. After the first year, hosting is just $20/month. We also offer ongoing maintenance plans for updates, security, and performance optimization.",
                },
                {
                  question: "Will my website work on mobile devices?",
                  answer:
                    "All our websites are built mobile-first and are fully responsive. Your site will look perfect and function flawlessly on smartphones, tablets, and desktop computers. We test on all major devices before launch.",
                },
                {
                  question: "Can I update the website content myself?",
                  answer:
                    "Yes! We build websites with user-friendly content management systems that allow you to easily update text, images, and basic content. We provide training and documentation to help you manage your site confidently.",
                },
                {
                  question: "What if I need changes after the website is live?",
                  answer:
                    "We include 30 days of free minor revisions after launch. For larger changes or ongoing updates, we offer affordable maintenance packages. Most clients find our ongoing support plans very valuable for keeping their sites current and secure.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Form Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Get Your Free</span>{" "}
                  <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    Website Consultation
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Ready to build a website that converts visitors into customers? Get a free consultation and project
                  quote tailored to your business needs.
                </p>
                <div className="space-y-4">
                  {[
                    "Free website audit (if you have an existing site)",
                    "Custom design mockup preview",
                    "Detailed project timeline and pricing",
                    "Strategy session for your business goals",
                    "No pressure, no obligation consultation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Start Your Website Project</h3>
                <HubSpotForm />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF]/10 via-[#8B5CF6]/10 to-[#F472B6]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    Transform
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Your Online Presence?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join 200+ businesses that have transformed their online presence with our high-converting websites.
                  Get your free consultation and see how we can help you grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button text-lg px-8 py-4"
                  >
                    Get Free Website Consultation ($500 Value)
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-white rounded-full px-8"
                  >
                    View Website Portfolio
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white">200+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Websites Built</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white">4.9★</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Client Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white">2-4 Weeks</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Average Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
