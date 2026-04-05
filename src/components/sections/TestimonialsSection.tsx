import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconQuote, IconChevronLeft, IconChevronRight, IconStar } from "@tabler/icons-react";

const testimonials = [
  {
    quote: "Edson's team painted our entire house inside and out. The finish is absolutely flawless — clean lines, no drips, and they left the place spotless afterwards. Best painters in Cape Town!",
    name: "Nomvula Dlamini",
    designation: "Homeowner, Bellville",
  },
  {
    quote: "We had serious waterproofing problems on our flat roof. Edson came, assessed it quickly, and fixed it permanently. No more leaks, even after the big storms. Highly recommend!",
    name: "Pieter van der Berg",
    designation: "Property Owner, Somerset West",
  },
  {
    quote: "Affordable, professional and fast. They cleaned our gutters and repainted the exterior in two days. The attention to detail was incredible. Will definitely use again.",
    name: "Thandi Mokoena",
    designation: "Homeowner, Mitchells Plain",
  },
  {
    quote: "I needed my office cupboards and steel doors painted. Edson's team arrived on time, covered everything carefully, and delivered a premium finish. Couldn't be happier.",
    name: "David Okafor",
    designation: "Business Owner, City Bowl",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from Cape Town homeowners and business owners
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl border bg-card shadow-lg overflow-hidden">
            {/* Gold top bar */}
            <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, hsl(229 60% 35%), hsl(44 95% 55%))" }} />

            <div className="p-10 md:p-14">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="h-5 w-5 text-accent fill-current" style={{ color: "hsl(44 95% 55%)" }} />
                ))}
              </div>

              <div className="relative min-h-[120px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                  >
                    <IconQuote className="h-8 w-8 text-primary/30 mx-auto mb-4" />
                    <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-6 max-w-3xl mx-auto">
                      "{testimonials[current].quote}"
                    </p>
                    <div>
                      <p className="font-bold text-foreground">{testimonials[current].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[current].designation}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-4 mt-10">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <IconChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? "24px" : "8px",
                        background: i === current ? "hsl(229 60% 35%)" : "hsl(229 15% 80%)",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <IconChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
