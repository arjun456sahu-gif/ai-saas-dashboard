import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { MainAnalyticsChart } from "../../../components/charts/main-analytics-charts"
// import { Navbar } from "@/components/Navbar"
import { 
  Calendar, Download, ChevronDown, Sparkles, Filter, 
  Search, ArrowUpDown, MoreHorizontal, LayoutGrid, Users, Activity
} from "lucide-react"

export default function AnalyticsPage() {
  return (
    <>
    {/* <Navbar/> */}
    <div className="flex-1 space-y-8 p-6 md:p-8 pt-6 bg-background min-h-screen">
      
      {/* =========================================
          1. PAGE HEADER
      ========================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Analytics</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Track your performance and deep-dive into product insights.
          </p>
        </div>
        
        {/* Export Button with Dropdown Indicator */}
        <button className="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all border border-border/50 bg-transparent hover:bg-muted text-foreground h-10 px-4 py-2 shadow-sm">
          <Download className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          Export CSV
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </button>
      </div>

      {/* =========================================
          2. FILTER BAR & AI INSIGHTS
      ========================================= */}
      <div className="space-y-4">
        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-xl border border-border/50 bg-card shadow-sm">
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Date Range Picker */}
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-border/50 bg-background hover:bg-muted h-9 px-4 transition-colors">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              Last 30 Days
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </button>

            
            {/* User Type Filter */}
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-border/50 bg-background hover:bg-muted h-9 px-4 transition-colors">
              User Type: All
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </button>
            
            {/* Plan Filter */}
            <button className="hidden sm:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-border/50 bg-background hover:bg-muted h-9 px-4 transition-colors">
              Plan: All
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </button>
          </div>

          {/* Compare Toggle (Premium Feature) */}
          <div className="flex items-center space-x-3 lg:border-l border-border/50 lg:pl-4">
            <span className="text-sm font-medium text-muted-foreground">Compare with previous</span>
            {/* Native CSS Toggle Switch UI */}
            <button className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-background">
              <span className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
            </button>
          </div>
        </div>

        {/* AI Insights Panel (The Secret Sauce) */}
        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 flex items-start space-x-4 shadow-sm">
          <div className="mt-0.5 rounded-full bg-indigo-500/20 p-1.5 border border-indigo-500/30">
            <Sparkles className="h-4 w-4 text-indigo-400" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-semibold text-indigo-100">AI Insight Summary</p>
            <p className="text-sm text-indigo-200/70 leading-relaxed">
              Revenue increased by <span className="text-emerald-400 font-medium">12.4%</span> this week. Most active users are originating from organic traffic, and Pro tier upgrades are up 8% compared to the previous period.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          3. MAIN CHART (Hero Section)
      ========================================= */}
      <Card className="bg-card border-border/50 shadow-sm overflow-hidden">
        <CardHeader className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-border/50 pb-6">
          <div className="space-y-1">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Revenue Overview
            </CardTitle>
            <div className="flex items-baseline space-x-3 pt-1">
              <span className="text-4xl font-bold text-foreground tracking-tight">$45,320</span>
              <span className="text-sm font-medium text-emerald-500 flex items-center bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                +12.4% vs last period
              </span>
            </div>
          </div>
          
          {/* Main Chart Data Toggles */}
          <div className="flex space-x-1 bg-muted/30 p-1 rounded-lg border border-border/50 mt-4 sm:mt-0">
            <button className="px-4 py-1.5 text-xs font-medium rounded-md bg-background text-foreground shadow-sm">Revenue</button>
            <button className="px-4 py-1.5 text-xs font-medium rounded-md text-muted-foreground hover:text-foreground transition-colors">Users</button>
            <button className="px-4 py-1.5 text-xs font-medium rounded-md text-muted-foreground hover:text-foreground transition-colors">Sessions</button>
          </div>
        </CardHeader>
        <CardContent className="p-0 pt-6">
          {/* Requires the components/charts/main-analytics-chart.tsx file we built */}
          <MainAnalyticsChart />
        </CardContent>
      </Card>

      {/* =========================================
          4. SECONDARY CHARTS GRID
      ========================================= */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Chart 1: User Growth */}
        <Card className="bg-card border-border/50 shadow-sm hover:border-border transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              User Growth
              <Users className="h-4 w-4 opacity-50" />
            </CardTitle>
            <div className="text-2xl font-bold text-foreground tracking-tight">+842</div>
            <p className="text-xs text-emerald-500 font-medium">+4.1% daily avg</p>
          </CardHeader>
          <CardContent className="h-30 flex items-end justify-center pb-4 pt-4">
            <div className="w-full h-full bg-muted/20 rounded-md border border-border/50 border-dashed flex items-center justify-center text-xs text-muted-foreground">
              [ Bar Chart Placeholder ]
            </div>
          </CardContent>
        </Card>

        {/* Chart 2: User Distribution */}
        <Card className="bg-card border-border/50 shadow-sm hover:border-border transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Plan Distribution
              <LayoutGrid className="h-4 w-4 opacity-50" />
            </CardTitle>
            <div className="text-2xl font-bold text-foreground tracking-tight">42% Pro</div>
            <p className="text-xs text-muted-foreground font-medium">Free vs Pro vs Enterprise</p>
          </CardHeader>
          <CardContent className="h-30 flex items-end justify-center pb-4 pt-4">
            <div className="w-full h-full bg-muted/20 rounded-md border border-border/50 border-dashed flex items-center justify-center text-xs text-muted-foreground">
              [ Pie Chart Placeholder ]
            </div>
          </CardContent>
        </Card>

        {/* Chart 3: Traffic Sources */}
        <Card className="bg-card border-border/50 shadow-sm hover:border-border transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Traffic Sources
              <Activity className="h-4 w-4 opacity-50" />
            </CardTitle>
            <div className="text-2xl font-bold text-foreground tracking-tight">68%</div>
            <p className="text-xs text-indigo-400 font-medium">Organic Search</p>
          </CardHeader>
          <CardContent className="h-30 flex items-end justify-center pb-4 pt-4">
            <div className="w-full h-full bg-muted/20 rounded-md border border-border/50 border-dashed flex items-center justify-center text-xs text-muted-foreground">
              [ Area Chart Placeholder ]
            </div>
          </CardContent>
        </Card>
      </div>

      {/* =========================================
          5. DETAILED ANALYTICS (Stripe-Style Table)
      ========================================= */}
      <Card className="bg-card border-border/50 shadow-sm overflow-hidden">
        {/* Table Header & Actions */}
        <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 bg-muted/10">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Detailed Analytics</h3>
            <p className="text-sm text-muted-foreground mt-1">Review user activity and revenue metrics.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search users or emails..."
                className="h-9 w-full sm:w-62.5 lg:w-75 rounded-md border border-input bg-background pl-9 pr-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
              />
            </div>
            <button className="inline-flex h-9 items-center justify-center rounded-md border border-border/50 bg-background px-3 text-sm font-medium shadow-sm hover:bg-muted text-foreground transition-colors">
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/30 text-muted-foreground border-b border-border/50">
              <tr>
                <th className="h-10 px-6 font-medium flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors">User <ArrowUpDown className="h-3 w-3" /></th>
                <th className="h-10 px-6 font-medium">Email</th>
                <th className="h-10 px-6 font-medium">Plan</th>
                <th className="h-10 px-6 font-medium text-right">Revenue</th>
                <th className="h-10 px-6 font-medium text-center">Status</th>
                <th className="h-10 px-6 font-medium text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              
              {/* Row 1 */}
              <tr className="hover:bg-muted/50 transition-colors group cursor-default">
                <td className="p-4 px-6 font-medium text-foreground flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-bold text-xs border border-indigo-500/20">JD</div>
                  John Doe
                </td>
                <td className="p-4 px-6 text-muted-foreground">john@example.com</td>
                <td className="p-4 px-6">
                  <span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-400">Pro</span>
                </td>
                <td className="p-4 px-6 text-right font-medium text-foreground tracking-tight">$49.00</td>
                <td className="p-4 px-6 text-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">Active</span>
                </td>
                <td className="p-4 px-6 text-right">
                  <button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-muted rounded-md text-muted-foreground transition-all">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-muted/50 transition-colors group cursor-default">
                <td className="p-4 px-6 font-medium text-foreground flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 font-bold text-xs border border-cyan-500/20">AS</div>
                  Alice Smith
                </td>
                <td className="p-4 px-6 text-muted-foreground">alice@startup.io</td>
                <td className="p-4 px-6">
                  <span className="inline-flex items-center rounded-full border border-border/50 bg-background px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">Free</span>
                </td>
                <td className="p-4 px-6 text-right font-medium text-foreground tracking-tight">$0.00</td>
                <td className="p-4 px-6 text-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">Active</span>
                </td>
                <td className="p-4 px-6 text-right">
                  <button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-muted rounded-md text-muted-foreground transition-all">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-muted/50 transition-colors group cursor-default">
                <td className="p-4 px-6 font-medium text-foreground flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold text-xs border border-amber-500/20">RJ</div>
                  Robert Jones
                </td>
                <td className="p-4 px-6 text-muted-foreground">robert@enterprise.com</td>
                <td className="p-4 px-6">
                  <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-400">Enterprise</span>
                </td>
                <td className="p-4 px-6 text-right font-medium text-foreground tracking-tight">$299.00</td>
                <td className="p-4 px-6 text-center">
                  <span className="inline-flex items-center rounded-full bg-slate-500/10 px-2 py-1 text-xs font-medium text-slate-400 ring-1 ring-inset ring-slate-500/20">Canceled</span>
                </td>
                <td className="p-4 px-6 text-right">
                  <button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-muted rounded-md text-muted-foreground transition-all">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Table Pagination Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-border/50 bg-muted/10">
          <p className="text-xs text-muted-foreground mb-4 sm:mb-0">Showing 1 to 3 of 2,493 entries</p>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-border/50 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50 transition-colors" disabled>Previous</button>
            <button className="px-3 py-1.5 border border-border/50 rounded-md text-sm font-medium bg-muted text-foreground transition-colors">1</button>
            <button className="px-3 py-1.5 border border-border/50 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">2</button>
            <button className="px-3 py-1.5 border border-border/50 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">Next</button>
          </div>
        </div>
      </Card>

    </div>
    </>
  )
}