import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { IconCheck, IconPaint, IconPhone } from "@tabler/icons-react";
import founderImage from "@/assets/nickpro.png";

const About = () => {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 px-4 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(hsl(229 60% 60% / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(229 60% 60% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-6xl font-black text-white mb-6"
          >
            About <span className="text-gradient-accent">NickPro</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed"
          >
            Cape Town's trusted tiling, ceiling, painting, and flooring professionals - building and renovating with pride since day one.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NickPro Services was born out of a simple belief: every homeowner
              deserves quality workmanship at a fair price. Based in Cape Town, we focus on
              reliable tiling, ceiling, painting, and flooring work.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team brings practical skill, clean workmanship, and honest communication
              to every renovation project. Visit nickpro.co.za or contact us for a free quote.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our site says it all: <strong className="text-foreground">"nickpro.co.za"</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="service-card mx-auto max-w-md rounded-2xl border border-border bg-card p-6 sm:p-8 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="relative h-36 w-36 flex-shrink-0 overflow-hidden rounded-full border-4 border-accent/70 bg-muted shadow-lg">
                  <img
                    src={founderImage}
                    alt="NickPro, founder of NickPro"
                    loading="lazy"
                    decoding="async"
                    width={689}
                    height={666}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-primary">
                    Founder
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-black text-foreground">
                    NickPro
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">
                    Founder, NickPro
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    NickPro is built on reliable workmanship,
                    honest service, and practical renovation solutions for homes and
                    businesses.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              "Neat wall and floor tiling",
              "Ceiling installation and repair",
              "Interior and exterior painting",
              "Flooring preparation and finishing",
              "Free quotes - always no obligation",
              "Visit nickpro.co.za for service details",
            ].map((item) => (
              <div key={item} className="flex items-start space-x-3 p-4 rounded-xl bg-card border border-border">
                <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, hsl(229 60% 35%), hsl(245 60% 40%))" }}>
                  <IconCheck className="h-3.5 w-3.5 text-white" />
                </span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features reuse */}
      <FeaturesSection />

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-muted-foreground mb-8">
            Call us or fill in a quick form and we'll come to you for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27621987570"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full font-bold text-foreground transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, hsl(0 82% 54%), hsl(355 78% 44%))" }}>
              <IconPhone className="h-5 w-5" />
              <span>Call +27 62 198 7570</span>
            </a>
            <Link to="/contact"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, hsl(229 60% 35%), hsl(245 60% 40%))" }}>
              <span>Get a Free Quote Online</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
