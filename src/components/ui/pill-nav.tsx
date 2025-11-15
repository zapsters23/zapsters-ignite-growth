"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

interface NavItem {
  label: string;
  href: string;
}

export const PillNav: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Internships", href: "#services" },
    { label: "CTF", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="relative">
        {/* Glass morphism pill container */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
          {/* Logo */}
          <a href="/">
            <motion.div
              className="mr-4 px-4 py-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Zapsters
              </span>
            </motion.div>
          </a>

          {/* Divider */}
          <div className="h-6 w-px bg-white/10" />

          {/* Nav items */}
          <div className="relative flex items-center gap-1 ml-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveIndex(index)}
                className="relative"
              >
                <motion.div
                  className="relative z-10 px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
                  style={{
                    color: activeIndex === index ? "#fff" : "rgba(255, 255, 255, 0.6)",
                  }}
                  whileHover={{ color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.div>

                {/* Active indicator */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-white/10"
                    transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 blur-xl opacity-50 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full" />
      </div>
    </motion.nav>
  );
};
