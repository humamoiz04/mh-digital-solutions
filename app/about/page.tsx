import { Section } from "@/components/Section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Users, Lightbulb, Handshake, Award, Star, TrendingUp, Heart, Target } from "lucide-react"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"
import { RatingDisplay } from "@/components/rating-display"

export const metadata: Metadata = {
  title: "About MH Digital Solutions | Trusted Digital Marketing Experts in Austin, TX",
  description:
    "Learn why MH Digital Solutions is the trusted digital marketing agency in Austin, Texas. Meet our passionate team dedicated to your business growth with proven results.",
  keywords:
    "About MH Digital Solutions, Digital marketing agency Austin, Local marketing experts Texas, Experienced digital marketing team, Austin digital agency",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/about",
  },
  openGraph: {
    title: "About MH Digital Solutions | Digital Marketing Experts in Austin, TX",
    description:
      "Meet the passionate team behind MH Digital Solutions, Austin's leading digital marketing agency with 500+ successful clients.",
    url: "https://www.mhdigitalsolution.com/about",
    images: [
      {
        url: "https://www.mhdigitalsolution.com/images/team-analytics-collaboration.webp",
        width: 1200,
        height: 630,
        alt: "Digital marketing team in Austin office - MH Digital Solutions",
      },
    ],
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously seeking new and better ways to solve problems and create value for Austin businesses.",
      color: "text-pink-600",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Working closely with Texas clients and partners to achieve shared success and growth.",
      color: "text-purple-600",
    },
    {
      icon: Users,
      title: "Client-Centricity",
      description: "Prioritizing Austin business needs and delivering tailored solutions that exceed expectations.",
      color: "text-fuchsia-600",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering high-quality results and maintaining the highest standards in Texas.",
      color: "text-rose-600",
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

      <Section className="py-16 md:py-24">
        <div className="text-center mb-16 scroll-fade-in">
          <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-200">Meet Our Leadership</Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-6">
            About MH Digital Solutions — Your Local Marketing Partner in Austin
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by visionary entrepreneur MK, MH Digital Solutions has transformed from a passionate startup into
            Austin's leading digital marketing agency, trusted by 500+ businesses across Texas and nationwide.
          </p>

          <div className="flex justify-center mt-6">
            <RatingDisplay rating={4.9} reviewCount={127} size="lg" />
          </div>
        </div>

        <div className="mb-20 scroll-fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 gradient-text">Our Mission and Vision</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our mission is to empower Austin businesses and companies across Texas with cutting-edge digital marketing
              solutions that drive measurable growth. We envision a future where every business, regardless of size, has
              access to world-class digital marketing expertise that transforms their online presence and accelerates
              their success.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-fade-up">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-pink-200">
                <Image
                  src="/images/mk-ceo.webp"
                  alt="MK - CEO & Founder of MH Digital Solutions Austin"
                  fill
                  className="object-cover"
                  title="MK, CEO and Founder of MH Digital Solutions"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">MK</h3>
                <p className="text-pink-600 font-semibold">CEO & Founder</p>
              </div>
            </div>
            <blockquote className="text-lg text-muted-foreground italic border-l-4 border-pink-500 pl-6">
              "Our mission is simple: to empower Austin businesses with cutting-edge digital solutions that drive real
              growth. Every client's success story becomes part of our legacy in the Texas market."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              With over 5 years of experience in digital marketing and technology, MK founded MH Digital Solutions with
              a vision to bridge the gap between innovative technology and business success in Austin and throughout
              Texas. Under his leadership, the company has grown from a small startup to a trusted partner for 500+
              businesses worldwide.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <Image
              src="/images/business-process-infographic.webp"
              alt="Digital marketing team in Austin office working on business process innovation"
              fill
              className="object-contain z-10"
              title="Business Process Innovation at MH Digital Solutions"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 scroll-fade-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/mr-mrs-mk.webp"
                alt="MK and family - The journey of building Austin's premier digital marketing agency"
                fill
                className="object-contain"
                title="The founding story of MH Digital Solutions in Austin, Texas"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-pink-600 text-white hover:bg-pink-700">Our Success Story</Badge>
              <h3 className="text-3xl font-bold gradient-text">From Vision to Reality in Austin</h3>
              <p className="text-lg text-muted-foreground">
                What started as a dream shared between MK and his partner has evolved into Austin's thriving digital
                marketing agency. Their combined passion for technology and business growth laid the foundation for MH
                Digital Solutions' core values of innovation, integrity, and client success throughout Texas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <achievement.icon className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold gradient-text">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
          <div className="space-y-6">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Our Company</Badge>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
              Meet the Team of Digital Marketing Experts
            </h2>
            <p className="text-lg text-muted-foreground">
              MH Digital Solutions is Austin's leading digital marketing agency dedicated to empowering Texas businesses
              with cutting-edge digital marketing and IT solutions. Founded on the principles of innovation, integrity,
              and client success, we strive to be your trusted partner in navigating the complex digital landscape.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team of seasoned Austin-based experts brings together diverse skills in web development, SEO, digital
              marketing, AI automation, cloud solutions, and IT consulting. We are passionate about transforming
              challenges into opportunities and helping our Texas clients achieve measurable growth and sustainable
              success.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose MH Digital Solutions in Austin</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                  <span>Local Austin expertise with deep understanding of Texas market dynamics</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                  <span>Proven track record with 500+ successful client partnerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                  <span>Dedicated team of certified digital marketing professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                  <span>Cutting-edge AI-powered solutions and innovative strategies</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                AI-Powered Solutions
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                24/7 Support
              </Badge>
              <Badge variant="secondary" className="bg-fuchsia-100 text-fuchsia-800">
                Proven Results
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Austin Local
              </Badge>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <Image
              src="/images/analytics-team.webp"
              alt="Digital marketing team collaboration and analytics at MH Digital Solutions Austin office"
              fill
              className="object-contain z-10"
              title="Team Analytics and Collaboration at MH Digital Solutions"
            />
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24 text-center">
        <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-200">Our Foundation</Badge>
        <h2 className="text-4xl font-bold text-foreground mb-4 gradient-text">Our Core Values</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          These principles guide every decision we make and every solution we deliver for our Austin clients and
          businesses across Texas.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card
              key={index}
              className="glass-card flex flex-col items-center p-6 text-center scroll-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100">
                <value.icon className={`h-12 w-12 ${value.color}`} />
              </div>
              <CardTitle className="mb-2 text-2xl font-semibold text-foreground">{value.title}</CardTitle>
              <CardContent className="text-muted-foreground">{value.description}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="text-center mb-12 scroll-fade-in">
          <Badge className="mb-4 bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-200">Client Success</Badge>
          <h2 className="text-4xl font-bold gradient-text mb-4">Trusted by Austin Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From Austin startups to established Texas enterprises, we've helped businesses across industries achieve
            their digital transformation goals with measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 glass-card rounded-xl scroll-fade-in">
            <Image
              src="/images/exclusive-auto-detailing.webp"
              alt="Exclusive Auto Detailing Austin - Digital marketing client success story"
              width={200}
              height={100}
              className="mx-auto mb-4 opacity-80"
              title="Automotive Industry Client Success in Austin"
            />
            <h3 className="font-semibold text-lg mb-2">Automotive Industry</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Premium Austin detailing services with digital marketing excellence
            </p>
            <Link
              href="/case-studies/premium-auto-detailing-expansion"
              className="text-fuchsia-600 hover:text-fuchsia-700 text-sm font-medium"
            >
              View Success Story →
            </Link>
          </div>

          <div className="text-center p-6 glass-card rounded-xl scroll-fade-in">
            <Image
              src="/images/cesar-car-wash.webp"
              alt="Cesar Car Wash Austin - Mobile services digital marketing success"
              width={200}
              height={100}
              className="mx-auto mb-4 opacity-80"
              title="Mobile Services Client Success in Austin"
            />
            <h3 className="font-semibold text-lg mb-2">Mobile Services</h3>
            <p className="text-muted-foreground text-sm mb-3">On-demand Austin car wash with smart booking systems</p>
            <Link
              href="/case-studies/mobile-app-success-story"
              className="text-fuchsia-600 hover:text-fuchsia-700 text-sm font-medium"
            >
              View Mobile App Case Study →
            </Link>
          </div>

          <div className="text-center p-6 glass-card rounded-xl scroll-fade-in">
            <div className="w-[200px] h-[100px] mx-auto mb-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg flex items-center justify-center">
              <Star className="w-12 h-12 text-pink-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Your Austin Business Next</h3>
            <p className="text-muted-foreground text-sm mb-3">Ready to join our Texas success stories?</p>
            <Link href="/case-studies" className="text-fuchsia-600 hover:text-fuchsia-700 text-sm font-medium">
              View All Case Studies →
            </Link>
          </div>
        </div>

        <div className="mt-16 scroll-fade-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Latest Insights from Our Austin Team</h3>
            <p className="text-muted-foreground">
              Stay updated with the latest trends and strategies in digital marketing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <Link
                  href="/blog/business-analytics-insights"
                  className="block hover:text-fuchsia-600 transition-colors"
                >
                  <h4 className="font-semibold mb-2">Business Analytics Insights 2024</h4>
                  <p className="text-sm text-muted-foreground">
                    Transform your Austin business with data-driven decision making and advanced analytics strategies.
                  </p>
                </Link>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6">
                <Link
                  href="/blog/hr-management-digital-transformation"
                  className="block hover:text-fuchsia-600 transition-colors"
                >
                  <h4 className="font-semibold mb-2">HR Digital Transformation</h4>
                  <p className="text-sm text-muted-foreground">
                    Modernize your HR processes with digital solutions that improve efficiency and employee experience.
                  </p>
                </Link>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6">
                <Link href="/blog/web-development-trends" className="block hover:text-fuchsia-600 transition-colors">
                  <h4 className="font-semibold mb-2">Web Development Trends 2024</h4>
                  <p className="text-sm text-muted-foreground">
                    Discover the latest web development trends shaping the future of digital experiences in Austin and
                    beyond.
                  </p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
