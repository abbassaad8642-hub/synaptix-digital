import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, ArrowRight, Building2, ShoppingCart, Stethoscope, GraduationCap, Home, Utensils } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

interface SEOPage {
  title: string;
  metaDesc: string;
  heroTitle: string;
  heroSub: string;
  explanation: string;
  whyUs: string[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const pages: Record<string, SEOPage> = {
  "digital-marketing-agency-dubai": {
    title: "Digital Marketing Agency Dubai | Fixels Media",
    metaDesc: "Leading digital marketing agency in Dubai offering AI-powered marketing, SEO, social media, and web development services. Get a free strategy call today.",
    heroTitle: "Premier Digital Marketing Agency in Dubai",
    heroSub: "AI-powered marketing strategies that deliver measurable results for businesses across Dubai and the UAE.",
    explanation: "Fixels Media is a full-service digital marketing agency based in Dubai, combining cutting-edge AI technology with proven marketing strategies. We help businesses of all sizes—from startups to enterprises—grow their digital presence, generate qualified leads, and increase revenue through data-driven campaigns across all digital channels.",
    whyUs: ["AI-powered campaign optimization", "Local Dubai market expertise", "Multilingual capabilities (English, Arabic)", "Transparent reporting & analytics", "Dedicated account management", "Proven track record with 100+ projects"],
    process: [
      { step: "Discovery & Audit", desc: "Deep dive into your business, competitors, and market landscape." },
      { step: "Strategy Development", desc: "Custom digital marketing roadmap with clear KPIs and milestones." },
      { step: "Execution", desc: "Launch campaigns across channels with AI-powered optimization." },
      { step: "Report & Optimize", desc: "Monthly performance reviews with continuous improvement." },
    ],
    faqs: [
      { q: "What makes Fixels Media different from other Dubai agencies?", a: "We leverage AI technology across all our services, delivering faster results and better ROI than traditional agencies." },
      { q: "Do you work with businesses outside of Dubai?", a: "Yes! While based in Dubai, we serve clients globally across the UAE, USA, Europe, and Asia." },
      { q: "What's the minimum budget to work with you?", a: "We offer flexible packages starting from $1,000/month, tailored to your business goals." },
      { q: "How quickly can I expect results?", a: "Most clients see measurable improvements within 30-60 days, with significant growth within 3-6 months." },
    ],
  },
  "ai-marketing-agency": {
    title: "AI Marketing Agency | Fixels Media",
    metaDesc: "Transform your marketing with AI. Fixels Media offers AI-powered advertising, content automation, chatbots, and predictive analytics for global brands.",
    heroTitle: "The AI Marketing Agency That Delivers Results",
    heroSub: "Harness the power of artificial intelligence to supercharge your marketing campaigns and outperform competitors.",
    explanation: "As a specialized AI marketing agency, Fixels Media integrates artificial intelligence into every aspect of digital marketing. From AI-powered ad optimization and content generation to predictive analytics and automated lead nurturing, we help brands achieve exponential growth with smarter, data-driven strategies that traditional agencies simply can't match.",
    whyUs: ["Proprietary AI marketing frameworks", "Cross-platform AI optimization", "Real-time performance AI adjustments", "AI content that converts", "Predictive customer analytics", "Automated lead scoring & nurturing"],
    process: [
      { step: "AI Readiness Assessment", desc: "Evaluate your current marketing stack and AI integration opportunities." },
      { step: "AI Strategy Design", desc: "Create a custom AI marketing roadmap aligned with your goals." },
      { step: "AI Implementation", desc: "Deploy AI tools and automation across your marketing channels." },
      { step: "Continuous Learning", desc: "AI systems improve over time, delivering compounding results." },
    ],
    faqs: [
      { q: "Is AI marketing right for my business?", a: "AI marketing benefits businesses of all sizes. Even small budgets see improved efficiency and ROI with AI optimization." },
      { q: "Will AI replace my marketing team?", a: "No—AI enhances your team's capabilities, automating repetitive tasks so they can focus on strategy and creativity." },
      { q: "What AI tools do you use?", a: "We use a combination of proprietary and industry-leading AI tools, customized to each client's needs." },
      { q: "How do you measure AI marketing success?", a: "Through clear KPIs: ROAS, cost per acquisition, conversion rates, and overall revenue growth." },
    ],
  },
  "social-media-marketing-agency": {
    title: "Social Media Marketing Agency | Fixels Media",
    metaDesc: "Expert social media marketing agency with AI-powered strategies. Grow your brand on Instagram, TikTok, LinkedIn, and more. Start with a free audit.",
    heroTitle: "Social Media Marketing Agency That Grows Brands",
    heroSub: "AI-driven social media strategies that build engaged communities and drive real business results.",
    explanation: "Fixels Media's social media marketing combines AI-powered content creation with strategic community management to build brands that stand out. We manage everything from content strategy and creation to paid social campaigns, influencer partnerships, and performance analytics across all major platforms.",
    whyUs: ["AI-powered content calendars", "Multi-platform management", "Influencer partnership network", "Paid social campaign optimization", "Real-time engagement tracking", "Monthly performance reporting"],
    process: [
      { step: "Social Audit", desc: "Analyze your current social presence, competitors, and audience." },
      { step: "Content Strategy", desc: "Create a data-driven content plan with AI-optimized scheduling." },
      { step: "Create & Publish", desc: "Produce engaging content and manage your social channels." },
      { step: "Analyze & Scale", desc: "Track performance and scale what works." },
    ],
    faqs: [
      { q: "Which social media platforms do you manage?", a: "We manage Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube, and Pinterest." },
      { q: "Do you create the content?", a: "Yes, we handle end-to-end content creation including copywriting, graphics, and video." },
      { q: "How often will you post?", a: "Posting frequency depends on your plan, typically 3-7 times per week per platform." },
      { q: "Can you manage paid social ads too?", a: "Absolutely. We offer integrated organic and paid social media management." },
    ],
  },
  "seo-agency-dubai": {
    title: "SEO Agency Dubai | Fixels Media",
    metaDesc: "Top SEO agency in Dubai. AI-powered SEO strategies that improve rankings, drive organic traffic, and generate qualified leads. Free SEO audit available.",
    heroTitle: "Top SEO Agency in Dubai",
    heroSub: "AI-powered SEO strategies that deliver page-one rankings and sustainable organic growth.",
    explanation: "Fixels Media is Dubai's premier AI-powered SEO agency. We combine technical SEO expertise with AI-driven content strategies to help businesses rank higher on Google, attract qualified traffic, and convert visitors into customers. Our data-driven approach ensures every optimization decision is backed by evidence.",
    whyUs: ["AI-powered keyword research", "Technical SEO excellence", "Content-first strategy", "Local SEO for Dubai/UAE", "Link building campaigns", "Monthly ranking reports"],
    process: [
      { step: "SEO Audit", desc: "Comprehensive technical, content, and backlink analysis." },
      { step: "Keyword Strategy", desc: "AI-driven keyword research and topic clustering." },
      { step: "On-Page & Content", desc: "Optimize existing pages and create new SEO content." },
      { step: "Off-Page & Monitor", desc: "Build authority through link building and track rankings." },
    ],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Typically 3-6 months for significant rankings improvements, with some quick wins in the first month." },
      { q: "Do you guarantee page-one rankings?", a: "No legitimate SEO agency guarantees rankings, but we have a strong track record of achieving page-one results." },
      { q: "Do you offer local SEO for Dubai businesses?", a: "Yes, local SEO is a core specialty. We optimize for Dubai, Abu Dhabi, and UAE-wide searches." },
      { q: "What reporting do you provide?", a: "Monthly reports covering rankings, traffic, conversions, and action items." },
    ],
  },
  "web-design-agency-dubai": {
    title: "Web Design Agency Dubai | Fixels Media",
    metaDesc: "Premium web design agency in Dubai. We create stunning, conversion-optimized websites with modern design and cutting-edge technology. Get a free quote.",
    heroTitle: "Premium Web Design Agency in Dubai",
    heroSub: "Stunning, conversion-optimized websites that elevate your brand and drive business growth.",
    explanation: "Fixels Media designs and develops premium websites that combine beautiful aesthetics with conversion-focused functionality. From corporate websites to e-commerce platforms, we create digital experiences that reflect your brand's positioning and convert visitors into customers.",
    whyUs: ["Conversion-optimized design", "Mobile-first responsive layouts", "Lightning-fast performance", "SEO-friendly architecture", "Custom CMS solutions", "Ongoing maintenance & support"],
    process: [
      { step: "Discovery", desc: "Understand your brand, goals, and target audience." },
      { step: "Design", desc: "Create stunning mockups and interactive prototypes." },
      { step: "Develop", desc: "Build with modern tech for performance and scalability." },
      { step: "Launch & Support", desc: "Thoroughly test, launch, and provide ongoing support." },
    ],
    faqs: [
      { q: "How long does a website project take?", a: "Typically 4-8 weeks depending on complexity, from design to launch." },
      { q: "Do you build e-commerce websites?", a: "Yes, we build custom e-commerce solutions on Shopify, WooCommerce, and custom platforms." },
      { q: "Will my website be SEO-friendly?", a: "Absolutely. SEO best practices are built into every website we create." },
      { q: "Do you offer website maintenance?", a: "Yes, we offer monthly maintenance packages including updates, security, and support." },
    ],
  },
  "ai-advertising-agency": {
    title: "AI Advertising Agency | Fixels Media",
    metaDesc: "AI-powered advertising agency maximizing your ROAS across Google, Meta, TikTok and more. Machine learning optimization for better ad performance.",
    heroTitle: "AI Advertising Agency for Maximum ROAS",
    heroSub: "Machine learning algorithms that optimize your ad spend in real-time for maximum return on investment.",
    explanation: "Fixels Media's AI advertising service uses advanced machine learning to manage and optimize your ad campaigns across Google, Meta, TikTok, LinkedIn, and more. Our AI systems analyze thousands of data points in real-time, automatically adjusting bids, audiences, and creatives to maximize your return on ad spend.",
    whyUs: ["Real-time AI bid management", "Multi-platform optimization", "Predictive audience targeting", "Automated creative testing", "Budget allocation AI", "Transparent performance reporting"],
    process: [
      { step: "Account Audit", desc: "Analyze current ad performance and identify opportunities." },
      { step: "AI Setup", desc: "Configure AI optimization systems across your ad platforms." },
      { step: "Launch & Learn", desc: "Launch campaigns while AI learns from performance data." },
      { step: "Scale Winners", desc: "AI automatically scales winning campaigns and pauses underperformers." },
    ],
    faqs: [
      { q: "Which ad platforms do you support?", a: "Google Ads, Meta (Facebook/Instagram), TikTok, LinkedIn, Twitter/X, and programmatic display." },
      { q: "What's the minimum ad budget?", a: "We recommend a minimum ad spend of $2,000/month for AI optimization to be effective." },
      { q: "How does AI improve ad performance?", a: "AI analyzes patterns in real-time, making bid and targeting adjustments faster than any human could." },
      { q: "Can I see what the AI is doing?", a: "Yes, we provide full transparency with detailed reports on all AI-driven optimizations." },
    ],
  },
};

const industries = [
  { icon: ShoppingCart, name: "E-Commerce" },
  { icon: Building2, name: "Real Estate" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: Home, name: "Hospitality" },
  { icon: Utensils, name: "Restaurants" },
];

const SEOLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = pages[slug || ""];

