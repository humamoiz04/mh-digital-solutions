import { Section } from "@/components/Section"
import { Hero } from "@/components/hero"
import { MarketingAgencySection } from "@/components/marketing-agency-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BusinessObjectivesSection } from "@/components/business-objectives-section"
import { ProblemsWeSolveSection } from "@/components/problems-we-solve-section"
import { FeaturesSection } from "@/components/features-section"
import { ClientNetworkSection } from "@/components/client-network-section"
import { ServicesSection } from "@/components/services-section"
import { CtaSection } from "@/components/cta-section"
import { PortfolioShowcaseSection } from "@/components/portfolio-showcase-section"
import { PartnerBadges } from "@/components/partner-badges" // fix wrong import path and symbol for partner badges
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileText } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Agency | MH Digital Solutions - AI-Powered Growth",
  description:
    "Leading digital marketing agency specializing in SEO, PPC, social media, and web development. Empower your business with proven strategies and measurable ROI.",
  keywords:
    "digital marketing agency, SEO services, PPC advertising, social media marketing, web development, AI automation, business growth",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com",
  },
  openGraph: {
    title: "Digital Marketing Agency | MH Digital Solutions - AI-Powered Growth",
    description:
      "Leading digital marketing agency specializing in SEO, PPC, social media, and web development. Trusted by 500+ clients worldwide.",
    url: "https://www.mhdigitalsolution.com",
    siteName: "MH Digital Solution",
    images: [
      {
        url: "https://www.mhdigitalsolution.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "MH Digital Solution - Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="relative z-10">
      <StructuredData
        type="Service"
        data={{
          serviceType: "Digital Marketing Services",
          description:
            "Comprehensive digital marketing solutions including SEO, PPC, social media marketing, and web development",
          provider: {
            "@type": "Organization",
            name: "MH Digital Solution",
            telephone: "+17072491222",
            email: "info@mhdigitalsolution.com",
          },
        }}
      />

      <Section glass>
        <Hero />
      </Section>
      <Section glass>
        <MarketingAgencySection />
      </Section>
      <Section glass>
        <ServicesSection />
      </Section>
      <Section glass>
        <BusinessObjectivesSection />
      </Section>
      <Section glass>
        <ProblemsWeSolveSection />
      </Section>
      <Section glass>
        <FeaturesSection />
      </Section>

      <Section glass>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Latest Insights & Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we're helping businesses transform their digital presence with cutting-edge strategies and
            proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-fuchsia-600" />
              <h3 className="text-xl font-semibold">Featured Articles</h3>
            </div>
            <div className="space-y-4">
              <Card className="glass-card hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Link
                    href="/blog/ai-automation-revolution-2024"
                    className="block hover:text-fuchsia-600 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">
                      AI Automation Revolution 2024: Transform Your Business Operations
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Discover how AI automation is revolutionizing business processes and driving unprecedented
                      efficiency gains.
                    </p>
                  </Link>
                </CardContent>
              </Card>
              <Card className="glass-card hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Link href="/blog/seo-strategies-2024" className="block hover:text-fuchsia-600 transition-colors">
                    <h4 className="font-semibold mb-2">SEO Strategies 2024: Dominate Search Rankings</h4>
                    <p className="text-sm text-muted-foreground">
                      Latest SEO techniques and strategies to boost your search engine visibility and drive organic
                      traffic.
                    </p>
                  </Link>
                </CardContent>
              </Card>
              <Card className="glass-card hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Link
                    href="/blog/mobile-app-development-trends-2024"
                    className="block hover:text-fuchsia-600 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">Mobile App Development Trends 2024</h4>
                    <p className="text-sm text-muted-foreground">
                      Explore the latest mobile app development trends shaping the future of digital experiences.
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-fuchsia-600" />
              <h3 className="text-xl font-semibold">Success Stories</h3>
            </div>
            <div className="space-y-4">
              <Card className="glass-card hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Link
                    href="/case-studies/techcorp-ai-automation"
                    className="block hover:text-fuchsia-600 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">TechCorp AI Automation: $2M Annual Savings</h4>
                    <p className="text-sm text-muted-foreground">
                      How we helped TechCorp achieve massive cost savings through intelligent AI automation solutions.
                    </p>
                  </Link>
                </CardContent>
              </Card>
              <Card className="glass-card hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Link
                    href="/case-studies/fitlife-gyms-scaling"
                    className="block hover:text-fuchsia-600 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">FitLife Gyms: 300% Growth Through Digital Marketing</h4>
                    <p className="text-sm text-muted-foreground">
                      Discover how our comprehensive digital strategy helped FitLife Gyms scale across multiple
                      locations.
                    </p>
                  </Link>
                </CardContent>
              </Card>
              <Card className="glass-card hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Link
                    href="/case-studies/healthcare-digital-transformation"
                    className="block hover:text-fuchsia-600 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">Healthcare Digital Transformation Success</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete digital transformation of a healthcare provider improving patient experience and
                      operational efficiency.
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
            >
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section glass>
        <PortfolioShowcaseSection />
      </Section>
      <Section glass>
        {/* <PartnerCertificationss /> */}
        <PartnerBadges />
      </Section>
      <Section glass>
        <ClientNetworkSection />
      </Section>
      <Section glass>
        <TestimonialsSection />
      </Section>
      <Section glass>
        <CtaSection />
      </Section>
    </div>
  )
}
