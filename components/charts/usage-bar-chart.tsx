"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { date: "Jan 01", usage: 2400 },
  { date: "Jan 05", usage: 1398 },
  { date: "Jan 10", usage: 9800 },
  { date: "Jan 15", usage: 3908 },
  { date: "Jan 20", usage: 4800 },
  { date: "Jan 25", usage: 3800 },
  { date: "Jan 31", usage: 4300 },
]

export function UsageBarChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip 
          cursor={{ fill: 'hsl(var(--muted) / 0.5)' }}
          contentStyle={{ 
            backgroundColor: 'hsl(var(--background))', 
            borderColor: 'hsl(var(--border))', 
            borderRadius: '8px',
            color: 'hsl(var(--foreground))'
          }}
          itemStyle={{ color: 'hsl(var(--foreground))' }}
        />
        <Bar 
          dataKey="usage" 
          fill="#6366f1" 
          radius={[4, 4, 0, 0]} 
          maxBarSize={50}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}