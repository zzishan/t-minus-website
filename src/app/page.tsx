import { Starfield } from "@/components/Starfield";
import { ClientNav } from "@/components/ClientNav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Starfield />
      <ClientNav />
      
      {/* Hero Section (T-10) */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold bg-gradient-to-r from-electric-teal to-neon-green bg-clip-text text-transparent animate-fade-in">
            T Minus
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-300 max-w-2xl mx-auto animate-slide-in">
            Propelling clients into the future with innovative technology solutions
          </p>
        </div>
      </section>

      {/* Vision Section (T-9) */}
      <section id="vision" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-teal mb-8">
            Our Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                We envision a future where technology seamlessly enhances human potential,
                where innovation knows no bounds, and where every business can harness
                the power of cutting-edge solutions to achieve their goals.
              </p>
              <p className="text-lg text-gray-300">
                Our mission is to be the catalyst that transforms this vision into reality,
                one breakthrough at a time.
              </p>
            </div>
            <div className="relative">
              {/* Placeholder for future interactive visualization */}
              <div className="aspect-square bg-charcoal rounded-lg animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Add more sections here... */}
    </main>
  );
}
