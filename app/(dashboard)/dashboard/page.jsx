import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { RevenueChart } from "../../../components/charts/revenue-chart"
import { RecentActivity } from "../../../components/charts/recent-activity"
import { DollarSign, Users, Activity, ArrowUpRight, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-8 p-6 md:p-8 pt-6 overflow-x-hidden">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Welcome back. Here's what's happening today.
          </p>
        </div>
        <div className="flex items-center">
          {/* Pro-Tip: The pulsing realistic update badge */}
          <span className="text-xs text-muted-foreground flex items-center bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Last updated: 2 mins ago
          </span>
        </div>
      </div>

      {/* KPI Cards Grid (Fixed responsiveness) */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Revenue Card */}
        <Card className="bg-card border-border/50 shadow-sm transition-all hover:border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$12,450</div>
            <p className="text-xs text-emerald-500 mt-1 flex items-center font-medium">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        {/* Users Card */}
        <Card className="bg-card border-border/50 shadow-sm transition-all hover:border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">+2,340</div>
            <p className="text-xs text-emerald-500 mt-1 flex items-center font-medium">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +5.2% from last week
            </p>
          </CardContent>
        </Card>

        {/* Growth Card */}
        <Card className="bg-card border-border/50 shadow-sm transition-all hover:border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">+18.2%</div>
            <p className="text-xs text-muted-foreground mt-1 font-medium">
              vs previous 30 days
            </p>
          </CardContent>
        </Card>

        {/* API / AI Usage Card */}
        <Card className="bg-card border-border/50 shadow-sm transition-all hover:border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">AI Generations</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8,234</div>
            <p className="text-xs text-emerald-500 mt-1 flex items-center font-medium">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 70/30 Split: Charts & Activity (Fixed Grid Math) */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        
        {/* Chart Section (70% on Desktop) */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-5 bg-card border-border/50 shadow-sm overflow-hidden">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/50 pb-4 mb-4 space-y-3 sm:space-y-0">
            <div>
              <CardTitle className="text-base font-semibold text-foreground">Revenue Overview</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                $24,560 total revenue this period.
              </p>
            </div>
            {/* Filter Pills */}
            <div className="flex space-x-1 bg-muted/50 p-1 rounded-lg border border-border/50 w-fit">
              <button className="px-3 py-1 text-xs font-medium rounded-md bg-background text-foreground shadow-sm">7D</button>
              <button className="px-3 py-1 text-xs font-medium rounded-md text-muted-foreground hover:text-foreground transition-colors">30D</button>
              <button className="px-3 py-1 text-xs font-medium rounded-md text-muted-foreground hover:text-foreground transition-colors">90D</button>
            </div>
          </CardHeader>
          <CardContent className="pl-0">
            <RevenueChart />
          </CardContent>
        </Card>

        {/* Recent Activity Section (30% on Desktop) */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2 bg-card border-border/50 shadow-sm overflow-hidden">
          <CardHeader className="border-b border-border/50 pb-4 mb-4">
            <CardTitle className="text-base font-semibold text-foreground">Recent Activity</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Latest system events.
            </p>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>

      </div>
    </div>
  )
}