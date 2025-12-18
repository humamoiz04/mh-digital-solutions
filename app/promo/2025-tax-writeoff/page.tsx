import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Zap, DollarSign, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "2025 Tax Write-Off Bundle - Website Redesign & SEO | MH Digital Solution",
  description:
    "Pre-pay for website redesign in 2025, start work in January 2026. Write off as 2025 business expense. Limited time offer.",
}

export default function TaxWriteOffPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-fuchsia-600/10 border border-fuchsia-600 rounded-full mb-4">
            <span className="text-fuchsia-600 font-semibold text-sm">LIMITED TIME: Expires Dec 31, 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
            2025 Tax Write-Off Bundle
          </h1>
          <p className="text-xl text-muted-foreground">Lower Your Taxes. Upgrade Your Brand. Start in January 2026.</p>
        </div>

        <div className="bg-gradient-to-r from-fuchsia-600/10 to-pink-600/10 border border-fuchsia-600 rounded-lg p-8 mb-12">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">SPECIAL PRICING</p>
            <div className="text-5xl font-bold mb-2">$3,500</div>
            <p className="text-muted-foreground">Pay in December 2025 • Work begins January 2026</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 border border-border rounded-lg bg-muted/50">
            <Zap className="h-8 w-8 text-fuchsia-600 mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-4">What's Included</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Full Website Redesign</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Business Registration Compliance Check</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>1 Month Launch Pad PPC Management</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Bonus: SEO Audit ($500 value)</span>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-border rounded-lg bg-muted/50">
            <DollarSign className="h-8 w-8 text-fuchsia-600 mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-4">Tax Benefits</h3>
            <p className="text-muted-foreground mb-4">
              When you prepay for a service to be delivered in a future year, the expense can be deducted in the year
              paid (in most cases). This $3,500 payment qualifies as a 2025 business expense.
            </p>
            <p className="text-sm text-muted-foreground italic">
              * Consult your tax professional for your specific situation
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why This Offer?</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <Calendar className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold mb-2">Perfect Timing</h3>
                <p className="text-muted-foreground">
                  Start fresh in 2026 with a new website that attracts more customers
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <DollarSign className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold mb-2">Reduce Your Tax Burden</h3>
                <p className="text-muted-foreground">
                  Lower your 2025 taxable income with a business investment that pays dividends
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold mb-2">Lock In 2025 Pricing</h3>
                <p className="text-muted-foreground">Rates increase in 2026. Prepay now and lock in these prices</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-fuchsia-600/10 border border-fuchsia-600 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">When does work start?</h3>
              <p className="text-muted-foreground">
                Payment due by December 31, 2025. Project kicks off January 6, 2026.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What if I need it sooner?</h3>
              <p className="text-muted-foreground">Contact us to discuss expedited options and potential rush fees.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is this refundable?</h3>
              <p className="text-muted-foreground">
                No refunds after December 31, 2025. Work begins on agreed date in January 2026.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">Ready to invest in your business's future?</p>
          <Button size="lg" asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
            <Link href="/contact">Claim Your Tax Write-Off Bundle</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
