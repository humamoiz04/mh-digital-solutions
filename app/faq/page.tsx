import { Section } from "@/components/Section"
import { FAQSection } from "@/components/faq-section"
import { SeoFaqSection } from "@/components/seo-faq-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function FaqPage() {
  const serviceCategories = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Digital Marketing",
      questions: [
        {
          q: "How long does it take to see SEO results?",
          a: "Typically 3-6 months for significant improvements, with initial progress visible within 4-8 weeks.",
          link: "/services/seo-services",
        },
        {
          q: "What's included in your social media management?",
          a: "Content creation, posting schedule, community engagement, analytics reporting, and strategy optimization.",
          link: "/services/digital-marketing",
        },
        {
          q: "Do you guarantee first-page Google rankings?",
          a: "We focus on sustainable, white-hat SEO practices that improve rankings over time. No ethical agency can guarantee specific positions.",
          link: "/services/seo-services",
        },
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Web Development",
      questions: [
        {
          q: "How much does a custom website cost?",
          a: "Costs vary based on complexity, features, and timeline. Our packages start at $2,500 for basic sites.",
          link: "/services/web-development",
        },
        {
          q: "Do you provide website maintenance?",
          a: "Yes, we offer ongoing maintenance packages including updates, security monitoring, and performance optimization.",
          link: "/services/web-development",
        },
        {
          q: "Can you redesign my existing website?",
          a: "We specialize in website redesigns that improve user experience and conversion rates.",
          link: "/services/web-development",
        },
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Business Growth",
      questions: [
        {
          q: "What's your typical client ROI?",
          a: "Our clients typically see 300-500% ROI within the first year through increased leads and improved conversion rates.",
          link: "/case-studies",
        },
        {
          q: "How do you measure success?",
          a: "We track KPIs like website traffic, lead generation, conversion rates, and revenue growth specific to your goals.",
          link: "/services",
        },
        {
          q: "Do you work with small businesses?",
          a: "Yes! We have packages designed specifically for small businesses and startups looking to grow their digital presence.",
          link: "/pricing",
        },
      ],
    },
  ]

  return (
    <div className="relative z-10">
      <Section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and expertise.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className="gradient-icon p-2 rounded-lg">{category.icon}</div>
                <h2 className="text-2xl font-bold text-foreground gradient-text">{category.title}</h2>
              </div>
              <div className="grid gap-4">
                {category.questions.map((item, qIndex) => (
                  <Card key={qIndex} className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{item.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{item.a}</p>
                      <Link href={item.link}>
                        <Button variant="outline" size="sm">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <FAQSection />
        <SeoFaqSection />

        <div className="mt-16">
          <Card className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4 gradient-text">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help! Get personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="gradient-button">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline">Read Our Blog</Button>
              </Link>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}
