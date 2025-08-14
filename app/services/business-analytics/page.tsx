import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Target, Award, CheckCircle, ArrowRight, BarChart3 } from "lucide-react"
import Image from "next/image"

export default function BusinessAnalyticsPage() {
  const problems = [
    "Data scattered across multiple systems and platforms",
    "Lack of real-time insights for quick decision making",
    "Difficulty identifying trends and patterns in business data",
    "Manual reporting processes consuming valuable time",
    "Unable to predict future performance and market trends",
  ]

  const solutions = [
    "Comprehensive data integration and warehousing",
    "Real-time dashboards and interactive reporting",
    "Advanced analytics and predictive modeling",
    "Automated reporting and alert systems",
    "Custom analytics solutions for specific needs",
  ]

  const benefits = [
    "Data-driven decision making",
    "Improved operational efficiency",
    "Identified growth opportunities",
    "Enhanced customer understanding",
    "Competitive market advantage",
    "Measurable ROI improvements",
  ]

  const faqs = [
    {
      question: "What types of data can you analyze?",
      answer:
        "We work with all types of business data including sales, marketing, customer, financial, operational, and web analytics data from various sources and platforms.",
    },
    {
      question: "How quickly can we see results?",
      answer:
        "Initial insights and dashboards can be delivered within 2-4 weeks, with more complex predictive models taking 6-8 weeks to implement and optimize.",
    },
  ]

  return (
    <div className="relative z-10">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <BarChart3 className="h-4 w-4 mr-2" />
              Business Analytics
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Business Analytics Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform data into actionable insights with comprehensive analytics services that drive informed
              decision-making and business growth.
            </p>
          </div>

          {/* Client Problems */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Common Analytics Challenges
              </h2>
              <p className="text-lg text-muted-foreground">
                Problems that prevent businesses from leveraging their data effectively
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
                Our Analytics Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                We create comprehensive analytics systems combining data integration, visualization, and predictive
                modeling
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: E-commerce Revenue Growth</h2>
            <p className="text-lg text-muted-foreground">
              How we helped an online retailer increase revenue by 45% through data-driven insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/images/business-analytics-meeting.webp"
                alt="Business analytics consultation and data visualization"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">
                  A mid-sized e-commerce company was struggling with declining conversion rates and couldn't identify
                  which products or marketing channels were driving the most value.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                <p className="text-muted-foreground">
                  We implemented comprehensive analytics tracking, created custom dashboards, and developed predictive
                  models to identify high-value customer segments and optimize product recommendations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-500">45%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Revenue Increase</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-500">32%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Conversion Rate Boost</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-500">28%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Cost Reduction</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-500">3 Months</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Implementation Time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's transform your data into actionable insights that drive business growth and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get Analytics Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Success Stories
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
