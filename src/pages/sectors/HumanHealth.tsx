import { motion } from "framer-motion";
import { HeartPulse, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const keyFindings = [
  { metric: "18M", label: "People in healthcare access gaps", trend: "Rural East Africa" },
  { metric: "73%", label: "Counties with surveillance gaps", trend: "Disease early warning" },
  { metric: "4.2x", label: "Environmental health risk multiplier", trend: "Vs urban baseline" },
  { metric: "29%", label: "Nutrition systems under stress", trend: "↑ 6% since 2024" },
];

const reports = [
  { title: "Healthcare Access Gap Analysis: Rural East Africa", date: "March 2026", type: "Diagnostic Report" },
  { title: "Disease Surveillance Network Assessment", date: "February 2026", type: "Intelligence Report" },
  { title: "Environmental Health Risk Mapping: Industrial Corridors", date: "January 2026", type: "Scenario Analysis" },
  { title: "Nutrition System Vulnerability Index", date: "December 2025", type: "Strategic Brief" },
];

const risks = [
  { title: "Disease Surveillance Blind Spots", severity: "critical", description: "73% of rural counties lack adequate early warning infrastructure for emerging disease threats." },
  { title: "Healthcare Worker Exodus", severity: "high", description: "Brain drain accelerating in secondary cities, creating care deserts in growing population centers." },
  { title: "Environmental Exposure Clusters", severity: "high", description: "Industrial corridor communities facing elevated health risks from unmonitored pollution." },
  { title: "Nutrition Supply Chain Fragility", severity: "moderate", description: "Climate-linked disruptions threatening staple food availability in vulnerable regions." },
];

export default function HumanHealth() {
  return (
    <>
      <section className="atlas-section atlas-grid-bg relative pb-10">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-atlas-coral/20 flex items-center justify-center">
                <HeartPulse className="h-6 w-6 text-atlas-coral" />
              </div>
              <span className="atlas-chip">Sector Intelligence</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Human <span className="atlas-gradient-text">Health</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Disease surveillance, healthcare access gaps, environmental health risks, and nutrition systems — the human cost of systemic blind spots.
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
                <p className="font-display text-3xl font-bold text-atlas-coral mb-1">{f.metric}</p>
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
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Need health systems intelligence?</h2>
          <p className="text-muted-foreground mb-8">Commission a healthcare access diagnostic or disease surveillance assessment.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact"><Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">Request Diagnostic <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/insights"><Button variant="outline" className="border-border text-foreground">Browse Reports</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
