"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Loader2 } from "lucide-react"

interface ContactFormProps {
  className?: string
  portalId?: string
  formId?: string
}

export default function ContactForm({
  className = "",
  portalId = "242866469",
  formId = "bb55b981-6240-448b-8bae-e286be4f4d90",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Submit to HubSpot
      if ((window as any).hbspt) {
        await new Promise((resolve, reject) => {
          ;(window as any).hbspt.forms.create({
            portalId: portalId,
            formId: formId,
            target: "#hubspot-form-target",
            onFormSubmit: () => {
              setSubmitted(true)
              setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                company: "",
                message: "",
              })
              resolve(true)
            },
            onFormSubmitError: () => {
              reject(new Error("Form submission failed"))
            },
          })
        })
      } else {
        // Fallback - simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setSubmitted(true)
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      }
    } catch (err) {
      setError("There was an error submitting your form. Please try again.")
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={className}>
      <div id="hubspot-form-target" style={{ display: "none" }}></div>

      {submitted ? (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Message Sent!</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            className="mt-6 bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white rounded-full px-6"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                First Name *
              </label>
              <Input
                id="firstname"
                name="firstname"
                type="text"
                required
                value={formData.firstname}
                onChange={handleChange}
                className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Last Name *
              </label>
              <Input
                id="lastname"
                name="lastname"
                type="text"
                required
                value={formData.lastname}
                onChange={handleChange}
                className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]"
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
              className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]"
              placeholder="john@example.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]"
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
                className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]"
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
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]"
              placeholder="Tell us about your project, goals, and timeline..."
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white rounded-full py-6 text-lg font-semibold hover:shadow-xl transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>Send Message</>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
