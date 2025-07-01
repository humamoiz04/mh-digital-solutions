import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function EmailMarketingServicesLoading() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section Skeleton */}
      <section className="py-20 section-gradient-1">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-8 w-48 mb-6 bg-white/10" />
              <Skeleton className="h-16 w-full mb-4 bg-white/10" />
              <Skeleton className="h-16 w-3/4 mb-6 bg-white/10" />
              <Skeleton className="h-6 w-full mb-2 bg-white/10" />
              <Skeleton className="h-6 w-5/6 mb-8 bg-white/10" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-48 bg-white/10" />
                <Skeleton className="h-12 w-40 bg-white/10" />
              </div>
            </div>
            <div>
              <Skeleton className="h-80 w-full rounded-2xl bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section Skeleton */}
      <section className="py-20 section-gradient-2">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-6 bg-white/10" />
            <Skeleton className="h-6 w-2/3 mx-auto bg-white/10" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="glass-card">
                <CardContent className="p-8 text-center">
                  <Skeleton className="h-16 w-16 mx-auto mb-6 bg-white/10" />
                  <Skeleton className="h-6 w-3/4 mx-auto mb-4 bg-white/10" />
                  <Skeleton className="h-4 w-full mb-2 bg-white/10" />
                  <Skeleton className="h-4 w-5/6 mx-auto mb-4 bg-white/10" />
                  <Skeleton className="h-8 w-32 mx-auto bg-white/10" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section Skeleton */}
      <section className="py-20 section-gradient-3">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-6 bg-white/10" />
            <Skeleton className="h-6 w-2/3 mx-auto bg-white/10" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Skeleton className="h-12 w-12 mr-4 bg-white/10" />
                    <Skeleton className="h-8 w-8 bg-white/10" />
                  </div>
                  <Skeleton className="h-6 w-3/4 mb-4 bg-white/10" />
                  <Skeleton className="h-4 w-full mb-6 bg-white/10" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <div key={j} className="flex items-center">
                        <Skeleton className="h-4 w-4 mr-2 bg-white/10" />
                        <Skeleton className="h-4 w-3/4 bg-white/10" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
