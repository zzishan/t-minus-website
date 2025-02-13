"use client";

import { useEffect, useState } from "react";
import { CountdownNav } from "./CountdownNav";
import { MobileNav } from "./MobileNav";
import { CountdownDisplay } from "./CountdownDisplay";

export function ClientNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When section comes into view
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Trigger when section is 40% visible
        threshold: 0.4,
        rootMargin: "-10% 0px -45% 0px"
      }
    );

    // Get all sections and observe them
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <CountdownNav activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
      <CountdownDisplay activeSection={activeSection} />
    </>
  );
} 