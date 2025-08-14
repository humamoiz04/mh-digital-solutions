import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSignup() {
  return (
    <Card className="glass-card w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">Subscribe to Our Newsletter</CardTitle>
        <CardDescription className="text-muted-foreground">
          Stay updated with the latest digital marketing trends and insights.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <Input type="email" placeholder="Enter your email" className="bg-background/50" />
          <Button type="submit" className="gradient-button">
            Subscribe
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
