"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface AnimatedContentProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedContent({ className, children, delay = 0 }: AnimatedContentProps) {
  return (
    <motion.div
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 