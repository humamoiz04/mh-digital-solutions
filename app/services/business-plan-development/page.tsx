import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, AlertTriangle, HelpCircle, ArrowRight } from 'lucide-react'
import { CTASection } from "@/components/cta-section"

export default function BusinessPlanDevelopmentPage() {
  const challenges = [
    "Unclear business vision and long-term goals",
    "Difficulty securing funding without a solid plan",
    "Lack of strategic direction and milestones",
    "Insufficient market research and competitive analysis",
    "No clear financial projections or growth strategy",
  ]

  const faqs = [
    {
      question: "How long does it take to develop a comprehensive business plan?",
      answer:
        "A detailed business plan typically takes 2-4 weeks depending on complexity. We work closely with you to gather information and refine the document.",
    },
    {
      question: "Can you help update an existing business plan?",
      answer:
        "Absolutely. We review your current plan, identify gaps, and update it with current market data and strategic insights.",
    },
    {
      question: "Is a business plan only for startups?",
      answer:
        "No. Established businesses use updated plans for expansion, fundraising, strategic direction, and operational guidance.",
    },
  ]

  const planElements = [
    {
      title: "Executive Summary",
      description: "Clear overview of your business, mission, and key objectives.",
    },
    {
      title: "Market Analysis",
      description: "Comprehensive industry research and competitive positioning.",
    },
    {
      title: "Operations Plan",
      description: "Detailed operational structure and implementation timeline.",
    },
    {
      title: "Financial Projections",
      description: "3-5 year revenue forecasts and financial statements.",
    },
    {
      title: "Marketing Strategy",
      description: "Customer acquisition plan and go-to-market strategy.",
    },
    {
      title: "Risk Assessment",
      description: "Identified risks and mitigation strategies.",
    },
  ]

  const benefits = [
    "Clear Strategic Direction",
    "Improved Funding Opportunities",
    "Better Financial Forecasting",
    "Strong Market Understanding",
    "Operational Clarity",
    "Measurable Success Metrics",
  ]

  return (
    <div className="relative z-10">
      <Section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Business Planning
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-6">
            Strategic Business Plan Development
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Develop a comprehensive business plan that guides your growth, attracts investors, and ensures operational success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white px-8 py-3">
              <Link href="/contact">Get Your Business Plan</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Link href="/case-studies">View Results</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
              <AlertTriangle className="h-8 w-8 text-orange-500" />
              Why Business Plan Development Matters
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="glass-card p-6">
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">{challenge}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">What's Included in Your Plan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {planElements.map((element, index) => (
              <Card key={index} className="glass-card p-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {element.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{element.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="h-8 w-8 text-blue-500" />
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-card p-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-left flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground ml-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24" glass>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/business-plan-development.webp"
              alt="Business Plan Development Services"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold text-foreground">Transform Vision Into Reality</h2>
            <ul className="space-y-2 text-muted-foreground">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary gradient-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button className="gradient-button px-6 py-3 text-lg">Start Your Business Plan Today</Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section glass>
        <CTASection />
      </Section>
    </div>
  )
}
