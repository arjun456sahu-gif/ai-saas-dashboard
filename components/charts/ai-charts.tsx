"use client"

import React, { useState, useRef, useEffect } from "react"

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export function Aicharts() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Nexus Intelligence Online. Groq LPU Core v3.3 Active." }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMsg: Message = { role: "user", content: input }
    setMessages(prev => [...prev, userMsg])
    const prompt = input
    setInput("")
    setIsLoading(true)

    try {
      const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;
      if (!apiKey) throw new Error("API_KEY_MISSING");

      // 🛠️ FIXED: Using latest 2026 stable model "llama-3.3-70b-versatile"
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile", 
          messages: [
            { role: "system", content: "You are Nexus AI, a helpful SaaS dashboard assistant. Be professional and concise." },
            { role: "user", content: prompt }
          ],
          temperature: 0.6,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Groq Connection Failed");
      }

      const aiText = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: "ai", content: aiText }]);

    } catch (error: any) {
      console.error("Critical AI Error:", error);
      setMessages(prev => [...prev, { 
        role: "ai", 
        content: `[SYSTEM_ERROR]: Neural link failed. Status: ${error.message}` 
      }]);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-[600px] bg-[#020617] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl font-sans">
      <div className="p-4 bg-slate-900/40 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_#f97316]"></div>
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Nexus_Groq_LPU_Active</span>
        </div>
        <div className="text-[9px] text-orange-400 font-mono tracking-tighter uppercase">Ultra_Low_Latency</div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-slate-950/20">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed border ${
              msg.role === 'user' 
              ? 'bg-blue-600 text-white border-blue-500 rounded-tr-none shadow-lg' 
              : 'bg-slate-900 text-slate-300 border-slate-800 rounded-tl-none shadow-sm'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-[10px] text-orange-400 font-mono animate-pulse ml-2">
            [SYS]: PROCESSING_THROUGH_LPU...
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      <div className="p-5 bg-slate-950/50 border-t border-slate-800">
        <div className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a neural command..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-700"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-2xl text-[11px] font-bold transition-all active:scale-95 disabled:opacity-40"
          >
            EXECUTE
          </button>
        </div>
      </div>
    </div>
  )
}