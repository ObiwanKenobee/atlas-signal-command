import { motion } from "framer-motion";
import { Mountain, FileText, ArrowRight, MapPin, AlertTriangle, TrendingUp, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const keyFindings = [
  { metric: "42%", label: "Arable land under stress", trend: "↑ 8% YoY" },
  { metric: "2.3M", label: "Hectares affected by tenure conflict", trend: "↑ 12% since 2024" },
  { metric: "67", label: "Active degradation hotspots", trend: "Across 14 counties" },
  { metric: "31%", label: "Productivity decline in monitored zones", trend: "5-year average" },
];

const reports = [
  { title: "Soil Degradation Risk Index: East Africa", date: "March 2026", type: "Diagnostic Report" },
  { title: "Land Tenure Conflict Mapping: Great Rift Valley", date: "February 2026", type: "Scenario Analysis" },
  { title: "Agricultural Productivity Decline: Root Cause Analysis", date: "January 2026", type: "Strategic Brief" },
  { title: "Resource Extraction Impact Assessment: Turkana Basin", date: "December 2025", type: "Intelligence Report" },
];

const risks = [
  { title: "Accelerating Topsoil Loss", severity: "critical", description: "Unsustainable farming practices causing irreversible topsoil erosion across highland regions." },
  { title: "Tenure System Fragmentation", severity: "high", description: "Overlapping land rights creating investment uncertainty and conflict escalation." },
  { title: "Desertification Encroachment", severity: "high", description: "Northern frontier districts losing productive land at 3.2km²/year." },
  { title: "Agricultural Input Dependency", severity: "moderate", description: "Over-reliance on imported fertilizers creating supply chain vulnerability." },
];

export default function LandSystems() {
  return (
    <>
      <section className="atlas-section atlas-grid-bg relative pb-10">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-atlas-emerald/20 flex items-center justify-center">
                <Mountain className="h-6 w-6 text-atlas-emerald" />
              </div>
              <span className="atlas-chip">Sector Intelligence</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Land <span className="atlas-gradient-text">Systems</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soil degradation, land tenure conflicts, agricultural productivity, and resource extraction patterns — the invisible forces reshaping territorial economies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-6 py-16 bg-background">
        <div className="atlas-container">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Key Findings</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {keyFindings.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="atlas-card p-6">
                <p className="font-display text-3xl font-bold text-primary mb-1">{f.metric}</p>
                <p className="text-sm text-foreground mb-1">{f.label}</p>
                <p className="text-xs text-muted-foreground">{f.trend}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Signals */}
      <section className="px-6 py-16 bg-card/50">
        <div className="atlas-container">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Active Risk Signals</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {risks.map((risk, i) => (
              <motion.div key={risk.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="atlas-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className={`h-4 w-4 ${risk.severity === "critical" ? "text-destructive" : risk.severity === "high" ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`atlas-chip text-xs ${risk.severity === "critical" ? "bg-destructive/15 text-destructive border-destructive/30" : risk.severity === "high" ? "bg-primary/15 text-primary border-primary/30" : ""}`}>
                    {risk.severity}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{risk.title}</h3>
                <p className="text-sm text-muted-foreground">{risk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="px-6 py-16 bg-background">
        <div className="atlas-container">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Sector Reports</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {reports.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="atlas-card p-6 hover:border-primary/30 transition-all group cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <span className="atlas-chip text-xs">{r.type}</span>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">{r.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-card/50">
        <div className="atlas-container text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Need deeper land systems intelligence?</h2>
          <p className="text-muted-foreground mb-8">Request a custom diagnostic or scenario analysis for your region of interest.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact"><Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">Request Diagnostic <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/insights"><Button variant="outline" className="border-border text-foreground">Browse Reports</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
