"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Send } from "lucide-react"

export function ContactForm() {
  return (
    <Card className="glass-card w-full max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">Get in Touch</CardTitle>
        <CardDescription className="text-muted-foreground">
          Have questions or need a custom solution? Fill out the form below and we'll get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form action="https://formsubmit.co/mhdigitalsolutionsus@gmail.com" method="POST" className="space-y-4">
          {/* FormSubmit.co hidden success page */}
          <input type="hidden" name="_next" value="https://www.mhdigitalsolution.com/contact?success=true" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Contact Form Submission" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                className="bg-background/50"
                required
                aria-required="true"
              />
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
                aria-required="true"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Subject" className="bg-background/50" />
          </div>
          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              className="bg-background/50"
              required
              aria-required="true"
            />
          </div>

          <Button type="submit" className="gradient-button w-full h-12 text-lg font-semibold">
            <Send className="h-5 w-5 mr-2" />
            Send Message
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
