import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, Users, CreditCard, Shield } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mb-6">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">Last updated: January 2025</p>
          </div>

          <div className="space-y-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-500" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  By accessing and using MH Digital Solution services, you accept and agree to be bound by the terms and
                  provision of this agreement. These terms apply to all visitors, users, and others who access or use
                  our services.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-green-500" />
                  Use License
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Permission is granted to temporarily access our services for personal, non-commercial transitory
                  viewing only. This is the grant of a license, not a transfer of title, and under this license you may
                  not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes or public display</li>
                  <li>Attempt to reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-purple-500" />
                  Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Payment terms for our services are as follows:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>50% deposit required before project commencement</li>
                  <li>Final payment due upon project completion</li>
                  <li>Monthly retainer fees due on the 1st of each month</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All prices are subject to applicable taxes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-orange-500" />
                  Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The materials on MH Digital Solution's website are provided on an 'as is' basis. MH Digital Solution
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
                  including without limitation, implied warranties or conditions of merchantability, fitness for a
                  particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-teal-500" />
                  Limitations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  In no event shall MH Digital Solution or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on our website, even if MH Digital Solution or an authorized
                  representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
