import type { Metadata } from "next"
import { Section } from "@/components/Section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Users, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Prestige Marine & Auto Care Case Study | Business Transformation | MH Digital",
  description:
    "How we transformed Prestige Marine & Auto Care from startup to thriving business with our Zero to Hero package. 340% growth in 6 months.",
  keywords: ["case study", "business growth", "digital transformation", "marine auto care"],
}

export default function PrestigeMarineCaseStudy() {
  const results = [
    { metric: "340%", label: "Business Growth", icon: TrendingUp },
    { metric: "892", label: "Monthly Leads", icon: Target },
    { metric: "4.8/5", label: "Customer Rating", icon: Users },
    { metric: "6", label: "Months to Success", icon: CheckCircle },
  ]

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <Section className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 mb-6 inline-block">
            Case Study: From Zero to Hero
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            How Prestige Marine & Auto Care Grew 340% in 6 Months
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            A startup with no online presence transformed into a thriving business with our Zero to Hero digital
            package.
          </p>

          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8 border-2 border-cyan-500/30">
            <Image
              src="/images/prestige-20marine-20logo.webp"
              alt="Prestige Marine & Auto Care Logo"
              fill
              className="object-contain p-8 bg-gradient-to-br from-slate-900 to-slate-800"
            />
          </div>
        </div>
      </Section>

      {/* Results Overview */}
      <Section className="py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Remarkable Results in 6 Months</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <Card
              key={index}
              className="glass-card p-6 text-center border-t-2 border-fuchsia-500 hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300"
            >
              <result.icon className="h-12 w-12 mx-auto mb-4 text-fuchsia-500" />
              <div className="text-4xl font-bold text-cyan-400 mb-2">{result.metric}</div>
              <p className="text-slate-300 font-semibold">{result.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* The Challenge */}
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge: Starting from Zero</h2>
          <Card className="glass-card p-8 border-l-4 border-red-500">
            <div className="space-y-4">
              <p className="text-lg text-slate-300">
                Prestige Marine & Auto Care was a newly launched service business with a passion for excellence but no
                online presence. Their situation was common:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No website - potential customers couldn't find them online</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No branding - business name existed but no visual identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No Google presence - not appearing in local searches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No marketing strategy - relying only on word-of-mouth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Limited customer reach - couldn't scale beyond local referrals</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* Our Solution */}
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Solution: Zero to Hero Package</h2>
          <div className="space-y-6">
            <Card className="glass-card p-6 border-l-4 border-fuchsia-500">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Month 1-2: Foundation Building</h3>
              <ul className="space-y-2 text-slate-300">
                {[
                  "✓ Designed professional website showcasing services",
                  "✓ Created premium logo and brand identity",
                  "✓ Set up Google Business Profile with complete optimization",
                  "✓ Developed business plan and marketing strategy",
                  "✓ Designed business cards and promotional materials",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Card>

            <Card className="glass-card p-6 border-l-4 border-cyan-500">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Month 3-4: Launch & Visibility</h3>
              <ul className="space-y-2 text-slate-300">
                {[
                  "✓ Launched website with SEO optimization",
                  "✓ Started social media presence (Instagram, Facebook, Google)",
                  "✓ Implemented local SEO strategy targeting service area",
                  "✓ Began PPC campaigns targeting high-intent keywords",
                  "✓ Set up email marketing and customer follow-up system",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Card>

            <Card className="glass-card p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Month 5-6: Growth & Optimization</h3>
              <ul className="space-y-2 text-slate-300">
                {[
                  "✓ Optimized PPC campaigns based on conversion data",
                  "✓ Published 12 SEO-optimized blog posts",
                  "✓ Grew social media to 5,000+ followers",
                  "✓ Implemented AI chatbot for customer inquiries",
                  "✓ Developed customer reviews and testimonials strategy",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Before & After */}
      <Section className="py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Before & After Transformation</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="glass-card p-8 border-2 border-red-500/50">
            <h3 className="text-2xl font-bold text-red-500 mb-6">BEFORE</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>No online presence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Monthly revenue: $8,000</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>0 website visitors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>0 leads from online</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>100% word-of-mouth</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>No growth strategy</span>
              </li>
            </ul>
          </Card>

          <Card className="glass-card p-8 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold text-green-400 mb-6">AFTER (6 Months)</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Full digital ecosystem</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Monthly revenue: $35,200 (+340%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>22,000+ monthly website visitors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>892 qualified leads monthly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>65% of revenue from online</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Scalable growth system</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Key Metrics */}
      <Section className="py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">The Numbers Behind the Success</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Website Performance</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex justify-between">
                <span>Monthly Visitors:</span>
                <span className="font-bold text-green-400">22,000+</span>
              </li>
              <li className="flex justify-between">
                <span>Organic Traffic:</span>
                <span className="font-bold text-green-400">14,000+</span>
              </li>
              <li className="flex justify-between">
                <span>Google Position:</span>
                <span className="font-bold text-green-400">#1 Local</span>
              </li>
              <li className="flex justify-between">
                <span>Conversion Rate:</span>
                <span className="font-bold text-green-400">7.2%</span>
              </li>
            </ul>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Lead Generation</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex justify-between">
                <span>Monthly Leads:</span>
                <span className="font-bold text-green-400">892</span>
              </li>
              <li className="flex justify-between">
                <span>Conversion Rate:</span>
                <span className="font-bold text-green-400">12.4%</span>
              </li>
              <li className="flex justify-between">
                <span>Cost Per Lead:</span>
                <span className="font-bold text-green-400">$18</span>
              </li>
              <li className="flex justify-between">
                <span>ROI:</span>
                <span className="font-bold text-green-400">547%</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Card className="glass-card p-12 border-2 border-fuchsia-500 text-center">
            <div className="mb-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>
            <blockquote className="text-2xl font-semibold text-slate-200 mb-6 italic">
              "The Zero to Hero package transformed our business overnight. From a startup with zero online presence to
              the #1 ranked service provider in our area - all in 6 months. This isn't just a marketing service, it's a
              complete business transformation. Highly recommend!"
            </blockquote>
            <div>
              <p className="font-bold text-white mb-1">Owner, Prestige Marine & Auto Care</p>
              <p className="text-slate-400">Served by MH Digital Solution</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Key Takeaways */}
      <Section className="py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why This Strategy Works</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Integrated Approach",
              description: "Website, branding, SEO, social, and PPC all work together - not in silos",
            },
            {
              title: "Professional Branding",
              description: "Strong visual identity builds trust and differentiates from competitors",
            },
            {
              title: "Local SEO Dominance",
              description: "Google Business Profile + on-page SEO = #1 local visibility",
            },
            {
              title: "Multi-Channel Marketing",
              description: "Reaching customers where they are: social, search, and organic",
            },
            {
              title: "Data-Driven Optimization",
              description: "Continuous testing and refinement based on real performance metrics",
            },
            {
              title: "Scalable Systems",
              description: "Once established, the system generates leads on autopilot",
            },
          ].map((item, i) => (
            <Card key={i} className="glass-card p-6 border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">{item.title}</h3>
              <p className="text-slate-300">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 md:py-24 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Your Business Could Be Next</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Prestige Marine & Auto Care grew 340% with our Zero to Hero package. Imagine what it could do for your
          business.
        </p>
        <Link href="/services/zero-to-hero">
          <Button
            size="lg"
            className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white text-lg py-6 px-12 shadow-lg shadow-fuchsia-500/50"
          >
            Start Your Transformation - Book Free Consultation
          </Button>
        </Link>
      </Section>
    </div>
  )
}
