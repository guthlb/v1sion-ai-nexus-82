
import React from 'react';
import { Settings, Layers, Users, Folder, Shield, Cpu } from 'lucide-react';

const Differentiators = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "Vendor-Agnostic Approach",
      description: "Technology-neutral recommendations based on your specific needs, not vendor partnerships",
      color: "from-blue-400 to-cyan-600",
      badge: "Independent"
    },
    {
      icon: Cpu,
      title: "Persistent Memory Integration",
      description: "Leverage our V0RA platform for enhanced AI system memory and learning capabilities",
      color: "from-[#b967ff] to-[#8b4eff]",
      badge: "Proprietary"
    },
    {
      icon: Users,
      title: "Community-Driven Innovation",
      description: "Access to V3RSE talent network for specialized AI expertise and implementation support",
      color: "from-[#ffd700] to-[#ffb700]",
      badge: "Network"
    },
    {
      icon: Folder,
      title: "Measurable ROI Focus",
      description: "Data-driven approach with clear metrics and continuous optimization for maximum returns",
      color: "from-green-400 to-emerald-600",
      badge: "Results"
    }
  ];

  return (
    <section className="cinematic-section bg-gradient-to-b from-[#151922] to-[#0a0e17]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-[#00f0ff]" />
            <span className="text-sm font-agile text-gray-300 uppercase tracking-wider">Competitive Edge</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-mooxy font-black text-white mb-6 floating-text">
            Unique
            <span className="block bg-gradient-to-r from-[#00f0ff] to-[#b967ff] bg-clip-text text-transparent">
              Differentiators
            </span>
          </h2>
          <p className="text-xl font-agile text-gray-400">
            What sets V1S1ON apart in the AI transformation landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((diff, index) => (
            <div key={index} className="group relative">
              <div className="glass-card p-8 hover-zoom transition-all duration-500 group-hover:bg-white/10 h-full relative overflow-hidden">
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-agile font-bold bg-gradient-to-r ${diff.color} bg-opacity-20 text-white border border-white/20`}>
                    {diff.badge}
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${diff.color} p-0.5 group-hover:scale-110 transition-all duration-300`}>
                      <div className="w-full h-full rounded-xl bg-[#0a0e17] flex items-center justify-center">
                        <diff.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Icon Glow */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br ${diff.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-agile font-bold text-white mb-4 group-hover:text-[#00f0ff] transition-colors duration-300">
                      {diff.title}
                    </h3>
                    <p className="text-gray-400 font-inter leading-relaxed">
                      {diff.description}
                    </p>

                    {/* Feature Highlight */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${diff.color}`} />
                      <span className="text-sm font-agile text-[#00f0ff]">
                        {diff.title.includes('Vendor') && 'Technology Neutral'}
                        {diff.title.includes('Memory') && 'V0RA Platform'}
                        {diff.title.includes('Community') && 'V3RSE Network'}
                        {diff.title.includes('ROI') && 'Data-Driven'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Hover Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${diff.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${diff.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Platform Showcase */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block px-8 py-6 max-w-3xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b967ff] to-[#8b4eff] p-0.5">
                <div className="w-full h-full rounded-full bg-[#0a0e17] flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-agile font-bold text-white text-xl">V0RA + V3RSE Ecosystem</h4>
                <p className="text-sm text-gray-400">Persistent Memory + Talent Network</p>
              </div>
            </div>
            <p className="text-gray-300 font-inter">
              Our proprietary platforms provide continuous learning capabilities and access to specialized AI talent, 
              ensuring your transformation stays ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
