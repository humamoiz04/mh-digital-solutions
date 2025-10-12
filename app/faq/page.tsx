import { Section } from "@/components/Section"
import { FAQSection } from "@/components/faq-section"
import { SeoFaqSection } from "@/components/seo-faq-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Zap, Smartphone, Cloud, BarChart3 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | MH Digital Solution",
  description:
    "Find answers to common questions about our digital marketing, web development, and business consulting services. Get expert insights and solutions.",
  canonical: "https://www.mhdigitalsolution.com/faq",
  openGraph: {
    title: "FAQ - Frequently Asked Questions | MH Digital Solution",
    description:
      "Find answers to common questions about our digital marketing, web development, and business consulting services.",
    url: "https://www.mhdigitalsolution.com/faq",
  },
}

export default function FaqPage() {
  const serviceCategories = [
    {
      icon: <MessageCircle className="h-6 w-6 text-fuchsia-600" />,
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
      icon: <Zap className="h-6 w-6 text-fuchsia-600" />,
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
      icon: <Smartphone className="h-6 w-6 text-fuchsia-600" />,
      title: "Mobile App Development",
      questions: [
        {
          q: "Do you develop both iOS and Android apps?",
          a: "Yes, we develop native and cross-platform mobile applications for both iOS and Android platforms.",
          link: "/services/mobile-app-development",
        },
        {
          q: "How long does mobile app development take?",
          a: "Development timeline varies from 3-8 months depending on app complexity and features required.",
          link: "/services/mobile-app-development",
        },
        {
          q: "Do you provide app store submission support?",
          a: "Yes, we handle the complete app store submission process for both Apple App Store and Google Play Store.",
          link: "/services/mobile-app-development",
        },
      ],
    },
    {
      icon: <Cloud className="h-6 w-6 text-fuchsia-600" />,
      title: "Cloud Solutions & IT",
      questions: [
        {
          q: "What cloud platforms do you work with?",
          a: "We work with AWS, Google Cloud, Microsoft Azure, and other leading cloud platforms based on your needs.",
          link: "/services/cloud-solutions",
        },
        {
          q: "Do you provide ongoing IT support?",
          a: "Yes, we offer comprehensive IT consulting and support services including system maintenance and troubleshooting.",
          link: "/services/it-consulting",
        },
        {
          q: "Can you help migrate our existing systems to the cloud?",
          a: "We specialize in seamless cloud migration with minimal downtime and data security.",
          link: "/services/cloud-solutions",
        },
      ],
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-fuchsia-600" />,
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
    <div className="relative z-10 min-h-screen bg-gradient-to-br from-background via-background/95 to-fuchsia-50/20 backdrop-blur-sm">
      <Section className="py-16 md:py-24 glass" glass>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and expertise.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 p-2 rounded-lg">{category.icon}</div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                  {category.title}
                </h2>
              </div>
              <div className="grid gap-4">
                {category.questions.map((item, qIndex) => (
                  <Card
                    key={qIndex}
                    className="backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{item.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{item.a}</p>
                      <Link href={item.link}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-fuchsia-600/30 text-fuchsia-600 hover:bg-fuchsia-600/10 bg-transparent"
                        >
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
          <Card className="backdrop-blur-sm bg-white/10 border-white/20 p-8 text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help! Get personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="border-fuchsia-600/30 text-fuchsia-600 hover:bg-fuchsia-600/10 bg-transparent"
                >
                  Read Our Blog
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}
