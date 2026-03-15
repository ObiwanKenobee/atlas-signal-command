import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Globe, Star, ChevronDown, ChevronUp, Calculator, TrendingUp, DollarSign, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

const tiers = [
  {
    name: "Explorer",
    price: "$200 – $1,000",
    period: "/month",
    badge: "Entry",
    description: "For NGOs, small organizations, and teams needing awareness and early intelligence.",
    bestFor: "Small orgs, NGOs, research teams",
    features: [
      "Curated sector reports",
      "Regional insights library",
      "Limited dashboard access",
      "Quarterly strategic briefings",
      "Community intelligence feed",
      "Email support",
    ],
    cta: "Start Exploring",
    highlighted: false,
    locked: [],
  },
  {
    name: "Operator",
    price: "$2,000 – $10,000",
    period: "/month",
    badge: "Growth",
    description: "For SMEs and county-level teams needing decision support and operational intelligence.",
    bestFor: "SMEs, county governments, sector teams",
    features: [
      "Everything in Explorer",
      "Live interactive dashboards",
      "Sector-specific intelligence",
      "Scenario snapshots",
      "Monthly advisory calls",
      "Priority report access",
      "Recommendations feed",
      "Dedicated analyst support",
    ],
    cta: "Become an Operator",
    highlighted: true,
    locked: [],
  },
  {
    name: "Command",
    price: "$15,000+",
    period: "/month",
    badge: "Enterprise",
    description: "For governments and large institutions requiring full strategic intelligence infrastructure.",
    bestFor: "Governments, large institutions, multilaterals",
    features: [
      "Everything in Operator",
      "Full intelligence layer access",
      "Custom real-time dashboards",
      "Real-time signal monitoring",
      "Continuous strategic advisory",
      "Embedded Atlas strategist",
      "Institutional coordination tools",
      "Scenario simulation engine",
      "Custom report builder",
      "SLA-backed support",
    ],
    cta: "Request Command Access",
    highlighted: false,
    locked: [],
  },
];

const engagements = [
  { title: "Diagnostic Report", range: "$5,000 – $50,000", description: "Comprehensive system analysis with actionable findings.", timeline: "2–6 weeks" },
  { title: "Scenario Modeling", range: "$10,000 – $75,000", description: "Multi-variable simulation with best/base/worst case outcomes.", timeline: "4–10 weeks" },
  { title: "System Redesign & Advisory", range: "$25,000 – $250,000+", description: "End-to-end strategic restructuring with embedded advisory.", timeline: "3–12 months" },
];

const sectors = ["Land Systems", "Ocean & Water", "Human Health", "Infrastructure", "Economic Flows", "Governance"];
const scopes = ["Local / County", "Regional", "National", "Multi-Country"];

