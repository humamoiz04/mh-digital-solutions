import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Feather, Lightbulb, Search, Megaphone, BarChart, BookOpen } from "lucide-react"

export function ContentMarketingDetail() {
  const solutions = [
    {
      icon: Feather,
      title: "Content Strategy Development",
      description: "Crafting a roadmap for compelling content that resonates with your audience.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Lightbulb,
      title: "Blog Post & Article Writing",
      description: "Creating engaging, SEO-friendly articles that drive traffic and authority.",
      color: "text-dark-pastel-green",
    },
    {
      icon: Search,
      title: "SEO Content Optimization",
      description: "Optimizing existing and new content for higher search engine rankings.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Megaphone,
      title: "Content Promotion & Distribution",
      description: "Ensuring your content reaches the right audience through various channels.",
      color: "text-dark-pastel-red",
    },
    {
      icon: BarChart,
      title: "Content Performance Analysis",
      description: "Tracking content effectiveness and refining strategies for better results.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: BookOpen,
      title: "E-books & Whitepapers",
      description: "Developing in-depth resources to establish thought leadership and capture leads.",
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">Strategic Content Marketing</h2>
          <p className="text-lg text-muted-foreground">
            Attract, engage, and convert your audience with high-quality, relevant content. Our content marketing
            services are designed to build your brand authority and drive organic growth.
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
            src="/images/design-mode/download%20%281%29.jpeg"
            alt="Content Marketing Strategy Illustration"
            fill
            className="z-10 object-contain"
          />
        </div>
      </div>
    </Section>
  )
}
