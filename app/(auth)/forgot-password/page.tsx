"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Loader2, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate Supabase: await supabase.auth.resetPasswordForEmail(...)
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1200)
  }

  return (
    <div className="w-full max-w-[400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <Link href="/login" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to login
      </Link>

      {!isSubmitted ? (
        <>
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Reset password</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground" htmlFor="email">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  id="email" 
                  type="email" 
                  placeholder="name@company.com" 
                  required
                  className="h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full flex items-center justify-center rounded-lg bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 h-11 px-5 text-sm font-medium transition-all shadow-md"
            >
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Send reset link"}
            </button>
          </form>
        </>
      ) : (
        /* Success State */
        <div className="text-center space-y-4 py-8 animate-in zoom-in-95 duration-300">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <CheckCircle2 className="h-8 w-8 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Check your email</h2>
          <p className="text-sm text-muted-foreground">
            We've sent a password reset link to your email address. Please check your inbox and spam folder.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Didn't receive the email? Try again
            </button>
          </div>
        </div>
      )}

    </div>
  )
}