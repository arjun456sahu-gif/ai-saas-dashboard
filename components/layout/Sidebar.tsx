"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  BarChart3,
  Users,
  CreditCard,
  MessageSquare,
  Folder,
  Settings,
  LogOut,
  Zap,
  Hexagon
} from "lucide-react"

// Grouped for better SaaS organization
const navGroups = [
  {
    label: "Overview",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Analytics", href: "/analytics", icon: BarChart3 },
      { name: "Users", href: "/users", icon: Users },
    ]
  },
  {
    label: "Tools",
    items: [
      { name: "AI Chat", href: "/ai-chat", icon: MessageSquare },
      { name: "Files", href: "/files", icon: Folder },
    ]
  },
  {
    label: "Management",
    items: [
      { name: "Billing", href: "/billing", icon: CreditCard },
      { name: "Settings", href: "/settings", icon: Settings },
    ]
  }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="h-full flex flex-col bg-card border-r border-border/50 text-foreground">
      
      {/* 1. LOGO SECTION */}
      <div className="h-16 flex items-center px-6 border-b border-border/50">
        <Link href="/dashboard" className="flex items-center gap-2.5 group transition-transform hover:scale-105">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <Hexagon className="h-5 w-5 text-primary fill-primary/10" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            Nexus
          </span>
        </Link>
      </div>

      {/* 2. NAVIGATION SECTION */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 scrollbar-hide">
        {navGroups.map((group) => (
          <div key={group.label} className="space-y-2">
            <h3 className="px-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
              {group.label}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all group ${
                      isActive
                        ? "bg-primary/10 text-primary shadow-[inset_0px_0px_12px_rgba(99,102,241,0.05)]"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    <item.icon size={18} className={`${isActive ? "text-primary" : "opacity-70 group-hover:opacity-100"}`} />
                    {item.name}
                    {item.name === "AI Chat" && (
                      <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-lg shadow-primary/20">
                        3
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 3. UPGRADE CARD (The Monetization Engine) */}
      <div className="p-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-4 rounded-2xl">
          <div className="absolute -top-4 -right-4 h-16 w-16 bg-primary/20 rounded-full blur-2xl" />
          <p className="text-sm font-bold text-foreground flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-amber-500 fill-amber-500" /> Upgrade to Pro
          </p>
          <p className="text-[11px] text-muted-foreground mt-1 mb-3 leading-relaxed">
            Unlock advanced AI models & unlimited file storage.
          </p>
          <button className="w-full bg-primary text-primary-foreground text-xs font-bold py-2 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
            View Plans
          </button>
        </div>
      </div>

      {/* 4. USER PROFILE SECTION */}
      <div className="p-4 border-t border-border/50 flex items-center justify-between bg-muted/20">
        <div className="flex items-center gap-3">
          <div className="relative">
             <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-xs">
              AK
            </div>
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-card" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground leading-none">Arjun Kumar</span>
            <span className="text-[10px] text-muted-foreground mt-1 uppercase font-bold tracking-tighter">Pro Member</span>
          </div>
        </div>
        <button className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-all">
          <LogOut size={18} />
        </button>
      </div>
    </div>
  )
}