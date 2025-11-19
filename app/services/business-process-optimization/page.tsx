import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, AlertTriangle, HelpCircle, ArrowRight, Zap } from 'lucide-react'
import { CTASection } from "@/components/cta-section"

export default function BusinessProcessOptimizationPage() {
  const challenges = [
    "Inefficient workflows causing productivity delays",
    "Manual processes wasting time and increasing errors",
    "Lack of standardization across teams",
    "High operational costs with low efficiency",
    "Difficult-to-track metrics and performance data",
  ]

  const faqs = [
    {
      question: "How do you identify inefficient processes?",
      answer:
        "We conduct thorough process audits, analyze workflow data, interview team members, and map current state processes to identify bottlenecks and inefficiencies.",
    },
    {
      question: "What results can we expect from process optimization?",
      answer:
        "Typical improvements include 30-50% efficiency gains, 20-35% cost reduction, improved quality, and better employee satisfaction.",
    },
    {
      question: "How long does the optimization process take?",
      answer:
        "Most process optimization projects take 6-12 weeks from analysis through implementation and training.",
    },
  ]

  const optimizationAreas = [
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks to free up employee time for high-value activities.",
    },
    {
      title: "Process Standardization",
      description: "Create consistent processes and best practices across your organization.",
    },
    {
      title: "Technology Integration",
      description: "Implement tools and systems that streamline operations and reduce manual work.",
    },
    {
      title: "Performance Metrics",
      description: "Establish KPIs and dashboards to track process efficiency and improvements.",
    },
    {
      title: "Team Training",
      description: "Train your team on new processes and best practices for smooth adoption.",
    },
    {
      title: "Continuous Improvement",
      description: "Implement ongoing optimization strategies to maintain and improve efficiency.",
    },
  ]

  const benefits = [
    "Increased Operational Efficiency",
    "Reduced Operating Costs",
    "Improved Quality & Consistency",
    "Better Employee Productivity",
    "Enhanced Customer Experience",
    "Scalable Operations",
  ]

  return (
    <div className="relative z-10">
      <Section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2 flex items-center justify-center gap-2 w-fit mx-auto">
            <Zap className="h-4 w-4" />
            Process Optimization
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-6">
            Streamline Operations & Boost Productivity
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Optimize your business processes to eliminate waste, reduce costs, and improve efficiency across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white px-8 py-3">
              <Link href="/contact">Start Process Optimization</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Link href="/case-studies">See Results</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
              <AlertTriangle className="h-8 w-8 text-orange-500" />
              Common Process Inefficiencies
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
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">Our Optimization Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {optimizationAreas.map((area, index) => (
              <Card key={index} className="glass-card p-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.description}</p>
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
              src="/images/process-optimization.webp"
              alt="Business Process Optimization"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold text-foreground">Transform Your Operations</h2>
            <ul className="space-y-2 text-muted-foreground">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary gradient-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button className="gradient-button px-6 py-3 text-lg">Optimize Your Processes Today</Button>
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
