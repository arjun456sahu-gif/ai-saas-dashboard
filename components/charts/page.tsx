import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UsageBarChart } from "@/components/charts/usage-bar-chart"
import { ModelPieChart } from "@/components/charts/model-pie-chart"
import { Calendar, Download, TrendingUp, Clock, AlertTriangle } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-8 p-6 md:p-8 pt-6">
      
      {/* Page Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Analytics</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Deep dive into your API usage and performance metrics.
          </p>
        </div>
        
        {/* PREMIUM FEATURES: Date Filter & Export Button */}
        <div className="flex items-center space-x-3">
          {/* Mock Date Picker Button */}
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-border/50 bg-background shadow-sm hover:bg-muted hover:text-foreground h-9 px-4 py-2">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            Jan 01 - Jan 31, 2026
          </button>
          
          {/* Export to CSV Button */}
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background shadow hover:bg-foreground/90 h-9 px-4 py-2">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Top Summary Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total API Requests</CardTitle>
            <TrendingUp className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1.42M</div>
            <p className="text-xs text-muted-foreground mt-1">
              +24% from previous period
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Latency</CardTitle>
            <Clock className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">245ms</div>
            <p className="text-xs text-muted-foreground mt-1">
              -12ms from previous period
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Error Rate</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">0.12%</div>
            <p className="text-xs text-muted-foreground mt-1">
              System is healthy
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts Grid */}
      <div className="grid gap-4 md:grid-cols-7">
        
        {/* Main Bar Chart (2/3 width) */}
        <Card className="col-span-4 lg:col-span-5 bg-card border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-foreground">Usage Over Time</CardTitle>
            <p className="text-sm text-muted-foreground">Daily token consumption across all workspaces.</p>
          </CardHeader>
          <CardContent>
            <UsageBarChart />
          </CardContent>
        </Card>

        {/* Donut Chart (1/3 width) */}
        <Card className="col-span-4 lg:col-span-2 bg-card border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-foreground">Model Allocation</CardTitle>
            <p className="text-sm text-muted-foreground">Requests per LLM engine.</p>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <ModelPieChart />
          </CardContent>
        </Card>

      </div>
    </div>
  )
}