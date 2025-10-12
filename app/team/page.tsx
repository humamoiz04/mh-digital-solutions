import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Our Team",
  description:
    "Meet the leadership and experts behind MH Digital Solution—strategists, engineers, and creatives helping businesses grow with AI and digital marketing.",
  path: "/team",
})

export default function TeamPage() {
  const teamMembers = [
    {
      name: "MK",
      role: "CEO & Founder",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MK-3duESFucUlXokvTbM5VSDMwOIMj1Mf.webp",
      bio: "MK founded MH Digital Solution with a vision to bridge the gap between technology and business growth. With over 12 years in digital strategy, he's passionate about helping businesses transform digitally.",
      expertise: ["Digital Strategy", "Business Development", "Client Relations"],
      email: "mk@mhdigitalsolution.com",
      linkedin: "#",
    },
    {
      name: "Senorita",
      role: "CTO & Business Consultant",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/senorita-AwK0HjasaQrDczWORsi41YBz76WdDi.webp",
      bio: "Senorita brings 7+ years of business consulting experience. She leads our consultation team and ensures we deliver cutting-edge solutions that scale with our clients' growth.",
      expertise: ["Business Consultation", "Business Solutions", "Growth Strategy"],
      email: "seno@mhdigitalsolution.com",
      linkedin: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Digital Marketing",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%282%29-pVYxyzw3jc2Sg0rKYeoHLcJJQMza6z.webp",
      bio: "Emily specializes in data-driven marketing strategies that deliver measurable results. Her campaigns have generated over $50M in revenue for our clients across various industries.",
      expertise: ["SEO Strategy", "PPC Management", "Analytics & Reporting"],
      email: "emily@mhdigitalsolution.com",
      linkedin: "#",
    },
    {
      name: "Farhan Siddiqui",
      role: "Senior UI/UX Designer",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%289%29%20%281%29-0OII6OB90mb9Cyt4k87Tg0h28WCHxY.webp",
      bio: "David creates user experiences that convert. His design philosophy centers on understanding user behavior and creating interfaces that feel intuitive and engaging.",
      expertise: ["User Experience Design", "Interface Design", "Design Systems"],
      email: "fs@mhdigitalsolution.com",
      linkedin: "#",
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%281%29-qwPqtSLZajxiCrOfrtRlvq8fMqo2gi.webp",
      bio: "Lisa ensures every project runs smoothly from conception to delivery. Her attention to detail and communication skills keep our clients informed and projects on track.",
      expertise: ["Project Management", "Client Communication", "Process Optimization"],
      email: "lisa@mhdigitalsolution.com",
      linkedin: "#",
    },
    {
      name: "James Wilson",
      role: "SEO Specialist",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2811%29%20%281%29-glw5u6nBxFjyVlBEu6sYiCq2CSfsfF.webp",
      bio: "James has helped over 200 businesses improve their search rankings. His technical SEO expertise and content strategy approach have consistently delivered top-3 rankings.",
      expertise: ["Technical SEO", "Content Strategy", "Local SEO"],
      email: "james@mhdigitalsolution.com",
      linkedin: "#",
    },
    {
      name: "Alex Martinez",
      role: "Cloud Solutions Architect",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%288%29-8E91Jo9cejRyp275T0cHP5gaodSjyS.webp",
      bio: "Alex designs and implements scalable cloud infrastructures. His solutions have helped clients reduce costs by 40% while improving performance and security.",
      expertise: ["AWS/Azure", "DevOps", "Security Architecture"],
      email: "alex@mhdigitalsolution.com",
      linkedin: "#",
    },
    {
      name: "Rachel Green",
      role: "Content Strategist",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%282%29-PbCOueP33t15ItCfMyJjCjXvFa8dzn.webp",
      bio: "Rachel crafts compelling content that drives engagement and conversions. Her content strategies have increased client engagement rates by an average of 250%.",
      expertise: ["Content Marketing", "Copywriting", "Brand Storytelling"],
      email: "rachel@mhdigitalsolution.com",
      linkedin: "#",
    },
    {
      name: "Robert Kim",
      role: "Business Consultant",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-yo5PADeIwpaxGsg7ZCOyxNM6xzlxvF.webp",
      bio: "Robert helps businesses optimize their operations and growth strategies. His analytical approach and industry expertise have guided over 100 successful digital transformations.",
      expertise: ["Business Strategy", "Digital Transformation", "Process Improvement"],
      email: "robert@mhdigitalsolution.com",
      linkedin: "#",
    },
    {
      name: "Maya Patel",
      role: "Data Analyst",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%283%29-oxD0ekYxx1DHpF5Iw3G6OcTDnIl7Vl.webp",
      bio: "Maya turns data into actionable insights. Her analytical skills help our clients make informed decisions and optimize their marketing spend for maximum ROI.",
      expertise: ["Data Analysis", "Marketing Analytics", "Business Intelligence"],
      email: "maya@mhdigitalsolution.com",
      linkedin: "#",
    },
  ]

  return (
    <div className="relative z-10">
      <Section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 gradient-text">Meet Our Expert Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of digital experts is united by a shared mission: to help businesses thrive in the digital
            age through innovative solutions and exceptional service.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{member.name}</CardTitle>
                <p className="text-primary font-semibold">{member.role}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href={member.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section glass className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Team Culture</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Innovation First</h3>
              <p className="text-muted-foreground">
                We stay ahead of industry trends and continuously learn new technologies to deliver cutting-edge
                solutions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Collaborative Spirit</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and maintain open communication across all departments and projects.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Results Driven</h3>
              <p className="text-muted-foreground">
                Every team member is committed to delivering measurable results that drive real business growth for our
                clients.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
