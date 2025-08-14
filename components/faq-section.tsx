import { Section } from "@/components/Section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQSectionProps {
  title?: string
  description?: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function FAQSection({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services and how we operate.",
  faqs,
}: FAQSectionProps) {
  const defaultFaqs = [
    {
      question: "What services does MH Digital Solution offer?",
      answer:
        "We offer a comprehensive suite of digital solutions including Web Development, SEO Services, Digital Marketing, UI/UX Design, Mobile App Development, Cloud Solutions, IT Consulting, Business Analytics, and Business Consulting.",
    },
    {
      question: "How can digital marketing help my business grow?",
      answer:
        "Digital marketing can significantly boost your business by increasing online visibility, driving targeted traffic to your website, generating qualified leads, improving conversion rates, building brand awareness, and providing measurable ROI through data-driven strategies.",
    },
    {
      question: "Do you provide custom web development services?",
      answer:
        "Yes, we specialize in custom web development, crafting responsive, high-performing, and visually appealing websites tailored to your specific business needs and objectives. We work with various technologies and platforms to deliver bespoke solutions.",
    },
    {
      question: "What is your approach to client collaboration?",
      answer:
        "We believe in a client-centric approach. We work closely with you from discovery to deployment and beyond, ensuring transparent communication, regular updates, and a deep understanding of your goals to deliver solutions that truly meet your expectations.",
    },
    {
      question: "How do I get started with MH Digital Solution?",
      answer:
        "Getting started is easy! You can book a free consultation through our website, where we'll discuss your needs, assess your current digital landscape, and propose a tailored strategy to help you achieve your business goals.",
    },
  ]

  const faqsToShow = faqs || defaultFaqs

  return (
    <Section className="py-16 md:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">{title}</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">{description}</p>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqsToShow.map((faq, index) => (
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
