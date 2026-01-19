import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { TrendingUp, Users, DollarSign, Lightbulb } from "lucide-react"

export function SeoBenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Organic Traffic",
      description: "Attract more visitors who are actively searching for your products or services.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Users,
      title: "Higher Quality Leads",
      description:
        "Reach customers who are genuinely interested in what you offer, leading to better conversion rates.",
      color: "text-dark-pastel-green",
    },
    {
      icon: DollarSign,
      title: "Improved ROI",
      description: "SEO offers a cost-effective marketing channel with long-term returns.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Lightbulb,
      title: "Enhanced Brand Authority",
      description: "Establish your business as a trusted leader in your industry.",
      color: "text-dark-pastel-orange",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <Image
            src="/images/digital-marketing-overview.webp"
            alt="SEO Benefits Illustration"
            fill
            className="z-10 object-contain"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">The Tangible Benefits of SEO</h2>
          <p className="text-lg text-muted-foreground">
            SEO is more than just rankings; it's about driving real business value. Our strategies are designed to
            deliver a multitude of benefits that contribute to your overall success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card p-4 flex items-start space-x-4">
                <benefit.icon className={`h-8 w-8 ${benefit.color} shrink-0`} />
                <div>
                  <CardTitle className="text-xl font-semibold mb-1">{benefit.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{benefit.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
