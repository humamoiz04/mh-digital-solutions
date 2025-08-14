import { Section } from "@/components/Section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Lightbulb, Search, TrendingUp, ShieldCheck, BarChart } from "lucide-react"

export function SeoProcessSection() {
  const steps = [
    {
      title: "Discovery & Audit",
      description: "We begin with a comprehensive audit of your current website and market landscape.",
      icon: Lightbulb,
      color: "text-dark-pastel-blue",
    },
    {
      title: "Strategy & Planning",
      description: "Developing a tailored SEO strategy based on in-depth keyword and competitor analysis.",
      icon: Search,
      color: "text-dark-pastel-green",
    },
    {
      title: "On-Page Optimization",
      description: "Implementing optimizations directly on your website's content and technical elements.",
      icon: TrendingUp,
      color: "text-dark-pastel-purple",
    },
    {
      title: "Off-Page SEO & Link Building",
      description: "Building high-quality backlinks and improving your online authority.",
      icon: ShieldCheck,
      color: "text-dark-pastel-red",
    },
    {
      title: "Monitoring & Reporting",
      description: "Continuously tracking performance, providing transparent reports, and adapting strategies.",
      icon: BarChart,
      color: "text-dark-pastel-yellow",
    },
  ]

  return (
    <Section className="py-16 md:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">Our Proven SEO Process</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        We follow a systematic approach to ensure maximum effectiveness and measurable results for your SEO campaigns.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={index} className="glass-card flex flex-col items-center p-6 text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <step.icon className={`h-12 w-12 ${step.color}`} />
            </div>
            <CardTitle className="mb-2 text-2xl font-semibold text-foreground">{step.title}</CardTitle>
            <CardContent className="text-muted-foreground">{step.description}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
