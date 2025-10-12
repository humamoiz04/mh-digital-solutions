import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, TrendingUp, Users, Award, CheckCircle, ArrowRight, Monitor } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Website Design Services | Responsive & User-Friendly | MH Digital",
  description:
    "Need a stunning, high-converting website? Our custom web design services focus on UI/UX to turn visitors into customers. Get a free quote today!",
  keywords:
    "custom web design services, small business website design, affordable web design company, ui/ux design services, responsive website design",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/services/web-design",
  },
  openGraph: {
    title: "Custom Website Design Services | Responsive & User-Friendly | MH Digital",
    description:
      "Need a stunning, high-converting website? Our custom web design services focus on UI/UX to turn visitors into customers. Get a free quote today!",
    url: "https://www.mhdigitalsolution.com/services/web-design",
    images: [
      {
        url: "https://www.mhdigitalsolution.com/images/ui-ux-design-3d.webp",
        width: 1200,
        height: 630,
        alt: "Custom Website Design Services",
      },
    ],
  },
}

export default function WebDesignPage() {
  const problems = [
    "Outdated and unprofessional website design",
    "Poor user experience and navigation",
    "Low conversion rates and engagement",
    "Mobile responsiveness issues",
    "Slow loading times and performance",
  ]

  const solutions = [
    "Modern responsive web design",
    "User experience optimization",
    "Conversion-focused design elements",
    "Mobile-first design approach",
    "Performance optimization and speed",
  ]

  const benefits = [
    "Professional brand image",
    "Improved user engagement",
    "Higher conversion rates",
    "Better search engine rankings",
    "Enhanced mobile experience",
    "Increased customer trust",
  ]

  const faqs = [
    {
      question: "How long does a website design project take?",
      answer:
        "Most website design projects take 4-8 weeks depending on complexity and features. We provide detailed timelines and milestones during our initial consultation.",
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer:
        "Yes, we offer comprehensive maintenance packages including updates, security monitoring, performance optimization, and content management support.",
    },
  ]

  return (
    <div className="relative z-10 backdrop-blur-sm bg-white/5 min-h-screen">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <Palette className="h-4 w-4 mr-2" />
              Web Design
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Custom Web Design Process
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Need a stunning, high-converting website? Our custom web design services focus on UI/UX to turn visitors
              into customers. Get a free quote today!
            </p>
          </div>

          {/* Problems Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Common Design Challenges
              </h2>
              <p className="text-lg text-muted-foreground">
                Problems that prevent websites from achieving their full potential
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="glass-card border-red-200/20 hover:scale-105 transition-transform">
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

          {/* Solutions Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-4">
                Focus on Responsive Website Design and UI/UX
              </h2>
              <p className="text-lg text-muted-foreground">
                We create beautiful, functional websites that engage users and drive conversions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="glass-card border-green-200/20 hover:border-green-300/30 transition-all hover:scale-105"
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

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                Affordable Web Design Packages for Startups
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass-card border-purple-200/20 hover:scale-105 transition-transform">
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

          {/* FAQs Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-card hover:scale-102 transition-transform">
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

      {/* Case Study Section */}
      <Section glass className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: Law Firm Website Redesign Success</h2>
            <p className="text-lg text-muted-foreground">
              A law firm increased client inquiries by 250% and improved their professional image through our website
              redesign
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/images/ui-ux-design-3d.webp"
                alt="Professional web design showcase"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">
                  A law firm had an outdated website that didn't reflect their expertise, had poor mobile experience,
                  and generated very few client inquiries despite good search rankings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                <p className="text-muted-foreground">
                  We redesigned their website with a modern, professional look, optimized user experience, improved
                  mobile responsiveness, and added conversion-focused elements throughout.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-500">250%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Inquiry Increase</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Monitor className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-500">85%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Mobile Traffic</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-500">180%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Time on Site</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-500">6 Weeks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Project Timeline</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Get Your Free Web Design Consultation Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your online presence? Let's discuss your design goals and create a website that drives
            results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 hover:scale-105 transition-transform"
            >
              Get Free Design Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform bg-transparent">
              View Design Portfolio
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
