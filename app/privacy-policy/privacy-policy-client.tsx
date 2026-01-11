"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPolicyClient() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF00FF] to-[#00F0FF] rounded-full mb-6">
              <Shield className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FF00FF] to-[#00F0FF] bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-400">Last updated: January 2025</p>
          </div>

          <div className="space-y-8">
            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Eye className="h-6 w-6 text-[#00F0FF]" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  We collect information you provide directly to us, such as when you create an account, contact us, or
                  use our services. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Business information and project requirements</li>
                  <li>Communication preferences and feedback</li>
                  <li>Usage data and analytics information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Lock className="h-6 w-6 text-[#00F0FF]" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <UserCheck className="h-6 w-6 text-[#00F0FF]" />
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy. We may share information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With your explicit consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <FileText className="h-6 w-6 text-[#00F0FF]" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage and backup systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Mail className="h-6 w-6 text-[#00F0FF]" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2 text-slate-300">
                  <p>
                    <strong>Email:</strong> privacy@mhdigitalsolution.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (707) 249-1222
                  </p>
                  <p>
                    <strong>Address:</strong> Vacaville, CA 95688
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <Link href="/terms-of-service">
              <Button className="bg-gradient-to-r from-[#FF00FF] to-[#00F0FF] hover:opacity-90 text-black font-semibold">
                Terms of Service
              </Button>
            </Link>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  localStorage.removeItem("cookie-consent")
                  const event = new CustomEvent("showCookieConsent")
                  window.dispatchEvent(event)
                }
              }}
              className="px-6 py-2 border border-[#00F0FF] text-[#00F0FF] rounded-lg hover:bg-[#00F0FF]/10 transition-colors font-semibold"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
