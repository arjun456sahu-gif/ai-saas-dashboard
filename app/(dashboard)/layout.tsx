"use client"

import React, { useState, useEffect } from "react"
import Sidebar from "@/components/layout/Sidebar"
import { Menu, X, Hexagon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation" // 👈 Pathname track karne ke liye

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname() // 👈 Current URL detect karo

  // 🧠 THE MAGIC LOGIC: Jab bhi pathname (URL) change ho, menu band kar do
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden selection:bg-indigo-500/30">
      
      {/* 1. DESKTOP SIDEBAR */}
      <aside className="hidden lg:block w-64 h-full shrink-0 border-r border-border/50 bg-card/50 backdrop-blur-xl">
        <Sidebar />
      </aside>

      <div className="flex flex-1 flex-col min-w-0 relative">
        
        {/* MOBILE HEADER */}
        <header className="lg:hidden flex h-16 items-center justify-between px-6 border-b border-border/50 bg-card/80 backdrop-blur-md z-40">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Hexagon className="h-6 w-6 text-primary fill-primary/10" />
            <span className="font-bold text-foreground">BRAND NAME</span>
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </header>

        {/* 2. MOBILE OVERLAY MENU (Slide-in) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop with Fade-out effect */}
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Sidebar with Slide-out effect */}
            <div className="absolute inset-y-0 left-0 w-70 bg-card border-r border-border/50 shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col">
              <div className="h-16 flex items-center justify-between px-6 border-b border-border/50">
                <span className="font-bold text-foreground flex items-center gap-2">
                  <Hexagon className="h-5 w-5 text-primary" /> Nexus
                </span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {/* Hum Sidebar component ko yahan render kar rahe hain. 
                  Iske andar ke Links par click hote hi URL change hoga, 
                  aur upar wala useEffect ise close kar dega.
                */}
                <Sidebar />
              </div>
            </div>
          </div>
        )}

        {/* 3. PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto scrollbar-hide bg-background">
          {children}
        </main>
      </div>
    </div>
  )
}