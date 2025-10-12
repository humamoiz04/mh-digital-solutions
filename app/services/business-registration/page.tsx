import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, TrendingUp, Shield, Award, CheckCircle, ArrowRight, Building } from "lucide-react"
import Image from "next/image"

export default function BusinessRegistrationPage() {
  const problems = [
    "Complex legal requirements and paperwork",
    "Confusion about business structure types",
    "Time-consuming registration processes",
    "Compliance and regulatory challenges",
    "Lack of guidance on tax implications",
  ]

  const solutions = [
    "Complete business registration services",
    "Entity type selection guidance",
    "Legal document preparation",
    "Compliance and regulatory support",
    "Tax planning and optimization",
  ]

  const benefits = [
    "Legal business protection",
    "Professional credibility",
    "Tax advantages and deductions",
    "Access to business banking",
    "Liability protection",
    "Compliance peace of mind",
  ]

  const faqs = [
    {
      question: "What business entity type should I choose?",
      answer:
        "The best entity type depends on your business goals, tax situation, and liability concerns. We'll help you choose between LLC, Corporation, Partnership, or Sole Proprietorship based on your specific needs.",
    },
    {
      question: "How long does the registration process take?",
      answer:
        "Most business registrations are completed within 1-2 weeks, though timing can vary by state and entity type. We handle all paperwork to ensure the fastest possible processing.",
    },
  ]

  return (
    <div className="relative z-10">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Business Registration
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Business Registration Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start your business the right way with our comprehensive registration services and legal compliance
              support.
            </p>
          </div>

          {/* Client Problems */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Common Registration Challenges
              </h2>
              <p className="text-lg text-muted-foreground">Problems that complicate the business formation process</p>
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
                Our Registration Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                We handle all aspects of business formation, from entity selection to compliance requirements
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: Tech Startup Formation Success</h2>
            <p className="text-lg text-muted-foreground">
              A tech entrepreneur successfully launched their startup with proper legal structure and compliance in just
              10 days
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/images/digital-business-banner.webp"
                alt="Business registration and formation"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">
                  A tech entrepreneur needed to quickly establish a legal business entity to secure funding and
                  partnerships, but was overwhelmed by the complex registration requirements and legal implications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                <p className="text-muted-foreground">
                  We guided them through entity selection, handled all registration paperwork, set up compliance
                  systems, and provided ongoing legal support for their growing business.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center">
              <CardHeader>
                <Building className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-500">10 Days</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Registration Time</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-500">100%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Compliance Rate</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-500">$500K</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Funding Secured</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-500">Zero</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Legal Issues</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Get Your Free Business Registration Consultation Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your business the right way? Let's discuss your registration needs and get you legally
            established.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
            >
              Get Free Registration Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Registration Packages
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
