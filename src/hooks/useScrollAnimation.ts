"use client";

import { useEffect } from "react";
import { useAnimation, type AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function useScrollAnimation(threshold = 0.2): [(node: HTMLElement | null) => void, AnimationControls] {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return [ref, controls];
} 