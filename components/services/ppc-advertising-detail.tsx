import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { DollarSign, Target, BarChart, Lightbulb, Megaphone, ShieldCheck } from "lucide-react"

export function PpcAdvertisingDetail() {
  const solutions = [
    {
      icon: DollarSign,
      title: "Google Ads Management",
      description: "Expert management of your Google Search, Display, and Shopping campaigns.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Target,
      title: "Social Media Ads",
      description: "Targeted advertising campaigns on platforms like Facebook, Instagram, and LinkedIn.",
      color: "text-dark-pastel-green",
    },
    {
      icon: BarChart,
      title: "Ad Copy & Creative Development",
      description: "Crafting compelling ad copy and visuals that convert.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Lightbulb,
      title: "Keyword Research & Bidding Strategy",
      description: "Identifying profitable keywords and optimizing bids for maximum ROI.",
      color: "text-dark-pastel-red",
    },
    {
      icon: Megaphone,
      title: "Landing Page Optimization",
      description: "Designing and optimizing landing pages for higher conversion rates.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: ShieldCheck,
      title: "Performance Monitoring & Reporting",
      description: "Continuous tracking and transparent reporting of campaign performance.",
      color: "text-dark-pastel-teal",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">High-Impact PPC Advertising</h2>
          <p className="text-lg text-muted-foreground">
            Drive immediate, targeted traffic to your website with our expert PPC advertising services. We create and
            manage campaigns that deliver maximum ROI and accelerate your business growth.
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
            src="/images/ppc-advertising.webp"
            alt="PPC Advertising Illustration"
            fill
            className="z-10 object-contain"
          />
        </div>
      </div>
    </Section>
  )
}
