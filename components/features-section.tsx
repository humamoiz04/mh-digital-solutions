import { Section } from "@/components/Section"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Lightbulb, TrendingUp, Users, ShieldCheck } from "lucide-react"
import Image from "next/image"

export function FeaturesSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We bring fresh ideas and cutting-edge technologies to solve your toughest challenges.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: TrendingUp,
      title: "Measurable Growth",
      description: "Our strategies are data-driven, ensuring tangible and sustainable growth for your business.",
      color: "text-dark-pastel-green",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work closely with you to achieve your unique goals.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Support",
      description: "Count on us for continuous support and optimization to keep you ahead.",
      color: "text-dark-pastel-orange",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Why Choose MH Digital Solution?
          </h2>
          <p className="text-lg text-muted-foreground">
            We are committed to delivering excellence and driving real results for our clients. Our unique approach
            combines innovation, expertise, and a deep understanding of the digital landscape.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-4 flex items-start space-x-4">
                <feature.icon className={`h-8 w-8 ${feature.color} shrink-0`} />
                <div>
                  <CardTitle className="text-xl font-semibold mb-1">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <Image
            src="/images/creative-branding.webp"
            alt="Creative Branding and Design Process"
            fill
            className="object-contain z-10"
          />
        </div>
      </div>
    </Section>
  )
}
