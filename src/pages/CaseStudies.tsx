import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Zap, BarChart3 } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  problem: string;
  strategy: string;
  execution: string;
  results: { metric: string; value: string }[];
}

const caseStudies: Record<string, CaseStudy> = {
  "social-media-growth": {
    title: "Social Media Growth Case Study",
    client: "Fashion E-Commerce Brand",
    industry: "E-Commerce / Fashion",
    problem: "A mid-size fashion brand was struggling with declining organic reach and low engagement rates across Instagram and TikTok. Their in-house team couldn't keep up with content demands.",
    strategy: "We deployed our AI content automation pipeline to generate on-brand social content at scale, combined with AI-powered scheduling that posted at optimal engagement windows.",
    execution: "Implemented AI influencer videos for product showcases, automated A/B testing of captions and hashtags, and deployed chatbot for DM engagement. The entire content pipeline was automated while maintaining brand authenticity.",
    results: [
      { metric: "Follower Growth", value: "300%" },
      { metric: "Engagement Rate", value: "5.2x" },
      { metric: "Revenue from Social", value: "+180%" },
      { metric: "Content Output", value: "10x" },
    ],
  },
  "restaurant-marketing": {
    title: "Restaurant Marketing Case Study",
    client: "Multi-Location Restaurant Chain",
    industry: "Food & Beverage",
    problem: "A 5-location restaurant chain was losing foot traffic to competitors with stronger digital presence. Their Google ratings were declining and online ordering was minimal.",
    strategy: "Comprehensive local SEO overhaul, AI-powered Google Ads targeting nearby customers, social media revamp with AI-generated food content, and automated review management.",
    execution: "Optimized Google Business profiles, launched hyper-local ad campaigns, deployed AI chatbot for reservations and orders, and created viral-worthy food content using AI video tools.",
    results: [
      { metric: "Online Orders", value: "+250%" },
      { metric: "Foot Traffic", value: "+60%" },
      { metric: "Google Rating", value: "4.8★" },
      { metric: "Ad ROAS", value: "8.5x" },
    ],
  },
  "website-redesign": {
    title: "Website Redesign Case Study",
    client: "B2B SaaS Company",
    industry: "Technology",
    problem: "An outdated website with poor UX was causing high bounce rates and low conversion. The sales team reported that prospects lost confidence after visiting the site.",
    strategy: "Complete redesign with conversion-optimized UX, AI chatbot integration for lead qualification, and performance optimization for Core Web Vitals.",
    execution: "Built a modern React application with glassmorphism design, implemented smart CTAs with AI personalization, added live chat with lead scoring, and achieved perfect Lighthouse scores.",
    results: [
      { metric: "Conversion Rate", value: "+340%" },
      { metric: "Bounce Rate", value: "-65%" },
      { metric: "Page Load Speed", value: "0.8s" },
      { metric: "Qualified Leads/mo", value: "200+" },
    ],
  },
  "seo-growth": {
    title: "SEO Growth Case Study",
    client: "Real Estate Agency",
    industry: "Real Estate",
    problem: "Minimal organic search presence with no keywords ranking on page 1. The agency relied entirely on paid ads for lead generation, making customer acquisition expensive.",
    strategy: "AI-powered keyword research and content clustering, technical SEO audit, local SEO optimization, and automated content generation for long-tail keywords.",
    execution: "Published 100+ AI-generated SEO articles, fixed 200+ technical issues, built 50+ quality backlinks, and optimized for local search across 3 cities.",
    results: [
      { metric: "Organic Traffic", value: "+800%" },
      { metric: "Page 1 Keywords", value: "150+" },
      { metric: "Organic Leads/mo", value: "300+" },
      { metric: "Cost per Lead", value: "-70%" },
    ],
  },
};

const caseStudyList = Object.entries(caseStudies).map(([slug, cs]) => ({ slug, ...cs }));

const CaseStudyDetail = ({ data }: { data: CaseStudy }) => (
  <>
    <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-wide text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-4">
          Case Study • {data.industry}
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-heading font-bold gradient-text">
          {data.title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-muted-foreground">{data.client}</motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-4 gap-6 mb-16">
          {data.results.map((r) => (
            <motion.div key={r.metric} variants={fadeUp} className="glass rounded-xl p-6 text-center">
              <div className="text-2xl font-heading font-bold gradient-text">{r.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{r.metric}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="space-y-12">
          {[
            { icon: Target, title: "The Problem", content: data.problem },
            { icon: Zap, title: "Strategy", content: data.strategy },
            { icon: BarChart3, title: "Execution", content: data.execution },
          ].map((section) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <section.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card/20 text-center">
      <div className="container-narrow">
        <h2 className="text-3xl font-heading font-bold">Ready for <span className="gradient-text">Similar Results</span>?</h2>
        <div className="mt-8">
          <Button variant="hero" size="lg" asChild>
            <Link to="/free-strategy-call">Book Free Strategy Call</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

const CaseStudies = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug && caseStudies[slug]) {
    return <Layout><CaseStudyDetail data={caseStudies[slug]} /></Layout>;
  }

  return (
    <Layout>
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-wide text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold">
            Case <span className="gradient-text">Studies</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real strategies. Measurable results. See how we've helped businesses grow with AI-powered marketing.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6">
            {caseStudyList.map((cs) => (
              <motion.div key={cs.slug} variants={fadeUp}>
                <Link to={`/case-studies/${cs.slug}`} className="glass rounded-2xl p-6 group hover:border-primary/30 transition-all block h-full">
                  <span className="text-xs text-primary font-medium">{cs.industry}</span>
                  <h3 className="text-lg font-heading font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">{cs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{cs.problem}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {cs.results.slice(0, 2).map((r) => (
                      <div key={r.metric} className="bg-muted/30 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold gradient-text">{r.value}</div>
                        <div className="text-[10px] text-muted-foreground">{r.metric}</div>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-primary font-medium flex items-center gap-1">Read full study <ArrowRight className="w-3 h-3" /></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
