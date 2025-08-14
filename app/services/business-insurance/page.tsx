import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Award, CheckCircle, ArrowRight, Building } from "lucide-react"
import Image from "next/image"

export default function BusinessInsurancePage() {
  const problems = [
    "Inadequate business protection coverage",
    "High insurance premiums and costs",
    "Complex policy terms and conditions",
    "Difficulty finding the right coverage",
    "Claims processing complications",
  ]

  const solutions = [
    "Comprehensive insurance needs assessment",
    "Custom policy recommendations",
    "Multi-carrier comparison and quotes",
    "Claims support and advocacy",
    "Ongoing policy management and reviews",
  ]

  const benefits = [
    "Complete business protection",
    "Reduced insurance costs",
    "Peace of mind coverage",
    "Expert claims assistance",
    "Risk management guidance",
    "Compliance assurance",
  ]

  const faqs = [
    {
      question: "What types of business insurance do I need?",
      answer:
        "Essential coverage typically includes general liability, professional liability, property insurance, and workers' compensation. We'll assess your specific risks to recommend the right coverage mix.",
    },
    {
      question: "How can I reduce my business insurance costs?",
      answer:
        "We help reduce costs through risk management strategies, policy bundling, deductible optimization, and finding the most competitive rates from multiple carriers.",
    },
  ]

  return (
    <div className="relative z-10">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Business Insurance
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Business Insurance Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect your business with comprehensive insurance coverage tailored to your industry and risk profile.
            </p>
          </div>

          {/* Client Problems */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Common Insurance Challenges
              </h2>
              <p className="text-lg text-muted-foreground">
                Problems that leave businesses vulnerable to financial risks
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
                Our Insurance Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide comprehensive insurance solutions that protect your business while optimizing costs
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: Restaurant Chain Protection Success</h2>
            <p className="text-lg text-muted-foreground">
              A restaurant chain saved $150K annually while improving coverage through our comprehensive insurance
              optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/images/business-growth-cta.webp"
                alt="Business insurance protection and growth"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">
                  A growing restaurant chain was paying excessive premiums for inadequate coverage across multiple
                  locations, with gaps in liability protection and complex claims processes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                <p className="text-muted-foreground">
                  We conducted a comprehensive risk assessment, restructured their coverage portfolio, negotiated better
                  rates with multiple carriers, and implemented streamlined claims management.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-500">$150K</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Annual Savings</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-500">300%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Coverage Increase</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Building className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-500">25</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Locations Protected</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-500">30 Days</CardTitle>
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
            Get Your Free Insurance Review Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to protect your business with the right coverage? Let's review your current insurance and find better
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get Free Insurance Review
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Coverage Options
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
