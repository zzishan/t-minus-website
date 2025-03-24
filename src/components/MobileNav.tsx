"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "vision", label: "Vision" },
  { id: "about", label: "About" },
  { id: "leadership", label: "Leadership" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "technology", label: "Technology" },
  { id: "innovations", label: "Innovations" },
  { id: "case-studies", label: "Case Studies" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

interface MobileNavProps {
  activeSection: string;
}

export function MobileNav({ activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50 lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex items-center justify-center w-12 h-12 bg-midnight border border-electric-teal/20 rounded-full"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="flex flex-col items-center justify-center"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }}
            className="block w-6 h-0.5 bg-electric-teal mb-1.5"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="block w-6 h-0.5 bg-electric-teal mb-1.5"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 },
            }}
            className="block w-6 h-0.5 bg-electric-teal"
          />
        </motion.div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 right-0 w-64 h-screen bg-midnight border-l border-electric-teal/20 shadow-xl"
          >
            <div className="flex flex-col pt-20 px-6">
              <ul className="space-y-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 px-4 rounded-md transition-colors ${
                        activeSection === section.id
                          ? "bg-electric-teal/10 text-electric-teal font-medium"
                          : "text-gray-300 hover:bg-electric-teal/5 hover:text-electric-teal"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 