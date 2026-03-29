"use client"

import { useState } from "react"
import { 
  CreditCard, Check, Download, Zap, Sparkles, 
  AlertCircle, ArrowRight, ShieldCheck 
} from "lucide-react"

export default function BillingPage() {
  // State for the Monthly/Yearly pricing toggle
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="flex-1 space-y-8 p-6 md:p-8 pt-6 bg-background min-h-screen">
      
      {/* =========================================
          1. PAGE HEADER
      ========================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Billing & Plans</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your subscription, usage limits, and payment history.
          </p>
        </div>
        <button className="inline-flex items-center justify-center rounded-lg bg-foreground text-background hover:bg-foreground/90 h-10 px-5 text-sm font-medium transition-all shadow-sm">
          <CreditCard className="mr-2 h-4 w-4" />
          Update Payment Method
        </button>
      </div>

      {/* =========================================
          2. CURRENT PLAN & USAGE (The Trust Builder)
      ========================================= */}
      <div className="rounded-xl border border-indigo-500/30 bg-card shadow-sm overflow-hidden relative">
        {/* Subtle background glow for the active plan */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-xl pointer-events-none"></div>
        
        <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
          
          {/* Plan Info */}
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-indigo-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  Pro Plan
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-500 border border-emerald-500/20">
                    Active
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  $29.00 per month. Next renewal on <strong className="text-foreground font-medium">12 Feb 2026</strong>.
                </p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors bg-indigo-500/10 px-4 py-2 rounded-lg border border-indigo-500/20">
                Change Plan
              </button>
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-lg border border-border/50 hover:bg-muted">
                Cancel Subscription
              </button>
            </div>
          </div>

          {/* Usage Progress Bars (Crucial for AI SaaS) */}
          <div className="flex-1 w-full space-y-5 bg-background/50 p-5 rounded-lg border border-border/50">
            {/* API Calls */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">API Generations</span>
                <span className="text-muted-foreground">12,340 / 20,000</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '61%' }}></div>
              </div>
            </div>
            
            {/* Projects */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">Active Projects</span>
                <span className="text-muted-foreground">8 / 10</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* Storage */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">Storage Used</span>
                <span className="text-muted-foreground">4.2 GB / 10 GB</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================
          3. PRICING CARDS (Conversion Section)
      ========================================= */}
      <div className="space-y-6 pt-4">
        
        {/* Billing Toggle Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground">Upgrade your workflow</h3>
          
          <div className="inline-flex items-center p-1 bg-muted/50 border border-border/50 rounded-xl">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${!isYearly ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center ${isYearly ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Yearly <span className="ml-2 inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-500">SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto items-start">
          
          {/* Free Plan */}
          <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-sm">
            <h4 className="text-lg font-semibold text-foreground">Starter</h4>
            <div className="mt-4 flex items-baseline text-4xl font-extrabold text-foreground">
              $0
              <span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Perfect for trying out the platform and basic features.</p>
            <button className="mt-6 w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Current Plan
            </button>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center"><Check className="mr-3 h-4 w-4 text-indigo-500" /> 1,000 API Calls / mo</li>
              <li className="flex items-center"><Check className="mr-3 h-4 w-4 text-indigo-500" /> 2 Active Projects</li>
              <li className="flex items-center"><Check className="mr-3 h-4 w-4 text-indigo-500" /> Community Support</li>
            </ul>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="rounded-2xl border-2 border-indigo-500 bg-card p-8 shadow-xl shadow-indigo-500/10 relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 -mt-3 mr-6 inline-block rounded-full bg-indigo-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
              Most Popular
            </div>
            <h4 className="text-lg font-semibold text-foreground">Pro</h4>
            <div className="mt-4 flex items-baseline text-4xl font-extrabold text-foreground">
              ${isYearly ? "24" : "29"}
              <span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Everything you need to scale your AI integrations.</p>
            <button className="mt-6 w-full rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-600 transition-colors shadow-md shadow-indigo-500/20">
              Upgrade to Pro
            </button>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center"><Check className="mr-3 h-4 w-4 text-indigo-500" /> <strong className="text-foreground font-medium mr-1">20,000</strong> API Calls / mo</li>
              <li className="flex items-center"><Check className="mr-3 h-4 w-4 text-indigo-500" /> <strong className="text-foreground font-medium mr-1">10</strong> Active Projects</li>
              <li className="flex items-center"><Check className="mr-3 h-4 w-4 text-indigo-500" /> Advanced Analytics</li>
              <li className="flex items-center"><Check className="mr-3 h-4 w-4 text-indigo-500" /> Priority Email Support</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-sm">
            <h4 className="text-lg font-semibold text-foreground">Enterprise</h4>
            <div className="mt-4 flex items-baseline text-4xl font-extrabold text-foreground">
              Custom
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Dedicated infrastructure and unlimited scaling.</p>
            <button className="mt-6 w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Contact Sales
            </button>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center"><Check className="mr-3 h-4 w-4 text-muted-foreground" /> Unlimited API Calls</li>
              <li className="flex items-center"><Check className="mr-3 h-4 w-4 text-muted-foreground" /> Unlimited Projects</li>
              <li className="flex items-center"><Check className="mr-3 h-4 w-4 text-muted-foreground" /> Custom AI Models</li>
              <li className="flex items-center"><Check className="mr-3 h-4 w-4 text-muted-foreground" /> 24/7 Phone Support</li>
            </ul>
          </div>

        </div>
      </div>

      {/* =========================================
          4. PAYMENT HISTORY (Stripe Style)
      ========================================= */}
      <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Payment History</h3>
            <p className="text-sm text-muted-foreground mt-1">View and download your previous invoices.</p>
          </div>
          {/* Coupon / Promo Code Input Simulation */}
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Promo code" 
              className="h-9 w-32 sm:w-40 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button className="h-9 rounded-md bg-muted px-4 text-sm font-medium text-foreground hover:bg-muted/80 transition-colors border border-border/50">
              Apply
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/30 text-muted-foreground border-b border-border/50">
              <tr>
                <th className="h-11 px-6 font-medium">Date</th>
                <th className="h-11 px-6 font-medium">Invoice</th>
                <th className="h-11 px-6 font-medium">Amount</th>
                <th className="h-11 px-6 font-medium text-center">Status</th>
                <th className="h-11 px-6 font-medium text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              
              {/* Row 1 */}
              <tr className="hover:bg-muted/50 transition-colors group">
                <td className="p-4 px-6 text-foreground font-medium">Jan 12, 2026</td>
                <td className="p-4 px-6 text-muted-foreground">INV-2026-001</td>
                <td className="p-4 px-6 text-foreground font-medium">$29.00</td>
                <td className="p-4 px-6 text-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
                    Paid
                  </span>
                </td>
                <td className="p-4 px-6 text-right">
                  <button className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-background border border-transparent hover:border-border/50 transition-all shadow-sm">
                    <Download className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-muted/50 transition-colors group">
                <td className="p-4 px-6 text-foreground font-medium">Dec 12, 2025</td>
                <td className="p-4 px-6 text-muted-foreground">INV-2025-012</td>
                <td className="p-4 px-6 text-foreground font-medium">$29.00</td>
                <td className="p-4 px-6 text-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
                    Paid
                  </span>
                </td>
                <td className="p-4 px-6 text-right">
                  <button className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-background border border-transparent hover:border-border/50 transition-all shadow-sm">
                    <Download className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 3 (Failed/Warning Simulation) */}
              <tr className="hover:bg-muted/50 transition-colors group">
                <td className="p-4 px-6 text-foreground font-medium">Nov 12, 2025</td>
                <td className="p-4 px-6 text-muted-foreground">INV-2025-011</td>
                <td className="p-4 px-6 text-foreground font-medium">$29.00</td>
                <td className="p-4 px-6 text-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
                    Paid
                  </span>
                </td>
                <td className="p-4 px-6 text-right">
                  <button className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-background border border-transparent hover:border-border/50 transition-all shadow-sm">
                    <Download className="h-4 w-4" />
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}