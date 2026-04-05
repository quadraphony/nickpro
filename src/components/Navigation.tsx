import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import {
  IconMenu2,
  IconX,
  IconHome,
  IconInfoCircle,
  IconPaint,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", href: "/", icon: IconHome },
    { name: "About", href: "/about", icon: IconInfoCircle },
    { name: "Services", href: "/services", icon: IconPaint },
    { name: "Contact", href: "/contact", icon: IconMail },
  ];

  const isActiveLink = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(229 60% 35%), hsl(245 60% 40%))" }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <div>
              <div className="text-base font-bold text-foreground leading-tight">EDSON</div>
              <div className="text-[10px] text-muted-foreground tracking-wider uppercase leading-tight">Home Maintenance</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary nav-uppercase rounded-md",
                  isActiveLink(item.href)
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:bg-secondary"
                )}
              >
                {item.name}
                {isActiveLink(item.href) && (
                  <motion.div
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
            <a
              href="tel:+27624723536"
              className="ml-2 flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, hsl(44 95% 50%), hsl(38 95% 45%))" }}
            >
              <IconPhone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            >
              {isOpen ? <IconX className="h-6 w-6" /> : <IconMenu2 className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors nav-uppercase",
                      isActiveLink(item.href)
                        ? "text-primary bg-secondary"
                        : "text-muted-foreground hover:text-primary hover:bg-secondary"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <a
                href="tel:+27624723536"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 w-full mt-2 py-2.5 rounded-lg text-sm font-bold text-foreground"
                style={{ background: "linear-gradient(135deg, hsl(44 95% 55%), hsl(38 95% 50%))" }}
              >
                <IconPhone className="h-4 w-4" />
                <span>Call +27 62 472 3536</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
