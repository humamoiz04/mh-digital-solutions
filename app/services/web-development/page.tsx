import type { Metadata } from "next"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  AlertTriangle,
  CheckCircle,
  Code,
  Smartphone,
  Search,
  Shield,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Expert Web Development Services | Custom & E-commerce | MH Digital",
  description:
    "From custom web apps to robust e-commerce platforms, our web development services build fast, secure, and scalable websites. Let's build your vision.",
  keywords:
    "custom web development company, e-commerce website development, wordpress development services, hire php developer, front-end development services",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/services/web-development",
  },
  openGraph: {
    title: "Expert Web Development Services | Custom & E-commerce | MH Digital",
    description:
      "From custom web apps to robust e-commerce platforms, our web development services build fast, secure, and scalable websites. Let's build your vision.",
    url: "https://www.mhdigitalsolution.com/services/web-development",
  },
}

export default function WebDevelopmentPage() {
  const problems = [
    "Outdated website that doesn't reflect your brand",
    "Poor mobile experience losing potential customers",
    "Slow loading times affecting search rankings",
    "Security vulnerabilities putting data at risk",
    "Difficult content management and updates",
  ]

  const solutions = [
    "Modern, responsive design that works perfectly on all devices",
    "Lightning-fast performance with optimized code and assets",
    "SEO-friendly architecture for better search visibility",
    "Enterprise-grade security and regular updates",
    "User-friendly CMS for easy content management",
  ]

  const benefits = [
    { icon: TrendingUp, title: "Increased Conversions", description: "Up to 200% improvement in conversion rates" },
    { icon: Search, title: "Better SEO Rankings", description: "Higher search engine visibility and organic traffic" },
    { icon: Smartphone, title: "Mobile Optimization", description: "Perfect experience across all devices" },
    { icon: Shield, title: "Enhanced Security", description: "Protection against cyber threats and data breaches" },
    { icon: Users, title: "Improved User Experience", description: "Intuitive navigation and engaging interfaces" },
    { icon: Code, title: "Clean, Scalable Code", description: "Future-proof development with best practices" },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
      icon: "🔍",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Our designers create wireframes and prototypes that align with your brand and provide optimal user experience.",
      icon: "🎨",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your website using modern technologies, followed by rigorous testing across all devices and browsers.",
      icon: "⚡",
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description:
        "After successful launch, we monitor performance and make continuous improvements for optimal results.",
      icon: "🚀",
    },
  ]

  const faqs = [
    {
      question: "How long does it take to develop a website?",
      answer:
        "Timeline varies based on complexity. Simple websites take 2-4 weeks, while complex applications can take 8-16 weeks. We provide detailed timelines during planning.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. All our websites are built with responsive design, ensuring perfect functionality and appearance across all devices and screen sizes.",
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer:
        "Yes, we build SEO-friendly websites and offer comprehensive digital marketing services to help drive traffic and conversions.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern technologies like React, Next.js, Node.js, and cloud platforms. We choose the best tech stack based on your specific requirements.",
    },
  ]

  return (
    <div className="relative z-10 backdrop-blur-sm bg-white/5 min-h-screen">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <Code className="h-4 w-4 mr-2" />
              Web Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Custom Web Development Company
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom web apps to robust e-commerce platforms, our web development services build fast, secure, and
              scalable websites. Let's build your vision.
            </p>
          </div>

          {/* Problems Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Is Your Website Holding Your Business Back?
              </h2>
              <p className="text-lg text-muted-foreground">
                Many businesses struggle with outdated websites that fail to convert visitors into customers
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="glass-card border-red-200/20 hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
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
                Professional Web Development Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                We create modern, high-performing websites that drive results and business growth
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
                Benefits of Professional Web Development
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass-card border-purple-200/20 hover:scale-105 transition-transform">
                  <CardHeader>
                    <benefit.icon className="h-12 w-12 text-fuchsia-500 mx-auto mb-4" />
                    <CardTitle className="text-xl font-bold text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: E-commerce Platform Redesign</h2>
            <p className="text-lg text-muted-foreground">How we increased online sales by 180% for a retail client</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/images/pink-laptop-3d.webp"
                alt="E-commerce website redesign"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">
                  A fashion retailer's outdated website had poor mobile experience, slow loading times, and a confusing
                  checkout process, resulting in high bounce rates and low conversions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                <p className="text-muted-foreground">
                  We redesigned the entire platform with mobile-first approach, optimized performance, streamlined
                  checkout, and implemented advanced search and filtering capabilities.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-500">180%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Sales Increase</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-500">65%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Mobile Conversions</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-500">40%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Lower Bounce Rate</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center hover:scale-105 transition-transform">
              <CardHeader>
                <Search className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-500">3x</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Faster Loading</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Ready to Transform Your Web Presence?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's create a website that drives results for your business. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 hover:scale-105 transition-transform"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform bg-transparent">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
