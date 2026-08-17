import React from "react";
import { motion } from "framer-motion";
import ServiceGallery from "@/components/ServiceGallery";
import ContactSection from "@/components/sections/ContactSection";

const Gallery = () => {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-24 px-4 hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
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
            Project <span className="text-gradient-accent">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed"
          >
            Real tiling, ceiling, painting, and flooring work completed by NickPro.
          </motion.p>
        </div>
      </section>

      <ServiceGallery />
      <ContactSection />
    </main>
  );
};

export default Gallery;
