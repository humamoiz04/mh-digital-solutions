import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star, Award, Shield, Clock } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import FAQ from "@/components/faq"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Transparent Pricing for Digital Marketing Services | MH Digital Solutions",
  description:
    "Clear, transparent pricing for all our digital marketing services. No hidden fees, no surprises. Choose from our SEO, PPC, web development, and marketing packages.",
  keywords:
    "digital marketing pricing, SEO packages, PPC management cost, web development pricing, transparent pricing",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/pricing",
  },
}

export default function PricingPage() {
  const pricingFaqs = [
    {
      question: "Are there any setup fees or hidden costs?",
      answer:
        "No hidden fees! Our pricing is transparent and includes everything mentioned in your package. The only additional costs would be third-party services like domain registration, hosting, or advertising spend (for PPC campaigns), which we'll discuss upfront.",
    },
    {
      question: "Do you require long-term contracts?",
      answer:
        "We offer both month-to-month and contract options. While we believe in the value of long-term partnerships for best results, we don't lock you into lengthy contracts. You can cancel most services with 30 days notice.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and PayPal. For ongoing services, we typically set up automatic monthly billing for your convenience. We can also accommodate quarterly or annual payment schedules with discounts.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes! We offer a 30-day money-back guarantee for most of our services. If you're not satisfied with our work within the first 30 days, we'll provide a full refund. Specific terms vary by service type.",
    },
    {
      question: "Can I upgrade or downgrade my package?",
      answer:
        "You can upgrade or downgrade your service package at any time. We'll prorate the charges and adjust your billing accordingly. We want to ensure you always have the right level of service for your needs.",
    },
    {
      question: "What's included in the custom solutions?",
      answer:
        "Custom solutions are tailored to your specific needs and may include multiple services, advanced features, dedicated account management, and specialized strategies. Pricing varies based on scope and requirements.",
    },
  ]

  const packages = [
    {
      category: "SEO Services",
      plans: [
        {
          name: "Local SEO Starter",
          price: "$997",
          period: "/month",
          description: "Perfect for small local businesses",
          features: [
            "Complete SEO audit & strategy",
            "Google My Business optimization",
            "Local keyword targeting (25 keywords)",
            "On-page optimization (10 pages)",
            "Local citation building",
            "Monthly progress reports",
            "Email support",
          ],
          popular: false,
          bestFor: "Small local businesses, service providers",
          cta: "Start Growing Locally",
        },
        {
          name: "Business Growth SEO",
          price: "$1,997",
          period: "/month",
          description: "Most popular for growing businesses",
          features: [
            "Everything in Starter, plus:",
            "National keyword targeting (50 keywords)",
            "Content creation (4 blog posts/month)",
            "Technical SEO optimization",
            "Link building campaign",
            "Competitor analysis",
            "Bi-weekly strategy calls",
            "Priority support",
          ],
          popular: true,
          bestFor: "Growing businesses, e-commerce stores",
          cta: "Scale Your Business",
        },
        {
          name: "Enterprise SEO",
          price: "$4,997",
          period: "/month",
          description: "For businesses serious about domination",
          features: [
            "Everything in Growth, plus:",
            "Unlimited keyword targeting",
            "Advanced technical SEO",
            "Content creation (8 blog posts/month)",
            "Aggressive link building",
            "Conversion rate optimization",
            "Weekly strategy calls",
            "Dedicated SEO manager",
            "Custom reporting dashboard",
          ],
          popular: false,
          bestFor: "Large businesses, enterprises",
          cta: "Dominate Your Market",
        },
      ],
    },
    {
      category: "PPC Advertising",
      plans: [
        {
          name: "PPC Starter",
          price: "$997",
          period: "/month",
          description: "Perfect for testing PPC waters",
          features: [
            "Google Ads management",
            "Keyword research & setup",
            "Ad copy creation (5 variations)",
            "Landing page optimization",
            "Monthly reporting",
            "Email support",
          ],
          popular: false,
          bestFor: "Small businesses, new to PPC",
          cta: "Start PPC Campaigns",
        },
        {
          name: "PPC Growth",
          price: "$1,997",
          period: "/month",
          description: "Most popular for serious growth",
          features: [
            "Everything in Starter, plus:",
            "Multi-platform management",
            "Advanced audience targeting",
            "A/B testing & optimization",
            "Conversion tracking setup",
            "Bi-weekly optimization calls",
            "Priority support",
          ],
          popular: true,
          bestFor: "Growing businesses, e-commerce",
          cta: "Scale Your Ads",
        },
        {
          name: "PPC Enterprise",
          price: "$3,997",
          period: "/month",
          description: "Maximum advertising performance",
          features: [
            "Everything in Growth, plus:",
            "Advanced automation setup",
            "Custom audience development",
            "Video ad creation",
            "Shopping campaigns",
            "Weekly strategy calls",
            "Dedicated PPC manager",
          ],
          popular: false,
          bestFor: "Large businesses, high ad spend",
          cta: "Maximize ROI",
        },
      ],
    },
    {
      category: "Web Development",
      plans: [
        {
          name: "Business Website",
          price: "$2,997",
          period: "one-time",
          description: "Professional business website",
          features: [
            "Custom responsive design",
            "Up to 10 pages",
            "Contact forms",
            "SEO optimization",
            "SSL certificate",
            "3 months support",
          ],
          popular: false,
          bestFor: "Small businesses, service providers",
          cta: "Get Your Website",
        },
        {
          name: "E-commerce Store",
          price: "$7,997",
          period: "one-time",
          description: "Complete online store solution",
          features: [
            "Everything in Business, plus:",
            "E-commerce functionality",
            "Payment gateway integration",
            "Inventory management",
            "Product catalog setup",
            "6 months support",
          ],
          popular: true,
          bestFor: "Online retailers, product businesses",
          cta: "Launch Your Store",
        },
        {
          name: "Custom Application",
          price: "Custom Quote",
          period: "",
          description: "Tailored web applications",
          features: [
            "Custom functionality",
            "Database integration",
            "User authentication",
            "API development",
            "Ongoing maintenance",
            "Dedicated support",
          ],
          popular: false,
          bestFor: "Enterprises, unique requirements",
          cta: "Get Custom Quote",
        },
      ],
    },
    {
      category: "Digital Marketing",
      plans: [
        {
          name: "Marketing Starter",
          price: "$1,497",
          period: "/month",
          description: "Essential marketing services",
          features: [
            "Social media management (2 platforms)",
            "Content creation (8 posts/month)",
            "Basic email marketing",
            "Monthly analytics report",
            "Email support",
          ],
          popular: false,
          bestFor: "Small businesses, startups",
          cta: "Start Marketing",
        },
        {
          name: "Marketing Growth",
          price: "$2,997",
          period: "/month",
          description: "Comprehensive marketing solution",
          features: [
            "Everything in Starter, plus:",
            "Multi-platform management (4 platforms)",
            "Advanced content creation",
            "Email automation sequences",
            "Lead generation campaigns",
            "Bi-weekly strategy calls",
          ],
          popular: true,
          bestFor: "Growing businesses, B2B companies",
          cta: "Accelerate Growth",
        },
        {
          name: "Marketing Enterprise",
          price: "$5,997",
          period: "/month",
          description: "Full-service marketing powerhouse",
          features: [
            "Everything in Growth, plus:",
            "Omnichannel marketing",
            "Advanced automation",
            "Custom integrations",
            "Dedicated marketing team",
            "Weekly strategy sessions",
          ],
          popular: false,
          bestFor: "Large businesses, enterprises",
          cta: "Dominate Marketing",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: pricingFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <Badge className="mb-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white">
              💰 Transparent Pricing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transparent Pricing for{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Clear Results
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              No hidden fees, no surprises. Choose from our proven packages designed to deliver measurable results for
              your business.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 Client Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#4F46E5]" />
                <span className="text-sm font-medium">500+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Package Tiers */}
      {packages.map((category, categoryIndex) => (
        <ScrollAnimation key={categoryIndex}>
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{category.category}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">Choose the package that fits your needs</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {category.plans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative ${plan.popular ? "border-2 border-[#4F46E5] scale-105 shadow-2xl" : "shadow-lg"} bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{plan.description}</p>
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-[#4F46E5]">{plan.price}</span>
                          {plan.period && <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>}
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            <strong>Best for:</strong> {plan.bestFor}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#4F46E5] mr-3 mt-0.5 flex-shrink-0" />
                            <span className={feature.includes("Everything in") ? "font-semibold" : ""}>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="https://calendly.com/mhdigitalsolutionsus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                          plan.popular
                            ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:opacity-90 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
                        }`}
                        aria-label={`Get started with ${plan.name} package`}
                      >
                        {plan.cta}
                      </a>

                      <p className="text-xs text-center text-gray-500 mt-4">
                        No setup fees • Cancel anytime • 30-day money-back guarantee
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>
      ))}

      {/* Custom Solutions CTA */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Need a Custom Plan?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Every business is unique. If our standard packages don't fit your specific needs, we'll create a
                  custom solution tailored to your goals and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
                  >
                    Let's Talk Custom Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white rounded-full transition-all duration-300"
                  >
                    Get Custom Quote
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollAnimation>

      {/* Pricing FAQs */}
      <FAQ
        title="Pricing Questions Answered"
        subtitle="Everything you need to know about our pricing and billing"
        faqs={pricingFaqs}
      />

      {/* Final CTA */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 text-center relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/10 to-[#7C3AED]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                    Get Started?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join 500+ businesses that trust us with their digital growth. Book a free consultation to discuss
                  which package is right for you.
                </p>
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 text-lg"
                  aria-label="Book free consultation to discuss pricing"
                >
                  Book Your Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
