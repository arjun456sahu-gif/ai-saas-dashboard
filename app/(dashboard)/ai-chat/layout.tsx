import { Hexagon } from "lucide-react"
import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background selection:bg-indigo-500/30 relative">
      
      {/* LEFT SIDE: The Form Container */}
      <div className="flex flex-col justify-center px-8 py-12 sm:px-16 md:px-24 lg:px-32 z-10">
        
        {/* Logo / Branding */}
        <Link href="/" className="absolute top-8 left-8 sm:top-12 sm:left-12 flex items-center gap-2 group transition-transform hover:scale-105">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
            <Hexagon className="h-5 w-5 text-indigo-500 fill-indigo-500/20" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Nexus
          </span>
        </Link>

        {/* The Auth Form (Injected here) */}
        {children}
        
      </div>

      {/* RIGHT SIDE: Premium Product Showcase (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-col justify-between bg-muted/30 border-l border-border/50 p-12 relative overflow-hidden">
        
        {/* Abstract Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 mt-auto">
          <blockquote className="space-y-6">
            <p className="text-2xl font-medium leading-relaxed text-foreground/90">
              "Nexus completely transformed how we ship products. The pre-built infrastructure saved us hundreds of hours of development time. It's the ultimate unfair advantage."
            </p>
            <footer className="flex items-center gap-4 pt-4 border-t border-border/50">
              <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400 font-bold">
                AK
              </div>
              <div>
                <div className="font-semibold text-foreground">Alexey K.</div>
                <div className="text-sm text-muted-foreground">CTO at TechFlow</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      
    </div>
  )
}