import React from "react";
import { motion } from "framer-motion";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "react-router-dom";
import { IconPaint, IconBuildingSkyscraper, IconTool, IconHome } from "@tabler/icons-react";

const serviceDetails = [
  {
    icon: <IconBuildingSkyscraper className="h-8 w-8" />,
    title: "Tiling",
    desc: "We handle neat, durable wall and floor tiling for bathrooms, kitchens, patios, and interior spaces. Surfaces are prepared properly so the finish looks sharp and lasts.",
    items: ["Bathroom tiling", "Kitchen tiling", "Floor tiles", "Wall tiles"],
  },
  {
    icon: <IconHome className="h-8 w-8" />,
    title: "Ceiling",
    desc: "We install and repair ceilings for homes, offices, and renovation projects, keeping the work clean, level, and ready for painting or finishing.",
    items: ["Ceiling installation", "Ceiling repairs", "Bulkheads", "Finishing work"],
  },
  {
    icon: <IconPaint className="h-8 w-8" />,
    title: "Professional Painting",
    desc: "We paint interior and exterior spaces to a clean, professional finish using careful preparation and reliable materials.",
    items: ["Interior painting", "Exterior painting", "Ceiling painting", "Touch-ups"],
  },
  {
    icon: <IconTool className="h-8 w-8" />,
    title: "Flooring",
    desc: "We prepare and finish floors for renovation and upgrade projects, creating practical surfaces that suit the space.",
    items: ["Floor installation", "Floor preparation", "Floor repairs", "Finishing"],
  },
];

const Services = () => {
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
            Our <span className="text-gradient-accent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed"
          >
            Professional tiling, ceiling, painting, and flooring services for Cape Town homes and businesses.
          </motion.p>
        </div>
      </section>

      {/* Detailed services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceDetails.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border bg-card service-card group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 rounded-xl text-primary"
                  style={{ background: "hsl(229 60% 35% / 0.1)" }}>
                  {svc.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{svc.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{svc.desc}</p>
              <ul className="grid grid-cols-2 gap-2">
                {svc.items.map((item) => (
                  <li key={item} className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "hsl(0 82% 54%)" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8 text-center service-card">
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            View Our Recent Work
          </h2>
          <p className="text-muted-foreground mb-6">
            Browse real NickPro project images by service type.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, hsl(229 60% 35%), hsl(245 60% 40%))" }}
          >
            Open Gallery
          </Link>
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default Services;
