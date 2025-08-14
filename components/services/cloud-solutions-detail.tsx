import { Section } from "@/components/Section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Cloud, Server, Shield, Database, Zap, Globe } from "lucide-react"

export function CloudSolutionsDetail() {
  const services = [
    {
      title: "Cloud Strategy & Consulting",
      description: "Developing a tailored cloud roadmap to meet your business objectives.",
      icon: Cloud,
      color: "text-dark-pastel-blue",
    },
    {
      title: "Cloud Migration Services",
      description: "Seamlessly migrating your applications and data to the cloud.",
      icon: Server,
      color: "text-dark-pastel-green",
    },
    {
      title: "Cloud Security & Compliance",
      description: "Ensuring your cloud environment is secure and compliant with regulations.",
      icon: Shield,
      color: "text-dark-pastel-purple",
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Managing and optimizing your cloud resources for peak performance.",
      icon: Database,
      color: "text-dark-pastel-red",
    },
    {
      title: "Cloud-Native Development",
      description: "Building scalable and resilient applications directly in the cloud.",
      icon: Zap,
      color: "text-dark-pastel-yellow",
    },
    {
      title: "Hybrid & Multi-Cloud Solutions",
      description: "Designing flexible cloud architectures that combine public and private clouds.",
      icon: Globe,
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-16 md:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">Our Cloud Solutions</h2>
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
          src="/images/cloud-computing-illustration.webp"
          alt="Cloud Solutions Illustration"
          width={800}
          height={450}
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </Section>
  )
}
