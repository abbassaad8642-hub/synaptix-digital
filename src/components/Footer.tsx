import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/40">
    <div className="container-wide section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <span className="text-xl font-heading font-bold gradient-text">Fixels Media</span>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            AI‑Powered Digital Marketing & Development Agency serving global clients across UAE, USA, Europe, and Asia.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["AI Marketing Automation", "AI Influencer Videos", "SEO", "Web Design", "Social Media Marketing", "Video Production"].map((s) => (
              <li key={s}><Link to="/services" className="hover:text-primary transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["Portfolio", "/portfolio"], ["Case Studies", "/case-studies"], ["Blog", "/blog"], ["Contact", "/contact"], ["Free Strategy Call", "/free-strategy-call"]].map(([label, href]) => (
              <li key={href}><Link to={href} className="hover:text-primary transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /> sales@fixelsmedia.com</li>
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /> +971 56 241 8335 (UAE)</li>
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /> +92 310 200 0369 (PK)</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> Compass Building, Al Shohada Road, RAK, UAE</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> Plot 99, 100, Mehran Town, Korangi, Karachi</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Fixels Media. All rights reserved.</p>
        <div className="flex gap-6">
          <span>UAE</span><span>•</span><span>USA</span><span>•</span><span>Europe</span><span>•</span><span>Asia</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
