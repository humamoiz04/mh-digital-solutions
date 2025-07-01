import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Share2, Users, Heart, CheckCircle, Camera, MessageCircle } from "lucide-react"
import Image from "next/image"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import ScrollAnimation from "@/components/scroll-animation"

export default function SocialMediaMarketingPage() {
  const faqs = [
    {
      question: "How much do social media marketing services cost?",
      answer:
        "Our social media marketing services are tailored to your specific needs, platforms, content requirements, and advertising budget. We offer various packages designed to provide flexibility and value, from basic content management to comprehensive campaigns including paid advertising. We'll discuss your goals and provide a transparent quote during a free consultation.",
    },
    {
      question: "Which social media platforms are best for my type of business?",
      answer:
        "The ideal platforms depend on your industry, target audience, and business objectives. For B2B, LinkedIn and Twitter are often key. For B2C, Facebook, Instagram, and TikTok are typically more effective. We conduct thorough audience research to recommend the platforms where your potential customers are most active and engaged, ensuring your efforts are focused for maximum impact.",
    },
    {
      question: "Do you create social media content, or just manage campaigns?",
      answer:
        "We offer a full spectrum of social media services, including comprehensive content creation. Our team handles everything from graphic design, video production, and copywriting to hashtag research and scheduling. We also provide active community management, engaging with your audience, and managing your ad campaigns to ensure a holistic and effective social media presence.",
    },
    {
      question: "How do you measure social media marketing success?",
      answer:
        "We go beyond vanity metrics like likes and focus on tangible results that align with your business goals. We track key performance indicators (KPIs) such as engagement rate, follower growth, website traffic driven from social media, lead generation, conversion rates, and overall brand awareness. We provide detailed monthly reports to show your ROI and guide ongoing optimization.",
    },
  ]

  const testimonials = [
    {
      text: "Our social media presence was transformed completely. We went from 500 followers to 15,000 in 6 months, and more importantly, we're generating 3x more leads from social media.",
      name: "Amanda Foster",
      position: "Marketing Director",
      company: "Wellness Studio",
      rating: 5,
    },
    {
      text: "The content quality and engagement rates improved dramatically. Our social media is now our biggest source of new customers. The team really understands our brand voice.",
      name: "Carlos Martinez",
      position: "Business Owner",
      company: "Local Restaurant Chain",
      rating: 5,
    },
    {
      text: "Their social media strategy helped us build a community around our brand. Our engagement rates are 5x higher than industry average, and we've seen a 200% increase in website traffic from social.",
      name: "Jennifer Kim",
      position: "E-commerce Manager",
      company: "Fashion Boutique",
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
                <Badge className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white border-0">
                  📱 Social Media Excellence
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Social Media Marketing
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">That Builds Communities</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Build meaningful connections with your audience through strategic social media marketing that drives
                  engagement, builds brand loyalty, and generates real business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get Social Media Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full bg-transparent"
                  >
                    View Our Work
                  </Button>
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1tEbr4pmKtf4V4SRvLli8Jgjb0Kz34.png"
                    alt="Social Media Marketing Services"
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

      {/* Competitor Comparison */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Social Media</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Agency Comparison
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See why we're the preferred choice for social media marketing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Competitor 1 */}
              <Card className="glass-card border-0 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold">E1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">E1Sol</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Social Media Package:</span>
                      <span className="font-bold">$1,500/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platforms:</span>
                      <span>3 platforms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Posts per month:</span>
                      <span>20 posts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Community Management:</span>
                      <span>❌</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" disabled>
                    Their Package
                  </Button>
                </CardContent>
              </Card>

              {/* MH Digital (Center - Featured) */}
              <Card className="glass-card border-2 border-purple-500 scale-105 hover-lift">
                <CardContent className="p-8 text-center relative">
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Best Value
                  </Badge>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold">MH</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    MH Digital
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Social Media Package:</span>
                      <span className="font-bold text-green-600">$899/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platforms:</span>
                      <span className="text-green-600">5+ platforms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Posts per month:</span>
                      <span className="text-green-600">40+ posts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Community Management:</span>
                      <span className="text-green-600">✅</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">Check Pricing</Button>
                </CardContent>
              </Card>

              {/* Competitor 2 */}
              <Card className="glass-card border-0 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold">TD</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Thomas Digital</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Social Media Package:</span>
                      <span className="font-bold">$2,000/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platforms:</span>
                      <span>4 platforms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Posts per month:</span>
                      <span>25 posts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Community Management:</span>
                      <span>Limited</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" disabled>
                    Their Package
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Social Media Services */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Complete</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Social Media Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From strategy development to content creation and community management, we handle every aspect of your
                social media presence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Share2,
                  title: "Social Media Strategy",
                  description:
                    "Comprehensive social media strategies tailored to your brand, audience, and business objectives",
                  features: [
                    "Platform selection & optimization",
                    "Content strategy development",
                    "Audience research & targeting",
                    "Competitor analysis",
                    "Brand voice development",
                  ],
                  color: "from-purple-600 to-pink-600",
                },
                {
                  icon: Camera,
                  title: "Content Creation",
                  description:
                    "High-quality, engaging content that captures attention and drives meaningful interactions",
                  features: [
                    "Graphic design & visuals",
                    "Video content creation",
                    "Copywriting & captions",
                    "Hashtag research",
                    "Content calendar planning",
                  ],
                  color: "from-pink-600 to-orange-500",
                },
                {
                  icon: Users,
                  title: "Community Management",
                  description: "Active community management that builds relationships and fosters brand loyalty",
                  features: [
                    "Daily posting & scheduling",
                    "Comment & message management",
                    "Community engagement",
                    "Customer service support",
                    "Crisis management",
                  ],
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: Heart,
                  title: "Influencer Marketing",
                  description:
                    "Strategic influencer partnerships that expand your reach and build authentic brand advocacy",
                  features: [
                    "Influencer identification",
                    "Partnership negotiation",
                    "Campaign management",
                    "Performance tracking",
                    "ROI measurement",
                  ],
                  color: "from-red-500 to-purple-600",
                },
                {
                  icon: MessageCircle,
                  title: "Social Media Advertising",
                  description: "Targeted social media ad campaigns that amplify your reach and drive conversions",
                  features: [
                    "Ad campaign strategy",
                    "Creative development",
                    "Audience targeting",
                    "Budget optimization",
                    "Performance analysis",
                  ],
                  color: "from-purple-600 to-pink-600",
                },
                {
                  icon: CheckCircle,
                  title: "Analytics & Reporting",
                  description:
                    "Detailed analytics and reporting to track performance and optimize your social media ROI",
                  features: [
                    "Performance tracking",
                    "Engagement analysis",
                    "Growth metrics",
                    "ROI reporting",
                    "Strategic recommendations",
                  ],
                  color: "from-pink-600 to-orange-500",
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
                            <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
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

      {/* Platforms We Work With */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Platforms We</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Master
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We're experts across all major social media platforms, ensuring your brand reaches the right audience on
                the right channels
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                "Facebook",
                "Instagram",
                "LinkedIn",
                "Twitter",
                "TikTok",
                "YouTube",
                "Pinterest",
                "Snapchat",
                "Reddit",
                "Discord",
                "Clubhouse",
                "Threads",
              ].map((platform, index) => (
                <ScrollAnimation key={index} delay={index * 50}>
                  <Card className="glass border-0 hover-lift">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{platform}</h3>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Social Media</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real growth metrics from our social media campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "300%", label: "Follower Growth", description: "Average increase in 6 months" },
                { metric: "5x", label: "Engagement Rate", description: "Higher than industry average" },
                { metric: "200%", label: "Website Traffic", description: "Increase from social media" },
                { metric: "150%", label: "Lead Generation", description: "More qualified leads" },
              ].map((result, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
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

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* FAQ Section */}
      <FAQ title="Social Media Marketing FAQ" subtitle="Common questions about our social media services" faqs={faqs} />

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Build Your Community
                  </span>
                  ?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create a social media strategy that builds meaningful connections and drives real business
                  results
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get Social Media Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full bg-transparent"
                  >
                    View Our Work
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
