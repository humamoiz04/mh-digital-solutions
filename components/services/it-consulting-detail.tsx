import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Lightbulb, Cloud, Shield, Server, Settings, Users } from "lucide-react"

export function ITConsultingDetail() {
  const solutions = [
    {
      icon: Lightbulb,
      title: "Strategic IT Planning",
      description: "Aligning IT initiatives with your business goals for maximum impact.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & Migration",
      description: "Seamless migration and optimization of your cloud environment.",
      color: "text-dark-pastel-green",
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Protecting your data and systems from evolving cyber threats.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Server,
      title: "Network & Infrastructure Management",
      description: "Ensuring robust and reliable IT infrastructure performance.",
      color: "text-dark-pastel-red",
    },
    {
      icon: Settings,
      title: "IT Operations Optimization",
      description: "Streamlining IT processes for improved efficiency and cost savings.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: Users,
      title: "Digital Transformation Consulting",
      description: "Guiding your business through successful digital adoption and innovation.",
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Expert IT Consulting for Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Our IT consulting services provide strategic guidance and technical expertise to help your business leverage
            technology for growth, efficiency, and competitive advantage.
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
            src="/images/design-mode/download%20%286%29.webp"
            alt="IT Consulting and Web Analytics Team"
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
        </div>
      </div>
    </Section>
  )
}
