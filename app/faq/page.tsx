"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Plus, Minus, Search, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([0])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const categories = [
    { id: "all", name: "All Questions", icon: "❓" },
    { id: "general", name: "General Questions", icon: "🏢" },
    { id: "seo", name: "SEO Services", icon: "🔍" },
    { id: "ppc", name: "PPC Management", icon: "🎯" },
    { id: "social", name: "Social Media", icon: "📱" },
    { id: "web", name: "Web Development", icon: "💻" },
    { id: "pricing", name: "Pricing & Billing", icon: "💰" },
  ]

  const faqs = [
    // General Questions
    {
      category: "general",
      question: "What services does MH Digital Solutions offer?",
      answer:
        "We offer comprehensive digital solutions including SEO Services, PPC Advertising, Social Media Marketing, Web Development, AI & Automation, Business Consulting, and E-commerce Solutions. Each service is tailored to meet your specific business needs and goals.",
      popular: true,
    },
    {
      category: "general",
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. SEO and digital marketing campaigns are ongoing services with initial results typically seen within 3-6 months.",
      popular: true,
    },
    {
      category: "general",
      question: "Do you work with businesses of all sizes?",
      answer:
        "Yes! We work with startups, small businesses, and enterprise companies. Our solutions are scalable and tailored to meet your specific needs and budget. We have packages designed for every business size.",
      popular: true,
    },
    {
      category: "general",
      question: "What makes MH Digital Solutions different?",
      answer:
        "We focus on transparent communication, measurable results, and long-term partnerships. Our team provides dedicated account management, regular strategy calls, and detailed reporting. Plus, we offer competitive pricing with no hidden fees.",
    },
    {
      category: "general",
      question: "Do you offer free consultations?",
      answer:
        "Yes! We offer free consultations for all our services. During the consultation, we'll assess your current situation, discuss your goals, and provide recommendations tailored to your business needs.",
    },

    // SEO Services FAQs
    {
      category: "seo",
      question: "How long does it take to see SEO results?",
      answer:
        "Most clients see initial improvements in 3-4 months, with significant results in 6-12 months. SEO is a long-term strategy - we typically see the biggest gains between months 6-18. However, technical fixes and local SEO improvements can show results much faster, sometimes within 30-60 days.",
      popular: true,
    },
    {
      category: "seo",
      question: "Do you guarantee first page rankings?",
      answer:
        "While no legitimate SEO company can guarantee specific rankings (Google's algorithm changes constantly), we do guarantee: improved website performance, increased organic visibility, detailed monthly reporting, and our commitment to your success. We also offer a 30-day money-back guarantee.",
    },
    {
      category: "seo",
      question: "What's included in your SEO packages?",
      answer:
        "Our SEO packages include keyword research, on-page optimization, technical SEO, content creation, link building, local SEO (when applicable), monthly reporting, and ongoing optimization. The specific deliverables vary by package tier.",
    },
    {
      category: "seo",
      question: "Do you work with my industry?",
      answer:
        "We work with businesses across all industries including healthcare, legal, e-commerce, SaaS, local services, restaurants, real estate, and more. Each strategy is customized to your specific market, competition, and business goals.",
    },

    // PPC Management FAQs
    {
      category: "ppc",
      question: "How much should I budget for PPC advertising?",
      answer:
        "PPC budgets vary widely based on your industry, competition, and goals. We typically recommend starting with at least $1,000-$3,000 per month for small businesses, with our management fee on top. We'll help you determine the optimal budget based on your specific market and objectives.",
      popular: true,
    },
    {
      category: "ppc",
      question: "How quickly will I see results from PPC campaigns?",
      answer:
        "Unlike SEO, PPC can deliver immediate results. You'll start seeing traffic and clicks as soon as your campaigns go live. However, it typically takes 2-4 weeks to optimize campaigns for best performance and 1-3 months to see consistent, profitable results.",
    },
    {
      category: "ppc",
      question: "What platforms do you advertise on?",
      answer:
        "We manage campaigns across all major platforms including Google Ads, Microsoft Ads (Bing), Facebook Ads, Instagram Ads, LinkedIn Ads, Twitter Ads, and YouTube Ads. We'll recommend the best platforms based on where your target audience is most active.",
    },
    {
      category: "ppc",
      question: "How do you measure PPC success?",
      answer:
        "We track key metrics including click-through rates (CTR), conversion rates, cost per click (CPC), cost per acquisition (CPA), return on ad spend (ROAS), and most importantly - the revenue and leads generated. You'll receive detailed monthly reports with actionable insights.",
    },

    // Social Media FAQs
    {
      category: "social",
      question: "Which social media platforms should my business be on?",
      answer:
        "The best platforms depend on your target audience and business type. We typically recommend Facebook and Instagram for most businesses, LinkedIn for B2B companies, and TikTok for younger demographics. We'll help you choose the right platforms during our consultation.",
    },
    {
      category: "social",
      question: "Do you create content for social media?",
      answer:
        "Yes! Our social media packages include content creation, graphic design, copywriting, and posting schedules. We create engaging content that aligns with your brand voice and resonates with your target audience.",
    },
    {
      category: "social",
      question: "How often should I post on social media?",
      answer:
        "Posting frequency varies by platform and audience. Generally, we recommend 3-5 posts per week on Facebook and Instagram, daily posts on Twitter, and 2-3 posts per week on LinkedIn. We'll create a custom posting schedule based on your audience engagement patterns.",
    },

    // Web Development FAQs
    {
      category: "web",
      question: "What's included in your web development packages?",
      answer:
        "Our web development packages include custom design, responsive development, SEO optimization, contact forms, SSL certificates, and ongoing support. Higher-tier packages include e-commerce functionality, CMS integration, and advanced features.",
    },
    {
      category: "web",
      question: "Do you provide website maintenance?",
      answer:
        "Yes! All our web development packages include ongoing maintenance and support. This includes security updates, content updates, technical support, and performance monitoring. The duration of support varies by package.",
    },
    {
      category: "web",
      question: "Can you redesign my existing website?",
      answer:
        "We offer website redesign services to modernize your existing site, improve user experience, and boost conversions. We can work with your existing content or create new content as needed.",
    },
    {
      category: "web",
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes! All websites we develop are fully responsive and mobile-optimized. With over 60% of web traffic coming from mobile devices, we ensure your site looks and functions perfectly on all screen sizes.",
    },

    // Pricing & Billing FAQs
    {
      category: "pricing",
      question: "Are there any setup fees or hidden costs?",
      answer:
        "No hidden fees! Our pricing is transparent and includes everything mentioned in your package. The only additional costs would be third-party services like domain registration, hosting, or advertising spend (for PPC campaigns), which we'll discuss upfront.",
      popular: true,
    },
    {
      category: "pricing",
      question: "Do you require long-term contracts?",
      answer:
        "We offer both month-to-month and contract options. While we believe in the value of long-term partnerships for best results, we don't lock you into lengthy contracts. You can cancel most services with 30 days notice.",
    },
    {
      category: "pricing",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and PayPal. For ongoing services, we typically set up automatic monthly billing for your convenience. We can also accommodate quarterly or annual payment schedules with discounts.",
    },
    {
      category: "pricing",
      question: "Do you offer refunds?",
      answer:
        "Yes! We offer a 30-day money-back guarantee for most of our services. If you're not satisfied with our work within the first 30 days, we'll provide a full refund. Specific terms vary by service type.",
    },
    {
      category: "pricing",
      question: "Can I upgrade or downgrade my package?",
      answer:
        "You can upgrade or downgrade your service package at any time. We'll prorate the charges and adjust your billing accordingly. We want to ensure you always have the right level of service for your needs.",
    },
  ]

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const popularFaqs = faqs.filter((faq) => faq.popular)

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
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
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white">❓ Get Answers</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Questions,{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Answered</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to common inquiries about our services, process, and pricing. Can't find what you're looking
            for? Contact us directly!
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Most Popular Questions */}
      {searchTerm === "" && activeCategory === "all" && (
        <section className="py-12 bg-transparent">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Most Popular Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {popularFaqs.map((faq, index) => {
                const globalIndex = faqs.findIndex((f) => f === faq)
                const isOpen = openItems.includes(globalIndex)
                return (
                  <Card key={globalIndex} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4F46E5]/20 flex items-center justify-center">
                          {isOpen ? (
                            <Minus className="h-4 w-4 text-[#4F46E5]" />
                          ) : (
                            <Plus className="h-4 w-4 text-[#4F46E5]" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Category Filters */}
      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white shadow-lg"
                    : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  No questions found matching your search. Try different keywords or{" "}
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4F46E5] hover:underline"
                  >
                    contact us directly
                  </a>
                  .
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const globalIndex = faqs.findIndex((f) => f === faq)
                const isOpen = openItems.includes(globalIndex)
                return (
                  <Card key={globalIndex} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4F46E5]/20 flex items-center justify-center">
                          {isOpen ? (
                            <Minus className="h-4 w-4 text-[#4F46E5]" />
                          ) : (
                            <Plus className="h-4 w-4 text-[#4F46E5]" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Can't Find Your Answer?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Our team is here to help. Reach out directly for any specific queries about our digital marketing
                services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white rounded-full transition-all duration-300"
                >
                  Contact Us
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
