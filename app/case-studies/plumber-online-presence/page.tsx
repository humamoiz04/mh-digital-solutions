import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, CheckCircle, Phone, Users, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PlumberOnlinePresenceCaseStudy() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white border-0 mb-6">
                🔧 Local Business Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">From Struggling Local Plumber to</span>{" "}
                <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                  Thriving Service Business
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                How we helped a plumber with zero online presence grow appointments by 375% in just 90 days
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-semibold">375% increase in monthly appointments</span>
                </div>
              </div>
              <Link href="/contact" passHref>
                <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:opacity-90 text-white">
                  Grow Your Service Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/plumber-service.png"
                alt="Plumbing Service Business"
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
              Mike's Plumbing, a skilled one-man operation in the suburbs of Boston, was struggling to survive despite
              15 years of experience:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  No website, social media presence, or online listings - relying solely on word-of-mouth referrals
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  Inconsistent monthly income with dramatic seasonal fluctuations
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  No system for booking appointments or following up with customers
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-600">
                  Losing jobs to larger companies with better online visibility and marketing
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
              We implemented a comprehensive online presence and business system in just 30 days:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Online Presence Creation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Custom mobile-responsive website with SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Google Business Profile with review generation system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Local service ads and Google Maps optimization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Business System Implementation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Online booking system with automated reminders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Customer relationship management (CRM) system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Digital invoicing and payment processing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Local Marketing Campaign</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Hyper-local Facebook and Google ad campaigns targeting homeowners within 15 miles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Seasonal service promotions (winter pipe protection, spring inspections)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Email marketing to past customers for repeat business</span>
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
              Within 90 days of implementation, Mike's Plumbing experienced a complete business transformation:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-md text-center">
                <Phone className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-blue-600 mb-2">375%</div>
                <p className="text-gray-700">Increase in monthly calls</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-md text-center">
                <Calendar className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-700">Appointment booking rate</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-md text-center">
                <Users className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-blue-600 mb-2">250%</div>
                <p className="text-gray-700">Revenue increase</p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Additional Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">Built a database of 150+ customers in the first 90 days</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">30% of new customers came from Google search results</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600">
                    68% of customers used the online booking system, saving 15+ hours per week in phone calls
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Client Testimonial</h2>
            <blockquote className="text-2xl italic font-light text-gray-700 mb-8">
              "I was barely making ends meet before working with M&H Digital. Now I'm booked solid, my phone is ringing
              constantly, and I'm even hiring my first employee. The investment has paid for itself many times over
              already."
            </blockquote>
            <div className="flex items-center justify-center">
              <div>
                <p className="font-semibold text-gray-900">Mike Johnson</p>
                <p className="text-gray-600">Owner, Mike's Plumbing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Service Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a complete online presence and business system that brings in consistent leads and grows your
            revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-500 hover:opacity-90 text-white">
                Get Your Business Assessment
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
