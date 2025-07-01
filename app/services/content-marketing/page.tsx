import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, PenTool, BookOpen, Video, CheckCircle, FileText, Mic } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"

export default function ContentMarketingPage() {
  const faqs = [
    {
      question: "What types of content do you create?",
      answer:
        "We create a wide variety of content including blog posts, articles, whitepapers, case studies, infographics, videos, podcasts, social media content, email newsletters, and more. We'll recommend the best content types based on your audience preferences and business goals.",
    },
    {
      question: "How do you ensure content aligns with our brand voice?",
      answer:
        "We start with a comprehensive brand discovery process to understand your voice, tone, values, and messaging. We create detailed brand guidelines and style guides, and all content goes through our quality review process to ensure consistency with your brand identity.",
    },
    {
      question: "How often should we publish new content?",
      answer:
        "Content frequency depends on your goals, audience, and resources. We typically recommend publishing 2-4 blog posts per month, weekly social media content, and monthly long-form content like whitepapers or case studies. We'll create a content calendar that's sustainable and effective for your business.",
    },
    {
      question: "How do you measure content marketing success?",
      answer:
        "We track various metrics including website traffic, time on page, social shares, lead generation, email subscribers, search rankings, and most importantly - conversions and revenue attributed to content. We provide detailed monthly reports showing how content contributes to your business goals.",
    },
    {
      question: "Do you handle content distribution as well?",
      answer:
        "Yes, we handle complete content distribution across all relevant channels including your website, social media platforms, email newsletters, and third-party publications. We also help with content syndication and guest posting opportunities to maximize reach.",
    },
  ]

  const testimonials = [
    {
      text: "Their content marketing strategy increased our organic traffic by 400% in 8 months. The quality of content and SEO optimization is exceptional. We're now ranking #1 for our target keywords.",
      name: "Rachel Green",
      position: "Marketing Manager",
      company: "SaaS Startup",
      rating: 5,
    },
    {
      text: "The blog content they create consistently generates 50+ qualified leads per month. Their understanding of our industry and ability to create valuable content is outstanding.",
      name: "Michael Torres",
      position: "Business Development Director",
      company: "B2B Services",
      rating: 5,
    },
    {
      text: "Our content engagement rates improved by 300% after working with MH Digital. They really know how to create content that resonates with our audience and drives action.",
      name: "Sarah Kim",
      position: "Content Director",
      company: "E-learning Platform",
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
                <Badge className="mb-6 bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white border-0">
                  ✍️ Strategic Content Marketing
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                    Content Marketing
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">That Drives Results</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Create valuable, engaging content that attracts your ideal customers, builds trust, and drives
                  conversions through strategic content marketing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get Content Strategy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full"
                  >
                    View Content Samples
                  </Button>
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/content-marketing.webp"
                    alt="Content Marketing Services"
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

      {/* Content Marketing Services */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Comprehensive</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Content Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From strategy development to content creation and distribution, we handle every aspect of your content
                marketing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: PenTool,
                  title: "Content Strategy",
                  description:
                    "Comprehensive content strategies that align with your business goals and audience needs",
                  features: [
                    "Content audit & analysis",
                    "Audience research & personas",
                    "Content calendar planning",
                    "SEO keyword integration",
                    "Distribution strategy",
                  ],
                  color: "from-[#8B5CF6] to-[#F472B6]",
                },
                {
                  icon: BookOpen,
                  title: "Blog Writing",
                  description:
                    "High-quality, SEO-optimized blog content that educates your audience and drives organic traffic",
                  features: [
                    "SEO-optimized articles",
                    "Industry expertise",
                    "Engaging storytelling",
                    "Call-to-action optimization",
                    "Regular publishing schedule",
                  ],
                  color: "from-[#F472B6] to-[#00F5FF]",
                },
                {
                  icon: FileText,
                  title: "Long-form Content",
                  description:
                    "In-depth content pieces like whitepapers, eBooks, and case studies that establish thought leadership",
                  features: [
                    "Whitepapers & eBooks",
                    "Case studies",
                    "Industry reports",
                    "Research-backed content",
                    "Lead generation focus",
                  ],
                  color: "from-[#00F5FF] to-[#FF7600]",
                },
                {
                  icon: Video,
                  title: "Video Content",
                  description:
                    "Engaging video content that captures attention and communicates your message effectively",
                  features: [
                    "Explainer videos",
                    "Product demonstrations",
                    "Customer testimonials",
                    "Educational content",
                    "Social media videos",
                  ],
                  color: "from-[#FF7600] to-[#8B5CF6]",
                },
                {
                  icon: Mic,
                  title: "Podcast Production",
                  description:
                    "Professional podcast production services to help you reach audiences through audio content",
                  features: [
                    "Podcast strategy",
                    "Episode planning",
                    "Audio production",
                    "Show notes creation",
                    "Distribution management",
                  ],
                  color: "from-[#8B5CF6] to-[#F472B6]",
                },
                {
                  icon: CheckCircle,
                  title: "Content Optimization",
                  description: "Continuous optimization of existing content to improve performance and search rankings",
                  features: [
                    "Content performance analysis",
                    "SEO optimization",
                    "Conversion optimization",
                    "Content updates",
                    "Repurposing strategies",
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

      {/* Content Process */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our Content</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven methodology for creating content that engages your audience and drives business results
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Strategy & Planning",
                    description:
                      "We start by understanding your audience, goals, and competitive landscape to develop a comprehensive content strategy.",
                    color: "from-[#8B5CF6] to-[#F472B6]",
                  },
                  {
                    step: "02",
                    title: "Content Creation",
                    description:
                      "Our team of expert writers and creators develop high-quality content that aligns with your brand voice and objectives.",
                    color: "from-[#F472B6] to-[#00F5FF]",
                  },
                  {
                    step: "03",
                    title: "Optimization & SEO",
                    description:
                      "We optimize all content for search engines and user experience to maximize visibility and engagement.",
                    color: "from-[#00F5FF] to-[#FF7600]",
                  },
                  {
                    step: "04",
                    title: "Distribution & Promotion",
                    description:
                      "We distribute your content across all relevant channels and promote it to reach your target audience effectively.",
                    color: "from-[#FF7600] to-[#8B5CF6]",
                  },
                  {
                    step: "05",
                    title: "Analysis & Optimization",
                    description:
                      "We continuously analyze performance metrics and optimize our strategy to improve results and ROI.",
                    color: "from-[#8B5CF6] to-[#F472B6]",
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
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{phase.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
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
                <span className="text-gray-900 dark:text-white">Content Marketing</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real performance metrics from our content marketing campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "400%", label: "Organic Traffic Growth", description: "Average increase in 8 months" },
                { metric: "300%", label: "Engagement Increase", description: "Higher content engagement" },
                { metric: "250%", label: "Lead Generation", description: "More qualified leads" },
                { metric: "180%", label: "Brand Awareness", description: "Improved brand recognition" },
              ].map((result, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent mb-2">
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
      <FAQ title="Content Marketing FAQ" subtitle="Common questions about our content marketing services" faqs={faqs} />

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-[#F472B6]/10 to-[#00F5FF]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                    Create Content
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">That Converts?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's develop a content marketing strategy that attracts your ideal customers and drives business
                  growth
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get Content Strategy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full"
                  >
                    View Content Samples
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
