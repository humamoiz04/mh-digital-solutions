import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  DollarSign,
  Globe,
  Zap,
  Award,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle,
  Search,
  Code,
  Target,
  Brain,
  ShoppingCart,
  BarChart3,
  Mail,
  Share2,
  PenTool,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Marketing Services | MH Digital Solutions",
  description:
    "Comprehensive digital marketing services including SEO, PPC, social media marketing, web development, AI automation, and business consulting. Proven results for 500+ businesses.",
  keywords:
    "digital marketing services, SEO services, PPC management, social media marketing, web development, AI automation, business consulting",
}

const allServices = [
  {
    title: "SEO Services",
    description: "Dominate search results with our proven SEO strategies",
    image: "/images/analytics-growth.webp",
    href: "/services/seo",
    icon: Search,
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
    price: "Starting at $1,500/mo",
    color: "from-blue-600 to-purple-600",
    offer: "Free SEO Audit ($500 Value)",
  },
  {
    title: "Web Development",
    description: "Custom websites that convert visitors into customers",
    image: "/images/digital-workspace.jpeg",
    href: "/services/web-development",
    icon: Code,
    features: ["Custom Design", "E-commerce", "Mobile Responsive", "SEO Optimized"],
    price: "Starting at $5,000",
    color: "from-purple-600 to-pink-600",
    offer: "70% Off Launch Pricing",
  },
  {
    title: "Digital Marketing",
    description: "Complete digital marketing campaigns that drive growth",
    image: "/images/digital-marketing.webp",
    href: "/services/digital-marketing",
    icon: Target,
    features: ["PPC Advertising", "Social Media", "Content Marketing", "Email Marketing"],
    price: "Starting at $2,000/mo",
    color: "from-pink-600 to-orange-600",
    offer: "Free Strategy Session",
  },
  {
    title: "PPC Advertising",
    description: "Maximize ROI with targeted pay-per-click campaigns",
    image: "/images/analytics-dashboard-new.webp",
    href: "/services/ppc-advertising",
    icon: Target,
    features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "A/B Testing"],
    price: "Starting at $2,000/mo",
    color: "from-orange-600 to-red-600",
    offer: "Free PPC Audit",
  },
  {
    title: "Social Media Marketing",
    description: "Build your brand presence across all social platforms",
    image: "/images/team-collaboration.webp",
    href: "/services/social-media-marketing",
    icon: Share2,
    features: ["Content Creation", "Community Management", "Paid Social", "Analytics"],
    price: "Starting at $1,200/mo",
    color: "from-red-600 to-purple-600",
    offer: "Free Social Media Audit",
  },
  {
    title: "Content Marketing",
    description: "Create valuable content that attracts and converts",
    image: "/images/content-marketing.webp",
    href: "/services/content-marketing",
    icon: PenTool,
    features: ["Blog Writing", "Video Content", "Infographics", "Content Strategy"],
    price: "Starting at $1,800/mo",
    color: "from-purple-600 to-blue-600",
    offer: "Free Content Strategy",
  },
  {
    title: "Email Marketing",
    description: "Build lasting relationships through strategic email campaigns",
    image: "/images/analytics-dashboard.webp",
    href: "/services/email-marketing",
    icon: Mail,
    features: ["Email Automation", "List Building", "Campaign Design", "Analytics"],
    price: "Starting at $800/mo",
    color: "from-blue-600 to-cyan-600",
    offer: "Free Email Audit",
  },
  {
    title: "AI & Automation",
    description: "Streamline operations with intelligent automation",
    image: "/images/ai-automation.webp",
    href: "/services/ai-automation",
    icon: Brain,
    features: ["Process Automation", "Chatbots", "Data Analysis", "Workflow Optimization"],
    price: "Starting at $3,000/mo",
    color: "from-cyan-600 to-green-600",
    offer: "Free AI Assessment",
  },
  {
    title: "Business Analytics",
    description: "Transform data into actionable business insights",
    image: "/images/business-analytics-3d.png",
    href: "/services/business-analytics",
    icon: BarChart3,
    features: ["Data Visualization", "Custom Dashboards", "Reporting", "Insights"],
    price: "Starting at $2,500/mo",
    color: "from-green-600 to-emerald-600",
    offer: "Free Analytics Consultation",
  },
  {
    title: "Business Consulting",
    description: "Strategic guidance to accelerate your growth",
    image: "/images/business-planning.webp",
    href: "/services/business-consulting",
    icon: Briefcase,
    features: ["Growth Strategy", "Market Analysis", "Process Improvement", "Performance Metrics"],
    price: "Starting at $2,500/mo",
    color: "from-emerald-600 to-teal-600",
    offer: "Free Strategy Session",
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online store development and optimization",
    image: "/images/ecommerce-ecosystem.jpeg",
    href: "/services/ecommerce",
    icon: ShoppingCart,
    features: ["Store Development", "Payment Integration", "Inventory Management", "Optimization"],
    price: "Starting at $8,000",
    color: "from-teal-600 to-blue-600",
    offer: "Free E-commerce Audit",
  },
  {
    title: "Lead Generation",
    description: "Generate qualified leads that convert into customers",
    image: "/images/marketing-funnel.webp",
    href: "/services/lead-generation",
    icon: Users,
    features: ["Lead Qualification", "Multi-channel Campaigns", "CRM Integration", "Nurturing"],
    price: "Starting at $1,997/mo",
    color: "from-indigo-600 to-purple-600",
    offer: "Free Lead Generation Strategy",
  },
]

const stats = [
  { icon: Users, label: "Clients Served", value: "500+" },
  { icon: DollarSign, label: "Revenue Generated", value: "$50M+" },
  { icon: Globe, label: "Markets Reached", value: "25+" },
  { icon: Award, label: "Industry Awards", value: "15+" },
]

const differentiators = [
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "See measurable improvements within the first 30 days",
  },
  {
    icon: Shield,
    title: "Guaranteed ROI",
    description: "We guarantee positive ROI or your money back",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support from our expert team",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your business, competitors, and market opportunities",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Custom strategy development based on your specific goals",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute campaigns with precision and attention to detail",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous monitoring and optimization for maximum results",
  },
  {
    step: "05",
    title: "Reporting",
    description: "Transparent reporting with actionable insights and recommendations",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center bg-transparent">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            Full-Service Digital Agency
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Digital Marketing Services That Drive Results
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            From SEO and PPC to web development and AI automation, we provide comprehensive digital solutions that help
            businesses grow and thrive in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="glass-card p-6 rounded-2xl hover-lift bg-[rgba(255,242,242,1)] bg-[rgba(254,237,237,1)] bg-cyan-50 border-solid text-green-50 text-green-50">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-purple-600" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Complete Service Portfolio</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <Card key={index} className="glass-card hover-lift group relative overflow-hidden">
                <div className="absolute top-4 right-4 z-10">
                  <Badge className={`bg-gradient-to-r ${service.color} text-white border-0`}>{service.offer}</Badge>
                </div>
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`}></div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}
                    >
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-purple-600">{service.price}</span>
                  </div>
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white border-0`}
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose MH Digital Solutions?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              What sets us apart from other digital marketing agencies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center">
                <div className="glass-card p-8 rounded-2xl hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Proven Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              How we deliver exceptional results for our clients
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-y-1/2 hidden md:block"></div>

            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="glass-card p-6 rounded-2xl hover-lift">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-transparent text-cyan-50 text-cyan-50 text-cyan-50 text-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join 500+ businesses that have accelerated their growth with our digital marketing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
