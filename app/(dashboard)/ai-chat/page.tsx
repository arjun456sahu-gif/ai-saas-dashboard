// ✅ Use curly braces for Named Import
import { Aicharts } from "@/components/charts/ai-charts"

export default function AIChatPage() {
  return (
    <div className="min-h-screen bg-[#020617] p-6 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight italic uppercase">Nexus Intelligence</h1>
          <p className="text-slate-400 text-sm mt-2 font-mono">[MODE]: NEURAL_INTERFACE_READY</p>
        </div>
        
        {/* Render Component */}
        <Aicharts />
      </div>
    </div>
  )
}