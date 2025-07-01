import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, PieChart, TrendingUp, CheckCircle, LineChart, Database } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"

export default function BusinessAnalyticsPage() {
  const faqs = [
    {
      question: "What types of data do you work with?",
      answer:
        "We work with various data types including financial data, customer data, operational metrics, marketing analytics, website performance data, social media metrics, and more. Our analytics solutions are designed to integrate data from multiple sources to provide comprehensive insights.",
    },
    {
      question: "Do I need to have existing data collection systems in place?",
      answer:
        "Not necessarily. While it's helpful to have existing data, we can also help you set up data collection systems from scratch. We'll identify what data is valuable for your business objectives and implement the right tools and processes to capture it effectively.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "We implement robust security measures including data encryption, secure access controls, regular security audits, and compliance with relevant regulations such as GDPR and CCPA. We also provide data governance recommendations to help you maintain data privacy and security long-term.",
    },
    {
      question: "Can you integrate with our existing software systems?",
      answer:
        "Yes, our analytics solutions are designed to integrate with most common business software including CRMs, ERPs, marketing platforms, e-commerce systems, and financial software. We use API connections and data integration tools to create seamless data flows.",
    },
    {
      question: "How long does it take to implement a business analytics solution?",
      answer:
        "Implementation timelines vary based on project complexity, data sources, and specific requirements. Basic dashboards and reports can be set up in 2-4 weeks, while more complex analytics systems may take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
    },
  ]

  const testimonials = [
    {
      text: "The business analytics dashboard MH Digital created gives us real-time visibility into our operations. We've been able to identify cost-saving opportunities and improve our margins by 18%.",
      name: "Thomas Wilson",
      position: "CFO",
      company: "Apex Manufacturing",
      rating: 5,
    },
    {
      text: "Their customer analytics solution transformed how we understand our audience. We've increased customer retention by 24% by implementing their data-driven recommendations.",
      name: "Laura Chen",
      position: "Marketing Director",
      company: "Consumer Brands Inc.",
      rating: 5,
    },
    {
      text: "MH Digital's sales analytics platform helped us identify underperforming territories and optimize our sales strategy. Our revenue increased by 31% in the first quarter after implementation.",
      name: "James Rodriguez",
      position: "VP of Sales",
      company: "Tech Solutions Group",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white border-0">
                  📊 Data-Driven Business Intelligence
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Business Analytics
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">That Drive Decisions</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Transform your data into actionable insights with our comprehensive business analytics solutions that
                  help you make smarter, faster business decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get Analytics Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full"
                  >
                    View Demo Dashboards
                  </Button>
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/analytics-dashboard-new.webp"
                    alt="Business Analytics Services"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Competitor Comparison */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Analytics</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Provider Comparison
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See why businesses choose our analytics solutions over competitors
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Competitor 1 */}
              <Card className="glass-card border-0 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold">E1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">E1Sol</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Analytics Package:</span>
                      <span className="font-bold">$3,500/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Setup Time:</span>
                      <span>8-12 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Custom Dashboards:</span>
                      <span>Limited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Real-time Data:</span>
                      <span>❌</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" disabled>
                    Their Package
                  </Button>
                </CardContent>
              </Card>

              {/* MH Digital (Center - Featured) */}
              <Card className="glass-card border-2 border-purple-500 scale-105 hover-lift">
                <CardContent className="p-8 text-center relative">
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Best Value
                  </Badge>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold">MH</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    MH Digital
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Analytics Package:</span>
                      <span className="font-bold text-green-600">$1,499/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Setup Time:</span>
                      <span className="text-green-600">2-4 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Custom Dashboards:</span>
                      <span className="text-green-600">Unlimited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Real-time Data:</span>
                      <span className="text-green-600">✅</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">Check Pricing</Button>
                </CardContent>
              </Card>

              {/* Competitor 2 */}
              <Card className="glass-card border-0 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold">TD</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Thomas Digital</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Analytics Package:</span>
                      <span className="font-bold">$4,200/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Setup Time:</span>
                      <span>10-16 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Custom Dashboards:</span>
                      <span>3 included</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Real-time Data:</span>
                      <span>Extra cost</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" disabled>
                    Their Package
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Analytics Solutions */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Comprehensive</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Analytics Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                End-to-end analytics services that turn complex data into clear, actionable business insights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Business Intelligence Dashboards",
                  description:
                    "Interactive dashboards that visualize your key business metrics for faster, better decision making",
                  features: [
                    "Real-time data visualization",
                    "Custom KPI tracking",
                    "Interactive filtering",
                    "Cross-platform access",
                    "Automated reporting",
                  ],
                  color: "from-purple-600 to-pink-600",
                },
                {
                  icon: PieChart,
                  title: "Customer Analytics",
                  description:
                    "Deep insights into customer behavior, preferences, and journeys to enhance your marketing and sales",
                  features: [
                    "Customer segmentation",
                    "Purchase pattern analysis",
                    "Customer lifetime value",
                    "Churn prediction",
                    "Behavioral analytics",
                  ],
                  color: "from-pink-600 to-orange-500",
                },
                {
                  icon: LineChart,
                  title: "Financial Analytics",
                  description:
                    "Comprehensive financial data analysis to improve profitability, cash flow, and financial planning",
                  features: [
                    "Profit & loss analysis",
                    "Budget vs. actual tracking",
                    "Cash flow forecasting",
                    "Expense optimization",
                    "Financial forecasting",
                  ],
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: TrendingUp,
                  title: "Operational Analytics",
                  description:
                    "Optimize your business operations with data-driven insights into processes, efficiency, and quality",
                  features: [
                    "Process efficiency metrics",
                    "Resource utilization",
                    "Quality control analytics",
                    "Supply chain visibility",
                    "Productivity analysis",
                  ],
                  color: "from-red-500 to-purple-600",
                },
                {
                  icon: Database,
                  title: "Data Integration & Management",
                  description:
                    "Unify your data from multiple sources into a single, reliable system for comprehensive analysis",
                  features: [
                    "Data warehouse setup",
                    "Multiple source integration",
                    "Data cleaning & preparation",
                    "Automated data pipelines",
                    "Data governance",
                  ],
                  color: "from-purple-600 to-pink-600",
                },
                {
                  icon: CheckCircle,
                  title: "Predictive Analytics",
                  description:
                    "Leverage advanced data models to forecast trends, anticipate challenges, and identify opportunities",
                  features: [
                    "Sales forecasting",
                    "Demand prediction",
                    "Trend analysis",
                    "Risk assessment",
                    "Market opportunity identification",
                  ],
                  color: "from-pink-600 to-orange-500",
                },
              ].map((service, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`service-card-${(index % 6) + 1} border-0 hover-lift`}>
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Approach */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our Analytics</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Methodology
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven approach to implementing effective business analytics solutions
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Discovery & Needs Assessment",
                    description:
                      "We start by understanding your business goals, key metrics, data sources, and analytical requirements.",
                    color: "from-purple-600 to-pink-600",
                  },
                  {
                    step: "02",
                    title: "Data Strategy & Architecture",
                    description:
                      "We design a comprehensive data strategy and technical architecture tailored to your specific needs.",
                    color: "from-pink-600 to-orange-500",
                  },
                  {
                    step: "03",
                    title: "Data Integration & Preparation",
                    description: "We connect to all relevant data sources, clean and transform your data for analysis.",
                    color: "from-orange-500 to-red-500",
                  },
                  {
                    step: "04",
                    title: "Analytics Development",
                    description:
                      "We build custom dashboards, reports, and analytics models that deliver actionable insights.",
                    color: "from-red-500 to-purple-600",
                  },
                  {
                    step: "05",
                    title: "Implementation & Training",
                    description:
                      "We deploy your analytics solution, train your team, and ensure adoption across your organization.",
                    color: "from-purple-600 to-pink-600",
                  },
                ].map((phase, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="flex items-start space-x-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-2xl font-bold text-white">{phase.step}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{phase.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results & Case Studies */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Analytics</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real business impact delivered through data analytics
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "31%", label: "Average Revenue Growth", description: "Through data-driven decisions" },
                { metric: "24%", label: "Cost Reduction", description: "Through operational insights" },
                { metric: "45%", label: "Efficiency Improvement", description: "Through process analytics" },
                { metric: "18%", label: "Margin Improvement", description: "Through financial analytics" },
              ].map((result, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
                        {result.metric}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{result.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{result.description}</div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Technologies */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Analytics</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We leverage industry-leading technologies to deliver powerful analytics solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                "Power BI",
                "Tableau",
                "Google Analytics",
                "Looker",
                "Snowflake",
                "BigQuery",
                "AWS Redshift",
                "Databricks",
                "Python",
                "R",
                "SQL",
                "Alteryx",
              ].map((tech, index) => (
                <ScrollAnimation key={index} delay={index * 50}>
                  <Card className="glass border-0 hover-lift">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tech}</h3>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* FAQ Section */}
      <FAQ
        title="Business Analytics FAQ"
        subtitle="Common questions about our business analytics services"
        faqs={faqs}
      />

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to Unlock the</span>{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Power of Your Data
                  </span>
                  ?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our business analytics solutions can help you make smarter decisions and drive
                  growth
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Schedule Analytics Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full"
                  >
                    View Demo Dashboards
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
