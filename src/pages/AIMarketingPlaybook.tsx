import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, BookOpen } from "lucide-react";

const AIMarketingPlaybook = () => (
  <Layout>
    <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-4">
              <BookOpen className="w-3 h-3" /> Free Download
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              AI Marketing <span className="gradient-text">Playbook</span>
            </h1>
            <p className="mt-4 text-muted-foreground">Download our comprehensive guide to implementing AI in your marketing strategy. Packed with actionable frameworks and real-world case studies.</p>
            <ul className="mt-6 space-y-3">
              {["AI marketing framework", "Tool recommendations", "Implementation roadmap", "Budget planning templates", "ROI calculation models", "Real case studies"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <LeadForm title="Download the Playbook" subtitle="Enter your details to get instant access." compact />
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AIMarketingPlaybook;
