import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, BarChart3, Star } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Success Stories | Digital Marketing & Transformation Case Studies - MH Digital Solutions",
  description:
    "Explore how MH Digital Solutions delivered measurable results for businesses from local startups to large corporations through our expertise in digital marketing, web development, and AI.",
  keywords:
    "case studies, client success stories, digital marketing results, business transformation, ROI case studies, client testimonials",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/case-studies",
  },
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "local-to-national-expansion",
      title: "Premium Auto Detailing: Boosting Local Leads with Affordable SEO",
      client: "Premium Auto Detailing",
      industry: "Automotive Services",
      businessSize: "Small Business",
      challenge:
        "Local detailing business with excellent service but limited to neighborhood customers, struggling with lead generation and online visibility.",
      solution:
        "Comprehensive digital marketing strategy including national SEO, Google Ads campaigns, social media marketing, and franchise-ready website development.",
      results: {
        expansion: "50 States",
        leads: "+1200%",
        revenue: "+800%",
        timeframe: "18 months",
      },
      image: "/images/business-operations.jpeg",
      color: "from-teal-600 to-blue-600",
      testimonial: {
        text: "MH Digital Solutions transformed our local detailing business into a national franchise opportunity. Their strategic approach to digital marketing helped us expand to all 50 states.",
        author: "Mike Johnson",
        position: "Owner",
      },
    },
    {
      id: "restaurant-digital-transformation",
      title: "Bella Vista Restaurant: Increasing E-commerce Conversions by 220%",
      client: "Bella Vista Restaurant",
      industry: "Food & Beverage",
      businessSize: "Mid-Market Company",
      challenge:
        "Excellent food and ratings but no online presence, causing long wait times and frustrated customers leading to negative reviews.",
      solution:
        "Complete digital ecosystem including online reservation system, digital menu, order management, review management, and customer communication platform.",
      results: {
        satisfaction: "+95%",
        efficiency: "+60%",
        revenue: "+220%",
        timeframe: "10 weeks",
      },
      image: "/images/digital-marketing-laptop.jpeg",
      color: "from-amber-600 to-orange-600",
      testimonial: {
        text: "The digital transformation was incredible. We went from chaos to complete organization, and our customers love the new experience.",
        author: "Maria Rodriguez",
        position: "Restaurant Manager",
      },
    },
    {
      id: "enterprise-ai-automation",
      title: "TechCorp Industries: Streamlining Operations with Custom AI Automation",
      client: "TechCorp Industries",
      industry: "Technology",
      businessSize: "Enterprise Corporation",
      challenge:
        "Manual processes across multiple departments causing inefficiencies, high operational costs, and scalability issues.",
      solution:
        "Custom AI automation platform with machine learning algorithms, process automation, and intelligent workflow management.",
      results: {
        efficiency: "+75%",
        costs: "-40%",
        accuracy: "+99.2%",
        timeframe: "6 months",
      },
      image: "/images/ai-automation.webp",
      color: "from-purple-600 to-pink-600",
      testimonial: {
        text: "The AI automation solution revolutionized our operations. We're now processing 3x more work with the same team size.",
        author: "David Chen",
        position: "CTO",
      },
    },
    {
      id: "regional-franchise-scaling",
      title: "FitLife Gyms: Scaling Digital Presence Across Multiple Locations",
      client: "FitLife Gyms",
      industry: "Fitness & Wellness",
      businessSize: "Regional Franchise",
      challenge:
        "Inconsistent branding and marketing across 15 locations, poor local SEO performance, and declining membership rates.",
      solution:
        "Multi-location SEO strategy, unified brand management, local marketing automation, and franchise-wide digital marketing system.",
      results: {
        locations: "15 Gyms",
        members: "+300%",
        revenue: "+250%",
        timeframe: "12 months",
      },
      image: "/images/team-collaboration.webp",
      color: "from-green-600 to-emerald-600",
      testimonial: {
        text: "MH Digital Solutions helped us create a cohesive digital strategy across all our locations. Membership has never been higher.",
        author: "Sarah Thompson",
        position: "Franchise Director",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-transparent pt-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 mb-6">
                📈 Proven Results
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our Client Success Stories:</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Driving Measurable Impact for Every Business
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover how we've helped businesses across industries achieve remarkable growth through strategic
                digital marketing, innovative technology solutions, and data-driven strategies.
              </p>
              <div className="flex items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">300%</div>
                  <div className="text-sm text-gray-600">Avg. Growth Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Case Studies Grid */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <ScrollAnimation key={study.id} delay={index * 100}>
                  <Card className="glass border-0 hover-lift overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                        {/* Content Side */}
                        <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                          <div className="flex items-center gap-3 mb-4">
                            <Badge className={`bg-gradient-to-r ${study.color} text-white border-0`}>
                              {study.industry}
                            </Badge>
                            <Badge variant="outline">{study.businessSize}</Badge>
                            <span className="text-sm text-gray-500">{study.results.timeframe}</span>
                          </div>

                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{study.title}</h2>
                          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Client: {study.client}</p>

                          <div className="space-y-6 mb-8">
                            <div>
                              <h3 className="font-semibold text-red-600 mb-2 flex items-center">
                                <Target className="h-4 w-4 mr-2" />
                                Challenge:
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400">{study.challenge}</p>
                            </div>
                            <div>
                              <h3 className="font-semibold text-blue-600 mb-2 flex items-center">
                                <BarChart3 className="h-4 w-4 mr-2" />
                                Solution:
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                            </div>
                          </div>

                          {/* Results Grid */}
                          <div className="grid grid-cols-3 gap-4 mb-8">
                            {Object.entries(study.results)
                              .filter(([key]) => key !== "timeframe")
                              .map(([key, value], resultIndex) => (
                                <div key={resultIndex} className="text-center">
                                  <div
                                    className={`text-2xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}
                                  >
                                    {value}
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                  </div>
                                </div>
                              ))}
                          </div>

                          {/* Testimonial */}
                          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
                            <div className="flex items-center mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 italic mb-3">"{study.testimonial.text}"</p>
                            <div className="text-sm">
                              <div className="font-semibold text-gray-900 dark:text-white">
                                {study.testimonial.author}
                              </div>
                              <div className="text-gray-600 dark:text-gray-400">{study.testimonial.position}</div>
                            </div>
                          </div>

                          <Link href={`/case-studies/${study.id}`}>
                            <Button className={`bg-gradient-to-r ${study.color} hover:opacity-90 text-white`}>
                              Read Full Case Study
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>

                        {/* Image Side */}
                        <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${study.image})` }}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-20`}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Summary */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Consistent Results</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Across All Industries
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our proven methodologies deliver measurable impact regardless of business size or industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "800%", label: "Max Revenue Growth", description: "Premium Auto Detailing" },
                { metric: "1200%", label: "Lead Generation Increase", description: "Across all campaigns" },
                { metric: "99.2%", label: "Process Accuracy", description: "AI automation projects" },
                { metric: "18 months", label: "Average Transformation", description: "From local to national" },
              ].map((result, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
                        {result.metric}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{result.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{result.description}</div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to Become Our</span>{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Next Success Story?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of businesses that have transformed their operations and achieved remarkable growth with
                  our proven strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Get Your Free Strategy Session
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full transition-all duration-300"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
