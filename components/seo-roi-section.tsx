import { Section } from "@/components/Section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { DollarSign, TrendingUp, Users, Clock } from "lucide-react"

export function SeoRoiSection() {
  const benefits = [
    {
      title: "Increased Organic Traffic",
      description: "Attract more visitors to your website who are actively searching for your products or services.",
      icon: TrendingUp,
      color: "text-dark-pastel-blue",
    },
    {
      title: "Higher Conversion Rates",
      description: "Convert more visitors into leads and customers with optimized content and user experience.",
      icon: DollarSign,
      color: "text-dark-pastel-green",
    },
    {
      title: "Improved Brand Authority",
      description: "Establish your brand as a trusted leader in your industry through top search rankings.",
      icon: Users,
      color: "text-dark-pastel-purple",
    },
    {
      title: "Long-Term ROI",
      description: "Enjoy sustainable results and a strong return on investment that grows over time.",
      icon: Clock,
      color: "text-dark-pastel-red",
    },
  ]

  return (
    <Section className="py-16 md:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">The Power of SEO: Driving Real ROI</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        SEO is not just about rankings; it's about delivering measurable business results. Our strategies focus on
        generating a strong return on your investment.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="glass-card flex flex-col items-center p-6 text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <benefit.icon className={`h-12 w-12 ${benefit.color}`} />
            </div>
            <CardTitle className="mb-2 text-2xl font-semibold text-foreground">{benefit.title}</CardTitle>
            <CardContent className="text-muted-foreground">{benefit.description}</CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Image
          src="/images/seo-roi-illustration.webp"
          alt="SEO ROI Illustration"
          width={800}
          height={450}
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </Section>
  )
}
