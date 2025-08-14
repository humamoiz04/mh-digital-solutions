"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Globe, BarChart3, Rocket } from "lucide-react"
import { useEffect, useState } from "react"

export function ServiceDashboard() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const metrics = [
    { label: "Active Projects", value: "47", icon: Rocket, trend: "+12%" },
    { label: "Happy Clients", value: "250+", icon: Users, trend: "+8%" },
    { label: "Global Reach", value: "15", icon: Globe, trend: "+3%" },
    { label: "Success Rate", value: "98%", icon: TrendingUp, trend: "+2%" },
  ]

  const services = [
    { name: "Web Development", status: "Active", projects: 12, color: "bg-blue-500" },
    { name: "Digital Marketing", status: "Growing", projects: 18, color: "bg-green-500" },
    { name: "SEO Services", status: "Trending", projects: 15, color: "bg-purple-500" },
    { name: "Mobile Apps", status: "Hot", projects: 8, color: "bg-orange-500" },
  ]

  if (!mounted) return null

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-foreground">Live Service Dashboard</h3>
        <p className="text-muted-foreground">Real-time insights into our digital solutions</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="glass-card p-4 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-0 space-y-2">
              <div className="flex items-center justify-between">
                <metric.icon className="h-5 w-5 text-primary" />
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                  {metric.trend}
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Services Overview */}
      <Card className="glass-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Service Performance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${service.color}`} />
                <div>
                  <p className="font-medium text-foreground">{service.name}</p>
                  <p className="text-sm text-muted-foreground">{service.projects} active projects</p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                {service.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Live Activity Indicator */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span>Live data • Updated every 5 minutes</span>
      </div>
    </div>
  )
}
