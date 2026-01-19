import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Lightbulb, TrendingUp, Users, ShieldCheck } from "lucide-react"

export function MarketingAgencySection() {
  const services = [
    {
      icon: Lightbulb,
      title: "Strategic Planning",
      description: "Crafting bespoke digital strategies for maximum impact.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Driving measurable results through data-driven campaigns.",
      color: "text-dark-pastel-green",
    },
    {
      icon: Users,
      title: "Brand Development",
      description: "Building strong, recognizable brands that resonate with your audience.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: ShieldCheck,
      title: "Digital Transformation",
      description: "Guiding businesses through seamless transitions to digital excellence.",
      color: "text-dark-pastel-orange",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Your Partner in Digital Transformation
          </h2>
          <p className="text-lg text-muted-foreground">
            At MH Digital Solution, we are a leading digital marketing agency dedicated to helping businesses thrive in
            the ever-evolving digital landscape. We combine creativity with data-driven strategies to deliver
            exceptional results.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="glass-card p-4 flex items-start space-x-4">
                <service.icon className={`h-8 w-8 ${service.color} shrink-0`} />
                <div>
                  <CardTitle className="text-xl font-semibold mb-1">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <Image
            src="/images/design-mode/global-business-concept-management-strategy-business-communication-human-resources_679557-2389.webp"
            alt="Digital Marketing Team"
            fill
            className="z-10 object-contain"
          />
        </div>
      </div>
    </Section>
  )
}
