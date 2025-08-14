"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" className="bg-background/50" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" className="bg-background/50" />
          </div>
        </div>
        <div>
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input id="phone" type="tel" placeholder="Your Phone Number" className="bg-background/50" />
        </div>
        <div>
          <Label htmlFor="service">Interested Service</Label>
          <Select>
            <SelectTrigger id="service" className="bg-background/50">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="seo-solutions">SEO Solutions</SelectItem>
              <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
              <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
              <SelectItem value="it-consulting">IT Consulting</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="date">Preferred Date</Label>
          <Input id="date" type="date" className="bg-background/50" />
        </div>
        <div>
          <Label htmlFor="time">Preferred Time</Label>
          <Input id="time" type="time" className="bg-background/50" />
        </div>
        <div>
          <Label htmlFor="message">Your Message (Optional)</Label>
          <Textarea id="message" placeholder="Tell us more about your needs" rows={3} className="bg-background/50" />
        </div>
        <Button type="submit" className="gradient-button w-full">
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  )
}
