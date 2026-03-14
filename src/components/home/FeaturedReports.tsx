import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  {
    title: "Coastal Erosion Risk Assessment: East African Seaboard",
    sector: "Ocean & Water",
    region: "East Africa",
    date: "March 2026",
    type: "Diagnostic Report",
    slug: "coastal-erosion-east-africa",
  },
  {
    title: "Urban Infrastructure Decay: Hidden Systemic Risks",
    sector: "Infrastructure",
    region: "Sub-Saharan Africa",
    date: "February 2026",
    type: "Strategic Brief",
    slug: "urban-infrastructure-decay",
  },
  {
    title: "Agricultural Supply Chain Vulnerability Matrix",
    sector: "Economic Flows",
    region: "Global",
    date: "January 2026",
    type: "Intelligence Report",
    slug: "agri-supply-chain-vulnerability",
  },
];

export function FeaturedReports() {
  return (
    <section className="atlas-section bg-background">
      <div className="atlas-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4"
        >
          <div>
            <span className="atlas-chip mb-4 inline-flex">Latest Intelligence</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Featured reports
            </h2>
          </div>
          <Link to="/insights">
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary gap-2">
              View all reports <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reports.map((report, i) => (
            <motion.div
              key={report.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/insights/${report.slug}`}
                className="atlas-card block p-6 group hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="atlas-chip text-xs">{report.type}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
                  {report.title}
                </h3>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                  <span className="flex items-center gap-1">
                    <FileText className="h-3 w-3" /> {report.sector}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {report.region}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {report.date}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
