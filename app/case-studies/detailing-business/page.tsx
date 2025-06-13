import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, CheckCircle, MapPin, Users, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DetailingBusinessCaseStudy() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-500 text-white border-0 mb-6">
                🚗 Business Scaling Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">From Local Shop to</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Nationwide Mobile Detailing
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                How we helped a single-location auto detailing business scale to 23 cities with a 600% revenue increase
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-semibold">600% revenue growth in 18 months</span>
                </div>
              </div>
              <Link href="/contact" passHref>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white">
                  Scale Your Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/car-detailing.png"
                alt="Mobile Auto Detailing"
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
              Elite Auto Detailing, a small mobile detailing business in Boston, was struggling with several challenges:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  Limited to serving only one geographic area despite high demand from surrounding cities
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  Manual booking system couldn't handle increased customer volume efficiently
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  No standardized operating procedures made training new technicians difficult and time-consuming
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  Struggling to manage inventory across multiple vehicles and locations
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
            <p className="text-lg text-gray-600 mb-8">
              We implemented a comprehensive business scaling strategy with these key components:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Custom mobile booking platform and customer app</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Automated scheduling and technician dispatching system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Digital inventory management with automatic reordering</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Business Model Redesign</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Created franchise-ready operations manual and training system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Developed multi-tiered service packages for different markets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Implemented hub-and-spoke expansion model for efficient scaling
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Marketing & Growth Strategy</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Geo-targeted digital marketing campaigns for new market entry</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Strategic partnerships with car dealerships, auto shops, and property management companies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Customer loyalty program with referral incentives</span>
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
              Within 18 months of implementing our strategy, Elite Auto Detailing achieved remarkable growth:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md text-center">
                <MapPin className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-purple-600 mb-2">23</div>
                <p className="text-gray-700">Cities across 5 states</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md text-center">
                <Users className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-purple-600 mb-2">42</div>
                <p className="text-gray-700">Mobile detailing techs</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md text-center">
                <DollarSign className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-purple-600 mb-2">600%</div>
                <p className="text-gray-700">Revenue growth</p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Additional Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">
                    Reduced customer acquisition cost by 47% through referral program and strategic partnerships
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">
                    Improved operational efficiency with 35% faster service delivery times
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">
                    Built a database of 15,000+ customers with 78% repeat business rate
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Client Testimonial</h2>
            <blockquote className="text-2xl italic font-light text-gray-700 mb-8">
              "Working with M&H Digital transformed my small local business into a regional powerhouse. Their technology
              solutions and growth strategy were exactly what we needed. I never imagined we could scale this quickly
              while maintaining our quality standards."
            </blockquote>
            <div className="flex items-center justify-center">
              <div>
                <p className="font-semibold text-gray-900">Jason Matthews</p>
                <p className="text-gray-600">Founder, Elite Auto Detailing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Business Nationwide?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our business scaling strategies can help you expand your operations and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white">
                Get Your Growth Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies" passHref>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
