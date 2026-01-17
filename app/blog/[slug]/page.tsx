import { CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { blogPosts } from "@/lib/content-data"

// 1. ADD THIS: Tell Next.js which paths to pre-render
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// 2. ADD THIS: Ensure it doesn't try to render non-existent slugs at runtime
export const dynamicParams = false

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <Section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl font-bold text-foreground">Blog Post Not Found</h1>
        <p className="text-lg text-muted-foreground mt-4">The blog post you are looking for does not exist.</p>
        <Link href="/blog">
          <Button className="mt-8 gradient-button">Back to Blog</Button>
        </Link>
      </Section>
    )
  }

  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
        <Card className="glass-card p-6 md:p-8">
          <Image
            src={post.image || "/images/content-marketing-blog.webp"}
            alt={post.title}
            width={800}
            height={450}
            className="rounded-lg mb-6 w-full h-auto object-cover"
          />
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-4xl font-bold text-foreground mb-2">{post.title}</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              By {post.author} on {post.date}
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none p-0">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
