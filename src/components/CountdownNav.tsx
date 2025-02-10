import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Section = {
  id: string;
  label: string;
  countdown: number;
};

const sections: Section[] = [
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

interface CountdownNavProps {
  activeSection: string;
}

export function CountdownNav({ activeSection }: CountdownNavProps) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 space-y-4 hidden lg:block">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center gap-4"
        >
          <div className="relative">
            <div
              className={cn(
                "w-3 h-3 rounded-full transition-colors duration-200",
                activeSection === section.id
                  ? "bg-electric-teal"
                  : "bg-charcoal group-hover:bg-electric-teal/50"
              )}
            />
            {activeSection === section.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 w-3 h-3 rounded-full bg-electric-teal/20"
                style={{ scale: 2 }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </div>
          <span
            className={cn(
              "text-sm font-display opacity-0 group-hover:opacity-100 transition-opacity duration-200",
              activeSection === section.id ? "text-electric-teal" : "text-gray-400"
            )}
          >
            T-{section.countdown}
          </span>
        </a>
      ))}
    </nav>
  );
} 