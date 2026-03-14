import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Clock, MapPin } from "lucide-react";

const cases = [
  {
    title: "Restoring Agricultural Productivity in the Rift Valley",
    challenge: "Declining crop yields across 200km of fertile land due to undetected soil contamination and water mismanagement.",
    outcome: "42% yield recovery within 18 months through targeted intervention.",
    sector: "Land Systems",
    region: "East Africa",
    duration: "18 months",
    metrics: [
      { label: "Yield recovery", value: "42%" },
      { label: "Hectares assessed", value: "15,000" },
      { label: "Stakeholders engaged", value: "340" },
    ],
  },
  {
    title: "Coastal Infrastructure Risk Mapping: Indian Ocean Corridor",
    challenge: "Three port cities facing accelerating erosion with no coordinated risk intelligence.",
    outcome: "Unified risk framework adopted by regional authority, averting $120M in projected losses.",
    sector: "Infrastructure",
    region: "Indian Ocean",
    duration: "12 months",
    metrics: [
      { label: "Projected losses averted", value: "$120M" },
      { label: "Ports assessed", value: "3" },
      { label: "Risk factors mapped", value: "87" },
    ],
  },
  {
    title: "Healthcare Access Intelligence: Rural Uganda",
    challenge: "Ministry of Health lacked visibility into actual healthcare access patterns across 14 districts.",
    outcome: "First comprehensive access map, informing $28M facility placement programme.",
    sector: "Human Health",
    region: "Uganda",
    duration: "8 months",
    metrics: [
      { label: "Districts mapped", value: "14" },
      { label: "Facilities assessed", value: "420" },
      { label: "Investment informed", value: "$28M" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <>
      <section className="atlas-section atlas-grid-bg relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="atlas-chip mb-4 inline-flex">Proof of Work</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Case <span className="atlas-gradient-text">studies</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real problems. Real intelligence. Measurable impact. Here's how Atlas Agency 
              converts complexity into clarity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="atlas-section bg-background">
        <div className="atlas-container space-y-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="atlas-card p-6 md:p-10"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="atlas-chip text-xs">{c.sector}</span>
                <span className="atlas-chip text-xs flex items-center gap-1"><MapPin className="h-3 w-3" /> {c.region}</span>
                <span className="atlas-chip text-xs flex items-center gap-1"><Clock className="h-3 w-3" /> {c.duration}</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {c.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">Challenge</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">Outcome</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.outcome}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{m.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
