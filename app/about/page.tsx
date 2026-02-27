import { Section } from "@/components/Section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Users, Lightbulb, Handshake, Award, Star, TrendingUp, Heart, Target, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"
import { RatingDisplay } from "@/components/rating-display"

export const metadata: Metadata = {
  title: "About MH Digital Solutions | Trusted Digital Marketing Experts in Vacaville, CA",
  description:
    "Learn why MH Digital Solutions is the trusted digital marketing agency in Vacaville, California. Meet our passionate team dedicated to your business growth with proven results. Serving Vacaville, Fairfield, Dixon, Vallejo, Concord, and Walnut Creek.",
  keywords:
    "About MH Digital Solutions, Digital marketing agency Vacaville, Local marketing experts California, Experienced digital marketing team, Northern California digital agency",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/about",
  },
  openGraph: {
    title: "About MH Digital Solutions | Digital Marketing Experts in Vacaville, CA",
    description:
      "Meet the passionate team behind MH Digital Solutions, Vacaville's leading digital marketing agency with 500+ successful clients.",
    url: "https://www.mhdigitalsolution.com/about",
    images: [
      {
        url: "https://www.mhdigitalsolution.com/images/team-analytics-collaboration.webp",
        width: 1200,
        height: 630,
        alt: "Digital marketing team in Vacaville office - MH Digital Solutions",
      },
    ],
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuously seeking new and better ways to solve problems and create value for Vacaville businesses.",
      color: "text-[#FFC0CB]",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description:
        "Working closely with Northern California clients and partners to achieve shared success and growth.",
      color: "text-[#e49273]",
    },
    {
      icon: Users,
      title: "Client-Centricity",
      description: "Prioritizing Vacaville business needs and delivering tailored solutions that exceed expectations.",
      color: "text-[#e49273]",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering high-quality results and maintaining the highest standards in Northern California.",
      color: "text-[#FFC0CB]",
    },
  ]

  const achievements = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "1000+", label: "Projects Completed", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "5+", label: "Years Experience", icon: TrendingUp },
  ]

  return (
    <div className="relative z-10">
      <StructuredData type="Organization" />
      <StructuredData type="LocalBusiness" />

      <Section glass>
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#FFC0CB] to-[#e49273] text-white hover:from-[#FFB0C0] hover:to-[#d48264]">
            Meet Our Leadership
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-[#FFC0CB] to-[#e49273] bg-clip-text text-transparent mb-6">
            About MH Digital Solutions
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Your Local Marketing Partner in Vacaville
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded by visionary entrepreneur MK, MH Digital Solutions has transformed from a passionate startup into
            Vacaville's leading digital marketing agency, trusted by 500+ businesses across Northern California and
            nationwide.
          </p>

          <div className="flex justify-center mt-6">
            <RatingDisplay rating={4.9} reviewCount={127} size="lg" />
          </div>
        </div>
      </Section>

      <Section glass>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-[#FFC0CB]">
                <Image
                  src="/images/mk-ceo.webp"
                  alt="MK - CEO & Founder of MH Digital Solutions Vacaville"
                  fill
                  className="object-cover"
                  title="MK, CEO and Founder of MH Digital Solutions"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">MK</h3>
                <p className="font-semibold" style={{ color: "#e49273" }}>
                  CEO & Founder
                </p>
              </div>
            </div>
            <blockquote className="text-lg text-muted-foreground italic border-l-4" style={{ borderColor: "#e49273" }}>
              "Our mission is simple: to empower Vacaville businesses with cutting-edge digital solutions that drive
              real growth. Every client's success story becomes part of our legacy in Northern California and beyond."
            </blockquote>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5 years of experience in digital marketing and technology, MK founded MH Digital Solutions with
              a vision to bridge the gap between innovative technology and business success in Vacaville and throughout
              Northern California. Under his leadership, the company has grown from a small startup to a trusted partner
              for 500+ businesses worldwide.
            </p>
          </div>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/images/business-process-infographic.webp"
              alt="Digital marketing team in Vacaville office working on business process innovation"
              fill
              className="object-contain rounded-2xl"
              title="Business Process Innovation at MH Digital Solutions"
            />
          </div>
        </div>
      </Section>

      <Section glass>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/images/mr-mrs-mk.webp"
              alt="MK and family - The journey of building Vacaville's premier digital marketing agency"
              fill
              className="object-contain rounded-2xl"
              title="The founding story of MH Digital Solutions in Vacaville, California"
            />
          </div>
          <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-[#FFC0CB] to-[#e49273] text-white hover:from-[#FFB0C0] hover:to-[#d48264]">
              Our Success Story
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFC0CB] to-[#e49273] bg-clip-text text-transparent">
              From Vision to Reality in Vacaville
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a dream shared between MK and his partner has evolved into Vacaville's thriving digital
              marketing agency. Their combined passion for technology and business growth laid the foundation for MH
              Digital Solutions' core values of innovation, integrity, and client success throughout Northern
              California.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 glass-card rounded-xl hover:shadow-lg transition-shadow">
                  <achievement.icon className="w-8 h-8 text-[#FFC0CB] mx-auto mb-2" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#FFC0CB] to-[#e49273] bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section glass>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-[#e49273] to-[#f1cea7] text-white hover:from-[#d48264] hover:to-[#e0bd94]">
              Our Company
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#FFC0CB] to-[#e49273] bg-clip-text text-transparent">
              Meet the Team of Digital Marketing Experts
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MH Digital Solutions is Vacaville's leading digital marketing agency dedicated to empowering Northern
              California businesses with cutting-edge digital marketing and IT solutions. Founded on the principles of
              innovation, integrity, and client success, we strive to be your trusted partner in navigating the complex
              digital landscape.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of seasoned Vacaville-based experts brings together diverse skills in web development, SEO,
              digital marketing, AI automation, cloud solutions, and IT consulting. We are passionate about transforming
              challenges into opportunities and helping our Northern California clients achieve measurable growth and
              sustainable success.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose MH Digital Solutions in Vacaville</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: "#e49273" }} />
                  <span>Local Vacaville expertise with deep understanding of Northern California market dynamics</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: "#e49273" }} />
                  <span>Proven track record with 500+ successful client partnerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: "#e49273" }} />
                  <span>Dedicated team of certified digital marketing professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: "#e49273" }} />
                  <span>Cutting-edge AI-powered solutions and innovative strategies</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-[#F0E6EF] text-[#3C3C3C]">
                AI-Powered Solutions
              </Badge>
              <Badge variant="secondary" className="bg-[#F0E6EF] text-[#3C3C3C]">
                24/7 Support
              </Badge>
              <Badge variant="secondary" className="bg-[#F0E6EF] text-[#3C3C3C]">
                Proven Results
              </Badge>
              <Badge variant="secondary" className="bg-[#F0E6EF] text-[#3C3C3C]">
                Vacaville Local
              </Badge>
            </div>
          </div>
          <div className="relative w-full h-[400px] md:h-[600px]">
            <Image
              src="/images/analytics-team.webp"
              alt="Digital marketing team collaboration and analytics at MH Digital Solutions Vacaville office"
              fill
              className="object-contain rounded-2xl"
              title="Team Analytics and Collaboration at MH Digital Solutions"
            />
          </div>
        </div>
      </Section>

      <Section glass>
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-[#FFC0CB] to-[#e49273] text-white hover:from-[#FFB0C0] hover:to-[#d48264]">
            Our Foundation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFC0CB] to-[#e49273] bg-clip-text text-transparent mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            These principles guide every decision we make and every solution we deliver for our Vacaville clients and
            businesses across Northern California.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card
              key={index}
              className="glass-card flex flex-col items-center p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#FFC0CB] to-[#e49273]">
                <value.icon className={`h-12 w-12 ${value.color} text-white`} />
              </div>
              <CardTitle className="mb-2 text-2xl font-semibold text-foreground">{value.title}</CardTitle>
              <CardContent className="text-muted-foreground">{value.description}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section glass>
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-[#FFC0CB] to-[#e49273] text-white hover:from-[#FFB0C0] hover:to-[#d48264]">
            Client Success
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFC0CB] to-[#e49273] bg-clip-text text-transparent mb-4">
            Trusted by Northern California Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From Vacaville startups to established Northern California enterprises, we've helped businesses across
            industries achieve their digital transformation goals with measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="glass-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="relative w-full h-[100px] mb-4">
                <Image
                  src="/images/ai-automation-new.webp"
                  alt="AI Automation Solutions - Workflow optimization and business efficiency"
                  fill
                  className="object-contain opacity-80"
                  title="AI Automation Industry Leadership"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI & Automation</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Business automation with AI-powered workflow optimization
              </p>
              <Link
                href="/services/ai-automation"
                className="text-[#e49273] hover:text-[#d48264] text-sm font-medium inline-flex items-center"
              >
                View AI Solutions <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="relative w-full h-[100px] mb-4">
                <Image
                  src="/images/cesar-car-wash.webp"
                  alt="Car Wash - Mobile services digital marketing success"
                  fill
                  className="object-contain opacity-80"
                  title="Mobile Services Client Success"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Mobile Services</h3>
              <p className="text-muted-foreground text-sm mb-3">On-demand car wash with smart booking systems</p>
              <Link
                href="/case-studies/mobile-app-success-story"
                className="text-[#e49273] hover:text-[#d48264] text-sm font-medium inline-flex items-center"
              >
                View Mobile App Case Study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div
                className="w-full h-[100px] mb-4 rounded-lg flex items-center justify-center"
                style={{ backgroundImage: "linear-gradient(to right, #FFC0CB, #e49273)" }}
              >
                <Star className="w-12 h-12 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Your Vacaville Business Next</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Ready to join our Northern California success stories?
              </p>
              <Link
                href="/case-studies"
                className="text-[#e49273] hover:text-[#d48264] text-sm font-medium inline-flex items-center"
              >
                View All Case Studies <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FFC0CB] to-[#e49273] bg-clip-text text-transparent mb-4">
            Latest Insights from Our Vacaville Team
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Stay updated with the latest trends and strategies in digital marketing
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Link href="/blog/seo-strategies-2024" className="block group">
                <h4 className="font-semibold mb-2 group-hover:text-[#e49273] transition-colors">SEO Strategies 2024</h4>
                <p className="text-sm text-muted-foreground">
                  Discover the latest SEO strategies for enhancing your Vacaville business's online visibility.
                </p>
              </Link>
            </CardContent>
          </Card>
          <Card className="glass-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Link href="/blog/ai-automation-revolution-2024" className="block group">
                <h4 className="font-semibold mb-2 group-hover:text-[#e49273] transition-colors">
                  AI Automation Revolution 2024
                </h4>
                <p className="text-sm text-muted-foreground">
                  Explore how AI automation is transforming industries and driving efficiency in Northern California.
                </p>
              </Link>
            </CardContent>
          </Card>
          <Card className="glass-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Link href="/blog/mobile-app-development-trends-2024" className="block group">
                <h4 className="font-semibold mb-2 group-hover:text-[#e49273] transition-colors">
                  Mobile App Development Trends 2024
                </h4>
                <p className="text-sm text-muted-foreground">
                  Stay ahead with the latest mobile app development trends shaping Vacaville's digital future.
                </p>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-[#e49273] to-[#f1cea7] text-white hover:from-[#d48264] hover:to-[#e0bd94]"
          >
            <Link href="/blog">Read More Articles</Link>
          </Button>
        </div>
      </Section>

      <Section glass>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFC0CB] to-[#e49273] bg-clip-text text-transparent mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 500+ Northern California businesses that trust MH Digital Solutions for their digital marketing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-[#e49273] to-[#f1cea7] text-white hover:from-[#d48264] hover:to-[#e0bd94]"
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-[#e49273] text-[#e49273] hover:bg-[#f1cea7] hover:bg-opacity-10 bg-transparent"
            >
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
