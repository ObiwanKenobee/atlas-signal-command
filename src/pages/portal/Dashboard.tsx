import { motion } from "framer-motion";
import { BarChart3, FileText, FolderKanban, Lightbulb, AlertTriangle, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const stats = [
  { label: "Active Projects", value: "3", icon: FolderKanban, trend: "+1 this month" },
  { label: "Reports Available", value: "12", icon: FileText, trend: "2 new" },
  { label: "Open Recommendations", value: "7", icon: Lightbulb, trend: "3 high priority" },
  { label: "Risk Alerts", value: "2", icon: AlertTriangle, trend: "1 critical" },
];

const recentActivity = [
  { title: "Coastal Erosion Risk Assessment updated", time: "2 hours ago", type: "report" },
  { title: "New recommendation: Water infrastructure review", time: "5 hours ago", type: "recommendation" },
  { title: "Project milestone: Phase 2 complete", time: "1 day ago", type: "project" },
  { title: "Scenario model recalculated", time: "2 days ago", type: "simulation" },
];

export default function PortalDashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">
          Welcome back{user?.user_metadata?.display_name ? `, ${user.user_metadata.display_name}` : ""}
        </h1>
        <p className="text-sm text-muted-foreground">Here's your intelligence overview.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="atlas-card p-5">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">{stat.trend}</span>
            </div>
            <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="atlas-card p-6">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((item) => (
              <div key={item.title} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="text-sm text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" /> {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="atlas-card p-6">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {[
              { label: "View Latest Report", path: "/portal/reports", icon: FileText },
              { label: "Check Active Projects", path: "/portal/projects", icon: FolderKanban },
              { label: "Review Recommendations", path: "/portal/recommendations", icon: Lightbulb },
            ].map((action) => (
              <Link key={action.label} to={action.path} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group">
                <div className="flex items-center gap-3">
                  <action.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{action.label}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
