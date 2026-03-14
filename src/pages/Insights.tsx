import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, Clock, MapPin, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const filters = ["All", "Diagnostic Report", "Strategic Brief", "Intelligence Report", "Scenario Analysis"];
const sectorFilters = ["All Sectors", "Land", "Oceans", "Health", "Infrastructure", "Economy", "Governance"];

const reports = [
  { title: "Coastal Erosion Risk Assessment: East African Seaboard", sector: "Ocean & Water", region: "East Africa", date: "March 2026", type: "Diagnostic Report", featured: true },
  { title: "Urban Infrastructure Decay: Hidden Systemic Risks", sector: "Infrastructure", region: "Sub-Saharan Africa", date: "February 2026", type: "Strategic Brief", featured: true },
  { title: "Agricultural Supply Chain Vulnerability Matrix", sector: "Economic Flows", region: "Global", date: "January 2026", type: "Intelligence Report", featured: true },
  { title: "Groundwater Depletion Patterns in the Sahel", sector: "Ocean & Water", region: "West Africa", date: "December 2025", type: "Diagnostic Report", featured: false },
  { title: "Healthcare Access Gap Analysis: Rural East Africa", sector: "Human Health", region: "East Africa", date: "November 2025", type: "Intelligence Report", featured: false },
  { title: "Land Tenure Conflict Mapping: Great Rift Valley", sector: "Land Systems", region: "East Africa", date: "October 2025", type: "Scenario Analysis", featured: false },
  { title: "Informal Economy Flow Mapping: Nairobi Metro", sector: "Economic Flows", region: "Kenya", date: "September 2025", type: "Diagnostic Report", featured: false },
  { title: "Governance Coordination Index: East African Community", sector: "Governance", region: "East Africa", date: "August 2025", type: "Strategic Brief", featured: false },
  { title: "Renewable Energy Infrastructure Readiness Assessment", sector: "Infrastructure", region: "Southern Africa", date: "July 2025", type: "Intelligence Report", featured: false },
];

export default function Insights() {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All");
  const [activeSector, setActiveSector] = useState("All Sectors");

  const filtered = reports.filter((r) => {
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchType = activeType === "All" || r.type === activeType;
    const matchSector = activeSector === "All Sectors" || r.sector.toLowerCase().includes(activeSector.toLowerCase());
    return matchSearch && matchType && matchSector;
  });

  return (
    <>
      <section className="atlas-section atlas-grid-bg relative pb-10">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="atlas-chip mb-4 inline-flex">Intelligence Hub</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Reports & <span className="atlas-gradient-text">insights</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Diagnostic reports, strategic briefs, and scenario analyses. Intelligence you can act on.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20 bg-background">
        <div className="atlas-container">
          {/* Search & filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search reports..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveType(f)}
                  className={`atlas-chip cursor-pointer transition-colors ${
                    activeType === f ? "bg-primary/15 text-primary border-primary/30" : ""
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {sectorFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveSector(f)}
                  className={`atlas-chip cursor-pointer transition-colors ${
                    activeSector === f ? "bg-primary/15 text-primary border-primary/30" : ""
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((report, i) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="atlas-card p-6 group hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="atlas-chip text-xs">{report.type}</span>
                  {report.featured && (
                    <span className="atlas-chip text-xs atlas-status-active">Featured</span>
                  )}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
                  {report.title}
                </h3>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground pt-3 border-t border-border">
                  <span className="flex items-center gap-1"><FileText className="h-3 w-3" /> {report.sector}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {report.region}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {report.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p>No reports match your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