  if (!page) {
    return (
      <Layout>
        <section className="section-padding text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground">Page Not Found</h1>
          <Button variant="hero" className="mt-6" asChild><Link to="/">Go Home</Link></Button>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-wide text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold">
            <span className="gradient-text">{page.heroTitle}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {page.heroSub}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild><Link to="/free-strategy-call">Book Free Strategy Call</Link></Button>
            <Button variant="hero-outline" size="lg" asChild><Link to="/free-marketing-audit">Get Free Audit</Link></Button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">What We Offer</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{page.explanation}</p>
        </div>
      </section>

      <section className="section-padding bg-card/20">
        <div className="container-narrow">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">Why Choose <span className="gradient-text">Fixels Media</span></h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.whyUs.map((item) => (
              <motion.div key={item} variants={fadeUp} className="glass rounded-xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {page.process.map((p, i) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 text-lg font-bold text-primary">{i + 1}</div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{p.step}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/20">
        <div className="container-narrow">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="glass rounded-xl p-4 text-center hover:border-primary/30 transition-colors">
                <ind.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-xs font-medium text-foreground">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {page.faqs.map((faq) => (
              <details key={faq.q} className="glass rounded-xl p-4 group">
                <summary className="font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary ml-2 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/20">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold">Ready to Get <span className="gradient-text">Started</span>?</h2>
            <p className="mt-4 text-muted-foreground">Fill in the form and our team will reach out within 24 hours.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SEOLanding;
