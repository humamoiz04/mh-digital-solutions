import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Award, CheckCircle, Star, TrendingUp, Shield, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About MH Digital Solutions | Our Expert Team & Mission for Growth",
  description:
    "Learn about MH Digital Solutions, our commitment to innovation, and our team of digital experts dedicated to delivering tangible results and sustainable growth for your business, regardless of size or industry.",
  keywords:
    "about MH Digital Solutions, digital marketing agency, company history, mission, values, methodology, certified team",
  openGraph: {
    title: "About MH Digital Solutions - Trusted Digital Marketing Experts",
    description:
      "Discover our story, meet our certified team, and learn about our proven methodology that has helped 500+ businesses achieve digital success.",
    images: ["/images/team-collaboration.webp"],
  },
}

const methodology = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We conduct comprehensive business analysis, competitor research, and market opportunity assessment to understand your unique position and challenges.",
    details: [
      "Business goals & objectives analysis",
      "Competitive intelligence gathering",
      "Target audience profiling",
      "Current digital presence audit",
    ],
  },
  {
    step: "02",
    title: "Strategic Planning",
    description:
      "Based on our findings, we develop a custom digital strategy tailored to your specific industry, budget, and growth objectives.",
    details: [
      "Custom strategy development",
      "Channel selection & prioritization",
      "Budget allocation planning",
      "Timeline & milestone setting",
    ],
  },
  {
    step: "03",
    title: "Implementation & Execution",
    description:
      "Our certified experts execute the strategy with precision, using industry best practices and cutting-edge tools to maximize results.",
    details: [
      "Campaign setup & optimization",
      "Content creation & deployment",
      "Technical implementation",
      "Quality assurance testing",
    ],
  },
  {
    step: "04",
    title: "Monitoring & Optimization",
    description:
      "We continuously monitor performance, analyze data, and optimize campaigns to ensure maximum ROI and sustained growth.",
    details: [
      "Real-time performance monitoring",
      "A/B testing & optimization",
      "Data analysis & insights",
      "Strategy refinement",
    ],
  },
  {
    step: "05",
    title: "Reporting & Growth",
    description:
      "Transparent reporting with actionable insights helps you understand results and plan for continued expansion and success.",
    details: [
      "Monthly performance reports",
      "ROI analysis & forecasting",
      "Growth strategy recommendations",
      "Ongoing strategy consultation",
    ],
  },
]

const uniqueSellingPropositions = [
  {
    icon: Target,
    title: "Data-Driven Approach",
    description:
      "Every decision is backed by data. We use advanced analytics and AI-powered insights to optimize your campaigns for maximum ROI.",
    benefit: "23% higher conversion rates on average",
  },
  {
    icon: Users,
    title: "Certified Expert Team",
    description:
      "Our team holds 15+ industry certifications from Google, Meta, HubSpot, and other leading platforms, ensuring you get best-in-class service.",
    benefit: "Certified expertise across all major platforms",
  },
  {
    icon: Shield,
    title: "Guaranteed Results",
    description:
      "We're so confident in our methodology that we guarantee positive ROI within 90 days or provide additional services at no cost.",
    benefit: "98% client satisfaction rate",
  },
  {
    icon: Clock,
    title: "24/7 Support & Communication",
    description:
      "Your success is our priority. We provide round-the-clock support and maintain open communication throughout every project.",
    benefit: "Average response time under 2 hours",
  },
]

const problemsSolved = [
  {
    problem: "Low Online Visibility",
    solution: "Comprehensive SEO strategies that improve search rankings and drive organic traffic",
    result: "Average 250% increase in organic traffic",
  },
  {
    problem: "Poor Conversion Rates",
    solution: "Landing page optimization and user experience improvements",
    result: "Average 180% increase in conversion rates",
  },
  {
    problem: "High Customer Acquisition Costs",
    solution: "Targeted PPC campaigns and marketing automation",
    result: "Average 40% reduction in acquisition costs",
  },
  {
    problem: "Inconsistent Brand Messaging",
    solution: "Integrated marketing strategies across all channels",
    result: "Enhanced brand recognition and trust",
  },
]

