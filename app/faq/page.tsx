"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus, Minus } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      category: "General",
      color: "#FF7600",
      questions: [
        {
          question: "What services does M&H Digital Solutions offer?",
          answer:
            "We offer comprehensive digital solutions including AI & Automation, Creative Branding & Digital Marketing, and Web & Software Development. Our services are designed to solve real business problems and drive measurable growth.",
        },
        {
          question: "How long does a typical project take?",
          answer:
            "Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines and milestones during our initial consultation.",
        },
        {
          question: "Do you work with businesses of all sizes?",
          answer:
            "Yes! We work with startups, small businesses, and enterprise companies. Our solutions are scalable and tailored to meet your specific needs, budget, and growth objectives.",
        },
      ],
    },
    {
      category: "AI & Automation",
      color: "#8B5CF6",
      questions: [
        {
          question: "How can AI automation benefit my business?",
          answer:
            "AI automation can reduce operational costs by up to 60%, improve efficiency, provide 24/7 customer support, and free up your team to focus on strategic initiatives. We customize solutions based on your specific business needs.",
        },
        {
          question: "What types of processes can be automated?",
          answer:
            "We can automate customer service (chatbots), data entry, email marketing, social media posting, inventory management, appointment scheduling, and many other repetitive tasks.",
        },
        {
          question: "Is AI automation secure for my business data?",
          answer:
            "Absolutely. We implement enterprise-grade security measures, data encryption, and comply with industry standards to ensure your business data remains secure and private.",
        },
      ],
    },
    {
      category: "Web Development",
      color: "#00F5FF",
      questions: [
        {
          question: "What technologies do you use for web development?",
          answer:
            "We use modern technologies including React, Next.js, Node.js, Python, and cloud platforms like Vercel and AWS. We choose the best technology stack based on your project requirements.",
        },
        {
          question: "Do you provide ongoing maintenance and support?",
          answer:
            "Yes, we offer comprehensive maintenance packages including regular updates, security monitoring, performance optimization, and technical support to ensure your website continues to perform optimally.",
        },
        {
          question: "Can you help with e-commerce development?",
          answer:
            "We develop custom e-commerce solutions with features like payment processing, inventory management, customer accounts, and analytics to help you maximize online sales.",
        },
      ],
    },
    {
      category: "Pricing & Process",
      color: "#F472B6",
      questions: [
        {
          question: "How do you price your services?",
          answer:
            "Our pricing is project-based and depends on scope, complexity, and timeline. We provide transparent, detailed quotes with no hidden fees. We also offer flexible payment plans for larger projects.",
        },
        {
          question: "What's your project process like?",
          answer:
            "Our process includes: 1) Discovery & Strategy, 2) Design & Planning, 3) Development & Implementation, 4) Testing & Optimization, 5) Launch & Training, 6) Ongoing Support. We keep you involved at every step.",
        },
        {
          question: "Do you offer guarantees on your work?",
          answer:
            "Yes, we stand behind our work with quality guarantees. We offer revisions during the project phase and provide warranties on technical implementations. Your satisfaction is our priority.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-[#FF7600] text-black hover:bg-[#FF7600]/90">❓ Get Answers</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-[#FCFBCF]">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find quick answers to common questions about our services, process, and how we can help transform your
            business
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="mb-8">
                  <Badge className="text-black mb-4" style={{ backgroundColor: category.color }}>
                    {category.category}
                  </Badge>
                  <h2 className="text-3xl font-bold text-[#FCFBCF]">{category.category} Questions</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 10 + questionIndex
                    const isOpen = openItems.includes(globalIndex)

                    return (
                      <Card
                        key={questionIndex}
                        className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-gray-700"
                      >
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-[#FCFBCF] pr-4">{faq.question}</h3>
                            <div
                              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: `${category.color}20` }}
                            >
                              {isOpen ? (
                                <Minus className="h-4 w-4" style={{ color: category.color }} />
                              ) : (
                                <Plus className="h-4 w-4" style={{ color: category.color }} />
                              )}
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <Card className="bg-[#0D0D0D] border-[#FF7600]/30 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-[#FCFBCF] mb-4">Still Have Questions?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help you with any questions about our services
                or how we can help your business grow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#FF7600] hover:bg-[#FF7600]/90 text-black font-semibold">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#FCFBCF] text-[#FCFBCF] hover:bg-[#FCFBCF] hover:text-black"
                >
                  Schedule a Call
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-4">Quick Contact Options:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <span className="text-gray-300">📧 hello@mhdigitalsolution.com</span>
                  <span className="text-gray-300">📞 +1 (555) 123-4567</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
