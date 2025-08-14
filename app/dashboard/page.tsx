import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { FloatingBlobs } from "@/components/floating-blobs"
import { Section } from "@/components/Section"

export default function DashboardPage() {
  return (
    <div className="relative z-10">
      <FloatingBlobs />
      <Section className="py-16 md:py-24 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">Your Business Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Get a comprehensive overview of your key metrics and performance.
          </p>
        </div>
        <AnalyticsDashboard />
      </Section>
    </div>
  )
}
