import { motion } from "framer-motion";
import { Lightbulb, AlertTriangle, CheckCircle2, Clock, ArrowRight, ThumbsUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendations = [
  { id: 1, title: "Prioritize groundwater monitoring in Nakuru sub-basins", urgency: "High", confidence: "92%", impact: "Could prevent $2.3M in infrastructure damage", rationale: "Current depletion rates suggest critical threshold within 18 months", sector: "Ocean & Water", status: "pending" },
  { id: 2, title: "Reroute coastal logistics corridor away from erosion zone", urgency: "Critical", confidence: "87%", impact: "Avoid $500K annual maintenance costs", rationale: "Erosion models show 40m shoreline retreat by 2028", sector: "Infrastructure", status: "pending" },
  { id: 3, title: "Establish food price monitoring system for Rift Valley", urgency: "Medium", confidence: "78%", impact: "Reduce supply chain volatility by 25%", rationale: "Historical patterns show 3x price spikes in affected regions", sector: "Economic Flows", status: "approved" },
  { id: 4, title: "Deploy mobile health screening units in underserved wards", urgency: "High", confidence: "85%", impact: "Reach 15,000 additional residents", rationale: "Gap analysis shows 60% coverage deficit in rural areas", sector: "Human Health", status: "pending" },
];

const urgencyColor: Record<string, string> = {
  Critical: "bg-destructive/10 text-destructive border-destructive/20",
  High: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Medium: "bg-primary/10 text-primary border-primary/20",
};

export default function PortalRecommendations() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Recommendations</h1>
        <p className="text-sm text-muted-foreground">Actionable intelligence — prioritized by urgency and confidence.</p>
      </motion.div>

      <div className="space-y-4">
        {recommendations.map((rec, i) => (
          <motion.div key={rec.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="atlas-card p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`atlas-chip text-xs ${urgencyColor[rec.urgency]}`}>
                    <AlertTriangle className="h-3 w-3 mr-1" /> {rec.urgency}
                  </span>
                  <span className="atlas-chip text-xs">{rec.sector}</span>
                  {rec.status === "approved" && (
                    <span className="atlas-chip text-xs atlas-status-active">
                      <CheckCircle2 className="h-3 w-3 mr-1" /> Approved
                    </span>
                  )}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{rec.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{rec.rationale}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Confidence</p>
                    <p className="font-display text-lg font-bold atlas-gradient-text">{rec.confidence}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Expected Impact</p>
                    <p className="text-sm text-foreground">{rec.impact}</p>
                  </div>
                </div>
              </div>
              {rec.status === "pending" && (
                <div className="flex lg:flex-col gap-2 lg:justify-center">
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-1">
                    <ThumbsUp className="h-3 w-3" /> Approve
                  </Button>
                  <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-secondary gap-1">
                    <MessageSquare className="h-3 w-3" /> Comment
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
