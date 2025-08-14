import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AlertTriangle, CheckCircle, Code, Smartphone, Search, Shield, TrendingUp, Users } from "lucide-react"

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
    <div className="relative z-10">
      {/* Problem Section */}
      <Section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 gradient-text">
              Is Your Website Holding Your Business Back?
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Many businesses struggle with outdated websites that fail to convert visitors into customers. Don't let
              poor web presence cost you valuable opportunities.
            </p>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/web-development-3d.webp"
              alt="Web development challenges"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section glass className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/developer-workspace-3d.webp"
              alt="Professional web development"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Professional Web Development Solutions</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We create modern, high-performing websites that drive results. Our development approach focuses on user
              experience, performance, and business growth.
            </p>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Benefits of Professional Web Development</h2>
          <p className="text-lg text-muted-foreground">Transform your online presence and drive business growth</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-bold text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case Study */}
      <Section glass className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: E-commerce Platform Redesign</h2>
            <p className="text-lg text-muted-foreground">How we increased online sales by 180% for a retail client</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
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
            <Card className="glass-card text-center">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-500">180%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Sales Increase</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-500">65%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Mobile Conversions</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-500">40%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Lower Bounce Rate</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
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

      {/* Process Overview */}
      <Section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Development Process</h2>
          <p className="text-lg text-muted-foreground">A proven methodology for successful web development projects</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="text-sm font-bold text-primary mb-2">{step.step}</div>
                <CardTitle className="text-xl font-bold text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section glass className="py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Get answers to common web development questions</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-card">
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

      {/* Why Choose Us */}
      <Section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose MH Digital Solution?</h2>
          <p className="text-lg text-muted-foreground">What sets our web development services apart</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass-card text-center">
            <CardHeader>
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl font-bold text-foreground">Expert Development Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our senior developers have 10+ years of experience with modern technologies and best practices.
              </p>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl font-bold text-foreground">Security First Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We implement enterprise-grade security measures to protect your website and user data.
              </p>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl font-bold text-foreground">Ongoing Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We provide continuous support, maintenance, and optimization to ensure peak performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section glass className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Transform Your Web Presence?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a website that drives results for your business. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-button">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="gradient-button bg-transparent">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
