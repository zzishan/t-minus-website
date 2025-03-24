"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 
    | "fade-in" 
    | "slide-up" 
    | "slide-up-delay"
    | "slide-down" 
    | "slide-left" 
    | "slide-right" 
    | "scale-in" 
    | "blur-in"
    | "rotate-in"
    | "bounce-in";
  delay?: number;
  threshold?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);
  
  const animationClass = isVisible ? `animate-${animation}` : "opacity-0";
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};
  
  return (
    <div 
      ref={ref} 
      className={`${animationClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
} 