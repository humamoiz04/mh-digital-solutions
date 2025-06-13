import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, Calendar, Building, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const caseStudyData: Record<string, any> = {
  "techstart-ai-automation": {
    title: "TechStart Inc. - AI Automation Revolution",
    client: "TechStart Inc.",
    industry: "Technology Startup",
    duration: "6 months",
    team_size: "5 specialists",
    challenge:
      "TechStart Inc. was struggling with manual processes that consumed over 40 hours per week of their team's time. Customer support was overwhelmed, lead qualification was inconsistent, and operational costs were spiraling out of control.",
    solution:
      "We implemented a comprehensive AI automation solution including a custom chatbot for customer support, automated lead qualification system, and process optimization tools that streamlined their entire workflow.",
    implementation: [
      "Phase 1: Analysis and Strategy (Month 1)",
      "Phase 2: AI Chatbot Development (Months 2-3)",
      "Phase 3: Process Automation (Months 4-5)",
      "Phase 4: Testing and Optimization (Month 6)",
    ],
    results: {
      efficiency_improvement: "300%",
      cost_savings: "60%",
      time_saved: "40 hours/week",
      roi: "450%",
      customer_satisfaction: "95%",
      response_time: "Under 30 seconds",
    },
    testimonial: {
      quote:
        "M&H Digital Solutions completely transformed our operations. The AI automation they implemented saved us 40 hours per week and increased our efficiency by 300%. The ROI was incredible!",
      author: "Christinia Janelle",
      position: "CEO, TechStart Inc.",
    },
    image: "/images/ai-automation.webp",
    color: "from-[#8B5CF6] to-[#00F5FF]",
    tags: ["AI Automation", "Process Optimization", "Customer Support", "ROI Growth"],
    technologies: ["Python", "TensorFlow", "Natural Language Processing", "API Integration", "Cloud Computing"],
    next_steps:
      "Following the success of the initial implementation, TechStart Inc. is now expanding the AI automation to additional departments and exploring predictive analytics for sales forecasting.",
  },
  "brandforward-marketing": {
    title: "BrandForward - Digital Marketing Transformation",
    client: "BrandForward",
    industry: "E-commerce Fashion",
    duration: "8 months",
    team_size: "7 specialists",
    challenge:
      "BrandForward was struggling with low brand awareness, poor conversion rates, and ineffective marketing campaigns. Their online presence was minimal and they were losing market share to competitors.",
    solution:
      "We developed a comprehensive digital marketing strategy including brand repositioning, content marketing, social media campaigns, SEO optimization, and paid advertising across multiple channels.",
    implementation: [
      "Phase 1: Brand Analysis and Strategy (Months 1-2)",
      "Phase 2: Content Creation and SEO (Months 3-4)",
      "Phase 3: Social Media and Paid Campaigns (Months 5-6)",
      "Phase 4: Optimization and Scaling (Months 7-8)",
    ],
    results: {
      brand_awareness: "400%",
      conversion_rate: "180%",
      traffic_growth: "250%",
      revenue_increase: "320%",
      social_engagement: "500%",
      cost_per_acquisition: "-45%",
    },
    testimonial: {
      quote:
        "The digital marketing transformation was beyond our expectations. Our brand awareness increased by 400% and revenue grew by 320%. M&H Digital Solutions truly understands modern marketing.",
      author: "Melissa Martin",
      position: "Marketing Director, BrandForward",
    },
    image: "/images/content-marketing.webp",
    color: "from-[#F472B6] to-[#FF7600]",
    tags: ["Digital Marketing", "Brand Strategy", "SEO", "Social Media", "Growth Hacking"],
    technologies: ["Google Analytics", "Facebook Ads", "Instagram Marketing", "Content Management", "Email Automation"],
    next_steps:
      "BrandForward is now expanding internationally and implementing advanced marketing automation to further scale their growth.",
  },
  // Add more case studies as needed
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = caseStudyData[params.slug]

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-[#8B5CF6] hover:text-[#F472B6] mb-6"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Case Studies
                </Link>
                <Badge className={`bg-gradient-to-r ${caseStudy.color} text-white border-0 mb-4`}>
                  {caseStudy.industry}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">{caseStudy.title}</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{caseStudy.challenge}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-lg">
                    <Calendar className="h-5 w-5 text-[#FF7600] mb-2" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Duration</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{caseStudy.duration}</div>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <Building className="h-5 w-5 text-[#8B5CF6] mb-2" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Team Size</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{caseStudy.team_size}</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${caseStudy.color} opacity-60`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Challenge & Solution */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="glass border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="h-8 w-8 text-[#F472B6] mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Challenge</h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
                </CardContent>
              </Card>

              <Card className="glass border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <TrendingUp className="h-8 w-8 text-[#00F5FF] mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Solution</h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{caseStudy.solution}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Implementation Timeline */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gray-900 dark:text-white">Implementation</span>{" "}
              <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.implementation.map((phase: string, index: number) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${caseStudy.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{phase}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-[#F472B6] to-[#FF7600] bg-clip-text text-transparent">
                Remarkable Results
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(caseStudy.results).map(([key, value], index) => (
                <ScrollAnimation key={key} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div
                        className={`text-4xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent mb-2`}
                      >
                        {value}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 capitalize">{key.replace(/_/g, " ")}</div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Technologies Used */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gray-900 dark:text-white">Technologies</span>{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                & Tools Used
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.technologies.map((tech: string, index: number) => (
                <Badge key={index} className="glass text-gray-700 dark:text-gray-300 border-0 px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Testimonial */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Card className="glass border-0 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="text-6xl text-[#F472B6] mb-6">"</div>
                <blockquote className="text-2xl text-gray-700 dark:text-gray-300 italic mb-8">
                  {caseStudy.testimonial.quote}
                </blockquote>
                <div className="flex items-center justify-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${caseStudy.color} rounded-full flex items-center justify-center mr-4`}
                  >
                    <span className="text-white font-bold text-xl">
                      {caseStudy.testimonial.author
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 dark:text-white">{caseStudy.testimonial.author}</div>
                    <div className="text-gray-600 dark:text-gray-400">{caseStudy.testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollAnimation>

      {/* Next Steps */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Card className="glass border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What's Next?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{caseStudy.next_steps}</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag: string, index: number) => (
                    <Badge key={index} className={`bg-gradient-to-r ${caseStudy.color} text-white border-0`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Ready for</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                  Similar Results?
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar success with a customized solution for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="calendly-button"
                >
                  Schedule Strategy Call
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link href="/case-studies">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full"
                  >
                    View More Case Studies
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
