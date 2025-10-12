import type { Metadata } from "next"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Target, Award, CheckCircle, ArrowRight, Share2 } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Results-Driven Social Media Marketing Services | MH Digital Solution",
  description:
    "Engage your audience and grow your brand with our expert SMM services. We manage Facebook, Instagram, LinkedIn & more to achieve real business growth.",
  keywords:
    "SMM services, social media management services, social media marketing for small business, affordable social media management, Facebook advertising agency, instagram marketing services",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/services/social-media-marketing",
  },
  openGraph: {
    title: "Results-Driven Social Media Marketing Services | MH Digital Solution",
    description:
      "Engage your audience and grow your brand with our expert SMM services. We manage Facebook, Instagram, LinkedIn & more to achieve real business growth.",
    url: "https://www.mhdigitalsolution.com/services/social-media-marketing",
  },
}

export default function SocialMediaMarketingPage() {
  const problems = [
    "Low engagement on social media posts",
    "Inconsistent brand presence across platforms",
    "Difficulty creating engaging content regularly",
    "Poor social media ROI and conversions",
    "Lack of social media strategy and planning",
  ]

  const solutions = [
    "Comprehensive social media strategy development",
    "Engaging content creation and curation",
    "Community management and audience engagement",
    "Social media advertising and promotion",
    "Performance tracking and analytics reporting",
  ]

  const benefits = [
    "Increased brand awareness and visibility",
    "Higher engagement and follower growth",
    "Improved customer relationships",
    "Enhanced brand reputation management",
    "Better lead generation from social channels",
    "Competitive advantage in your industry",
  ]

  const faqs = [
    {
      question: "Which social media platforms should my business be on?",
      answer:
        "Platform selection depends on your target audience and business goals. We analyze your customers' behavior to recommend the most effective platforms for your brand.",
    },
    {
      question: "How often should we post on social media?",
      answer:
        "Posting frequency varies by platform and audience. Generally, we recommend 1-2 posts daily on Facebook/Instagram, 3-5 tweets daily, and 2-3 LinkedIn posts weekly.",
    },
  ]

  return (
    <div className="relative z-10 backdrop-blur-sm bg-white/5 min-h-screen">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <Share2 className="h-4 w-4 mr-2" />
              Social Media Marketing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Strategic Social Media Management Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engage your audience and grow your brand with our expert SMM services. We manage Facebook, Instagram,
              LinkedIn & more to achieve real business growth.
            </p>
          </div>

          {/* Problems Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Common Social Media Challenges
              </h2>
              <p className="text-lg text-muted-foreground">Problems that limit your social media success and growth</p>
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
                Our Social Media Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                We create engaging social media strategies that build communities and drive business results
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: Restaurant Chain Success</h2>
            <p className="text-lg text-muted-foreground">
              How we increased social media engagement by 500% and drove 40% more foot traffic through strategic social
              campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/images/social-media-marketing.webp"
                alt="Social media marketing campaign results"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">
                  A restaurant chain had low social media engagement and struggled to drive foot traffic through their
                  social channels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                <p className="text-muted-foreground">
                  We developed a comprehensive social strategy with engaging visual content, user-generated content
                  campaigns, and targeted local advertising.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-500">500%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Engagement Increase</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-500">40%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">More Foot Traffic</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-500">300%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Follower Growth</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-500">4 Months</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">To Full Results</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's create a social media strategy that builds your brand, engages your audience, and drives real business
            results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 hover:scale-105 transition-transform"
            >
              Get Free Social Media Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform bg-transparent">
              View Our Social Campaigns
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
