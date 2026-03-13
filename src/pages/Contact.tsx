import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-wide text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold">
          Get In <span className="gradient-text">Touch</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Ready to accelerate your growth? Reach out and let's discuss your project.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <LeadForm title="Send Us a Message" subtitle="Fill in the details and we'll get back to you within 24 hours." />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:sales@fixelsmedia.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">sales@fixelsmedia.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">UAE</p>
                    <a href="tel:+971562418335" className="text-sm text-muted-foreground hover:text-primary transition-colors">+971 56 241 8335</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Pakistan</p>
                    <a href="tel:+923102000369" className="text-sm text-muted-foreground hover:text-primary transition-colors">+92 310 200 0369</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Offices</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">UAE Office</p>
                    <p className="text-sm text-muted-foreground">Compass Building, Al Shohada Road, Ras Al Khaimah, UAE</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Pakistan Office</p>
                    <p className="text-sm text-muted-foreground">Plot 99, 100, Mehran Town, Sector 6 F, Korangi, Karachi, 75290</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <Globe className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Global Reach</h3>
              <p className="text-sm text-muted-foreground">We serve clients across UAE, USA, Europe, and Asia with a fully remote global team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
