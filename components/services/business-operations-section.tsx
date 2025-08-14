import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Package, Truck, ShoppingCart, Users, DollarSign, BarChart } from "lucide-react"

export function BusinessOperationsSection() {
  const operations = [
    {
      icon: Package,
      title: "Inventory Management",
      description: "Optimize stock levels and streamline inventory processes for maximum efficiency.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Truck,
      title: "Supply Chain Optimization",
      description: "Enhance your supply chain operations to reduce costs and improve delivery times.",
      color: "text-dark-pastel-green",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Build and optimize online stores that drive sales and enhance customer experience.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Implement CRM systems to better understand and serve your customers.",
      color: "text-dark-pastel-red",
    },
    {
      icon: DollarSign,
      title: "Financial Operations",
      description: "Streamline financial processes and improve cash flow management.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: BarChart,
      title: "Performance Monitoring",
      description: "Track and analyze operational metrics to identify improvement opportunities.",
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Comprehensive Business Operations
          </h2>
          <p className="text-lg text-muted-foreground">
            Optimize every aspect of your business operations with our comprehensive solutions. From inventory
            management to customer relations, we help you create efficient, scalable processes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {operations.map((operation, index) => (
              <Card key={index} className="glass-card p-4 flex items-start space-x-4">
                <operation.icon className={`h-8 w-8 ${operation.color} shrink-0`} />
                <div>
                  <CardTitle className="text-xl font-semibold mb-1">{operation.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{operation.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business-operations-KaqXxrW5JQR3hQTaP8tRSn8zjHijDg.webp" // Added business operations image
            alt="Business Operations Illustration"
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
        </div>
      </div>
    </Section>
  )
}
