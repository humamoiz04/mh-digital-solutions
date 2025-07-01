"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title: string
  subtitle: string
  faqs: FAQItem[]
}

export default function FAQ({ title, subtitle, faqs }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  // Generate FAQ schema markup
  const faqSchema = {
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
  }

  return (
    <ScrollAnimation>
      <section className="py-20 section-gradient-2">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#f472b6] bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass-card hover-lift">
                    <CardContent className="p-0">
                      <button
                        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                        onClick={() => toggleItem(index)}
                        aria-expanded={openItems.includes(index)}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-white pr-4 faq-question">{faq.question}</h3>
                          <div className="flex-shrink-0">
                            {openItems.includes(index) ? (
                              <ChevronUp className="h-5 w-5 text-purple-400" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-purple-400" />
                            )}
                          </div>
                        </div>
                      </button>
                      {openItems.includes(index) && (
                        <div
                          id={`faq-answer-${index}`}
                          className="px-6 pb-6 faq-answer"
                          role="region"
                          aria-labelledby={`faq-question-${index}`}
                        >
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </section>
    </ScrollAnimation>
  )
}
