import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Zap, Cog, BarChart, Clock, Shield, Workflow } from "lucide-react"

export function AutomationSolutionsSection() {
  const solutions = [
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows to increase efficiency and reduce errors.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Cog,
      title: "Workflow Optimization",
      description: "Design and implement optimized workflows that enhance productivity across your organization.",
      color: "text-dark-pastel-green",
    },
    {
      icon: BarChart,
      title: "Analytics Integration",
      description: "Integrate automated analytics to provide real-time insights and performance monitoring.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Implement time-saving solutions that allow your team to focus on high-value activities.",
      color: "text-dark-pastel-red",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Automated quality checks and validation processes to maintain consistent standards.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: Workflow,
      title: "Custom Solutions",
      description: "Tailored automation solutions designed specifically for your business needs and processes.",
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Automation & Analytics Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Leverage the power of automation and analytics to transform your business operations. Our solutions help you
            work smarter, not harder, while providing valuable insights for strategic decision-making.
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
            src="/images/design-mode/automation-analytics.webp"
            alt="Automation and Analytics Illustration"
            fill
            className="z-10 object-contain"
            unoptimized
          />
        </div>
      </div>
    </Section>
  )
}
