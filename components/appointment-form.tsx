"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export function AppointmentForm() {
  return (
    <Card className="glass-card w-full max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">Book Your Free Consultation</CardTitle>
        <CardDescription className="text-muted-foreground">
          Schedule a time with our experts to discuss your digital needs and how we can help.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form action="https://formsubmit.co/mhdigitalsolutionsus@gmail.com" method="POST" className="space-y-4">
          {/* FormSubmit.co hidden success page */}
          <input type="hidden" name="_next" value="https://www.mhdigitalsolution.com/appointment?success=true" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Appointment Request" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" placeholder="Your Name" className="bg-background/50" required />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="bg-background/50"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" className="bg-background/50" />
          </div>
          <div>
            <Label htmlFor="service">Interested Service *</Label>
            <Input
              id="service"
              name="service"
              placeholder="Select a service (Digital Marketing, Web Development, SEO, etc.)"
              className="bg-background/50"
              required
            />
          </div>
          <div>
            <Label htmlFor="date">Preferred Date *</Label>
            <Input id="date" name="date" type="date" className="bg-background/50" required />
          </div>
          <div>
            <Label htmlFor="time">Preferred Time *</Label>
            <Input id="time" name="time" type="time" className="bg-background/50" required />
          </div>
          <div>
            <Label htmlFor="message">Your Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us more about your needs"
              rows={3}
              className="bg-background/50"
            />
          </div>

          <Button type="submit" className="gradient-button w-full h-12 text-lg font-semibold">
            <Calendar className="h-5 w-5 mr-2" />
            Book Appointment
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Or call us directly:{" "}
            <a href="tel:+17072491222" className="text-fuchsia-500 hover:underline font-semibold">
              +1 (707) 249-1222
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
