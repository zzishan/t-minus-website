"use client";

interface SideNavProps {
  activeSection: string;
}

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

export function SideNav({ activeSection }: SideNavProps) {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-start space-y-6">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center"
            aria-label={`Navigate to ${section.label} section`}
          >
            <div className="relative flex items-center justify-center w-4 h-4">
              <span
                className={`absolute block w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-electric-teal"
                    : "bg-gray-600 group-hover:bg-electric-teal/50"
                }`}
              />
              {activeSection === section.id && (
                <span className="absolute w-5 h-5 rounded-full border border-electric-teal animate-ping-slow" />
              )}
            </div>
            <span
              className={`ml-3 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium ${
                activeSection === section.id ? "text-electric-teal" : "text-white"
              }`}
            >
              {section.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
} 