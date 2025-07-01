import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, TrendingUp, MapPin, Users, DollarSign, Star } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Local Detailing Business Scales to National Success - Case Study | MH Digital Solutions",
  description:
    "Discover how we helped a local auto detailing business achieve 1200% lead growth and expand to all 50 states through strategic digital marketing and franchise development.",
  keywords:
    "case study, local business growth, franchise development, auto detailing marketing, national expansion, digital transformation",
}

export default function LocalToNationalExpansionCaseStudy() {
  return (
    <div className="min-h-screen pt-16 bg-transparent">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-gradient-to-r from-teal-600 to-blue-600 text-white border-0 mb-6">
                🚗 Automotive Services Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">From Local Shop to</span>{" "}
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  National Franchise
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                How we helped Premium Auto Detailing Co. achieve 1200% lead growth and expand to all 50 states in just
                18 months
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="calendly-button"
                >
                  Get Similar Results
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link href="/case-studies">
                  <Button variant="outline" size="lg" className="rounded-full">
                    View More Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Challenge Section */}
      <ScrollAnimation>
        <section className="py-16 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-red-600">The Challenge</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Premium Auto Detailing Co. was a family-owned business that had built an exceptional reputation in
                    their local neighborhood. With consistent 5-star reviews and word-of-mouth referrals, they knew
                    their service quality was outstanding.
                  </p>
                  <p>However, they faced several critical limitations:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Limited to serving only customers within a 10-mile radius
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Inconsistent lead generation dependent on referrals
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      No scalable business model for expansion
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Minimal online presence despite excellent service quality
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Revenue plateaued due to geographic constraints
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/business-operations.jpeg"
                  alt="Local Auto Detailing Business"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Solution Section */}
      <ScrollAnimation>
        <section className="py-16 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Strategic Solution</h2>
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    We developed a comprehensive digital transformation strategy designed to scale their proven service
                    model nationally while maintaining quality standards.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">National SEO Strategy</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Optimized for "auto detailing" keywords in 50+ major cities across the United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Multi-Market Google Ads</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Targeted PPC campaigns across multiple geographic markets with location-specific landing pages
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Social Media Showcase</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Before/after transformation content that went viral, generating organic reach and engagement
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Franchise-Ready Website</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Scalable website architecture supporting multiple locations with centralized management
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Lead Management System</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Automated system to handle and distribute leads across multiple franchise locations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <Card className="glass border-0 p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Implementation Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        1
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Months 1-3</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Website development & initial SEO optimization
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        2
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Months 4-8</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Multi-market PPC campaigns & social media growth
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        3
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Months 9-18</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Franchise development & national expansion
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Section */}
      <ScrollAnimation>
        <section className="py-16 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-green-600">Extraordinary Results</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                18 months of strategic digital marketing delivered transformational growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="glass border-0 text-center p-6">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-green-600 mb-2">1200%</div>
                <div className="text-gray-600 dark:text-gray-400">Increase in Qualified Leads</div>
              </Card>
              <Card className="glass border-0 text-center p-6">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 mb-2">50</div>
                <div className="text-gray-600 dark:text-gray-400">States Expanded To</div>
              </Card>
              <Card className="glass border-0 text-center p-6">
                <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-600 mb-2">800%</div>
                <div className="text-gray-600 dark:text-gray-400">Revenue Growth</div>
              </Card>
              <Card className="glass border-0 text-center p-6">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-400">Franchise Locations</div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="glass border-0 p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Key Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Achieved #1 rankings for "auto detailing" in 15+ major cities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Developed successful franchise model with proven ROI</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Created scalable lead distribution system</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Maintained 4.9-star average rating across all locations</span>
                  </li>
                </ul>
              </Card>

              <Card className="glass border-0 p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Client Testimonial</h3>
                <div className="space-y-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-300 italic">
                    "MH Digital Solutions didn't just help us grow - they transformed our entire business model. We went
                    from a small local shop to a national franchise operation. The strategic approach and execution were
                    flawless."
                  </blockquote>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    — Robert Martinez, Founder & CEO, Premium Auto Detailing Co.
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-16 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to Scale Your Local Business Nationally?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover how we can help your business achieve similar transformational growth with our proven digital
                marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="calendly-button"
                >
                  Get Your Growth Strategy
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link href="/case-studies">
                  <Button variant="outline" size="lg" className="rounded-full">
                    View More Success Stories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
