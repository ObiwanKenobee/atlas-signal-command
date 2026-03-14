import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const orgTypes = ["Government", "Development Agency", "NGO / Non-Profit", "Private Sector", "Academic / Research", "Other"];
const problemAreas = ["Land Systems", "Ocean & Water", "Human Health", "Infrastructure", "Economic Flows", "Governance", "Cross-Sector"];
const urgencyLevels = ["Exploratory — no rush", "Planning phase — 1-3 months", "Active need — within weeks", "Crisis — immediate"];

export default function Contact() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "", email: "", organization: "", orgType: "", problemArea: "", region: "", urgency: "", description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: form.name,
        email: form.email,
        organization: form.organization,
        organization_type: form.orgType,
        sector: form.problemArea,
        region: form.region,
        urgency: form.urgency,
        message: form.description,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      title: "About you",
      content: (
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Full name</label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="bg-card border-border text-foreground" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@organization.com" className="bg-card border-border text-foreground" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Organisation</label>
            <Input value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} placeholder="Organisation name" className="bg-card border-border text-foreground" />
          </div>
        </div>
      ),
    },
    {
      title: "Organisation type",
      content: (
        <div className="grid grid-cols-2 gap-3">
          {orgTypes.map((type) => (
            <button
              key={type}
              onClick={() => setForm({ ...form, orgType: type })}
              className={`atlas-card p-4 text-left text-sm transition-all ${
                form.orgType === type ? "border-primary bg-primary/5 text-foreground" : "text-muted-foreground hover:border-primary/30"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      ),
    },
    {
      title: "Problem area",
      content: (
        <div className="grid grid-cols-2 gap-3">
          {problemAreas.map((area) => (
            <button
              key={area}
              onClick={() => setForm({ ...form, problemArea: area })}
              className={`atlas-card p-4 text-left text-sm transition-all ${
                form.problemArea === area ? "border-primary bg-primary/5 text-foreground" : "text-muted-foreground hover:border-primary/30"
              }`}
            >
              {area}
            </button>
          ))}
        </div>
      ),
    },
    {
      title: "Details",
      content: (
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Geography / Region</label>
            <Input value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })} placeholder="e.g., East Africa, Global, Kenya" className="bg-card border-border text-foreground" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Urgency</label>
            <div className="grid grid-cols-1 gap-2">
              {urgencyLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setForm({ ...form, urgency: level })}
                  className={`atlas-card p-3 text-left text-sm transition-all ${
                    form.urgency === level ? "border-primary bg-primary/5 text-foreground" : "text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Describe what you need</label>
            <Textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Tell us about the challenge, what you've tried, and what outcome you're seeking."
              rows={4}
              className="bg-card border-border text-foreground"
            />
          </div>
        </div>
      ),
    },
  ];

  if (submitted) {
    return (
      <section className="atlas-section min-h-[80vh] flex items-center atlas-grid-bg">
        <div className="atlas-container">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Request received</h2>
            <p className="text-muted-foreground leading-relaxed">
              We'll review your submission and reach out within 48 hours to schedule 
              a strategy session. In the meantime, explore our latest intelligence reports.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="atlas-section atlas-grid-bg relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="atlas-chip mb-4 inline-flex">Get Started</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Request a <span className="atlas-gradient-text">diagnostic</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us what you're facing. We'll assess whether Atlas can help — and design a path to clarity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20 bg-background">
        <div className="atlas-container max-w-2xl">
          {/* Progress */}
          <div className="flex gap-2 mb-8">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= step ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              {steps[step].title}
            </h3>
            {steps[step].content}
          </motion.div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              disabled={step === 0}
              className="border-border text-foreground gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            {step < steps.length - 1 ? (
              <Button onClick={() => setStep(step + 1)} className="bg-primary text-primary-foreground gap-2">
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={loading} className="bg-primary text-primary-foreground gap-2">
                {loading ? "Submitting..." : "Submit Request"} <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
