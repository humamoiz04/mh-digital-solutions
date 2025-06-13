import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, ArrowRight, Star, Award, BarChart3, Users, Globe, CheckCircle, TrendingUp } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PPC Advertising Services | Data-Driven Campaigns | M&H Digital Solutions",
  description:
    "Turn ad spend into profit with our data-driven PPC campaigns. Google Ads, Facebook Ads, and LinkedIn Ads management for e-commerce and SaaS companies. Get more leads and sales.",
  keywords:
    "PPC advertising, Google Ads management, Facebook Ads, LinkedIn Ads, PPC campaigns, paid advertising, ROI tracking, conversion optimization",
  alternates: {
    canonical: "https://www.mhdigitalsolutions.com/services/ppc-advertising",
  },
}

const ppcSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PPC Advertising Services",
  description:
    "Data-driven PPC campaigns that deliver qualified leads and sales for e-commerce stores and SaaS companies.",
  provider: {
    "@type": "Organization",
    name: "M&H Digital Solutions",
  },
  serviceType: "PPC Advertising",
  areaServed: "United States",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PPC Advertising Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Management",
          description: "Strategic Google Ads campaigns that drive qualified traffic and conversions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Facebook & Instagram Ads",
          description: "Targeted social media advertising campaigns",
        },
      },
    ],
  },
}