export default function Pricing() {
  const [selectedSector, setSelectedSector] = useState(0);
  const [selectedScope, setSelectedScope] = useState(0);
  const [urgency, setUrgency] = useState([50]);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showROI, setShowROI] = useState(false);

  // ROI Calculator
  const [currentCosts, setCurrentCosts] = useState(500000);
  const [inefficiency, setInefficiency] = useState([20]);
  const [riskExposure, setRiskExposure] = useState([30]);
  const [populationAffected, setPopulationAffected] = useState(50000);

  // Pricing simulator
  const basePrice = [2000, 5000, 15000, 35000][selectedScope];
  const urgencyMultiplier = 1 + (urgency[0] / 100) * 0.5;
  const estimated = Math.round(basePrice * urgencyMultiplier);
  const recommendedTier = estimated < 2000 ? "Explorer" : estimated < 15000 ? "Operator" : "Command";

  // ROI calculations
  const roiResults = useMemo(() => {
    const wastedCosts = currentCosts * (inefficiency[0] / 100);
    const potentialSavings = wastedCosts * 0.6;
    const avoidedLosses = currentCosts * (riskExposure[0] / 100) * 0.4;
    const totalValue = potentialSavings + avoidedLosses;
    const annualInvestment = estimated * 12;
    const roiMultiple = annualInvestment > 0 ? totalValue / annualInvestment : 0;
    return { potentialSavings, avoidedLosses, totalValue, roiMultiple, annualInvestment };
  }, [currentCosts, inefficiency, riskExposure, estimated]);

  return (
    <>
      {/* Hero */}
      <section className="atlas-section atlas-grid-bg relative pb-10">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="atlas-chip mb-4 inline-flex">Pricing & Engagement</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Intelligence priced by{" "}
              <span className="atlas-gradient-text">impact</span>, not hours
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We price based on the decision advantage we create. From entry-level intelligence access 
              to full strategic command — choose the layer that matches your mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="px-6 py-20 bg-background">
        <div className="atlas-container">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`atlas-card p-8 flex flex-col relative ${
                  tier.highlighted ? "border-primary/40 ring-1 ring-primary/20" : ""
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="atlas-chip text-xs bg-primary/15 text-primary border-primary/30">
                      <Star className="h-3 w-3 mr-1" /> Most Popular
                    </span>
                  </div>
                )}
                <span className="atlas-chip text-xs mb-4 inline-flex self-start">{tier.badge}</span>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-display text-xl font-bold atlas-gradient-text">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{tier.description}</p>
                <p className="text-xs text-primary mb-6">Best for: {tier.bestFor}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    className={`w-full gap-2 ${
                      tier.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {tier.cta} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="px-6 py-16 bg-card/50">
        <div className="atlas-container max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Feature Comparison</h2>
          </motion.div>
          <div className="atlas-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                    <th className="p-4 text-center text-foreground font-semibold">Explorer</th>
                    <th className="p-4 text-center text-primary font-semibold border-x border-primary/10 bg-primary/5">Operator</th>
                    <th className="p-4 text-center text-foreground font-semibold">Command</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Sector Reports", "Curated", "Full Access", "Custom + Full"],
                    ["Dashboards", "Limited", "Interactive", "Real-time Custom"],
                    ["Scenario Modeling", "—", "Snapshots", "Full Engine"],
                    ["Advisory Calls", "Quarterly", "Monthly", "Continuous"],
                    ["Recommendations Feed", "—", "✓", "✓"],
                    ["Signal Monitoring", "—", "—", "Real-time"],
                    ["Embedded Strategist", "—", "—", "✓"],
                    ["SLA Support", "Email", "Priority", "SLA-backed"],
                    ["Report Builder", "—", "—", "✓"],
                  ].map(([feature, explorer, operator, command], i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="p-4 text-muted-foreground">{feature}</td>
                      <td className="p-4 text-center text-foreground">{explorer}</td>
                      <td className="p-4 text-center text-foreground border-x border-primary/10 bg-primary/5">{operator}</td>
                      <td className="p-4 text-center text-foreground">{command}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Simulator */}
      <section className="px-6 py-20 bg-background">
        <div className="atlas-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Atlas Value Simulator</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Configure your intelligence needs and see an estimated engagement scope.</p>
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
            >
              <Calculator className="h-4 w-4" />
              {showCalculator ? "Hide Simulator" : "Open Pricing Simulator"}
              {showCalculator ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </motion.div>

          {showCalculator && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="max-w-3xl mx-auto">
              <div className="atlas-card p-8 space-y-8">
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">Sector Focus</label>
                  <div className="flex flex-wrap gap-2">
                    {sectors.map((s, i) => (
                      <button key={s} onClick={() => setSelectedSector(i)} className={`atlas-chip cursor-pointer transition-colors ${selectedSector === i ? "bg-primary/15 text-primary border-primary/30" : ""}`}>{s}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">Geographic Scope</label>
                  <div className="flex flex-wrap gap-2">
                    {scopes.map((s, i) => (
                      <button key={s} onClick={() => setSelectedScope(i)} className={`atlas-chip cursor-pointer transition-colors ${selectedScope === i ? "bg-primary/15 text-primary border-primary/30" : ""}`}>{s}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">Urgency Level: {urgency[0]}%</label>
                  <Slider value={urgency} onValueChange={setUrgency} max={100} step={5} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Exploratory</span><span>Critical</span>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Estimated Monthly Investment</p>
                      <p className="font-display text-2xl font-bold atlas-gradient-text">${estimated.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Recommended Tier</p>
                      <p className="font-display text-2xl font-bold text-foreground">{recommendedTier}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Estimated ROI</p>
                      <p className="font-display text-2xl font-bold text-foreground">{(urgency[0] / 10 + 3).toFixed(1)}x</p>
                    </div>
                  </div>
                  <Link to="/contact" className="mt-6 block">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                      Request Custom Proposal <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="px-6 py-20 bg-card/50">
        <div className="atlas-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">ROI Calculator</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Input your current costs and risk profile to see what Atlas intelligence could save you.</p>
            <button onClick={() => setShowROI(!showROI)} className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline">
              <TrendingUp className="h-4 w-4" />
              {showROI ? "Hide Calculator" : "Open ROI Calculator"}
              {showROI ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </motion.div>

          {showROI && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Inputs */}
                <div className="atlas-card p-8 space-y-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">Your Profile</h3>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Annual Operating Costs (USD)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input type="number" value={currentCosts} onChange={(e) => setCurrentCosts(Number(e.target.value))} className="pl-10 bg-secondary border-border" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Estimated Inefficiency: {inefficiency[0]}%</label>
                    <Slider value={inefficiency} onValueChange={setInefficiency} max={60} step={1} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Well optimized</span><span>Highly inefficient</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Risk Exposure: {riskExposure[0]}%</label>
                    <Slider value={riskExposure} onValueChange={setRiskExposure} max={80} step={1} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Low risk</span><span>High exposure</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Population Affected</label>
                    <Input type="number" value={populationAffected} onChange={(e) => setPopulationAffected(Number(e.target.value))} className="bg-secondary border-border" />
                  </div>
                </div>

                {/* Results */}
                <div className="atlas-card p-8 space-y-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">Projected Value</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Potential Cost Savings</p>
                      <p className="font-display text-2xl font-bold atlas-gradient-text">${roiResults.potentialSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Avoided Losses</p>
                      <p className="font-display text-2xl font-bold text-foreground">${roiResults.avoidedLosses.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-xs text-primary mb-1">Total Projected Value</p>
                      <p className="font-display text-3xl font-bold atlas-gradient-text">${roiResults.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-secondary/50 border border-border text-center">
                        <p className="text-xs text-muted-foreground mb-1">Annual Investment</p>
                        <p className="font-display text-lg font-bold text-foreground">${roiResults.annualInvestment.toLocaleString()}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-secondary/50 border border-border text-center">
                        <p className="text-xs text-muted-foreground mb-1">ROI Multiple</p>
                        <p className="font-display text-lg font-bold atlas-gradient-text">{roiResults.roiMultiple.toFixed(1)}x</p>
                      </div>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                      Discuss Your ROI <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Strategic Engagements */}
      <section className="px-6 py-20 bg-background">
        <div className="atlas-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Strategic Engagements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">One-off, high-impact intelligence deliverables for specific challenges.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="atlas-card p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{e.title}</h3>
                <p className="font-display text-xl font-bold atlas-gradient-text mb-3">{e.range}</p>
                <p className="text-sm text-muted-foreground mb-4">{e.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border pt-3">
                  <Zap className="h-3 w-3 text-primary" /> Timeline: {e.timeline}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="px-6 py-20 bg-card/50">
        <div className="atlas-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Engagement Models</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "Subscription", description: "Ongoing intelligence access. Monthly retainer with continuous deliverables and advisory." },
              { icon: Zap, title: "One-Off", description: "Targeted diagnostics, reports, and scenario analyses for specific challenges." },
              { icon: Globe, title: "Outcome-Based", description: "Revenue tied to measurable impact — savings created, risks avoided, efficiency gained." },
            ].map((model, i) => (
              <motion.div key={model.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="atlas-card p-6 text-center">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <model.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{model.title}</h3>
                <p className="text-sm text-muted-foreground">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case-Based Examples */}
      <section className="px-6 py-20 bg-background">
        <div className="atlas-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Pricing in Practice</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Real engagement examples showing investment versus value created.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { challenge: "Nakuru County Water System Analysis", investment: "$15,000", outcome: "Identified $500K in preventable losses", roi: "33x" },
              { challenge: "East African Food Supply Chain Optimization", investment: "$25,000", outcome: "Reduced price volatility exposure by 40%", roi: "12x" },
            ].map((ex, i) => (
              <motion.div key={ex.challenge} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="atlas-card p-6">
                <h3 className="font-display text-base font-semibold text-foreground mb-4">{ex.challenge}</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Investment</p>
                    <p className="font-display text-lg font-bold text-foreground">{ex.investment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Outcome</p>
                    <p className="text-sm text-muted-foreground">{ex.outcome}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">ROI</p>
                    <p className="font-display text-lg font-bold atlas-gradient-text">{ex.roi}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="atlas-section bg-card/50">
        <div className="atlas-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Ready to invest in clarity?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Every engagement begins with a strategy call. Let us understand your challenge and recommend the right intelligence layer.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Book Strategy Call <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
