"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, Lock, User, Loader2, Eye, EyeOff } from "lucide-react"

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate Supabase Auth: await supabase.auth.signUp(...)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  // Simple password strength visualizer
  const getPasswordStrength = () => {
    if (password.length === 0) return 0
    if (password.length < 6) return 1 // Weak (Red)
    if (password.length < 10) return 2 // Medium (Yellow)
    return 3 // Strong (Green)
  }
  const strength = getPasswordStrength()

  return (
    <div className="w-full max-w-[400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your details below to create your workspace.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="name">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              id="name" 
              type="text" 
              placeholder="John Doe" 
              required
              className="h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Email */}
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

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="password">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              id="password" 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-11 w-full rounded-lg border border-input bg-background pl-10 pr-10 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          
          {/* Password Strength Indicator */}
          {password.length > 0 && (
            <div className="flex gap-1 pt-1">
              <div className={`h-1 w-full rounded-full ${strength >= 1 ? 'bg-rose-500' : 'bg-muted'}`}></div>
              <div className={`h-1 w-full rounded-full ${strength >= 2 ? 'bg-amber-500' : 'bg-muted'}`}></div>
              <div className={`h-1 w-full rounded-full ${strength >= 3 ? 'bg-emerald-500' : 'bg-muted'}`}></div>
            </div>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-2 mt-2">
          <input 
            type="checkbox" 
            id="terms" 
            required
            className="mt-1 h-4 w-4 rounded border-border/50 bg-background checked:bg-indigo-500 focus:ring-indigo-500 cursor-pointer" 
          />
          <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
            I agree to the <a href="#" className="text-indigo-400 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-400 hover:underline">Privacy Policy</a>.
          </label>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full flex items-center justify-center rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 h-11 px-5 text-sm font-medium transition-all shadow-md mt-4"
        >
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {isLoading ? "Creating account..." : "Create Account"}
          {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
        </button>
      </form>

      {/* Footer link */}
      <div className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-indigo-400 hover:text-indigo-300 hover:underline underline-offset-4 transition-colors">
          Sign in
        </Link>
      </div>

    </div>
  )
}