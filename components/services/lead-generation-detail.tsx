import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Users, Mail, Phone, Megaphone, BarChart, Lightbulb } from "lucide-react"

export function LeadGenerationDetail() {
  const solutions = [
    {
      icon: Users,
      title: "Target Audience Identification",
      description: "Precisely define and target your ideal customer profiles.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Mail,
      title: "Email Marketing Campaigns",
      description: "Craft compelling email campaigns to nurture leads and drive conversions.",
      color: "text-dark-pastel-green",
    },
    {
      icon: Phone,
      title: "Telemarketing & Cold Calling",
      description: "Direct outreach strategies to connect with potential clients.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Megaphone,
      title: "Content Syndication",
      description: "Distribute your valuable content across relevant platforms to attract leads.",
      color: "text-dark-pastel-red",
    },
    {
      icon: BarChart,
      title: "Lead Nurturing & CRM Integration",
      description: "Automate lead nurturing and integrate with your CRM for seamless management.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: Lightbulb,
      title: "Conversion Rate Optimization (CRO)",
      description: "Optimize your funnels to maximize lead conversion efficiency.",
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Effective Lead Generation Strategies
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in developing and implementing robust lead generation strategies that fill your sales pipeline
            with qualified prospects, ensuring sustainable business growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="glass-card p-4 flex items-start space-x-4">
                <solution.icon className={`h-8 w-8 ${solution.color} shrink-0`} />
                <div>
                  <CardTitle className="text-xl font-semibold mb-1">{solution.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{solution.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <Image
            src="/images/lead-generation-funnel (2).webp"
            alt="Lead Generation Funnel Illustration"
            fill
            className="z-10 object-contain"
          />
        </div>
      </div>
    </Section>
  )
}
