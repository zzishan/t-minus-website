import { Starfield } from "@/components/Starfield";
import { ClientNav } from "@/components/ClientNav";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Starfield />
      <ClientNav />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative">
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Background */}
          <div className="grid-bg" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight to-charcoal opacity-80 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <ScrollReveal animation="fade-in">
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-4">
              T <span className="text-neon-green">Minus</span>
            </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Propelling clients into the future with innovative technology
              solutions
            </p>
            </ScrollReveal>
            
            <ScrollReveal animation="scale-in" delay={400}>
            <div className="mt-12">
              <a
                href="#vision"
                className="glow px-8 py-3 bg-neon-green text-midnight font-medium rounded-full hover:bg-neon-green/90 transition-colors"
              >
                Explore Our Vision
              </a>
            </div>
            </ScrollReveal>
            
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
        className="min-h-screen flex items-center py-20 bg-gradient-to-b from-charcoal to-midnight relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid lines for tech feel */}
          <div className="absolute w-full h-full grid-bg transform scale-150 opacity-20" />
          
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-neon-green/5 filter blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-cyber-teal/5 filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-tech-blue/5 filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Animated title with glowing effect */}
            <ScrollReveal animation="fade-in">
              <div className="text-center mb-16 relative">
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white inline-block relative">
                  Our <span className="text-neon-green glow">Vision</span>
            </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-neon-green to-transparent rounded-full mx-auto mt-4"></div>
              </div>
            </ScrollReveal>
            
            {/* Main vision statement - Circle design */}
            <ScrollReveal animation="scale-in" delay={200}>
              <div className="relative mb-24 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-midnight border border-neon-green/30 flex items-center justify-center p-8 shadow-lg shadow-neon-green/10 relative z-20">
                  <p className="text-lg md:text-xl text-gray-300 text-center font-display">
                We envision a future where technology seamlessly enhances human potential,
                    where innovation knows no bounds.
                  </p>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neon-green/20"></div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyber-teal/20"></div>
                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-tech-blue/20"></div>
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-green/20"></div>
                </div>
                
                {/* Vision pillars - X arrangement */}
                <div className="absolute w-full h-full">
                  {/* Vision Pillar 1 - Top Left */}
                  <ScrollReveal animation="slide-right" delay={100}
                    className="absolute -top-14 -left-14 md:-top-16 md:-left-16 w-full max-w-xs">
                    <div className="group">
                      <div className="bg-midnight/60 backdrop-blur-sm p-4 rounded-xl border border-neon-green/20 transform transition-all duration-300 group-hover:translate-y-[-8px] group-hover:translate-x-[-8px] group-hover:border-neon-green/50 group-hover:shadow-lg group-hover:shadow-neon-green/10">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center mr-3 group-hover:bg-neon-green/20 transition-colors">
                            <span className="text-neon-green text-xl font-bold">1</span>
                          </div>
                          <h3 className="text-xl font-display font-bold text-neon-green">Accessible Technology</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                          We're committed to democratizing technology, making cutting-edge solutions 
                          accessible to businesses of all sizes.
                        </p>
                      </div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-green/30 rounded-br-3xl -mb-4 -mr-4"></div>
                    </div>
                  </ScrollReveal>
                  
                  {/* Vision Pillar 2 - Top Right */}
                  <ScrollReveal animation="slide-left" delay={200}
                    className="absolute -top-14 -right-14 md:-top-16 md:-right-16 w-full max-w-xs">
                    <div className="group">
                      <div className="bg-midnight/60 backdrop-blur-sm p-4 rounded-xl border border-neon-green/20 transform transition-all duration-300 group-hover:translate-y-[-8px] group-hover:translate-x-[8px] group-hover:border-neon-green/50 group-hover:shadow-lg group-hover:shadow-neon-green/10">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center mr-3 group-hover:bg-neon-green/20 transition-colors">
                            <span className="text-neon-green text-xl font-bold">2</span>
                          </div>
                          <h3 className="text-xl font-display font-bold text-neon-green">New Age Solutions</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                          We harness emerging technologies like AI, machine learning, and advanced 
                          cloud architectures to create competitive advantages.
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-green/30 rounded-bl-3xl -mb-4 -ml-4"></div>
                    </div>
                  </ScrollReveal>
                  
                  {/* Vision Pillar 3 - Bottom Left */}
                  <ScrollReveal animation="slide-right" delay={300}
                    className="absolute -bottom-14 -left-14 md:-bottom-16 md:-left-16 w-full max-w-xs">
                    <div className="group">
                      <div className="bg-midnight/60 backdrop-blur-sm p-4 rounded-xl border border-neon-green/20 transform transition-all duration-300 group-hover:translate-y-[8px] group-hover:translate-x-[-8px] group-hover:border-neon-green/50 group-hover:shadow-lg group-hover:shadow-neon-green/10">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center mr-3 group-hover:bg-neon-green/20 transition-colors">
                    <span className="text-neon-green text-xl font-bold">3</span>
                  </div>
                          <h3 className="text-xl font-display font-bold text-neon-green">Problem-Specific Innovation</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                    We believe in purposeful innovation – developing tailored solutions that address 
                          specific business challenges for maximum impact.
                  </p>
                </div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-green/30 rounded-tr-3xl -mt-4 -mr-4"></div>
                    </div>
                  </ScrollReveal>
                  
                  {/* Vision Pillar 4 - Bottom Right */}
                  <ScrollReveal animation="slide-left" delay={400}
                    className="absolute -bottom-14 -right-14 md:-bottom-16 md:-right-16 w-full max-w-xs">
                    <div className="group">
                      <div className="bg-midnight/60 backdrop-blur-sm p-4 rounded-xl border border-neon-green/20 transform transition-all duration-300 group-hover:translate-y-[8px] group-hover:translate-x-[8px] group-hover:border-neon-green/50 group-hover:shadow-lg group-hover:shadow-neon-green/10">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center mr-3 group-hover:bg-neon-green/20 transition-colors">
                    <span className="text-neon-green text-xl font-bold">4</span>
                          </div>
                          <h3 className="text-xl font-display font-bold text-neon-green">Holistic Efficiency</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Our definition of efficiency goes beyond performance metrics, creating solutions 
                          that are sustainable and scalable.
                        </p>
                      </div>
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-green/30 rounded-tl-3xl -mt-4 -ml-4"></div>
                    </div>
                  </ScrollReveal>
                  
                  {/* Diagonal connectors */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t-0 border-l-0 border-b border-r border-neon-green/10 rounded-br-full"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 border-t-0 border-r-0 border-b border-l border-neon-green/10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-b-0 border-l-0 border-t border-r border-neon-green/10 rounded-tr-full"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b-0 border-r-0 border-t border-l border-neon-green/10 rounded-tl-full"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Mission statement - with glowing accent */}
            <ScrollReveal animation="fade-in" delay={600}>
              <div className="mt-20 md:mt-24 text-center relative">
                <div className="inline-block bg-midnight/40 backdrop-blur-md px-10 py-8 rounded-xl border border-neon-green/20 relative overflow-hidden group hover:border-neon-green/40 transition-colors">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-green/20 via-tech-blue/10 to-cyber-teal/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <p className="text-2xl text-gray-300 italic font-display relative z-10">
                    "Our mission is to be the catalyst that transforms this vision into reality,
                    <span className="block mt-2">one breakthrough at a time."</span>
                  </p>
                  <div className="mt-4 inline-flex items-center px-5 py-2 rounded-full bg-neon-green/10 border border-neon-green/20">
                    <span className="text-cyber-teal font-medium">Innovating since 2024</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-midnight to-charcoal">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center">
            About <span className="text-neon-green">Us</span>
          </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal animation="slide-up" delay={100}>
              <div className="bg-charcoal p-8 rounded-xl border border-neon-green/10 transform hover:scale-105 transition-transform relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <h3 className="text-2xl font-display font-bold text-neon-green mb-4 relative z-10">Innovation First</h3>
              <p className="text-gray-300 relative z-10">
                We&apos;re not just keeping pace with technology; we&apos;re setting the pace.
                Our solutions are built on the cutting edge of what&apos;s possible, constantly
                pushing boundaries to deliver unprecedented results.
              </p>
            </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={200}>
              <div className="bg-charcoal p-8 rounded-xl border border-neon-green/10 transform hover:scale-105 transition-transform relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <h3 className="text-2xl font-display font-bold text-neon-green mb-4 relative z-10">Client Success</h3>
              <p className="text-gray-300 relative z-10">
                Your success is our mission. We work tirelessly to ensure every solution
                we deliver creates real, measurable value for your business and gives you
                a competitive advantage in your industry.
              </p>
            </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={300}>
              <div className="bg-charcoal p-8 rounded-xl border border-neon-green/10 transform hover:scale-105 transition-transform relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <h3 className="text-2xl font-display font-bold text-neon-green mb-4 relative z-10">Future Ready</h3>
              <p className="text-gray-300 relative z-10">
                We build solutions that don&apos;t just solve today&apos;s challenges but are
                ready for tomorrow&apos;s opportunities. Our forward-thinking approach ensures
                your investment continues to deliver value for years to come.
              </p>
            </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-in" delay={400}>
          <div className="mt-16 text-center">
            <a href="#services" className="inline-flex items-center px-6 py-3 border border-neon-green/30 rounded-full text-neon-green hover:bg-neon-green/10 transition-colors">
              <span className="mr-2">Discover Our Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-midnight to-charcoal">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center">
            Our <span className="text-neon-green">Services</span>
          </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 - Custom Development (moved from position 3) */}
            <ScrollReveal animation="scale-in" delay={100}>
              <div className="group relative bg-charcoal rounded-xl p-6 overflow-hidden border border-neon-green/10 hover:shadow-lg hover:shadow-neon-green/5 transition-all h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-display font-bold text-neon-green mb-4 relative z-10">Custom Development</h3>
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
            </ScrollReveal>
            
            {/* Service 2 */}
            <ScrollReveal animation="scale-in" delay={200}>
              <div className="group relative bg-charcoal rounded-xl p-6 overflow-hidden border border-neon-green/10 hover:shadow-lg hover:shadow-neon-green/5 transition-all h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-display font-bold text-neon-green mb-4 relative z-10">AI & Machine Learning</h3>
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
                    Generative AI Integration
                </li>
              </ul>
            </div>
            </ScrollReveal>
            
            {/* Service 3 - Networking Solutions (replacing Digital Transformation) */}
            <ScrollReveal animation="scale-in" delay={300}>
              <div className="group relative bg-charcoal rounded-xl p-6 overflow-hidden border border-neon-green/10 hover:shadow-lg hover:shadow-neon-green/5 transition-all h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-display font-bold text-neon-green mb-4 relative z-10">Networking Solutions</h3>
              <ul className="space-y-3 text-gray-300 relative z-10">
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                    Cross-Protocol Integration
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                    Cloud-Native Microservices Orchestration
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">→</span>
                    SD-WAN Orchestration
                </li>
              </ul>
            </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-in" delay={400}>
          <div className="mt-16 text-center">
            <a href="#process" className="inline-flex items-center px-6 py-3 border border-neon-green/30 rounded-full text-neon-green hover:bg-neon-green/10 transition-colors">
              <span className="mr-2">Our Process</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section (T-5) */}
      <section id="process" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-charcoal to-midnight">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center">
            Our <span className="text-neon-green">Process</span>
          </h2>
          </ScrollReveal>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-neon-green/20 transform -translate-x-1/2" />
            
            {/* Process Steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <ScrollReveal animation="slide-right" delay={100}>
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
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-neon-green/30 border border-neon-green rounded-full transform -translate-x-1/2 shadow-glow-sm animate-pulse-slow" />
              </div>
              </ScrollReveal>
              
              {/* Step 2 */}
              <ScrollReveal animation="slide-left" delay={200}>
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
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-neon-green/30 border border-neon-green rounded-full transform -translate-x-1/2 shadow-glow-sm animate-pulse-slow" style={{ animationDelay: '1s' }} />
              </div>
              </ScrollReveal>
              
              {/* Step 3 */}
              <ScrollReveal animation="slide-right" delay={300}>
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
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-neon-green/30 border border-neon-green rounded-full transform -translate-x-1/2 shadow-glow-sm animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
              </div>
              </ScrollReveal>
              
              {/* Step 4 */}
              <ScrollReveal animation="slide-left" delay={400}>
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
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-neon-green/30 border border-neon-green rounded-full transform -translate-x-1/2 shadow-glow-sm animate-pulse-slow" style={{ animationDelay: '2s' }} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section (T-2) */}
      <section id="case-studies" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-midnight to-charcoal">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center">
            Success <span className="text-neon-green">Stories</span>
          </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Case Study 1 - Process Mapping Tool */}
            <ScrollReveal animation="slide-up" delay={100}>
              <div className="bg-charcoal rounded-lg overflow-hidden group border border-neon-green/10 hover:shadow-lg hover:shadow-neon-green/5 transition-all h-full">
              <div className="aspect-video bg-midnight relative">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                <div className="absolute bottom-4 left-4">
                    <span className="text-neon-green font-display">Industrial Automation</span>
                  </div>
                  {/* Process Mapping Icon - Detailed Flowchart */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neon-green/30 w-24 h-24">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h4v4H3V3zm7 4h4V3h-4v4zm7-4v4h4V3h-4zM3 14h4v-4H3v4zm7 0h4v-4h-4v4zm7 0h4v-4h-4v4zM3 21h4v-4H3v4zm7 0h4v-4h-4v4zm7 0h4v-4h-4v4z"/>
                      <path d="M17 8h1v3h-1V8zm-6 0h1v3h-1V8zm-6 0h1v3H5V8zm0 6h1v3H5v-3zm6 0h1v3h-1v-3zm6 0h1v3h-1v-3z"/>
                    </svg>
                  </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-neon-green mb-2">
                    Process Mapping Tool
                </h3>
                  <p className="text-gray-300">
                    Built a comprehensive value stream mapping tool for an industrial automation company,
                    enabling efficient organization, management, and tracking of tasks.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Case Study 2 - ERP Integration */}
            <ScrollReveal animation="slide-up" delay={200}>
              <div className="bg-charcoal rounded-lg overflow-hidden group border border-neon-green/10 hover:shadow-lg hover:shadow-neon-green/5 transition-all h-full">
              <div className="aspect-video bg-midnight relative">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                <div className="absolute bottom-4 left-4">
                    <span className="text-neon-green font-display">Enterprise Integration</span>
                  </div>
                  {/* ERP Integration Icon - Database with Connections */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyber-teal/30 w-24 h-24">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M12 5C16.41 5 18 6.69 18 7C18 7.31 16.41 9 12 9S6 7.31 6 7C6 6.69 7.59 5 12 5M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45Z"/>
                    </svg>
                  </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-neon-green mb-2">
                    ERP System Integration
                </h3>
                  <p className="text-gray-300">
                    Successfully integrated our process mapping tool with the client's existing ERP system,
                    creating a seamless workflow between operational and management systems.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Case Study 3 - Aviation Website */}
            <ScrollReveal animation="slide-up" delay={300}>
              <div className="bg-charcoal rounded-lg overflow-hidden group border border-neon-green/10 hover:shadow-lg hover:shadow-neon-green/5 transition-all h-full">
              <div className="aspect-video bg-midnight relative">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                <div className="absolute bottom-4 left-4">
                    <span className="text-neon-green font-display">Aviation</span>
                  </div>
                  {/* Aviation Icon - Airplane */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-tech-blue/30 w-24 h-24">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" />
                    </svg>
                  </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-neon-green mb-2">
                    Aviation Company Website
                </h3>
                  <p className="text-gray-300">
                    Enhanced and currently maintaining a website for a leading aviation company,
                    implementing performance optimizations and adding interactive features for an improved user experience.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-charcoal to-midnight">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center">
              Client <span className="text-neon-green">Testimonials</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 - Unikraft */}
            <ScrollReveal animation="rotate-in" delay={100}>
              <div className="relative h-full">
                <div className="absolute -top-4 -left-4 text-6xl text-neon-green opacity-30">"</div>
                <div className="bg-charcoal rounded-lg p-8 relative border border-neon-green/10 hover:shadow-lg hover:shadow-neon-green/5 transition-all h-full flex flex-col">
                  <p className="text-gray-300 mb-6 relative z-10 flex-grow">
                    &ldquo;T Minus delivered an exceptional process mapping tool that has revolutionized our industrial automation workflows. Their solution has streamlined our operations and dramatically improved our project delivery timelines. Their technical expertise and commitment to our success has made them a valuable partner.&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-midnight rounded-full border border-neon-green/20" />
                    <div>
                      <h4 className="font-display font-bold text-neon-green">Datta Shinde</h4>
                      <p className="text-gray-400">CEO, Unikraft</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Testimonial 2 - Y.S. Aviations */}
            <ScrollReveal animation="rotate-in" delay={200}>
              <div className="relative h-full">
                <div className="absolute -top-4 -left-4 text-6xl text-neon-green opacity-30">"</div>
                <div className="bg-charcoal rounded-lg p-8 relative border border-neon-green/10 hover:shadow-lg hover:shadow-neon-green/5 transition-all h-full flex flex-col">
                  <p className="text-gray-300 mb-6 relative z-10 flex-grow">
                    &ldquo;The enhancements T Minus made to our aviation website have significantly improved user engagement and operational efficiency. Their team's technical prowess and responsive support have been invaluable. They've transformed our digital presence while maintaining the distinctive character of our brand.&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-midnight rounded-full border border-neon-green/20" />
                    <div>
                      <h4 className="font-display font-bold text-neon-green">Mohammad Sadik</h4>
                      <p className="text-gray-400">CEO & Director, Y.S. Aviations</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact/Launch Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-midnight to-charcoal">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready for <span className="text-neon-green">Launch</span>?
              </h2>
              <p className="text-xl text-gray-300">
                Take the first step towards transforming your business with cutting-edge technology.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="bounce-in" delay={200}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-charcoal rounded-xl p-8 border border-neon-green/20 shadow-lg shadow-neon-green/5">
                <form className="space-y-6" action="https://formspree.io/f/meojqqjd" method="POST">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-midnight border border-neon-green/20 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-neon-green transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-midnight border border-neon-green/20 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-neon-green transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full bg-midnight border border-neon-green/20 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-neon-green transition-colors"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-neon-green to-cyber-teal text-midnight font-display font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-glow-sm"
                  >
                    Launch Project →
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-midnight border-t border-neon-green/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            {/* Logo & Tagline */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                T <span className="text-neon-green">Minus</span>
              </h3>
              <p className="text-gray-400 text-sm text-center">
                Propelling clients into the future with innovative technology solutions.
              </p>
            </div>
            
            {/* Office Address */}
            <div className="flex flex-col items-center">
              <h4 className="text-neon-green font-display font-bold mb-4">OUR OFFICE</h4>
              <p className="text-gray-400 text-sm text-center">
                142 - Manushree Nagar,<br />
                Airport Road, Indore,<br />
                Madhya Pradesh - 452005
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col items-center">
              <h4 className="text-neon-green font-display font-bold mb-4">CONTACT</h4>
              <a href="mailto:info@tminustech.co" className="text-gray-400 text-sm hover:text-neon-green transition-colors">
                info@tminustech.co
              </a>
            </div>
          </div>
          
          <div className="border-t border-neon-green/10 mt-12 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} T Minus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
