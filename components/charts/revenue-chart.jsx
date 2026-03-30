"use client"

import { useEffect, useRef } from "react"
// Explicitly import CandlestickSeries for v5 stability
import { createChart, ColorType, CandlestickSeries } from "lightweight-charts"

export default function RevenueChart() {
  const chartContainerRef = useRef(null)

  useEffect(() => {
    if (!chartContainerRef.current) return

    // 1. Initialize Chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#94a3b8",
      },
      width: chartContainerRef.current.clientWidth,
      height: 350,
      grid: {
        vertLines: { color: "#1e293b" },
        horzLines: { color: "#1e293b" },
      },
      timeScale: {
        borderColor: "#334155",
      },
    })

    // 2. FIXED: Use addSeries instead of addCandlestickSeries
    // This is the most stable way in newer versions
    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#10b981", 
      downColor: "#ef4444",
      borderVisible: false,
      wickUpColor: "#10b981",
      wickDownColor: "#ef4444",
    })

    // 3. Mock Data (Ensuring Ascending Order)
    const data = [
      { time: "2026-03-24", open: 4000, high: 5000, low: 3500, close: 4800 },
      { time: "2026-03-25", open: 4800, high: 5500, low: 4600, close: 5300 },
      { time: "2026-03-26", open: 5300, high: 5400, low: 4000, close: 4200 },
      { time: "2026-03-27", open: 4200, high: 5800, low: 4100, close: 5600 },
      { time: "2026-03-28", open: 5600, high: 6000, low: 5500, close: 5900 },
      { time: "2026-03-29", open: 5900, high: 6500, low: 5800, close: 6400 },
      { time: "2026-03-30", open: 6400, high: 7000, low: 6300, close: 6800 },
    ].sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

    candlestickSeries.setData(data)

    // 4. Handle Responsive Resize
    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth })
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      chart.remove()
    }
  }, [])

  return (
    <div className="w-full bg-[#0B0F19] rounded-xl border border-slate-800 p-4">
      <div ref={chartContainerRef} className="w-full" />
    </div>
  )
}