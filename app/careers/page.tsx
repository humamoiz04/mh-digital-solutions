import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Briefcase, Heart, ArrowRight } from 'lucide-react'
import { CTASection } from "@/components/cta-section"

export default function CareersPage() {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description: "We work together as a team to achieve exceptional results for our clients.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from strategy to execution.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We embrace new ideas and technologies to drive better outcomes.",
    },
  ]

  const jobs = [
    {
      title: "Senior Digital Marketing Strategist",
      department: "Digital Marketing",
      location: "Remote",
      type: "Full-Time",
    },
    {
      title: "Web Developer (React/Next.js)",
      department: "Development",
      location: "Remote",
      type: "Full-Time",
    },
    {
      title: "SEO Specialist",
      department: "Digital Marketing",
      location: "Remote",
      type: "Full-Time",
    },
    {
      title: "Business Consultant",
      department: "Consulting",
      location: "Remote",
      type: "Full-Time",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-Time",
    },
    {
      title: "Customer Success Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-Time",
    },
  ]

  const benefits = [
    "Competitive Salary & Benefits",
    "Remote Work Flexibility",
    "Professional Development",
    "Collaborative Team Environment",
    "Health & Wellness Programs",
    "Paid Time Off",
  ]

  return (
    <div className="relative z-10">
      <Section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Join Our Team
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-6">
            Build Your Career With MH Digital Solution
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join a dynamic team of digital marketing experts, developers, and consultants helping businesses grow and transform.
          </p>
        </div>
      </Section>

      <Section className="py-16 md:py-24" glass>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">Our Culture & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <CardTitle className="mb-2">{value.title}</CardTitle>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">Why Work With Us</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/20">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <Card key={index} className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <div className="flex flex-wrap gap-3 text-muted-foreground text-sm">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button className="gradient-button w-full md:w-auto">
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/team-collaboration.webp"
              alt="MH Digital Solution Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold text-foreground">Ready to Make an Impact?</h2>
            <p className="text-lg text-muted-foreground">
              We're always looking for talented individuals who are passionate about digital marketing, technology, and helping businesses succeed. If you don't see a position that matches your skills, feel free to reach out.
            </p>
            <Link href="/contact">
              <Button className="gradient-button px-6 py-3 text-lg">Get In Touch</Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section glass>
        <CTASection />
      </Section>
    </div>
  )
}
