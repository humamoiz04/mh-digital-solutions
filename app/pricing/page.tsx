"use client"

import { useState, useEffect } from "react"
import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Code, Megaphone, Palette, Users } from "lucide-react"
import Link from "next/link"
import { EmailGate } from "@/components/email-gate"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  const [hasAccess, setHasAccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  const servicePricing = {
    webDevelopment: {
      title: "Web Development Services",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      packages: [
        {
          name: "Starter Website",
          price: "$1,499",
          originalPrice: "$4,999",
          features: [
            "5-page responsive website",
            "Mobile-optimized design",
            "Contact form integration",
            "Basic SEO setup",
            "1 month free maintenance",
            "FREE: SSL certificate",
            "FREE: Domain setup",
          ],
        },
        {
          name: "Business Website",
          price: "$2,999",
          originalPrice: "$9,999",
          popular: true,
          features: [
            "10-page custom website",
            "CMS integration",
            "E-commerce ready",
            "Advanced SEO optimization",
            "Analytics setup",
            "3 months free maintenance",
            "FREE: Logo design",
            "FREE: Social media integration",
          ],
        },
        {
          name: "Enterprise Solution",
          price: "$7,999",
          originalPrice: "$24,999",
          features: [
            "Unlimited pages",
            "Custom web application",
            "Database integration",
            "API development",
            "Advanced security",
            "6 months free maintenance",
            "FREE: Mobile app",
            "FREE: Cloud hosting setup",
          ],
        },
      ],
    },
    socialMedia: {
      title: "Social Media Management",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      packages: [
        {
          name: "Social Starter",
          price: "$599/mo",
          originalPrice: "$1,999/mo",
          features: [
            "2 social platforms",
            "12 posts per month",
            "Basic graphics design",
            "Community management",
            "Monthly analytics report",
            "FREE: Content calendar",
            "FREE: Hashtag research",
          ],
        },
        {
          name: "Social Pro",
          price: "$1,199/mo",
          originalPrice: "$3,999/mo",
          popular: true,
          features: [
            "4 social platforms",
            "20 posts per month",
            "Custom graphics & videos",
            "Influencer outreach",
            "Weekly analytics reports",
            "Ad campaign management",
            "FREE: Brand guidelines",
            "FREE: Competitor analysis",
          ],
        },
        {
          name: "Social Enterprise",
          price: "$2,499/mo",
          originalPrice: "$8,299/mo",
          features: [
            "All major platforms",
            "Daily posting",
            "Video content creation",
            "24/7 community management",
            "Real-time analytics",
            "Advanced ad campaigns",
            "FREE: Social media audit",
            "FREE: Crisis management",
          ],
        },
      ],
    },
    contentCreation: {
      title: "Content Creation Services",
      icon: Palette,
      color: "from-purple-500 to-indigo-500",
      packages: [
        {
          name: "Content Essentials",
          price: "$799/mo",
          originalPrice: "$2,699/mo",
          features: [
            "4 blog posts per month",
            "SEO optimization",
            "Keyword research",
            "Basic graphics",
            "Email newsletter",
            "FREE: Content strategy",
            "FREE: Editorial calendar",
          ],
        },
        {
          name: "Content Pro",
          price: "$1,599/mo",
          originalPrice: "$5,299/mo",
          popular: true,
          features: [
            "8 blog posts per month",
            "Video content creation",
            "Infographic design",
            "Social media content",
            "Email automation",
            "Landing page copy",
            "FREE: Brand voice guide",
            "FREE: Content audit",
          ],
        },
        {
          name: "Content Enterprise",
          price: "$3,199/mo",
          originalPrice: "$10,699/mo",
          features: [
            "Unlimited content",
            "Multi-format content",
            "Advanced video production",
            "Podcast production",
            "White papers & eBooks",
            "Content distribution",
            "FREE: Content team",
            "FREE: Performance tracking",
          ],
        },
      ],
    },
    otherServices: {
      title: "Other Digital Services",
      icon: Megaphone,
      color: "from-green-500 to-emerald-500",
      packages: [
        {
          name: "SEO Optimization",
          price: "$899/mo",
          originalPrice: "$2,999/mo",
          features: [
            "Keyword research & strategy",
            "On-page optimization",
            "Technical SEO audit",
            "Local SEO setup",
            "Monthly reporting",
            "FREE: Google My Business setup",
            "FREE: Site speed optimization",
          ],
        },
        {
          name: "PPC Management",
          price: "$1,299/mo",
          originalPrice: "$4,299/mo",
          features: [
            "Google Ads management",
            "Facebook Ads campaigns",
            "Landing page optimization",
            "A/B testing",
            "Conversion tracking",
            "FREE: Ad account setup",
            "FREE: Competitor analysis",
          ],
        },
        {
          name: "AI & Automation",
          price: "$2,199/mo",
          originalPrice: "$7,299/mo",
          features: [
            "Custom AI chatbot",
            "Process automation",
            "CRM integration",
            "Email automation",
            "Analytics dashboard",
            "FREE: Workflow analysis",
            "FREE: Training & support",
          ],
        },
      ],
    },
  }

  useEffect(() => {
    const accessData = localStorage.getItem("pricingAccess")
    if (accessData) {
      const { timestamp } = JSON.parse(accessData)
      const hoursPassed = (Date.now() - timestamp) / (1000 * 60 * 60)
      if (hoursPassed < 24) {
        setHasAccess(true)
      }
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!hasAccess) {
    return <EmailGate onUnlock={() => setHasAccess(true)} />
  }

  return (
    <div className="relative z-10">
      <div className="bg-gradient-to-r from-red-600 via-fuchsia-600 to-pink-600 text-white py-3 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <span aria-hidden="true">✨</span>
            <span>FLASH SALE: Up to 70% OFF All Plans + FREE $500 Bonus Package!</span>
            <span aria-hidden="true">✨</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-medium">
            <span>
              Limited Time: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s remaining
            </span>
            <span>FREE Consultation Worth $500</span>
            <span>Setup in 24 Hours</span>
          </div>
        </div>
      </div>

      <Section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 mb-4">
            🎉 Exclusive Access Unlocked - Limited Time Only!
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">Professional Digital Services Pricing</h1>
          <p className="text-lg text-muted-foreground mb-2">
            Transform your business with our comprehensive digital solutions
          </p>
          <p className="text-sm text-fuchsia-600 font-semibold">
            ⚡ Special Launch Pricing - Save up to 70% + Bonus Features Worth $1000+
          </p>
        </div>

        {Object.entries(servicePricing).map(([key, service]) => (
          <div key={key} className="mb-16">
            <div className="text-center mb-8">
              <div
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${service.color} text-white mb-4`}
              >
                <service.icon className="h-6 w-6" />
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {service.packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`glass-card flex flex-col relative transition-all duration-300 hover:scale-105 ${
                    pkg.popular ? "border-fuchsia-500 shadow-2xl shadow-fuchsia-500/20 scale-105" : "hover:shadow-xl"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-4 py-1">
                        MOST POPULAR
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {pkg.originalPrice && (
                        <span className="text-lg text-red-500 line-through mr-2">{pkg.originalPrice}</span>
                      )}
                      <span className="text-4xl font-extrabold text-foreground">{pkg.price}</span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle
                            className={`h-5 w-5 ${feature.startsWith("FREE:") ? "text-green-500" : "text-fuchsia-500"} colorful-icon`}
                          />
                          <span className={feature.startsWith("FREE:") ? "font-semibold text-green-600" : ""}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <Link href="/contact" className="w-full">
                      <Button className="gradient-button w-full text-lg py-3 hover:shadow-lg transition-all duration-300">
                        Get Started - SAVE 70%!
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Add-ons */}
        <div className="text-center mt-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Popular Add‑ons</h3>
            <p className="text-muted-foreground mb-8">Enhance any plan with these optional services.</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="glass-card p-6">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg font-semibold">Advanced Analytics Setup</CardTitle>
                  <CardDescription>GA4 + Tag Manager + Custom Dashboards</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-foreground mb-4">$399 one‑time</div>
                  <Link href="/contact">
                    <Button className="w-full">Add to Plan</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="glass-card p-6">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg font-semibold">Priority Support</CardTitle>
                  <CardDescription>24/7 Slack channel + 4h SLA</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-foreground mb-4">$199/mo</div>
                  <Link href="/contact">
                    <Button className="w-full bg-transparent" variant="outline">
                      Add to Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="glass-card p-6">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg font-semibold">Conversion Copy Refresh</CardTitle>
                  <CardDescription>Homepage + 1 Landing Page</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-foreground mb-4">$799 one‑time</div>
                  <Link href="/contact">
                    <Button className="w-full">Add to Plan</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">🛡️ 100% Satisfaction Guarantee</h3>
            <p className="text-muted-foreground mb-6">
              Not happy with our service? Get a full refund within 30 days. No questions asked.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>✅ 30-Day Money Back</span>
              <span>✅ No Setup Fees</span>
              <span>✅ Cancel Anytime</span>
              <span>✅ 24/7 Support</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
