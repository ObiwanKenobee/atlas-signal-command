import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Search, Filter, Mail, Building, MapPin, Clock, Star, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type PipelineStage = "all" | "new" | "qualified" | "discovery" | "proposal" | "negotiation" | "won" | "dormant";

const stages: { id: PipelineStage; label: string; count: number }[] = [
  { id: "all", label: "All", count: 33 },
  { id: "new", label: "New", count: 12 },
  { id: "qualified", label: "Qualified", count: 7 },
  { id: "discovery", label: "Discovery", count: 4 },
  { id: "proposal", label: "Proposal", count: 3 },
  { id: "negotiation", label: "Negotiation", count: 2 },
  { id: "won", label: "Won", count: 5 },
];

const leads = [
  { id: 1, name: "Ministry of Agriculture", contact: "James Ochieng", email: "j.ochieng@moagri.go.ke", sector: "Land Systems", region: "Kenya", stage: "qualified", score: 85, budget: "$50K–$100K", lastActivity: "2 days ago" },
  { id: 2, name: "UN-Habitat East Africa", contact: "Amara Diallo", email: "a.diallo@unhabitat.org", sector: "Infrastructure", region: "East Africa", stage: "discovery", score: 92, budget: "$100K+", lastActivity: "1 day ago" },
  { id: 3, name: "Nakuru County Government", contact: "Faith Njeri", email: "f.njeri@nakuru.go.ke", sector: "Ocean & Water", region: "Rift Valley", stage: "proposal", score: 78, budget: "$25K–$50K", lastActivity: "3 hours ago" },
  { id: 4, name: "African Development Bank", contact: "Kwame Asante", email: "k.asante@afdb.org", sector: "Economic Flows", region: "Continental", stage: "negotiation", score: 95, budget: "$250K+", lastActivity: "5 hours ago" },
  { id: 5, name: "WaterAid Kenya", contact: "Lilian Wambui", email: "l.wambui@wateraid.org", sector: "Ocean & Water", region: "Kenya", stage: "new", score: 65, budget: "$10K–$25K", lastActivity: "1 day ago" },
  { id: 6, name: "Safaricom Foundation", contact: "David Mwangi", email: "d.mwangi@safaricom.co.ke", sector: "Human Health", region: "Kenya", stage: "won", score: 88, budget: "$50K–$100K", lastActivity: "1 week ago" },
];

const stageColors: Record<string, string> = {
  new: "bg-muted text-muted-foreground",
  qualified: "bg-primary/10 text-primary border-primary/20",
  discovery: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  proposal: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  negotiation: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  won: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  dormant: "bg-muted text-muted-foreground",
};

export default function WorkspaceLeads() {
  const [activeStage, setActiveStage] = useState<PipelineStage>("all");
  const [search, setSearch] = useState("");

  const filtered = leads.filter(l => {
    if (activeStage !== "all" && l.stage !== activeStage) return false;
    if (search && !l.name.toLowerCase().includes(search.toLowerCase()) && !l.contact.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Leads & CRM</h1>
        <p className="text-sm text-muted-foreground">Manage your pipeline and track relationship development.</p>
      </motion.div>

      {/* Pipeline stages */}
      <div className="flex flex-wrap gap-2">
        {stages.map(stage => (
          <button
            key={stage.id}
            onClick={() => setActiveStage(stage.id)}
            className={`atlas-chip cursor-pointer transition-colors ${
              activeStage === stage.id ? "bg-primary/15 text-primary border-primary/30" : ""
            }`}
          >
            {stage.label} <span className="ml-1 opacity-60">{stage.count}</span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 bg-secondary border-border"
        />
      </div>

      {/* Leads Table */}
      <div className="space-y-3">
        {filtered.map((lead, i) => (
          <motion.div
            key={lead.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="atlas-card p-5 hover:border-primary/30 transition-all cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`atlas-chip text-xs ${stageColors[lead.stage]}`}>{lead.stage}</span>
                  <span className="atlas-chip text-xs">{lead.sector}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{lead.name}</h3>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {lead.contact}</span>
                  <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {lead.email}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {lead.region}</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Score</p>
                  <div className="flex items-center gap-1">
                    <Star className={`h-3 w-3 ${lead.score >= 80 ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="font-display text-sm font-bold text-foreground">{lead.score}</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Budget</p>
                  <span className="text-sm font-medium text-foreground">{lead.budget}</span>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Activity</p>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {lead.lastActivity}
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
