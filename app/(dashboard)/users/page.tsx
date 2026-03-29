import { 
  Search, Plus, MoreHorizontal, Filter, ChevronDown, 
  Shield, User as UserIcon, CheckCircle2, XCircle, Clock, Trash2
} from "lucide-react"

// Premium Demo Data (The "Secret Sauce" that makes it feel real)
const users = [
  {
    id: "usr_01",
    name: "John Doe",
    email: "john@startup.com",
    initials: "JD",
    role: "Admin",
    status: "Active",
    joined: "12 Jan 2026",
    avatarColor: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
  },
  {
    id: "usr_02",
    name: "Sarah Jenkins",
    email: "sarah@company.io",
    initials: "SJ",
    role: "Pro User",
    status: "Active",
    joined: "14 Jan 2026",
    avatarColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    id: "usr_03",
    name: "Michael Chen",
    email: "m.chen@enterprise.co",
    initials: "MC",
    role: "User",
    status: "Pending",
    joined: "18 Jan 2026",
    avatarColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    id: "usr_04",
    name: "Emma Wilson",
    email: "emma@agency.dev",
    initials: "EW",
    role: "User",
    status: "Blocked",
    joined: "22 Jan 2026",
    avatarColor: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  },
  {
    id: "usr_05",
    name: "Alex Rivera",
    email: "arivera@studio.design",
    initials: "AR",
    role: "Admin",
    status: "Active",
    joined: "24 Jan 2026",
    avatarColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
  },
]

export default function UsersPage() {
  return (
    <div className="flex-1 space-y-8 p-6 md:p-8 pt-6 bg-background min-h-screen">
      
      {/* =========================================
          1. PAGE HEADER
      ========================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Users</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your users, roles, and system permissions.
          </p>
        </div>
        
        {/* Add User Button (Primary Action) */}
        <button className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all bg-indigo-500 text-white hover:bg-indigo-600 h-10 px-5 shadow-md shadow-indigo-500/20">
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </button>
      </div>

      {/* =========================================
          2. FILTERS + ACTION BAR (Premium Feel)
      ========================================= */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-1">
        
        {/* Left: Search & Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Debounced Search Simulation */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search users..."
              className="h-10 w-full sm:w-[280px] rounded-lg border border-border/50 bg-card pl-9 pr-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
            />
          </div>
          
          {/* Role Filter */}
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium border border-border/50 bg-card hover:bg-muted h-10 px-4 transition-colors shadow-sm">
            <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
            Role: All
            <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
          </button>
          
          {/* Status Filter */}
          <button className="hidden sm:inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium border border-border/50 bg-card hover:bg-muted h-10 px-4 transition-colors shadow-sm">
            Status: All
            <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
          </button>
        </div>

        {/* Right: Bulk Actions (Simulating 1 Selected) */}
        <div className="flex items-center space-x-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg px-4 h-10">
          <span className="text-sm font-medium text-indigo-400">1 selected</span>
          <div className="h-4 w-px bg-indigo-500/20 mx-1"></div>
          <button className="text-sm font-medium text-muted-foreground hover:text-rose-400 transition-colors flex items-center">
            <Trash2 className="h-4 w-4 mr-1.5" />
            Delete
          </button>
        </div>
      </div>

      {/* =========================================
          3. USERS TABLE (The Core Component)
      ========================================= */}
      <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            
            {/* Sticky Header */}
            <thead className="bg-muted/30 text-muted-foreground border-b border-border/50 sticky top-0 backdrop-blur-sm z-10">
              <tr>
                <th className="h-12 w-12 px-6 font-medium">
                  {/* Select All Checkbox */}
                  <input type="checkbox" className="rounded border-border/50 bg-background checked:bg-indigo-500 focus:ring-indigo-500" />
                </th>
                <th className="h-12 px-6 font-medium">User</th>
                <th className="h-12 px-6 font-medium">Role</th>
                <th className="h-12 px-6 font-medium text-center">Status</th>
                <th className="h-12 px-6 font-medium">Joined</th>
                <th className="h-12 px-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-border/50">
              {users.map((user, index) => (
                <tr key={user.id} className="hover:bg-muted/50 transition-colors group h-[60px]">
                  
                  {/* Checkbox */}
                  <td className="px-6">
                    <input 
                      type="checkbox" 
                      className="rounded border-border/50 bg-background checked:bg-indigo-500 focus:ring-indigo-500" 
                      defaultChecked={index === 1} // Simulating row selection
                    />
                  </td>
                  
                  {/* User Info (Avatar + Name + Email) */}
                  <td className="px-6 font-medium text-foreground">
                    <div className="flex items-center gap-3">
                      <div className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-xs border ${user.avatarColor}`}>
                        {user.initials}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{user.name}</span>
                        <span className="text-xs text-muted-foreground font-normal">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  
                  {/* Role Badge */}
                  <td className="px-6">
                    {user.role === "Admin" && (
                      <span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-400">
                        <Shield className="h-3 w-3 mr-1" /> Admin
                      </span>
                    )}
                    {user.role === "Pro User" && (
                      <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                        <UserIcon className="h-3 w-3 mr-1" /> Pro User
                      </span>
                    )}
                    {user.role === "User" && (
                      <span className="inline-flex items-center rounded-full border border-border/50 bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                        <UserIcon className="h-3 w-3 mr-1" /> User
                      </span>
                    )}
                  </td>
                  
                  {/* Status Badge with Dot Indicator */}
                  <td className="px-6 text-center">
                    {user.status === "Active" && (
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20 cursor-pointer hover:bg-emerald-500/20 transition-colors">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5"></div>
                        Active
                      </span>
                    )}
                    {user.status === "Pending" && (
                      <span className="inline-flex items-center justify-center rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-500 ring-1 ring-inset ring-amber-500/20 cursor-pointer hover:bg-amber-500/20 transition-colors">
                        <Clock className="h-3 w-3 mr-1" />
                        Pending
                      </span>
                    )}
                    {user.status === "Blocked" && (
                      <span className="inline-flex items-center justify-center rounded-full bg-rose-500/10 px-2.5 py-1 text-xs font-medium text-rose-500 ring-1 ring-inset ring-rose-500/20 cursor-pointer hover:bg-rose-500/20 transition-colors">
                        <XCircle className="h-3 w-3 mr-1" />
                        Blocked
                      </span>
                    )}
                  </td>
                  
                  {/* Joined Date */}
                  <td className="px-6 text-muted-foreground text-sm">
                    {user.joined}
                  </td>
                  
                  {/* Actions Dropdown */}
                  <td className="px-6 text-right">
                    <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-background rounded-md text-muted-foreground transition-all border border-transparent hover:border-border/50 shadow-sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* =========================================
            4. PAGINATION
        ========================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-border/50 bg-muted/10">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            Showing <span className="font-medium text-foreground">1</span> to <span className="font-medium text-foreground">5</span> of <span className="font-medium text-foreground">120</span> users
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-border/50 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50 transition-colors shadow-sm" disabled>
              Previous
            </button>
            <div className="hidden sm:flex gap-1">
              <button className="px-3 py-2 border border-indigo-500/30 rounded-lg text-sm font-medium bg-indigo-500/10 text-indigo-400 transition-colors">1</button>
              <button className="px-3 py-2 border border-transparent rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">2</button>
              <button className="px-3 py-2 border border-transparent rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">3</button>
              <span className="px-2 py-2 text-muted-foreground">...</span>
            </div>
            <button className="px-4 py-2 border border-border/50 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shadow-sm">
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}