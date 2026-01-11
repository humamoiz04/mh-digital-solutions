import type { Metadata } from "next"
import { Section } from "@/components/Section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, BarChart3, Rocket } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Zero to Hero Digital Package | Complete Business Launch | MH Digital",
  description:
    "Launch your business with our Zero to Hero package - website, branding, SEO, social media, and performance marketing all for $599/month. Includes AI chatbot, business plan, and more.",
  keywords: [
    "zero to hero business launch",
    "complete digital package",
    "small business startup",
    "digital marketing bundle",
  ],
}

export default function ZeroToHeroPage() {
  const features = [
    {
      icon: Rocket,
      title: "Website & Branding",
      description: "Professional 5-10 page website with logo, business cards, and brand guidelines",
    },
    {
      icon: Zap,
      title: "Social Media Management",
      description: "Full management of 4 social platforms with daily posting and engagement",
    },
    {
      icon: BarChart3,
      title: "SEO & Google Business",
      description: "Complete SEO optimization and Google Business Profile setup for local visibility",
    },
    {
      icon: Rocket,
      title: "Performance Marketing",
      description: "PPC campaigns, conversion optimization, and monthly performance reports",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business, market, and goals to create a customized digital strategy.",
    },
    {
      number: "02",
      title: "Website & Branding",
      description: "Professional website design, logo, business plan development, and brand guidelines.",
    },
    {
      number: "03",
      title: "SEO & Local Presence",
      description: "Optimize for search engines and set up your Google Business Profile for local visibility.",
    },
    {
      number: "04",
      title: "Social & Marketing",
      description: "Launch social media presence across 4 platforms with consistent, engaging content.",
    },
    {
      number: "05",
      title: "Performance Campaigns",
      description: "Run targeted PPC and performance marketing campaigns to drive immediate results.",
    },
    {
      number: "06",
      title: "Growth & Optimization",
      description: "Monthly analytics, optimization, and strategic adjustments for continuous growth.",
    },
  ]

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <Section className="py-20 md:py-32 text-center">
        <Badge className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-4 py-2 mb-6">
          🚀 Complete Business Launch Solution
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF00FF] to-[#00F0FF] text-transparent bg-clip-text">
          Zero to Hero Digital Package
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Transform your business from zero to thriving with our all-in-one digital solution. Everything you need to
          launch, grow, and dominate your market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white text-lg py-6 px-8"
            >
              Start Your Zero to Hero Journey - $599/mo
            </Button>
          </Link>
          <Link href="/tools/website-cost-calculator">
            <Button size="lg" variant="outline" className="text-lg py-6 px-8 bg-transparent">
              Compare Packages
            </Button>
          </Link>
        </div>
      </Section>

      {/* What's Included */}
      <Section className="py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">What's Included</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-card p-6 border-l-4 border-fuchsia-500 hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Detailed Features */}
      <Section className="py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Complete Feature List</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Web & Branding</h3>
              <ul className="space-y-3">
                {[
                  "Professional 5-10 page website",
                  "Mobile-optimized responsive design",
                  "Logo design",
                  "Business cards & flyers",
                  "Brand guidelines & style guide",
                  "Free SSL certificate & domain",
                  "CMS for easy updates",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Digital Marketing</h3>
              <ul className="space-y-3">
                {[
                  "SEO optimization & keyword research",
                  "Google Business Profile setup",
                  "Social Media Management (4 platforms)",
                  "Daily social media posting",
                  "Content creation (graphics & captions)",
                  "PPC & Performance marketing",
                  "Email marketing setup",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Advanced Features</h3>
              <ul className="space-y-3">
                {[
                  "AI chatbot integration",
                  "Analytics setup & reporting",
                  "Business plan development",
                  "Competitor analysis",
                  "Monthly strategy sessions",
                  "Conversion rate optimization",
                  "Dedicated account manager",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Support & Bonuses</h3>
              <ul className="space-y-3">
                {[
                  "24/7 customer support",
                  "3 months premium support included",
                  "Free Google Analytics setup",
                  "Free brand consultation",
                  "Free organic keyword research",
                  "Priority support channel",
                  "Monthly optimization reviews",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="glass-card p-6 relative group hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-fuchsia-500/30 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-fuchsia-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing Comparison */}
      <Section className="py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Zero to Hero is Your Best Value</h2>
        <div className="max-w-5xl mx-auto">
          <Card className="glass-card p-8 border-2 border-fuchsia-500">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-red-500 mb-4">Traditional Approach</h3>
                <ul className="space-y-3">
                  {[
                    "Hire freelancer for website: $2,000+",
                    "Hire designer for logo: $500+",
                    "Hire SEO specialist: $500/mo",
                    "Hire social media manager: $300/mo",
                    "PPC management: $200/mo",
                    "NO integrated strategy",
                    "Coordination headaches",
                    "TOTAL COST: $3,500+ setup + $1,000+/mo",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-red-500 mt-1">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Zero to Hero Package</h3>
                <ul className="space-y-3">
                  {[
                    "Complete website & branding ✓",
                    "Professional logo design ✓",
                    "SEO & Google Business ✓",
                    "Social media management ✓",
                    "PPC & performance marketing ✓",
                    "FULLY integrated strategy ✓",
                    "Single point of contact ✓",
                    "ONLY $599/month all-inclusive",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-green-400 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Launch Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of businesses that have already transformed their online presence with Zero to Hero. Start in
            24 hours.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white text-lg py-6 px-12 shadow-lg shadow-fuchsia-500/50"
            >
              Get Started Now - Free Consultation Included
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  )
}
