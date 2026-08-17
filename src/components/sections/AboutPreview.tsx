import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconPaint, IconStar, IconCheck } from "@tabler/icons-react";

const AboutPreview = () => {
  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "400+" },
    { label: "Years in Business", value: "10+" },
    { label: "Service Areas", value: "All CPT" },
  ];

  const values = [
    "Free, no-obligation quotes on every job",
    "Only premium-grade paints and materials",
    "Respectful of your home and your time",
    "Full clean-up after every project",
  ];

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left – Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-3"
              >
                About NickPro
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl font-bold text-foreground"
              >
                Cape Town's{" "}
                <span className="text-gradient">Renovation</span>{" "}
                Specialists
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              At NickPro, we believe every homeowner deserves a beautiful,
              well-maintained property. With over a decade serving Cape Town communities,
              we've built a reputation for quality, reliability, and honest pricing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              From fresh painting to tiling, ceiling, and flooring upgrades,
              our dedicated team brings professionalism and pride to every project.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {values.map((val) => (
                <li key={val} className="flex items-start space-x-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <IconCheck className="h-3 w-3 text-accent" />
                  </span>
                  <span className="text-sm text-muted-foreground">{val}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, hsl(229 60% 35%), hsl(245 60% 40%))" }}
              >
                <span>Learn More About Us</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right – Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl border bg-card text-center service-card"
                >
                  <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Process card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card p-6 service-card"
            >
              <div className="flex items-center space-x-2 mb-5">
                <IconPaint className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground">How It Works</h3>
              </div>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Get a Free Quote", desc: "Call or email us — we'll assess your project at no cost." },
                  { step: "2", title: "Site Visit", desc: "We visit your property to plan the work and finalise pricing." },
                  { step: "3", title: "We Get to Work", desc: "Our team completes the job efficiently and professionally." },
                  { step: "4", title: "Final Review", desc: "You inspect the work. We only finish when you're happy." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "linear-gradient(135deg, hsl(229 60% 35%), hsl(245 60% 40%))" }}>
                      {item.step}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
