import { motion } from "framer-motion";
import { Users, FolderKanban, FileText, AlertTriangle, Radio, TrendingUp, Clock, BarChart3 } from "lucide-react";

const metrics = [
  { label: "Active Clients", value: "8", icon: Users, trend: "+2 this quarter", color: "text-primary" },
  { label: "Live Projects", value: "14", icon: FolderKanban, trend: "3 at risk", color: "text-primary" },
  { label: "Reports Pending", value: "5", icon: FileText, trend: "2 overdue", color: "text-amber-400" },
  { label: "Community Signals", value: "127", icon: Radio, trend: "+34 this week", color: "text-atlas-teal" },
];

const pipeline = [
  { stage: "New Inquiry", count: 12, color: "bg-muted" },
  { stage: "Qualified", count: 7, color: "bg-primary/20" },
  { stage: "Discovery", count: 4, color: "bg-primary/40" },
  { stage: "Proposal Sent", count: 3, color: "bg-primary/60" },
  { stage: "Negotiation", count: 2, color: "bg-primary/80" },
  { stage: "Won", count: 5, color: "bg-emerald-500/40" },
];

const alerts = [
  { title: "Nakuru project behind schedule — Phase 2 milestone overdue by 3 days", severity: "high" },
  { title: "Community signal spike in Mombasa — water contamination reports up 400%", severity: "critical" },
  { title: "Client billing renewal due in 5 days — Command tier, KES 1.2M", severity: "medium" },
  { title: "Analyst capacity at 92% — consider onboarding additional support", severity: "medium" },
];

const recentActivity = [
  { text: "Sarah K. published Coastal Erosion Report v2.1", time: "25 min ago" },
  { text: "New lead: Ministry of Agriculture, Kenya", time: "1 hour ago" },
  { text: "Community signal verified: Rift Valley drought pattern", time: "2 hours ago" },
  { text: "Client feedback received on infrastructure brief", time: "4 hours ago" },
  { text: "Scenario model updated: Sahel groundwater depletion", time: "6 hours ago" },
];

export default function CommandCenter() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Command Center</h1>
        <p className="text-sm text-muted-foreground">Real-time operational overview for the Atlas team.</p>
      </motion.div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <motion.div key={m.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="atlas-card p-5">
            <div className="flex items-center justify-between mb-3">
              <m.icon className={`h-5 w-5 ${m.color}`} />
              <span className="text-xs text-muted-foreground">{m.trend}</span>
            </div>
            <p className="font-display text-2xl font-bold text-foreground">{m.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Pipeline */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="atlas-card p-6 lg:col-span-2">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">Leads Pipeline</h2>
          <div className="space-y-3">
            {pipeline.map(stage => (
              <div key={stage.stage} className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-28 shrink-0">{stage.stage}</span>
                <div className="flex-1 h-6 bg-secondary rounded-md overflow-hidden">
                  <div className={`h-full ${stage.color} rounded-md transition-all flex items-center px-2`} style={{ width: `${Math.max(10, (stage.count / 12) * 100)}%` }}>
                    <span className="text-[10px] font-medium text-foreground">{stage.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Alerts */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="atlas-card p-6">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">Alerts</h2>
          <div className="space-y-3">
            {alerts.map((alert, i) => (
              <div key={i} className="flex items-start gap-2 pb-3 border-b border-border last:border-0 last:pb-0">
                <AlertTriangle className={`h-4 w-4 mt-0.5 shrink-0 ${
                  alert.severity === "critical" ? "text-red-400" : alert.severity === "high" ? "text-amber-400" : "text-muted-foreground"
                }`} />
                <p className="text-xs text-muted-foreground leading-relaxed">{alert.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Activity Feed */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="atlas-card p-6">
        <h2 className="font-display text-lg font-semibold text-foreground mb-4">Team Activity</h2>
        <div className="space-y-3">
          {recentActivity.map((item, i) => (
            <div key={i} className="flex items-center gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
              <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
              <p className="text-sm text-foreground flex-1">{item.text}</p>
              <span className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-1">
                <Clock className="h-3 w-3" /> {item.time}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
