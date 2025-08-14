import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PenTool, Users, Target, Award, CheckCircle, ArrowRight, FileText } from "lucide-react"
import Image from "next/image"

export default function ContentMarketingPage() {
  const services = [
    {
      title: "Content Strategy Development",
      description: "Crafting a roadmap for content creation that aligns with your business goals and audience needs.",
      icon: "/images/strategy-consulting.webp",
    },
    {
      title: "Blog Post Writing",
      description: "Engaging and SEO-optimized blog posts to attract organic traffic and establish thought leadership.",
      icon: "/images/blog-seo-strategy.webp",
    },
    {
      title: "Website Copywriting",
      description:
        "Compelling and conversion-focused copy for your website pages, product descriptions, and landing pages.",
      icon: "/images/web-development-illustration.webp",
    },
    {
      title: "Video Content Production",
      description: "Creating engaging video content for social media, websites, and marketing campaigns.",
      icon: "/images/content-marketing.webp",
    },
    {
      title: "Infographics & Visual Content",
      description: "Designing visually appealing infographics and other graphics to convey complex information simply.",
      icon: "/images/ui-ux-design-illustration.webp",
    },
    {
      title: "Content Distribution & Promotion",
      description: "Strategically promoting your content across various channels to maximize reach and engagement.",
      icon: "/images/digital-marketing-megaphone.webp",
    },
  ]

  const problems = [
    "Lack of engaging content",
    "Inconsistent brand messaging",
    "Poor content performance",
    "Limited content distribution",
    "Difficulty measuring content ROI",
  ]

  const solutions = [
    "Strategic content planning",
    "Multi-format content creation",
    "SEO-optimized content development",
    "Content distribution strategies",
    "Performance tracking and optimization",
  ]

  const benefits = [
    "Increased brand authority",
    "Higher search engine rankings",
    "Enhanced audience engagement",
    "Improved lead generation",
    "Better conversion rates",
    "Stronger customer relationships",
  ]

  const faqs = [
    {
      question: "What types of content do you create?",
      answer:
        "We create blog posts, articles, infographics, videos, social media content, whitepapers, case studies, and more based on your audience needs.",
    },
    {
      question: "How do you ensure content aligns with our brand?",
      answer:
        "We develop detailed brand guidelines and content strategies that reflect your unique voice, values, and messaging across all content pieces.",
    },
  ]

  return (
    <div className="relative z-10">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <PenTool className="h-4 w-4 mr-2" />
              Content Marketing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Content Marketing Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create valuable, engaging content that attracts your ideal audience and drives meaningful business
              results.
            </p>
          </div>

          {/* Problems Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Common Content Challenges
              </h2>
              <p className="text-lg text-muted-foreground">
                Content issues that prevent businesses from connecting with their audience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="glass-card border-red-200/20 hover:scale-105 transition-transform">
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

          {/* Solutions Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-4">
                Our Content Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Strategic content creation that drives engagement and conversions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="glass-card border-green-200/20 hover:border-green-300/30 transition-all hover:scale-105"
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

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                Benefits You'll Experience
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass-card border-purple-200/20 hover:scale-105 transition-transform">
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

          {/* FAQs Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-card hover:scale-102 transition-transform">
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

      {/* Case Study Section */}
      <Section glass className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: B2B SaaS Content Success</h2>
            <p className="text-lg text-muted-foreground">
              A B2B SaaS client increased organic traffic by 400% and generated 250% more qualified leads through
              strategic content marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/images/content-marketing-blog.webp"
                alt="Content marketing strategy with blog and social media"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">
                  Low brand awareness and difficulty generating qualified leads in a competitive B2B software market.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                <p className="text-muted-foreground">
                  Developed a comprehensive content strategy including thought leadership articles, case studies, and
                  educational resources.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <FileText className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-500">400%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Traffic Increase</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-500">250%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Lead Generation</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-500">85%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Engagement Rate</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-500">6 Months</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">To Results</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Ready to Create Content That Converts?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's develop a content strategy that attracts your ideal customers and drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 hover:scale-105 transition-transform"
            >
              Get Content Strategy Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform bg-transparent">
              View Content Portfolio
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
