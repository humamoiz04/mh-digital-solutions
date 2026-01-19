'use client'

import { ReactNode } from 'react'
import { Section } from '@/components/Section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ResultMetric {
  metric: string
  label: string
  icon: ReactNode
}

interface CaseStudyTemplateProps {
  title: string
  subtitle: string
  clientName: string
  clientLogo?: string
  industry: string
  results: ResultMetric[]
  challenge: {
    title: string
    description: string
    bulletPoints: string[]
  }
  solution: {
    title: string
    description: string
    bulletPoints: string[]
  }
  implementation?: {
    title: string
    description: string
    bulletPoints: string[]
  }
  impact: {
    title: string
    description: string
    bulletPoints: string[]
  }
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  children?: ReactNode
}

export function CaseStudyTemplate({
  title,
  subtitle,
  clientName,
  clientLogo,
  industry,
  results,
  challenge,
  solution,
  implementation,
  impact,
  testimonial,
  children,
}: CaseStudyTemplateProps) {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <Section className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 mb-6 inline-block">
            Case Study: {industry}
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight text-balance">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-8">{subtitle}</p>

          {/* Client Logo or Name */}
          {clientLogo ? (
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8 border-2 border-cyan-500/30">
              <Image
                src={clientLogo || "/placeholder.svg"}
                alt={clientName}
                fill
                className="object-contain p-8 bg-gradient-to-br from-slate-900 to-slate-800"
              />
            </div>
          ) : (
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl mb-8 border border-slate-700">
              <h2 className="text-4xl font-bold text-white">{clientName}</h2>
              <p className="text-slate-400 mt-2">{industry} Industry</p>
            </div>
          )}
        </div>
      </Section>

      {/* Results Overview */}
      <Section className="py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Remarkable Results</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <Card
              key={index}
              className="glass-card p-6 text-center border-t-2 border-fuchsia-500 hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">{result.metric}</div>
              <p className="text-slate-300 font-semibold">{result.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* The Challenge */}
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">{challenge.title}</h2>
          <Card className="glass-card p-8 border-l-4 border-red-500 mb-8">
            <p className="text-lg text-slate-300 mb-6">{challenge.description}</p>
            <ul className="space-y-3 text-slate-300">
              {challenge.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 font-bold">✗</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* The Solution */}
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">{solution.title}</h2>
          <Card className="glass-card p-8 border-l-4 border-green-500 mb-8">
            <p className="text-lg text-slate-300 mb-6">{solution.description}</p>
            <ul className="space-y-3 text-slate-300">
              {solution.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Implementation Section */}
      {implementation && (
        <Section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">{implementation.title}</h2>
            <Card className="glass-card p-8 border-l-4 border-blue-500 mb-8">
              <p className="text-lg text-slate-300 mb-6">{implementation.description}</p>
              <ul className="space-y-3 text-slate-300">
                {implementation.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>
      )}

      {/* Impact Section */}
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">{impact.title}</h2>
          <Card className="glass-card p-8 border-l-4 border-cyan-500 mb-8">
            <p className="text-lg text-slate-300 mb-6">{impact.description}</p>
            <ul className="space-y-3 text-slate-300">
              {impact.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Testimonial Section */}
      {testimonial && (
        <Section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card p-8 border-2 border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10">
              <blockquote className="text-2xl font-bold text-white mb-6">"{testimonial.quote}"</blockquote>
              <div>
                <p className="text-lg font-bold text-white">{testimonial.author}</p>
                <p className="text-slate-400">{testimonial.position}</p>
              </div>
            </Card>
          </div>
        </Section>
      )}

      {/* Custom Content */}
      {children}

      {/* CTA Section */}
      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold text-white">Ready to Achieve Similar Results?</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow like {clientName}. Schedule a free consultation today.
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
              View Our Portfolio
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
