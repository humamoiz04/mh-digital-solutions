import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, AlertTriangle, HelpCircle, ArrowRight } from "lucide-react"
import { BusinessConsultingDetail } from "@/components/services/business-consulting-detail"
import { CTASection } from "@/components/cta-section"

export default function BusinessConsultingPage() {
  const challenges = [
    "Unclear strategic direction and business objectives",
    "Inefficient operations affecting profitability",
    "Difficulty adapting to market changes and competition",
    "Lack of expertise in specific business areas",
    "Challenges with organizational change and growth",
  ]

  const faqs = [
    {
      question: "How do you customize consulting services for different industries?",
      answer:
        "We tailor our approach based on industry-specific challenges, regulations, and best practices, drawing from our extensive experience across various sectors.",
    },
    {
      question: "What's the typical duration of a consulting engagement?",
      answer:
        "Engagements vary from 3-6 months for specific projects to 12+ months for comprehensive transformations, depending on scope and complexity.",
    },
    {
      question: "How do you measure the success of consulting projects?",
      answer:
        "We establish clear KPIs and success metrics at the beginning of each project, tracking progress through regular reviews and delivering measurable business outcomes.",
    },
  ]

  const services = [
    {
      title: "Strategic Planning",
      description: "Developing clear, actionable strategies to achieve your long-term business objectives.",
      icon: "/images/strategy-consulting.webp",
    },
    {
      title: "Operational Efficiency",
      description: "Optimizing your business processes to reduce costs and improve productivity.",
      icon: "/images/business-process-optimization.webp",
    },
    {
      title: "Market Entry & Expansion",
      description: "Guidance on entering new markets or expanding your existing presence effectively.",
      icon: "/images/marketing-funnel.webp",
    },
    {
      title: "Financial Advisory",
      description: "Expert advice on financial planning, investment strategies, and risk management.",
      icon: "/images/financial-analytics-illustration.webp",
    },
    {
      title: "Digital Transformation",
      description: "Helping businesses adopt new technologies and digital strategies for competitive advantage.",
      icon: "/images/digital-collaboration-workspace.webp",
    },
    {
      title: "Change Management",
      description:
        "Supporting your organization through significant changes to ensure smooth transitions and adoption.",
      icon: "/images/business-operations.webp",
    },
  ]

  const benefits = [
    "Clear Strategic Direction",
    "Improved Operational Performance",
    "Sustainable Growth",
    "Enhanced Decision-Making",
    "Risk Mitigation",
    "Competitive Advantage",
  ]

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <Section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Business Consulting
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-6">
            Strategic Guidance for Business Success
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Receive expert strategic guidance and solutions to optimize your operations, overcome challenges, and
            achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white px-8 py-3">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Link href="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Challenges Section */}
      <Section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
              <AlertTriangle className="h-8 w-8 text-orange-500" />
              Common Business Challenges
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

      <Section className="py-16 md:py-24 relative z-10">
        <BusinessConsultingDetail />
      </Section>

      {/* FAQ Section */}
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
              src="/images/business-consulting-meeting.webp"
              alt="Benefits of Business Consulting"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold text-foreground">Why Business Consulting is Vital for Success</h2>
            <ul className="space-y-2 text-muted-foreground">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary gradient-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button className="gradient-button px-6 py-3 text-lg">Schedule a Strategic Session</Button>
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
