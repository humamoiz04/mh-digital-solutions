import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Zap, ArrowRight, CheckCircle } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import { Floating Background } from "@/components/ui/floating-background"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Badge className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] text-white border-0 mb-6">
              🚀 Our Story
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Transforming Businesses Through</span>{" "}
              <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're a team of passionate digital experts dedicated to solving real business problems and driving
              measurable growth through cutting-edge technology solutions
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Mission & Vision */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Our</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Mission
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  To empower businesses of all sizes with innovative digital solutions that drive growth, improve
                  efficiency, and create lasting competitive advantages in an ever-evolving marketplace.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#00F5FF] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Problem-Solving Focus</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We identify and solve real business challenges with practical solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#8B5CF6] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Measurable Results</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Every solution is designed to deliver quantifiable business impact
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#F472B6] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Long-term Partnership</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We build lasting relationships that grow with your business
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="glass border-0 text-center hover-lift">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-[#FF7600] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">500+</h3>
                    <p className="text-gray-600 dark:text-gray-400">Projects Delivered</p>
                  </CardContent>
                </Card>

                <Card className="glass border-0 text-center hover-lift">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-[#00F5FF] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">98%</h3>
                    <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
                  </CardContent>
                </Card>

                <Card className="glass border-0 text-center hover-lift">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-[#8B5CF6] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">250%</h3>
                    <p className="text-gray-600 dark:text-gray-400">Average ROI</p>
                  </CardContent>
                </Card>

                <Card className="glass border-0 text-center hover-lift">
                  <CardContent className="p-6">
                    <Zap className="h-12 w-12 text-[#F472B6] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">5+</h3>
                    <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Values */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our Core</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Results-Driven",
                  description:
                    "We focus on delivering measurable outcomes that directly impact your business success and growth trajectory.",
                  color: "from-[#FF7600] to-[#F472B6]",
                },
                {
                  icon: Zap,
                  title: "Innovation First",
                  description:
                    "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage.",
                  color: "from-[#8B5CF6] to-[#00F5FF]",
                },
                {
                  icon: Users,
                  title: "Client Partnership",
                  description:
                    "We believe in building long-term relationships based on trust, transparency, and mutual success.",
                  color: "from-[#F472B6] to-[#8B5CF6]",
                },
              ].map((value, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`service-card-${(index % 3) + 1} border-0 hover-lift text-center`}>
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                      >
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Team Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Meet Our</span>{" "}
                <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                  Expert Team
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Passionate professionals dedicated to your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "MK",
                  role: "CEO & Founder",
                  expertise: "Business Strategy & AI Solutions",
                  image: "/images/team/ceo-working.webp",
                  color: "#FF7600",
                },
                {
                  name: "Senorita",
                  role: "Creative Director",
                  expertise: "Brand Design & Digital Marketing",
                  image: "/images/team/creative-director.png",
                  color: "#F472B6",
                },
                {
                  name: "Farhan Siddiqui",
                  role: "Lead Developer",
                  expertise: "Full-Stack Development & Architecture",
                  image: "/placeholder.svg?height=300&width=300",
                  color: "#00F5FF",
                },
                {
                  name: "Ahmed Shah",
                  role: "Researcher",
                  expertise: "Market Research & Data Analysis",
                  image: "/images/team/researcher.webp",
                  color: "#8B5CF6",
                },
              ].map((member, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 hover-lift overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-64">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-sm opacity-90">{member.role}</p>
                        </div>
                      </div>
                      <div className="p-6 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">{member.expertise}</p>
                      </div>
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
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7600]/10 via-[#F472B6]/10 to-[#8B5CF6]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Partner
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">with Us?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our expertise and passion can help transform your business and achieve your goals
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Start Your Journey
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white rounded-full"
                  >
                    Learn More About Us
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
