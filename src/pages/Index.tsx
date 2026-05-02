import { useState } from "react";
import { MindMap } from "@/components/mindmap/MindMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Sparkles,
  Network,
  Code2,
  ChevronRight,
  Zap,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

type Filter = "All" | "NCIIP+" | "NCIA+";
type Category = "All" | "Programming" | "Infrastructure" | "AI" | "Web" | "Database" | "Security";

const categories: Category[] = ["All", "Programming", "Web", "AI", "Database", "Infrastructure", "Security"];

const Index = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="font-display font-black text-lg md:text-xl leading-none text-foreground tracking-tight">
              NETLEAP <span className="text-destructive">IT</span> TRAINING SOLUTIONS
            </h1>
            <p className="text-[10px] text-muted-foreground tracking-wider mt-1">
              RISE TOWARDS YOUR IT GOAL
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <span>Nashik</span>
            <span className="opacity-30">•</span>
            <span>Sangamner</span>
            <span className="opacity-30">•</span>
            <span>Chh. Sambhaji Nagar</span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold mb-4">
              <Sparkles className="w-3 h-3" />
              VISUAL CAREER GUIDANCE TOOL
            </div>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight text-foreground leading-[1.05]">
              Explore Your IT Career
              <br />
              <span className="text-gradient-gold">As a Mind Map</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
              Click any course to discover the skills you'll gain, tools you'll master, and the
              career roadmap from beginner to expert.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Stat icon={<Code2 className="w-4 h-4" />} label="18+ Courses" />
              <Stat icon={<Zap className="w-4 h-4" />} label="2 Career Tracks" />
              <Stat icon={<GraduationCap className="w-4 h-4" />} label="100% Placement Focus" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
              Package:
            </span>
            {(["All", "NCIIP+", "NCIA+"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filter === f
                    ? f === "NCIA+"
                      ? "bg-gradient-red text-white shadow-red-glow"
                      : f === "NCIIP+"
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "bg-foreground text-background"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses, skills..."
              className="pl-9 bg-card border-border"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1 self-center">
            Category:
          </span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                category === c
                  ? "bg-accent text-accent-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-accent/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-muted-foreground">
          <LegendDot color="bg-destructive" label="Center" />
          <LegendDot color="bg-primary" label="Course Package" />
          <LegendDot color="bg-success" label="Skills" />
          <LegendDot color="bg-accent" label="Career Path" />
          <span className="ml-auto hidden md:block">
            Tip: Drag to pan • Scroll to zoom • Click courses to explore
          </span>
        </div>

        <MindMap filter={filter} search={search} category={category} />
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-8 py-8 bg-card/30">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-display font-bold text-foreground mb-2">NETLEAP IT</h4>
            <p className="text-muted-foreground">
              Skill Today • Excel Tomorrow • Succeed Forever
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-foreground mb-2">Call Us</h4>
            <p className="text-muted-foreground">+91 8329349481</p>
            <p className="text-muted-foreground">+91 9156194812</p>
            <p className="text-muted-foreground">+91 8766939070</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-foreground mb-2">Visit</h4>
            <p className="text-muted-foreground">www.netleapsoultions.com</p>
            <p className="text-muted-foreground mt-2">Nashik • Sangamner • Chh. Sambhaji Nagar</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Stat = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-border text-foreground">
    <span className="text-primary">{icon}</span>
    <span className="font-medium">{label}</span>
  </div>
);

const LegendDot = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-1.5">
    <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
    <span>{label}</span>
  </div>
);

export default Index;
