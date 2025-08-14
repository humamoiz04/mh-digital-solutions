import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import {
  Megaphone,
  Search,
  Users,
  Mail,
  BarChart,
  Smartphone,
  TrendingUp,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export function DigitalMarketingDetail() {
  const problems = [
    "Low online visibility",
    "Poor lead quality",
    "Scattered marketing efforts lacking focus",
    "Inconsistent brand messaging",
    "Difficulty measuring ROI",
  ]

  const solutions = [
    {
      icon: Megaphone,
      title: "Digital Strategy",
      description: "Integrated campaigns using SEO, PPC, social media, and analytics to maximize ROI.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description: "Improving your visibility on search engines to drive organic traffic.",
      color: "text-dark-pastel-green",
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Engaging your audience and building brand loyalty across social platforms.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Designing effective email campaigns to nurture leads and drive conversions.",
      color: "text-dark-pastel-red",
    },
    {
      icon: BarChart,
      title: "PPC Advertising",
      description: "Maximizing your ROI with targeted pay-per-click campaigns.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: Smartphone,
      title: "Content Marketing",
      description: "Creating valuable and engaging content to attract and retain customers.",
      color: "text-dark-pastel-teal",
    },
  ]

  const benefits = [
    { icon: TrendingUp, title: "Increased Website Traffic", description: "Drive more qualified visitors to your site" },
    { icon: Target, title: "Higher Quality Leads", description: "Attract prospects ready to buy" },
    { icon: Eye, title: "Measurable Growth", description: "Track engagement and conversions" },
    { icon: CheckCircle, title: "Brand Awareness", description: "Build recognition in your market" },
  ]

  const faqs = [
    {
      question: "What channels will you focus on for my business?",
      answer:
        "We analyze your target audience and industry to determine the most effective channels, typically including SEO, PPC, social media, email marketing, and content marketing.",
    },
    {
      question: "How do you measure campaign success?",
      answer:
        "We track key metrics like website traffic, lead quality, conversion rates, cost per acquisition, and ROI using advanced analytics tools and custom dashboards.",
    },
    {
      question: "How long before I see results?",
      answer:
        "PPC and social media ads can show immediate results, while SEO and content marketing typically show significant results within 3-6 months.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Yes, we work with businesses of all sizes and create customized strategies that fit your budget and goals.",
    },
  ]

  return (
    <div className="space-y-16">
      {/* Overview Section */}
      <Section className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">Digital Marketing Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Drive brand awareness and lead generation through targeted digital channels tailored to your unique
              business needs.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Comprehensive Digital Growth</h3>
              <p className="text-lg text-muted-foreground">
                We offer a full spectrum of digital marketing services designed to boost your online presence, engage
                your target audience, and drive measurable business growth.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <Image
              src="/images/social-media-marketing.webp"
              alt="Digital Marketing Strategy Illustration"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      </Section>

      {/* Problems Section */}
      <Section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold gradient-text mb-8">Common Marketing Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="glass-card p-6">
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">{problem}</p>
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
            <h2 className="text-3xl font-bold gradient-text mb-4">Our Marketing Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Integrated campaigns using SEO, PPC, social media, and analytics to maximize ROI.
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
            <h2 className="text-3xl font-bold gradient-text mb-4">Benefits You'll Experience</h2>
            <p className="text-lg text-muted-foreground">
              Increased traffic, higher quality leads, measurable growth in engagement
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
            <h2 className="text-3xl font-bold gradient-text mb-4">Success Story</h2>
            <p className="text-lg text-muted-foreground">
              A retail client saw a 50% increase in online sales within 6 months after our comprehensive digital
              marketing strategy implementation.
            </p>
          </div>
          <Card className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">E-commerce Growth Success</h3>
                <p className="text-muted-foreground mb-6">
                  A mid-size retail company partnered with us to revamp their entire digital marketing approach,
                  focusing on multi-channel integration and data-driven optimization.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>50% increase in online sales</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>300% improvement in lead quality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>180% ROI within 6 months</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/images/business-growth-celebration.webp"
                  alt="Digital Marketing Success"
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
                Get Your Free Digital Marketing Strategy Session
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mb-8">
                Ready to transform your digital presence? Let's create a customized marketing strategy that drives real
                results for your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white px-8 py-3">
                  <Link href="/contact">Get Free Strategy Session</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                  <Link href="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  )
}
