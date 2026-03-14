import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mountain, Waves, HeartPulse, Building2, TrendingUp, Landmark, ArrowRight } from "lucide-react";

const sectors = [
  {
    icon: Mountain,
    title: "Land Systems",
    slug: "land",
    problems: ["Soil degradation", "Land tenure conflicts", "Deforestation", "Resource extraction"],
    description: "Land is the foundation of economic and social stability. When land systems fail, everything built on them collapses — food systems, livelihoods, governance.",
    color: "text-atlas-emerald",
    borderColor: "hover:border-emerald-500/30",
  },
  {
    icon: Waves,
    title: "Ocean & Water Systems",
    slug: "oceans",
    problems: ["Coastal erosion", "Fishery collapse", "Aquifer depletion", "Marine pollution"],
    description: "70% of the planet's surface, 90% of global trade. Water systems are the circulatory system of civilisation. When they're stressed, everything downstream suffers.",
    color: "text-atlas-teal",
    borderColor: "hover:border-teal-500/30",
  },
  {
    icon: HeartPulse,
    title: "Human Health",
    slug: "health",
    problems: ["Disease surveillance", "Healthcare access", "Environmental health", "Nutrition systems"],
    description: "Health is not just hospitals. It's the intersection of environment, infrastructure, food systems, and governance. We track the hidden determinants.",
    color: "text-atlas-coral",
    borderColor: "hover:border-orange-500/30",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    slug: "infrastructure",
    problems: ["Transport decay", "Energy insecurity", "Urban sprawl", "Digital gaps"],
    description: "Infrastructure is the skeleton of progress. When it degrades invisibly, entire regions lose decades of development potential without realising it.",
    color: "text-muted-foreground",
    borderColor: "hover:border-gray-500/30",
  },
  {
    icon: TrendingUp,
    title: "Economic Flows",
    slug: "economy",
    problems: ["Supply chain fragility", "Capital flight", "Informal economies", "Market distortions"],
    description: "Money moves through systems in patterns that reveal structural vulnerabilities. We map the flows that textbooks don't show.",
    color: "text-primary",
    borderColor: "hover:border-primary/30",
  },
  {
    icon: Landmark,
    title: "Governance & Coordination",
    slug: "governance",
    problems: ["Institutional weakness", "Policy gaps", "Coordination failure", "Civic trust erosion"],
    description: "Governance isn't just politics. It's the coordination layer between intention and outcome. When it breaks, good policies produce bad results.",
    color: "text-secondary-foreground",
    borderColor: "hover:border-secondary/30",
  },
];

export default function Sectors() {
  return (
    <>
      <section className="atlas-section atlas-grid-bg relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="atlas-chip mb-4 inline-flex">Sectors</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Where we <span className="atlas-gradient-text">investigate</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Six interconnected domains. Each one contains hidden failures that compound across the others. 
              We work at the seams where problems propagate.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="atlas-section bg-background">
        <div className="atlas-container">
          <div className="space-y-4">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className={`atlas-card p-6 md:p-8 group ${sector.borderColor} transition-all duration-300`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                        <sector.icon className={`h-6 w-6 ${sector.color}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {sector.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                        {sector.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {sector.problems.map((p) => (
                          <span key={p} className="atlas-chip text-xs">{p}</span>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        Explore sector <ArrowRight className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
