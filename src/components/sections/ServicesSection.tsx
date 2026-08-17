import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  IconPaint,
  IconBuildingSkyscraper,
  IconTool,
  IconHome,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Tiling",
    description: "Wall and floor tiling for bathrooms, kitchens, living areas, patios, and feature spaces.",
    icon: <IconBuildingSkyscraper className="h-6 w-6 text-primary" />,
  },
  {
    title: "Ceiling",
    description: "Ceiling installation and repair work completed neatly for homes, offices, and renovations.",
    icon: <IconHome className="h-6 w-6 text-primary" />,
  },
  {
    title: "Professional Painting",
    description: "Interior and exterior painting with careful preparation, clean lines, and durable finishes.",
    icon: <IconPaint className="h-6 w-6 text-primary" />,
  },
  {
    title: "Flooring",
    description: "Flooring preparation, installation, and finishing for practical, polished interior spaces.",
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services at a <span className="text-gradient">Glance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tiling, ceiling, painting, and flooring solutions for Cape Town homes and businesses.
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
