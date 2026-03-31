"use client"

import React, { useState, useRef, useEffect } from "react"

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export function Aicharts() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Nexus Intelligence Online. Groq LPU v3.3 Active." }
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
      if (!response.ok) throw new Error(data.error?.message || "Link Failed");

      const aiText = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: "ai", content: aiText }]);

    } catch (error: any) {
      setMessages(prev => [...prev, { role: "ai", content: `[ERROR]: ${error.message}` }]);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-[500px] md:h-[600px] w-full bg-[#020617]/80 backdrop-blur-xl border border-slate-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-300">
      
      {/* Header - Optimized for Mobile/Desktop */}
      <div className="p-3 md:p-5 bg-slate-900/40 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_#f97316]"></div>
          <span className="text-[10px] md:text-xs font-mono tracking-widest text-slate-400 uppercase">AI_Core</span>
        </div>
        <div className="hidden sm:block text-[9px] text-orange-400 font-mono tracking-tighter uppercase opacity-70">
          Neural_Link_Stable
        </div>
      </div>

      {/* Messages Area - Responsive Padding */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scrollbar-hide bg-[url('/grid.svg')] bg-center">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] md:max-w-[80%] p-3 md:p-4 rounded-xl md:rounded-2xl text-[12px] md:text-[13px] leading-relaxed border ${
              msg.role === 'user' 
              ? 'bg-blue-600 text-white border-blue-500 rounded-tr-none shadow-lg shadow-blue-500/20' 
              : 'bg-slate-900/90 backdrop-blur-sm text-slate-300 border-slate-800 rounded-tl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-1.5 p-2 ml-1 items-center">
            <span className="text-[10px] text-orange-400 font-mono animate-pulse uppercase tracking-widest">Processing</span>
            <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce"></div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input Section - Desktop/Mobile Spacing */}
      <div className="p-3 md:p-5 bg-slate-950/80 border-t border-slate-800">
        <div className="flex flex-row gap-2 md:gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Execute neural command..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl md:rounded-2xl px-3 md:px-5 py-2 md:py-3 text-[13px] md:text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-700"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-orange-600 hover:bg-orange-500 text-white px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-bold tracking-widest transition-all active:scale-95 disabled:opacity-40 shadow-lg shadow-orange-900/20"
          >
            {isLoading ? "..." : "RUN"}
          </button>
        </div>
      </div>
    </div>
  )
}