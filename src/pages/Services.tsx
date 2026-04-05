import React from "react";
import { motion } from "framer-motion";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import { IconPaint, IconDroplet, IconWind, IconBuildingSkyscraper, IconTool, IconSparkles } from "@tabler/icons-react";

const serviceDetails = [
  {
    icon: <IconPaint className="h-8 w-8" />,
    title: "Professional Painting",
    desc: "We paint houses, pavements, roofs, steel structures, and cupboards to a premium finish using top-grade materials. We prep surfaces properly, protect your furniture and floors, and leave your space spotless.",
    items: ["Interior rooms & ceilings", "Exterior walls & fascias", "Pavements & driveways", "Roof painting"],
  },
  {
    icon: <IconDroplet className="h-8 w-8" />,
    title: "Waterproofing",
    desc: "Cape Town's rains can cause serious damage. Our waterproofing services keep your home sealed and protected all year round — flat roofs, parapets, balconies, and more.",
    items: ["Flat roof waterproofing", "Parapet & balcony sealing", "Crack repairs", "Long-lasting coatings"],
  },
  {
    icon: <IconBuildingSkyscraper className="h-8 w-8" />,
    title: "Cupboard & Steel Painting",
    desc: "Give old cupboards and metal surfaces a brand new lease on life. We strip, prime, and apply durable paint for a factory-fresh look that lasts years.",
    items: ["Kitchen cupboards", "Steel doors & gates", "Burglar bars", "Built-in wardrobes"],
  },
  {
    icon: <IconWind className="h-8 w-8" />,
    title: "Gutter & Roof Cleaning",
    desc: "Blocked gutters cause leaks and structural damage. Our team safely clears your gutters and cleans roof surfaces to keep water flowing away from your home.",
    items: ["Gutter unblocking", "Roof surface cleaning", "Moss & lichen removal", "Drain inspection"],
  },
  {
    icon: <IconSparkles className="h-8 w-8" />,
    title: "Window Cleaning",
    desc: "Crystal-clear, streak-free windows transform the look of your home or business. We use safe, professional methods for windows at any height.",
    items: ["Residential windows", "Commercial shopfronts", "Skylights", "Frames & sills"],
  },
  {
    icon: <IconTool className="h-8 w-8" />,
    title: "Varnishing & Decking",
    desc: "Protect and beautify your timber surfaces. Our varnishing service restores wooden decks, doors, and furniture to a rich, durable finish.",
    items: ["Outdoor decking", "Wooden doors & windows", "Garden furniture", "Timber fences"],
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
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed"
          >
            Comprehensive home maintenance solutions for Cape Town homes and businesses.
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
                      style={{ background: "hsl(44 95% 55%)" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default Services;
