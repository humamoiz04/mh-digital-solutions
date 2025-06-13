import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "digital-marketing-trends-2024",
      title: "Top 10 Digital Marketing Trends to Watch in 2024",
      excerpt:
        "Discover the latest digital marketing trends that will shape your strategy and drive business growth in 2024.",
      author: "MK",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Digital Marketing",
      image: "/placeholder.svg?height=300&width=500",
      color: "from-[#FF7600] to-[#F472B6]",
      featured: true,
    },
    {
      id: "ai-automation-business",
      title: "How AI Automation is Transforming Small Businesses",
      excerpt:
        "Learn how artificial intelligence and automation can streamline operations and boost productivity for small businesses.",
      author: "Senorita",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "AI & Automation",
      image: "/placeholder.svg?height=300&width=500",
      color: "from-[#8B5CF6] to-[#00F5FF]",
      featured: false,
    },
    {
      id: "seo-best-practices",
      title: "SEO Best Practices for 2024: A Complete Guide",
      excerpt: "Master the latest SEO techniques and strategies to improve your website's search engine rankings.",
      author: "Farhan Siddiqui",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "SEO",
      image: "/placeholder.svg?height=300&width=500",
      color: "from-[#F472B6] to-[#8B5CF6]",
      featured: false,
    },
    {
      id: "social-media-strategy",
      title: "Building a Winning Social Media Strategy in 2024",
      excerpt: "Create engaging social media campaigns that build brand awareness and drive conversions.",
      author: "Ahmed Shah",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Social Media",
      image: "/placeholder.svg?height=300&width=500",
      color: "from-[#00F5FF] to-[#FF7600]",
      featured: false,
    },
    {
      id: "web-design-trends",
      title: "Modern Web Design Trends That Convert Visitors",
      excerpt: "Explore the latest web design trends and techniques that improve user experience and conversion rates.",
      author: "MK",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Web Design",
      image: "/placeholder.svg?height=300&width=500",
      color: "from-[#8B5CF6] to-[#F472B6]",
      featured: false,
    },
    {
      id: "ppc-optimization",
      title: "PPC Campaign Optimization: Maximize Your Ad Spend ROI",
      excerpt:
        "Learn proven strategies to optimize your pay-per-click campaigns and achieve better returns on investment.",
      author: "Senorita",
      date: "December 3, 2024",
      readTime: "10 min read",
      category: "PPC",
      image: "/placeholder.svg?height=300&width=500",
      color: "from-[#FF7600] to-[#8B5CF6]",
      featured: false,
    },
  ]

  const categories = ["All", "Digital Marketing", "SEO", "PPC", "Social Media", "Web Design", "AI & Automation"]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Badge className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] text-white border-0 mb-6">
              📝 Latest Insights
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Digital Marketing</span>{" "}
              <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and actionable strategies for digital
              marketing success
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Categories */}
      <ScrollAnimation>
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={
                    index === 0
                      ? "bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] text-white border-0"
                      : "border-2 border-gray-300 text-gray-700 hover:border-[#8B5CF6] hover:text-[#8B5CF6]"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Featured Post */}
      {featuredPost && (
        <ScrollAnimation>
          <section className="py-10">
            <div className="container mx-auto px-6">
              <Card className="blog-card border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`bg-gradient-to-r ${featuredPost.color} text-white border-0`}>Featured</Badge>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12">
                      <Badge className="mb-4 bg-gray-100 text-gray-700 border-0">{featuredPost.category}</Badge>
                      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{featuredPost.title}</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{featuredPost.excerpt}</p>

                      <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      <Link href={`/blog/${featuredPost.id}`}>
                        <Button
                          className={`bg-gradient-to-r ${featuredPost.color} hover:opacity-90 text-white border-0`}
                        >
                          Read Full Article
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollAnimation>
      )}

      {/* Blog Posts Grid */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <ScrollAnimation key={post.id} delay={index * 100}>
                  <Card className="blog-card border-0 overflow-hidden hover-lift">
                    <CardContent className="p-0">
                      <div className="relative h-48">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                        <div className="absolute top-4 left-4">
                          <Badge className={`bg-gradient-to-r ${post.color} text-white border-0 text-xs`}>
                            {post.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <Link href={`/blog/${post.id}`}>
                          <Button
                            variant="ghost"
                            className="w-full text-transparent bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Newsletter Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7600]/10 via-[#F472B6]/10 to-[#8B5CF6]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Stay</span>{" "}
                  <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                    Updated
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter and get the latest digital marketing insights delivered to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                  />
                  <Button className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] hover:opacity-90 text-white rounded-full px-8">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
