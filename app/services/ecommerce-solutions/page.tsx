import { Section } from "@/components/Section"
import { FloatingBlobs } from "@/components/floating-blobs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, TrendingUp, Users, DollarSign, AlertTriangle, CheckCircle } from "lucide-react"
import Image from "next/image"
import { PartnerBadges } from "@/components/partner-badges"

export default function EcommerceSolutionsPage() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Low Conversion Rates",
      description: "Poor website design and checkout process leading to abandoned carts",
    },
    {
      icon: AlertTriangle,
      title: "Mobile Shopping Issues",
      description: "Non-responsive design causing poor mobile shopping experience",
    },
    {
      icon: AlertTriangle,
      title: "Inventory Management",
      description: "Difficulty tracking stock across multiple sales channels",
    },
    {
      icon: AlertTriangle,
      title: "Payment Processing",
      description: "Limited payment options and security concerns affecting sales",
    },
  ]

  const solutions = [
    {
      icon: CheckCircle,
      title: "Custom E-commerce Development",
      description: "Tailored online stores built for your specific business needs and brand",
    },
    {
      icon: CheckCircle,
      title: "Mobile-First Design",
      description: "Responsive designs optimized for mobile shopping experiences",
    },
    {
      icon: CheckCircle,
      title: "Payment Gateway Integration",
      description: "Secure, multiple payment options for seamless checkout process",
    },
    {
      icon: CheckCircle,
      title: "Inventory Management System",
      description: "Real-time stock tracking and automated inventory management",
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Sales",
      description: "Optimized stores see 40% higher conversion rates",
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Intuitive design leads to 60% more customer retention",
    },
    {
      icon: ShoppingCart,
      title: "Reduced Cart Abandonment",
      description: "Streamlined checkout reduces abandonment by 35%",
    },
    {
      icon: DollarSign,
      title: "Higher Revenue",
      description: "Professional stores generate 3x more revenue",
    },
  ]

  const faqs = [
    {
      question: "Which e-commerce platform is best for my business?",
      answer:
        "We analyze your specific needs, budget, and growth plans to recommend the most suitable platform, whether it's Shopify, WooCommerce, Magento, or a custom solution.",
    },
    {
      question: "How long does it take to build an e-commerce store?",
      answer:
        "Timeline varies based on complexity. Simple stores take 4-6 weeks, while complex custom solutions can take 12-16 weeks including design, development, and testing.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, we offer comprehensive maintenance packages including security updates, performance optimization, inventory management, and technical support.",
    },
    {
      question: "Can you integrate with existing business systems?",
      answer:
        "We specialize in integrating e-commerce platforms with existing ERP, CRM, accounting, and inventory management systems for seamless operations.",
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
            🛒 E-commerce Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Build & Scale Your Online Store
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive e-commerce solutions to build, optimize, and scale your online store for maximum sales and
            customer satisfaction.
          </p>
        </div>

        {/* Partner Badges */}
        <PartnerBadges />

        {/* Challenges Section */}
        <div className="space-y-8 mb-16 mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Common E-commerce Challenges</h2>
            <p className="text-lg text-muted-foreground">
              Issues that prevent online stores from reaching their potential
            </p>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Our E-commerce Solutions</h2>
            <p className="text-lg text-muted-foreground">Complete solutions to build and grow your online business</p>
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
            <p className="text-lg text-muted-foreground">Why professional e-commerce solutions drive success</p>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: Fashion Retailer Transformation</h2>
              <p className="text-lg text-muted-foreground">
                How we helped a fashion brand increase online sales by 250% in 12 months
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <Image
                  src="/images/3d-web-design-pages.webp"
                  alt="3D web design with multiple pages and e-commerce elements"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                  <p className="text-muted-foreground">
                    A traditional fashion retailer needed to establish a strong online presence with a modern e-commerce
                    platform that could handle high traffic and provide excellent user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                  <p className="text-muted-foreground">
                    We built a custom e-commerce platform with advanced product filtering, personalized recommendations,
                    and seamless mobile experience, integrated with their existing inventory system.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-green-500">250%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Sales Increase</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <ShoppingCart className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-blue-500">4.2%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-purple-500">180%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Traffic Growth</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center border-fuchsia-100/20">
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-orange-500">$2.5M</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Annual Revenue</p>
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
              <p className="text-lg text-muted-foreground">Get answers to common e-commerce questions</p>
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
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Launch Your Online Store?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build an e-commerce platform that drives sales and grows your business. Get started with a free
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white"
              >
                Start Your Store
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-fuchsia-200 text-fuchsia-600 hover:bg-fuchsia-50 bg-transparent"
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </Section>
      </Section>
    </div>
  )
}
