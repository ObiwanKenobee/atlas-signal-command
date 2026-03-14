import { motion } from "framer-motion";
import { Target, Eye, Compass, Users, Globe, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const team = [
  { name: "Atlas Leadership", role: "Strategic Direction", description: "Architects of the intelligence framework powering every Atlas engagement." },
  { name: "Field Intelligence Unit", role: "Research & Diagnostics", description: "On-the-ground analysts mapping hidden system failures across sectors." },
  { name: "Systems Strategy Team", role: "Advisory & Modeling", description: "Scenario builders turning complex data into actionable decision pathways." },
  { name: "Civic Intelligence Lab", role: "Community Signals", description: "Bridging institutional intelligence with grassroots reality." },
];

const timeline = [
  { year: "Foundation", title: "The Problem Observed", description: "Atlas Agency was born from a simple observation: the world's most critical systems — land, water, health, infrastructure — are failing not from lack of data, but from lack of intelligence." },
  { year: "Phase I", title: "Diagnostic Intelligence", description: "We built the diagnostic framework — turning raw signals into structured intelligence reports that reveal hidden system vulnerabilities." },
  { year: "Phase II", title: "Strategic Advisory", description: "From diagnosis to prescription. We expanded into scenario modeling and strategic advisory for institutions navigating complex system failures." },
  { year: "Phase III", title: "Civic Intelligence Infrastructure", description: "Atlas became more than a consultancy. We're building the intelligence infrastructure that connects institutions, communities, and decision-makers." },
];

const values = [
  { icon: Eye, title: "Clarity Over Noise", description: "We cut through information overload to surface what actually matters for decision-makers." },
  { icon: Target, title: "Precision Intelligence", description: "Every report, every recommendation is calibrated to create measurable impact." },
  { icon: Compass, title: "Systems Thinking", description: "Problems don't exist in isolation. We map interdependencies across sectors and scales." },
  { icon: Users, title: "Civic Accountability", description: "Intelligence should serve communities, not just boardrooms. We build trust through transparency." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="atlas-section atlas-grid-bg relative pb-10">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="atlas-chip mb-4 inline-flex">About Atlas Agency</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Building the intelligence layer{" "}
              <span className="atlas-gradient-text">civilisation needs</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atlas Agency exists because the world's most critical systems are failing — not from lack of data, 
              but from a failure to convert complexity into clarity. We build the intelligence infrastructure 
              that turns hidden problems into visible solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-20 bg-background">
        <div className="atlas-container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="atlas-card p-8">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide diagnostic intelligence, strategic advisory, and scenario modeling that enables 
                governments, institutions, and communities to see, understand, and act on the hidden failures 
                within the systems they depend on — before those failures become catastrophes.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="atlas-card p-8">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every critical decision — from county governance to continental infrastructure — 
                is informed by trustworthy, timely, and actionable intelligence. We envision Atlas as the 
                standard for civic intelligence infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 bg-card/50">
        <div className="atlas-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Operating Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The values that drive every engagement, every report, and every recommendation.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="atlas-card p-6 text-center">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story Timeline */}
      <section className="px-6 py-20 bg-background">
        <div className="atlas-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">The Atlas Story</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From observation to infrastructure — how Atlas Agency became what it is.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-8 pb-12 last:pb-0 border-l border-border">
                <div className="absolute left-0 top-0 -translate-x-1/2 h-3 w-3 rounded-full bg-primary" />
                <span className="atlas-chip text-xs mb-2 inline-flex">{item.year}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20 bg-card/50">
        <div className="atlas-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">The Atlas Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Structured for precision. Designed for impact.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="atlas-card p-6">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-muted-foreground" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="atlas-section bg-background">
        <div className="atlas-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Ready to see what's hidden?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let Atlas Agency map the risks, opportunities, and system failures that matter most to your mission.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  Book Strategy Call <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/insights">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                  Explore Intelligence
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
