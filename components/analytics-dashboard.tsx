import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { LineChart, BarChart, Users, DollarSign, TrendingUp } from "lucide-react"
import Image from "next/image"

export function AnalyticsDashboard() {
  return (
    <Card className="glass-card w-full max-w-5xl mx-auto p-6 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src="/images/business-analytics-3d.webp"
          alt="Business Analytics Background"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold text-foreground gradient-text">Analytics Overview</CardTitle>
        <Badge variant="secondary" className="bg-pastel-green/20 text-pastel-green">
          Real-time
        </Badge>
      </CardHeader>
      <CardContent className="grid gap-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card p-4">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-pastel-blue" />
              Revenue Growth
            </CardTitle>
            <CardContent className="mt-2 text-3xl font-bold text-foreground">
              +22% <span className="text-sm font-normal text-muted-foreground">vs last quarter</span>
            </CardContent>
            <Progress value={85} className="mt-2 h-2 bg-pastel-blue/20" indicatorClassName="bg-pastel-blue" />
          </Card>
          <Card className="glass-card p-4">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Users className="h-5 w-5 text-pastel-purple" />
              New Customers
            </CardTitle>
            <CardContent className="mt-2 text-3xl font-bold text-foreground">
              1,500 <span className="text-sm font-normal text-muted-foreground">total this year</span>
            </CardContent>
            <Progress value={70} className="mt-2 h-2 bg-pastel-purple/20" indicatorClassName="bg-pastel-purple" />
          </Card>
          <Card className="glass-card p-4">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-pastel-red" />
              Average Order Value
            </CardTitle>
            <CardContent className="mt-2 text-3xl font-bold text-foreground">
              $120 <span className="text-sm font-normal text-muted-foreground">up from $105</span>
            </CardContent>
            <Progress value={60} className="mt-2 h-2 bg-pastel-red/20" indicatorClassName="bg-pastel-red" />
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card p-4">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <LineChart className="h-5 w-5 text-pastel-yellow" />
              Sales Trends
            </CardTitle>
            <CardContent className="mt-2 h-48 flex items-center justify-center text-muted-foreground">
              {/* Placeholder for a chart */}
              <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
                <span className="text-sm">Line Chart Placeholder</span>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card p-4">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <BarChart className="h-5 w-5 text-pastel-teal" />
              Customer Acquisition Cost
            </CardTitle>
            <CardContent className="mt-2 h-48 flex items-center justify-center text-muted-foreground">
              {/* Placeholder for a chart */}
              <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
                <span className="text-sm">Bar Chart Placeholder</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
