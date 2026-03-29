"use client"

import React, { useState } from "react"
import { 
  User, Shield, Bell, Palette, CreditCard, 
  Upload, Check, Loader2, Mail, Lock, Smartphone,
  Monitor, Moon, Sun, ExternalLink
} from "lucide-react"

export default function SettingsPage() {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [activeTab, setActiveTab] = useState("profile")
  const [isLoading, setIsLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)

  // Pre-filled Demo State
  const [profileData, setProfileData] = useState({
    name: "Alexey Kuznetsov",
    email: "alexey@techflow.io",
    username: "alexey_dev",
    bio: "CTO & Co-founder at TechFlow. Building the future of automated developer workflows."
  })

  // Toggle States
  const [toggles, setToggles] = useState({
    marketing: false,
    securityAlerts: true,
    productUpdates: true,
    twoFactor: false
  })

  const [theme, setTheme] = useState("dark")

  // Simulate API Save
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    }, 1200)
  }

  // Helper for custom Toggle Switch UI
  const ToggleSwitch = ({ checked, onChange }: { checked: boolean, onChange: () => void }) => (
    <button 
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-background ${checked ? 'bg-indigo-500' : 'bg-muted'}`}
    >
      <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? 'translate-x-4' : 'translate-x-0'}`} />
    </button>
  )

  return (
    <div className="flex-1 space-y-8 p-6 md:p-8 pt-6 bg-background min-h-screen relative overflow-hidden">
      
      {/* =========================================
          SUCCESS TOAST (Micro-interaction)
      ========================================= */}
      <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-500 shadow-lg backdrop-blur-md transition-all duration-300 ${showToast ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
        <Check className="h-4 w-4" />
        Settings updated successfully
      </div>

      {/* =========================================
          PAGE HEADER
      ========================================= */}
      <div className="flex flex-col space-y-1 border-b border-border/50 pb-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage your account preferences, security, and notifications.
        </p>
      </div>

      {/* =========================================
          SETTINGS LAYOUT (Sidebar + Content)
      ========================================= */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full md:w-[220px] shrink-0">
          <nav className="flex md:flex-col gap-1 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {[
              { id: "profile", label: "Profile", icon: User },
              { id: "account", label: "Account", icon: Shield },
              { id: "security", label: "Security", icon: Lock },
              { id: "notifications", label: "Notifications", icon: Bell },
              { id: "appearance", label: "Appearance", icon: Palette },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? "bg-muted text-foreground" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <tab.icon className={`h-4 w-4 ${activeTab === tab.id ? "text-indigo-500" : ""}`} />
                {tab.label}
              </button>
            ))}
            
            <div className="md:mt-6 pt-6 md:border-t border-border/50">
              <button onClick={() => window.location.href='/billing'} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-all w-full">
                <CreditCard className="h-4 w-4" />
                Billing <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
              </button>
            </div>
          </nav>
        </aside>

        {/* CONTENT PANEL (Max Width for Readability) */}
        <div className="flex-1 max-w-2xl">
          
          {/* 👤 PROFILE SETTINGS */}
          {activeTab === "profile" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Profile</h3>
                <p className="text-sm text-muted-foreground">This is how others will see you on the site.</p>
              </div>
              <div className="h-px bg-border/50" />
              
              <form onSubmit={handleSave} className="space-y-8">
                {/* Avatar Upload */}
                <div className="flex items-center gap-6">
                  <div className="relative group cursor-pointer">
                    <div className="h-20 w-20 rounded-full bg-indigo-500/10 border-2 border-indigo-500/20 flex items-center justify-center text-xl font-bold text-indigo-500 transition-colors group-hover:border-indigo-500/50">
                      AK
                    </div>
                    <div className="absolute inset-0 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <Upload className="h-5 w-5 text-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">Profile picture</h4>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG or GIF. Max 2MB.</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <input type="text" value={profileData.name} onChange={e => setProfileData({...profileData, name: e.target.value})} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Username</label>
                    <input type="text" value={profileData.username} onChange={e => setProfileData({...profileData, username: e.target.value})} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Bio</label>
                  <textarea rows={4} value={profileData.bio} onChange={e => setProfileData({...profileData, bio: e.target.value})} className="w-full rounded-md border border-input bg-background p-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none" />
                  <p className="text-[11px] text-muted-foreground">Brief description for your profile. URLs are hyperlinked.</p>
                </div>

                <button type="submit" disabled={isLoading} className="inline-flex items-center justify-center rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 h-10 px-5 text-sm font-medium transition-all shadow-md">
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save Changes
                </button>
              </form>
            </div>
          )}

          {/* 🔐 SECURITY SETTINGS */}
          {activeTab === "security" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Security</h3>
                <p className="text-sm text-muted-foreground">Manage your password and secure your account.</p>
              </div>
              <div className="h-px bg-border/50" />
              
              <form onSubmit={handleSave} className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-foreground">Change Password</h4>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">Current Password</label>
                    <input type="password" placeholder="••••••••" className="h-10 w-full md:w-2/3 rounded-md border border-input bg-background px-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">New Password</label>
                    <input type="password" placeholder="••••••••" className="h-10 w-full md:w-2/3 rounded-md border border-input bg-background px-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="h-px bg-border/50" />

                {/* 2FA Toggle - Premium Feature */}
                <div className="flex items-center justify-between rounded-xl border border-border/50 bg-card p-4 shadow-sm">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-indigo-500" /> Two-factor authentication
                    </h4>
                    <p className="text-xs text-muted-foreground">Add an extra layer of security to your account.</p>
                  </div>
                  <ToggleSwitch checked={toggles.twoFactor} onChange={() => setToggles({...toggles, twoFactor: !toggles.twoFactor})} />
                </div>

                <button type="submit" disabled={isLoading} className="inline-flex items-center justify-center rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 h-10 px-5 text-sm font-medium transition-all shadow-md">
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Update Security
                </button>
              </form>
            </div>
          )}

          {/* 🔔 NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
                <p className="text-sm text-muted-foreground">Configure how you receive alerts and emails.</p>
              </div>
              <div className="h-px bg-border/50" />
              
              <div className="space-y-4">
                {/* Toggle Rows */}
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-medium text-foreground">Security Alerts</h4>
                    <p className="text-xs text-muted-foreground">Receive emails about login attempts and security updates.</p>
                  </div>
                  <ToggleSwitch checked={toggles.securityAlerts} onChange={() => setToggles({...toggles, securityAlerts: !toggles.securityAlerts})} />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-medium text-foreground">Product Updates</h4>
                    <p className="text-xs text-muted-foreground">Hear about new features, improvements, and announcements.</p>
                  </div>
                  <ToggleSwitch checked={toggles.productUpdates} onChange={() => setToggles({...toggles, productUpdates: !toggles.productUpdates})} />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-medium text-foreground">Marketing Emails</h4>
                    <p className="text-xs text-muted-foreground">Receive offers, promotions, and tips.</p>
                  </div>
                  <ToggleSwitch checked={toggles.marketing} onChange={() => setToggles({...toggles, marketing: !toggles.marketing})} />
                </div>
              </div>
            </div>
          )}

          {/* 🌙 APPEARANCE */}
          {activeTab === "appearance" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Appearance</h3>
                <p className="text-sm text-muted-foreground">Customize the look and feel of your workspace.</p>
              </div>
              <div className="h-px bg-border/50" />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground">Theme Preference</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Theme Selectors */}
                  <button onClick={() => setTheme("light")} className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 p-4 transition-all ${theme === "light" ? "border-indigo-500 bg-indigo-500/5" : "border-border/50 bg-card hover:border-border hover:bg-muted/50"}`}>
                    <Sun className={`h-8 w-8 ${theme === "light" ? "text-indigo-500" : "text-muted-foreground"}`} />
                    <span className="text-sm font-medium text-foreground">Light</span>
                  </button>
                  <button onClick={() => setTheme("dark")} className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 p-4 transition-all ${theme === "dark" ? "border-indigo-500 bg-indigo-500/5" : "border-border/50 bg-card hover:border-border hover:bg-muted/50"}`}>
                    <Moon className={`h-8 w-8 ${theme === "dark" ? "text-indigo-500" : "text-muted-foreground"}`} />
                    <span className="text-sm font-medium text-foreground">Dark</span>
                  </button>
                  <button onClick={() => setTheme("system")} className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 p-4 transition-all ${theme === "system" ? "border-indigo-500 bg-indigo-500/5" : "border-border/50 bg-card hover:border-border hover:bg-muted/50"}`}>
                    <Monitor className={`h-8 w-8 ${theme === "system" ? "text-indigo-500" : "text-muted-foreground"}`} />
                    <span className="text-sm font-medium text-foreground">System</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 🛡️ ACCOUNT (DANGER ZONE) */}
          {activeTab === "account" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Account</h3>
                <p className="text-sm text-muted-foreground">Manage your account email and deletion.</p>
              </div>
              <div className="h-px bg-border/50" />
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <div className="flex gap-3">
                    <input type="email" disabled value={profileData.email} className="h-10 w-full md:w-2/3 rounded-md border border-input bg-muted px-3 text-sm text-muted-foreground shadow-sm cursor-not-allowed" />
                    <button className="h-10 rounded-md border border-border/50 bg-background px-4 text-sm font-medium hover:bg-muted transition-colors">
                      Change
                    </button>
                  </div>
                  <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1"><Check className="h-3 w-3" /> Email verified</p>
                </div>

                <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 mt-8">
                  <h4 className="text-sm font-medium text-rose-500">Danger Zone</h4>
                  <p className="text-xs text-muted-foreground mt-1 mb-4">Permanently delete your account and all of your content.</p>
                  <button className="h-9 rounded-md bg-rose-500 px-4 text-sm font-medium text-white hover:bg-rose-600 transition-colors shadow-sm">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}