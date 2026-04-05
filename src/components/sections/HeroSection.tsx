import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconPhone, IconMail, IconArrowDown } from "@tabler/icons-react";

const Counter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 800);

    return () => {
      clearTimeout(timer);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 hero-gradient" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(229 60% 60% / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(229 60% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow"
        style={{ background: "hsl(229 60% 50%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl animate-float"
        style={{ background: "hsl(44 95% 55%)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border"
            style={{
              background: "hsl(44 95% 55% / 0.15)",
              borderColor: "hsl(44 95% 55% / 0.4)",
              color: "hsl(44 95% 70%)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span>Cape Town's Most Trusted Home Maintenance</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Build &amp;{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold">RENOVATE</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(44 95% 55%), hsl(38 95% 45%))" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Professional painters, waterproofing, and home maintenance services.
            Transforming Cape Town homes with quality craftsmanship.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="group flex items-center space-x-2 px-8 py-4 rounded-full text-base font-bold text-foreground shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, hsl(44 95% 55%), hsl(38 95% 45%))" }}
            >
              <IconMail className="h-5 w-5" />
              <span>Get a Free Quote</span>
            </Link>
            <a
              href="tel:+27624723536"
              className="group flex items-center space-x-2 px-8 py-4 rounded-full text-base font-semibold text-white border-2 transition-all hover:-translate-y-1 hover:bg-white/10"
              style={{ borderColor: "hsl(229 60% 60%)" }}
            >
              <IconPhone className="h-5 w-5" />
              <span>+27 62 472 3536</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { end: 500, suffix: "+", label: "Homes Renovated" },
            { end: 10, suffix: "+", label: "Years Experience" },
            { end: 100, suffix: "%", label: "Free Quotes" },
            { end: 1, suffix: "st", label: "In Cape Town" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-5 text-center border"
              style={{
                background: "hsl(229 60% 100% / 0.05)",
                borderColor: "hsl(229 60% 60% / 0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                <Counter end={stat.end} duration={2} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <IconArrowDown className="h-6 w-6 text-white/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
