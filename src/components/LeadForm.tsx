import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

const services = [
  "AI Marketing Automation", "AI Influencer Videos", "AI Ads Optimization", "AI Chatbots",
  "AI Content Automation", "Social Media Marketing", "SEO", "Web Design",
  "Web Development", "Branding & Graphic Design", "Video Production",
];

const budgets = ["Under $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"];

const LeadForm = ({ title, subtitle, compact }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  const inputClass = "w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";

  return (
    <div className="glass rounded-2xl p-6 md:p-8">
      {title && <h3 className="text-xl font-heading font-bold text-foreground mb-1">{title}</h3>}
      {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}
      <form onSubmit={handleSubmit} className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <input required placeholder="Full Name *" className={inputClass} />
        <input placeholder="Company Name" className={inputClass} />
        <input required type="email" placeholder="Email *" className={inputClass} />
        <input placeholder="Phone / WhatsApp" className={inputClass} />
        <input placeholder="Country" className={inputClass} />
        <select required className={inputClass} defaultValue="">
          <option value="" disabled>Service Interested In *</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {!compact && (
          <>
            <select className={inputClass} defaultValue="">
              <option value="" disabled>Monthly Budget</option>
              {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
            <select className={inputClass} defaultValue="">
              <option value="" disabled>Preferred Contact Method</option>
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="phone">Phone Call</option>
            </select>
          </>
        )}
        <div className={compact ? "" : "md:col-span-2"}>
          <textarea placeholder="Project Brief" rows={3} className={inputClass} />
        </div>
        <div className={compact ? "" : "md:col-span-2"}>
          <Button type="submit" variant="hero" size="lg" className="w-full">Submit Inquiry</Button>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
