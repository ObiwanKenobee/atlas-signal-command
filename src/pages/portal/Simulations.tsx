import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Activity, TrendingUp, TrendingDown, AlertTriangle, BarChart3, Gauge, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface ScenarioResult {
  label: string;
  best: number;
  base: number;
  worst: number;
  unit: string;
}

const variables = [
  { id: "rainfall", label: "Annual Rainfall Change", min: -50, max: 50, default: 0, unit: "%" },
  { id: "population", label: "Population Growth Rate", min: 0, max: 10, default: 3, unit: "%" },
  { id: "investment", label: "Infrastructure Investment", min: 0, max: 100, default: 40, unit: "M USD" },
  { id: "degradation", label: "Land Degradation Rate", min: 0, max: 30, default: 8, unit: "%" },
  { id: "policy", label: "Policy Effectiveness Score", min: 0, max: 100, default: 50, unit: "/100" },
];

const presets = [
  { name: "Current Trajectory", values: { rainfall: 0, population: 3, investment: 40, degradation: 8, policy: 50 } },
  { name: "Climate Shock", values: { rainfall: -35, population: 4, investment: 20, degradation: 20, policy: 30 } },
  { name: "Optimistic Reform", values: { rainfall: 5, population: 2, investment: 80, degradation: 3, policy: 85 } },
  { name: "Stagnation", values: { rainfall: -10, population: 5, investment: 15, degradation: 15, policy: 25 } },
];

