import { useState } from "react";
import { motion } from "framer-motion";
import { Radio, MapPin, Camera, AlertTriangle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const issueCategories = ["Water & Sanitation", "Health Access", "Infrastructure", "Food Security", "Environmental", "Governance", "Other"];
const urgencyLevels = ["Low — Gradual concern", "Medium — Needs attention", "High — Urgent action needed", "Critical — Immediate danger"];

export default function SubmitSignal() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    category: "",
    location: "",
    description: "",
    urgency: "",
    name: "",
    anonymous: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="atlas-section flex items-center justify-center min-h-[60vh]">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-emerald-400" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Signal Received</h2>
          <p className="text-muted-foreground mb-6">Thank you for contributing to community intelligence. Your observation will be verified and added to the signals dashboard.</p>
          <Button onClick={() => { setSubmitted(false); setForm({ category: "", location: "", description: "", urgency: "", name: "", anonymous: true }); }} variant="outline">
            Submit Another Signal
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <section className="atlas-section atlas-grid-bg relative pb-10">
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="atlas-chip mb-4 inline-flex"><Radio className="h-3 w-3 mr-1" /> Community Intelligence</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Submit a <span className="atlas-gradient-text">Signal</span>
            </h1>
            <p className="text-muted-foreground">Report an observation, concern, or emerging issue in your community. Your signal helps build intelligence that drives action.</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-12 bg-background">
        <div className="atlas-container max-w-2xl">
          <form onSubmit={handleSubmit} className="atlas-card p-8 space-y-6">
            {/* Category */}
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Issue Category</label>
              <div className="flex flex-wrap gap-2">
                {issueCategories.map(c => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => setForm(prev => ({ ...prev, category: c }))}
                    className={`atlas-chip cursor-pointer transition-colors ${form.category === c ? "bg-primary/15 text-primary border-primary/30" : ""}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="e.g. Nakuru CBD, Mombasa Old Town..." value={form.location} onChange={(e) => setForm(prev => ({ ...prev, location: e.target.value }))} className="pl-10 bg-secondary border-border" required />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">What are you observing?</label>
              <Textarea placeholder="Describe the issue, what you've seen, and any relevant context..." value={form.description} onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))} className="bg-secondary border-border min-h-[120px]" required />
            </div>

            {/* Urgency */}
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Urgency Level</label>
              <div className="space-y-2">
                {urgencyLevels.map(u => (
                  <button
                    type="button"
                    key={u}
                    onClick={() => setForm(prev => ({ ...prev, urgency: u }))}
                    className={`w-full text-left p-3 rounded-lg border transition-colors text-sm ${
                      form.urgency === u ? "border-primary/30 bg-primary/5 text-foreground" : "border-border bg-secondary/50 text-muted-foreground hover:border-border hover:bg-secondary"
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>

            {/* Anonymous toggle */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
              <input type="checkbox" checked={form.anonymous} onChange={(e) => setForm(prev => ({ ...prev, anonymous: e.target.checked }))} className="rounded" />
              <div>
                <p className="text-sm text-foreground">Submit anonymously</p>
                <p className="text-xs text-muted-foreground">Your identity will not be associated with this signal.</p>
              </div>
            </div>

            {!form.anonymous && (
              <Input placeholder="Your name (optional)" value={form.name} onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))} className="bg-secondary border-border" />
            )}

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <Send className="h-4 w-4" /> Submit Signal
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
