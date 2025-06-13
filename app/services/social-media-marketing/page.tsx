import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Share2, Users, TrendingUp, Heart, ArrowRight, CheckCircle, Instagram, Star, Award } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"

export default function SocialMediaMarketingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 relative overflow-hidden bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] text-white border-0 mb-6">
                  📱 Social Media Experts
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent">
                    Build Your Brand,
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Engage Your Audience,</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Drive Real Sales</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                  We help <strong>e-commerce brands and service businesses</strong> build powerful social media presence
                  that converts followers into paying customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button pulse-animation"
                  >
                    Get My Free Social Media Audit
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#F472B6] text-[#F472B6] hover:bg-[#F472B6] hover:text-white rounded-full"
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
                    <Award className="h-5 w-5 text-[#F472B6]" />
                    <span className="text-sm font-medium">300+ Brands Grown</span>
                  </div>
                </div>
              </div>

              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/business-objectives.png"
                    alt="Social Media Strategy Dashboard"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F472B6]/10 to-transparent rounded-2xl"></div>
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
                Sound familiar? You're not alone - but you don't have to stay stuck...
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">😴</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Posts Get No Engagement</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    You post regularly but get few likes, comments, or shares
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">No Clear Strategy</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Posting random content without understanding your audience
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">💸</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Wasting Ad Money</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Spending on ads that don't convert or reach the wrong people
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">⏰</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">No Time to Manage</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Too busy running your business to create consistent content
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
                <span className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent">
                  Social Media That Sells
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our proven 5-step social media process that turns followers into customers
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-5 gap-8">
                {[
                  {
                    step: "01",
                    icon: Users,
                    title: "Audience Research",
                    description: "Deep dive into your ideal customers' social media behavior and preferences",
                    color: "from-[#F472B6] to-[#FF7600]",
                  },
                  {
                    step: "02",
                    icon: Share2,
                    title: "Content Strategy",
                    description: "Create a content calendar that educates, entertains, and converts",
                    color: "from-[#FF7600] to-[#8B5CF6]",
                  },
                  {
                    step: "03",
                    icon: Heart,
                    title: "Content Creation",
                    description: "Professional graphics, videos, and copy that stops the scroll",
                    color: "from-[#8B5CF6] to-[#00F5FF]",
                  },
                  {
                    step: "04",
                    icon: TrendingUp,
                    title: "Community Building",
                    description: "Engage authentically and build a loyal community around your brand",
                    color: "from-[#00F5FF] to-[#F472B6]",
                  },
                  {
                    step: "05",
                    icon: Instagram,
                    title: "Performance Optimization",
                    description: "Track what works and optimize for maximum engagement and conversions",
                    color: "from-[#F472B6] to-[#8B5CF6]",
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
        <section className="py-20 bg-gradient-to-r from-[#F472B6]/5 to-[#FF7600]/5 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] text-white border-0 mb-6">
                ⭐ Client Success Story
              </Badge>

              <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-relaxed">
                "M&H Digital's social media strategy increased our{" "}
                <span className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent">
                  online sales by 400%
                </span>{" "}
                in 8 months. Our Instagram following grew from 2K to 25K engaged followers."
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#F472B6] to-[#FF7600] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JR</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">Jessica Rodriguez</div>
                  <div className="text-gray-600 dark:text-gray-400">Founder, Bella Boutique</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent mb-2">
                    400%
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent mb-2">
                    25K
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Engaged Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent mb-2">
                    8x
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">ROI on Ad Spend</div>
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
                <span className="text-gray-900 dark:text-white">Social Media Packages That</span>{" "}
                <span className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent">
                  Drive Sales
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Choose your growth level. Scale up anytime.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$1,297",
                  period: "/month",
                  description: "Perfect for small businesses building their presence",
                  badge: "Great for Beginners",
                  features: [
                    "2 social media platforms",
                    "12 custom posts per month",
                    "Basic graphics & captions",
                    "Community management",
                    "Monthly analytics report",
                    "Email support",
                  ],
                  popular: false,
                  cta: "Start Building Your Brand",
                },
                {
                  name: "Growth",
                  price: "$2,497",
                  period: "/month",
                  description: "Ideal for businesses ready to scale their social presence",
                  badge: "Most Popular",
                  features: [
                    "4 social media platforms",
                    "20 custom posts per month",
                    "Professional graphics & videos",
                    "Stories & reels content",
                    "Paid ad management ($500 ad spend included)",
                    "Influencer outreach",
                    "Bi-weekly strategy calls",
                    "Priority support",
                  ],
                  popular: true,
                  cta: "Scale Your Social Presence",
                },
                {
                  name: "Dominator",
                  price: "$4,497",
                  period: "/month",
                  description: "For brands serious about social media domination",
                  badge: "Maximum Growth",
                  features: [
                    "All major platforms",
                    "40+ posts per month",
                    "Premium video content",
                    "Advanced paid advertising",
                    "Influencer partnerships",
                    "User-generated content campaigns",
                    "Weekly strategy calls",
                    "Dedicated social media manager",
                    "Custom reporting dashboard",
                  ],
                  popular: false,
                  cta: "Dominate Social Media",
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.popular ? "border-2 border-[#F472B6] scale-105 shadow-2xl" : "shadow-lg"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] text-white px-4 py-1">
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
                          <CheckCircle className="h-5 w-5 text-[#F472B6] mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-[#F472B6] to-[#FF7600] hover:opacity-90" : ""}`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                      No contracts • Cancel anytime • 14-day free trial
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
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Social Media Questions</span>{" "}
                <span className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent">
                  Answered
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Everything you need to know about our social media services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "Which social media platforms do you manage?",
                  answer:
                    "We manage all major platforms including Facebook, Instagram, LinkedIn, Twitter, TikTok, and YouTube. We'll recommend the best platforms based on where your target audience is most active and engaged. Most businesses see the best results focusing on 2-4 platforms rather than trying to be everywhere.",
                },
                {
                  question: "How do you measure social media ROI?",
                  answer:
                    "We track metrics that matter to your business: engagement rates, website traffic from social media, lead generation, conversion rates, and direct sales attribution. You'll receive detailed monthly reports showing how social media is contributing to your bottom line, not just vanity metrics like follower count.",
                },
                {
                  question: "Do you create all the content or do I need to provide it?",
                  answer:
                    "We handle everything! Our team creates all graphics, videos, captions, and copy based on your brand guidelines and goals. You can provide input and feedback, but we take care of the entire content creation process so you can focus on running your business.",
                },
                {
                  question: "What's included in your paid advertising management?",
                  answer:
                    "Our paid social advertising includes campaign strategy, audience targeting, ad creative development, budget optimization, A/B testing, and detailed performance reporting. We manage campaigns across Facebook, Instagram, LinkedIn, and other platforms to maximize your ROI and reach your ideal customers.",
                },
                {
                  question: "How quickly will I see results from social media marketing?",
                  answer:
                    "You'll see improved content quality and engagement within the first month. Significant follower growth typically occurs within 3-6 months, while measurable business results (leads, sales) usually develop within 6-12 months of consistent strategy execution. Social media is about building relationships, which takes time but delivers lasting results.",
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#F472B6]/10 via-[#FF7600]/10 to-[#8B5CF6]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent">
                    Transform
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Your Social Media?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join 300+ brands that have built powerful social media presence and turned followers into customers.
                  Get your free audit and discover your social media potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button text-lg px-8 py-4"
                  >
                    Get My Free Social Media Audit ($300 Value)
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#F472B6] text-[#F472B6] hover:bg-[#F472B6] hover:text-white rounded-full px-8"
                  >
                    View Success Stories
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white">300+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Brands Grown</div>
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
