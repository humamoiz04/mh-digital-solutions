import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import BlogPageClient from "./BlogPageClient"

export const metadata: Metadata = generatePageMetadata({
  title: "Digital Marketing Blog",
  description:
    "Expert insights on SEO, PPC, social media, and web development. Stay ahead with weekly strategies and tutorials.",
  path: "/blog",
})

export default function BlogPage() {
  return <BlogPageClient />
}
