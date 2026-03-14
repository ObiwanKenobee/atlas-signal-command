import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mountain, Waves, HeartPulse, Building2, TrendingUp, Landmark } from "lucide-react";
import { ArrowRight } from "lucide-react";

const sectors = [
  { icon: Mountain, title: "Land Systems", description: "Soil degradation, land tenure conflicts, agricultural productivity, resource extraction patterns.", path: "/sectors/land", color: "text-atlas-emerald" },
  { icon: Waves, title: "Ocean & Water", description: "Coastal erosion, fishery collapse, water stress, marine pollution, aquifer depletion.", path: "/sectors/oceans", color: "text-atlas-teal" },
  { icon: HeartPulse, title: "Human Health", description: "Disease surveillance, healthcare access gaps, environmental health risks, nutrition systems.", path: "/sectors/health", color: "text-atlas-coral" },
  { icon: Building2, title: "Infrastructure", description: "Transport networks, energy systems, urban planning failures, digital infrastructure gaps.", path: "/sectors/infrastructure", color: "text-muted-foreground" },
  { icon: TrendingUp, title: "Economic Flows", description: "Supply chain vulnerabilities, informal economies, capital flight, market distortions.", path: "/sectors/economy", color: "text-primary" },
  { icon: Landmark, title: "Governance", description: "Institutional capacity, policy implementation gaps, coordination failures, civic trust.", path: "/sectors/governance", color: "text-secondary-foreground" },
];

export function SectorsSection() {
  return (
    <section className="atlas-section bg-background">
      <div className="atlas-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="atlas-chip mb-4 inline-flex">Domains</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Systems we investigate
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Every sector hides problems that compound silently. We surface them before they become crises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={sector.path}
                className="atlas-card block p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <sector.icon className={`h-5 w-5 mb-4 ${sector.color}`} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {sector.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {sector.description}
                </p>
                <span className="inline-flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore sector <ArrowRight className="h-3 w-3 ml-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
