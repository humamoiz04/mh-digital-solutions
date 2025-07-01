import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Users, BarChart3, CheckCircle, Send, Target } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"

export default function EmailMarketingPage() {
  const faqs = [
    {
      question: "How do you build email lists without being spammy?",
      answer:
        "We focus on permission-based marketing using lead magnets, opt-in forms, content upgrades, and valuable incentives. We never purchase email lists and always follow GDPR and CAN-SPAM compliance guidelines to build high-quality, engaged subscriber lists.",
    },
    {
      question: "What email marketing platforms do you work with?",
      answer:
        "We work with all major email marketing platforms including Mailchimp, Constant Contact, ConvertKit, ActiveCampaign, HubSpot, Klaviyo, and others. We'll recommend the best platform based on your needs, budget, and technical requirements.",
    },
    {
      question: "How often should we send emails to our subscribers?",
      answer:
        "Email frequency depends on your audience and content type. We typically recommend weekly newsletters, with additional promotional emails as needed. We test different frequencies to find the optimal balance that maximizes engagement without causing unsubscribes.",
    },
    {
      question: "What kind of open and click rates can we expect?",
      answer:
        "Average open rates vary by industry but typically range from 15-25%. Click rates usually range from 2-5%. However, we focus on more meaningful metrics like conversion rates, revenue per email, and list growth. Our clients typically see above-average performance through our optimization strategies.",
    },
    {
      question: "Do you handle email design and copywriting?",
      answer:
        "Yes, we handle all aspects of email marketing including strategy, design, copywriting, automation setup, list management, and performance analysis. Our team includes experienced email designers and copywriters who create engaging, conversion-focused campaigns.",
    },
  ]

  const testimonials = [
    {
      text: "Our email marketing revenue increased by 300% after working with MH Digital. Their automation sequences and segmentation strategies are incredibly effective.",
      name: "Jessica Parker",
      position: "E-commerce Manager",
      company: "Fashion Boutique",
      rating: 5,
    },
    {
      text: "They helped us build our email list from 500 to 15,000 subscribers in 8 months. More importantly, our email-driven sales now account for 40% of our total revenue.",
      name: "Robert Kim",
      position: "Marketing Director",
      company: "SaaS Company",
      rating: 5,
    },
    {
      text: "The email automation workflows they created save us 20 hours per week while generating consistent leads. Our open rates are now 35% above industry average.",
      name: "Maria Rodriguez",
      position: "Business Owner",
      company: "Consulting Firm",
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
                <Badge className="mb-6 bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-white border-0">
                  📧 Strategic Email Marketing
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    Email Marketing
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">That Converts</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Build lasting relationships with your audience through strategic email marketing campaigns that
                  nurture leads, drive sales, and maximize customer lifetime value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get Email Strategy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-white rounded-full"
                  >
                    View Email Examples
                  </Button>
                </div>
              </div>
              <ScrollAnimation>
                <div className="relative">
                  <Image
                    src="/images/analytics-dashboard.webp"
                    alt="Email Marketing Services"
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

      {/* Email Marketing Services */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Complete</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  Email Marketing Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From strategy development to automation and analytics, we handle every aspect of your email marketing
                campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Email Strategy & Planning",
                  description:
                    "Comprehensive email marketing strategies tailored to your business goals and audience segments",
                  features: [
                    "Audience segmentation",
                    "Campaign planning",
                    "Content calendar",
                    "Goal setting & KPIs",
                    "Competitive analysis",
                  ],
                  color: "from-[#00F5FF] to-[#8B5CF6]",
                },
                {
                  icon: Users,
                  title: "List Building & Management",
                  description: "Grow your email list with high-quality subscribers and maintain optimal list health",
                  features: [
                    "Lead magnet creation",
                    "Opt-in form optimization",
                    "List segmentation",
                    "Subscriber management",
                    "Compliance management",
                  ],
                  color: "from-[#8B5CF6] to-[#F472B6]",
                },
                {
                  icon: Mail,
                  title: "Email Design & Development",
                  description:
                    "Beautiful, responsive email templates that look great on all devices and drive engagement",
                  features: [
                    "Custom email templates",
                    "Mobile optimization",
                    "Brand consistency",
                    "A/B testing designs",
                    "Accessibility compliance",
                  ],
                  color: "from-[#F472B6] to-[#FF7600]",
                },
                {
                  icon: Send,
                  title: "Email Automation",
                  description: "Automated email sequences that nurture leads and customers throughout their journey",
                  features: [
                    "Welcome series",
                    "Drip campaigns",
                    "Abandoned cart recovery",
                    "Re-engagement campaigns",
                    "Behavioral triggers",
                  ],
                  color: "from-[#FF7600] to-[#00F5FF]",
                },
                {
                  icon: BarChart3,
                  title: "Campaign Management",
                  description: "Full-service campaign management including scheduling, sending, and optimization",
                  features: [
                    "Campaign scheduling",
                    "Send time optimization",
                    "Subject line testing",
                    "Content optimization",
                    "Performance monitoring",
                  ],
                  color: "from-[#00F5FF] to-[#8B5CF6]",
                },
                {
                  icon: CheckCircle,
                  title: "Analytics & Reporting",
                  description:
                    "Detailed analytics and reporting to track performance and optimize your email marketing ROI",
                  features: [
                    "Performance tracking",
                    "ROI analysis",
                    "Engagement metrics",
                    "Conversion tracking",
                    "Strategic recommendations",
                  ],
                  color: "from-[#8B5CF6] to-[#F472B6]",
                },
              ].map((service, index) => (
                <ScrollAnimation key={index}>
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
                            <CheckCircle className="h-4 w-4 text-[#00F5FF] mr-2 flex-shrink-0" />
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

      {/* Results Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Email Marketing</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real performance metrics from our email marketing campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "300%", label: "Revenue Increase", description: "From email marketing" },
                { metric: "35%", label: "Open Rate", description: "Above industry average" },
                { metric: "40%", label: "Revenue Attribution", description: "From email campaigns" },
                { metric: "2900%", label: "List Growth", description: "In 8 months" },
              ].map((result, index) => (
                <ScrollAnimation key={index}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
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

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* FAQ Section */}
      <FAQ title="Email Marketing FAQ" subtitle="Common questions about our email marketing services" faqs={faqs} />

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF]/10 via-[#8B5CF6]/10 to-[#F472B6]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    Transform
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Your Email Marketing?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create email marketing campaigns that build relationships, drive sales, and maximize customer
                  lifetime value
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Get Email Strategy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-white rounded-full"
                  >
                    View Email Examples
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
