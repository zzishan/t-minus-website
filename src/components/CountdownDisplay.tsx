"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", countdown: 10 },
  { id: "vision", countdown: 9 },
  { id: "about", countdown: 8 },
  { id: "leadership", countdown: 7 },
  { id: "services", countdown: 6 },
  { id: "process", countdown: 5 },
  { id: "technology", countdown: 4 },
  { id: "innovations", countdown: 3 },
  { id: "case-studies", countdown: 2 },
  { id: "testimonials", countdown: 1 },
  { id: "contact", countdown: 0 },
];

interface CountdownDisplayProps {
  activeSection: string;
}

export function CountdownDisplay({ activeSection }: CountdownDisplayProps) {
  const currentSection = sections.find((section) => section.id === activeSection);
  const countdown = currentSection?.countdown ?? 10;
  const isHeroSection = activeSection === "hero";

  return (
    <motion.div
      className={cn(
        "fixed z-30 transition-all duration-500",
        isHeroSection ? "bottom-8 right-8" : "top-4 right-4"
      )}
      animate={{
        scale: isHeroSection ? 1 : 0.8,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-24 h-24">
        {/* Outer Circle */}
        <div className="absolute inset-0 rounded-full border-2 border-electric-teal/20" />
        
        {/* Progress Circle */}
        <svg
          className="absolute inset-0 -rotate-90 transform"
          viewBox="0 0 100 100"
        >
          <circle
            className="text-electric-teal/20"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <motion.circle
            className="text-electric-teal"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            strokeDasharray="283"
            initial={{ strokeDashoffset: 283 }}
            animate={{
              strokeDashoffset: 283 * (countdown / 10),
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </svg>

        {/* Countdown Number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={countdown}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              className="flex items-center"
            >
              <span className="text-2xl font-display font-bold text-electric-teal">T-{countdown}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Launch Status */}
      <div className="mt-2 text-center">
        <motion.div
          animate={{
            color: countdown === 0 ? "#39FF14" : "#00F5D4",
          }}
          className="text-sm font-display"
        >
          {countdown === 0 ? "LAUNCH READY" : "COUNTDOWN"}
        </motion.div>
      </div>
    </motion.div>
  );
} 