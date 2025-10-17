import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Target, Award, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DigitalMarketingPage() {
  const problems = [
    "Low online visibility",
    "Poor lead quality",
    "Scattered marketing efforts lacking focus",
    "Wasted marketing budget",
    "Difficulty measuring ROI",
  ]

  const solutions = [
    "Integrated digital marketing campaigns",
    "Data-driven audience targeting",
    "Multi-channel strategy coordination",
    "Advanced analytics and tracking",
    "Continuous optimization processes",
  ]

  const benefits = [
    "Increased website traffic",
    "Higher quality leads",
    "Measurable growth in customer engagement",
    "Better conversion rates",
    "Improved brand awareness",
    "Enhanced customer retention",
  ]

  const faqs = [
    {
      question: "What channels will you focus on for my business?",
      answer:
        "We analyze your target audience and business goals to determine the most effective channels, which may include SEO, PPC, social media, email marketing, and content marketing.",
    },
    {
      question: "How do you measure campaign success?",
      answer:
        "We track key metrics like website traffic, lead quality, conversion rates, cost per acquisition, and ROI using advanced analytics tools and custom dashboards.",
    },
  ]

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your visibility on search engines and drive organic traffic.",
      icon: "/images/seo-services-illustration.webp",
      link: "/services/seo-services",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Targeted ad campaigns to generate immediate leads and sales.",
      icon: "/images/ppc-advertising.webp",
      link: "/services/ppc-advertising",
    },
    {
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience on popular platforms.",
      icon: "/images/social-media-marketing.webp",
      link: "/services/social-media-marketing",
    },
    {
      title: "Content Marketing",
      description: "Create valuable and engaging content to attract and retain customers.",
      icon: "/images/content-marketing.webp",
      link: "/services/content-marketing",
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and build customer loyalty with effective email campaigns.",
      icon: "/images/email-marketing-illustration.webp",
      link: "/services/email-marketing",
    },
    {
      title: "Lead Generation",
      description: "Strategies to identify, attract, and convert potential customers.",
      icon: "/images/lead-generation-funnel-illustration.webp",
      link: "/services/lead-generation",
    },
  ]

  return (
    <div className="relative z-10">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Digital Marketing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital Marketing Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Drive brand awareness and lead generation through targeted digital channels tailored to your unique
              business needs.
            </p>
          </div>

          {/* Client Problems */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Common Marketing Challenges
              </h2>
              <p className="text-lg text-muted-foreground">
                Problems that prevent businesses from reaching their full potential
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="glass-card border-red-200/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{problem}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Solutions */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-4">
                Our Marketing Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                We create integrated digital marketing campaigns combining SEO, PPC, social media, and analytics
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="glass-card border-green-200/20 hover:border-green-300/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                Benefits You'll Experience
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass-card border-purple-200/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Learn More About Digital Marketing */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Learn More About Digital Marketing
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our latest insights and success stories in digital marketing
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/blog/seo-strategies-2024" className="hover:text-fuchsia-600 transition-colors">
                      SEO Strategies 2024: Complete Guide
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Discover the latest SEO techniques that are driving results in 2024, including AI-powered
                    optimization and local search strategies.
                  </p>
                  <Link
                    href="/blog/seo-strategies-2024"
                    className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link
                      href="/blog/mobile-app-development-trends-2024"
                      className="hover:text-fuchsia-600 transition-colors"
                    >
                      Mobile App Development Trends 2024
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn advanced mobile development strategies to maximize your app's reach and engagement in 2024.
                  </p>
                  <Link
                    href="/blog/mobile-app-development-trends-2024"
                    className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link
                      href="/case-studies/fitlife-gyms-scaling"
                      className="hover:text-fuchsia-600 transition-colors"
                    >
                      FitLife Gyms Growth Success
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    How we helped FitLife Gyms achieve 300% growth through integrated digital marketing campaigns.
                  </p>
                  <Link
                    href="/case-studies/fitlife-gyms-scaling"
                    className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                  >
                    View Case Study →
                  </Link>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link
                      href="/blog/ai-automation-revolution-2024"
                      className="hover:text-fuchsia-600 transition-colors"
                    >
                      AI Automation in Marketing
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Discover how AI automation is transforming digital marketing strategies and improving campaign
                    performance.
                  </p>
                  <Link
                    href="/blog/ai-automation-revolution-2024"
                    className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section glass className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: Retail Client Success</h2>
            <p className="text-lg text-muted-foreground">
              A retail client saw a 50% increase in online sales within 6 months after our comprehensive digital
              marketing strategy implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/images/mobile-marketing-megaphone.webp"
                alt="Digital marketing campaign with mobile focus"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">
                  A B2B SaaS startup needed to scale their lead generation efforts but was struggling with low-quality
                  leads and poor conversion rates from their existing marketing channels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                <p className="text-muted-foreground">
                  We developed a comprehensive digital marketing strategy combining SEO, PPC, content marketing, and
                  social media to target decision-makers in their ideal customer profile.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-500">300%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Lead Increase</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-500">65%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-500">180%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">ROI Improvement</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-500">6 Months</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">To Full Results</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Get Your Free Digital Marketing Strategy Session Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's create a custom marketing strategy for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
            >
              Get Free Strategy Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
