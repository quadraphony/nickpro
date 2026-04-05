import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
