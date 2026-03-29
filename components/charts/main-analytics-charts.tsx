"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { date: "Mon", current: 4000, previous: 2400 },
  { date: "Tue", current: 3000, previous: 1398 },
  { date: "Wed", current: 5000, previous: 3800 },
  { date: "Thu", current: 2780, previous: 3908 },
  { date: "Fri", current: 6890, previous: 4800 },
  { date: "Sat", current: 8390, previous: 3800 },
  { date: "Sun", current: 9490, previous: 4300 },
]

export function MainAnalyticsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        {/* Gradients for the premium feel */}
        <defs>
          <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#64748b" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#64748b" stopOpacity={0}/>
          </linearGradient>
        </defs>
        
        {/* Ultra minimal grid */}
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
        
        <XAxis 
          dataKey="date" 
          stroke="hsl(var(--muted-foreground))" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
          dy={10}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
          tickFormatter={(value) => `$${value}`}
        />
        
        {/* Custom Tooltip matching your dark theme */}
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'hsl(var(--background))', 
            borderColor: 'hsl(var(--border))', 
            borderRadius: '8px',
            color: 'hsl(var(--foreground))',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
          }}
          itemStyle={{ color: 'hsl(var(--foreground))', fontWeight: 500 }}
        />
        
        {/* Previous Period Line (Dotted & Gray) */}
        <Area 
          type="monotone" 
          dataKey="previous" 
          stroke="#64748b" 
          strokeDasharray="4 4" 
          strokeWidth={2}
          fillOpacity={1} 
          fill="url(#colorPrevious)" 
        />
        
        {/* Current Period Line (Solid & Primary Blue/Indigo) */}
        <Area 
          type="monotone" 
          dataKey="current" 
          stroke="#6366f1" 
          strokeWidth={2} 
          fillOpacity={1} 
          fill="url(#colorCurrent)" 
          activeDot={{ r: 6, fill: "#6366f1", stroke: "hsl(var(--background))", strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}