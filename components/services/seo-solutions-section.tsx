import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { BarChart, Lightbulb, Megaphone, Search, ShieldCheck, TrendingUp } from "lucide-react"

export function SeoSolutionsSection() {
  const solutions = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description: "Identify high-impact keywords to attract your target audience.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Lightbulb,
      title: "On-Page SEO Optimization",
      description: "Optimize your website content and structure for search engines.",
      color: "text-dark-pastel-green",
    },
    {
      icon: TrendingUp,
      title: "Off-Page SEO & Link Building",
      description: "Build high-quality backlinks to boost your domain authority.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: BarChart,
      title: "Technical SEO Audit",
      description: "Ensure your website's technical foundation supports SEO best practices.",
      color: "text-dark-pastel-red",
    },
    {
      icon: Megaphone,
      title: "Local SEO Services",
      description: "Dominate local search results and attract nearby customers.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: ShieldCheck,
      title: "SEO Content Creation",
      description: "Develop engaging, SEO-friendly content that ranks and converts.",
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Comprehensive SEO Solutions for Digital Growth
          </h2>
          <p className="text-lg text-muted-foreground">
            Our tailored SEO strategies are designed to elevate your online presence, drive organic traffic, and convert
            visitors into loyal customers. We focus on sustainable growth and measurable results.
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%283%29-kiISwCuhlKPKaFn0zkMdOiPVwd3n8L.jpeg"
            alt="SEO Optimization Process Illustration"
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
        </div>
      </div>
    </Section>
  )
}
