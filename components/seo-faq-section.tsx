import { Section } from "@/components/Section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function SeoFaqSection() {
  const faqs = [
    {
      question: "What is SEO and why is it important for my business?",
      answer:
        "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results, driving more organic (unpaid) traffic. It's crucial because it increases your visibility, attracts qualified leads, and builds brand authority, leading to sustainable business growth.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy. While some initial improvements can be seen within a few weeks, significant results typically appear within 4-6 months, and continuous optimization yields ongoing benefits. Factors like industry competition and website history can influence the timeline.",
    },
    {
      question: "What is the difference between On-Page and Off-Page SEO?",
      answer:
        "On-Page SEO refers to optimizations made directly on your website (e.g., content, keywords, meta tags, site structure). Off-Page SEO involves activities done outside your website to improve its ranking (e.g., link building, social media marketing, local SEO). Both are essential for a comprehensive SEO strategy.",
    },
    {
      question: "Do you offer local SEO services?",
      answer:
        "Yes, we specialize in local SEO to help businesses attract customers in specific geographic areas. This includes optimizing your Google My Business profile, local citations, and location-specific keywords to ensure you appear prominently in local search results.",
    },
    {
      question: "How do you measure the success of your SEO campaigns?",
      answer:
        "We track various key performance indicators (KPIs) including organic traffic growth, keyword rankings, conversion rates, lead generation, and return on investment (ROI). We provide transparent monthly reports and regular consultations to keep you informed of your campaign's progress.",
    },
  ]

  return (
    <Section className="py-16 md:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">Frequently Asked Questions about SEO</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Find answers to common questions about our SEO services and how they can benefit your business.
      </p>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="glass-card mb-4 rounded-lg px-4">
            <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
