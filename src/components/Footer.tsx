import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconPaint,
  IconArrowUp,
  IconBrandWhatsapp,
  IconHome,
} from "@tabler/icons-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollButton, setShowScrollButton] = useState(false);

  const services = [
    "House Painting",
    "Waterproofing",
    "Roof Painting",
    "Gutter Cleaning",
    "Roof Cleaning",
    "Window Cleaning",
    "Varnishing Decker",
    "Steel & Cupboard Painting",
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Get Free Quote", href: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Sticky Buttons */}
      <div className="fixed right-4 bottom-8 z-50 flex flex-col space-y-3">
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="group bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
            aria-label="Scroll to top"
          >
            <IconArrowUp className="h-5 w-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        )}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/27624723536"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <IconBrandWhatsapp className="h-5 w-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>

      <footer className="bg-card border-t border-border">
        {/* Top gradient bar */}
        <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, hsl(229 60% 35%), hsl(44 95% 55%), hsl(229 60% 35%))" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, hsl(229 60% 35%), hsl(245 60% 40%))" }}>
                  <IconHome className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">EDSON</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Home Maintenance</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cape Town's trusted professionals for painting, waterproofing, and home maintenance.
                Build & Renovate — transforming spaces with quality and care.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <IconBrandFacebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <IconBrandInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/27624723536"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-green-500 transition-colors"
                >
                  <IconBrandWhatsapp className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center space-x-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base font-semibold text-foreground mb-4 flex items-center">
                <IconPaint className="h-4 w-4 mr-2 text-primary" />
                Our Services
              </h4>
              <ul className="space-y-2">
                {services.slice(0, 6).map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center space-x-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                      <span>{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold text-foreground mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <IconPhone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <a href="tel:+27624723536" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    +27 62 472 3536
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <IconMail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <a href="mailto:edsonjirry43@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                    edsonjirry43@gmail.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <IconMapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Cape Town, South Africa</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-secondary/50 rounded-lg border border-border">
                <p className="text-sm font-medium text-foreground">Business Hours</p>
                <p className="text-xs text-muted-foreground mt-1">Monday – Saturday</p>
                <p className="text-xs text-accent font-medium">Free Quotes Available</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} EDSON Home Maintenance Services. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">The Best in Cape Town</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
