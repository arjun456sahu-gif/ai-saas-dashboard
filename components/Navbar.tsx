import { Bell, Search, Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-8">
        
         {/* Mobile Menu Toggle */}
        <button className="mr-4 md:hidden text-muted-foreground hover:text-foreground">
          <Menu className="h-5 w-5" />
        </button>

         {/* Brand / Breadcrumbs Area */}
        <div className="hidden md:flex items-center">
          <div className="text-sm font-medium text-muted-foreground">
            Logo <span className="mx-2 text-border">/</span> 
            <span className="text-foreground">Dashboard</span>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center space-x-4">
          
          {/* Premium Search Bar */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="h-9 w-64 rounded-md border border-input bg-muted/50 pl-9 pr-4 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
            <div className="absolute right-2.5 top-2 flex items-center space-x-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

           {/* Notification Bell */}
          <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-input bg-background hover:bg-muted transition-colors">
            <Bell className="h-4 w-4 text-foreground" />
            {/* Active Red Dot */}
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
          </button>

          {/* User Profile Avatar placeholder */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors">
            <span className="text-sm font-medium text-indigo-500">profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}