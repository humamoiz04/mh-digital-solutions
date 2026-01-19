'use client'

import { ReactNode } from 'react'
import { Section } from '@/components/Section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, CheckCircle, ArrowRight, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Problem {
  text: string
}

interface Solution {
  text: string
}

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface ServicePageTemplateProps {
  badgeIcon: LucideIcon
  badgeText: string
  title: string
  subtitle: string
  heroDescription: string
  problems: Problem[]
  problemsHeading: string
  problemsSubheading: string
  solutions: Solution[]
  solutionsHeading: string
  solutionsSubheading: string
  benefits: Benefit[]
  benefitsHeading: string
  faqs: FAQ[]
  caseStudySection?: ReactNode
  children?: ReactNode
}

export function ServicePageTemplate({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  subtitle,
  heroDescription,
  problems,
  problemsHeading,
  problemsSubheading,
  solutions,
  solutionsHeading,
  solutionsSubheading,
  benefits,
  benefitsHeading,
  faqs,
  caseStudySection,
  children,
}: ServicePageTemplateProps) {
  return (
    <div className="relative z-10 backdrop-blur-sm bg-white/5 min-h-screen">
      <Section glass>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <BadgeIcon className="h-4 w-4 mr-2" />
              {badgeText}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-balance">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              {heroDescription}
            </p>
          </div>

          {/* Problems Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                {problemsHeading}
              </h2>
              <p className="text-lg text-muted-foreground">{problemsSubheading}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <Card
                  key={index}
                  className="glass-card border-red-200/20 hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{problem.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-4">
                {solutionsHeading}
              </h2>
              <p className="text-lg text-muted-foreground">{solutionsSubheading}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="glass-card border-green-200/20 hover:border-green-300/30 transition-all hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{solution.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                {benefitsHeading}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass-card border-purple-200/20 hover:scale-105 transition-transform">
                  <CardHeader>
                    <benefit.icon className="h-12 w-12 text-fuchsia-500 mx-auto mb-4" />
                    <CardTitle className="text-xl font-bold text-foreground text-center">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQs Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-card hover:scale-102 transition-transform">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Custom Content */}
          {children}
        </div>
      </Section>

      {/* Case Study Section */}
      {caseStudySection}

      {/* CTA Section */}
      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help your business grow. Schedule a free consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 hover:scale-105 transition-transform"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform bg-transparent">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
