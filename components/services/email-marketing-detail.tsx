import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Mail, Users, BarChart, Lightbulb, Send, ShieldCheck } from "lucide-react"

export function EmailMarketingDetail() {
  const solutions = [
    {
      icon: Mail,
      title: "Email Campaign Strategy",
      description: "Developing targeted email strategies to engage your audience.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Users,
      title: "Audience Segmentation",
      description: "Dividing your audience for personalized and effective communication.",
      color: "text-dark-pastel-green",
    },
    {
      icon: BarChart,
      title: "A/B Testing & Optimization",
      description: "Continuously improving open rates, click-throughs, and conversions.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Lightbulb,
      title: "Content Creation for Emails",
      description: "Crafting compelling subject lines and engaging email body content.",
      color: "text-dark-pastel-red",
    },
    {
      icon: Send,
      title: "Automation & Drip Campaigns",
      description: "Setting up automated email sequences for lead nurturing and sales.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Deliverability",
      description: "Ensuring emails reach inboxes and comply with regulations.",
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Effective Email Marketing Campaigns
          </h2>
          <p className="text-lg text-muted-foreground">
            Build stronger customer relationships and drive sales with our strategic email marketing services. We design
            and execute campaigns that deliver results.
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
            src="/images/email-marketing-illustration.webp"
            alt="Email Marketing Illustration"
            fill
            className="z-10 object-contain"
          />
        </div>
      </div>
    </Section>
  )
}
