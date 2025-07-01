import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // In a real app, you'd fetch the blog post data here
  return {
    title: "How AI Automation is Revolutionizing Small Business Operations in 2024 | MH Digital Solutions",
    description:
      "Discover the latest AI automation trends that are helping small businesses reduce costs by 70% while improving efficiency and customer satisfaction. Expert insights and real case studies.",
    keywords:
      "AI automation, small business, cost reduction, efficiency, business operations, automation tools, digital transformation",
    alternates: {
      canonical: `https://www.mhdigitalsolution.com/blog/${params.slug}`,
    },
    openGraph: {
      title: "How AI Automation is Revolutionizing Small Business Operations in 2024",
      description:
        "Discover how AI automation is helping small businesses reduce costs by 70% while improving efficiency.",
      images: ["/images/ai-automation.webp"],
      type: "article",
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real app, you'd fetch this data based on the slug
  const post = {
    title: "How AI Automation is Revolutionizing Small Business Operations in 2024",
    author: "Mohammad Hassan",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Automation",
    image: "/images/ai-automation.webp",
    content: `
      <p>In today's rapidly evolving business landscape, small businesses are discovering that AI automation isn't just for tech giants anymore. With costs decreasing and accessibility increasing, AI-powered solutions are becoming essential tools for competitive advantage.</p>

      <h2>The Current State of AI Automation for Small Businesses</h2>
      <p>Recent studies show that <strong>70% of small businesses that implement AI automation see significant cost reductions within the first six months</strong>. According to <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-state-of-ai-in-2023" target="_blank" rel="noopener noreferrer">McKinsey's State of AI 2023 report<span class="sr-only"> (opens in new tab)</span></a>, these aren't just incremental improvements – we're talking about transformative changes that fundamentally alter how businesses operate.</p>

      <p>At <a href="/services/ai-automation">MH Digital Solutions, our AI automation services</a> have helped over 200 businesses implement these game-changing technologies, resulting in an average of 60% reduction in manual tasks and 300% improvement in operational efficiency.</p>

      <h2>Key Areas Where AI is Making an Impact</h2>
      
      <h3>1. Customer Service Automation</h3>
      <p>AI chatbots and virtual assistants are handling up to 80% of routine customer inquiries, freeing up human staff for more complex tasks. This not only reduces labor costs but also provides 24/7 customer support. Our <a href="/services/digital-marketing">comprehensive digital marketing strategies</a> often include AI-powered customer service solutions that integrate seamlessly with your existing workflows.</p>

      <h3>2. Process Optimization</h3>
      <p>Machine learning algorithms are identifying inefficiencies in business processes that humans might miss, leading to streamlined operations and reduced waste. For businesses looking to optimize their operations, our <a href="/services/business-consulting">business consulting services</a> include process automation assessments.</p>

      <h3>3. Predictive Analytics</h3>
      <p>Small businesses are now using AI to predict customer behavior, inventory needs, and market trends with remarkable accuracy. According to <a href="https://www.salesforce.com/resources/articles/predictive-analytics/" target="_blank" rel="noopener noreferrer">Salesforce's research on predictive analytics<span class="sr-only"> (opens in new tab)</span></a>, businesses using AI-driven insights see 73% faster decision-making processes.</p>

      <h2>Real-World Success Stories</h2>
      <p>Consider the case of a small manufacturing company in Huntsville, AL, that implemented AI-powered quality control systems through our automation services. They reduced defect rates by 85% and cut inspection time in half, resulting in annual savings of over $200,000.</p>

      <p>Another client, a healthcare practice with multiple locations, implemented our AI-powered chatbot solution and saw an 80% reduction in routine phone inquiries, allowing their staff to focus on patient care rather than appointment scheduling.</p>

      <h2>Getting Started with AI Automation</h2>
      <p>The key to successful AI implementation is starting small and scaling gradually. Begin with one process, measure results, and expand from there. Most importantly, choose solutions that integrate well with your existing systems.</p>

      <p>For businesses ready to explore AI automation, we recommend starting with a comprehensive audit of your current processes. Our team can help identify the best opportunities for automation in your specific industry and business model.</p>

      <h2>The Future of AI in Small Business</h2>
      <p>Looking ahead, <a href="https://www.gartner.com/en/newsroom/press-releases/2023-10-11-gartner-says-by-2026-organizations-that-operationalize-ai-transparency-trust-and-security-will-see-50-percent-better-business-outcomes" target="_blank" rel="noopener noreferrer">Gartner predicts<span class="sr-only"> (opens in new tab)</span></a> that by 2026, organizations that operationalize AI will see 50% better business outcomes. This isn't just about efficiency – it's about survival in an increasingly competitive marketplace.</p>

      <h2>Conclusion</h2>
      <p>AI automation is no longer a luxury for small businesses – it's becoming a necessity for survival in an increasingly competitive marketplace. The businesses that embrace these technologies now will have a significant advantage over those that wait.</p>

      <p>Ready to explore how AI automation can transform your business? <a href="/services/ai-automation">Learn more about our AI automation services</a> or <a href="https://calendly.com/mhdigitalsolutionsus" target="_blank" rel="noopener noreferrer">schedule a free consultation</a> to discuss your specific needs.</p>
    `,
    tags: ["AI Automation", "Small Business", "Cost Reduction", "Efficiency", "Business Growth"],
  }

  const relatedPosts = [
    {
      id: "seo-strategies-2024",
      title: "10 SEO Strategies That Will Dominate Search Rankings in 2024",
      image: "/images/digital-marketing.webp",
      category: "SEO",
      excerpt: "Discover the latest SEO techniques that are driving organic traffic growth for businesses worldwide.",
    },
    {
      id: "social-media-roi",
      title: "Measuring Social Media ROI: Advanced Analytics for Business Growth",
      image: "/images/digital-marketing-team.png",
      category: "Social Media",
      excerpt: "Learn how to track and measure the real impact of your social media marketing efforts.",
    },
  ]

  return (
    <div className="min-h-screen pt-16 bg-transparent">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            author: {
              "@type": "Person",
              name: post.author,
            },
            datePublished: "2024-12-15",
            dateModified: "2024-12-15",
            image: `https://www.mhdigitalsolution.com${post.image}`,
            publisher: {
              "@type": "Organization",
              name: "MH Digital Solutions",
              logo: {
                "@type": "ImageObject",
                url: "https://www.mhdigitalsolution.com/images/mh-logo.webp",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.mhdigitalsolution.com/blog/${params.slug}`,
            },
          }),
        }}
      />

      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
                aria-label="Return to blog homepage"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>

              <Badge className="mb-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-0">
                {post.category}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">{post.title}</h1>

              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt="AI automation transforming small business operations with robotic process automation and machine learning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Article Content */}
      <ScrollAnimation>
        <section className="py-12 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div className="glass p-8 rounded-2xl">
                    <div
                      className="prose prose-lg max-w-none dark:prose-invert prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Tags:</h4>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Share */}
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Article
                      </Button>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to Implement AI Automation in Your Business?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Our AI automation experts can help you identify the best opportunities for automation in your
                        business and implement solutions that deliver real ROI.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="https://calendly.com/mhdigitalsolutionsus"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                        >
                          Get Free AI Consultation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <Link
                          href="/services/ai-automation"
                          className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300"
                        >
                          Learn About Our AI Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-8">
                    {/* Table of Contents */}
                    <Card className="glass border-0">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Table of Contents
                        </h4>
                        <nav className="space-y-2 text-sm">
                          <a
                            href="#current-state"
                            className="block text-gray-600 dark:text-gray-400 hover:text-blue-600"
                          >
                            Current State of AI Automation
                          </a>
                          <a href="#key-areas" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600">
                            Key Areas of Impact
                          </a>
                          <a
                            href="#success-stories"
                            className="block text-gray-600 dark:text-gray-400 hover:text-blue-600"
                          >
                            Real-World Success Stories
                          </a>
                          <a
                            href="#getting-started"
                            className="block text-gray-600 dark:text-gray-400 hover:text-blue-600"
                          >
                            Getting Started
                          </a>
                        </nav>
                      </CardContent>
                    </Card>

                    {/* Author Bio */}
                    <Card className="glass border-0">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">About the Author</h4>
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold">MH</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{post.author}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">CEO & Founder</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Digital marketing expert with 10+ years of experience helping businesses grow through
                          innovative AI automation strategies and digital transformation.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Related Services */}
                    <Card className="glass border-0">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Related Services</h4>
                        <div className="space-y-3">
                          <Link
                            href="/services/ai-automation"
                            className="block p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                          >
                            <div className="font-medium text-blue-600">AI & Automation</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Streamline operations with AI
                            </div>
                          </Link>
                          <Link
                            href="/services/business-consulting"
                            className="block p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                          >
                            <div className="font-medium text-purple-600">Business Consulting</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Strategic business guidance</div>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Related Posts */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Card key={relatedPost.id} className="glass border-0 hover:scale-105 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={`${relatedPost.title} - ${relatedPost.category} insights`}
                          fill
                          className="object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 border-0">
                          {relatedPost.category}
                        </Badge>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{relatedPost.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{relatedPost.excerpt}</p>
                        <Link href={`/blog/${relatedPost.id}`}>
                          <Button variant="ghost" className="w-full justify-between">
                            Read Article
                            <ArrowLeft className="h-4 w-4 rotate-180" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
