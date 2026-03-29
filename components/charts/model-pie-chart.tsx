"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "GPT-4o", value: 4500 },
  { name: "Claude 3.5", value: 3200 },
  { name: "Gemini 1.5 Pro", value: 1800 },
  { name: "Llama 3 (Local)", value: 800 },
]

const COLORS = ["#6366f1", "#8b5cf6", "#06b6d4", "#64748b"]

export function ModelPieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          paddingAngle={5}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'hsl(var(--background))', 
            borderColor: 'hsl(var(--border))', 
            borderRadius: '8px'
          }}
          itemStyle={{ color: 'hsl(var(--foreground))' }}
        />
        <Legend 
          verticalAlign="bottom" 
          height={36} 
          iconType="circle"
          wrapperStyle={{ fontSize: '12px', color: 'hsl(var(--muted-foreground))' }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}