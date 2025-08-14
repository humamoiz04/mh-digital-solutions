import { Section } from "@/components/Section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Smartphone, Code, Palette, Users, Zap, Shield } from "lucide-react"

export function MobileAppDevelopmentDetail() {
  const services = [
    {
      title: "iOS App Development",
      description: "Building high-performance, intuitive applications for Apple devices.",
      icon: Smartphone,
      color: "text-dark-pastel-blue",
    },
    {
      title: "Android App Development",
      description: "Creating robust and scalable applications for the Android ecosystem.",
      icon: Code,
      color: "text-dark-pastel-green",
    },
    {
      title: "Cross-Platform Development",
      description: "Developing apps that run seamlessly on multiple platforms (React Native, Flutter).",
      icon: Palette,
      color: "text-dark-pastel-purple",
    },
    {
      title: "UI/UX Design for Mobile",
      description: "Crafting engaging and user-friendly interfaces optimized for mobile.",
      icon: Users,
      color: "text-dark-pastel-red",
    },
    {
      title: "App Testing & Quality Assurance",
      description: "Ensuring your app is bug-free and performs flawlessly across devices.",
      icon: Zap,
      color: "text-dark-pastel-yellow",
    },
    {
      title: "App Maintenance & Support",
      description: "Providing ongoing support and updates to keep your app running smoothly.",
      icon: Shield,
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-16 md:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">Our Mobile App Development Services</h2>
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
          src="/images/mobile-app-building-illustration.webp"
          alt="Mobile App Development Illustration"
          width={800}
          height={450}
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </Section>
  )
}
