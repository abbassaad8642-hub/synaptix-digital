import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  howItWorks: { step: string; desc: string }[];
  useCases: string[];
}

const serviceData: Record<string, ServiceData> = {
  "ai-marketing-automation": {
    title: "AI Marketing Automation",
    tagline: "Scale your marketing with intelligent automation",
    description: "Our AI Marketing Automation service uses machine learning to automate lead scoring, email sequences, social media posting, and campaign optimization. Stop wasting hours on repetitive tasks and let AI handle the heavy lifting while you focus on strategy.",
    benefits: ["Automated lead scoring & nurturing", "Smart email sequence optimization", "AI-driven campaign scheduling", "Real-time performance adjustments", "Cross-channel automation", "Predictive customer behavior analysis"],
    howItWorks: [
      { step: "Audit", desc: "We analyze your current marketing stack and identify automation opportunities." },
      { step: "Strategy", desc: "Design AI-powered workflows tailored to your sales funnel." },
      { step: "Implementation", desc: "Deploy and integrate automation tools across your channels." },
      { step: "Optimize", desc: "Continuously refine with AI learning from your data." },
    ],
    useCases: ["E-commerce abandoned cart recovery", "B2B lead nurturing sequences", "Social media content scheduling", "Customer segmentation & personalization"],
  },
  "ai-influencer-videos": {
    title: "AI Influencer Videos",
    tagline: "Create viral influencer content without the influencer",
    description: "Leverage AI-generated influencer avatars to create authentic, engaging video content at scale. Our technology creates hyper-realistic AI presenters that represent your brand 24/7, across languages and platforms, without scheduling conflicts or talent fees.",
    benefits: ["Hyper-realistic AI avatars", "Multi-language content", "Consistent brand messaging", "Unlimited content volume", "Fast turnaround times", "Cost-effective production"],
    howItWorks: [
      { step: "Design", desc: "Create your custom AI influencer persona and brand voice." },
      { step: "Script", desc: "AI generates optimized scripts based on trending topics." },
      { step: "Produce", desc: "Generate high-quality videos with your AI influencer." },
      { step: "Distribute", desc: "Publish across platforms with optimized formats." },
    ],
    useCases: ["Product demonstrations", "Social media reels & shorts", "Educational content", "Multilingual marketing campaigns"],
  },
  "ai-ads-optimization": {
    title: "AI Ads Optimization",
    tagline: "Maximize ROAS with machine learning",
    description: "Our AI-powered advertising optimization uses advanced algorithms to manage bids, target audiences, and test creatives in real-time across Google, Meta, TikTok, and more. Get better results from every dollar spent.",
    benefits: ["Real-time bid management", "Predictive audience targeting", "Automated A/B testing", "Cross-platform optimization", "Budget allocation AI", "Creative performance analysis"],
    howItWorks: [
      { step: "Connect", desc: "Integrate your ad accounts across all platforms." },
      { step: "Analyze", desc: "AI analyzes historical data and identifies patterns." },
      { step: "Optimize", desc: "Automated adjustments to bids, audiences, and creatives." },
      { step: "Scale", desc: "Expand winning campaigns while cutting losers." },
    ],
    useCases: ["E-commerce product ads", "Lead generation campaigns", "App install campaigns", "Brand awareness campaigns"],
  },
  "ai-chatbots": {
    title: "AI Chatbots",
    tagline: "24/7 intelligent conversations that convert",
    description: "Deploy AI-powered chatbots that understand context, qualify leads, answer complex queries, and guide prospects through your sales funnel—all while learning and improving from every interaction.",
    benefits: ["Natural language understanding", "Lead qualification automation", "Multi-platform deployment", "CRM integration", "Custom training on your data", "Seamless human handoff"],
    howItWorks: [
      { step: "Train", desc: "Feed the AI with your brand knowledge, FAQs, and sales scripts." },
      { step: "Deploy", desc: "Launch on your website, WhatsApp, Instagram, and more." },
      { step: "Qualify", desc: "Chatbot engages visitors and identifies high-intent leads." },
      { step: "Convert", desc: "Warm leads are handed to your sales team with full context." },
    ],
    useCases: ["Website lead capture", "Customer support automation", "Appointment booking", "E-commerce product recommendations"],
  },
  "ai-content-automation": {
    title: "AI Content Automation",
    tagline: "Scale your content engine with AI",
    description: "Generate blog posts, social media content, email campaigns, and ad copy at scale while maintaining your brand voice. Our AI content system learns your tone, style, and audience preferences to produce on-brand content consistently.",
    benefits: ["Brand-voice trained AI", "Multi-format content", "SEO-optimized articles", "Social media calendars", "Email campaign copy", "Performance-based iteration"],
    howItWorks: [
      { step: "Learn", desc: "AI studies your brand voice, past content, and audience data." },
      { step: "Plan", desc: "Generate content calendars and topic clusters." },
      { step: "Create", desc: "Produce content across all formats and channels." },
      { step: "Refine", desc: "Analyze performance and optimize future content." },
    ],
    useCases: ["Blog content at scale", "Social media post generation", "Email newsletter automation", "Product description writing"],
  },
};

const fallback: ServiceData = {
  title: "Service",
  tagline: "Professional digital marketing solutions",
  description: "Contact us to learn more about this service.",
  benefits: ["Expert team", "Proven results", "Custom strategies", "Transparent reporting"],
  howItWorks: [
    { step: "Discover", desc: "Understand your goals." },
    { step: "Strategy", desc: "Create a tailored plan." },
    { step: "Execute", desc: "Implement with precision." },
    { step: "Optimize", desc: "Continuously improve." },
  ],
  useCases: ["Various industries"],
};

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = serviceData[slug || ""] || fallback;

  return (
    <Layout>
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-4">
            AI Service
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold gradient-text">
            {data.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.tagline}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{data.description}</p>
              <h3 className="text-lg font-heading font-semibold text-foreground mt-8 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {data.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-6">How It Works</h3>
              <div className="space-y-6">
                {data.howItWorks.map((step, i) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{i + 1}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{step.step}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-heading font-semibold text-foreground mt-8 mb-4">Use Cases</h3>
              <div className="flex flex-wrap gap-2">
                {data.useCases.map((u) => (
                  <span key={u} className="glass rounded-full px-3 py-1 text-xs text-muted-foreground">{u}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/20">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold">Get Started with <span className="gradient-text">{data.title}</span></h2>
            <p className="mt-4 text-muted-foreground">Fill in the form below and our team will reach out within 24 hours.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
