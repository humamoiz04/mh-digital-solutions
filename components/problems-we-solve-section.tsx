import { Section } from "@/components/Section"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { XCircle, TrendingDown, Users, Clock } from "lucide-react"
import Image from "next/image"

export function ProblemsWeSolveSection() {
  const problems = [
    {
      icon: XCircle,
      title: "Low Online Visibility",
      description: "We boost your search rankings and digital presence to reach more customers.",
      color: "text-dark-pastel-red",
    },
    {
      icon: TrendingDown,
      title: "Stagnant Growth",
      description: "Our strategies are designed to accelerate your business growth and market share.",
      color: "text-dark-pastel-orange",
    },
    {
      icon: Users,
      title: "Ineffective Marketing",
      description: "We create targeted campaigns that resonate with your audience and drive conversions.",
      color: "text-dark-pastel-pink",
    },
    {
      icon: Clock,
      title: "Outdated Technology",
      description: "Modernize your tech stack with our cutting-edge IT solutions and consulting.",
      color: "text-dark-pastel-indigo",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <Image
            src="/images/team-analytics-dashboard.webp"
            alt="Innovation Team Solving Problems"
            fill
            className="z-10 object-contain"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">Common Problems We Solve</h2>
          <p className="text-lg text-muted-foreground">
            Many businesses face challenges in the digital realm. We specialize in identifying these pain points and
            providing effective, tailored solutions to overcome them.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="glass-card p-4 flex items-start space-x-4">
                <problem.icon className={`h-8 w-8 ${problem.color} shrink-0`} />
                <div>
                  <CardTitle className="text-xl font-semibold mb-1">{problem.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{problem.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
