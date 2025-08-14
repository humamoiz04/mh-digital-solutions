import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { GitBranch, Zap, Shield, Monitor, Workflow, Cpu } from "lucide-react"

export function DevOpsSolutionsSection() {
  const solutions = [
    {
      icon: GitBranch,
      title: "CI/CD Pipeline",
      description: "Implement continuous integration and deployment for faster, reliable releases.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce errors.",
      color: "text-dark-pastel-green",
    },
    {
      icon: Shield,
      title: "Security Integration",
      description: "Embed security practices throughout the development and deployment lifecycle.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Monitor,
      title: "Monitoring & Logging",
      description: "Comprehensive monitoring and logging solutions for system visibility and troubleshooting.",
      color: "text-dark-pastel-red",
    },
    {
      icon: Workflow,
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure through code for consistency and scalability.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: Cpu,
      title: "Performance Optimization",
      description: "Optimize application and infrastructure performance for better user experience.",
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">DevOps Solutions & Services</h2>
          <p className="text-lg text-muted-foreground">
            Streamline your development and operations with our comprehensive DevOps solutions. We help you build,
            deploy, and maintain applications more efficiently while ensuring reliability and security.
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gradient-devops-illustration_23-2149373211-TTO6m.webp"
            alt="DevOps Solutions Illustration"
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
        </div>
      </div>
    </Section>
  )
}
