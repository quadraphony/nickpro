import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  IconShieldCheck,
  IconCurrencyDollar,
  IconStar,
  IconClock,
  IconUsers,
  IconAward,
  IconHome,
  IconHeart,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Free Quotes",
    description: "No obligation quotes available. Contact us today and get your free estimate.",
    icon: <IconCurrencyDollar />,
  },
  {
    title: "Professional Finish",
    description: "Every job is completed to the highest standard with attention to detail.",
    icon: <IconStar />,
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates without compromising on quality. Best value in Cape Town.",
    icon: <IconAward />,
  },
  {
    title: "Experienced Team",
    description: "Skilled, reliable professionals with years of hands-on experience.",
    icon: <IconUsers />,
  },
  {
    title: "Flexible Scheduling",
    description: "We work around your schedule. Weekday or weekend — we're available.",
    icon: <IconClock />,
  },
  {
    title: "Guaranteed Results",
    description: "We don't leave until you're 100% satisfied with the work done.",
    icon: <IconShieldCheck />,
  },
  {
    title: "Local Cape Town Experts",
    description: "We know Cape Town's climate and buildings. Roofing, waterproofing, painting — done right.",
    icon: <IconHome />,
  },
  {
    title: "Customer-First Approach",
    description: "Your satisfaction and peace of mind are our top priority on every job.",
    icon: <IconHeart />,
  },
];

const Feature = ({
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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 hover:bg-secondary/50 transition-colors duration-300 rounded-lg",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 dark:from-primary/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/5 dark:from-primary/10 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-primary">{icon}</div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">EDSON</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that professional expertise and genuine care make for your home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
