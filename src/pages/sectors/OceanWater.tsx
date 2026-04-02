import { motion } from "framer-motion";
import { Waves, FileText, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const keyFindings = [
  { metric: "1,200km", label: "Coastline under erosion threat", trend: "↑ 15% since 2022" },
  { metric: "58%", label: "Fisheries showing decline", trend: "East African seaboard" },
  { metric: "34", label: "Aquifer systems under stress", trend: "Across 9 countries" },
  { metric: "4.7M", label: "People facing water insecurity", trend: "Projected by 2028" },
];

const reports = [
  { title: "Coastal Erosion Risk Assessment: East African Seaboard", date: "March 2026", type: "Diagnostic Report" },
  { title: "Groundwater Depletion Patterns in the Sahel", date: "January 2026", type: "Intelligence Report" },
  { title: "Marine Pollution Corridor Mapping: Indian Ocean", date: "November 2025", type: "Scenario Analysis" },
  { title: "Fishery Collapse Probability Model: Lake Victoria", date: "October 2025", type: "Strategic Brief" },
];

const risks = [
  { title: "Coral Reef System Collapse", severity: "critical", description: "Warming waters and acidification threatening 40% of East African reef systems." },
  { title: "Transboundary Water Conflicts", severity: "high", description: "Competing claims on shared river basins increasing diplomatic tension." },
  { title: "Coastal Infrastructure Exposure", severity: "high", description: "Port cities and coastal communities facing accelerating erosion and flooding." },
  { title: "Microplastic Contamination", severity: "moderate", description: "Rising marine pollution levels affecting food chain and coastal communities." },
];

export default function OceanWater() {
  return (
    <>
      <section className="atlas-section atlas-grid-bg relative pb-10">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-atlas-teal/20 flex items-center justify-center">
                <Waves className="h-6 w-6 text-atlas-teal" />
              </div>
              <span className="atlas-chip">Sector Intelligence</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ocean & <span className="atlas-gradient-text">Water</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Coastal erosion, fishery collapse, water stress, marine pollution, and aquifer depletion — the hydrological systems underpinning regional stability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 bg-background">
        <div className="atlas-container">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Key Findings</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {keyFindings.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="atlas-card p-6">
                <p className="font-display text-3xl font-bold text-atlas-teal mb-1">{f.metric}</p>
                <p className="text-sm text-foreground mb-1">{f.label}</p>
                <p className="text-xs text-muted-foreground">{f.trend}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-card/50">
        <div className="atlas-container">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Active Risk Signals</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {risks.map((risk, i) => (
              <motion.div key={risk.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="atlas-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className={`h-4 w-4 ${risk.severity === "critical" ? "text-destructive" : risk.severity === "high" ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`atlas-chip text-xs ${risk.severity === "critical" ? "bg-destructive/15 text-destructive border-destructive/30" : risk.severity === "high" ? "bg-primary/15 text-primary border-primary/30" : ""}`}>{risk.severity}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{risk.title}</h3>
                <p className="text-sm text-muted-foreground">{risk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="px-6 py-20 bg-card/50">
        <div className="atlas-container text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Need ocean & water intelligence?</h2>
          <p className="text-muted-foreground mb-8">Commission a hydrological risk assessment or marine systems diagnostic.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact"><Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">Request Diagnostic <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/insights"><Button variant="outline" className="border-border text-foreground">Browse Reports</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
