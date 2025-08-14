import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { LineChart, BarChart, Users, DollarSign, TrendingUp } from "lucide-react"
import Image from "next/image"

export function MarketingDashboard() {
  return (
    <Card className="glass-card w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src="/images/data-analytics-dashboard.webp"
          alt="Marketing Analytics Dashboard Background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="object-cover rounded-lg"
        />
      </div>
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2 px-0 sm:px-6">
        <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-foreground gradient-text">
          Marketing Overview
        </CardTitle>
        <Badge variant="secondary" className="bg-pastel-green/20 text-pastel-green text-xs sm:text-sm">
          Live Data
        </Badge>
      </CardHeader>
      <CardContent className="grid gap-4 sm:gap-6 md:gap-8 mt-2 sm:mt-4 px-0 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          <Card className="glass-card p-3 sm:p-4 md:p-5">
            <CardTitle className="text-sm sm:text-base md:text-lg font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-pastel-blue" />
              Traffic Growth
            </CardTitle>
            <CardContent className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-foreground px-0">
              +15% <span className="text-xs sm:text-sm font-normal text-muted-foreground">vs last month</span>
            </CardContent>
            <Progress value={75} className="mt-2 h-1.5 sm:h-2 bg-pastel-blue/20" indicatorClassName="bg-pastel-blue" />
          </Card>
          <Card className="glass-card p-3 sm:p-4 md:p-5">
            <CardTitle className="text-sm sm:text-base md:text-lg font-semibold text-foreground flex items-center gap-2">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-pastel-purple" />
              New Leads
            </CardTitle>
            <CardContent className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-foreground px-0">
              2,100 <span className="text-xs sm:text-sm font-normal text-muted-foreground">total this quarter</span>
            </CardContent>
            <Progress
              value={90}
              className="mt-2 h-1.5 sm:h-2 bg-pastel-purple/20"
              indicatorClassName="bg-pastel-purple"
            />
          </Card>
          <Card className="glass-card p-3 sm:p-4 md:p-5 sm:col-span-2 xl:col-span-1">
            <CardTitle className="text-sm sm:text-base md:text-lg font-semibold text-foreground flex items-center gap-2">
              <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-pastel-red" />
              Conversion Rate
            </CardTitle>
            <CardContent className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-foreground px-0">
              3.2% <span className="text-xs sm:text-sm font-normal text-muted-foreground">industry average 2.5%</span>
            </CardContent>
            <Progress value={80} className="mt-2 h-1.5 sm:h-2 bg-pastel-red/20" indicatorClassName="bg-pastel-red" />
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <Card className="glass-card p-3 sm:p-4 md:p-5">
            <CardTitle className="text-sm sm:text-base md:text-lg font-semibold text-foreground flex items-center gap-2">
              <LineChart className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-pastel-yellow" />
              Website Traffic
            </CardTitle>
            <CardContent className="mt-2 h-24 sm:h-32 md:h-48 flex items-center justify-center text-muted-foreground px-0">
              <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
                <span className="text-xs sm:text-sm">Line Chart Placeholder</span>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card p-3 sm:p-4 md:p-5">
            <CardTitle className="text-sm sm:text-base md:text-lg font-semibold text-foreground flex items-center gap-2">
              <BarChart className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-pastel-teal" />
              Campaign Performance
            </CardTitle>
            <CardContent className="mt-2 h-24 sm:h-32 md:h-48 flex items-center justify-center text-muted-foreground px-0">
              <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
                <span className="text-xs sm:text-sm">Bar Chart Placeholder</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
