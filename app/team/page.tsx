import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, LinkedinIcon, Mail, Award, Users, Target, CheckCircle, Star, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Expert Team | MH Digital Solutions - Meet Our Digital Marketing Specialists",
  description:
    "Meet the certified digital marketing experts behind MH Digital Solutions. Our team includes Google Ads specialists, SEO experts, and certified developers with 50+ years combined experience.",
  keywords:
    "digital marketing team, SEO experts, Google Ads specialists, certified professionals, MH Digital Solutions team",
  openGraph: {
    title: "Expert Digital Marketing Team | MH Digital Solutions",
    description:
      "Meet our certified team of digital marketing specialists with proven track records in SEO, PPC, web development, and business consulting.",
    images: ["/images/team-collaboration.webp"],
  },
}

const teamMembers = [
  {
    name: "Abdul Moiz Khan",
    title: "CEO & Founder",
    image: "/images/team/farhan-developer.webp", // CEO image (swapped)
    bio: "Visionary leader with 8+ years transforming businesses through digital innovation. Founded MH Digital Solutions in 2020 with a mission to democratize enterprise-level digital marketing for businesses of all sizes.",
    expertise: [
      "Digital Strategy & Transformation",
      "Business Development & Growth",
      "Team Leadership & Management",
      "Client Relationship Management",
    ],
    certifications: [
      "Google Analytics Certified",
      "HubSpot Inbound Marketing Certified",
      "Facebook Blueprint Certified",
    ],
    achievements: [
      "Led 500+ digital transformation projects",
      "Generated $50M+ revenue for clients",
      "Built teams across 4 countries",
      "98% client retention rate",
    ],
    experience: "8+ Years",
    linkedin: "https://linkedin.com/in/moizkhan",
    email: "moiz@mhdigitalsolution.com",
    quote:
      "Every business deserves access to world-class digital marketing strategies that drive real, measurable growth.",
    specialization: "Strategic Vision & Leadership",
  },
  {
    name: "Farhan Siddiqui",
    title: "Lead Developer & Technical Director",
    image: "/images/team/mk-ceo.webp", // Developer image (swapped)
    bio: "Full-stack development expert with 6+ years building scalable web applications and automation systems. Leads our technical team in creating cutting-edge digital solutions that convert visitors into customers.",
    expertise: [
      "Full-Stack Web Development",
      "AI Integration & Automation",
      "E-commerce Development",
      "Technical Architecture & Optimization",
    ],
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Developer",
      "Meta Blueprint Certified",
      "Shopify Expert Certified",
    ],
    achievements: [
      "Built 200+ high-converting websites",
      "Developed AI tools used by 10K+ businesses",
      "99.9% uptime across all projects",
      "Led technical teams of 15+ developers",
    ],
    experience: "6+ Years",
    linkedin: "https://linkedin.com/in/farhansiddiqui",
    email: "farhan@mhdigitalsolution.com",
    quote:
      "Great code isn't just functional—it's the foundation that transforms business ideas into digital success stories.",
    specialization: "Technical Innovation & Development",
  },
  {
    name: "Senorita",
    title: "Digital Marketing Director & Strategy Lead",
    image: "/images/team/senorita-marketing.webp",
    bio: "Creative marketing strategist with 5+ years driving data-driven campaigns for Fortune 500 companies and growing startups. Specializes in multi-channel marketing strategies that deliver measurable ROI.",
    expertise: [
      "Digital Marketing Strategy",
      "PPC Campaign Management",
      "Social Media Marketing",
      "Content Strategy & Creation",
    ],
    certifications: [
      "Google Ads Certified Professional",
      "Facebook Marketing Expert",
      "HubSpot Content Marketing Certified",
      "LinkedIn Marketing Solutions Certified",
    ],
    achievements: [
      "Managed $2M+ in advertising spend",
      "Achieved 340% average ROI for clients",
      "Launched 150+ successful campaigns",
      "Mentored 25+ marketing professionals",
    ],
    experience: "5+ Years",
    linkedin: "https://linkedin.com/in/senorita-marketing",
    email: "senorita@mhdigitalsolution.com",
    quote: "Data tells the story, creativity brings it to life, and strategy turns it into revenue.",
    specialization: "Campaign Strategy & Execution",
  },
  {
    name: "Taqi Shah",
    title: "Senior Research Analyst & Data Scientist",
    image: "/images/team/taqi-researcher.webp",
    bio: "Data-driven researcher with 4+ years uncovering market insights and competitive intelligence. His analytical expertise drives strategic decision-making and identifies growth opportunities for our clients.",
    expertise: [
      "Market Research & Analysis",
      "Competitive Intelligence",
      "Data Analytics & Visualization",
      "Consumer Behavior Analysis",
    ],
    certifications: [
      "Google Analytics 4 Certified",
      "Microsoft Power BI Certified",
      "Tableau Desktop Specialist",
      "Google Data Studio Expert",
    ],
    achievements: [
      "Analyzed 1000+ market opportunities",
      "Identified $10M+ in revenue opportunities",
      "Created 500+ data visualization reports",
      "Improved client decision-making by 85%",
    ],
    experience: "4+ Years",
    linkedin: "https://linkedin.com/in/taqishah",
    email: "taqi@mhdigitalsolution.com",
    quote: "Behind every successful marketing campaign is data that reveals the path to customer hearts and wallets.",
    specialization: "Market Intelligence & Analytics",
  },
]

