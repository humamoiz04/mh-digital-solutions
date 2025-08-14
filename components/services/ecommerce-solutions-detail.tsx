import { Section } from "@/components/Section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { ShoppingCart, CreditCard, Truck, BarChart, Users, Shield } from "lucide-react"

export function EcommerceSolutionsDetail() {
  const services = [
    {
      title: "Custom E-commerce Development",
      description: "Building bespoke online stores tailored to your business needs.",
      icon: ShoppingCart,
      color: "text-dark-pastel-blue",
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure and seamless integration with various payment providers.",
      icon: CreditCard,
      color: "text-dark-pastel-green",
    },
    {
      title: "Shipping & Logistics Solutions",
      description: "Optimizing your delivery processes for efficiency and customer satisfaction.",
      icon: Truck,
      color: "text-dark-pastel-purple",
    },
    {
      title: "E-commerce Analytics & Reporting",
      description: "Data-driven insights to track performance and inform strategic decisions.",
      icon: BarChart,
      color: "text-dark-pastel-red",
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Tools and strategies to manage customer interactions and build loyalty.",
      icon: Users,
      color: "text-dark-pastel-yellow",
    },
    {
      title: "Security & Compliance",
      description: "Ensuring your online store is secure and compliant with industry standards.",
      icon: Shield,
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-16 md:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">Our E-commerce Solutions</h2>
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
          src="/images/ecommerce-solutions-illustration.webp"
          alt="E-commerce Solutions Illustration"
          width={800}
          height={450}
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </Section>
  )
}
