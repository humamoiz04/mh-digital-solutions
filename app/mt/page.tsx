import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Montana Digital Marketing & Web Services | MH Digital Solution",
  description:
    "Comprehensive digital marketing, web design, and SEO services for Montana businesses. AI automation, PPC, social media, and more.",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/mt",
  },
  openGraph: {
    title: "Montana Digital Marketing & Web Services",
    description: "Professional digital solutions for Montana businesses",
    url: "https://www.mhdigitalsolution.com/mt",
    type: "website",
  },
}

export default function MontanaPage() {
  return (
    <div className="relative z-10">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Digital Marketing & Web Services for Montana
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Serving businesses across Montana with comprehensive digital marketing, web development, AI automation,
              and SEO services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Our Montana Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>AI Automation & Workflow Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>SEO Optimization for Local & National</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>Web Design & Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>Digital Marketing Campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>PPC & Social Media Marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">•</span>
                    <span>Content Marketing & Strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Why Montana Businesses Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>Local market expertise across Montana</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>Proven track record with results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>AI-powered solutions for growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>Personalized strategy for your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>Transparent reporting & support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-600 font-bold">✓</span>
                    <span>Measurable ROI & growth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Montana Service Areas</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We proudly serve businesses across Montana including Billings, Missoula, Great Falls, Bozeman, Helena,
                Butte, and many more communities. Whether you're in Billings or Glendive, we provide the same quality
                digital marketing services.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
              >
                <Link href="/local">
                  Explore All Montana Cities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Montana Business?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's discuss how AI automation and modern digital marketing can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
              >
                <Link href="/contact">Schedule Your Strategy Call</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services/ai-automation">Learn About AI Automation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
