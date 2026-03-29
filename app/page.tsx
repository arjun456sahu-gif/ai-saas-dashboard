import Link from "next/link"
import { ArrowRight, Sparkles, Hexagon } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden selection:bg-indigo-500/30">
      
      {/* Background Effects (The Vercel/Linear Look) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      <div className="absolute left-1/2 top-1/2 -z-10 h-screen w-screen -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[120px]"></div>

      {/* Minimal Top Nav for Landing Page */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20">
            <Hexagon className="h-5 w-5 text-indigo-500 fill-indigo-500/20" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
           Logo
          </span>
        </div>
        <Link 
          href="/login" 
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Sign In
        </Link>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mt-16">
        
        {/* Version / Update Pill */}
        <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 mb-8 backdrop-blur-sm cursor-default">
          <Sparkles className="mr-2 h-4 w-4" />
          Production Ready UI Kit
        </div>

        {/* Hero Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          The Ultimate <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
            AI SaaS Dashboard
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Launch your AI startup in days, not months. A premium Next.js boilerplate featuring complex data tables, KPI charts, and a native ChatGPT-style interface.
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/dashboard"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90 shadow-lg shadow-foreground/10"
          >
            Live Preview
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm px-8 text-sm font-medium text-foreground transition-all hover:bg-muted"
          >
            Create Account
          </Link>
        </div>
        
      </div>

    </div>
  )
}