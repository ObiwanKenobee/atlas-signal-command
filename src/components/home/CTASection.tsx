import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="atlas-section border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="atlas-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to see what's{" "}
            <span className="atlas-gradient-text">hidden?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Book a strategy session. We'll map the unseen risks and opportunities 
            in your domain — no obligations, just clarity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Book Strategy Session
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
