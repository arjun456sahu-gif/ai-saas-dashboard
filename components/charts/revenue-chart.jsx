"use client"

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

// Register ChartJS modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export default function RevenueChart() {
  // Chart Data - Glow Effect ke saath
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        fill: true,
        label: 'Revenue (HFT)',
        data: [30, 45, 38, 65, 58, 85, 92],
        borderColor: '#3b82f6', // Nexus Blue
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
          return gradient;
        },
        borderWidth: 3,
        pointRadius: 0, // Mobile par clean look ke liye point hide kiye hain
        pointHoverRadius: 6,
        tension: 0.4, // Curvy lines for modern feel
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Mobile par height adjust karne ke liye
    plugins: {
      legend: { display: false }, // SaaS dashboards mein legend hide rakhte hain
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#0f172a',
        titleColor: '#94a3b8',
        bodyColor: '#fff',
        borderColor: '#1e293b',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#64748b', font: { size: 10 } },
      },
      y: {
        grid: { color: '#1e293b' },
        ticks: { color: '#64748b', font: { size: 10 } },
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="w-full bg-[#020617]/50 backdrop-blur-md border border-slate-800 rounded-3xl p-5 md:p-8 shadow-2xl transition-all">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-white font-bold text-lg italic tracking-tight uppercase">
            Flux <span className="text-blue-500">Revenue</span>
          </h3>
          <p className="text-[10px] text-slate-500 font-mono tracking-widest">[NODE]: B_TECH_CSE_CORE</p>
        </div>
        <div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold border border-blue-500/20">
          +24.8%
        </div>
      </div>

      {/* Chart Wrapper - Mobile par height set hai */}
      <div className="h-[250px] md:h-[350px] w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}