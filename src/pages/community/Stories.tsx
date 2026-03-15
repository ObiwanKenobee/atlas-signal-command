import { motion } from "framer-motion";
import { BookOpen, MapPin, Clock, Heart, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stories = [
  {
    id: 1,
    title: "How Nakuru's Water Committee Turned Intelligence into Action",
    excerpt: "When Atlas Agency's diagnostic revealed hidden contamination pathways, the Nakuru County Water Committee used the findings to secure emergency funding and deploy filtration infrastructure across 12 vulnerable zones.",
    region: "Nakuru County",
    date: "March 2026",
    impact: "12 zones protected",
    beneficiaries: "45,000 people",
    category: "Water & Sanitation",
    image: "💧",
  },
  {
    id: 2,
    title: "Mapping the Invisible: How Mombasa Fisherfolk Reclaimed Their Coast",
    excerpt: "Community signals about declining fish yields were dismissed as seasonal until Atlas's coastal erosion analysis revealed a systemic pattern. The resulting report triggered a multi-agency response.",
    region: "Mombasa County",
    date: "February 2026",
    impact: "Policy change achieved",
    beneficiaries: "8,200 fisherfolk",
    category: "Ocean & Water",
    image: "🐟",
  },
  {
    id: 3,
    title: "From Data to Dignity: Rural Health Access in Garissa",
    excerpt: "Atlas's health access gap analysis mapped the exact locations where maternal care was most needed. The report led to three new mobile health units being deployed within 90 days.",
    region: "Garissa County",
    date: "January 2026",
    impact: "3 health units deployed",
    beneficiaries: "22,000 women",
    category: "Human Health",
    image: "🏥",
  },
  {
    id: 4,
    title: "The Road That Connected Two Economies",
    excerpt: "When Atlas identified that a single deteriorating road was responsible for 40% of agricultural transport losses in Bungoma, the county government fast-tracked repairs. Farmers saw immediate improvement in market access.",
    region: "Bungoma County",
    date: "December 2025",
    impact: "$2.3M in saved losses",
    beneficiaries: "15,000 farmers",
    category: "Infrastructure",
    image: "🛤️",
  },
];

export default function CommunityStories() {
  return (
    <>
      <section className="atlas-section atlas-grid-bg relative pb-10">
        <div className="atlas-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="atlas-chip mb-4 inline-flex"><BookOpen className="h-3 w-3 mr-1" /> Impact Stories</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Intelligence <span className="atlas-gradient-text">in action</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real stories of how community signals, diagnostic intelligence, and strategic action created measurable change.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 bg-background">
        <div className="atlas-container">
          <div className="space-y-8">
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="atlas-card p-8 hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="text-5xl lg:text-6xl">{story.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="atlas-chip text-xs">{story.category}</span>
                      <span className="atlas-chip text-xs"><MapPin className="h-3 w-3 mr-1" />{story.region}</span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground mb-3">{story.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{story.excerpt}</p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Impact</p>
                        <p className="text-sm font-semibold text-foreground">{story.impact}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Beneficiaries</p>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><Users className="h-3 w-3 text-primary" />{story.beneficiaries}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Date</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{story.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Have a story to tell?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">If your community has experienced change through intelligence-driven action, we'd love to hear about it.</p>
            <Link to="/community/submit">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Submit Your Story <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
