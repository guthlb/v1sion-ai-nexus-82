
import React from 'react';
import { Settings, Layers, Wrench, Users, Atom, Orbit } from 'lucide-react';

const OurApproach = () => {
  const approaches = [
    {
      icon: Settings,
      title: "AI Readiness Audit",
      description: "Comprehensive assessment of your organization's AI maturity and transformation potential",
      color: "from-[#00f0ff] to-[#0080ff]"
    },
    {
      icon: Layers, 
      title: "Ecosystem Architecture",
      description: "Design integrated AI systems that work seamlessly across your entire organization",
      color: "from-[#b967ff] to-[#8b4eff]"
    },
    {
      icon: Wrench,
      title: "Implementation & Integration", 
      description: "Deploy AI solutions with proven methodologies and continuous optimization",
      color: "from-[#ffd700] to-[#ffb700]"
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Transform culture and processes to ensure sustainable AI adoption",
      color: "from-[#ff6b6b] to-[#ff5252]"
    }
  ];

  return (
    <section id="approach" className="cinematic-section bg-gradient-to-b from-[#0a0e17] via-[#1a1f2e] to-[#0a0e17]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Atom className="w-5 h-5 text-[#b967ff]" />
            <span className="text-sm font-agile text-gray-300 uppercase tracking-wider">Our Methodology</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-mooxy font-black text-white mb-6 floating-text">
            Our Approach:
            <span className="block bg-gradient-to-r from-[#00f0ff] to-[#b967ff] bg-clip-text text-transparent mt-2">
              Ecosystem Architecture
            </span>
            <span className="block text-2xl md:text-3xl font-agile text-gray-400 mt-4">
              Not Just Tools
            </span>
          </h2>
          <p className="text-xl font-agile text-gray-400 max-w-4xl mx-auto">
            We build comprehensive AI ecosystems that transform your entire organization, not just individual processes
          </p>
        </div>

        {/* Orbital Ecosystem Visualization */}
        <div className="relative max-w-6xl mx-auto mb-16">
          
          {/* Central V1S1ON Core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="glass-card w-32 h-32 rounded-full flex items-center justify-center border-2 border-[#00f0ff]/30">
              <div className="text-center">
                <Orbit className="w-8 h-8 text-[#00f0ff] mx-auto mb-2" />
                <span className="font-agile font-bold text-white text-sm">V1S1ON</span>
                <span className="font-agile text-[#00f0ff] text-xs block">CORE</span>
              </div>
              {/* Core Glow */}
              <div className="absolute inset-0 rounded-full bg-[#00f0ff] opacity-20 animate-pulse blur-xl" />
            </div>
          </div>

          {/* Orbital Rings */}
          <div className="quantum-orbit w-[500px] h-[500px]">
            <div className="orbit-ring w-full h-full border-[#00f0ff]/20" />
            <div className="orbit-ring w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[#b967ff]/20" style={{animationDuration: '25s'}} />
          </div>

          {/* Approach Satellites */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {approaches.map((approach, index) => (
              <div key={index} className="group relative">
                <div className="glass-card p-6 hover-zoom group-hover:bg-white/10 transition-all duration-500 h-full">
                  
                  {/* Icon with Orbit Animation */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${approach.color} p-0.5 mx-auto group-hover:scale-110 transition-all duration-300`}>
                      <div className="w-full h-full rounded-full bg-[#0a0e17] flex items-center justify-center">
                        <approach.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br ${approach.color} opacity-20 blur-xl mx-auto group-hover:opacity-40 transition-opacity duration-300`} />
                  </div>

                  <h3 className="text-xl font-agile font-bold text-white mb-4 group-hover:text-[#00f0ff] transition-colors duration-300">
                    {approach.title}
                  </h3>
                  <p className="text-gray-400 font-inter leading-relaxed text-sm">
                    {approach.description}
                  </p>

                  {/* Connection Line to Core */}
                  <div className="absolute top-1/2 left-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#00f0ff]/30 to-transparent transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${approach.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glass-card inline-block px-8 py-4">
            <p className="text-gray-300 font-agile">
              <span className="text-[#00f0ff] font-bold">Ecosystem-First Approach:</span> Every component works in harmony
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
