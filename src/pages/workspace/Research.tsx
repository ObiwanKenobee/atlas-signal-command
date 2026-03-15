import { motion } from "framer-motion";
import { BookOpen, Search, FileText, MapPin, Tag, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const categories = ["All", "Reports", "Datasets", "Field Notes", "Signals", "Maps"];
const sectors = ["All Sectors", "Land Systems", "Ocean & Water", "Human Health", "Infrastructure", "Economic Flows"];

const documents = [
  { id: 1, title: "Groundwater Depletion Patterns — Sahel Region", type: "Dataset", sector: "Ocean & Water", region: "West Africa", date: "Mar 2026", tags: ["hydrology", "climate", "risk"] },
  { id: 2, title: "Urban Infrastructure Decay Index — Sub-Saharan Africa", type: "Reports", sector: "Infrastructure", region: "Continental", date: "Feb 2026", tags: ["infrastructure", "urban", "decay"] },
  { id: 3, title: "Field Notes: Rift Valley Agricultural Patterns", type: "Field Notes", sector: "Land Systems", region: "Kenya", date: "Mar 2026", tags: ["agriculture", "field-research", "patterns"] },
  { id: 4, title: "Mombasa Port Economic Flow Analysis", type: "Reports", sector: "Economic Flows", region: "East Africa", date: "Jan 2026", tags: ["trade", "ports", "logistics"] },
  { id: 5, title: "Community Health Signal Clusters — Nakuru County", type: "Signals", sector: "Human Health", region: "Rift Valley", date: "Mar 2026", tags: ["health", "community", "signals"] },
  { id: 6, title: "East African Coastal Erosion Map Layer", type: "Maps", sector: "Ocean & Water", region: "East Africa", date: "Feb 2026", tags: ["coastal", "erosion", "geospatial"] },
];

export default function WorkspaceResearch() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sector, setSector] = useState("All Sectors");

  const filtered = documents.filter(d => {
    if (category !== "All" && d.type !== category) return false;
    if (sector !== "All Sectors" && d.sector !== sector) return false;
    if (search && !d.title.toLowerCase().includes(search.toLowerCase()) && !d.tags.some(t => t.includes(search.toLowerCase()))) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Research Repository</h1>
        <p className="text-sm text-muted-foreground">Structured intelligence assets, datasets, and field research.</p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search documents, tags..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 bg-secondary border-border" />
        </div>
        <select value={sector} onChange={(e) => setSector(e.target.value)} className="atlas-chip bg-secondary border-border text-foreground cursor-pointer px-4 py-2 rounded-md text-sm">
          {sectors.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map(c => (
          <button key={c} onClick={() => setCategory(c)} className={`atlas-chip cursor-pointer transition-colors ${category === c ? "bg-primary/15 text-primary border-primary/30" : ""}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((doc, i) => (
          <motion.div key={doc.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="atlas-card p-5 hover:border-primary/30 transition-all cursor-pointer group">
            <div className="flex items-center gap-2 mb-3">
              <span className="atlas-chip text-xs">{doc.type}</span>
              <span className="atlas-chip text-xs">{doc.sector}</span>
            </div>
            <h3 className="font-display text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{doc.title}</h3>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {doc.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">
                  <Tag className="inline h-2.5 w-2.5 mr-0.5" />{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border">
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {doc.region}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {doc.date}</span>
              <ExternalLink className="h-3 w-3 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
