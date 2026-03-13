import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const posts = [
  { slug: "ai-marketing-trends-2026", title: "AI Marketing Trends 2026: What Every Business Needs to Know", excerpt: "The marketing landscape is evolving rapidly with AI. From predictive analytics to AI-generated content, discover the trends that will define 2026.", category: "AI Marketing", readTime: "8 min", date: "Mar 10, 2026" },
  { slug: "how-ai-is-changing-advertising", title: "How AI is Changing Advertising: A Complete Guide", excerpt: "Artificial intelligence is revolutionizing how brands create, target, and optimize their advertising campaigns. Learn how to leverage AI for better ROAS.", category: "Advertising", readTime: "10 min", date: "Mar 5, 2026" },
  { slug: "best-social-media-strategies", title: "Best Social Media Strategies for Businesses in 2026", excerpt: "From AI-powered content calendars to influencer partnerships, discover the social media strategies driving real business results this year.", category: "Social Media", readTime: "7 min", date: "Feb 28, 2026" },
  { slug: "ai-influencers-explained", title: "AI Influencers Explained: The Future of Brand Partnerships", excerpt: "AI-generated influencers are reshaping brand marketing. Learn what they are, how they work, and why brands are investing in virtual brand ambassadors.", category: "AI", readTime: "6 min", date: "Feb 20, 2026" },
  { slug: "seo-strategy-for-businesses", title: "SEO Strategy for Businesses: From Zero to Page One", excerpt: "A comprehensive guide to building an SEO strategy that drives organic traffic and generates qualified leads for your business.", category: "SEO", readTime: "12 min", date: "Feb 15, 2026" },
];

const Blog = () => (
  <Layout>
    <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-wide text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold">
          <span className="gradient-text">Blog</span> & Insights
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Expert insights on AI marketing, digital strategy, and business growth.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article key={post.slug} variants={fadeUp} className={`glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}>
              <div className="p-6">
                <span className="text-xs font-medium text-primary">{post.category}</span>
                <h2 className={`font-heading font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors ${i === 0 ? "text-xl md:text-2xl" : "text-lg"}`}>
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <span className="text-sm text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Blog;