const achievements = [
  {
    number: "500+",
    label: "Projects Completed",
    description: "Successful digital marketing campaigns delivered",
    icon: Target,
  },
  { number: "98%", label: "Client Satisfaction", description: "Based on post-project surveys and reviews", icon: Star },
  {
    number: "250%",
    label: "Average ROI",
    description: "Return on investment achieved for our clients",
    icon: TrendingUp,
  },
  { number: "15+", label: "Certifications", description: "Industry certifications across our team", icon: Award },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MH Digital Solutions",
            url: "https://www.mhdigitalsolution.com",
            logo: "https://www.mhdigitalsolution.com/images/mh-logo.webp",
            description:
              "Leading digital marketing agency specializing in SEO, PPC, web development, and business consulting with 500+ successful projects since 2020.",
            foundingDate: "2020",
            address: {
              "@type": "PostalAddress",
              addressCountry: "US",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-707-582-2255",
              contactType: "customer service",
              email: "info@mhdigitalsolution.com",
            },
            sameAs: ["https://www.linkedin.com/company/mh-digital-solutions"],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Badge className="mb-4 md:mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white border-0">
                🚀 Since 2020 - Trusted by 500+ Businesses
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  MH Digital Solutions:
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Expertise & Partnership for Your Digital Future</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                MH Digital Solutions is a leading digital marketing agency founded in 2020 with a mission to democratize
                enterprise-level digital marketing strategies for businesses of all sizes.
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                With our certified team of experts and proven methodologies, we've helped over 500 businesses achieve
                remarkable growth through strategic{" "}
                <Link href="/services/seo" className="text-purple-600 hover:underline">
                  SEO services
                </Link>
                , targeted{" "}
                <Link href="/services/ppc-advertising" className="text-purple-600 hover:underline">
                  PPC campaigns
                </Link>
                , innovative{" "}
                <Link href="/services/web-development" className="text-purple-600 hover:underline">
                  web development
                </Link>
                , and comprehensive{" "}
                <Link href="/services/digital-marketing" className="text-purple-600 hover:underline">
                  digital marketing strategies
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
                <Link href="/team">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full text-sm md:text-base"
                  >
                    Meet Our Expert Team
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/team-collaboration.webp"
                alt="MH Digital Solutions team collaborating on digital marketing strategies"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-xl shadow-lg">
                <div className="text-xl md:text-2xl font-bold text-purple-600">500+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              <span className="text-gray-900 dark:text-white">Our Vision:</span>{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Empowering Businesses Through Digital Excellence
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <Card className="glass-card border-0 hover-lift">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                  Our Mission
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                  To empower businesses with innovative digital solutions that drive measurable growth, enhance
                  operational efficiency, and create lasting competitive advantages in the digital marketplace.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                  We believe every business, regardless of size or industry, deserves access to world-class digital
                  marketing strategies that were once only available to Fortune 500 companies.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Deliver measurable ROI that exceeds client expectations",
                    "Provide transparent, data-driven strategies and reporting",
                    "Build long-term partnerships based on trust and results",
                    "Stay at the forefront of digital marketing innovation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover-lift">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                  Our Core Values
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                  Our values guide every decision we make and every strategy we implement for our clients.
                </p>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                      We work as an extension of your team, fostering open communication and shared success.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Transparency</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                      Complete transparency in our processes, pricing, and performance reporting.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                      Every strategy is designed to deliver measurable, sustainable business growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-12 md:py-16 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              <span className="text-gray-900 dark:text-white">Meet Our Team of</span>{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Digital Innovators & Strategists
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our certified experts bring years of experience and proven results to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: "Farhan",
                role: "CEO & Digital Strategy Director",
                image: "/images/team/farhan-developer.webp",
                expertise: "Digital Strategy, Business Growth, Team Leadership",
                linkedin: "#",
                bio: "10+ years leading digital transformation initiatives for Fortune 500 companies and startups.",
              },
              {
                name: "MK",
                role: "Lead Developer & Technical Architect",
                image: "/images/team/mk-ceo.webp",
                expertise: "Full-Stack Development, AI Integration, Technical SEO",
                linkedin: "#",
                bio: "Expert in modern web technologies with a focus on performance and scalability.",
              },
              {
                name: "Taqi",
                role: "Senior SEO Specialist & Researcher",
                image: "/images/team/taqi-researcher.webp",
                expertise: "SEO Strategy, Content Marketing, Analytics",
                linkedin: "#",
                bio: "Data-driven SEO expert with proven track record of ranking improvements.",
              },
              {
                name: "Senorita",
                role: "Digital Marketing Manager",
                image: "/images/team/senorita-marketing.webp",
                expertise: "PPC Management, Social Media, Campaign Optimization",
                linkedin: "#",
                bio: "Creative marketing strategist specializing in multi-channel campaign management.",
              },
            ].map((member, index) => (
              <Card key={index} className="glass-card border-0 hover-lift text-center">
                <CardContent className="p-4 md:p-6">
                  <div className="relative mb-4 md:mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto w-20 h-20 md:w-30 md:h-30"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-2 md:mb-3 text-sm md:text-base">{member.role}</p>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3 md:mb-4">{member.bio}</p>
                  <div className="text-xs text-gray-500 mb-3 md:mb-4">
                    <strong>Expertise:</strong> {member.expertise}
                  </div>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors text-sm"
                  >
                    LinkedIn Profile
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 md:py-16 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              <span className="text-gray-900 dark:text-white">Our Approach:</span>{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Tailored Strategies, Measurable Impact
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our systematic approach ensures consistent results and maximizes your return on investment across all
              digital marketing initiatives.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {methodology.map((step, index) => (
              <Card key={index} className="glass-card border-0 hover-lift">
                <CardContent className="p-6 md:p-8">
                  <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3 md:mr-4 text-sm md:text-base">
                          {step.step}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      </div>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                        {step.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">Key Activities:</h4>
                      <ul className="space-y-1 md:space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-400"
                          >
                            <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-12 md:py-16 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              <span className="text-gray-900 dark:text-white">Why Choose</span>{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                MH Digital Solutions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our unique approach and proven track record set us apart from other digital marketing agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {uniqueSellingPropositions.map((usp, index) => (
              <Card key={index} className="glass-card border-0 hover-lift text-center">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <usp.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                    {usp.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                    {usp.description}
                  </p>
                  <Badge className="bg-green-100 text-green-800 border-0 text-xs md:text-sm">{usp.benefit}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 md:py-16 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              <span className="text-gray-900 dark:text-white">Our</span>{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Track Record
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Numbers that demonstrate our commitment to client success and industry excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card border-0 hover-lift text-center">
                <CardContent className="p-6 md:p-8">
                  <achievement.icon className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-purple-600" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{achievement.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card rounded-2xl md:rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                ?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                Join 500+ businesses that have achieved remarkable growth through our proven digital marketing
                strategies and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                >
                  Schedule Free Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
                <Link href="/case-studies">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full text-sm md:text-base"
                  >
                    View Success Stories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
