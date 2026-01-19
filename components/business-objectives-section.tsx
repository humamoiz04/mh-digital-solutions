import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Target, TrendingUp, Users, DollarSign } from "lucide-react"

export function BusinessObjectivesSection() {
  const objectives = [
    {
      icon: Target,
      title: "Increase Brand Awareness",
      description: "Expand your reach and make your brand recognizable to a wider audience.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: TrendingUp,
      title: "Drive Sales & Revenue",
      description: "Implement strategies that directly translate into higher conversion rates and increased income.",
      color: "text-dark-pastel-green",
    },
    {
      icon: Users,
      title: "Enhance Customer Engagement",
      description: "Build stronger relationships with your audience through meaningful interactions.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: DollarSign,
      title: "Optimize Operational Efficiency",
      description: "Streamline your internal processes to reduce costs and improve productivity.",
      color: "text-dark-pastel-orange",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Achieving Your Business Objectives
          </h2>
          <p className="text-lg text-muted-foreground">
            At MH Digital Solution, we align our digital strategies with your core business objectives. We work closely
            with you to understand your goals and develop tailored solutions that deliver measurable results.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="glass-card p-4 flex items-start space-x-4">
                <objective.icon className={`h-8 w-8 ${objective.color} shrink-0`} />
                <div>
                  <CardTitle className="text-xl font-semibold mb-1">{objective.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{objective.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <Image
            src="/images/design-mode/business-process-optimization.webp"
            alt="Business Objectives Illustration"
            fill
            className="z-10 object-contain"
          />
        </div>
      </div>
    </Section>
  )
}
