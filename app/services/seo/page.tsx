import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Target, BarChart3, ArrowRight, CheckCircle, Globe, Users, Star, Award } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"

export default function SEOPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 relative overflow-hidden bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] text-white border-0 mb-6">
                  🚀 #1 SEO Agency
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                    Rank Higher,
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Get More Traffic,</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Grow Your Business</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                  We help <strong>local businesses and e-commerce stores</strong> dominate search results with proven,
                  data-driven SEO strategies that deliver measurable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button pulse-animation"
                  >
                    Get My Free SEO Audit
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full"
                  >
                    View Success Stories
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
                    <Award className="h-5 w-5 text-[#8B5CF6]" />
                    <span className="text-sm font-medium">500+ Projects</span>
                  </div>
                </div>
              </div>

              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/business-analytics.png"
                    alt="SEO Analytics Dashboard"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/10 to-transparent rounded-2xl"></div>
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
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-red-600 dark:text-red-400">Is This You?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                If any of these sound familiar, you're in the right place...
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">😤</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Competitors Outranking You</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Your competitors show up first while you're buried on page 2 or 3
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">👻</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Website is Invisible</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Potential customers can't find you when searching for your services
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">📉</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Traffic Not Converting</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Getting some visitors but they're not turning into paying customers
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">🤷</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">DIY SEO Not Working</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Tried doing SEO yourself but don't see any meaningful results
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
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                  A Clear Path to Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our proven 5-step SEO process that has helped 500+ businesses dominate search results
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-5 gap-8">
                {[
                  {
                    step: "01",
                    icon: Search,
                    title: "Technical Audit",
                    description: "Deep analysis of your website's technical SEO foundation and opportunities",
                    color: "from-[#8B5CF6] to-[#00F5FF]",
                  },
                  {
                    step: "02",
                    icon: Target,
                    title: "On-Page SEO",
                    description: "Optimize every page for maximum search engine visibility and user experience",
                    color: "from-[#00F5FF] to-[#F472B6]",
                  },
                  {
                    step: "03",
                    icon: Users,
                    title: "Content Strategy",
                    description: "Create valuable, keyword-optimized content that attracts and converts",
                    color: "from-[#F472B6] to-[#FF7600]",
                  },
                  {
                    step: "04",
                    icon: Globe,
                    title: "Link Building",
                    description: "Build high-quality backlinks to boost your domain authority and rankings",
                    color: "from-[#FF7600] to-[#8B5CF6]",
                  },
                  {
                    step: "05",
                    icon: BarChart3,
                    title: "Reporting",
                    description: "Track progress with detailed analytics and monthly strategy optimization",
                    color: "from-[#8B5CF6] to-[#F472B6]",
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
        <section className="py-20 bg-gradient-to-r from-[#8B5CF6]/5 to-[#00F5FF]/5 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] text-white border-0 mb-6">
                ⭐ Client Success Story
              </Badge>

              <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-relaxed">
                "With M&H Digital's SEO service, we saw a{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                  300% increase in organic leads
                </span>{" "}
                in just 6 months. Our revenue grew by $150K directly from SEO traffic."
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SM</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">Sarah Mitchell</div>
                  <div className="text-gray-600 dark:text-gray-400">CEO, TechStart Solutions</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent mb-2">
                    300%
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Organic Lead Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent mb-2">
                    #1
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Google Rankings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent mb-2">
                    $150K
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Additional Revenue</div>
                </div>
              </div>
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
                <span className="text-gray-900 dark:text-white">SEO Packages That</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                  Deliver Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Transparent pricing. No hidden fees. Cancel anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$1,497",
                  period: "/month",
                  description: "Perfect for small local businesses ready to grow",
                  badge: "Most Popular for Local",
                  features: [
                    "Complete SEO audit & strategy",
                    "Google My Business optimization",
                    "Local keyword targeting (25 keywords)",
                    "On-page optimization (10 pages)",
                    "Local citation building",
                    "Monthly progress reports",
                    "Email support",
                  ],
                  popular: false,
                  cta: "Start Growing Locally",
                },
                {
                  name: "Growth",
                  price: "$2,497",
                  period: "/month",
                  description: "Ideal for growing businesses and e-commerce",
                  badge: "Best Value",
                  features: [
                    "Everything in Starter, plus:",
                    "National keyword targeting (50 keywords)",
                    "Content creation (4 blog posts/month)",
                    "Technical SEO optimization",
                    "Link building campaign",
                    "Competitor analysis",
                    "Bi-weekly strategy calls",
                    "Priority support",
                  ],
                  popular: true,
                  cta: "Scale Your Business",
                },
                {
                  name: "Dominator",
                  price: "$4,497",
                  period: "/month",
                  description: "For businesses serious about market domination",
                  badge: "Maximum Results",
                  features: [
                    "Everything in Growth, plus:",
                    "Unlimited keyword targeting",
                    "Advanced technical SEO",
                    "Content creation (8 blog posts/month)",
                    "Aggressive link building",
                    "Conversion rate optimization",
                    "Weekly strategy calls",
                    "Dedicated SEO manager",
                    "Custom reporting dashboard",
                  ],
                  popular: false,
                  cta: "Dominate Your Market",
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.popular ? "border-2 border-[#8B5CF6] scale-105 shadow-2xl" : "shadow-lg"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] text-white px-4 py-1">
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
                          <CheckCircle className="h-5 w-5 text-[#8B5CF6] mr-3 mt-0.5 flex-shrink-0" />
                          <span className={feature.includes("Everything in") ? "font-semibold" : ""}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] hover:opacity-90" : ""}`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                      No setup fees • Cancel anytime • 30-day money-back guarantee
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Need a custom solution? We work with businesses of all sizes.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Service-Specific FAQ */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">SEO Questions</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                  Answered
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Everything you need to know about our SEO services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How long does it take to see SEO results?",
                  answer:
                    "Most clients see initial improvements in 3-4 months, with significant results in 6-12 months. SEO is a long-term strategy - we typically see the biggest gains between months 6-18. However, technical fixes and local SEO improvements can show results much faster, sometimes within 30-60 days.",
                },
                {
                  question: "What KPIs do you track and report on?",
                  answer:
                    "We track the metrics that matter to your business: organic traffic growth, keyword rankings, local visibility, conversion rates, and most importantly - leads and revenue generated from SEO. You'll receive detailed monthly reports showing progress on all key metrics plus actionable insights for continued growth.",
                },
                {
                  question: "Do you offer any guarantees?",
                  answer:
                    "While no legitimate SEO company can guarantee specific rankings (Google's algorithm changes constantly), we do guarantee: improved website performance, increased organic visibility, detailed monthly reporting, and our commitment to your success. We also offer a 30-day money-back guarantee if you're not satisfied with our service.",
                },
                {
                  question: "What makes your SEO different from other agencies?",
                  answer:
                    "We focus on sustainable, white-hat strategies that deliver long-term results. Our approach combines technical expertise, content marketing, and local SEO (when applicable). Plus, you get direct access to your SEO specialist, monthly strategy calls, and transparent reporting. We're not just an SEO agency - we're your growth partner.",
                },
                {
                  question: "Do you work with my industry/business type?",
                  answer:
                    "We work with businesses across all industries including healthcare, legal, e-commerce, SaaS, local services, restaurants, real estate, and more. Each strategy is customized to your specific market, competition, and business goals. During our consultation, we'll discuss your industry-specific challenges and opportunities.",
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

      {/* Final CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
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
                  Join 500+ businesses that have transformed their online presence with our proven SEO strategies. Get
                  your free audit and see exactly how we can help you grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button text-lg px-8 py-4"
                  >
                    Get My Free SEO Audit ($500 Value)
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full px-8"
                  >
                    View More Success Stories
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white">500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Successful Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white">4.9★</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Client Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
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
