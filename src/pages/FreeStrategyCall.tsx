import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, Sparkles, Zap, BarChart3 } from "lucide-react";

const FreeStrategyCall = () => (
  <Layout>
    <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-4">
              <Sparkles className="w-3 h-3" /> Free • No Obligation
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Book Your Free <span className="gradient-text">Strategy Call</span>
            </h1>
            <p className="mt-4 text-muted-foreground">Get a personalized AI marketing strategy tailored to your business goals. Our experts will analyze your current marketing and identify high-impact opportunities.</p>
            <ul className="mt-6 space-y-3">
              {["30-minute expert consultation", "Custom AI marketing recommendations", "Competitor analysis insights", "Actionable growth roadmap", "No strings attached"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <LeadForm title="Schedule Your Call" subtitle="Fill in your details and we'll reach out within 24 hours." />
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default FreeStrategyCall;
