import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import type { Metadata } from "next"
import { Star } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Lead Generation Services for Small Businesses | M&H Digital Solutions",
  description:
    "Specialized lead generation services for small service-based businesses. Generate qualified leads through targeted digital marketing strategies. Expert lead generation company serving businesses nationwide.",
  keywords:
    "lead generation services, small business lead generation, service-based business leads, qualified leads, lead generation company, digital marketing leads, local lead generation, B2B lead generation",
  alternates: {
    canonical: "https://www.mhdigitalsolutions.com/services/lead-generation",
  },
}

const leadGenSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lead Generation Services",
  description:
    "Specialized lead generation services for small service-based businesses to generate qualified leads through targeted digital marketing strategies.",
  provider: {
    "@type": "Organization",
    name: "M&H Digital Solutions",
  },
  serviceType: "Lead Generation",
  areaServed: "United States",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lead Generation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local Lead Generation",
          description: "Generate leads for local service businesses",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing Leads",
          description: "Lead generation through digital marketing channels",
        },
      },
    ],
  },
}

export default function LeadGenerationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(leadGenSchema) }} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">400+ Leads Generated Monthly</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                      Generate Qualified Leads
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">That Actually Convert Into Paying Customers</span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    We help small service-based businesses like yours get a consistent flow of high-quality leads
                    through targeted digital marketing strategies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://calendly.com/mhdigitalsolutionsus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="calendly-button pulse-animation"
                      aria-label="Get lead generation consultation"
                    >
                      Get Lead Generation Strategy
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-[#FF7600] text-[#FF7600] hover:bg-[#FF7600] hover:text-white rounded-full"
                    >
                      View Lead Gen Case Studies
                    </Button>
                  </div>
                </div>
                <ScrollAnimation animation="fadeInRight" delay={200}>
                  <div className="relative">
                    <Image
                      src="/images/digital-marketing-team.png"
                      alt="Lead generation services for small businesses"
                      width={600}
                      height={500}
                      className="rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FF7600]/20 to-transparent rounded-2xl"></div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Is This You? Section */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Is This</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    You?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Are you experiencing any of these common lead generation problems?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "No qualified leads coming in",
                  "Wasting time on unqualified prospects",
                  "Inconsistent lead flow",
                  "High cost per lead",
                ].map((painPoint, index) => (
                  <div key={index} className="glass p-6 rounded-lg">
                    <p className="text-gray-900 dark:text-gray-300">{painPoint}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Our Solution Section */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Our</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Solution
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our proven 5-step process to generate qualified leads for your business.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {["Lead Audit", "Strategy", "Campaign Creation", "Optimization", "Scaling"].map((step, index) => (
                  <div key={index} className="glass p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{index + 1}.</div>
                    <p className="text-gray-600 dark:text-gray-400">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Service-Specific Social Proof */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Real Results for</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Service Businesses
                  </span>
                </h2>
              </div>

              <div className="glass p-8 rounded-2xl">
                <p className="text-gray-900 dark:text-white italic mb-4">
                  "M&H Digital Solutions helped us increase our qualified leads by 300% and lowered our cost per lead by
                  65%. We started seeing results in just 45 days!"
                </p>
                <p className="text-[#FF7600] font-medium">- Sarah Johnson, Local HVAC Pro</p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Pricing Packages */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Lead Generation</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Choose the package that best fits your needs and budget.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Starter Lead Gen",
                    price: "$1,497/mo",
                    features: ["Basic lead generation setup", "Targeted advertising campaigns", "Monthly reporting"],
                  },
                  {
                    title: "Growth Lead Gen",
                    price: "$2,997/mo",
                    features: [
                      "Everything in Starter, plus:",
                      "Advanced lead qualification",
                      "CRM integration",
                      "Dedicated account manager",
                    ],
                    isPopular: true,
                  },
                  {
                    title: "Enterprise Lead Gen",
                    price: "$4,997/mo",
                    features: [
                      "Everything in Growth, plus:",
                      "Custom lead generation strategies",
                      "Priority support",
                      "Guaranteed lead volume",
                    ],
                  },
                ].map((packageData, index) => (
                  <Card key={index} className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{packageData.title}</h3>
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
                        {packageData.price}
                      </div>
                      {packageData.isPopular && (
                        <Badge className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] text-white border-0 mb-4">
                          Most Popular
                        </Badge>
                      )}
                      <ul className="space-y-2">
                        {packageData.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-600 dark:text-gray-400">
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] text-white">
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Lead Generation Services */}
        {/* <ScrollAnimation>
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Comprehensive</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Lead Generation Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Specialized lead generation services designed specifically for small service-based businesses to
                  attract and convert qualified prospects
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Local Lead Generation",
                    description: "Generate high-quality leads from your local market through targeted campaigns",
                    features: [
                      "Google My Business optimization",
                      "Local SEO strategies",
                      "Geo-targeted advertising",
                      "Local directory listings",
                    ],
                    color: "from-[#FF7600] to-[#F472B6]",
                    specialty: "Perfect for local service providers",
                  },
                  {
                    icon: Users,
                    title: "Digital Marketing Leads",
                    description: "Multi-channel digital marketing approach to generate qualified leads",
                    features: [
                      "Search engine marketing",
                      "Social media lead campaigns",
                      "Content marketing funnels",
                      "Email marketing sequences",
                    ],
                    color: "from-[#F472B6] to-[#8B5CF6]",
                    specialty: "Ideal for professional services",
                  },
                  {
                    icon: Phone,
                    title: "Call-Ready Leads",
                    description: "Generate leads that are ready to speak with your sales team immediately",
                    features: [
                      "Phone call tracking",
                      "Lead qualification scoring",
                      "Appointment setting",
                      "CRM integration",
                    ],
                    color: "from-[#8B5CF6] to-[#00F5FF]",
                    specialty: "Great for consultants & contractors",
                  },
                  {
                    icon: Mail,
                    title: "Email Lead Nurturing",
                    description: "Automated email sequences that nurture prospects into customers",
                    features: [
                      "Lead magnet creation",
                      "Email automation setup",
                      "Drip campaign management",
                      "Conversion tracking",
                    ],
                    color: "from-[#00F5FF] to-[#FF7600]",
                    specialty: "Perfect for B2B services",
                  },
                  {
                    icon: MessageSquare,
                    title: "Social Media Leads",
                    description: "Generate leads through targeted social media marketing campaigns",
                    features: [
                      "Facebook lead ads",
                      "LinkedIn lead generation",
                      "Instagram lead campaigns",
                      "Social media funnels",
                    ],
                    color: "from-[#FF7600] to-[#8B5CF6]",
                    specialty: "Excellent for creative services",
                  },
                  {
                    icon: TrendingUp,
                    title: "Conversion Optimization",
                    description: "Optimize your lead generation process for maximum conversion rates",
                    features: [
                      "Landing page optimization",
                      "A/B testing campaigns",
                      "Conversion rate analysis",
                      "Lead quality improvement",
                    ],
                    color: "from-[#8B5CF6] to-[#F472B6]",
                    specialty: "Boosts all service types",
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
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mb-4">
                          <p className="text-blue-800 dark:text-blue-200 text-sm font-medium">✨ {service.specialty}</p>
                        </div>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-[#FF7600] mr-2 flex-shrink-0" />
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
        </ScrollAnimation> */}

        {/* Small Business Focus */}
        {/* <ScrollAnimation>
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollAnimation animation="fadeInLeft">
                  <div className="relative">
                    <Image
                      src="/images/business-operations.jpeg"
                      alt="Small service-based business lead generation"
                      width={600}
                      height={500}
                      className="rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/20 to-transparent rounded-2xl"></div>
                  </div>
                </ScrollAnimation>

                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    <span className="text-gray-900 dark:text-white">Why Small</span>{" "}
                    <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                      Service-Based Businesses
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">Choose Us</span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    We understand the unique challenges of small service-based businesses and specialize in generating
                    qualified leads that convert into paying customers.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Local Market Expertise",
                        description: "Deep understanding of local market dynamics and customer behavior patterns",
                        businesses: "Perfect for: Contractors, HVAC, Plumbing, Landscaping",
                      },
                      {
                        title: "Service-Specific Strategies",
                        description: "Tailored lead generation strategies designed for service-based business models",
                        businesses: "Perfect for: Consultants, Lawyers, Accountants, Agencies",
                      },
                      {
                        title: "Budget-Friendly Solutions",
                        description: "Cost-effective lead generation that delivers ROI for small business budgets",
                        businesses: "Perfect for: Startups, Solo Practitioners, Small Teams",
                      },
                      {
                        title: "Quick Implementation",
                        description: "Fast setup and deployment to start generating leads within 30 days",
                        businesses: "Perfect for: New Businesses, Seasonal Services, Growth-Focused Companies",
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="glass p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">{benefit.description}</p>
                        <p className="text-sm text-[#FF7600] font-medium">{benefit.businesses}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation> */}

        {/* Lead Generation Form */}
        {/* <ScrollAnimation>
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    <span className="text-gray-900 dark:text-white">Get Your Free</span>{" "}
                    <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                      Lead Generation Strategy
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    Ready to generate more qualified leads for your service-based business? Get a custom lead generation
                    strategy designed specifically for your industry and local market.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Free lead generation audit",
                      "Custom strategy for your service type",
                      "Local market analysis",
                      "ROI projections and timeline",
                      "No obligation consultation",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Start Generating Qualified Leads
                  </h3>
                  <HubSpotForm />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation> */}

        {/* Results Section */}
        {/* <ScrollAnimation>
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Lead Generation</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Results
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Real results from our small business lead generation campaigns
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { metric: "400%", label: "Lead Increase", description: "Average lead generation improvement" },
                  { metric: "65%", label: "Conversion Rate", description: "Qualified leads to customers" },
                  { metric: "30 Days", label: "Time to Results", description: "Average time to see leads" },
                  { metric: "350%", label: "ROI", description: "Return on lead generation investment" },
                ].map((result, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="glass border-0 text-center hover-lift">
                      <CardContent className="p-8">
                        <div className="text-4xl font-bold bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
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
        </ScrollAnimation> */}

        {/* FAQ Section */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Frequently Asked</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Questions
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Everything you need to know about our lead generation services.
                </p>
              </div>

              <Accordion type="single" collapsible>
                {[
                  {
                    question: "What types of businesses do you work with?",
                    answer:
                      "We specialize in working with small service-based businesses, such as contractors, consultants, and professional service providers.",
                  },
                  {
                    question: "How long does it take to see results?",
                    answer:
                      "Most of our clients start seeing results within 30-45 days of implementing our lead generation strategies.",
                  },
                  {
                    question: "What is your lead qualification process?",
                    answer:
                      "We use a multi-step lead qualification process to ensure that we are only sending you the most qualified prospects.",
                  },
                  {
                    question: "Do you offer a guarantee?",
                    answer:
                      "Yes, we offer a satisfaction guarantee. If you are not happy with our services, we will work with you to make it right.",
                  },
                  {
                    question: "How do I get started?",
                    answer:
                      "Simply schedule a free consultation with us, and we will discuss your lead generation needs and create a custom strategy for your business.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7600]/10 via-[#8B5CF6]/10 to-[#F472B6]/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">4.9 Stars (Based on 50+ Reviews)</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                    <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                      Generate
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">More Qualified Leads?</span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Let's create a custom lead generation strategy that brings qualified prospects to your small
                    service-based business
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://calendly.com/mhdigitalsolutionsus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="calendly-button"
                      aria-label="Get lead generation strategy consultation"
                    >
                      Get Lead Generation Strategy
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-[#FF7600] text-[#FF7600] hover:bg-[#FF7600] hover:text-white rounded-full"
                    >
                      View Lead Gen Case Studies
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </>
  )
}
