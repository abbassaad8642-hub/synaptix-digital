import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services", href: "/services",
    children: [
      { label: "AI Marketing Automation", href: "/services/ai-marketing-automation" },
      { label: "AI Influencer Videos", href: "/services/ai-influencer-videos" },
      { label: "AI Ads Optimization", href: "/services/ai-ads-optimization" },
      { label: "AI Chatbots", href: "/services/ai-chatbots" },
      { label: "AI Content Automation", href: "/services/ai-content-automation" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "SEO", href: "/services/seo" },
      { label: "Web Design", href: "/services/web-design" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Branding & Graphic Design", href: "/services/branding" },
      { label: "Video Production", href: "/services/video-production" },
    ]
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-heading font-bold gradient-text">Fixels Media</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname.startsWith("/services") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  {link.label} <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="glass-strong rounded-lg p-2 min-w-[240px] shadow-xl">
                    {link.children.map((child) => (
                      <Link key={child.href} to={child.href} className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} to={link.href} className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Button variant="hero" size="sm" asChild>
            <Link to="/free-strategy-call">Book Free Strategy Call</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden glass-strong border-t border-border overflow-hidden">
            <div className="container-wide py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-muted-foreground">
                      {link.label} <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-1">
                        {link.children.map((child) => (
                          <Link key={child.href} to={child.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-2">
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <Link to="/free-strategy-call" onClick={() => setMobileOpen(false)}>Book Free Strategy Call</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
