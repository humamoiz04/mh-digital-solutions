"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, Users, CreditCard, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF00FF] to-[#00F0FF] rounded-full mb-6">
              <Scale className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FF00FF] to-[#00F0FF] bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-400">Last updated: January 2025</p>
          </div>

          <div className="space-y-8">
            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <FileText className="h-6 w-6 text-[#00F0FF]" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  By accessing and using MH Digital Solution services, you accept and agree to be bound by the terms and
                  provision of this agreement. These terms apply to all visitors, users, and others who access or use
                  our services.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Users className="h-6 w-6 text-[#00F0FF]" />
                  Use License
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Permission is granted to temporarily access our services for personal, non-commercial transitory
                  viewing only. This is the grant of a license, not a transfer of title, and under this license you may
                  not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes or public display</li>
                  <li>Attempt to reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <CreditCard className="h-6 w-6 text-[#00F0FF]" />
                  Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">Payment terms for our services are as follows:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>50% deposit required before project commencement</li>
                  <li>Final payment due upon project completion</li>
                  <li>Monthly retainer fees due on the 1st of each month</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All prices are subject to applicable taxes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <AlertTriangle className="h-6 w-6 text-[#00F0FF]" />
                  Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  The materials on MH Digital Solution's website are provided on an 'as is' basis. MH Digital Solution
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
                  including without limitation, implied warranties or conditions of merchantability, fitness for a
                  particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border border-slate-700 hover:border-[#FF00FF]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Shield className="h-6 w-6 text-[#00F0FF]" />
                  Limitations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  In no event shall MH Digital Solution or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on our website, even if MH Digital Solution or an authorized
                  representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <Link href="/privacy-policy">
              <Button className="bg-gradient-to-r from-[#FF00FF] to-[#00F0FF] hover:opacity-90 text-black font-semibold">
                Privacy Policy
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
