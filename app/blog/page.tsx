"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Search, TrendingUp } from "lucide-react"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts = [
    {
      slug: "ai-automation-revolution-2024",
      title: "How AI Automation is Revolutionizing Small Business Operations in 2024",
      date: "December 15, 2024",
      author: "Mohammad Hassan",
      category: "AI & Automation",
      image: "/images/3d-business-collaboration.webp",
      description:
        "Discover how AI automation is helping small businesses reduce costs by 70% while improving efficiency and customer satisfaction. Real case studies and implementation strategies included.",
      featured: true,
    },
    {
      slug: "mobile-app-development-trends-2024",
      title: "Mobile App Development Trends That Will Dominate 2024",
      date: "December 18, 2024",
      author: "Sarah Johnson",
      category: "Mobile Development",
      image: "/images/3d-shopping-online-app.webp",
      description:
        "Explore the latest mobile app development trends including AI integration, cross-platform solutions, and user experience innovations that are shaping the industry.",
      featured: true,
    },
    {
      slug: "ecommerce-optimization-strategies",
      title: "E-commerce Optimization: Converting Visitors into Loyal Customers",
      date: "December 12, 2024",
      author: "Mike Chen",
      category: "E-commerce",
      image: "/images/3d-web-design-pages.webp",
      description:
        "Learn advanced e-commerce optimization techniques that increase conversion rates, improve user experience, and build customer loyalty for sustainable growth.",
      featured: true,
    },
    {
      slug: "seo-strategies-2024",
      title: "10 SEO Strategies That Will Dominate Search Rankings in 2024",
      date: "December 10, 2024",
      author: "Sarah Johnson",
      category: "SEO",
      image: "/images/website-setup-concept.webp",
      description:
        "Discover the latest SEO techniques that are driving organic traffic growth for businesses worldwide. From technical SEO to content optimization.",
      featured: true,
    },
    {
      slug: "social-media-roi-measurement",
      title: "Measuring Social Media ROI: Advanced Analytics for Business Growth",
      date: "December 8, 2024",
      author: "Mike Chen",
      category: "Social Media",
      image: "/images/website-social-network.webp",
      description:
        "Learn how to track and measure the real impact of your social media marketing efforts with advanced analytics and attribution models.",
      featured: true,
    },
    {
      slug: "ppc-optimization-guide",
      title: "The Complete Guide to PPC Campaign Optimization in 2024",
      date: "December 5, 2024",
      author: "Lisa Rodriguez",
      category: "PPC",
      image: "/images/ppc-advertising.webp",
      description:
        "Master the art of PPC optimization with our comprehensive guide covering keyword research, ad copy testing, and conversion tracking.",
      featured: false,
    },
    {
      slug: "web-development-trends",
      title: "Web Development Trends That Will Shape 2024",
      date: "December 1, 2024",
      author: "David Kim",
      category: "Web Development",
      image: "/images/3d-web-design-computer.webp",
      description:
        "Explore the latest web development trends including AI integration, progressive web apps, and performance optimization techniques.",
      featured: false,
    },
    {
      slug: "email-marketing-automation",
      title: "Email Marketing Automation: Strategies That Convert",
      date: "November 28, 2024",
      author: "Emily Thompson",
      category: "Email Marketing",
      image: "/images/customer-service-infographic.webp",
      description:
        "Build email sequences that nurture leads and drive conversions. Learn advanced segmentation and personalization techniques.",
      featured: false,
    },
    {
      slug: "business-analytics-insights",
      title: "Turning Data Into Actionable Business Insights",
      date: "November 25, 2024",
      author: "Robert Wilson",
      category: "Business Analytics",
      image: "/images/software-development-concept.webp",
      description:
        "Learn how to leverage business analytics to make data-driven decisions that accelerate growth and improve operational efficiency.",
      featured: false,
    },
    {
      slug: "hr-management-digital-transformation",
      title: "Digital HR Management: Streamlining Human Resources in 2024",
      date: "November 20, 2024",
      author: "Jennifer Adams",
      category: "HR Technology",
      image: "/images/hr-management-illustration.webp",
      description:
        "Discover how digital transformation is revolutionizing HR management with automated workflows, employee self-service portals, and data-driven insights.",
      featured: false,
    },
    {
      slug: "team-collaboration-tools",
      title: "Essential Team Collaboration Tools for Remote Work Success",
      date: "November 15, 2024",
      author: "Alex Turner",
      category: "Productivity",
      image: "/images/diverse-team-collaboration.webp",
      description:
        "Explore the best collaboration tools and strategies that enable remote teams to work efficiently and maintain strong communication.",
      featured: false,
    },
  ]

  const categories = [
    "All",
    "AI & Automation",
    "SEO",
    "Social Media",
    "PPC",
    "Web Development",
    "Email Marketing",
    "Business Analytics",
    "HR Technology",
    "Productivity",
    "Mobile Development",
    "E-commerce",
  ]

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
    <div className="relative z-10 section-with-blobs">
      <Section className="py-16 md:py-24">
        <div className="text-center mb-12">
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
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Articles</h2>
            <p className="text-muted-foreground">Our most popular and impactful content</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {featuredPosts.map((post, index) => (
              <Card
                key={index}
                className="glass-card group hover:scale-105 transition-all duration-300 border-2 border-fuchsia-200/20"
              >
                <div className="relative">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.image || "/placeholder.svg"}
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
        <div className="mb-8 space-y-4">
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
            <Card key={index} className="glass-card flex flex-col group hover:scale-105 transition-all duration-300">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.image || "/placeholder.svg"}
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
        <div className="mt-16 text-center">
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
