import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Briefcase, Lightbulb, BarChart, Users, Handshake, Target } from "lucide-react"

export function BusinessConsultingDetail() {
  const solutions = [
    {
      icon: Briefcase,
      title: "Strategic Planning",
      description: "Developing long-term strategies to achieve your business objectives.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Lightbulb,
      title: "Operational Efficiency",
      description: "Streamlining processes to reduce costs and improve productivity.",
      color: "text-dark-pastel-green",
    },
    {
      icon: BarChart,
      title: "Market Entry & Expansion",
      description: "Guidance for successfully entering new markets or expanding existing ones.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Users,
      title: "Organizational Development",
      description: "Building strong teams and effective organizational structures.",
      color: "text-dark-pastel-red",
    },
    {
      icon: Handshake,
      title: "Change Management",
      description: "Facilitating smooth transitions during periods of significant change.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: Target,
      title: "Performance Improvement",
      description: "Identifying areas for improvement and implementing solutions for better outcomes.",
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">Strategic Business Consulting</h2>
          <p className="text-lg text-muted-foreground">
            Our expert business consulting services provide strategic guidance and actionable insights to help your
            organization overcome challenges, optimize operations, and achieve sustainable growth.
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
            src="/images/design-mode/download%20%285%29.jpeg"
            alt="Creative Business Strategy Illustration"
            fill
            className="z-10 object-contain"
            unoptimized
          />
        </div>
      </div>
    </Section>
  )
}