export default function PortalSimulations() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(variables.map(v => [v.id, v.default]))
  );
  const [activePreset, setActivePreset] = useState<string | null>("Current Trajectory");

  const setVariable = (id: string, val: number[]) => {
    setValues(prev => ({ ...prev, [id]: val[0] }));
    setActivePreset(null);
  };

  const applyPreset = (preset: typeof presets[0]) => {
    setValues(preset.values);
    setActivePreset(preset.name);
  };

  const results: ScenarioResult[] = useMemo(() => {
    const r = values.rainfall;
    const p = values.population;
    const inv = values.investment;
    const d = values.degradation;
    const pol = values.policy;

    const waterStress = Math.max(0, Math.min(100, 45 - r * 0.5 + p * 3 - inv * 0.2 + d * 1.5 - pol * 0.3));
    const foodSecurity = Math.max(0, Math.min(100, 60 + r * 0.3 - p * 2 + inv * 0.15 - d * 2 + pol * 0.4));
    const economicOutput = Math.max(-20, Math.min(30, 5 + r * 0.1 - p * 0.5 + inv * 0.12 - d * 0.8 + pol * 0.15));
    const displacement = Math.max(0, Math.min(500, 80 - r * 1.2 + p * 15 - inv * 0.5 + d * 8 - pol * 1.5));

    return [
      { label: "Water Stress Index", best: Math.max(0, waterStress - 15), base: waterStress, worst: Math.min(100, waterStress + 20), unit: "%" },
      { label: "Food Security Score", best: Math.min(100, foodSecurity + 15), base: foodSecurity, worst: Math.max(0, foodSecurity - 20), unit: "/100" },
      { label: "GDP Growth Impact", best: economicOutput + 3, base: economicOutput, worst: economicOutput - 5, unit: "%" },
      { label: "Projected Displacement", best: Math.max(0, displacement - 40), base: displacement, worst: displacement + 60, unit: "K people" },
    ];
  }, [values]);

  const confidence = useMemo(() => {
    const pol = values.policy;
    const inv = values.investment;
    return Math.min(95, Math.max(25, 40 + pol * 0.3 + inv * 0.2));
  }, [values]);

  const riskLevel = useMemo(() => {
    const waterResult = results[0];
    if (waterResult.base > 70) return { label: "Critical", color: "text-red-400 bg-red-500/10 border-red-500/20" };
    if (waterResult.base > 45) return { label: "Elevated", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" };
    return { label: "Manageable", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" };
  }, [results]);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Scenario Simulation Engine</h1>
        <p className="text-sm text-muted-foreground">Model outcomes by adjusting key variables. Explore best, base, and worst case projections.</p>
      </motion.div>

      {/* Presets */}
      <div className="flex flex-wrap gap-2">
        {presets.map(preset => (
          <button
            key={preset.name}
            onClick={() => applyPreset(preset)}
            className={`atlas-chip cursor-pointer transition-colors ${
              activePreset === preset.name ? "bg-primary/15 text-primary border-primary/30" : ""
            }`}
          >
            {preset.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Variables Panel */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 atlas-card p-6 space-y-6">
          <h2 className="font-display text-lg font-semibold text-foreground">Variables</h2>
          {variables.map(v => (
            <div key={v.id}>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-sm text-muted-foreground">{v.label}</label>
                <span className="text-sm font-medium text-foreground">{values[v.id]}{v.unit}</span>
              </div>
              <Slider
                value={[values[v.id]]}
                onValueChange={(val) => setVariable(v.id, val)}
                min={v.min}
                max={v.max}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                <span>{v.min}{v.unit}</span>
                <span>{v.max}{v.unit}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Results Panel */}
        <div className="lg:col-span-3 space-y-6">
          {/* Summary Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="atlas-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Confidence</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{confidence.toFixed(0)}%</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="atlas-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Risk Level</span>
              </div>
              <span className={`atlas-chip text-sm font-semibold ${riskLevel.color}`}>{riskLevel.label}</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="atlas-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Scenarios Modeled</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">3</p>
            </motion.div>
          </div>

          {/* Outcome Cards */}
          <div className="space-y-4">
            {results.map((result, i) => {
              const isPositive = result.label === "Food Security Score" || result.label === "GDP Growth Impact";
              const baseIsGood = isPositive ? result.base > 50 : result.base < 50;
              return (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="atlas-card p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-sm font-semibold text-foreground">{result.label}</h3>
                    {baseIsGood ? (
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-400" />
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-[10px] uppercase tracking-wider text-emerald-400 mb-1">Best Case</p>
                      <p className="font-display text-xl font-bold text-emerald-400">{result.best.toFixed(1)}</p>
                      <p className="text-[10px] text-muted-foreground">{result.unit}</p>
                    </div>
                    <div className="text-center border-x border-border">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Base Case</p>
                      <p className="font-display text-xl font-bold text-foreground">{result.base.toFixed(1)}</p>
                      <p className="text-[10px] text-muted-foreground">{result.unit}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] uppercase tracking-wider text-red-400 mb-1">Worst Case</p>
                      <p className="font-display text-xl font-bold text-red-400">{result.worst.toFixed(1)}</p>
                      <p className="text-[10px] text-muted-foreground">{result.unit}</p>
                    </div>
                  </div>
                  {/* Visual bar */}
                  <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden relative">
                    <div
                      className="absolute h-full bg-emerald-500/30 rounded-full"
                      style={{ left: `${Math.max(0, (result.best / (isPositive ? 100 : 500)) * 100)}%`, width: "2px" }}
                    />
                    <div
                      className="h-full bg-primary/60 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, Math.abs(result.base / (isPositive ? 100 : 500)) * 100)}%` }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Second-order effects */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="atlas-card p-6">
            <h3 className="font-display text-sm font-semibold text-foreground mb-4">Second-Order Effects</h3>
            <div className="space-y-3">
              {[
                { effect: "Healthcare system strain", probability: Math.min(90, results[0].base * 1.1), direction: "negative" },
                { effect: "Agricultural yield change", probability: Math.abs(results[1].base - 50) * 1.5, direction: results[1].base > 50 ? "positive" : "negative" },
                { effect: "Migration pressure", probability: Math.min(85, results[3].base / 4), direction: "negative" },
                { effect: "Investment climate shift", probability: Math.abs(results[2].base) * 4, direction: results[2].base > 0 ? "positive" : "negative" },
              ].map(item => (
                <div key={item.effect} className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full shrink-0 ${item.direction === "positive" ? "bg-emerald-400" : "bg-red-400"}`} />
                  <span className="text-sm text-muted-foreground flex-1">{item.effect}</span>
                  <span className="text-xs font-medium text-foreground">{item.probability.toFixed(0)}% likely</span>
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
