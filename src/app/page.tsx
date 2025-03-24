import { Starfield } from "@/components/Starfield";
import { ClientNav } from "@/components/ClientNav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Starfield />
      <ClientNav />
      
      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Background */}
          <div className="grid-bg" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight to-charcoal opacity-80 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-4">
              T <span className="text-neon-green">Minus</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Propelling clients into the future with innovative technology
              solutions
            </p>
            <div className="mt-12">
              <a
                href="#vision"
                className="glow px-8 py-3 bg-neon-green text-midnight font-medium rounded-full hover:bg-neon-green/90 transition-colors"
              >
                Explore Our Vision
              </a>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-cyber-teal/20 blur-sm animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-tech-blue/20 blur-sm animate-pulse" />
            <div className="absolute bottom-1/3 left-1/3 w-10 h-10 rounded-full bg-neon-green/20 blur-sm animate-pulse" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        className="py-28 bg-gradient-to-b from-charcoal to-midnight"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 text-center">
              Our <span className="text-neon-green">Vision</span>
            </h2>
            
            <div className="bg-charcoal/60 p-8 md:p-10 rounded-2xl backdrop-blur-sm border border-neon-green/20 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <p className="text-lg text-gray-300 relative z-10">
                We envision a future where technology seamlessly enhances human potential,
                where innovation knows no bounds, and where every business can harness
                the power of cutting-edge solutions to achieve their goals.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-10 relative z-10">
                <div className="bg-midnight/40 p-6 rounded-xl border border-neon-green/10 transform transition-transform hover:translate-y-[-4px]">
                  <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center mb-4">
                    <span className="text-neon-green text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-neon-green mb-3">Accessible Technology</h3>
                  <p className="text-gray-300">
                    We're committed to democratizing technology, making cutting-edge solutions 
                    accessible to businesses of all sizes. Everyone deserves the power to innovate, 
                    regardless of technical expertise or implementation complexity.
                  </p>
                </div>
                
                <div className="bg-midnight/40 p-6 rounded-xl border border-neon-green/10 transform transition-transform hover:translate-y-[-4px]">
                  <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center mb-4">
                    <span className="text-neon-green text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-neon-green mb-3">New Age Solutions</h3>
                  <p className="text-gray-300">
                    We harness emerging technologies like AI, machine learning, and advanced 
                    cloud architectures to create competitive advantages for our clients, 
                    driving tangible business outcomes with innovative approaches.
                  </p>
                </div>
                
                <div className="bg-midnight/40 p-6 rounded-xl border border-neon-green/10 transform transition-transform hover:translate-y-[-4px]">
                  <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center mb-4">
                    <span className="text-neon-green text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-neon-green mb-3">Problem-Specific Innovation</h3>
                  <p className="text-gray-300">
                    We believe in purposeful innovation – developing tailored solutions that address 
                    specific business challenges rather than one-size-fits-all approaches. This ensures 
                    maximum impact where it matters most.
                  </p>
                </div>
                
                <div className="bg-midnight/40 p-6 rounded-xl border border-neon-green/10 transform transition-transform hover:translate-y-[-4px]">
                  <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center mb-4">
                    <span className="text-neon-green text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-neon-green mb-3">Holistic Efficiency</h3>
                  <p className="text-gray-300">
                    Our definition of efficiency goes beyond performance metrics. We create solutions 
                    that are resource-efficient, cost-effective, energy-conscious, and designed for 
                    long-term sustainability and scalability.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 relative z-10">
                <div className="border-t border-neon-green/10 pt-8 text-center">
                  <p className="text-lg text-gray-300 italic">
                    Our mission is to be the catalyst that transforms this vision into reality,
                    one breakthrough at a time.
                  </p>
                  <div className="mt-6 inline-flex items-center px-5 py-2.5 rounded-full bg-neon-green/10 border border-neon-green/20">
                    <span className="text-cyber-teal font-medium">Innovating since 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 bg-gradient-to-b from-midnight to-charcoal">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center">
            About <span className="text-neon-green">Us</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-charcoal p-8 rounded-xl border border-neon-green/10 transform hover:scale-105 transition-transform relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <h3 className="text-2xl font-display font-bold text-neon-green mb-4 relative z-10">Innovation First</h3>
              <p className="text-gray-300 relative z-10">
                We&apos;re not just keeping pace with technology; we&apos;re setting the pace.
                Our solutions are built on the cutting edge of what&apos;s possible, constantly
                pushing boundaries to deliver unprecedented results.
              </p>
            </div>
            
            <div className="bg-charcoal p-8 rounded-xl border border-neon-green/10 transform hover:scale-105 transition-transform relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <h3 className="text-2xl font-display font-bold text-neon-green mb-4 relative z-10">Client Success</h3>
              <p className="text-gray-300 relative z-10">
                Your success is our mission. We work tirelessly to ensure every solution
                we deliver creates real, measurable value for your business and gives you
                a competitive advantage in your industry.
              </p>
            </div>
            
            <div className="bg-charcoal p-8 rounded-xl border border-neon-green/10 transform hover:scale-105 transition-transform relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <h3 className="text-2xl font-display font-bold text-neon-green mb-4 relative z-10">Future Ready</h3>
              <p className="text-gray-300 relative z-10">
                We build solutions that don&apos;t just solve today&apos;s challenges but are
                ready for tomorrow&apos;s opportunities. Our forward-thinking approach ensures
                your investment continues to deliver value for years to come.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#services" className="inline-flex items-center px-6 py-3 border border-neon-green/30 rounded-full text-neon-green hover:bg-neon-green/10 transition-colors">
              <span className="mr-2">Discover Our Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-28 bg-gradient-to-b from-charcoal to-midnight">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center">
            Our <span className="text-neon-green">Leadership</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-charcoal rounded-xl overflow-hidden group border border-neon-green/10">
              <div className="aspect-square bg-midnight/60 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-70 group-hover:opacity-90 transition-opacity z-10" />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center hover:bg-neon-green/20 transition-colors">
                      <span className="text-neon-green text-sm">Li</span>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center hover:bg-neon-green/20 transition-colors">
                      <span className="text-neon-green text-sm">Tw</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-neon-green">Sarah Chen</h3>
                <p className="text-cyber-teal mb-4">Chief Executive Officer</p>
                <p className="text-gray-300">
                  Visionary leader with 15+ years of experience in tech innovation
                  and digital transformation.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-charcoal rounded-xl overflow-hidden group border border-neon-green/10">
              <div className="aspect-square bg-midnight/60 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-70 group-hover:opacity-90 transition-opacity z-10" />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center hover:bg-neon-green/20 transition-colors">
                      <span className="text-neon-green text-sm">Li</span>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center hover:bg-neon-green/20 transition-colors">
                      <span className="text-neon-green text-sm">Tw</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-neon-green">Marcus Rodriguez</h3>
                <p className="text-cyber-teal mb-4">Chief Technology Officer</p>
                <p className="text-gray-300">
                  Tech pioneer specializing in AI, blockchain, and cloud architecture.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-charcoal rounded-xl overflow-hidden group border border-neon-green/10">
              <div className="aspect-square bg-midnight/60 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-70 group-hover:opacity-90 transition-opacity z-10" />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center hover:bg-neon-green/20 transition-colors">
                      <span className="text-neon-green text-sm">Li</span>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center hover:bg-neon-green/20 transition-colors">
                      <span className="text-neon-green text-sm">Tw</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-neon-green">Dr. Aisha Patel</h3>
                <p className="text-cyber-teal mb-4">Head of Innovation</p>
                <p className="text-gray-300">
                  Research leader driving breakthrough innovations in emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (T-6) */}
      <section id="services" className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-teal mb-8">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-charcoal rounded-lg p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-teal/10 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-display font-bold text-electric-teal mb-4">Digital Transformation</h3>
              <ul className="space-y-3 text-gray-300 relative z-10">
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                  Legacy System Modernization
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                  Cloud Migration Strategy
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                  Process Automation
                </li>
              </ul>
            </div>
            {/* Service 2 */}
            <div className="group relative bg-charcoal rounded-lg p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-teal/10 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-display font-bold text-electric-teal mb-4">AI & Machine Learning</h3>
              <ul className="space-y-3 text-gray-300 relative z-10">
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                  Predictive Analytics
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                  Natural Language Processing
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                  Computer Vision Solutions
                </li>
              </ul>
            </div>
            {/* Service 3 */}
            <div className="group relative bg-charcoal rounded-lg p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-teal/10 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-display font-bold text-electric-teal mb-4">Custom Development</h3>
              <ul className="space-y-3 text-gray-300 relative z-10">
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                  Web & Mobile Applications
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                  Enterprise Software
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                  API Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section (T-5) */}
      <section id="process" className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-teal mb-12">
            Our Process
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-charcoal transform -translate-x-1/2" />
            
            {/* Process Steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-2xl font-display font-bold text-neon-green mb-4">Discovery</h3>
                  <p className="text-gray-300">
                    Deep dive into your business needs, challenges, and objectives to craft
                    the perfect solution strategy.
                  </p>
                </div>
                <div className="hidden md:block" />
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-electric-teal rounded-full transform -translate-x-1/2" />
              </div>
              
              {/* Step 2 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block" />
                <div className="md:pl-12">
                  <h3 className="text-2xl font-display font-bold text-neon-green mb-4">Design & Planning</h3>
                  <p className="text-gray-300">
                    Create detailed blueprints and prototypes, ensuring every aspect
                    of the solution is optimized for success.
                  </p>
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-electric-teal rounded-full transform -translate-x-1/2" />
              </div>
              
              {/* Step 3 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-2xl font-display font-bold text-neon-green mb-4">Development</h3>
                  <p className="text-gray-300">
                    Agile implementation with continuous feedback and adaptation to
                    ensure perfect alignment with your goals.
                  </p>
                </div>
                <div className="hidden md:block" />
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-electric-teal rounded-full transform -translate-x-1/2" />
              </div>
              
              {/* Step 4 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block" />
                <div className="md:pl-12">
                  <h3 className="text-2xl font-display font-bold text-neon-green mb-4">Launch & Support</h3>
                  <p className="text-gray-300">
                    Smooth deployment with comprehensive training and ongoing support
                    to ensure lasting success.
                  </p>
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-electric-teal rounded-full transform -translate-x-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section (T-4) */}
      <section id="technology" className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-teal mb-12">
            Our Technology Stack
          </h2>
          <div className="grid gap-12">
            {/* Frontend */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-neon-green">Frontend Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['React', 'Next.js', 'Vue', 'Angular'].map((tech) => (
                  <div key={tech} className="bg-charcoal p-4 rounded-lg text-center hover:bg-charcoal/70 transition-colors">
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-neon-green">Backend Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Node.js', 'Python', 'Java', 'Go'].map((tech) => (
                  <div key={tech} className="bg-charcoal p-4 rounded-lg text-center hover:bg-charcoal/70 transition-colors">
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Cloud & DevOps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-neon-green">Cloud & DevOps</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['AWS', 'Azure', 'GCP', 'Kubernetes'].map((tech) => (
                  <div key={tech} className="bg-charcoal p-4 rounded-lg text-center hover:bg-charcoal/70 transition-colors">
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovations Section (T-3) */}
      <section id="innovations" className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-teal mb-12">
            Latest Innovations
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Innovation 1 */}
            <div className="group relative">
              <div className="bg-charcoal rounded-lg p-8 relative z-10 h-full transform group-hover:-translate-y-2 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-teal/20 to-transparent rounded-lg" />
                <h3 className="text-2xl font-display font-bold text-neon-green mb-4 relative z-10">
                  AI-Powered Decision Engine
                </h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Revolutionary decision-making system that combines machine learning
                  with expert knowledge to provide real-time strategic insights.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-midnight rounded-full text-electric-teal text-sm">AI</span>
                  <span className="px-3 py-1 bg-midnight rounded-full text-electric-teal text-sm">ML</span>
                  <span className="px-3 py-1 bg-midnight rounded-full text-electric-teal text-sm">Neural Networks</span>
                </div>
              </div>
            </div>
            {/* Innovation 2 */}
            <div className="group relative">
              <div className="bg-charcoal rounded-lg p-8 relative z-10 h-full transform group-hover:-translate-y-2 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-transparent rounded-lg" />
                <h3 className="text-2xl font-display font-bold text-neon-green mb-4 relative z-10">
                  Quantum-Ready Infrastructure
                </h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Future-proof architecture designed to seamlessly integrate with
                  emerging quantum computing technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-midnight rounded-full text-electric-teal text-sm">Quantum</span>
                  <span className="px-3 py-1 bg-midnight rounded-full text-electric-teal text-sm">Cloud</span>
                  <span className="px-3 py-1 bg-midnight rounded-full text-electric-teal text-sm">Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section (T-2) */}
      <section id="case-studies" className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-teal mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-charcoal rounded-lg overflow-hidden group">
              <div className="aspect-video bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-electric-teal font-display">FinTech Revolution</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-neon-green mb-2">
                  Global Bank Digital Transformation
                </h3>
                <p className="text-gray-300 mb-4">
                  Modernized legacy systems for a Fortune 500 bank, resulting in 60%
                  faster transaction processing.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-electric-teal">Read More →</span>
                  <span className="text-gray-400">ROI: 300%</span>
                </div>
              </div>
            </div>
            {/* Case Study 2 */}
            <div className="bg-charcoal rounded-lg overflow-hidden group">
              <div className="aspect-video bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-electric-teal font-display">Healthcare AI</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-neon-green mb-2">
                  AI-Powered Diagnostics Platform
                </h3>
                <p className="text-gray-300 mb-4">
                  Developed an AI system that improved diagnostic accuracy by 40%
                  for a leading healthcare provider.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-electric-teal">Read More →</span>
                  <span className="text-gray-400">Lives Impacted: 1M+</span>
                </div>
              </div>
            </div>
            {/* Case Study 3 */}
            <div className="bg-charcoal rounded-lg overflow-hidden group">
              <div className="aspect-video bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-electric-teal font-display">E-Commerce</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-neon-green mb-2">
                  Scalable E-Commerce Platform
                </h3>
                <p className="text-gray-300 mb-4">
                  Built a cloud-native platform handling 10M+ daily transactions
                  with 99.99% uptime.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-electric-teal">Read More →</span>
                  <span className="text-gray-400">Growth: 400%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (T-1) */}
      <section id="testimonials" className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-teal mb-12">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-electric-teal opacity-30">"</div>
              <div className="bg-charcoal rounded-lg p-8 relative">
                <p className="text-gray-300 mb-6 relative z-10">
                  &ldquo;T Minus transformed our business with their innovative solutions.
                  Their team&apos;s expertise and dedication to our success was exceptional.
                  We&apos;ve seen a 200% increase in efficiency since implementation.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full" />
                  <div>
                    <h4 className="font-display font-bold text-neon-green">Michael Chang</h4>
                    <p className="text-gray-400">CTO, TechCorp Global</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-electric-teal opacity-30">"</div>
              <div className="bg-charcoal rounded-lg p-8 relative">
                <p className="text-gray-300 mb-6 relative z-10">
                  &ldquo;The quantum-ready infrastructure T Minus designed for us has positioned
                  our company years ahead of the competition. Their vision for the future
                  of technology is unmatched.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full" />
                  <div>
                    <h4 className="font-display font-bold text-neon-green">Dr. Elena Rodriguez</h4>
                    <p className="text-gray-400">Head of Innovation, Future Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Launch Section (T-0) */}
      <section id="contact" className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-teal mb-6">
              Ready for Launch?
            </h2>
            <p className="text-xl text-gray-300">
              Take the first step towards transforming your business with cutting-edge technology.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-charcoal rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-midnight border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-electric-teal transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-midnight border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-electric-teal transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-midnight border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-electric-teal transition-colors"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-electric-teal to-neon-green text-midnight font-display font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Launch Project →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
