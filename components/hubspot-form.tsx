"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle } from "lucide-react"

interface HubSpotFormProps {
  portalId?: string
  formId?: string
  region?: string
}

export default function HubSpotForm({
  portalId = "242866469",
  formId = "bb55b981-6240-448b-8bae-e286be4f4d90",
  region = "na2",
}: HubSpotFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Create script element for HubSpot Forms
    const script = document.createElement("script")
    script.src = `//js-${region}.hsforms.net/forms/embed/v2.js`
    script.charset = "utf-8"
    script.type = "text/javascript"
    script.async = true
    document.body.appendChild(script)

    // Initialize form once script is loaded
    script.onload = () => {
      if ((window as any).hbspt) {
        ;(window as any).hbspt.forms.create({
          portalId: portalId,
          formId: formId,
          region: region,
          target: "#hubspot-form-wrapper",
        })
      }
    }

    // Cleanup
    return () => {
      document.body.removeChild(script)
    }
  }, [portalId, formId, region])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      console.log("Form submitted:", formData)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
        <p className="text-gray-600 dark:text-gray-400">
          We've received your message and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div id="hubspot-form-wrapper" className="hubspot-form-container">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              First Name *
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Last Name *
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full"
            placeholder="john@example.com"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full"
              placeholder="Your Company"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full"
            rows={4}
            placeholder="Tell us about your project and how we can help..."
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#FF7600] to-[#8B5CF6] hover:opacity-90 text-white border-0"
        >
          {isLoading ? "Sending..." : "Send Message"}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </div>
  )
}
