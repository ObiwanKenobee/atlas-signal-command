import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight, Tag, BookOpen, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const categories = ["All", "Analysis", "Field Reports", "Opinion", "Data Stories", "Sector Deep Dives"];

const featuredArticle = {
  title: "The Invisible Crisis: How Soil Degradation Is Reshaping East African Economies",
  excerpt: "A deep investigation into the cascading effects of topsoil loss across Kenya's highland regions — and why current interventions are failing.",
  category: "Analysis",
  date: "March 28, 2026",
  readTime: "12 min read",
  author: "Atlas Intelligence Team",
};

const articles = [
  { title: "Water Stress Mapping: What Satellite Data Reveals About Sahel Aquifers", category: "Data Stories", date: "Mar 22, 2026", readTime: "8 min", featured: false },
  { title: "Inside the Governance Gap: Why County-Level Coordination Keeps Failing", category: "Opinion", date: "Mar 18, 2026", readTime: "6 min", featured: false },
  { title: "Field Report: Mombasa Coastal Erosion — 2026 Assessment", category: "Field Reports", date: "Mar 14, 2026", readTime: "10 min", featured: false },
  { title: "The Economics of Disease Surveillance in Rural East Africa", category: "Analysis", date: "Mar 10, 2026", readTime: "9 min", featured: false },
  { title: "Infrastructure Decay Index: Sub-Saharan Africa's Hidden Risk", category: "Sector Deep Dives", date: "Mar 5, 2026", readTime: "14 min", featured: false },
  { title: "Community Signals: How Local Intelligence Changes Policy Response", category: "Data Stories", date: "Feb 28, 2026", readTime: "7 min", featured: false },
  { title: "Agricultural Supply Chains Under Pressure: A Visual Analysis", category: "Data Stories", date: "Feb 22, 2026", readTime: "5 min", featured: false },
  { title: "The Case for Anticipatory Governance in East Africa", category: "Opinion", date: "Feb 18, 2026", readTime: "8 min", featured: false },
  { title: "Field Report: Lake Victoria Fishery Assessment Q1 2026", category: "Field Reports", date: "Feb 12, 2026", readTime: "11 min", featured: false },
];

export default function Media() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();

  const filtered = articles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || a.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Subscribed", description: "You'll receive our intelligence briefings." });
    setNewsletterEmail("");
  };

  return (
    <>
      {/* Hero */}
      <section className="atlas-section atlas-grid-bg relative pb-10">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="atlas-chip mb-4 inline-flex">Atlas Media</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Intelligence <span className="atlas-gradient-text">Briefings</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Analysis, field reports, and data stories from the systems that shape civilisations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 py-12 bg-background">
        <div className="atlas-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="atlas-card p-8 md:p-12 border-primary/20 hover:border-primary/40 transition-all group cursor-pointer">
            <div className="flex items-center gap-2 mb-4">
              <span className="atlas-chip text-xs bg-primary/15 text-primary border-primary/30">Featured</span>
              <span className="atlas-chip text-xs">{featuredArticle.category}</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
              {featuredArticle.title}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl">{featuredArticle.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{featuredArticle.author}</span>
              <span>{featuredArticle.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featuredArticle.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="px-6 pb-20 bg-background">
        <div className="atlas-container">
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setActiveCategory(c)} className={`atlas-chip cursor-pointer transition-colors ${activeCategory === c ? "bg-primary/15 text-primary border-primary/30" : ""}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((article, i) => (
              <motion.div key={article.title} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="atlas-card p-6 group hover:border-primary/30 transition-all cursor-pointer flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="atlas-chip text-xs">{article.category}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime}</span>
                  <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground"><p>No articles match your search.</p></div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-20 bg-card/50">
        <div className="atlas-container max-w-2xl mx-auto text-center">
          <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Intelligence Briefing</h2>
          <p className="text-muted-foreground mb-8">Weekly analysis and signals from our research team. No noise, only actionable intelligence.</p>
          <form onSubmit={handleNewsletter} className="flex gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="your@email.com" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} className="bg-secondary border-border text-foreground flex-1" required />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Subscribe <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
