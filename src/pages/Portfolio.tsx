import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const categories = ["All", "Social Media", "Web Development", "Branding", "Video Production", "AI Marketing"];

const projects = [
  { title: "E-Commerce Social Growth", category: "Social Media", industry: "E-Commerce", problem: "Low engagement and stagnant follower growth.", solution: "AI-powered content strategy with automated posting and engagement tools.", results: "300% follower growth, 5x engagement rate in 3 months." },
  { title: "Restaurant Chain Web Platform", category: "Web Development", industry: "Food & Beverage", problem: "Outdated website losing online orders.", solution: "Modern responsive web platform with integrated ordering system.", results: "150% increase in online orders, 40% lower bounce rate." },
  { title: "Fashion Brand Identity", category: "Branding", industry: "Fashion", problem: "Inconsistent brand identity across touchpoints.", solution: "Complete brand overhaul including logo, typography, and guidelines.", results: "Brand recognition increased 200%, consistent across 12 channels." },
  { title: "Real Estate Video Campaign", category: "Video Production", industry: "Real Estate", problem: "Low-quality property listings losing leads.", solution: "Professional video tours with AI-enhanced editing and drone footage.", results: "80% more inquiries, 3x faster property sales." },
  { title: "SaaS AI Marketing Suite", category: "AI Marketing", industry: "Technology", problem: "High CAC and inefficient ad spend.", solution: "AI-optimized campaigns across Google and Meta with predictive bidding.", results: "60% reduction in CAC, 4x ROAS improvement." },
  { title: "Healthcare Social Campaign", category: "Social Media", industry: "Healthcare", problem: "Low patient acquisition through digital.", solution: "Educational content strategy with AI chatbot for appointment booking.", results: "200+ new patients/month, 90% chatbot satisfaction." },
  { title: "Fintech Web Application", category: "Web Development", industry: "Finance", problem: "Need for a secure, modern trading dashboard.", solution: "Custom React application with real-time data and advanced charting.", results: "10,000+ active users, 99.9% uptime." },
  { title: "Automotive Brand Campaign", category: "AI Marketing", industry: "Automotive", problem: "Declining market share in digital channels.", solution: "AI-powered multi-channel campaign with influencer partnerships.", results: "35% market share increase, 500% social reach growth." },
];

import { useState } from "react";

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-wide text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold">
            Our <span className="gradient-text">Portfolio</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses. Explore our work across industries and services.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === c ? "bg-primary text-primary-foreground neon-glow" : "glass text-muted-foreground hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>

          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <motion.div key={p.title} variants={fadeUp} layout className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary glass rounded-full px-2 py-0.5">{p.category}</span>
                  <span className="text-xs text-muted-foreground">• {p.industry}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{p.title}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-muted-foreground font-medium">Problem:</span> <span className="text-muted-foreground">{p.problem}</span></p>
                  <p><span className="text-muted-foreground font-medium">Solution:</span> <span className="text-muted-foreground">{p.solution}</span></p>
                  <p><span className="text-primary font-medium">Results:</span> <span className="text-foreground">{p.results}</span></p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card/20 text-center">
        <div className="container-narrow">
          <h2 className="text-3xl font-heading font-bold">Want Results Like <span className="gradient-text">These</span>?</h2>
          <p className="mt-4 text-muted-foreground">Let's discuss how we can achieve similar outcomes for your business.</p>
          <div className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-strategy-call">Book Free Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
