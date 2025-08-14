import { Section } from "@/components/Section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Users, Lightbulb, Handshake, Award, Star, TrendingUp, Heart, Target } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously seeking new and better ways to solve problems and create value.",
      color: "text-pink-600",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Working closely with clients and partners to achieve shared success.",
      color: "text-purple-600",
    },
    {
      icon: Users,
      title: "Client-Centricity",
      description: "Prioritizing client needs and delivering tailored solutions that exceed expectations.",
      color: "text-fuchsia-600",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering high-quality results and maintaining the highest standards.",
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
      <Section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-200">Meet Our Leadership</Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-6">
            Driven by Vision, Powered by Innovation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by visionary entrepreneur MK, MH Digital Solution has transformed from a passionate startup into a
            leading digital agency trusted by businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-pink-200">
                <Image src="/images/mk-ceo.webp" alt="MK - CEO & Founder" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">MK</h2>
                <p className="text-pink-600 font-semibold">CEO & Founder</p>
              </div>
            </div>
            <blockquote className="text-lg text-muted-foreground italic border-l-4 border-pink-500 pl-6">
              "Our mission is simple: to empower businesses with cutting-edge digital solutions that drive real growth.
              Every client's success story becomes part of our legacy."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              With over 5 years of experience in digital marketing and technology, MK founded MH Digital Solution with a
              vision to bridge the gap between innovative technology and business success. Under his leadership, the
              company has grown from a small startup to a trusted partner for 500+ businesses worldwide.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <Image
              src="/images/business-process-infographic.webp"
              alt="Business Process Innovation"
              fill
              className="object-contain z-10"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image src="/images/mr-mrs-mk.webp" alt="MK and Family - The Journey" fill className="object-contain" />
            </div>
            <div className="space-y-6">
              <Badge className="bg-pink-600 text-white hover:bg-pink-700">Our Success Story</Badge>
              <h3 className="text-3xl font-bold gradient-text">From Vision to Reality</h3>
              <p className="text-lg text-muted-foreground">
                What started as a dream shared between MK and his partner has evolved into a thriving digital agency.
                Their combined passion for technology and business growth laid the foundation for MH Digital Solution's
                core values of innovation, integrity, and client success.
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Our Company</Badge>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
              Transforming Businesses Through Digital Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              MH Digital Solution is a leading agency dedicated to empowering businesses with cutting-edge digital
              marketing and IT solutions. Founded on the principles of innovation, integrity, and client success, we
              strive to be your trusted partner in navigating the complex digital landscape.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team of seasoned experts brings together diverse skills in web development, SEO, digital marketing, AI
              automation, cloud solutions, and IT consulting. We are passionate about transforming challenges into
              opportunities and helping our clients achieve measurable growth and sustainable success.
            </p>
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
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <Image
              src="/images/analytics-team.webp"
              alt="Team Analytics and Collaboration"
              fill
              className="object-contain z-10"
            />
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24 text-center">
        <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-200">Our Foundation</Badge>
        <h2 className="text-4xl font-bold text-foreground mb-4 gradient-text">Our Core Values</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          These principles guide every decision we make and every solution we deliver for our clients.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card
              key={index}
              className="glass-card flex flex-col items-center p-6 text-center hover:scale-105 transition-transform duration-300"
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
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-200">Client Success</Badge>
          <h2 className="text-4xl font-bold gradient-text mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startups to established enterprises, we've helped businesses across industries achieve their digital
            transformation goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 glass-card rounded-xl">
            <Image
              src="/images/exclusive-auto-detailing.webp"
              alt="Exclusive Auto Detailing - Client Success"
              width={200}
              height={100}
              className="mx-auto mb-4 opacity-80"
            />
            <h3 className="font-semibold text-lg mb-2">Automotive Industry</h3>
            <p className="text-muted-foreground text-sm">Premium detailing services with digital excellence</p>
          </div>

          <div className="text-center p-6 glass-card rounded-xl">
            <Image
              src="/images/cesar-car-wash.webp"
              alt="Cesar Car Wash - Mobile Services"
              width={200}
              height={100}
              className="mx-auto mb-4 opacity-80"
            />
            <h3 className="font-semibold text-lg mb-2">Mobile Services</h3>
            <p className="text-muted-foreground text-sm">On-demand car wash with smart booking systems</p>
          </div>

          <div className="text-center p-6 glass-card rounded-xl">
            <div className="w-[200px] h-[100px] mx-auto mb-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg flex items-center justify-center">
              <Star className="w-12 h-12 text-pink-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Your Business Next</h3>
            <p className="text-muted-foreground text-sm">Ready to join our success stories?</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
