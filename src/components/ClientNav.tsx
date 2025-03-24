"use client";

import { useEffect, useState, useCallback } from "react";
import { SideNav } from "./SideNav";
import { MobileNav } from "./MobileNav";

export function ClientNav() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    // Find the entry with the largest intersection ratio
    const visibleEntries = entries.filter(entry => entry.isIntersecting);
    
    if (visibleEntries.length > 0) {
      // Sort by intersection ratio, highest first
      const sortedEntries = visibleEntries.sort(
        (a: IntersectionObserverEntry, b: IntersectionObserverEntry) => 
          b.intersectionRatio - a.intersectionRatio
      );
      
      const mostVisible = sortedEntries[0];
      if (mostVisible.intersectionRatio >= 0.2) {
        setActiveSection(mostVisible.target.id);
      }
    }
  }, []);

  useEffect(() => {
    // Create an IntersectionObserver with multiple thresholds for smoother transitions
    const observer = new IntersectionObserver(handleIntersection, {
      // Use multiple thresholds for more precise detection
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
      // Adjusted rootMargin to better detect sections
      rootMargin: "-20% 0px"
    });

    // Get all sections and observe them
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, [handleIntersection]);

  return (
    <>
      <SideNav activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
    </>
  );
} 