import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  serviceImageFilters,
  serviceImages,
  type ServiceImageCategory,
} from "@/data/serviceImages";
import { cn } from "@/lib/utils";

type GalleryFilter = "All" | ServiceImageCategory;

const ServiceGallery = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("All");

  const visibleImages = useMemo(() => {
    if (activeFilter === "All") {
      return serviceImages;
    }

    return serviceImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="py-20 px-4 bg-secondary/40 dark:bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recent <span className="text-gradient">Service Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse real Edson Maintenance projects by service type.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {serviceImageFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                activeFilter === filter
                  ? "border-primary bg-primary text-primary-foreground shadow-md"
                  : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/10"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((image, index) => (
            <motion.article
              key={image.fileName}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.25) }}
              viewport={{ once: true, margin: "120px" }}
              className="service-card overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-primary">
                  {image.category}
                </p>
                <h3 className="mt-1 text-base font-bold text-foreground">
                  {image.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery;
