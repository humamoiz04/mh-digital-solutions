import { CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import { generateCaseStudyMetadata } from "@/lib/metadata"
import { caseStudies } from "@/lib/content-data"

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug)

  if (!caseStudy) {
    return (
      <Section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl font-bold text-foreground">Case Study Not Found</h1>
        <p className="text-lg text-muted-foreground mt-4">The case study you are looking for does not exist.</p>
        <Link href="/case-studies">
          <Button className="mt-8 gradient-button">Back to Case Studies</Button>
        </Link>
      </Section>
    )
  }

  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/case-studies" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Case Studies
        </Link>
        <Card className="glass-card p-6 md:p-8">
          <Image
            src={caseStudy.image || "/images/business-consultation-analytics.webp"}
            alt={caseStudy.title}
            width={900}
            height={500}
            className="rounded-lg mb-6 w-full h-auto object-cover"
          />
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-4xl font-bold text-foreground mb-2">{caseStudy.title}</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">Industry: {caseStudy.industry}</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none p-0">
            <h3>The Challenge</h3>
            <p>{caseStudy.challenge}</p>
            <h3>Our Solution</h3>
            <p>{caseStudy.solution}</p>
            <h3>The Results</h3>
            <ul className="list-none p-0 space-y-2">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
            <h3>Key Metrics</h3>
            <ul className="list-none p-0 space-y-2">
              {Object.entries(caseStudy.metrics).map(([key, value], idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>
                    <strong>{key}:</strong> {value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6">{caseStudy.description}</p>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (!cs) {
    return generateCaseStudyMetadata("Case Study Not Found", "Requested case study not found.", params.slug)
  }
  return generateCaseStudyMetadata(cs.title, cs.description || cs.title, params.slug)
}
