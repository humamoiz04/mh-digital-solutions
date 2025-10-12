import type { Metadata } from "next"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Target, Award, CheckCircle, ArrowRight, Globe } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Expert SEO Services to Boost Rankings & Traffic | MH Digital Solution",
  description:
    "Drive organic traffic and generate more leads with our custom SEO strategies. We offer on-page, off-page, and technical SEO to help you dominate search results.",
  keywords:
    "SEO services, seo services for small business, affordable seo services, local seo services, technical seo audit, on-page seo checklist",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/services/seo-services",
  },
  openGraph: {
    title: "Expert SEO Services to Boost Rankings & Traffic | MH Digital Solution",
    description:
      "Drive organic traffic and generate more leads with our custom SEO strategies. We offer on-page, off-page, and technical SEO to help you dominate search results.",
    url: "https://www.mhdigitalsolution.com/services/seo-services",
  },
}

export default function SeoServicesPage() {
  const problems = [
    "Low search engine rankings",
    "Minimal organic traffic",
    "Poor website visibility",
    "Competitors outranking you",
    "Difficulty tracking SEO progress",
  ]

  const solutions = [
    "Comprehensive keyword research",
    "On-page optimization strategies",
    "Technical SEO improvements",
    "Quality link building campaigns",
    "Performance monitoring and reporting",
  ]

  const benefits = [
    "Higher search rankings",
    "Increased organic traffic",
    "Better user experience",
    "Enhanced brand credibility",
    "Long-term sustainable growth",
    "Improved conversion rates",
  ]

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer:
        "SEO is a long-term strategy. You can expect to see initial improvements in 3-6 months, with significant results typically appearing within 6-12 months.",
    },
    {
      question: "Do you guarantee first page rankings?",
      answer:
        "While we can't guarantee specific rankings due to search engine algorithm changes, we focus on sustainable strategies that consistently improve your visibility and traffic.",
    },
  ]

  return (
    <div className="relative z-10 backdrop-blur-sm bg-white/5 min-h-screen">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <Search className="h-4 w-4 mr-2" />
              SEO Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Expert SEO Services That Deliver Tangible Results
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Drive organic traffic and generate more leads with our custom SEO strategies. We offer on-page, off-page,
              and technical SEO to help you dominate search results.
            </p>
          </div>

          {/* Problems Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Common SEO Challenges
              </h2>
              <p className="text-lg text-muted-foreground">
                Search visibility issues that limit your business growth potential
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
                Our SEO Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive SEO strategies that improve rankings and drive organic growth
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: Local Business SEO Success</h2>
            <p className="text-lg text-muted-foreground">
              A local service business increased organic traffic by 500% and generated 300% more leads through strategic
              SEO optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/images/seo-optimization.webp"
                alt="SEO optimization results dashboard"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">
                  Poor search visibility was limiting customer acquisition, with most potential clients unable to find
                  the business online.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                <p className="text-muted-foreground">
                  Implemented comprehensive local SEO strategy including keyword optimization, local citations, and
                  technical improvements.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-500">500%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Traffic Increase</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-500">300%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Lead Generation</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Globe className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-500">#1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Local Rankings</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-500">8 Months</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">To Top Rankings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's optimize your website for search engines and drive more qualified traffic to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 hover:scale-105 transition-transform"
            >
              Get Free SEO Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform bg-transparent">
              View SEO Case Studies
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
