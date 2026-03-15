import { useState } from "react";
import { motion } from "framer-motion";
import { Radio, MapPin, Clock, TrendingUp, Droplets, Heart, Building, Wheat, AlertTriangle, Filter } from "lucide-react";

const categories = ["All", "Water", "Health", "Infrastructure", "Food", "Governance"];
const categoryIcons: Record<string, typeof Droplets> = {
  Water: Droplets,
  Health: Heart,
  Infrastructure: Building,
  Food: Wheat,
  Governance: AlertTriangle,
};

const signals = [
  { id: 1, title: "Water contamination reports surge in Mombasa coastal area", category: "Water", region: "Mombasa County", time: "2 hours ago", severity: "critical", verified: true, reports: 47 },
  { id: 2, title: "Healthcare facility shortages reported across Turkana", category: "Health", region: "Turkana County", time: "5 hours ago", severity: "high", verified: true, reports: 23 },
  { id: 3, title: "Road deterioration blocking agricultural transport in Bungoma", category: "Infrastructure", region: "Bungoma County", time: "8 hours ago", severity: "medium", verified: false, reports: 15 },
  { id: 4, title: "Maize price spike detected in Rift Valley markets", category: "Food", region: "Rift Valley", time: "1 day ago", severity: "high", verified: true, reports: 89 },
  { id: 5, title: "Groundwater levels dropping in Nakuru boreholes", category: "Water", region: "Nakuru County", time: "1 day ago", severity: "high", verified: true, reports: 34 },
  { id: 6, title: "School infrastructure collapse risk in Kisumu", category: "Infrastructure", region: "Kisumu County", time: "2 days ago", severity: "medium", verified: false, reports: 12 },
  { id: 7, title: "Maternal health access gap widening in rural Garissa", category: "Health", region: "Garissa County", time: "2 days ago", severity: "high", verified: true, reports: 56 },
  { id: 8, title: "Fishing yield decline reported along Lake Victoria", category: "Food", region: "Lake Victoria Region", time: "3 days ago", severity: "medium", verified: true, reports: 28 },
];

const severityColors: Record<string, string> = {
  critical: "text-red-400 bg-red-500/10 border-red-500/20",
  high: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  medium: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  low: "text-muted-foreground bg-muted border-border",
};

const trendStats = [
  { label: "Active Signals", value: "127", trend: "+34 this week" },
  { label: "Verified Reports", value: "89", trend: "70% rate" },
  { label: "Counties Covered", value: "23", trend: "of 47" },
  { label: "Response Actions", value: "15", trend: "triggered" },
];

export default function CommunitySignals() {
  const [category, setCategory] = useState("All");

  const filtered = signals.filter(s => category === "All" || s.category === category);

  return (
    <>
      <section className="atlas-section atlas-grid-bg relative pb-10">
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="atlas-chip mb-4 inline-flex"><Radio className="h-3 w-3 mr-1" /> Community Intelligence</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Live <span className="atlas-gradient-text">Signals</span> Dashboard
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real-time community observations, verified reports, and emerging patterns across Kenya and East Africa.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-12 bg-background">
        <div className="atlas-container">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {trendStats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="atlas-card p-5">
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                <p className="text-xs text-primary mt-1">{stat.trend}</p>
              </motion.div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(c => (
              <button key={c} onClick={() => setCategory(c)} className={`atlas-chip cursor-pointer transition-colors ${category === c ? "bg-primary/15 text-primary border-primary/30" : ""}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Signal Cards */}
          <div className="space-y-4">
            {filtered.map((signal, i) => {
              const Icon = categoryIcons[signal.category] || Radio;
              return (
                <motion.div key={signal.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="atlas-card p-5 hover:border-primary/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`atlas-chip text-xs ${severityColors[signal.severity]}`}>{signal.severity}</span>
                        <span className="atlas-chip text-xs"><Icon className="h-3 w-3 mr-1" />{signal.category}</span>
                        {signal.verified && <span className="atlas-chip text-xs atlas-status-active">Verified</span>}
                      </div>
                      <h3 className="font-display text-base font-semibold text-foreground mb-2">{signal.title}</h3>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {signal.region}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {signal.time}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-xl font-bold text-foreground">{signal.reports}</p>
                      <p className="text-xs text-muted-foreground">reports</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
