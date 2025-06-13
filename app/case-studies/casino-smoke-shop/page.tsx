import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, CheckCircle, ShoppingCart, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CasinoSmokeShopCaseStudy() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-gradient-to-r from-orange-600 to-amber-500 text-white border-0 mb-6">
                🏪 Retail Transformation Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">From Corner Shop to</span>{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Community Retail Destination
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                How we helped Casino Smoke Shop in Massachusetts increase foot traffic by 210% and grow monthly revenue
                by 185%
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-semibold">185% revenue growth in 6 months</span>
                </div>
              </div>
              <Link href="/contact" passHref>
                <Button className="bg-gradient-to-r from-orange-600 to-amber-500 hover:opacity-90 text-white">
                  Transform Your Retail Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/smoke-shop.png"
                alt="Casino Smoke Shop"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600 mb-8">
              Casino Smoke Shop, a small corner store in a Massachusetts neighborhood, was facing significant
              challenges:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  Declining foot traffic due to competition from larger stores and online retailers
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  Invisible to potential customers with zero online presence
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  Outdated inventory management resulting in overstock and product shortages
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  Limited customer data and no way to encourage repeat business
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <p className="text-lg text-gray-600 mb-8">We implemented a comprehensive retail transformation strategy:</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Digital Presence & Marketing</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Local SEO-optimized website with online inventory</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Google Business Profile with review generation system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Geo-targeted social media and digital ad campaigns</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">In-Store Experience Redesign</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Store layout optimization for improved customer flow</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Digital signage with rotating promotions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Premium product showcases and improved merchandising</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Business Operations Upgrade</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      POS system with inventory management and customer loyalty program
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Data-driven product selection based on local customer preferences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">SMS marketing for special promotions and new product alerts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Results</h2>
            <p className="text-lg text-gray-600 mb-8">
              Within 6 months, Casino Smoke Shop was transformed from a struggling corner store into a thriving
              community destination:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-md text-center">
                <Users className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-orange-600 mb-2">210%</div>
                <p className="text-gray-700">Increase in foot traffic</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-md text-center">
                <ShoppingCart className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-orange-600 mb-2">185%</div>
                <p className="text-gray-700">Revenue growth</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-md text-center">
                <Star className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-orange-600 mb-2">4.8★</div>
                <p className="text-gray-700">Online rating (up from 3.2)</p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Additional Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">
                    Built a loyalty program with 1,200+ members and 68% repeat purchase rate
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">
                    Reduced inventory costs by 23% while increasing product variety by 35%
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">
                    Expanded customer base with 40% of new customers coming from outside the immediate neighborhood
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Client Testimonial</h2>
            <blockquote className="text-2xl italic font-light text-gray-700 mb-8">
              "My shop was struggling to compete with big retailers and online stores. M&H Digital completely
              transformed our business. We now have customers coming from all over the area, and our loyal customers
              visit more frequently. This has been a game-changer for us."
            </blockquote>
            <div className="flex items-center justify-center">
              <div>
                <p className="font-semibold text-gray-900">Sam Rodriguez</p>
                <p className="text-gray-600">Owner, Casino Smoke Shop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Retail Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our retail transformation strategies can help you increase foot traffic, boost sales, and
            create a loyal customer base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-500 hover:opacity-90 text-white">
                Get Your Retail Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies" passHref>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
