import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { AlertTriangle, Cloud, Shield, TrendingUp, Zap, Clock, CheckCircle } from "lucide-react"
import { FloatingBlobs } from "@/components/floating-blobs"

export default function CloudSolutionsPage() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Legacy Infrastructure Costs",
      description: "High maintenance costs and limited scalability of on-premise systems",
    },
    {
      icon: Shield,
      title: "Security & Compliance Concerns",
      description: "Difficulty maintaining security standards and regulatory compliance",
    },
    {
      icon: Clock,
      title: "Slow Deployment Times",
      description: "Extended time-to-market due to infrastructure limitations",
    },
    {
      icon: TrendingUp,
      title: "Resource Management Issues",
      description: "Inefficient resource allocation and unpredictable scaling costs",
    },
  ]

  const solutions = [
    {
      icon: CheckCircle,
      title: "Cloud Migration Strategy",
      description: "Seamless migration of your applications and data to cloud platforms",
    },
    {
      icon: CheckCircle,
      title: "Infrastructure as Code",
      description: "Automated infrastructure deployment and management using modern DevOps practices",
    },
    {
      icon: CheckCircle,
      title: "Multi-Cloud Architecture",
      description: "Flexible cloud solutions across AWS, Azure, and Google Cloud platforms",
    },
    {
      icon: CheckCircle,
      title: "Cloud Security & Monitoring",
      description: "Comprehensive security implementation and 24/7 monitoring services",
    },
  ]

  const benefits = [
    {
      icon: Cloud,
      title: "99.9% Uptime",
      description: "Enterprise-grade reliability with automatic failover and disaster recovery",
    },
    {
      icon: TrendingUp,
      title: "60% Cost Reduction",
      description: "Significant savings on infrastructure and operational expenses",
    },
    {
      icon: Zap,
      title: "Instant Scalability",
      description: "Scale resources up or down based on demand in real-time",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Bank-level security with encryption, compliance, and access controls",
    },
  ]

  const faqs = [
    {
      question: "Which cloud platform is best for my business?",
      answer:
        "The choice depends on your specific needs, existing infrastructure, and budget. We analyze your requirements and recommend the most suitable platform - AWS, Azure, or Google Cloud - or a multi-cloud approach.",
    },
    {
      question: "How long does cloud migration take?",
      answer:
        "Migration timelines vary based on complexity. Simple migrations take 2-4 weeks, while complex enterprise migrations can take 3-6 months. We provide detailed migration plans with minimal downtime.",
    },
    {
      question: "What about data security during migration?",
      answer:
        "We implement end-to-end encryption, secure transfer protocols, and comprehensive backup strategies. Your data remains protected throughout the entire migration process.",
    },
    {
      question: "Do you provide ongoing cloud management?",
      answer:
        "Yes, we offer comprehensive managed cloud services including monitoring, optimization, security updates, and 24/7 support to ensure your cloud infrastructure runs smoothly.",
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
            ☁️ Cloud Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Transform Your Business with Cloud Technology
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage scalable, secure, and cost-effective cloud infrastructure to accelerate innovation and drive
            business growth.
          </p>
        </div>

        {/* Challenges Section */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Common Cloud Migration Challenges</h2>
            <p className="text-lg text-muted-foreground">Issues that prevent businesses from moving to the cloud</p>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Cloud Solutions</h2>
            <p className="text-lg text-muted-foreground">Comprehensive cloud services for modern businesses</p>
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
            <p className="text-lg text-muted-foreground">Why cloud solutions are essential for business growth</p>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: E-commerce Cloud Migration</h2>
              <p className="text-lg text-muted-foreground">
                How we helped an e-commerce company reduce costs by 60% and improve performance by 300%
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <Image
                  src="/images/system-update-flat.webp"
                  alt="Cloud migration and system updates"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                  <p className="text-muted-foreground">
                    An e-commerce company was struggling with high infrastructure costs, frequent downtime, and
                    inability to handle traffic spikes during sales events.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                  <p className="text-muted-foreground">
                    We migrated their entire infrastructure to AWS with auto-scaling, implemented CDN, and set up
                    comprehensive monitoring and backup systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-green-500">60%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Cost Reduction</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <Zap className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-blue-500">300%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Performance Boost</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <Shield className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-purple-500">99.9%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Uptime Achieved</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-orange-500">4 Weeks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Migration Time</p>
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
              <p className="text-lg text-muted-foreground">Get answers to common cloud migration questions</p>
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
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a cloud strategy that reduces costs, improves performance, and scales with your business. Get
              started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white"
              >
                Get Free Cloud Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-fuchsia-200 text-fuchsia-600 hover:bg-fuchsia-50 bg-transparent"
              >
                View Cloud Portfolio
              </Button>
            </div>
          </div>
        </Section>
      </Section>
    </div>
  )
}
