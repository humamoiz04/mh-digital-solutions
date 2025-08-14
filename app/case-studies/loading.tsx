import { Skeleton } from "@/components/ui/skeleton"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudiesLoading() {
  return (
    <Section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="glass-card flex flex-col">
            <Skeleton className="w-full h-48 rounded-t-lg" />
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
            <div className="p-6 pt-0">
              <Skeleton className="h-10 w-24" />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
