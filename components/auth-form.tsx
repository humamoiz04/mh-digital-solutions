"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, ChromeIcon as Google } from "lucide-react" // Assuming these icons are available or can be added

export function AuthForm() {
  return (
    <Card className="glass-card w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">Login or Sign Up</CardTitle>
        <CardDescription className="text-muted-foreground">
          Access your dashboard and manage your services.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@example.com" className="bg-background/50" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="********" className="bg-background/50" />
          </div>
          <Button type="submit" className="gradient-button w-full">
            Login
          </Button>
        </div>
        <div className="flex items-center">
          <Separator className="flex-1" />
          <span className="px-2 text-sm text-muted-foreground">OR</span>
          <Separator className="flex-1" />
        </div>
        <div className="space-y-3">
          <Button variant="outline" className="w-full flex items-center gap-2 bg-background/50">
            <Google className="h-5 w-5" />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full flex items-center gap-2 bg-background/50">
            <Github className="h-5 w-5" />
            Continue with GitHub
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
