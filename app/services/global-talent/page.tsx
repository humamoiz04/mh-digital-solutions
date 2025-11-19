import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, AlertTriangle, HelpCircle, ArrowRight, Globe } from 'lucide-react'
import { CTASection } from "@/components/cta-section"

export default function GlobalTalentPage() {
  const challenges = [
    "Limited local talent pool for specialized skills",
    "High cost of hiring full-time employees",
    "Difficulty scaling teams quickly without overhead",
    "Need for flexible workforce based on project demands",
    "Geographic limitations restricting growth opportunities",
  ]

  const faqs = [
    {
      question: "How do you ensure quality when hiring global talent?",
      answer:
        "We have rigorous vetting processes, skill assessments, and ongoing quality checks to ensure every team member meets your standards.",
    },
    {
      question: "What support do you provide for onboarding and management?",
      answer:
        "We handle recruitment, vetting, onboarding, project management, and ongoing performance monitoring to seamlessly integrate global talent into your operations.",
    },
    {
      question: "Can we scale our team up or down based on project needs?",
      answer:
        "Yes. Our flexible staffing model allows you to adjust team size and composition based on your current project requirements and budget.",
    },
  ]

  const benefits = [
    {
      title: "Cost Optimization",
      description: "Reduce labor costs by 40-60% compared to local hiring while maintaining quality.",
      icon: "💰",
    },
    {
      title: "Access to Expertise",
      description: "Tap into a global pool of specialized skills and experience.",
      icon: "🌐",
    },
    {
      title: "24/7 Operations",
      description: "Enable round-the-clock operations with distributed teams across time zones.",
      icon: "⏰",
    },
    {
      title: "Scalable Growth",
      description: "Scale your team quickly without long-term employment commitments.",
      icon: "📈",
    },
    {
      title: "Business Process Optimization",
      description: "Streamline workflows and operations with specialized teams.",
      icon: "⚙️",
    },
    {
      title: "Reduced Overhead",
      description: "Minimize HR, office, and infrastructure costs associated with traditional hiring.",
      icon: "🏢",
    },
  ]

  const services = [
    {
      title: "Developer & Engineering Teams",
      description: "Experienced software developers, engineers, and technical architects.",
    },
    {
      title: "Business Analysts & Consultants",
      description: "Strategic consultants for business process optimization and digital transformation.",
    },
    {
      title: "Design & Creative Teams",
      description: "UI/UX designers, graphic designers, and creative professionals.",
    },
    {
      title: "Customer Support & Operations",
      description: "Customer service, data entry, and operational support specialists.",
    },
    {
      title: "Sales & Marketing Teams",
      description: "Sales representatives, marketing specialists, and business development professionals.",
    },
    {
      title: "Project Management",
      description: "Experienced project managers to coordinate and oversee your global teams.",
    },
  ]

  return (
    <div className="relative z-10">
      <Section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2 flex items-center justify-center gap-2 w-fit mx-auto">
            <Globe className="h-4 w-4" />
            Global Talent Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-6">
            Access World-Class Global Talent
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Scale your business with specialized global talent, optimize processes, and reduce costs while maintaining exceptional quality and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white px-8 py-3">
              <Link href="/contact">Build Your Global Team</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </Section>

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

      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">Our Global Talent Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card p-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24" glass>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">{benefit.description}</p>
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

      <Section className="py-16 md:py-24">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/global-talent-solutions.webp"
              alt="Global Talent Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold text-foreground">Optimize Your Business With Global Expertise</h2>
            <p className="text-muted-foreground text-lg">
              Our global talent solutions help you optimize business processes, reduce operational costs, and access specialized expertise when you need it.
            </p>
            <Link href="/contact">
              <Button className="gradient-button px-6 py-3 text-lg">Start Building Your Global Team</Button>
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
