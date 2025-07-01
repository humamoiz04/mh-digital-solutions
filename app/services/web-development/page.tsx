import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Smartphone,
  ShoppingCart,
  CheckCircle,
  Globe,
  Settings,
  Users,
  BarChart3,
  Shield,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Web Development Services | Responsive Design & E-commerce Solutions",
  description:
    "Professional web development services for businesses of all sizes. Custom websites, e-commerce platforms, and responsive designs that drive results. Get your free consultation today!",
  keywords:
    "web development, custom website design, e-commerce development, responsive web design, business website, web application development",
}

export default function WebDevelopmentPage() {
  const faqs = [
    {
      question: "How much does a custom business website cost?",
      answer:
        "The cost of a custom website varies based on complexity, features, design, and integrations. Small business websites can start from $2,500, while more complex enterprise solutions can range from $10,000 to $50,000+. We offer different tiers and provide a detailed consultation to give you an accurate quote based on your specific needs.",
    },
    {
      question: "How long does it take to develop a new website?",
      answer:
        "Our typical project timeline for a standard business website is 6-12 weeks. This includes discovery, design, development, testing, and launch. More complex e-commerce platforms or custom web applications may take longer, while simpler sites can be launched faster. We'll provide a clear timeline during our initial consultation.",
    },
    {
      question: "Do you provide website maintenance and security updates?",
      answer:
        "Yes, we offer comprehensive website maintenance packages to ensure your site remains secure, fast, and up-to-date. Our services include regular security updates, performance monitoring, content updates, backup management, and technical support. This ongoing support is crucial for long-term website health and security.",
    },
    {
      question: "Can you integrate our new website with our existing CRM/ERP systems?",
      answer:
        "Absolutely. We specialize in integrating new websites with existing business systems like CRM (e.g., Salesforce, HubSpot) and ERP platforms (e.g., SAP, Microsoft Dynamics). Our custom API integration services ensure seamless data flow, streamline your operations, and enhance overall efficiency.",
    },
  ]

  const testimonials = [
    {
      text: "Our new e-commerce website increased online sales by 300% in the first 6 months. The design is beautiful and the checkout process is seamless.",
      name: "Jennifer Martinez",
      position: "E-commerce Manager",
      company: "Fashion Boutique",
      rating: 5,
    },
    {
      text: "They built our complex B2B platform with multiple integrations. The project was delivered on time and exceeded our expectations.",
      name: "David Chen",
      position: "CTO",
      company: "TechStart Solutions",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-1">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-[#00f5ff] to-[#8b5cf6] text-white border-0">
                  💻 Expert Web Development
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#00f5ff] to-[#8b5cf6] bg-clip-text text-transparent">
                    Custom Web Development
                  </span>
                  <br />
                  <span className="text-white">That Drives Business Growth</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Professional web development services for businesses of all sizes. From responsive websites to complex
                  e-commerce platforms, we create digital experiences that convert visitors into customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-black rounded-full bg-transparent"
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
              <ScrollAnimation>
                <div className="relative">
                  <Image
                    src="/images/web-development-optimized.webp"
                    alt="Custom Web Development Services"
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

      {/* Why Professional Web Development Section */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-2">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-white">Why Professional Web Development is</span>{" "}
                <span className="bg-gradient-to-r from-[#f472b6] to-[#00f5ff] bg-clip-text text-transparent">
                  Essential for Your Business
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your website is often the first impression customers have of your business. Professional development
                ensures it makes the right impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "First Impressions Matter",
                  description:
                    "94% of first impressions are design-related. Professional websites build trust instantly",
                  stat: "94% Impact",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-First World",
                  description: "60%+ of web traffic comes from mobile devices. Responsive design is no longer optional",
                  stat: "60%+ Mobile Traffic",
                },
                {
                  icon: BarChart3,
                  title: "Conversion Optimization",
                  description:
                    "Well-designed websites convert 2-3x better than poorly designed ones through strategic UX",
                  stat: "3x Better Conversions",
                },
              ].map((benefit, index) => (
                <ScrollAnimation key={index}>
                  <Card className="glass-card hover-lift">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#00f5ff] to-[#8b5cf6] rounded-xl flex items-center justify-center mb-6 mx-auto">
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-gray-300 mb-4">{benefit.description}</p>
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#00f5ff] to-[#8b5cf6] bg-clip-text text-transparent">
                        {benefit.stat}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Web Development Process */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-3">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-white">Our Proven</span>{" "}
                <span className="bg-gradient-to-r from-[#00f5ff] to-[#ff7600] bg-clip-text text-transparent">
                  Web Development Process
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach that ensures your website is delivered on time, on budget, and exceeds
                expectations
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Discovery & Strategy",
                    description: "Understanding your business goals, target audience, and technical requirements",
                    color: "from-[#00f5ff] to-[#8b5cf6]",
                  },
                  {
                    step: "02",
                    title: "Design & Prototyping",
                    description: "Creating wireframes, mockups, and interactive prototypes for your approval",
                    color: "from-[#8b5cf6] to-[#f472b6]",
                  },
                  {
                    step: "03",
                    title: "Development & Coding",
                    description: "Building your website with clean, scalable code and modern technologies",
                    color: "from-[#f472b6] to-[#ff7600]",
                  },
                  {
                    step: "04",
                    title: "Testing & Optimization",
                    description: "Rigorous testing across devices, browsers, and performance optimization",
                    color: "from-[#ff7600] to-[#22c55e]",
                  },
                  {
                    step: "05",
                    title: "Launch & Support",
                    description: "Smooth deployment and ongoing maintenance to ensure optimal performance",
                    color: "from-[#22c55e] to-[#00f5ff]",
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
                        <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                        <p className="text-gray-400">{phase.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Web Development Solutions */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-4">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-white">Comprehensive</span>{" "}
                <span className="bg-gradient-to-r from-[#ff7600] to-[#8b5cf6] bg-clip-text text-transparent">
                  Web Development Solutions
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Business Websites",
                  description: "Professional websites that establish credibility and drive conversions",
                  features: [
                    "Responsive design",
                    "SEO optimization",
                    "Content management",
                    "Contact forms",
                    "Analytics integration",
                  ],
                },
                {
                  icon: ShoppingCart,
                  title: "E-commerce Platforms",
                  description: "Full-featured online stores that maximize sales and customer experience",
                  features: [
                    "Product catalogs",
                    "Secure payments",
                    "Inventory management",
                    "Order tracking",
                    "Customer accounts",
                  ],
                },
                {
                  icon: Code,
                  title: "Web Applications",
                  description: "Custom web apps that streamline business processes and improve efficiency",
                  features: [
                    "Custom functionality",
                    "Database integration",
                    "User authentication",
                    "API development",
                    "Cloud deployment",
                  ],
                },
                {
                  icon: Smartphone,
                  title: "Mobile-First Design",
                  description: "Websites optimized for mobile devices and touch interactions",
                  features: [
                    "Touch-friendly interface",
                    "Fast loading times",
                    "Offline capabilities",
                    "App-like experience",
                    "Cross-platform compatibility",
                  ],
                },
                {
                  icon: Settings,
                  title: "CMS Development",
                  description: "Easy-to-manage content systems that put you in control",
                  features: [
                    "WordPress development",
                    "Custom CMS solutions",
                    "Content workflows",
                    "User permissions",
                    "SEO tools",
                  ],
                },
                {
                  icon: Shield,
                  title: "Security & Performance",
                  description: "Robust security measures and optimization for peak performance",
                  features: [
                    "SSL certificates",
                    "Security monitoring",
                    "Performance optimization",
                    "Regular backups",
                    "Uptime monitoring",
                  ],
                },
              ].map((solution, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`service-card-${(index % 6) + 1} border-0 hover-lift`}>
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#00f5ff] to-[#8b5cf6] rounded-xl flex items-center justify-center mb-6">
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                      <p className="text-gray-300 mb-6">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-[#00f5ff] mr-2 flex-shrink-0" />
                            <span className="text-gray-400">{feature}</span>
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

      {/* Web Development for Every Business */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#22c55e] to-[#a855f7] bg-clip-text text-transparent">
                  Web Development
                </span>{" "}
                <span className="text-white">for Every Business Size</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollAnimation>
                <Card className="glass-card hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Users className="h-8 w-8 text-[#22c55e] mr-4" />
                      <h3 className="text-2xl font-bold text-white">For Small Businesses</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-[#22c55e] mb-4">
                      Professional Websites That Compete with Enterprise
                    </h4>
                    <p className="text-gray-300 mb-6">
                      Affordable web development solutions that give small businesses a professional online presence
                      without breaking the budget.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Starting at $2,997 for complete websites",
                        "Mobile-responsive design included",
                        "SEO optimization built-in",
                        "Easy content management",
                        "Social media integration",
                        "Local business optimization",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#22c55e] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation>
                <Card className="glass-card hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <BarChart3 className="h-8 w-8 text-[#a855f7] mr-4" />
                      <h3 className="text-2xl font-bold text-white">For Enterprises</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-[#a855f7] mb-4">
                      Scalable Solutions with Advanced Integrations
                    </h4>
                    <p className="text-gray-300 mb-6">
                      Complex web applications and platforms that handle enterprise-level traffic, data, and
                      integrations with existing business systems.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Custom web application development",
                        "Enterprise system integrations",
                        "Advanced security implementations",
                        "Scalable cloud architecture",
                        "Multi-site management",
                        "Dedicated project management",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#a855f7] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* FAQ Section */}
      <FAQ title="Web Development FAQ" subtitle="Common questions about our web development services" faqs={faqs} />

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-1">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff]/10 via-[#8b5cf6]/10 to-[#f472b6]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Ready to Build Your</span>{" "}
                  <span className="bg-gradient-to-r from-[#00f5ff] to-[#8b5cf6] bg-clip-text text-transparent">
                    Dream Website?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create a website that not only looks amazing but drives real business results and growth
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-black rounded-full bg-transparent"
                  >
                    View Our Portfolio
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
