'use client'

import { ReactNode } from 'react'
import { Section } from '@/components/Section'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, Clock, Share2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPostTemplateProps {
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  featuredImage?: string
  tags?: string[]
  children: ReactNode
}

export function BlogPostTemplate({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  featuredImage,
  tags = [],
  children,
}: BlogPostTemplateProps) {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <Section glass className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 mb-6 inline-block">
            {category}
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight text-balance">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-8 text-balance">{excerpt}</p>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readTime} min read</span>
            </div>
          </div>

          {/* Featured Image */}
          {featuredImage && (
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8 border border-slate-700">
              <Image
                src={featuredImage || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </Section>

      {/* Article Content */}
      <Section glass className="py-12 md:py-20">
        <article className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <div className="prose prose-invert space-y-8 text-slate-300">{children}</div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-700">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </article>
      </Section>

      {/* Share Section */}
      <Section glass className="py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between border-t border-b border-slate-700 py-6">
          <span className="text-slate-400 font-semibold">Share this article:</span>
          <div className="flex gap-3">
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent hover:bg-slate-800 border-slate-700"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Facebook
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent hover:bg-slate-800 border-slate-700"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent hover:bg-slate-800 border-slate-700"
            >
              <Share2 className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </Section>

      {/* Related Articles Section */}
      <Section glass className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="glass-card hover:shadow-lg hover:shadow-cyan-500/20 transition-all hover:scale-105"
              >
                <CardContent className="p-6">
                  <Badge className="bg-blue-500/20 text-blue-300 mb-4 inline-block">
                    Digital Marketing
                  </Badge>
                  <h3 className="text-lg font-bold text-white mb-3">Related Article Title #{i}</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Brief description of the related article to help readers find relevant content.
                  </p>
                  <Link
                    href="#"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 text-sm font-semibold"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section glass>
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Business?</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Get expert advice tailored to your business needs. Schedule a free consultation with our team today.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 hover:scale-105 transition-transform"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>
    </div>
  )
}
