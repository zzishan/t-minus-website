"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Welcome", countdown: 10 },
  { id: "vision", label: "Vision", countdown: 9 },
  { id: "about", label: "About", countdown: 8 },
  { id: "leadership", label: "Leadership", countdown: 7 },
  { id: "services", label: "Services", countdown: 6 },
  { id: "process", label: "Process", countdown: 5 },
  { id: "technology", label: "Technology", countdown: 4 },
  { id: "innovations", label: "Innovations", countdown: 3 },
  { id: "case-studies", label: "Case Studies", countdown: 2 },
  { id: "testimonials", label: "Testimonials", countdown: 1 },
  { id: "contact", label: "Launch", countdown: 0 },
];

interface MobileNavProps {
  activeSection: string;
}

export function MobileNav({ activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 lg:hidden"
      >
        <div className="space-y-2">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-8 h-0.5 bg-electric-teal"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-8 h-0.5 bg-electric-teal"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-8 h-0.5 bg-electric-teal"
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-midnight/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 h-full w-64 bg-charcoal z-50 lg:hidden"
            >
              <div className="p-8 space-y-6">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-2 transition-colors",
                      activeSection === section.id
                        ? "text-electric-teal"
                        : "text-gray-400 hover:text-electric-teal"
                    )}
                  >
                    <span className="font-display">{section.label}</span>
                    <span className="text-sm">T-{section.countdown}</span>
                  </a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 