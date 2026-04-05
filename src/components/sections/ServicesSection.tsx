import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  IconPaint,
  IconDroplet,
  IconWind,
  IconBuildingSkyscraper,
  IconTool,
  IconSparkles,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Professional Painting",
    description: "Interior & exterior painting for houses, pavements, steel surfaces, and roofing. Premium finishes that last.",
    icon: <IconPaint className="h-6 w-6 text-primary" />,
  },
  {
    title: "Waterproofing",
    description: "Expert waterproofing solutions to protect your home from water damage and dampness year-round.",
    icon: <IconDroplet className="h-6 w-6 text-primary" />,
  },
  {
    title: "Cupboard & Steel Painting",
    description: "Precision painting for cupboards, steel structures, and fixtures with durable, high-quality coatings.",
    icon: <IconBuildingSkyscraper className="h-6 w-6 text-primary" />,
  },
  {
    title: "Gutter & Roof Cleaning",
    description: "Professional gutter and roof cleaning to prevent blockages, leaks, and structural damage.",
    icon: <IconWind className="h-6 w-6 text-primary" />,
  },
  {
    title: "Window Cleaning",
    description: "Crystal-clear, streak-free window cleaning for a brighter, more welcoming home or office.",
    icon: <IconSparkles className="h-6 w-6 text-primary" />,
  },
  {
    title: "Varnishing & Decker",
    description: "Quality varnishing and deck treatments that protect and beautify wooden surfaces.",
    icon: <IconTool className="h-6 w-6 text-primary" />,
  },
];

const Service = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/service dark:border-neutral-800 hover:bg-secondary/50 transition-colors duration-300 rounded-lg",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/service:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 dark:from-primary/10 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/service:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/5 dark:from-primary/10 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-primary">{icon}</div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/service:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/service:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/service:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services at a <span className="text-gradient">Glance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive home maintenance and painting solutions tailored for Cape Town homes and businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Service key={service.title} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, hsl(229 60% 35%), hsl(245 60% 40%))" }}
          >
            <span>View All Services</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
