import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Blog | Expert Insights & Strategies | MH Digital Solutions",
  description:
    "Stay ahead with our digital marketing blog. Expert insights on SEO, PPC, social media, AI automation, and business growth strategies. Updated weekly with actionable tips.",
  keywords:
    "digital marketing blog, SEO tips, PPC strategies, social media marketing, AI automation, business growth, marketing insights",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/blog",
  },
}

export default function BlogPage() {
  const featuredPost = {
    id: "ai-automation-revolution-2024",
    title: "How AI Automation is Revolutionizing Small Business Operations in 2024",
    excerpt:
      "Discover how AI automation is helping small businesses reduce costs by 70% while improving efficiency and customer satisfaction. Real case studies and implementation strategies included.",
    author: "Mohammad Hassan",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Automation",
    image: "/images/ai-automation.webp",
    featured: true,
  }

  const blogPosts = [
    {
      id: "seo-strategies-2024",
      title: "10 SEO Strategies That Will Dominate Search Rankings in 2024",
      excerpt:
        "Discover the latest SEO techniques that are driving organic traffic growth for businesses worldwide. From technical SEO to content optimization.",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "SEO",
      image: "/images/digital-marketing.webp",
    },
    {
      id: "social-media-roi-measurement",
      title: "Measuring Social Media ROI: Advanced Analytics for Business Growth",
      excerpt:
        "Learn how to track and measure the real impact of your social media marketing efforts with advanced analytics and attribution models.",
      author: "Mike Chen",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Social Media",
      image: "/images/digital-marketing-team.png",
    },
    {
      id: "ppc-optimization-guide",
      title: "The Complete Guide to PPC Campaign Optimization in 2024",
      excerpt:
        "Master the art of PPC optimization with our comprehensive guide covering keyword research, ad copy testing, and conversion tracking.",
      author: "Lisa Rodriguez",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "PPC",
      image: "/images/analytics-growth.webp",
    },
    {
      id: "web-development-trends",
      title: "Web Development Trends That Will Shape 2024",
      excerpt:
        "Explore the latest web development trends including AI integration, progressive web apps, and performance optimization techniques.",
      author: "David Kim",
      date: "December 3, 2024",
      readTime: "5 min read",
      category: "Web Development",
      image: "/images/digital-workspace.jpeg",
    },
    {
      id: "email-marketing-automation",
      title: "Email Marketing Automation: Strategies That Convert",
      excerpt:
        "Build email sequences that nurture leads and drive conversions. Learn advanced segmentation and personalization techniques.",
      author: "Emily Thompson",
      date: "November 30, 2024",
      readTime: "6 min read",
      category: "Email Marketing",
      image: "/images/digital-marketing-megaphone.png",
    },
    {
      id: "business-analytics-insights",
      title: "Turning Data Into Actionable Business Insights",
      excerpt:
        "Learn how to leverage business analytics to make data-driven decisions that accelerate growth and improve operational efficiency.",
      author: "Robert Wilson",
      date: "November 28, 2024",
      readTime: "8 min read",
      category: "Business Analytics",
      image: "/images/analytics-dashboard-new.webp",
    },
  ]

  const categories = [
    "All Posts",
    "SEO",
    "PPC",
    "Social Media",
    "Web Development",
    "AI & Automation",
    "Email Marketing",
    "Business Analytics",
  ]

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <Badge className="mb-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white">📚 Expert Insights</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital Marketing{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert insights, proven strategies, and actionable tips from our digital
              marketing professionals. Updated weekly with the latest industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/mhdigitalsolutionsus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Get Free Marketing Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white rounded-full transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Featured Post */}
      <ScrollAnimation>
        <section className="py-12 bg-transparent">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Featured Article</h2>
            <Card className="glass border-0 hover-lift overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={`${featuredPost.title} - Featured article on AI automation for small businesses`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-0">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{featuredPost.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <button className="inline-flex items-center text-[#4F46E5] hover:text-[#7C3AED] font-semibold">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      </ScrollAnimation>

      {/* Category Filter */}
      <ScrollAnimation>
        <section className="py-12 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-6 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-[#4F46E5] hover:text-white transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Blog Posts Grid */}
      <ScrollAnimation>
        <section className="py-12 bg-transparent">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <ScrollAnimation key={post.id} delay={index * 100}>
                  <Card className="glass border-0 hover-lift overflow-hidden h-full">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={`${post.title} - ${post.category} article thumbnail`}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 border-0">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <button className="inline-flex items-center text-[#4F46E5] hover:text-[#7C3AED] font-semibold">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Newsletter Signup */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <Card className="glass border-0 max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Stay Updated</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Get the latest digital marketing insights delivered to your inbox weekly. Join 5,000+ marketers who
                  trust our content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
                  >
                    Subscribe to Updates
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white rounded-full transition-all duration-300"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
