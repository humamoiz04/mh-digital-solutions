import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, MapPin, Star, Users, CheckCircle, Search, Phone } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import FAQ from "@/components/faq"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Local Eatery: SEO & Lead Gen Case Study - MH Digital Solutions",
  description:
    "Read how our affordable SEO and local marketing boosted Local Eatery's website traffic by 150% and increased bookings. A true small business growth story.",
  keywords:
    "local SEO case study, restaurant marketing, small business SEO, local lead generation, Google My Business optimization",
  openGraph: {
    title: "Local Eatery SEO Success Story",
    description: "See how we boosted Local Eatery's traffic by 150% and increased bookings through local SEO.",
    images: ["/images/case-study-restaurant.webp"],
  },
}

export default function LocalEateryCaseStudyPage() {
  const faqs = [
    {
      question: "How did MH Digital Solutions tailor its approach for Local Eatery's industry?",
      answer:
        "We focused on local SEO strategies specific to restaurants: Google My Business optimization, local food keywords, review management, and location-based content. We also implemented schema markup for menus and hours, and optimized for 'near me' searches.",
    },
    {
      question: "What was the timeframe for achieving these results?",
      answer:
        "Local SEO results appeared quickly - within 30 days for Google My Business improvements. The 150% traffic increase was achieved over 4 months, with booking increases starting in month 2.",
    },
    {
      question: "What specific tools or technologies were used in this project?",
      answer:
        "We used Google My Business optimization, local citation building, review management tools, WordPress SEO optimization, Google Analytics, and local keyword research tools. We also implemented online reservation integration.",
    },
    {
      question: "Can MH Digital Solutions achieve similar results for a business of my size?",
      answer:
        "Yes! This case study demonstrates our expertise with small, local businesses. We offer affordable packages starting at $500/month for local SEO, perfect for restaurants, retail stores, and service businesses.",
    },
  ]

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            name: "Local Eatery SEO & Lead Generation Success Story",
            description:
              "How MH Digital Solutions helped Local Eatery increase website traffic by 150% and boost bookings through local SEO and digital marketing.",
            author: {
              "@type": "Organization",
              name: "MH Digital Solutions",
            },
            datePublished: "2024-12-15",
            mainEntity: {
              "@type": "Restaurant",
              name: "Local Eatery",
            },
            result: [
              {
                "@type": "QuantitativeValue",
                name: "Traffic Increase",
                value: 150,
                unitText: "PERCENT",
              },
              {
                "@type": "QuantitativeValue",
                name: "Booking Increase",
                value: 85,
                unitText: "PERCENT",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-1" id="main-content">
          <div className="container mx-auto container-mobile">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 text-white border-0">
                🍽️ Local Business Success
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Case Study:</span>{" "}
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Local Eatery
                </span>
                <br />
                <span className="text-white">150% Traffic Growth Through Local SEO</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how our affordable SEO and local marketing strategies helped a small family restaurant boost
                website traffic by 150% and increase bookings by 85% in just 4 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="calendly-button"
                  aria-label="Schedule a free consultation for your local business SEO needs"
                >
                  Grow Your Local Business
                  <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-white rounded-full"
                >
                  View Local SEO Packages
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Overview */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-2">
          <div className="container mx-auto container-mobile">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: TrendingUp,
                  value: "150%",
                  label: "Traffic Increase",
                  description: "Website visitors per month",
                  color: "text-green-400",
                },
                {
                  icon: Phone,
                  value: "85%",
                  label: "More Bookings",
                  description: "Reservation increase",
                  color: "text-emerald-400",
                },
                {
                  icon: MapPin,
                  value: "#1",
                  label: "Local Rankings",
                  description: "Google Maps position",
                  color: "text-teal-400",
                },
                {
                  icon: Star,
                  value: "4.8/5",
                  label: "Review Rating",
                  description: "Google reviews average",
                  color: "text-yellow-400",
                },
              ].map((stat, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass-card border-0 text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                      <h3 className="text-lg font-bold text-white mb-1">{stat.label}</h3>
                      <p className="text-gray-400 text-sm">{stat.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* The Challenge */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-3">
          <div className="container mx-auto container-mobile">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-white">The Challenge:</span>{" "}
                  <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Understanding Local Eatery's Pain Points
                  </span>
                </h2>
                <div className="space-y-6">
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-3">Invisible Online Presence</h3>
                    <p className="text-gray-300">
                      Local Eatery, a family-owned restaurant in downtown Huntsville, had virtually no online
                      visibility. They weren't showing up in local searches, had an outdated website, and were losing
                      customers to competitors with better digital presence.
                    </p>
                  </div>
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-3">Declining Foot Traffic</h3>
                    <p className="text-gray-300">
                      Despite serving excellent food for 15 years, foot traffic had declined 40% over two years. New
                      customers couldn't find them online, and existing customers weren't aware of new menu items or
                      special events.
                    </p>
                  </div>
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-3">Limited Marketing Budget</h3>
                    <p className="text-gray-300">
                      As a small family business, they had a tight marketing budget of $800/month and needed
                      cost-effective solutions that would deliver immediate and measurable results.
                    </p>
                  </div>
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/digital-workspace.jpeg"
                    alt="Local restaurant struggling with online visibility before SEO implementation"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Strategic Approach */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-4">
          <div className="container mx-auto container-mobile">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Our Strategic Approach:</span>{" "}
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Tailored Local SEO Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We developed a comprehensive local SEO strategy designed specifically for small restaurants with limited
                budgets but big growth potential.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Local SEO Foundation",
                    description:
                      "Optimized Google My Business profile, created consistent NAP (Name, Address, Phone) citations across 50+ local directories, and implemented local schema markup.",
                    tools: ["Google My Business", "Local citations", "Schema markup", "NAP consistency"],
                    color: "from-green-600 to-emerald-600",
                  },
                  {
                    step: "02",
                    title: "Website Optimization",
                    description:
                      "Redesigned their website for mobile-first experience, optimized for local keywords, improved page speed, and added online reservation functionality.",
                    tools: ["Mobile optimization", "Local keywords", "Page speed", "Online reservations"],
                    color: "from-emerald-600 to-teal-500",
                  },
                  {
                    step: "03",
                    title: "Content & Review Strategy",
                    description:
                      "Created location-specific content, implemented review management system, and developed social media presence to engage local community.",
                    tools: ["Local content", "Review management", "Social media", "Community engagement"],
                    color: "from-teal-500 to-cyan-500",
                  },
                  {
                    step: "04",
                    title: "Performance Tracking",
                    description:
                      "Set up comprehensive analytics tracking, monthly reporting, and continuous optimization based on performance data and customer feedback.",
                    tools: ["Google Analytics", "Local rank tracking", "Performance reports", "Optimization"],
                    color: "from-cyan-500 to-green-600",
                  },
                ].map((phase, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="flex items-start space-x-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-2xl font-bold text-white">{phase.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                        <p className="text-gray-300 mb-4">{phase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.tools.map((tool, toolIndex) => (
                            <Badge
                              key={toolIndex}
                              className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-300 border border-green-600/30"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Measurable Results */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-5">
          <div className="container mx-auto container-mobile">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Measurable Results:</span>{" "}
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Quantifying Success
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real numbers that demonstrate the power of local SEO for small businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: TrendingUp,
                  title: "150% Website Traffic Increase",
                  value: "2,400",
                  description: "Monthly website visitors",
                  details: "From 960 to 2,400 visitors per month",
                },
                {
                  icon: Phone,
                  title: "85% More Reservations",
                  value: "320",
                  description: "Monthly bookings",
                  details: "From 175 to 320 reservations per month",
                },
                {
                  icon: MapPin,
                  title: "#1 Local Rankings",
                  value: "Top 3",
                  description: "Google Maps position",
                  details: "Ranking #1-3 for all target keywords",
                },
                {
                  icon: Search,
                  title: "300% More Local Searches",
                  value: "8,500",
                  description: "Monthly local impressions",
                  details: "From 2,100 to 8,500 Google impressions",
                },
                {
                  icon: Star,
                  title: "4.8/5 Star Rating",
                  value: "127",
                  description: "Google reviews",
                  details: "Increased from 23 to 127 reviews",
                },
                {
                  icon: Users,
                  title: "60% New Customer Growth",
                  value: "45%",
                  description: "Revenue increase",
                  details: "Monthly revenue up 45% year-over-year",
                },
              ].map((result, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`service-card-${(index % 6) + 1} border-0 hover-lift`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <result.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{result.title}</h3>
                      <div className="text-3xl font-bold text-green-400 mb-2">{result.value}</div>
                      <p className="text-gray-300 mb-2">{result.description}</p>
                      <p className="text-sm text-gray-400">{result.details}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            {/* Before/After Comparison */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Before vs. After Comparison</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-red-400 mb-4">Before Our SEO Services</h4>
                  <ul className="space-y-3">
                    {[
                      "Page 3+ Google rankings for local searches",
                      "960 monthly website visitors",
                      "175 monthly reservations",
                      "23 Google reviews (3.8/5 rating)",
                      "Declining foot traffic",
                      "Limited online visibility",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-400 mb-4">After 4 Months with MH Digital</h4>
                  <ul className="space-y-3">
                    {[
                      "#1-3 Google rankings for all target keywords",
                      "2,400 monthly website visitors",
                      "320 monthly reservations",
                      "127 Google reviews (4.8/5 rating)",
                      "Consistent customer growth",
                      "Strong local online presence",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Client Testimonial */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-1">
          <div className="container mx-auto container-mobile">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-white">Client Testimonial &</span>{" "}
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Future Outlook
                </span>
              </h2>

              <Card className="glass-card border-0 mb-12">
                <CardContent className="p-12 text-center">
                  <div className="text-6xl text-green-400 mb-6" aria-hidden="true">
                    "
                  </div>
                  <blockquote className="text-xl text-gray-300 mb-8 italic leading-relaxed">
                    "MH Digital Solutions saved our family business. We were struggling to compete with chain
                    restaurants, but their local SEO strategy put us back on the map – literally! Our phone rings
                    constantly with reservations, and we're booked solid most weekends. The investment paid for itself
                    in the first month."
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">MR</span>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white">Maria Rodriguez</div>
                      <div className="text-gray-400">Owner, Local Eatery</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Future Growth Plans</h3>
                <p className="text-gray-300">
                  Local Eatery is now planning to open a second location and has engaged us for their expansion SEO
                  strategy. They're also implementing our social media marketing package to further engage their growing
                  customer base.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <FAQ
        title="Frequently Asked Questions About This Case Study"
        subtitle="Learn more about our local SEO approach and results"
        faqs={faqs}
      />

      {/* Final CTA */}
      <ScrollAnimation>
        <section className="section-padding section-gradient-4">
          <div className="container mx-auto container-mobile">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-teal-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Ready to Grow Your</span>{" "}
                  <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Local Business?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our affordable local SEO packages can help your business achieve similar growth and
                  dominate your local market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button text-lg px-8 py-4"
                    aria-label="Schedule a free consultation for your local business SEO needs"
                  >
                    Get Your Free Local SEO Audit
                    <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-white rounded-full px-8"
                  >
                    View Local SEO Packages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
