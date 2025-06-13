import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "ecommerce-growth",
      title: "E-commerce Revenue Growth: 300% Increase in 6 Months",
      client: "TechStart Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor user experience",
      solution: "Complete website redesign with AI-powered recommendations",
      results: ["300% revenue increase", "150% conversion rate improvement", "50% reduction in bounce rate"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "reservation-system",
      title: "Restaurant Reservation System: 45% More Table Turnover",
      client: "Bella Italia",
      industry: "Restaurant",
      challenge: "Long wait times and manual booking process",
      solution: "Custom reservation system with digital waitlist",
      results: ["45% increase in table turnover", "78% reduction in no-shows", "$8,500 monthly revenue increase"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: "detailing-business",
      title: "Mobile Detailing: Local Business to 23-City Operation",
      client: "Elite Auto Detailing",
      industry: "Automotive",
      challenge: "Limited to single location despite high demand",
      solution: "Franchise-ready business model and digital systems",
      results: ["600% revenue growth", "Expanded to 23 cities", "42 mobile technicians"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-purple-600 to-pink-500",
    },
    {
      id: "plumber-online-presence",
      title: "Plumber Online Presence: 375% More Appointments",
      client: "Mike's Plumbing",
      industry: "Service Business",
      challenge: "No online presence, inconsistent bookings",
      solution: "Complete digital presence and booking system",
      results: ["375% more monthly calls", "98% appointment booking rate", "250% revenue increase"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-blue-500 to-green-500",
    },
    {
      id: "casino-smoke-shop",
      title: "Retail Transformation: 210% Foot Traffic Increase",
      client: "Casino Smoke Shop",
      industry: "Retail",
      challenge: "Declining sales and competition from larger retailers",
      solution: "In-store experience redesign and digital marketing",
      results: ["210% foot traffic increase", "185% revenue growth", "1,200+ loyalty program members"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-orange-600 to-amber-500",
    },
    {
      id: "automation-efficiency",
      title: "Business Process Automation: 40 Hours Saved Weekly",
      client: "GrowthCorp",
      industry: "Professional Services",
      challenge: "Manual processes consuming too much time",
      solution: "Custom automation workflows and AI chatbot implementation",
      results: ["40 hours saved weekly", "90% reduction in manual tasks", "200% productivity increase"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-500 text-white border-0 mb-6">
            📊 Success Stories
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Case</span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Studies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve remarkable growth and transformation through our innovative
            solutions
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`relative h-64 lg:h-full ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-90`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <TrendingUp className="h-16 w-16 mx-auto mb-4" />
                          <div className="text-2xl font-bold">{study.client}</div>
                          <div className="text-sm opacity-90">{study.industry}</div>
                        </div>
                      </div>
                    </div>

                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                      <Badge className="mb-4 bg-gray-100 text-gray-700 border-0">{study.industry}</Badge>
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">{study.title}</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {study.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-center space-x-3">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${study.color}`}></div>
                                <span className="text-gray-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link href={`/case-studies/${study.id}`} className="inline-block mt-8">
                        <Button className={`bg-gradient-to-r ${study.color} hover:opacity-90 text-white border-0`}>
                          Read Full Case Study
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our success stories and discover how we can help you achieve remarkable growth
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white">
            Start Your Success Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
