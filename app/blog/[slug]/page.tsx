import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, Clock, Share2, BookOpen, Heart } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const blogPostData: Record<string, any> = {
  "future-of-ai-business-automation": {
    title: "The Future of AI in Business Automation: Trends and Predictions for 2024",
    excerpt:
      "Discover how artificial intelligence is revolutionizing business processes and what it means for your company's future growth.",
    content: `
      <p>Artificial Intelligence (AI) has moved from science fiction to business reality, transforming how companies operate, make decisions, and serve customers. As we advance through 2024, the integration of AI in business automation is not just a competitive advantage—it's becoming a necessity for survival in the digital economy.</p>

      <h2>The Current State of AI in Business</h2>
      <p>Today's businesses are leveraging AI across multiple touchpoints:</p>
      <ul>
        <li><strong>Customer Service:</strong> AI-powered chatbots handle 80% of routine inquiries</li>
        <li><strong>Sales Processes:</strong> Predictive analytics identify high-value prospects</li>
        <li><strong>Operations:</strong> Automated workflows reduce manual tasks by 60%</li>
        <li><strong>Decision Making:</strong> Data-driven insights inform strategic choices</li>
      </ul>

      <h2>Emerging Trends in AI Automation</h2>
      <p>Several key trends are shaping the future of AI in business automation:</p>

      <h3>1. Hyper-Personalization at Scale</h3>
      <p>AI systems are becoming increasingly sophisticated at understanding individual customer preferences and behaviors. This enables businesses to deliver personalized experiences to millions of customers simultaneously, something that was impossible with traditional methods.</p>

      <h3>2. Predictive Maintenance and Operations</h3>
      <p>Manufacturing and service industries are using AI to predict equipment failures before they occur, reducing downtime by up to 50% and maintenance costs by 25%.</p>

      <h3>3. Intelligent Document Processing</h3>
      <p>AI-powered document processing is revolutionizing how businesses handle paperwork, contracts, and compliance documentation, reducing processing time from hours to minutes.</p>

      <h2>The Impact on Different Industries</h2>
      <p>AI automation is creating transformative changes across various sectors:</p>

      <h3>Healthcare</h3>
      <p>AI is streamlining patient care, from automated appointment scheduling to predictive health analytics that can identify potential health issues before symptoms appear.</p>

      <h3>Financial Services</h3>
      <p>Banks and financial institutions are using AI for fraud detection, risk assessment, and automated trading, processing millions of transactions with unprecedented accuracy.</p>

      <h3>Retail and E-commerce</h3>
      <p>AI-driven inventory management, dynamic pricing, and personalized product recommendations are helping retailers optimize their operations and increase sales.</p>

      <h2>Challenges and Considerations</h2>
      <p>While the benefits of AI automation are significant, businesses must also navigate several challenges:</p>

      <h3>Data Privacy and Security</h3>
      <p>As AI systems process vast amounts of data, ensuring privacy and security becomes paramount. Companies must implement robust data governance frameworks.</p>

      <h3>Workforce Transformation</h3>
      <p>AI automation will change job roles rather than simply eliminate them. Businesses need to invest in reskilling and upskilling their workforce.</p>

      <h3>Ethical AI Implementation</h3>
      <p>Ensuring AI systems are fair, transparent, and unbiased is crucial for maintaining customer trust and regulatory compliance.</p>

      <h2>Predictions for 2024 and Beyond</h2>
      <p>Looking ahead, we can expect to see:</p>
      <ul>
        <li>AI becoming more accessible to small and medium businesses</li>
        <li>Integration of AI with IoT devices for smarter automation</li>
        <li>Advanced natural language processing enabling more intuitive human-AI interactions</li>
        <li>AI-driven sustainability initiatives helping businesses reduce their environmental impact</li>
      </ul>

      <h2>Getting Started with AI Automation</h2>
      <p>For businesses looking to implement AI automation, the key is to start small and scale gradually:</p>
      <ol>
        <li><strong>Identify Pain Points:</strong> Focus on areas where automation can have immediate impact</li>
        <li><strong>Choose the Right Tools:</strong> Select AI solutions that integrate well with existing systems</li>
        <li><strong>Train Your Team:</strong> Ensure your workforce is prepared for the transition</li>
        <li><strong>Measure and Optimize:</strong> Continuously monitor performance and refine your approach</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The future of AI in business automation is bright and full of possibilities. Companies that embrace these technologies today will be better positioned to thrive in tomorrow's digital economy. The question isn't whether to adopt AI automation, but how quickly and effectively you can implement it to drive your business forward.</p>
    `,
    author: "Alex Johnson",
    authorBio:
      "Alex is a leading AI strategist and business consultant with over 10 years of experience helping companies implement cutting-edge technology solutions.",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    categoryColor: "from-[#8B5CF6] to-[#00F5FF]",
    image: "/images/ai-automation.webp",
    tags: ["AI", "Automation", "Business Strategy", "Future Trends", "Digital Transformation"],
    relatedPosts: [
      "building-brand-identity-digital-age",
      "web-performance-optimization-guide",
      "roi-driven-digital-marketing-strategies",
    ],
  },
  "building-brand-identity-digital-age": {
    title: "Building Brand Identity in the Digital Age",
    excerpt:
      "Learn the essential strategies for creating a compelling brand identity that resonates with modern consumers.",
    content: `
      <p>In today's hyper-connected digital landscape, building a strong brand identity is more crucial—and more challenging—than ever before. With countless touchpoints across digital platforms, businesses must create cohesive, memorable brand experiences that cut through the noise and connect with their target audience.</p>

      <h2>Understanding Modern Brand Identity</h2>
      <p>Brand identity in the digital age extends far beyond a logo and color scheme. It encompasses:</p>
      <ul>
        <li>Visual elements (logo, typography, color palette)</li>
        <li>Voice and tone across all communications</li>
        <li>Digital presence and user experience</li>
        <li>Values and mission alignment</li>
        <li>Customer interaction patterns</li>
      </ul>

      <h2>The Digital-First Approach</h2>
      <p>Today's brands must be designed with digital platforms in mind from the ground up. This means considering how your brand will appear across:</p>
      <ul>
        <li>Social media platforms</li>
        <li>Mobile applications</li>
        <li>Email communications</li>
        <li>Website interfaces</li>
        <li>Digital advertising</li>
      </ul>

      <h2>Key Strategies for Digital Brand Building</h2>

      <h3>1. Consistency Across All Touchpoints</h3>
      <p>Maintain visual and messaging consistency across all digital platforms. This includes using the same color schemes, fonts, and tone of voice whether customers encounter your brand on social media, your website, or in email communications.</p>

      <h3>2. Authentic Storytelling</h3>
      <p>Modern consumers crave authenticity. Share your brand's story, values, and mission in a way that resonates with your audience's values and aspirations.</p>

      <h3>3. Interactive Brand Experiences</h3>
      <p>Create opportunities for customers to interact with your brand through polls, quizzes, user-generated content campaigns, and interactive website elements.</p>

      <h2>The Role of Social Media in Brand Identity</h2>
      <p>Social media platforms have become the primary battleground for brand awareness and engagement. Each platform requires a tailored approach while maintaining brand consistency:</p>

      <h3>Instagram</h3>
      <p>Focus on visual storytelling with high-quality images and videos that reflect your brand aesthetic.</p>

      <h3>LinkedIn</h3>
      <p>Emphasize thought leadership and professional expertise to build credibility in your industry.</p>

      <h3>TikTok</h3>
      <p>Embrace creativity and trends while staying true to your brand voice and values.</p>

      <h2>Measuring Brand Identity Success</h2>
      <p>Track these key metrics to measure the effectiveness of your brand identity efforts:</p>
      <ul>
        <li>Brand awareness and recognition</li>
        <li>Social media engagement rates</li>
        <li>Website traffic and time on site</li>
        <li>Customer sentiment analysis</li>
        <li>Brand mention frequency and context</li>
      </ul>

      <h2>Common Pitfalls to Avoid</h2>
      <p>When building your digital brand identity, avoid these common mistakes:</p>
      <ul>
        <li>Inconsistent messaging across platforms</li>
        <li>Copying competitors instead of finding your unique voice</li>
        <li>Neglecting mobile optimization</li>
        <li>Ignoring customer feedback and sentiment</li>
        <li>Focusing solely on aesthetics without substance</li>
      </ul>

      <h2>The Future of Brand Identity</h2>
      <p>As technology continues to evolve, brand identity will need to adapt to new platforms and interaction methods, including:</p>
      <ul>
        <li>Voice interfaces and smart speakers</li>
        <li>Augmented and virtual reality experiences</li>
        <li>AI-powered personalization</li>
        <li>Sustainable and socially responsible branding</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Building a strong brand identity in the digital age requires a strategic, multi-faceted approach that prioritizes consistency, authenticity, and customer engagement. By focusing on these core principles and staying adaptable to new technologies and platforms, businesses can create lasting brand connections that drive growth and loyalty.</p>
    `,
    author: "Sarah Chen",
    authorBio:
      "Sarah is a creative director and brand strategist with 8 years of experience helping businesses build compelling digital brand identities.",
    date: "December 12, 2024",
    readTime: "6 min read",
    category: "Branding",
    categoryColor: "from-[#F472B6] to-[#FF7600]",
    image: "/images/content-marketing.webp",
    tags: ["Branding", "Digital Marketing", "Strategy", "Social Media", "Brand Identity"],
    relatedPosts: [
      "future-of-ai-business-automation",
      "roi-driven-digital-marketing-strategies",
      "customer-experience-digital-era",
    ],
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPostData[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-[#8B5CF6] hover:text-[#F472B6] mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>

              <Badge className={`bg-gradient-to-r ${post.categoryColor} text-white border-0 mb-4`}>
                {post.category}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${post.categoryColor} rounded-full flex items-center justify-center`}
                    >
                      <span className="text-white font-bold">
                        {post.author
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{post.author}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{post.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span className="text-sm">Article</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost" className="glass">
                    <Heart className="h-4 w-4 mr-1" />
                    Like
                  </Button>
                  <Button size="sm" variant="ghost" className="glass">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Featured Image */}
      <ScrollAnimation>
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${post.categoryColor} opacity-30`}></div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Article Content */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <Card className="glass border-0">
                    <CardContent className="p-8 lg:p-12">
                      <div
                        className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-[#8B5CF6] hover:prose-a:text-[#F472B6]"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    {/* Author Info */}
                    <Card className="glass border-0">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">About the Author</h3>
                        <div className="flex items-center space-x-3 mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${post.categoryColor} rounded-full flex items-center justify-center`}
                          >
                            <span className="text-white font-bold">
                              {post.author
                                .split(" ")
                                .map((n: string) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{post.author}</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{post.authorBio}</p>
                      </CardContent>
                    </Card>

                    {/* Tags */}
                    <Card className="glass border-0">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag: string, index: number) => (
                            <Badge key={index} className="glass text-gray-700 dark:text-gray-300 border-0">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <Card className="glass border-0">
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Need Expert Help?</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          Get personalized advice from our experts
                        </p>
                        <a
                          href="https://calendly.com/mhdigitalsolutionsus"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="calendly-button w-full justify-center"
                        >
                          Schedule Consultation
                        </a>
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
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-gray-900 dark:text-white">Related</span>{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                  Articles
                </span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {post.relatedPosts.slice(0, 3).map((relatedSlug: string, index: number) => {
                  const relatedPost = blogPostData[relatedSlug]
                  if (!relatedPost) return null

                  return (
                    <Card key={relatedSlug} className="blog-card border-0 hover-lift">
                      <CardContent className="p-0">
                        <div className="relative h-32">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${relatedPost.categoryColor} opacity-50`}
                          ></div>
                        </div>
                        <div className="p-4">
                          <Badge className="text-xs mb-2 glass text-gray-700 dark:text-gray-300 border-0">
                            {relatedPost.category}
                          </Badge>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 text-sm">
                            {relatedPost.title}
                          </h3>
                          <Link href={`/blog/${relatedSlug}`}>
                            <Button size="sm" variant="ghost" className="text-[#8B5CF6] hover:text-[#F472B6] p-0">
                              Read More <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Newsletter CTA */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="glass border-0 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    <span className="text-gray-900 dark:text-white">Enjoyed this article?</span>{" "}
                    <span className="bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] bg-clip-text text-transparent">
                      Get more insights
                    </span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Subscribe to our newsletter for the latest articles and insights delivered to your inbox
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 glass rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-gray-900 dark:text-white placeholder-gray-500"
                    />
                    <Button className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] hover:opacity-90 text-white border-0 rounded-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
