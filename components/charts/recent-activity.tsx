import { CheckCircle2, AlertCircle, CreditCard, Sparkles } from "lucide-react"

const activities = [
  {
    id: 1,
    icon: Sparkles,
    text: "AI Image Generated",
    time: "2 min ago",
    color: "text-indigo-500",
  },
  {
    id: 2,
    icon: CreditCard,
    text: "Pro Plan Subscription ($49)",
    time: "10 min ago",
    color: "text-emerald-500",
  },
  {
    id: 3,
    icon: AlertCircle,
    text: "API limit approaching 80%",
    time: "1 hour ago",
    color: "text-amber-500",
  },
  {
    id: 4,
    icon: CheckCircle2,
    text: "Workspace 'Nexus' created",
    time: "3 hours ago",
    color: "text-muted-foreground",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-6">
      {activities.map((item) => (
        <div key={item.id} className="flex items-start group">
          <div className="mt-0.5">
            <item.icon className={`h-4 w-4 ${item.color} mr-4 transition-transform group-hover:scale-110`} />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none text-foreground">{item.text}</p>
            <p className="text-xs text-muted-foreground">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}