import { motion } from "framer-motion";
import { FolderKanban, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const projects = [
  { id: 1, title: "Nakuru County Water System Assessment", sector: "Ocean & Water", region: "Rift Valley", phase: "Phase 2 — Analysis", status: "active", progress: 65, lead: "Field Intelligence Unit", dueDate: "April 2026" },
  { id: 2, title: "East African Coastal Erosion Strategy", sector: "Land Systems", region: "East Africa", phase: "Phase 1 — Data Collection", status: "active", progress: 30, lead: "Systems Strategy Team", dueDate: "June 2026" },
  { id: 3, title: "Nairobi Metro Economic Flow Mapping", sector: "Economic Flows", region: "Kenya", phase: "Phase 3 — Reporting", status: "active", progress: 90, lead: "Civic Intelligence Lab", dueDate: "March 2026" },
];

const statusColor: Record<string, string> = {
  active: "atlas-status-active",
  paused: "atlas-status-pending",
};

export default function PortalProjects() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Active Projects</h1>
        <p className="text-sm text-muted-foreground">Your current engagements and project progress.</p>
      </motion.div>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="atlas-card p-6 hover:border-primary/30 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`atlas-chip text-xs ${statusColor[project.status]}`}>{project.status}</span>
                  <span className="atlas-chip text-xs">{project.sector}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {project.region}</span>
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {project.lead}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Due: {project.dueDate}</span>
                </div>
              </div>
              <div className="lg:w-48">
                <p className="text-xs text-muted-foreground mb-2">{project.phase}</p>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${project.progress}%` }} />
                </div>
                <p className="text-xs text-primary mt-1 text-right">{project.progress}%</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
