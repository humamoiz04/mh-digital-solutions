import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, AlertTriangle, HelpCircle, ArrowRight, DollarSign } from 'lucide-react'
import { CTASection } from "@/components/cta-section"

export default function BusinessCostOptimizationPage() {
  const challenges = [
    "Uncontrolled spending draining profitability",
    "Inefficient vendor relationships and contracts",
    "Redundant services and duplicate expenses",
    "Lack of cost visibility and accountability",
    "No strategic approach to reducing operational costs",
  ]

  const faqs = [
    {
      question: "What are typical cost reduction opportunities?",
      answer:
        "Common areas include vendor renegotiation (15-25% savings), eliminating redundant services (10-20%), process automation (20-30%), and energy efficiency (10-15%).",
    },
    {
      question: "Will cost optimization impact our service quality?",
      answer:
        "No. We focus on eliminating waste and inefficiency while maintaining or improving quality. Often businesses find their quality improves as processes become more streamlined.",
    },
    {
      question: "How quickly can we see cost savings?",
      answer:
        "Most clients see initial savings within 30-60 days, with full optimization benefits realized over 6-12 months.",
    },
  ]

  const optimizationStrategies = [
    {
      title: "Vendor & Contract Optimization",
      description: "Renegotiate contracts and consolidate vendors to reduce costs 15-25%.",
    },
    {
      title: "Service Consolidation",
      description: "Eliminate duplicate services and consolidate providers for better rates.",
    },
    {
      title: "Energy & Facility Optimization",
      description: "Reduce utility costs and optimize real estate usage.",
    },
    {
      title: "Labor Cost Management",
      description: "Optimize staffing levels and compensation structures.",
    },
    {
      title: "Technology Optimization",
      description: "Eliminate redundant software and optimize technology spending.",
    },
    {
      title: "Supply Chain Optimization",
      description: "Streamline procurement and supply chain to reduce costs.",
    },
  ]

  const benefits = [
    "Reduced Operating Costs (15-35%)",
    "Improved Profit Margins",
    "Better Vendor Relationships",
    "Increased Financial Visibility",
    "Sustainable Cost Reduction",
    "Enhanced Cash Flow",
  ]

  return (
    <div className="relative z-10">
      <Section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2 flex items-center justify-center gap-2 w-fit mx-auto">
            <DollarSign className="h-4 w-4" />
            Cost Optimization
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-6">
            Reduce Costs Without Sacrificing Quality
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Identify cost-saving opportunities across your organization and implement sustainable strategies to improve profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white px-8 py-3">
              <Link href="/contact">Start Saving Today</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Link href="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
              <AlertTriangle className="h-8 w-8 text-orange-500" />
              Cost Reduction Opportunities
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
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">Our Cost Optimization Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {optimizationStrategies.map((strategy, index) => (
              <Card key={index} className="glass-card p-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {strategy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{strategy.description}</p>
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
              src="/images/cost-optimization.webp"
              alt="Business Cost Optimization"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold text-foreground">Improve Your Bottom Line</h2>
            <ul className="space-y-2 text-muted-foreground">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary gradient-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button className="gradient-button px-6 py-3 text-lg">Get Your Cost Analysis</Button>
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
