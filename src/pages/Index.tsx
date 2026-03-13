import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Bot, Zap, TrendingUp, BarChart3, Users, Globe, ArrowRight, Sparkles, Brain, Target, MessageSquare, Palette, Video, Code, Search, PenTool } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const trustMetrics = [
  { value: "100+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Countries Served" },
  { value: "24/7", label: "Support" },
];

const aiAdvantages = [
  { icon: Target, title: "AI‑Powered Ad Optimization", desc: "Machine learning algorithms that continuously optimize your ad spend for maximum ROI." },
  { icon: PenTool, title: "AI Content Generation", desc: "Generate high-quality marketing content at scale with brand-consistent AI tools." },
  { icon: Bot, title: "AI Marketing Automation", desc: "Automate repetitive tasks, nurture leads, and scale campaigns effortlessly." },
  { icon: BarChart3, title: "Predictive Analytics", desc: "Data‑driven forecasting to anticipate market trends and customer behavior." },
  { icon: Users, title: "Automated Lead Nurturing", desc: "Smart sequences that engage prospects at the right time with the right message." },
];

const aiServices = [
  { icon: Bot, title: "AI Marketing Automation", href: "/services/ai-marketing-automation" },
  { icon: Video, title: "AI Influencer Videos", href: "/services/ai-influencer-videos" },
  { icon: TrendingUp, title: "AI Ads Optimization", href: "/services/ai-ads-optimization" },
  { icon: MessageSquare, title: "AI Chatbots", href: "/services/ai-chatbots" },
  { icon: Sparkles, title: "AI Content Automation", href: "/services/ai-content-automation" },
];

const coreServices = [
  { icon: Globe, title: "Social Media Marketing", href: "/services/social-media-marketing" },
  { icon: Search, title: "SEO", href: "/services/seo" },
  { icon: Palette, title: "Web Design", href: "/services/web-design" },
  { icon: Code, title: "Web Development", href: "/services/web-development" },
  { icon: PenTool, title: "Branding & Graphic Design", href: "/services/branding" },
  { icon: Video, title: "Video Production", href: "/services/video-production" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>
      <div className="container-wide relative">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-6">
            <Sparkles className="w-3 h-3" /> AI‑Powered Agency
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-balance">
            AI‑Powered Digital{" "}
            <span className="gradient-text">Marketing & Development</span>{" "}
            Agency
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Fixels Media helps brands grow faster using AI‑driven marketing, automation, performance advertising, and high‑converting digital experiences.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-strategy-call">Book Free Strategy Call</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/portfolio">View Our Work <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Trust Metrics */}
    <section className="py-8 border-b border-border bg-card/30">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustMetrics.map((m) => (
            <div key={m.label}>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">{m.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 mt-6 text-xs text-muted-foreground">
          <Globe className="w-3 h-3 text-primary" /> Serving clients in <span className="text-foreground font-medium">UAE</span> • <span className="text-foreground font-medium">USA</span> • <span className="text-foreground font-medium">Europe</span> • <span className="text-foreground font-medium">Asia</span>
        </div>
      </div>
    </section>

    {/* AI Edge */}
    <section className="section-padding">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-4">
            <Brain className="w-3 h-3" /> The AI Edge
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold">
            Why AI‑Enabled Marketing <span className="gradient-text">Wins</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Traditional marketing leaves money on the table. Our AI‑powered approach delivers smarter campaigns, faster results, and better ROI.
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiAdvantages.map((a) => (
            <motion.div key={a.title} variants={fadeUp} className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:neon-glow transition-shadow">
                <a.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-card/20">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold">
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Comprehensive AI and digital marketing solutions tailored for global brands.
          </motion.p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-lg font-heading font-semibold text-primary mb-6 flex items-center gap-2"><Sparkles className="w-4 h-4" /> AI Services</h3>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiServices.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <Link to={s.href} className="glass rounded-xl p-5 flex items-center gap-4 group hover:border-primary/40 transition-all block">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-lg font-heading font-semibold text-accent mb-6 flex items-center gap-2"><Zap className="w-4 h-4" /> Core Services</h3>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreServices.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <Link to={s.href} className="glass rounded-xl p-5 flex items-center gap-4 group hover:border-accent/40 transition-all block">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-accent transition-colors">{s.title}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      <div className="container-narrow relative text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold">
            Ready to <span className="gradient-text">10x Your Growth</span>?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Get a free strategy call with our AI marketing experts. No commitments, just actionable insights.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-strategy-call">Book Free Strategy Call</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/free-marketing-audit">Get Free Marketing Audit</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
