import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Target,
  TrendingUp,
  BarChart3,
  CheckCircle,
  DollarSign,
  Users,
  AlertTriangle,
  Zap,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"

export default function PPCAdvertisingPage() {
  const faqs = [
    {
      question: "How much does PPC advertising cost for businesses?",
      answer:
        "PPC advertising costs consist of two main components: your ad spend (the budget you allocate directly to platforms like Google or Meta) and our management fees. Ad spend varies widely based on your industry, competition, and goals. We'll work with you to determine an optimal budget and provide transparent pricing for our management services during a free consultation.",
    },
    {
      question: "How quickly can I see results from a PPC campaign?",
      answer:
        "One of the biggest advantages of PPC is its speed. You can start seeing immediate traffic and clicks as soon as your campaigns go live. While initial results are quick, it typically takes 2-4 weeks to optimize campaigns for peak performance and 1-3 months to achieve consistent, profitable ROI as we refine targeting and bids.",
    },
    {
      question: "Which platforms do you manage PPC campaigns on (e.g., Google Ads, Meta Ads)?",
      answer:
        "We have expertise across all major PPC platforms. This includes Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook, Instagram), Microsoft Ads (Bing), LinkedIn Ads, and Twitter Ads. We'll recommend and manage campaigns on the platforms where your target audience is most active and where you can achieve the best results.",
    },
    {
      question: "How do you ensure positive ROI from PPC campaigns?",
      answer:
        "We ensure positive ROI through a data-driven approach focused on continuous optimization. This includes in-depth keyword research, precise audience targeting, compelling ad copy and creative, rigorous A/B testing, conversion tracking setup, and ongoing bid management. We constantly monitor performance metrics like CPA and ROAS to maximize your ad spend efficiency.",
    },
  ]

  const testimonials = [
    {
      text: "Our PPC campaigns with MH Digital Solutions generated a 4:1 return on ad spend in the first month. Their strategic approach to keyword targeting and ad optimization is exceptional.",
      name: "Mark Thompson",
      position: "Marketing Manager",
      company: "TechStart Solutions",
      rating: 5,
    },
    {
      text: "They transformed our Google Ads performance completely. Our cost per lead dropped by 60% while our conversion rate increased by 180%. Outstanding results!",
      name: "Lisa Rodriguez",
      position: "Business Owner",
      company: "Elite Fitness Center",
      rating: 5,
    },
    {
      text: "The team's expertise in Facebook and Google advertising helped us scale from $10K to $50K monthly revenue in just 6 months. Highly recommend their PPC services.",
      name: "David Chen",
      position: "E-commerce Director",
      company: "Fashion Forward",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-[#FF7600] to-[#F472B6] text-white border-0">
                  🎯 Expert PPC Management
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] bg-clip-text text-transparent">
                    Immediate Traffic.
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Measurable ROI.</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Our expert PPC team uses a proven methodology to deliver immediate, qualified traffic to your website
                  with expertly managed pay-per-click campaigns that maximize your return on investment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FF7600] to-[#F472B6] text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                  >
                    Get Free PPC Analysis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="/case-studies"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#FF7600] text-[#FF7600] hover:bg-[#FF7600] hover:text-white rounded-full transition-all duration-300"
                  >
                    View Case Studies
                  </a>
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/analytics-growth.webp"
                    alt="PPC Advertising Services"
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

      {/* Problem Section - Is This For You? */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Is This</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] bg-clip-text text-transparent">
                  For You?
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Are you experiencing any of these common PPC advertising challenges?
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: AlertTriangle,
                  problem: "Wasting money on ads that don't convert",
                  description: "High ad spend with poor return on investment",
                },
                {
                  icon: Target,
                  problem: "Struggling to reach the right audience",
                  description: "Your ads are showing to people who aren't interested",
                },
                {
                  icon: BarChart3,
                  problem: "Can't track which ads are working",
                  description: "No clear visibility into campaign performance",
                },
                {
                  icon: DollarSign,
                  problem: "High cost per click with low conversions",
                  description: "Paying premium prices for poor quality traffic",
                },
                {
                  icon: TrendingUp,
                  problem: "Competitors are dominating search results",
                  description: "Your business is invisible when customers search",
                },
                {
                  icon: Users,
                  problem: "Need immediate traffic and leads",
                  description: "SEO takes too long, you need results now",
                },
              ].map((item, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 hover-lift p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.problem}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Solution Section - Our PPC Process */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] bg-clip-text text-transparent">
                  PPC Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our proven 5-step methodology that builds massive trust and delivers consistent results
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Comprehensive Account Audit",
                    process: "Deep-dive analysis of your current advertising performance",
                    methodology:
                      "We analyze your existing campaigns, keywords, and competitors to identify opportunities",
                    deliverables: [
                      "Account audit report",
                      "Competitor analysis",
                      "Keyword opportunities",
                      "Budget recommendations",
                    ],
                    benefits: "Clear understanding of what's working and what's not",
                    color: "from-[#FF7600] to-[#F472B6]",
                    icon: BarChart3,
                  },
                  {
                    step: "02",
                    title: "Strategic Campaign Planning",
                    process: "Custom strategy development based on your business goals",
                    methodology: "Data-driven approach using industry best practices and proven frameworks",
                    deliverables: [
                      "Campaign strategy document",
                      "Keyword research",
                      "Ad copy concepts",
                      "Landing page recommendations",
                    ],
                    benefits: "Targeted campaigns that reach your ideal customers",
                    color: "from-[#F472B6] to-[#8B5CF6]",
                    icon: Target,
                  },
                  {
                    step: "03",
                    title: "Campaign Setup & Launch",
                    process: "Professional campaign creation and optimization",
                    methodology: "Best practice setup with conversion tracking and performance monitoring",
                    deliverables: [
                      "Campaign creation",
                      "Ad copy writing",
                      "Conversion tracking",
                      "Initial optimization",
                    ],
                    benefits: "Campaigns optimized for maximum performance from day one",
                    color: "from-[#8B5CF6] to-[#00F5FF]",
                    icon: Zap,
                  },
                  {
                    step: "04",
                    title: "Continuous Optimization",
                    process: "Ongoing testing and refinement for better results",
                    methodology: "A/B testing, bid optimization, and performance analysis",
                    deliverables: ["Weekly optimizations", "A/B testing", "Bid management", "Performance improvements"],
                    benefits: "Continuously improving ROI and campaign performance",
                    color: "from-[#00F5FF] to-[#FF7600]",
                    icon: TrendingUp,
                  },
                  {
                    step: "05",
                    title: "Transparent Reporting",
                    process: "Detailed performance tracking and strategic insights",
                    methodology: "Real-time dashboards and monthly strategy reviews",
                    deliverables: [
                      "Monthly reports",
                      "Performance dashboards",
                      "Strategy calls",
                      "Growth recommendations",
                    ],
                    benefits: "Complete visibility into your advertising investment",
                    color: "from-[#FF7600] to-[#F472B6]",
                    icon: BarChart3,
                  },
                ].map((phase, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className={index % 2 === 1 ? "md:order-2" : ""}>
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center`}
                          >
                            <phase.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-orange-600 mb-1">STEP {phase.step}</div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{phase.title}</h3>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Process:</h4>
                            <p className="text-gray-600 dark:text-gray-400">{phase.process}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Methodology:</h4>
                            <p className="text-gray-600 dark:text-gray-400">{phase.methodology}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Benefits:</h4>
                            <p className="text-orange-600 font-medium">{phase.benefits}</p>
                          </div>
                        </div>
                      </div>

                      <div className={index % 2 === 1 ? "md:order-1" : ""}>
                        <Card className="glass border-0">
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What You Get:</h4>
                            <ul className="space-y-2">
                              {phase.deliverables.map((deliverable, deliverableIndex) => (
                                <li key={deliverableIndex} className="flex items-center">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-gray-600 dark:text-gray-400">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Deliverables Section - What You Get */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">What You Get:</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] bg-clip-text text-transparent">
                  Transparent PPC Packages
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Choose the package that fits your business needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  description: "Perfect for small businesses testing PPC",
                  price: "$997/mo",
                  adSpend: "$1,000-$3,000/mo",
                  features: [
                    "Google Ads management",
                    "Keyword research & targeting",
                    "Ad copy creation & testing",
                    "Landing page optimization",
                    "Monthly reporting",
                    "Email support",
                  ],
                  popular: false,
                  cta: "Start PPC Campaigns",
                },
                {
                  name: "Growth",
                  description: "Most popular for growing businesses",
                  price: "$1,497/mo",
                  adSpend: "$3,000-$10,000/mo",
                  features: [
                    "Everything in Starter, plus:",
                    "Multi-platform campaigns",
                    "Advanced audience targeting",
                    "Conversion tracking & optimization",
                    "Bi-weekly strategy calls",
                    "Priority support",
                  ],
                  popular: true,
                  cta: "Scale Your Growth",
                },
                {
                  name: "Pro",
                  description: "For businesses serious about domination",
                  price: "$2,497/mo",
                  adSpend: "$10,000+/mo",
                  features: [
                    "Everything in Growth, plus:",
                    "Advanced campaign strategies",
                    "Custom audience development",
                    "Dedicated account manager",
                    "Weekly optimization calls",
                    "Custom reporting dashboard",
                  ],
                  popular: false,
                  cta: "Dominate Your Market",
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.popular ? "border-2 border-orange-500 scale-105 shadow-2xl" : "shadow-lg"} glass`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{plan.description}</p>
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#FF7600] to-[#F472B6] bg-clip-text text-transparent mb-2">
                        {plan.price}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">+ Ad Spend: {plan.adSpend}</div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className={feature.includes("Everything in") ? "font-semibold" : ""}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://calendly.com/mhdigitalsolutionsus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#FF7600] to-[#F472B6] hover:opacity-90 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      {plan.cta}
                    </a>

                    <p className="text-xs text-center text-gray-500 mt-4">
                      No setup fees • Cancel anytime • 30-day money-back guarantee
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Service-Specific Proof Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">PPC</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                See how we increased ROI by 400% for TechStart Solutions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="glass border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Badge className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] text-white mb-4">
                        PPC Case Study
                      </Badge>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        TechStart Solutions: 4:1 ROAS in First Month
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            High customer acquisition costs and poor ad performance across Google and Facebook
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            Complete campaign restructure, advanced audience targeting, and landing page optimization
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { metric: "4:1", label: "Return on Ad Spend" },
                        { metric: "60%", label: "Cost Reduction" },
                        { metric: "180%", label: "Conversion Increase" },
                        { metric: "30 days", label: "Time to Results" },
                      ].map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl font-bold bg-gradient-to-r from-[#FF7600] to-[#F472B6] bg-clip-text text-transparent mb-2">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* FAQ Section */}
      <FAQ title="PPC Advertising FAQ" subtitle="Common questions about our PPC services" faqs={faqs} />

      {/* Final, Urgent CTA */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7600]/10 via-[#F472B6]/10 to-[#8B5CF6]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to Dominate</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] bg-clip-text text-transparent">
                    the Search Results?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Stop wasting money on ads that don't work. Get immediate traffic and measurable ROI with our proven
                  PPC strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FF7600] to-[#F472B6] text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Get a Free, No-Obligation Proposal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="/case-studies"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#FF7600] text-[#FF7600] hover:bg-[#FF7600] hover:text-white rounded-full transition-all duration-300"
                  >
                    View More Case Studies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
