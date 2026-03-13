import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, BarChart3 } from "lucide-react";

const FreeMarketingAudit = () => (
  <Layout>
    <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-4">
              <BarChart3 className="w-3 h-3" /> Free Audit
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Get a Free <span className="gradient-text">Marketing Audit</span>
            </h1>
            <p className="mt-4 text-muted-foreground">Discover what's working, what's not, and where the biggest growth opportunities are hiding in your marketing.</p>
            <ul className="mt-6 space-y-3">
              {["Website & SEO analysis", "Social media performance review", "Ad spend efficiency audit", "Competitor benchmarking", "AI readiness assessment", "Custom recommendations report"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <LeadForm title="Request Your Free Audit" subtitle="Get your personalized marketing audit report within 48 hours." />
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default FreeMarketingAudit;
