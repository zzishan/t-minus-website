"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function AnimatedSection({ id, className, children }: AnimatedSectionProps) {
  const [ref, controls] = useScrollAnimation(0.1);

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={cn("h-screen flex items-center justify-center relative", className)}
    >
      {children}
    </motion.section>
  );
} 