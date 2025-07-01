import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Clock, Users, DollarSign, Star, Calendar } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurant Digital Transformation - Eliminated Wait Times, 220% Revenue Growth | MH Digital Solutions",
  description:
    "See how we helped Bella Vista Restaurant in Los Angeles eliminate wait times and boost revenue 220% with digital reservation system and customer experience optimization.",
  keywords:
    "restaurant digital transformation, online reservation system, restaurant marketing, customer experience, Los Angeles restaurant",
}

export default function RestaurantDigitalTransformationCaseStudy() {
  return (
    <div className="min-h-screen pt-16 bg-transparent">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0 mb-6">
                🍽️ Restaurant Industry Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">From Long Wait Times to</span>{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Seamless Dining Experience
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                How we helped Bella Vista Restaurant eliminate wait times and achieve 220% revenue growth through
                digital transformation in just 10 weeks
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="calendly-button"
                >
                  Transform Your Restaurant
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
                    Bella Vista Restaurant in Los Angeles had built an excellent reputation for authentic cuisine and
                    quality service. Their food consistently earned rave reviews, and word-of-mouth brought steady
                    customers.
                  </p>
                  <p>However, their success was being undermined by operational challenges:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      No online reservation system causing unpredictable wait times
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Frustrated customers leaving due to long waits
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Negative reviews specifically mentioning wait times
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      No digital menu or online ordering capabilities
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Inefficient table management and customer communication
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Lost revenue from customers who left before being seated
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/digital-marketing-laptop.jpeg"
                  alt="Restaurant Digital Transformation"
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
                <h2 className="text-3xl font-bold mb-6 text-blue-600">Complete Digital Ecosystem</h2>
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    We implemented a comprehensive digital transformation that addressed every aspect of the customer
                    experience, from initial discovery to post-dining follow-up.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Online Reservation System</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Custom-built reservation platform with real-time availability and automated confirmations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Digital Menu & Ordering</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Interactive digital menu with real-time updates, dietary filters, and online ordering
                          capabilities
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Table Management System</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Integrated system for optimal table allocation and turnover optimization
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Customer Communication</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Automated SMS notifications for reservations, wait times, and special offers
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Review Management</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Proactive review monitoring and response system to maintain reputation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Loyalty Program</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Digital loyalty program to encourage repeat visits and increase customer lifetime value
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <Card className="glass border-0 p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">10-Week Implementation</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        1
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Weeks 1-3</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          System design & reservation platform development
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        2
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Weeks 4-6</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Digital menu creation & table management integration
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        3
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Weeks 7-8</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Staff training & system testing</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        4
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Weeks 9-10</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Full launch & optimization</div>
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
              <h2 className="text-3xl font-bold mb-6 text-green-600">Remarkable Transformation</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                10 weeks of digital transformation delivered immediate and lasting improvements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="glass border-0 text-center p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
              </Card>
              <Card className="glass border-0 text-center p-6">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-gray-600 dark:text-gray-400">Efficiency Increase</div>
              </Card>
              <Card className="glass border-0 text-center p-6">
                <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-600 mb-2">220%</div>
                <div className="text-gray-600 dark:text-gray-400">Revenue Growth</div>
              </Card>
              <Card className="glass border-0 text-center p-6">
                <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-orange-600 mb-2">0</div>
                <div className="text-gray-600 dark:text-gray-400">Walk-in Wait Time</div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="glass border-0 p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Key Improvements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Eliminated walk-in wait times completely</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Increased table turnover by 40%</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Reduced no-shows by 85% with automated confirmations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Improved online reviews from 3.2 to 4.8 stars</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Built database of 2,500+ loyal customers</span>
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
                    "The transformation was incredible. We went from stressed customers and negative reviews to smooth
                    operations and happy diners. Our revenue has never been higher, and our staff can focus on what they
                    do best - creating amazing dining experiences."
                  </blockquote>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    — Maria Gonzalez, Owner, Bella Vista Restaurant
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Before/After Comparison */}
      <ScrollAnimation>
        <section className="py-16 bg-transparent">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Before vs. After Transformation
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="glass border-0 p-6">
                <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center">
                  <span className="mr-2">❌</span> Before Digital Transformation
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• 45-60 minute average wait times</li>
                  <li>• 30% of customers left before being seated</li>
                  <li>• 3.2-star average online rating</li>
                  <li>• Manual reservation tracking on paper</li>
                  <li>• Frequent customer complaints about wait times</li>
                  <li>• Limited ability to manage peak hours</li>
                  <li>• No customer communication system</li>
                </ul>
              </Card>

              <Card className="glass border-0 p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600 flex items-center">
                  <span className="mr-2">✅</span> After Digital Transformation
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Zero wait times for reserved customers</li>
                  <li>• 95% customer satisfaction rate</li>
                  <li>• 4.8-star average online rating</li>
                  <li>• Automated reservation and table management</li>
                  <li>• Proactive customer communication via SMS</li>
                  <li>• Optimized seating for maximum efficiency</li>
                  <li>• Loyal customer database with 2,500+ members</li>
                </ul>
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
                Ready to Transform Your Restaurant's Customer Experience?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Eliminate wait times, boost customer satisfaction, and increase revenue with our proven restaurant
                digital transformation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="calendly-button"
                >
                  Get Your Restaurant Assessment
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
