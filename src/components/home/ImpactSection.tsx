import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const metrics = [
  { value: 47, suffix: "+", label: "Active intelligence operations" },
  { value: 12, suffix: "", label: "Sectors covered" },
  { value: 230, suffix: "+", label: "Diagnostic reports delivered" },
  { value: 18, suffix: "", label: "Countries of operation" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="atlas-metric text-foreground">
      {count}{suffix}
    </div>
  );
}

export function ImpactSection() {
  return (
    <section className="atlas-section border-y border-border bg-card atlas-topo-bg">
      <div className="atlas-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <Counter target={metric.value} suffix={metric.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