const companyValues = [
  {
    icon: Target,
    title: "Expertise-Driven Results",
    description:
      "Our certified professionals bring years of hands-on experience to every project, ensuring strategies that actually work in today's competitive landscape.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We work as an extension of your team, combining our expertise with your industry knowledge to create unstoppable growth strategies.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description:
      "With 500+ successful projects and industry certifications, our track record speaks for itself in delivering measurable business results.",
  },
  {
    icon: Globe,
    title: "Innovative Solutions",
    description:
      "We stay ahead of digital trends and algorithm changes, ensuring our clients always have a competitive advantage in their markets.",
  },
]

const companyStats = [
  { number: "23+", label: "Years Combined Experience", description: "Across all team members" },
  { number: "500+", label: "Successful Projects", description: "Delivered with measurable ROI" },
  { number: "98%", label: "Client Retention Rate", description: "Long-term partnerships built on trust" },
  { number: "15+", label: "Industry Certifications", description: "From Google, Meta, HubSpot & more" },
]

export default function TeamPage() {
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
              "Leading digital marketing agency with certified experts specializing in SEO, PPC, web development, and business consulting.",
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
            sameAs: ["https://www.linkedin.com/company/mh-digital-solutions", "https://twitter.com/mhdigitalsolutions"],
            employee: teamMembers.map((member) => ({
              "@type": "Person",
              name: member.name,
              jobTitle: member.title,
              worksFor: {
                "@type": "Organization",
                name: "MH Digital Solutions",
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white border-0">
              🏆 Meet Our Expert Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Certified Professionals
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Driving Your Success</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Meet the certified digital marketing experts, developers, and strategists behind MH Digital Solutions.
              With 23+ years of combined experience and 15+ industry certifications, our team has the expertise to
              transform your business through strategic digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/mhdigitalsolutionsus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
              >
                Schedule Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="rounded-full border-2 border-purple-600">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <Card key={index} className="glass-card border-0 hover-lift text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Meet Our</span>{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each team member brings unique expertise and proven results to help your business thrive in the digital
              landscape.
            </p>
          </div>

          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Card className="glass-card border-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={`${member.name} - ${member.title} at MH Digital Solutions`}
                          width={500}
                          height={600}
                          className="w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <Badge className="bg-white/20 text-white border-0 mb-2">{member.specialization}</Badge>
                          <blockquote className="text-white text-lg italic">"{member.quote}"</blockquote>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Content Section */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                      <p className="text-xl text-purple-600 font-semibold mb-4">{member.title}</p>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{member.bio}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Core Expertise</h4>
                        <ul className="space-y-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Certifications</h4>
                        <ul className="space-y-2">
                          {member.certifications.map((cert, certIndex) => (
                            <li key={certIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Award className="h-4 w-4 text-purple-500 mr-2" />
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {member.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Badge variant="secondary">{member.experience} Experience</Badge>
                      <div className="flex gap-3">
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          <LinkedinIcon className="h-5 w-5" />
                        </Link>
                        <Link
                          href={`mailto:${member.email}`}
                          className="text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Why Choose</span>{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our values and approach to client success set us apart in the digital marketing industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="glass-card border-0 hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Ready to Work with</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Certified Experts
                </span>
                ?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our certified team of digital marketing professionals create a custom strategy that drives real
                results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                >
                  Schedule Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link href="/case-studies">
                  <Button variant="outline" size="lg" className="rounded-full border-2 border-purple-600">
                    See Our Results
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
