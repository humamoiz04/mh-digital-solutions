"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Calendar, Loader2 } from "lucide-react"

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.name || !formData.email || !formData.service || !formData.date || !formData.time) {
      setError("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await (async () => {
        try {
          return await response.json()
        } catch {
          return {}
        }
      })()

      if (!response.ok || (data && (data as any).error)) {
        throw new Error((data as any)?.error || "Failed to book appointment")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      })
    } catch (error) {
      setError("Failed to book appointment. Please try again or call us directly at +17075822255")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="glass-card w-full max-w-lg mx-auto border-2 border-green-500/20">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground mb-2">Appointment Booked!</CardTitle>
          <CardDescription className="text-muted-foreground mb-4">
            Thank you for booking a consultation. We'll send you a confirmation email shortly and call you to confirm
            the details.
          </CardDescription>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="glass-card w-full max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">Book Your Free Consultation</CardTitle>
        <CardDescription className="text-muted-foreground">
          Schedule a time with our experts to discuss your digital needs and how we can help.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                placeholder="Your Name"
                className="bg-background/50"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className="bg-background/50"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              className="bg-background/50"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="service">Interested Service *</Label>
            <Select value={formData.service} onValueChange={handleSelectChange}>
              <SelectTrigger id="service" className="bg-background/50">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="seo-solutions">SEO Solutions</SelectItem>
                <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                <SelectItem value="it-consulting">IT Consulting</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="date">Preferred Date *</Label>
            <Input
              id="date"
              type="date"
              className="bg-background/50"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="time">Preferred Time *</Label>
            <Input
              id="time"
              type="time"
              className="bg-background/50"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="message">Your Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell us more about your needs"
              rows={3}
              className="bg-background/50"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded" role="alert" aria-live="assertive">
              {error}
            </div>
          )}
          <Button type="submit" className="gradient-button w-full h-12 text-lg font-semibold" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Booking Appointment...
              </div>
            ) : (
              <>
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </>
            )}
          </Button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Or call us directly:{" "}
            <a href="tel:+17075822255" className="text-fuchsia-500 hover:underline font-semibold">
              +1 (707) 582-2255
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
