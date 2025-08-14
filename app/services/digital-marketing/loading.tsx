import { Skeleton } from "@/components/ui/skeleton"
import { Section } from "@/components/Section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function DigitalMarketingLoading() {
  return (
    <Section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="glass-card flex flex-col items-center p-6 text-center">
            <Skeleton className="mb-4 h-24 w-24 rounded-full" />
            <CardTitle className="mb-2 text-2xl font-semibold">
              <Skeleton className="h-6 w-48" />
            </CardTitle>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
