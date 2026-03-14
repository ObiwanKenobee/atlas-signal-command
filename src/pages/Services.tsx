import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Brain, BarChart3, Users, Building, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Diagnostic Intelligence Reports",
    description: "Deep analytical assessments that surface hidden patterns, risks, and opportunities within complex systems. We investigate what others overlook.",
    deliverables: ["System mapping", "Risk assessment", "Opportunity identification", "Stakeholder analysis"],
    bestFor: "Governments, development agencies, institutional investors",
  },
  {
    icon: Brain,
    title: "Strategic Advisory",
    description: "Structured counsel for decision-makers navigating uncertainty. We translate intelligence into actionable strategic frameworks.",
    deliverables: ["Strategy frameworks", "Decision matrices", "Implementation roadmaps", "Quarterly reviews"],
    bestFor: "Executive leadership, boards, policy teams",
  },
  {
    icon: BarChart3,
    title: "Scenario Modeling",
    description: "Quantitative and qualitative scenario analysis that maps possible futures, second-order effects, and uncertainty bands.",
    deliverables: ["Scenario narratives", "Sensitivity analysis", "Impact projections", "Variable dashboards"],
    bestFor: "Long-term planners, risk managers, investors",
  },
  {
    icon: Users,
    title: "Community Intelligence Campaigns",
    description: "Ground-truth data collection from communities through structured signal gathering, sentiment analysis, and participatory research.",
    deliverables: ["Signal reports", "Sentiment maps", "Community dashboards", "Feedback loops"],
    bestFor: "NGOs, local governments, social enterprises",
  },
  {
    icon: Building,
    title: "Institutional Coordination Support",
    description: "We help institutions align across silos, share intelligence, and coordinate responses to systemic challenges.",
    deliverables: ["Coordination frameworks", "Shared intelligence platforms", "Joint assessments", "Alignment workshops"],
    bestFor: "Multi-agency programmes, regional bodies",
  },
  {
    icon: Megaphone,
    title: "Atlas Media & Narrative Systems",
    description: "Strategic communication infrastructure that translates complex intelligence into narratives that build trust and drive action.",
    deliverables: ["Briefing documents", "Public intelligence pieces", "Documentary support", "Media strategy"],
    bestFor: "Organisations seeking to build public legitimacy",
  },
];

const process = [
  { step: "01", title: "Signal", description: "We identify the question behind the question." },
  { step: "02", title: "Investigate", description: "Deep analysis across datasets, field signals, and expert networks." },
  { step: "03", title: "Diagnose", description: "We surface the hidden structures driving outcomes." },
  { step: "04", title: "Prescribe", description: "Actionable recommendations with confidence levels." },
  { step: "05", title: "Monitor", description: "Ongoing intelligence tracking and scenario updates." },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="atlas-section atlas-grid-bg relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="atlas-chip mb-4 inline-flex">What We Do</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Intelligence services for{" "}
              <span className="atlas-gradient-text">complex systems</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't build dashboards for vanity. We build intelligence infrastructure 
              that helps institutions see what they're missing — and act before it's too late.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="atlas-section bg-background">
        <div className="atlas-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="atlas-card p-6 md:p-8"
              >
                <service.icon className="h-5 w-5 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs font-medium text-foreground mb-2">Deliverables</p>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((d) => (
                      <span key={d} className="atlas-chip text-xs">{d}</span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">Best for:</span> {service.bestFor}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="atlas-section border-t border-border bg-card">
        <div className="atlas-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="atlas-chip mb-4 inline-flex">Our Process</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              From signal to strategy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <span className="font-display text-3xl font-bold text-primary/20">{step.step}</span>
                <h4 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="atlas-section bg-background">
        <div className="atlas-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start with a diagnostic
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Tell us what you're trying to understand. We'll assess whether Atlas can help — and how.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Request Diagnostic <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
