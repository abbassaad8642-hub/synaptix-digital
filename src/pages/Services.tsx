import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles, TrendingUp, MessageSquare, Video, Globe, Search, Palette, Code, PenTool, Zap } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const aiServices = [
  { icon: Bot, title: "AI Marketing Automation", desc: "Automate campaigns, lead scoring, and customer journeys with intelligent AI workflows.", href: "/services/ai-marketing-automation" },
  { icon: Video, title: "AI Influencer Videos", desc: "Create viral-ready influencer content using AI-generated presenters and scripts.", href: "/services/ai-influencer-videos" },
  { icon: TrendingUp, title: "AI Ads Optimization", desc: "Maximize ROAS with machine learning that optimizes bids, audiences, and creative in real-time.", href: "/services/ai-ads-optimization" },
  { icon: MessageSquare, title: "AI Chatbots", desc: "24/7 intelligent chatbots that qualify leads, answer queries, and drive conversions.", href: "/services/ai-chatbots" },
  { icon: Sparkles, title: "AI Content Automation", desc: "Scale your content marketing with AI that generates blog posts, social content, and ad copy.", href: "/services/ai-content-automation" },
];

const coreServices = [
  { icon: Globe, title: "Social Media Marketing", desc: "Strategic social media management that builds communities and drives engagement.", href: "/services/social-media-marketing" },
  { icon: Search, title: "SEO", desc: "Data-driven SEO strategies that improve rankings, traffic, and conversions.", href: "/services/seo" },
  { icon: Palette, title: "Web Design", desc: "Stunning, conversion-optimized websites that reflect your brand's premium positioning.", href: "/services/web-design" },
  { icon: Code, title: "Web Development", desc: "Custom web applications built with modern tech stacks for performance and scalability.", href: "/services/web-development" },
  { icon: PenTool, title: "Branding & Graphic Design", desc: "Memorable brand identities and visual assets that stand out in crowded markets.", href: "/services/branding" },
  { icon: Video, title: "Video Production", desc: "Professional video content from concept to delivery—ads, explainers, and social reels.", href: "/services/video-production" },
];

const Services = () => (
  <Layout>
    <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-wide text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold">
          Our <span className="gradient-text">Services</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          End-to-end AI-powered digital marketing and development solutions for global brands.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-8 flex items-center gap-2"><Sparkles className="w-5 h-5 text-primary" /> AI Services</h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aiServices.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <Link to={s.href} className="glass rounded-2xl p-6 group hover:border-primary/40 transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="text-2xl font-heading font-bold text-foreground mb-8 flex items-center gap-2"><Zap className="w-5 h-5 text-accent" /> Core Services</h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <Link to={s.href} className="glass rounded-2xl p-6 group hover:border-accent/40 transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-card/20 text-center">
      <div className="container-narrow">
        <h2 className="text-3xl font-heading font-bold">Need a <span className="gradient-text">Custom Solution</span>?</h2>
        <p className="mt-4 text-muted-foreground">Let's discuss your unique needs and craft a strategy tailored to your business goals.</p>
        <div className="mt-8">
          <Button variant="hero" size="lg" asChild>
            <Link to="/free-strategy-call">Book Free Strategy Call</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
