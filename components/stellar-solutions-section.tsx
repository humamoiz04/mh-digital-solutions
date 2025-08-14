import { Section } from "@/components/Section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Star, Award, Zap, Rocket } from "lucide-react"

export function StellarSolutionsSection() {
  const solutions = [
    {
      title: "Innovative Strategies",
      description: "We craft unique and forward-thinking strategies to keep you ahead of the curve.",
      icon: Star,
      color: "text-dark-pastel-blue",
    },
    {
      title: "Award-Winning Team",
      description: "Our experts are recognized for their excellence and dedication to client success.",
      icon: Award,
      color: "text-dark-pastel-green",
    },
    {
      title: "Rapid Implementation",
      description: "We deliver fast and efficient solutions without compromising on quality.",
      icon: Zap,
      color: "text-dark-pastel-purple",
    },
    {
      title: "Sustainable Growth",
      description: "Our focus is on long-term results that ensure your business thrives.",
      icon: Rocket,
      color: "text-dark-pastel-red",
    },
  ]

  return (
    <Section className="py-16 md:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">Delivering Stellar Solutions</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        At MH Digital Solution, we are committed to providing exceptional services that drive real value and help your
        business achieve its full potential.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution, index) => (
          <Card key={index} className="glass-card flex flex-col items-center p-6 text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <solution.icon className={`h-12 w-12 ${solution.color}`} />
            </div>
            <CardTitle className="mb-2 text-2xl font-semibold text-foreground">{solution.title}</CardTitle>
            <CardContent className="text-muted-foreground">{solution.description}</CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Image
          src="/images/stellar-solutions-chart.webp"
          alt="Stellar Solutions Chart"
          width={800}
          height={450}
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </Section>
  )
}
