import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Target, BarChart3, ArrowRight, CheckCircle, Globe, Users } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"

export default function SEOPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] text-white border-0 mb-6">
                  🔍 SEO Optimization
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                    SEO That
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Drives Results</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Boost your search rankings and drive organic traffic with our proven SEO strategies that deliver
                  measurable results and sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button pulse-animation"
                  >
                    Get SEO Audit
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
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/seo-optimization.webp"
                    alt="SEO Optimization"
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

      {/* Problem Section */}
      <ScrollAnimation>
        <section className="py-20 bg-red-50 dark:bg-red-950/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-red-600 dark:text-red-400">Are You Invisible on Google?</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-6xl mb-4">😤</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Competitors Getting All Traffic</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your competitors rank #1 while you're buried on page 10
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">📉</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Zero Organic Leads</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Spending thousands on ads because SEO isn't working
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🤷</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">No Clear SEO Strategy</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tried DIY SEO but don't know what's actually working
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* SEO Services */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Comprehensive</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                  SEO Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From technical optimization to content strategy, we cover all aspects of SEO to maximize your online
                visibility
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Keyword Research & Strategy",
                  description: "Identify high-value keywords and create data-driven content strategies",
                  features: [
                    "Competitor keyword analysis",
                    "Search intent mapping",
                    "Long-tail keyword discovery",
                    "Keyword difficulty assessment",
                  ],
                  color: "from-[#8B5CF6] to-[#00F5FF]",
                },
                {
                  icon: Globe,
                  title: "Technical SEO",
                  description: "Optimize your website's technical foundation for better search performance",
                  features: [
                    "Site speed optimization",
                    "Mobile responsiveness",
                    "Schema markup implementation",
                    "XML sitemap optimization",
                  ],
                  color: "from-[#00F5FF] to-[#F472B6]",
                },
                {
                  icon: BarChart3,
                  title: "On-Page Optimization",
                  description: "Optimize individual pages for maximum search engine visibility",
                  features: [
                    "Title tag optimization",
                    "Meta description crafting",
                    "Header structure improvement",
                    "Internal linking strategy",
                  ],
                  color: "from-[#F472B6] to-[#FF7600]",
                },
                {
                  icon: TrendingUp,
                  title: "Content Optimization",
                  description: "Create and optimize content that ranks and converts",
                  features: [
                    "Content gap analysis",
                    "SEO content creation",
                    "Content refresh strategies",
                    "Featured snippet optimization",
                  ],
                  color: "from-[#FF7600] to-[#8B5CF6]",
                },
                {
                  icon: Target,
                  title: "Local SEO",
                  description: "Dominate local search results and attract nearby customers",
                  features: [
                    "Google My Business optimization",
                    "Local citation building",
                    "Review management",
                    "Local keyword targeting",
                  ],
                  color: "from-[#8B5CF6] to-[#F472B6]",
                },
                {
                  icon: Users,
                  title: "Link Building",
                  description: "Build high-quality backlinks to boost domain authority",
                  features: [
                    "Authority link acquisition",
                    "Guest posting campaigns",
                    "Broken link building",
                    "Digital PR strategies",
                  ],
                  color: "from-[#F472B6] to-[#00F5FF]",
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

      {/* SEO Process */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Our Proven</span>{" "}
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                    SEO Process
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  A systematic approach that delivers consistent results and sustainable growth
                </p>

                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "SEO Audit & Analysis",
                      description: "Comprehensive analysis of your current SEO performance and opportunities",
                    },
                    {
                      step: "02",
                      title: "Strategy Development",
                      description: "Custom SEO strategy based on your business goals and market analysis",
                    },
                    {
                      step: "03",
                      title: "Implementation",
                      description: "Execute technical optimizations, content creation, and link building",
                    },
                    {
                      step: "04",
                      title: "Monitoring & Optimization",
                      description: "Continuous tracking, reporting, and strategy refinement for best results",
                    },
                  ].map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] rounded-full flex items-center justify-center flex-shrink-0">
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

              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/web-analytics.webp"
                    alt="SEO Analytics"
                    width={600}
                    height={500}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00F5FF]/20 to-transparent rounded-2xl"></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">SEO</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Real metrics from our SEO campaigns</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "300%", label: "Organic Traffic", description: "Average increase in 6 months" },
                { metric: "150%", label: "Keyword Rankings", description: "More keywords in top 10" },
                { metric: "250%", label: "Lead Generation", description: "Increase in qualified leads" },
                { metric: "180%", label: "Conversion Rate", description: "Improvement in organic conversions" },
              ].map((result, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent mb-2">
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

      {/* Pricing Packages */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">SEO</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                  Packages
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Choose the perfect SEO package for your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Local SEO",
                  price: "$1,500",
                  period: "/month",
                  description: "Perfect for local businesses and service providers",
                  features: [
                    "Google My Business optimization",
                    "Local keyword targeting (20 keywords)",
                    "Local citation building",
                    "Monthly reporting",
                    "Review management setup",
                  ],
                  popular: false,
                },
                {
                  name: "Growth SEO",
                  price: "$2,500",
                  period: "/month",
                  description: "Ideal for growing businesses and e-commerce",
                  features: [
                    "Comprehensive keyword research (50 keywords)",
                    "Technical SEO audit & fixes",
                    "Content optimization",
                    "Link building campaign",
                    "Monthly strategy calls",
                    "Advanced analytics setup",
                  ],
                  popular: true,
                },
                {
                  name: "Enterprise SEO",
                  price: "$4,500",
                  period: "/month",
                  description: "For large businesses and competitive markets",
                  features: [
                    "Unlimited keyword targeting",
                    "Advanced technical SEO",
                    "Content creation & optimization",
                    "Aggressive link building",
                    "Weekly strategy calls",
                    "Dedicated SEO manager",
                    "Custom reporting dashboard",
                  ],
                  popular: false,
                },
              ].map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? "border-2 border-[#8B5CF6] scale-105" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#8B5CF6] mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${plan.popular ? "bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF]" : ""}`}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Frequently Asked</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How long does it take to see SEO results?",
                  answer:
                    "Most clients see initial improvements in 3-4 months, with significant results in 6-12 months. SEO is a long-term strategy that builds momentum over time.",
                },
                {
                  question: "What's included in your SEO service?",
                  answer:
                    "Our SEO service includes keyword research, technical optimization, content creation, link building, local SEO (if applicable), and monthly reporting with strategy calls.",
                },
                {
                  question: "Do you guarantee first page rankings?",
                  answer:
                    "While we can't guarantee specific rankings (no legitimate SEO company can), we do guarantee improved visibility, traffic, and leads through our proven strategies.",
                },
                {
                  question: "What's your onboarding process?",
                  answer:
                    "We start with a comprehensive SEO audit, followed by strategy development, then implementation. You'll have a dedicated account manager and monthly check-ins.",
                },
                {
                  question: "Can I cancel anytime?",
                  answer:
                    "Yes, our SEO services are month-to-month with no long-term contracts. We believe in earning your business every month through results.",
                },
                {
                  question: "Do you work with my industry?",
                  answer:
                    "We work with businesses across all industries including healthcare, legal, e-commerce, SaaS, local services, and more. Each strategy is customized to your market.",
                },
                {
                  question: "What makes your SEO different?",
                  answer:
                    "We focus on sustainable, white-hat strategies that deliver long-term results. Our approach combines technical expertise with content marketing and data-driven optimization.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Who Is This For */}
      <ScrollAnimation>
        <section className="py-20 bg-blue-50 dark:bg-blue-950/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Perfect For</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                  These Businesses
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Businesses",
                  description:
                    "Restaurants, law firms, medical practices, and service providers who need local customers",
                  icon: "🏪",
                },
                {
                  title: "E-commerce Stores",
                  description: "Online retailers looking to increase product visibility and drive organic sales",
                  icon: "🛒",
                },
                {
                  title: "SaaS Companies",
                  description:
                    "Software companies needing to rank for competitive keywords and generate qualified leads",
                  icon: "💻",
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

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-[#00F5FF]/10 to-[#F472B6]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                    Dominate
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Search Results?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create an SEO strategy that drives organic traffic, increases rankings, and grows your business
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get Free SEO Audit
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full"
                  >
                    View SEO Case Studies
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
