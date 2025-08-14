import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <Card className="glass-card w-full max-w-5xl mx-auto p-6 md:p-8">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold text-foreground">
            <Skeleton className="h-8 w-48" />
          </CardTitle>
          <Skeleton className="h-6 w-24 rounded-full" />
        </CardHeader>
        <CardContent className="grid gap-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card p-4">
              <CardTitle className="text-lg font-semibold text-foreground">
                <Skeleton className="h-6 w-32" />
              </CardTitle>
              <CardContent className="mt-2">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-4 w-48 mt-1" />
              </CardContent>
              <Skeleton className="h-2 w-full mt-2" />
            </Card>
            <Card className="glass-card p-4">
              <CardTitle className="text-lg font-semibold text-foreground">
                <Skeleton className="h-6 w-32" />
              </CardTitle>
              <CardContent className="mt-2">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-4 w-48 mt-1" />
              </CardContent>
              <Skeleton className="h-2 w-full mt-2" />
            </Card>
            <Card className="glass-card p-4">
              <CardTitle className="text-lg font-semibold text-foreground">
                <Skeleton className="h-6 w-32" />
              </CardTitle>
              <CardContent className="mt-2">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-4 w-48 mt-1" />
              </CardContent>
              <Skeleton className="h-2 w-full mt-2" />
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card p-4">
              <CardTitle className="text-lg font-semibold text-foreground">
                <Skeleton className="h-6 w-32" />
              </CardTitle>
              <CardContent className="mt-2 h-48 flex items-center justify-center">
                <Skeleton className="w-full h-full" />
              </CardContent>
            </Card>
            <Card className="glass-card p-4">
              <CardTitle className="text-lg font-semibold text-foreground">
                <Skeleton className="h-6 w-32" />
              </CardTitle>
              <CardContent className="mt-2 h-48 flex items-center justify-center">
                <Skeleton className="w-full h-full" />
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
