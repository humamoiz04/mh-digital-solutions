import { Skeleton } from "@/components/ui/skeleton"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesLoading() {
  return (
    <Section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <Card key={index} className="glass-card flex flex-col items-center p-6 text-center">
            <Skeleton className="mb-4 h-20 w-20 rounded-full" />
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <Skeleton className="h-6 w-32" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
