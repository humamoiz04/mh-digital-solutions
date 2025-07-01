import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Mail,
  Users,
  BarChart3,
  CheckCircle,
  Target,
  TrendingUp,
  Zap,
  Heart,
  ShoppingCart,
  MessageSquare,
  Settings,
  Eye,
  DollarSign,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Email Marketing Services | Nurture Leads & Drive Sales - MH Digital Solutions",
  description:
    "Build strong customer relationships and boost sales with MH Digital Solutions' expert email marketing. We design targeted campaigns, automation flows, and newsletters for businesses of all sizes, ensuring high engagement and ROI.",
  keywords:
    "email marketing services, email campaigns, email automation, newsletter marketing, lead nurturing, email ROI, email list building, email design",
  openGraph: {
    title: "Email Marketing Services | Nurture Leads & Drive Sales - MH Digital Solutions",
    description:
      "Build strong customer relationships and boost sales with expert email marketing services. Targeted campaigns, automation flows, and newsletters that drive results.",
    images: [
      {
        url: "/images/email-marketing-services-og.webp",
        width: 1200,
        height: 630,
        alt: "Email Marketing Services - MH Digital Solutions",
      },
    ],
  },
}

export default function EmailMarketingServicesPage() {
  const faqs = [
    {
      question: "What is the ROI of email marketing?",
      answer:
        "Email marketing delivers an average ROI of $42 for every $1 spent, making it one of the highest-performing digital marketing channels. Our clients typically see ROI ranging from 3000% to 4200%, with some achieving even higher returns through strategic segmentation and automation.",
    },
    {
      question: "How do you build an email list ethically?",
      answer:
        "We build email lists through ethical, permission-based methods including lead magnets, opt-in forms, content upgrades, webinar registrations, and social media campaigns. We never purchase lists or use deceptive practices, ensuring high engagement rates and compliance with GDPR and CAN-SPAM regulations.",
    },
    {
      question: "What is email automation?",
      answer:
        "Email automation involves setting up triggered email sequences that send automatically based on subscriber actions or behaviors. This includes welcome series, abandoned cart recovery, birthday emails, re-engagement campaigns, and nurture sequences that guide prospects through your sales funnel without manual intervention.",
    },
    {
      question: "How often should I send emails to my list?",
      answer:
        "Email frequency depends on your audience and content type. We typically recommend weekly newsletters for most businesses, with additional promotional emails as needed. We test different frequencies to find the optimal balance that maximizes engagement while minimizing unsubscribes for your specific audience.",
    },
    {
      question: "Can email marketing integrate with my CRM?",
      answer:
        "Yes, we integrate email marketing platforms with popular CRMs like HubSpot, Salesforce, Pipedrive, and others. This enables advanced segmentation, lead scoring, sales team notifications, and comprehensive customer journey tracking across all touchpoints.",
    },
    {
      question: "What makes an email campaign successful?",
      answer:
        "Successful email campaigns combine compelling subject lines, personalized content, clear calls-to-action, mobile optimization, proper timing, and audience segmentation. We also focus on deliverability, A/B testing, and continuous optimization based on performance data.",
    },
    {
      question: "Do you provide email design services?",
      answer:
        "Yes, we provide complete email design services including custom templates, responsive designs, brand-consistent layouts, and interactive elements. Our designs are optimized for all email clients and devices, ensuring your messages look professional and drive engagement.",
    },
  ]

  const testimonials = [
    {
      text: "Our email marketing revenue increased by 400% after working with MH Digital. Their automation sequences and segmentation strategies transformed our customer relationships.",
      name: "Sarah Johnson",
      position: "E-commerce Director",
      company: "Fashion Forward",
      rating: 5,
    },
    {
      text: "They helped us build our email list from 1,000 to 25,000 subscribers in 10 months. More importantly, our email-driven sales now account for 45% of our total revenue.",
      name: "Michael Chen",
      position: "Marketing Manager",
      company: "TechStart Solutions",
      rating: 5,
    },
    {
      text: "The email automation workflows they created save us 25 hours per week while generating consistent leads. Our open rates are now 40% above industry average.",
      name: "Lisa Rodriguez",
      position: "Business Owner",
      company: "Wellness Coaching",
      rating: 5,
    },
  ]

  const processSteps = [
    {
      icon: Target,
      title: "Strategy & Audience Segmentation",
      description: "We define clear goals and identify customer segments for targeted messaging",
      details: [
        "Goal setting and KPI definition",
        "Customer persona development",
        "Behavioral segmentation",
        "Journey mapping",
        "Competitive analysis",
      ],
    },
    {
      icon: Users,
      title: "List Building & Management",
      description: "Ethical practices for growing a quality, engaged subscriber list",
      details: [
        "Lead magnet creation",
        "Opt-in form optimization",
        "Landing page development",
        "List hygiene and maintenance",
        "Compliance management",
      ],
    },
    {
      icon: MessageSquare,
      title: "Content & Design",
      description: "Crafting compelling, branded email campaigns that drive action",
      details: [
        "Custom email templates",
        "Copywriting and messaging",
        "Visual design and branding",
        "Mobile optimization",
        "Accessibility compliance",
      ],
    },
    {
      icon: Zap,
      title: "Automation & Journeys",
      description: "Setting up sophisticated email flows that nurture and convert",
      details: [
        "Welcome series setup",
        "Abandoned cart recovery",
        "Lead nurturing sequences",
        "Re-engagement campaigns",
        "Behavioral triggers",
      ],
    },
    {
      icon: BarChart3,
      title: "Testing & Optimization",
      description: "Continuous improvement through data-driven testing",
      details: [
        "A/B testing subject lines",
        "CTA optimization",
        "Send time testing",
        "Content variations",
        "Performance analysis",
      ],
    },
    {
      icon: TrendingUp,
      title: "Reporting & Analytics",
      description: "Comprehensive tracking and ROI demonstration",
      details: [
        "Performance dashboards",
        "ROI calculations",
        "Engagement metrics",
        "Conversion tracking",
        "Strategic recommendations",
      ],
    },
  ]

  const solutions = [
    {
      icon: Mail,
      title: "Newsletter Campaign Management",
      description: "Regular, engaging updates that keep your audience connected",
      features: [
        "Content planning and creation",
        "Design and template development",
        "Scheduling and automation",
        "Performance tracking",
        "Subscriber engagement analysis",
      ],
    },
    {
      icon: Settings,
      title: "Automated Email Flows",
      description: "Welcome series, abandoned cart, and re-engagement sequences",
      features: [
        "Welcome email series",
        "Abandoned cart recovery",
        "Post-purchase follow-up",
        "Win-back campaigns",
        "Birthday and anniversary emails",
      ],
    },
    {
      icon: Heart,
      title: "Lead Nurturing Campaigns",
      description: "Guiding prospects through the sales funnel with targeted content",
      features: [
        "Educational email series",
        "Product demonstration emails",
        "Case study campaigns",
        "Testimonial showcases",
        "Sales-ready lead identification",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Email Marketing",
      description: "Product launches, promotions, and personalized recommendations",
      features: [
        "Product launch campaigns",
        "Promotional email design",
        "Personalized recommendations",
        "Inventory alerts",
        "Customer loyalty programs",
      ],
    },
    {
      icon: TrendingUp,
      title: "Email List Growth Strategies",
      description: "Proven techniques for acquiring high-quality subscribers",
      features: [
        "Lead magnet development",
        "Opt-in form optimization",
        "Content upgrade creation",
        "Social media integration",
        "Referral programs",
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-1">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] text-white border-0">
                  📧 Strategic Email Marketing
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-white">Unlock High ROI with</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] bg-clip-text text-transparent">
                    Strategic Email Marketing
                  </span>
                  <br />
                  <span className="text-white">Services</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Build strong customer relationships and boost sales with expert email marketing. We design targeted
                  campaigns, automation flows, and newsletters that deliver measurable ROI for businesses of all sizes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                    aria-label="Schedule a free email marketing strategy session"
                  >
                    Get Free Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white rounded-full"
                  >
                    View Email Examples
                  </Button>
                </div>
              </div>
              <ScrollAnimation>
                <div className="relative">
                  <Image
                    src="/images/email-marketing-dashboard.webp"
                    alt="Email Marketing Services Dashboard"
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

      {/* Why Email Marketing Section */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-2">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-white">Why Email Marketing Remains Your</span>{" "}
                <span className="bg-gradient-to-r from-[#f472b6] to-[#00f5ff] bg-clip-text text-transparent">
                  Most Powerful Channel
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Despite the rise of social media and other channels, email marketing continues to deliver the highest
                ROI and most direct customer communication
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: "$42 ROI for Every $1 Spent",
                  description:
                    "Email marketing delivers the highest return on investment of any digital marketing channel",
                  stat: "4,200% Average ROI",
                },
                {
                  icon: Users,
                  title: "Direct Customer Ownership",
                  description:
                    "Unlike social media, you own your email list and can reach customers directly without algorithm changes",
                  stat: "100% Reach Potential",
                },
                {
                  icon: Target,
                  title: "Precise Targeting & Personalization",
                  description:
                    "Segment audiences and deliver personalized messages based on behavior, preferences, and purchase history",
                  stat: "760% Revenue Increase",
                },
              ].map((benefit, index) => (
                <ScrollAnimation key={index}>
                  <Card className="glass-card hover-lift">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] rounded-xl flex items-center justify-center mb-6 mx-auto">
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-gray-300 mb-4">{benefit.description}</p>
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] bg-clip-text text-transparent">
                        {benefit.stat}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Email Marketing Process */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-3">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-white">Our Comprehensive</span>{" "}
                <span className="bg-gradient-to-r from-[#00f5ff] to-[#ff7600] bg-clip-text text-transparent">
                  Email Marketing Process
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven 6-step methodology that transforms your email marketing from basic broadcasts to sophisticated,
                revenue-generating campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={index}>
                  <Card className={`service-card-${(index % 6) + 1} hover-lift`}>
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] rounded-lg flex items-center justify-center mr-4">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300 mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-[#8b5cf6] mr-2 flex-shrink-0" />
                            <span className="text-gray-400">{detail}</span>
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

      {/* Key Email Marketing Solutions */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-4">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-white">Key</span>{" "}
                <span className="bg-gradient-to-r from-[#ff7600] to-[#8b5cf6] bg-clip-text text-transparent">
                  Email Marketing Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive email marketing services designed to nurture leads, engage customers, and drive consistent
                revenue growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <ScrollAnimation key={index}>
                  <Card className={`service-card-${(index % 6) + 1} hover-lift`}>
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] rounded-xl flex items-center justify-center mb-6">
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                      <p className="text-gray-300 mb-6">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-[#8b5cf6] mr-2 flex-shrink-0" />
                            <span className="text-gray-400">{feature}</span>
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

      {/* Email Marketing for Every Business */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#22c55e] to-[#a855f7] bg-clip-text text-transparent">
                  Email Marketing
                </span>{" "}
                <span className="text-white">for Every Business</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored email marketing strategies that scale with your business, from local startups to global
                enterprises
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollAnimation>
                <Card className="glass-card hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Heart className="h-8 w-8 text-[#22c55e] mr-4" />
                      <h3 className="text-2xl font-bold text-white">For Small Businesses</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-[#22c55e] mb-4">
                      Building Loyalty & Repeat Purchases on a Budget
                    </h4>
                    <p className="text-gray-300 mb-6">
                      Cost-effective email marketing solutions that help small businesses build customer relationships,
                      increase repeat purchases, and compete with larger competitors.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Affordable monthly packages starting at $297",
                        "Simple automation for welcome series and follow-ups",
                        "Local customer engagement strategies",
                        "Easy-to-use templates and designs",
                        "Basic analytics and reporting",
                        "Customer loyalty and retention campaigns",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#22c55e] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation>
                <Card className="glass-card hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <TrendingUp className="h-8 w-8 text-[#a855f7] mr-4" />
                      <h3 className="text-2xl font-bold text-white">For Enterprises</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-[#a855f7] mb-4">
                      Complex Segmentation, Integrations & Large-Scale Automation
                    </h4>
                    <p className="text-gray-300 mb-6">
                      Sophisticated email marketing solutions for enterprises requiring advanced segmentation, CRM
                      integrations, and complex automation workflows across multiple touchpoints.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Advanced segmentation and personalization",
                        "CRM and marketing automation integrations",
                        "Multi-channel campaign orchestration",
                        "A/B testing and optimization at scale",
                        "Advanced analytics and attribution modeling",
                        "Dedicated account management and support",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#a855f7] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Choose MH Digital */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-1">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-white">Why Choose MH Digital Solutions for Your</span>{" "}
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] bg-clip-text text-transparent">
                  Email Marketing?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our unique combination of strategy, creativity, and technology delivers email marketing results that
                drive real business growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Personalized Strategies",
                  description:
                    "Custom email marketing strategies tailored to your industry, audience, and business goals",
                },
                {
                  icon: Eye,
                  title: "Design Expertise",
                  description:
                    "Beautiful, responsive email designs that reflect your brand and drive engagement across all devices",
                },
                {
                  icon: Zap,
                  title: "Automation Mastery",
                  description:
                    "Sophisticated automation workflows that nurture leads and customers throughout their journey",
                },
                {
                  icon: BarChart3,
                  title: "Clear ROI Reporting",
                  description: "Transparent reporting that shows exactly how email marketing impacts your bottom line",
                },
              ].map((reason, index) => (
                <ScrollAnimation key={index}>
                  <Card className="glass-card hover-lift text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] rounded-xl flex items-center justify-center mb-6 mx-auto">
                        <reason.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                      <p className="text-gray-300">{reason.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Success Stories */}
      <ScrollAnimation>
        <section className="py-20 section-gradient-2">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#f472b6] to-[#00f5ff] bg-clip-text text-transparent">
                  Email Marketing
                </span>{" "}
                <span className="text-white">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-300">
                Real results from our email marketing campaigns that generated significant sales and engagement
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "400%", label: "Revenue Increase", description: "From email marketing campaigns" },
                { metric: "2,400%", label: "List Growth", description: "In 10 months" },
                { metric: "45%", label: "Revenue Attribution", description: "From email campaigns" },
                { metric: "40%", label: "Above Average", description: "Open rates achieved" },
              ].map((result, index) => (
                <ScrollAnimation key={index}>
                  <Card className="glass-card text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] bg-clip-text text-transparent mb-2">
                        {result.metric}
                      </div>
                      <div className="text-lg font-semibold text-white mb-2">{result.label}</div>
                      <div className="text-sm text-gray-400">{result.description}</div>
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
        <section className="py-20 section-gradient-4">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 via-[#f472b6]/10 to-[#00f5ff]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] bg-clip-text text-transparent">
                    Connect
                  </span>
                  <br />
                  <span className="text-white">with Your Audience Directly?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create email marketing campaigns that build lasting relationships, drive consistent sales, and
                  deliver measurable ROI for your business
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                    aria-label="Get a free email marketing strategy session"
                  >
                    Get Free Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white rounded-full"
                  >
                    Request Custom Proposal
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
