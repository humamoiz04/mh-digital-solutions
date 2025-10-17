import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, Award, CheckCircle, ArrowRight, Bot, DollarSign, Clock } from "lucide-react"
import Image from "next/image"
import { generateServiceMetadata } from "@/lib/metadata"
import Link from "next/link"

export const metadata = generateServiceMetadata(
  "AI Automation",
  "Intelligent AI automation solutions that streamline business processes, reduce costs, and improve operational efficiency.",
)

export default function AiAutomationPage() {
  const problems = [
    "Manual processes consuming valuable time and resources",
    "Human errors affecting quality and consistency",
    "Difficulty scaling operations without proportional cost increases",
    "Lack of data-driven insights for strategic decision making",
    "Repetitive tasks preventing focus on high-value activities",
  ]

  const solutions = [
    "Intelligent process automation systems",
    "AI-powered quality control and monitoring",
    "Predictive analytics for business insights",
    "Custom AI solutions for specific workflows",
    "Machine learning models for optimization",
  ]

  const benefits = [
    "50% reduction in operational costs",
    "95% improvement in quality accuracy",
    "24/7 automated operations",
    "Scalable growth without linear cost increases",
    "Enhanced decision-making capabilities",
    "Improved employee productivity and satisfaction",
  ]

  const faqs = [
    {
      question: "How long does AI implementation take?",
      answer:
        "Implementation typically takes 3-6 months depending on complexity, with initial results visible within the first month.",
    },
    {
      question: "Will AI replace our employees?",
      answer:
        "Our AI solutions are designed to augment human capabilities, not replace them. We focus on automating repetitive tasks so your team can focus on higher-value work.",
    },
  ]

  return (
    <div className="relative z-10">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <Bot className="h-4 w-4 mr-2" />
              AI & Automation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              AI & Automation Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business operations with intelligent automation and AI-powered solutions that reduce costs,
              improve efficiency, and scale your operations.
            </p>
          </div>

          {/* Client Problems */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Common Automation Challenges
              </h2>
              <p className="text-lg text-muted-foreground">
                Problems that prevent businesses from achieving operational excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="glass-card border-red-200/20">
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

          {/* Our Solutions */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-4">
                Our AI Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                We create intelligent automation systems combining AI, machine learning, and process optimization
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="glass-card border-green-200/20 hover:border-green-300/30 transition-colors"
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

          {/* Benefits */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                Benefits You'll Experience
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass-card border-purple-200/20">
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

          {/* AI Automation Resources & Success Stories */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
                AI Automation Resources & Success Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore how AI automation is transforming businesses across industries
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link
                      href="/blog/ai-automation-revolution-2024"
                      className="hover:text-fuchsia-600 transition-colors"
                    >
                      AI Automation Revolution 2024
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Discover how AI automation is revolutionizing business operations and driving unprecedented
                    efficiency gains across industries.
                  </p>
                  <Link
                    href="/blog/ai-automation-revolution-2024"
                    className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link
                      href="/case-studies/manufacturing-automation"
                      className="hover:text-fuchsia-600 transition-colors"
                    >
                      Manufacturing Automation Success
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    How we helped a manufacturing company achieve $2M annual savings through intelligent AI automation
                    systems.
                  </p>
                  <Link
                    href="/case-studies/manufacturing-automation"
                    className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                  >
                    View Case Study →
                  </Link>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link
                      href="/blog/mobile-app-development-trends-2024"
                      className="hover:text-fuchsia-600 transition-colors"
                    >
                      Mobile App Development Trends
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Explore how mobile app development trends are enabling AI-powered automation and enhanced user
                    experiences.
                  </p>
                  <Link
                    href="/blog/mobile-app-development-trends-2024"
                    className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link
                      href="/case-studies/techcorp-ai-automation"
                      className="hover:text-fuchsia-600 transition-colors"
                    >
                      TechCorp AI Transformation
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete AI transformation case study showing how TechCorp achieved operational excellence through
                    automation.
                  </p>
                  <Link
                    href="/case-studies/techcorp-ai-automation"
                    className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                  >
                    View Case Study →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-card">
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

      <Section glass className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: Manufacturing Automation Success</h2>
            <p className="text-lg text-muted-foreground">
              A manufacturing client achieved $2M annual savings and 95% quality accuracy through AI automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/images/ai-automation-new.webp"
                alt="AI automation in manufacturing process"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">
                  A manufacturing company struggled with quality control issues, manual inspection processes, and high
                  operational costs affecting their competitiveness.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                <p className="text-muted-foreground">
                  We implemented AI-powered quality control systems, automated inspection processes, and predictive
                  maintenance solutions to optimize their entire production line.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center">
              <CardHeader>
                <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-500">$2M</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Annual Savings</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-500">95%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Quality Accuracy</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Clock className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-500">80%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Time Reduction</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-500">4 Months</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Implementation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how AI automation can reduce your costs, improve quality, and scale your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start AI Transformation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
