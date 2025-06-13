import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ReservationSystemCaseStudy() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 mb-6">
                📱 Restaurant Technology Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Eliminating Wait Times with a</span>{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Modern Reservation System
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                How we helped a local restaurant eliminate waiting lines and increase table turnover by 45%
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-semibold">45% increase in table turnover</span>
                </div>
              </div>
              <Link href="/contact" passHref>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white">
                  Get Similar Results
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/restaurant-reservation.png"
                alt="Restaurant Reservation System"
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
              Bella Italia, a popular Italian restaurant in downtown Boston, was facing significant challenges with
              their manual reservation process:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  Customers were waiting up to 45 minutes for a table during peak hours, leading to frustration and
                  walkouts
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  Staff was spending valuable time managing a paper reservation book and handling phone calls
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  No-shows were costing the restaurant an estimated $2,000 per week in lost revenue
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  The restaurant had no way to collect customer data for marketing purposes
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
              We designed and implemented a comprehensive reservation system that transformed their operations:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Custom Mobile App & Website Integration</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Online reservation system with real-time availability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Automated text confirmations and reminders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Virtual waitlist with accurate time estimates</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Staff Management System</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Table management dashboard for hosts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Customer preference and dietary restriction tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Analytics dashboard for management</span>
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
              Within just 3 months of implementation, Bella Italia experienced a dramatic transformation:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
                <p className="text-gray-700">Increase in table turnover rate</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">78%</div>
                <p className="text-gray-700">Reduction in no-shows</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$8,500</div>
                <p className="text-gray-700">Monthly revenue increase</p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Additional Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">
                    Built a customer database of over 3,000 diners in the first 3 months
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">
                    Improved staff efficiency with 15 hours/week less time spent on managing reservations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">
                    Enhanced customer satisfaction, with online review ratings improving from 4.0 to 4.8 stars
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Client Testimonial</h2>
            <blockquote className="text-2xl italic font-light text-gray-700 mb-8">
              "The reservation system from M&H Digital has completely transformed our business. Our customers love the
              convenience, and we've been able to serve more diners than ever before. The investment paid for itself
              within the first two months."
            </blockquote>
            <div className="flex items-center justify-center">
              <div>
                <p className="font-semibold text-gray-900">Marco Rossi</p>
                <p className="text-gray-600">Owner, Bella Italia Restaurant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Restaurant Operations?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you implement a custom reservation system that increases your efficiency and
            revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies" passHref>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
