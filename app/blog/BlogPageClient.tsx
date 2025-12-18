"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Search, TrendingUp } from "lucide-react"
import { blogPosts, categories } from "@/lib/content-data"

export default function BlogPageClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

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

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <div className="relative z-10 section-blobs">
      <Section className="py-16 md:py-24">
        <div className="text-center mb-12 scroll-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white">
            <div className="icon-gradient-bg w-4 h-4 mr-2">
              <TrendingUp className="w-3 h-3" />
            </div>
            Expert Insights
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">Digital Marketing Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with expert insights, proven strategies, and actionable tips from our digital
            marketing professionals. Updated weekly with the latest industry trends.
          </p>
        </div>

        {/* Featured Articles Section */}
        <div className="mb-16 scroll-fade-up">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Articles</h2>
            <p className="text-muted-foreground">Our most popular and impactful content</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {featuredPosts.map((post, index) => (
              <Card
                key={index}
                className="glass-card group border-2 border-fuchsia-200/20 scroll-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.image || "/images/digital-marketing-blog.webp"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </Link>
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white">
                    Featured
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 colorful-icon" />
                    <span>{post.date}</span>
                    <User className="h-4 w-4 ml-4 colorful-icon" />
                    <span>{post.author}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">{post.description}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="w-full gradient-button group">Read Full Article</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4 scroll-fade-up">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Browse all our expert insights and industry updates</p>
          </div>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 colorful-icon" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white"
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="glass-card flex flex-col group scroll-fade-in">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.image || "/images/content-marketing-blog.webp"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 colorful-icon" />
                  <span>{post.date}</span>
                  <User className="h-4 w-4 ml-4 colorful-icon" />
                  <span>{post.author}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 text-muted-foreground">{post.description}</CardContent>
              <div className="p-6 pt-0">
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline" className="gradient-button bg-transparent w-full">
                    Read More
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found matching your search criteria.</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16 text-center scroll-fade-up">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 gradient-text">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest digital marketing insights delivered to your inbox weekly. Join 5,000+ marketers who trust
              our content.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="https://calendly.com/mhdigitalsolutionsus">
                <Button className="gradient-button">Subscribe to Updates</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="gradient-button bg-transparent">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
