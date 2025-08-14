"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, ExternalLink, Award, TrendingUp } from "lucide-react"
import { caseStudies, industries } from "@/lib/content-data"

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("All")

  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".scroll-fade-in, .scroll-fade-up")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const matchesSearch =
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry
      return matchesSearch && matchesIndustry
    })
  }, [searchTerm, selectedIndustry])

  const featuredStudies = caseStudies.filter((study) => study.featured)

  return (
    <div className="relative z-10 section-with-blobs">
      <Section className="py-16 md:py-24">
        <div className="text-center mb-12 scroll-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white">
            <div className="icon-gradient-bg w-4 h-4 mr-2">
              <Award className="w-3 h-3" />
            </div>
            Proven Results
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">Our Client Success Stories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses across industries achieve remarkable growth through strategic
            digital marketing, innovative technology solutions, and data-driven strategies.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 scroll-fade-up">
          <div className="text-center glass-card p-6">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center glass-card p-6">
            <div className="text-3xl font-bold gradient-text mb-2">300%</div>
            <div className="text-sm text-muted-foreground">Avg. Growth Rate</div>
          </div>
          <div className="text-center glass-card p-6">
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center glass-card p-6">
            <div className="text-3xl font-bold gradient-text mb-2">18</div>
            <div className="text-sm text-muted-foreground">Months Avg. ROI</div>
          </div>
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16 scroll-fade-up">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Success Stories</h2>
            <p className="text-muted-foreground">Our most impactful client transformations</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-8">
            {featuredStudies.slice(0, 4).map((study, index) => (
              <Card
                key={index}
                className="glass-card group border-2 border-fuchsia-200/20 scroll-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Link href={`/case-studies/${study.slug}`}>
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      width={500}
                      height={250}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </Link>
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {study.industry}
                    </Badge>
                    <Badge variant="outline" className="text-xs text-green-600 font-medium">
                      {study.results}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">{study.description}</p>

                  {/* Metrics Display */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(study.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center p-2 bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded">
                        <div className="text-sm font-bold text-fuchsia-600">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <Link href={`/case-studies/${study.slug}`}>
                    <Button className="w-full gradient-button group">
                      Read Full Case Study
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform colorful-icon" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4 scroll-fade-up">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Complete Portfolio Collection</h2>
            <p className="text-muted-foreground">Browse all our successful projects and case studies</p>
          </div>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 colorful-icon" />
            <Input
              type="text"
              placeholder="Search portfolio projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((industry) => (
              <Badge
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedIndustry === industry
                    ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white"
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedIndustry(industry)}
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredStudies.map((study, index) => (
            <Card key={index} className="glass-card flex flex-col group scroll-fade-in">
              <Link href={`/case-studies/${study.slug}`}>
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {study.industry}
                  </Badge>
                  <Badge variant="outline" className="text-xs text-green-600 font-medium">
                    {study.results}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  <Link href={`/case-studies/${study.slug}`} className="hover:text-primary transition-colors">
                    {study.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Industry: {study.industry}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 text-muted-foreground">{study.description}</CardContent>
              <div className="p-6 pt-0">
                <Link href={`/case-studies/${study.slug}`}>
                  <Button variant="outline" className="gradient-button bg-transparent w-full group">
                    View Portfolio Project{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform colorful-icon" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No portfolio projects found matching your search criteria.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center scroll-fade-up">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 gradient-text">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of businesses that have transformed their operations and achieved remarkable growth with our
              proven strategies.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="https://calendly.com/mhdigitalsolutionsus">
                <Button className="gradient-button">Get Your Free Strategy Session</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="gradient-button bg-transparent">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
