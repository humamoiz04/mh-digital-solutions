import { Section } from "@/components/Section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Palette, Layout, Users, Lightbulb, Monitor, Zap } from "lucide-react"

export function UIUXDesignDetail() {
  const services = [
    {
      title: "User Research & Analysis",
      description: "Understanding user needs and behaviors to inform design decisions.",
      icon: Users,
      color: "text-dark-pastel-blue",
    },
    {
      title: "Wireframing & Prototyping",
      description: "Creating interactive prototypes to visualize and test user flows.",
      icon: Layout,
      color: "text-dark-pastel-green",
    },
    {
      title: "User Interface (UI) Design",
      description: "Crafting visually appealing and intuitive interfaces.",
      icon: Palette,
      color: "text-dark-pastel-purple",
    },
    {
      title: "User Experience (UX) Design",
      description: "Designing seamless and enjoyable user journeys.",
      icon: Lightbulb,
      color: "text-dark-pastel-red",
    },
    {
      title: "Usability Testing",
      description: "Evaluating designs with real users to identify areas for improvement.",
      icon: Monitor,
      color: "text-dark-pastel-yellow",
    },
    {
      title: "Interaction Design",
      description: "Focusing on how users interact with digital products for optimal engagement.",
      icon: Zap,
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-16 md:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">Our UI/UX Design Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="glass-card flex flex-col items-center p-6 text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <service.icon className={`h-12 w-12 ${service.color}`} />
            </div>
            <CardTitle className="mb-2 text-2xl font-semibold text-foreground">{service.title}</CardTitle>
            <CardContent className="text-muted-foreground">{service.description}</CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%284%29-9HCmHKCx8DdK52nS6uKI0vetrTcTkY.jpeg"
          alt="UI/UX Design Process Illustration"
          width={800}
          height={450}
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </Section>
  )
}
