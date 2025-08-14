import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { AlertTriangle, Shield, TrendingUp, Users, CheckCircle, Zap, Clock } from "lucide-react"
import { FloatingBlobs } from "@/components/floating-blobs"
import { PartnerBadges } from "@/components/partner-badges"

export default function ITConsultingPage() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Outdated IT Infrastructure",
      description: "Legacy systems that slow down operations and increase security risks",
    },
    {
      icon: Shield,
      title: "Cybersecurity Vulnerabilities",
      description: "Inadequate security measures exposing business to cyber threats",
    },
    {
      icon: Clock,
      title: "IT Downtime Issues",
      description: "System failures causing productivity loss and revenue impact",
    },
    {
      icon: TrendingUp,
      title: "High IT Operational Costs",
      description: "Inefficient IT spending without strategic alignment to business goals",
    },
  ]

  const solutions = [
    {
      icon: CheckCircle,
      title: "IT Strategy & Roadmap",
      description: "Comprehensive IT planning aligned with business objectives and growth",
    },
    {
      icon: CheckCircle,
      title: "Cloud Migration & Optimization",
      description: "Seamless transition to cloud infrastructure for scalability and efficiency",
    },
    {
      icon: CheckCircle,
      title: "Cybersecurity Assessment",
      description: "Complete security audit and implementation of robust protection measures",
    },
    {
      icon: CheckCircle,
      title: "Digital Transformation",
      description: "Modernizing business processes with cutting-edge technology solutions",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "95% reduction in security incidents with proper IT consulting",
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Average 30% reduction in IT operational costs",
    },
    {
      icon: Zap,
      title: "Improved Efficiency",
      description: "40% increase in operational productivity",
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Streamlined systems improve employee satisfaction by 60%",
    },
  ]

  const faqs = [
    {
      question: "What does IT consulting include?",
      answer:
        "Our IT consulting covers strategy development, infrastructure assessment, cybersecurity evaluation, cloud migration planning, digital transformation guidance, and ongoing technology optimization.",
    },
    {
      question: "How long does an IT assessment take?",
      answer:
        "A comprehensive IT assessment typically takes 2-4 weeks, depending on your organization's size and complexity. We provide detailed reports with actionable recommendations.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Yes, we provide scalable IT consulting services for businesses of all sizes, from startups to enterprise organizations, with customized solutions for each client's needs and budget.",
    },
    {
      question: "What's included in cybersecurity consulting?",
      answer:
        "Our cybersecurity consulting includes vulnerability assessments, security policy development, compliance auditing, incident response planning, and staff training programs.",
    },
  ]

  return (
    <div className="relative overflow-hidden min-h-screen bg-background">
      <FloatingBlobs />

      {/* Hero Section */}
      <Section className="py-16 md:py-24 relative z-10" glass>
        <div className="text-center space-y-6 mb-16">
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 text-fuchsia-700 border-fuchsia-200"
          >
            🔧 IT Consulting Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Strategic IT Consulting for Business Growth
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your technology infrastructure with expert IT consulting that aligns with your business goals,
            enhances security, and drives operational efficiency.
          </p>
        </div>

        {/* Partner Badges */}
        <PartnerBadges />

        {/* Challenges Section */}
        <div className="space-y-8 mb-16 mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Common IT Challenges</h2>
            <p className="text-lg text-muted-foreground">Technology obstacles that hinder business growth</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="glass-card group hover:scale-105 transition-all duration-300 border-fuchsia-100/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-red-500/10">
                      <challenge.icon className="h-6 w-6 text-red-500" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">{challenge.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our IT Consulting Solutions</h2>
            <p className="text-lg text-muted-foreground">Comprehensive technology guidance for modern businesses</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="glass-card group hover:scale-105 transition-all duration-300 border-fuchsia-100/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10">
                      <solution.icon className="h-6 w-6 text-fuchsia-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Benefits You'll Experience</h2>
            <p className="text-lg text-muted-foreground">Measurable improvements from strategic IT consulting</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="glass-card text-center group hover:scale-105 transition-all duration-300 border-fuchsia-100/20"
              >
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-fuchsia-600 mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Study Section */}
        <Section glass className="py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: Manufacturing IT Transformation</h2>
              <p className="text-lg text-muted-foreground">
                How we modernized a manufacturing company's IT infrastructure and reduced costs by 40%
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <Image
                  src="/images/api-integration-developer.webp"
                  alt="Developer integrating APIs for seamless cross-platform data synchronization"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                  <p className="text-muted-foreground">
                    A 200-employee manufacturing company struggled with outdated systems, frequent downtime, and high IT
                    maintenance costs affecting productivity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                  <p className="text-muted-foreground">
                    We implemented a comprehensive IT strategy including cloud migration, cybersecurity enhancement, and
                    process automation to modernize their operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-green-500">40%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Cost Reduction</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <Zap className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-blue-500">95%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Uptime Improvement</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <Shield className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-purple-500">Zero</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Security Incidents</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-orange-500">60%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Productivity Increase</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Get answers to common IT consulting questions</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-card border-fuchsia-100/20">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-foreground">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section glass className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's optimize your technology stack and align it with your business goals. Get started with a
              comprehensive IT assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white"
              >
                Get Free IT Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-fuchsia-200 text-fuchsia-600 hover:bg-fuchsia-50 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Section>
      </Section>
    </div>
  )
}
