import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, BookOpen } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Resources & Startup Guides | MH Digital Solution",
  description:
    "Free guides on starting a business, business registration, insurance, and digital marketing for entrepreneurs.",
}

export default function ResourcesPage() {
  const guides = [
    {
      slug: "start-a-business-nebraska",
      title: "Complete Guide to Starting a Business in Nebraska",
      description: "Registration, insurance, and digital setup for Nebraska entrepreneurs.",
      icon: "📍",
    },
    {
      slug: "start-a-business-wyoming",
      title: "Wyoming Business Startup Guide",
      description: "LLC formation, business structure, and going digital in Wyoming.",
      icon: "🏔️",
    },
    {
      slug: "start-a-business-maine",
      title: "Maine Business Startup Guide 2026",
      description: "Everything you need to start a business in Maine.",
      icon: "🌲",
    },
  ]

  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4 text-center">
          Free Business Resources & Guides
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Expert guides for starting your business, understanding registration, insurance, and digital marketing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/resources/${guide.slug}`}
              className="p-6 border border-border rounded-lg hover:border-fuchsia-600 hover:bg-muted transition-all group"
            >
              <div className="text-4xl mb-4">{guide.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-fuchsia-600 transition-colors">{guide.title}</h3>
              <p className="text-muted-foreground text-sm">{guide.description}</p>
            </Link>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 border border-border mb-12">
          <h2 className="text-2xl font-bold mb-4">Why These Guides Matter</h2>
          <p className="text-muted-foreground mb-6">
            Most entrepreneurs focus on their product or service but overlook the digital foundation. These guides help
            you understand business registration, insurance, and how to establish your online presence from day one.
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <FileText className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Step-by-step checklists for each state</span>
            </li>
            <li className="flex gap-3 items-start">
              <BookOpen className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Resources and links to official government sites</span>
            </li>
            <li className="flex gap-3 items-start">
              <FileText className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Insurance and entity type comparisons</span>
            </li>
            <li className="flex gap-3 items-start">
              <BookOpen className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Digital foundation checklist</span>
            </li>
          </ul>
        </div>

        <div className="text-center border-t pt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Use these guides to get started, then reach out to us for your digital marketing and web design needs.
          </p>
          <Button size="lg" asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
