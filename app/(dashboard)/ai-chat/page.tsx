"use client"

import React, { useState, useRef, useEffect } from "react"
import { 
  Bot, User, Send, Paperclip, Copy, RotateCw, 
  ThumbsUp, Trash2, Zap, Code, FileText, ChevronDown, Check
} from "lucide-react"

// ==========================================
// MOCK DATA: Pre-filled Premium Conversation
// ==========================================
const initialMessages = [
  {
    id: 1,
    role: "user",
    content: "Can you write a secure Next.js App Router API route for handling Stripe webhooks?",
  },
  {
    id: 2,
    role: "assistant",
    content: "Absolutely. When handling Stripe webhooks in the Next.js App Router, you need to ensure you're reading the raw body to verify the signature. Here is a production-ready implementation:",
    code: `import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('Stripe-Signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (error: any) {
    return NextResponse.json({ error: \`Webhook Error: \${error.message}\` }, { status: 400 });
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log('Payment successful for session:', session.id);
    // Update user database here...
  }

  return NextResponse.json({ received: true });
}`,
    language: "typescript"
  }
]

const suggestions = [
  { icon: Code, text: "Write a React hook", subtext: "for local storage" },
  { icon: FileText, text: "Summarize this PDF", subtext: "extract key points" },
  { icon: Zap, text: "Generate SQL query", subtext: "to find active users" },
]

export default function AIChatPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [copiedId, setCopiedId] = useState<number | null>(null)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  // Handle Sending Messages
  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!input.trim()) return

    const userMsg = { id: Date.now(), role: "user", content: input }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    // Simulate AI Response Delay
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: "assistant",
        content: "I've analyzed your request. Here is a detailed breakdown of how we can approach building that feature securely and efficiently.",
      }])
    }, 2000)
  }

  // Handle Copy Code
  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] bg-background">
      
      {/* =========================================
          1. TOP BAR (Context & Actions)
      ========================================= */}
      <div className="flex-none h-16 border-b border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <Bot className="h-5 w-5 text-indigo-500" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
              Nexus AI Assistant
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
                Online
              </span>
            </h2>
            <p className="text-xs text-muted-foreground">GPT-4 Turbo Architecture</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Model Selector (Premium Feel) */}
          <button className="hidden sm:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-border/50 bg-background hover:bg-muted text-foreground h-9 px-3 transition-colors shadow-sm">
            Model: GPT-4o
            <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
          </button>
          {/* Clear Chat Action */}
          <button 
            onClick={() => setMessages([])}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-rose-500/10 hover:text-rose-500 text-muted-foreground h-9 px-3 transition-colors"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear
          </button>
        </div>
      </div>

      {/* =========================================
          2. CHAT AREA (Core Experience)
      ========================================= */}
      <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* EMPTY STATE: Prompt Suggestions */}
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-in fade-in zoom-in duration-500">
              <div className="h-16 w-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 shadow-inner">
                <Bot className="h-8 w-8 text-indigo-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight mb-2">How can I help you today?</h3>
              <p className="text-muted-foreground max-w-md mb-8">
                I can write code, analyze data, generate content, and automate your daily tasks.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
                {suggestions.map((item, i) => (
                  <button 
                    key={i}
                    onClick={() => setInput(item.text)}
                    className="flex flex-col items-start p-4 rounded-xl border border-border/50 bg-card hover:bg-muted/50 hover:border-indigo-500/30 transition-all text-left shadow-sm group"
                  >
                    <item.icon className="h-5 w-5 text-indigo-400 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                    <span className="text-xs text-muted-foreground mt-1">{item.subtext}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* MESSAGES LIST */}
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              {/* Avatar */}
              <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center border ${
                msg.role === "user" 
                  ? "bg-indigo-500/20 border-indigo-500/30 text-indigo-400" 
                  : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
              }`}>
                {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>

              {/* Message Bubble */}
              <div className={`flex flex-col max-w-[80%] md:max-w-[70%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                <div className={`px-5 py-3.5 rounded-2xl shadow-sm text-sm leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-indigo-500 text-white rounded-tr-sm" 
                    : "bg-card border border-border/50 text-foreground rounded-tl-sm"
                }`}>
                  {msg.content}
                </div>

                {/* Optional Code Block Formatting */}
                {msg.code && (
                  <div className="mt-3 w-full rounded-xl overflow-hidden border border-border/50 bg-[#0d1117] shadow-md">
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                      <span className="text-xs font-mono text-muted-foreground">{msg.language}</span>
                      <button 
                        onClick={() => handleCopy(msg.id, msg.code!)}
                        className="text-xs flex items-center gap-1.5 text-muted-foreground hover:text-white transition-colors"
                      >
                        {copiedId === msg.id ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                        {copiedId === msg.id ? "Copied!" : "Copy code"}
                      </button>
                    </div>
                    <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
                      <code>{msg.code}</code>
                    </pre>
                  </div>
                )}

                {/* Response Actions (AI only) */}
                {msg.role === "assistant" && (
                  <div className="flex items-center gap-2 mt-2 ml-1">
                    <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors tooltip-trigger">
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                    <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                      <RotateCw className="h-3.5 w-3.5" />
                    </button>
                    <button className="p-1.5 text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/10 rounded-md transition-colors">
                      <ThumbsUp className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* TYPING INDICATOR (Must Have UI) */}
          {isTyping && (
            <div className="flex gap-4 flex-row animate-in fade-in duration-300">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="px-5 py-4 rounded-2xl rounded-tl-sm bg-card border border-border/50 flex items-center gap-1.5">
                <div className="h-2 w-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="h-2 w-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="h-2 w-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* =========================================
          3. INPUT AREA (Premium Interaction)
      ========================================= */}
      <div className="flex-none p-4 md:p-6 pt-0 bg-background">
        <div className="max-w-4xl mx-auto relative">
          <form 
            onSubmit={handleSend}
            className="relative flex items-end p-2 rounded-2xl border border-border/50 bg-card shadow-lg shadow-black/5 focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all"
          >
            {/* Attach File Button */}
            <button 
              type="button"
              className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors shrink-0"
            >
              <Paperclip className="h-5 w-5" />
            </button>

            {/* Input Field */}
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Message AI Assistant..."
              className="w-full max-h-32 bg-transparent text-foreground placeholder:text-muted-foreground px-2 py-3 focus:outline-none resize-none text-sm leading-relaxed"
              style={{ minHeight: '44px' }}
            />

            {/* Send Button */}
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-3 ml-2 shrink-0 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 disabled:hover:bg-indigo-500 transition-colors shadow-sm"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
          
          <div className="text-center mt-3">
            <p className="text-[11px] text-muted-foreground">
              AI can make mistakes. Consider verifying important information.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}