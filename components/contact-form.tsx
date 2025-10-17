"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, Send, Loader2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
        }),
      })

      const data = await (async () => {
        try {
          return await response.json()
        } catch {
          return {}
        }
      })()

      if (!response.ok || (data && (data as any).error)) {
        throw new Error((data as any)?.error || "Failed to send message")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setError("Failed to send message. Please try again or contact us directly at +17072491222")
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

  if (isSubmitted) {
    return (
      <Card className="glass-card w-full max-w-lg mx-auto border-2 border-green-500/20">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground mb-2">Message Sent!</CardTitle>
          <CardDescription className="text-muted-foreground mb-4">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </CardDescription>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="glass-card w-full max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">Get in Touch</CardTitle>
        <CardDescription className="text-muted-foreground">
          Have questions or need a custom solution? Fill out the form below and we'll get back to you shortly.
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
                aria-required="true"
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
                aria-required="true"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Subject"
              className="bg-background/50"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Your Message"
              rows={5}
              className="bg-background/50"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
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
                Sending Message...
              </div>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </>
            )}
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
