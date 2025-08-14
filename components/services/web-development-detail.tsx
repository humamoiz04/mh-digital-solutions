import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Code, Layout, Database, Globe, Shield, Zap, TrendingUp, Target, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export function WebDevelopmentDetail() {
  const challenges = [
    "Outdated website hurting brand credibility",
    "Poor mobile experience losing customers",
    "Slow loading times affecting SEO rankings",
    "Difficult content management processes",
    "Security vulnerabilities and maintenance issues",
  ]

  const solutions = [
    {
      icon: Code,
      title: "Custom Website Development",
      description: "Building unique, high-performance websites tailored to your brand and business goals.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Layout,
      title: "Responsive Web Design",
      description: "Ensuring your website looks and functions perfectly on all devices and screen sizes.",
      color: "text-dark-pastel-green",
    },
    {
      icon: Database,
      title: "Content Management Systems",
      description: "Implementing flexible CMS solutions for easy content updates and management.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Globe,
      title: "E-commerce Development",
      description: "Creating robust online stores with seamless shopping experiences and secure payments.",
      color: "text-dark-pastel-red",
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Providing ongoing security updates, backups, and technical support for your website.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing website speed, SEO, and user experience for maximum conversions.",
      color: "text-dark-pastel-teal",
    },
  ]

  const benefits = [
    { icon: TrendingUp, title: "300% Faster Loading", description: "Optimized performance for better user experience" },
    { icon: Target, title: "Mobile-First Design", description: "Perfect experience across all devices" },
    { icon: Clock, title: "24/7 Uptime", description: "Reliable hosting and monitoring" },
    { icon: CheckCircle, title: "SEO Optimized", description: "Built for search engine visibility" },
  ]

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Timeline varies based on complexity. Simple websites take 2-4 weeks, while complex e-commerce or custom applications can take 8-16 weeks.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer:
        "Yes, we offer comprehensive maintenance packages including security updates, backups, performance monitoring, and content updates.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. All our websites are built with a mobile-first approach, ensuring perfect functionality across all devices and screen sizes.",
    },
    {
      question: "Can I update the content myself?",
      answer:
        "Yes, we build user-friendly content management systems that allow you to easily update text, images, and other content without technical knowledge.",
    },
  ]

  return (
    <div className="space-y-16">
      {/* Overview Section */}
      <Section className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">Web Development Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Create powerful, responsive websites that drive conversions and enhance your brand's digital presence.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Modern Web Excellence</h3>
              <p className="text-lg text-muted-foreground">
                We build fast, secure, and scalable websites using the latest technologies and best practices to ensure
                your online success.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <Image
              src="/images/web-development-team.webp"
              alt="Web Development Team Collaboration"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      </Section>

      {/* Challenges Section */}
      <Section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold gradient-text mb-8">Challenges You Face</h2>
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

      {/* Solutions Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Our Web Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive web development services designed to elevate your online presence and drive business growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="glass-card p-6 hover:scale-105 transition-transform">
                <CardHeader>
                  <solution.icon className={`h-12 w-12 ${solution.color} mb-4`} />
                  <CardTitle className="text-xl font-semibold">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Benefits You Can Expect</h2>
            <p className="text-lg text-muted-foreground">
              Enhanced performance, better user experience, and improved search rankings
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <CardHeader>
                  <benefit.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Study Section */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Case Study</h2>
            <p className="text-lg text-muted-foreground">
              A local business saw 400% increase in online inquiries after launching their new responsive website.
            </p>
          </div>
          <Card className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Restaurant Chain Digital Transformation</h3>
                <p className="text-muted-foreground mb-6">
                  A regional restaurant chain partnered with us to create a modern, mobile-optimized website with online
                  ordering capabilities and location management.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>400% increase in online inquiries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>250% boost in online orders</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>60% improvement in page load speed</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/images/team-collaboration-dev.webp"
                  alt="Web Development Success"
                  width={400}
                  height={300}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-card p-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-left">{faq.question}</CardTitle>
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
      <Section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-card p-12">
            <CardHeader>
              <CardTitle className="text-3xl font-bold gradient-text mb-4">
                Ready to Build Your Dream Website?
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mb-8">
                Let's create a powerful, responsive website that drives conversions and grows your business online.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white px-8 py-3">
                  <Link href="/contact">Get Free Website Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                  <Link href="/case-studies">View Our Portfolio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  )
}