export default function PPCAdvertisingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ppcSchema) }} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <ScrollAnimation>
          <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-white border-0 mb-6">
                    🎯 PPC Advertising Experts
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                      Stop Wasting Money,
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">Start Getting Results,</span>
                    <br />
                    <span className="text-gray-900 dark:text-white">Scale Your Business</span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                    We help <strong>e-commerce stores and SaaS companies</strong> turn ad spend into profit with
                    data-driven PPC campaigns that deliver qualified leads and sales.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://calendly.com/mhdigitalsolutionsus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="calendly-button pulse-animation"
                    >
                      Get My Free PPC Audit
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-white rounded-full"
                    >
                      View Campaign Results
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
                      <span className="text-sm font-medium">$50M+ Ad Spend Managed</span>
                    </div>
                  </div>
                </div>

                <ScrollAnimation animation="fadeInRight" delay={200}>
                  <div className="relative">
                    <Image
                      src="/images/roi-optimization.png"
                      alt="PPC ROI Dashboard"
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
          <section className="py-20 bg-red-50 dark:bg-red-950/20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-red-600 dark:text-red-400">Is This You?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                  If you're nodding your head, we can fix this...
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">💸</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Burning Money on Ads</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      High ad costs with low returns - spending thousands but getting few sales
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">🎯</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Wrong Audience Targeting</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Your ads reach people who will never buy from you
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">📊</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">No Clear ROI Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Can't tell which ads work or where your money goes
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">🤯</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Overwhelmed by Platforms</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Google, Facebook, LinkedIn - too many options, no clear strategy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Our Solution: Clear Path to Results */}
        <ScrollAnimation>
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Our Solution:</span>{" "}
                  <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    PPC That Actually Converts
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our proven 5-step PPC process that turns ad spend into profit
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-5 gap-8">
                  {[
                    {
                      step: "01",
                      icon: Target,
                      title: "Campaign Audit",
                      description: "Analyze your current campaigns and identify opportunities for improvement",
                      color: "from-[#00F5FF] to-[#8B5CF6]",
                    },
                    {
                      step: "02",
                      icon: Users,
                      title: "Audience Targeting",
                      description: "Define your ideal customer and create laser-focused targeting strategies",
                      color: "from-[#8B5CF6] to-[#F472B6]",
                    },
                    {
                      step: "03",
                      icon: Globe,
                      title: "Campaign Creation",
                      description: "Build high-converting campaigns across the right platforms for your business",
                      color: "from-[#F472B6] to-[#FF7600]",
                    },
                    {
                      step: "04",
                      icon: BarChart3,
                      title: "Optimization",
                      description: "Continuous testing and refinement to maximize ROI and reduce wasted spend",
                      color: "from-[#FF7600] to-[#00F5FF]",
                    },
                    {
                      step: "05",
                      icon: TrendingUp,
                      title: "Scaling",
                      description: "Strategically increase budget on winning campaigns to grow your business",
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
          <section className="py-20 bg-gradient-to-r from-[#00F5FF]/5 to-[#8B5CF6]/5">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-white border-0 mb-6">
                  ⭐ Client Success Story
                </Badge>

                <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-relaxed">
                  "M&H Digital's PPC campaigns delivered a{" "}
                  <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    450% ROI in just 60 days
                  </span>{" "}
                  and cut our cost per acquisition by 62%."
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DM</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">David Miller</div>
                    <div className="text-gray-600 dark:text-gray-400">CEO, SaaS Growth Solutions</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                      450%
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Return on Ad Spend</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                      62%
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Lower Cost Per Acquisition</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                      60 Days
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Time to Results</div>
                  </div>
                </div>
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
                  <span className="text-gray-900 dark:text-white">PPC Management Packages That</span>{" "}
                  <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    Deliver ROI
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Transparent pricing based on your monthly ad spend. No long-term contracts.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "Starter",
                    price: "$997",
                    period: "/month",
                    adSpend: "Up to $5,000/mo ad spend",
                    description: "Perfect for small businesses starting with PPC",
                    badge: "Great for Beginners",
                    features: [
                      "Google Ads management",
                      "1 ad platform",
                      "Keyword research",
                      "Ad copywriting",
                      "Campaign setup",
                      "Monthly optimization",
                      "Monthly reporting",
                      "Email support",
                    ],
                    popular: false,
                    cta: "Start Converting",
                  },
                  {
                    name: "Growth",
                    price: "$1,997",
                    period: "/month",
                    adSpend: "$5,000-$15,000/mo ad spend",
                    description: "Ideal for businesses ready to scale their PPC efforts",
                    badge: "Most Popular",
                    features: [
                      "Google & Facebook Ads",
                      "2 ad platforms",
                      "Advanced audience targeting",
                      "A/B testing",
                      "Conversion tracking setup",
                      "Landing page recommendations",
                      "Bi-weekly optimization",
                      "Bi-weekly strategy calls",
                      "Priority support",
                    ],
                    popular: true,
                    cta: "Scale Your Campaigns",
                  },
                  {
                    name: "Enterprise",
                    price: "$3,997",
                    period: "/month",
                    adSpend: "$15,000-$50,000/mo ad spend",
                    description: "For businesses with serious ad budgets and growth goals",
                    badge: "Maximum Results",
                    features: [
                      "All ad platforms",
                      "Custom attribution modeling",
                      "Competitor analysis",
                      "Advanced conversion tracking",
                      "Landing page optimization",
                      "Weekly optimization",
                      "Weekly strategy calls",
                      "Dedicated account manager",
                      "Custom reporting dashboard",
                      "Phone & email support",
                    ],
                    popular: false,
                    cta: "Maximize Your ROI",
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
                        <div className="mb-2">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                        </div>
                        <div className="text-sm font-medium text-[#00F5FF] mb-4">{plan.adSpend}</div>
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
                        Month-to-month • No setup fees • Cancel anytime
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Ad spend over $50,000/month? We offer custom enterprise solutions.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-white"
                >
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Service-Specific FAQ */}
        <ScrollAnimation>
          <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">PPC Questions</span>{" "}
                  <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    Answered
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Everything you need to know about our PPC advertising services
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  {
                    question: "How quickly will I see results from PPC campaigns?",
                    answer:
                      "Most clients see initial results within 2-4 weeks as we gather data and optimize campaigns. Significant improvements typically occur within 60-90 days as we refine targeting, messaging, and bidding strategies. Unlike SEO, PPC can drive immediate traffic, but achieving optimal ROI requires continuous testing and optimization.",
                  },
                  {
                    question: "Which PPC platforms do you manage?",
                    answer:
                      "We manage all major PPC platforms including Google Ads, Microsoft Ads (Bing), Facebook & Instagram Ads, LinkedIn Ads, Twitter Ads, and Amazon Advertising. We'll recommend the best platforms based on your specific business goals, target audience, and budget to maximize your ROI.",
                  },
                  {
                    question: "How do you measure PPC success?",
                    answer:
                      "We focus on business metrics that matter: cost per acquisition (CPA), return on ad spend (ROAS), conversion rate, and overall ROI. We track the entire customer journey from click to conversion using advanced attribution modeling. You'll receive detailed reports showing exactly how your ad spend translates to revenue.",
                  },
                  {
                    question: "What's your approach to budget management?",
                    answer:
                      "We treat your ad budget as if it were our own money. We start conservatively, testing different approaches to identify what works best. As we find winning campaigns, we gradually increase spend on high-performing ads while cutting underperforming ones. This data-driven approach ensures maximum efficiency and prevents wasted spend.",
                  },
                  {
                    question: "Do I need to sign a long-term contract?",
                    answer:
                      "No. All our PPC management services are month-to-month with no long-term contracts required. We believe in earning your business each month through results. While PPC is most effective as a long-term strategy, you're free to cancel anytime with 30 days' notice. Most clients stay with us for years because of the consistent ROI we deliver.",
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
          <section className="py-20">
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
                    <span className="text-gray-900 dark:text-white">Your Ad Performance?</span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Get a free PPC audit and discover how we can improve your campaigns, reduce wasted spend, and
                    increase your ROI.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://calendly.com/mhdigitalsolutionsus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="calendly-button text-lg px-8 py-4"
                    >
                      Get My Free PPC Audit ($500 Value)
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-white rounded-full px-8"
                    >
                      View Case Studies
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="font-bold text-gray-900 dark:text-white">$50M+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Ad Spend Managed</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 dark:text-white">4.9★</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Client Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 dark:text-white">300%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Average ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </>
  )
}
