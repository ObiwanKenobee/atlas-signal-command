import { motion } from "framer-motion";
import { FileText, Download, Clock, MapPin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  { id: 1, title: "Coastal Erosion Risk Assessment: East African Seaboard", type: "Diagnostic Report", sector: "Ocean & Water", region: "East Africa", date: "March 2026", status: "Final" },
  { id: 2, title: "Urban Infrastructure Decay: Hidden Systemic Risks", type: "Strategic Brief", sector: "Infrastructure", region: "Sub-Saharan Africa", date: "February 2026", status: "Final" },
  { id: 3, title: "Agricultural Supply Chain Vulnerability Matrix", type: "Intelligence Report", sector: "Economic Flows", region: "Global", date: "January 2026", status: "Draft" },
  { id: 4, title: "Groundwater Depletion Patterns in the Sahel", type: "Diagnostic Report", sector: "Ocean & Water", region: "West Africa", date: "December 2025", status: "Final" },
  { id: 5, title: "Healthcare Access Gap Analysis: Rural East Africa", type: "Intelligence Report", sector: "Human Health", region: "East Africa", date: "November 2025", status: "Final" },
];

export default function PortalReports() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Reports Library</h1>
        <p className="text-sm text-muted-foreground">Intelligence outputs from your engagements.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {reports.map((report, i) => (
          <motion.div key={report.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="atlas-card p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="atlas-chip text-xs">{report.type}</span>
              <span className={`atlas-chip text-xs ${report.status === "Final" ? "atlas-status-active" : "atlas-status-pending"}`}>{report.status}</span>
            </div>
            <h3 className="font-display text-base font-semibold text-foreground mb-3 flex-1">{report.title}</h3>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4 pt-3 border-t border-border">
              <span className="flex items-center gap-1"><FileText className="h-3 w-3" /> {report.sector}</span>
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {report.region}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {report.date}</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1 border-border text-foreground hover:bg-secondary gap-1">
                <Eye className="h-3 w-3" /> Preview
              </Button>
              <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 gap-1">
                <Download className="h-3 w-3" /> Download
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
