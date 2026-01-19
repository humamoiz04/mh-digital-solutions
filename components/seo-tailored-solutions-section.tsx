import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Users, Lightbulb, BarChart, Handshake } from "lucide-react"

export function SeoTailoredSolutionsSection() {
  const solutions = [
    {
      icon: Users,
      title: "Customized Strategies",
      description: "SEO plans built specifically for your business goals and industry.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Lightbulb,
      title: "Expert Team",
      description: "Leverage our experienced SEO specialists for optimal results.",
      color: "text-dark-pastel-green",
    },
    {
      icon: BarChart,
      title: "Transparent Reporting",
      description: "Clear, actionable insights into your campaign performance.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      description: "We're committed to your sustained growth and success.",
      color: "text-dark-pastel-orange",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Tailored SEO Solutions for Every Business
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand that every business is unique. That's why we don't offer one-size-fits-all solutions. Our
            approach to SEO is highly customized, ensuring that our strategies align perfectly with your specific
            objectives and market.
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
            src="/images/digital-marketing-laptop.webp"
            alt="Tailored SEO Solutions"
            fill
            className="z-10 object-contain"
          />
        </div>
      </div>
    </Section>
  )
}
