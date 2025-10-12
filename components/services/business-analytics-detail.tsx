import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { BarChart, Database, Lightbulb, TrendingUp, Users, PieChart } from "lucide-react"

export function BusinessAnalyticsDetail() {
  const solutions = [
    {
      icon: BarChart,
      title: "Data Collection & Integration",
      description: "Gathering and consolidating data from various sources for comprehensive analysis.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Database,
      title: "Data Warehousing",
      description: "Designing and implementing robust data warehouses for efficient storage and retrieval.",
      color: "text-dark-pastel-green",
    },
    {
      icon: Lightbulb,
      title: "Predictive Analytics",
      description: "Forecasting future trends and outcomes to inform strategic decisions.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence (BI) Dashboards",
      description: "Creating interactive dashboards for real-time insights and performance monitoring.",
      color: "text-dark-pastel-red",
    },
    {
      icon: Users,
      title: "Customer Analytics",
      description: "Understanding customer behavior to personalize experiences and improve retention.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: PieChart,
      title: "Reporting & Visualization",
      description: "Presenting complex data in clear, actionable reports and visualizations.",
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">Actionable Business Analytics</h2>
          <p className="text-lg text-muted-foreground">
            Transform your raw data into actionable insights with our advanced business analytics services. Make
            informed decisions that drive growth and optimize performance.
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
            src="/images/design-mode/business-analytics-3d.webp"
            alt="Business Analytics 3D Visualization"
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
        </div>
      </div>
    </Section>
  )
}
