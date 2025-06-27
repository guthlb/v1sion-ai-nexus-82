
import React from 'react';
import { Settings, Layers, Wrench, Users, Folder, FolderCog, Hexagon } from 'lucide-react';

const ProvenFramework = () => {
  const framework = [
    { icon: Settings, label: "Strategy Alignment", color: "from-blue-400 to-cyan-600" },
    { icon: Layers, label: "Data Infrastructure", color: "from-[#00f0ff] to-[#0080ff]" },
    { icon: Wrench, label: "Technology Stack", color: "from-[#b967ff] to-[#8b4eff]" },
    { icon: Users, label: "Talent Development", color: "from-[#ffd700] to-[#ffb700]" },
    { icon: Folder, label: "Process Optimization", color: "from-green-400 to-emerald-600" },
    { icon: FolderCog, label: "Governance & Ethics", color: "from-orange-400 to-red-500" }
  ];

  return (
    <section className="cinematic-section bg-gradient-to-b from-[#0a0e17] to-[#151922]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Hexagon className="w-5 h-5 text-[#b967ff]" />
            <span className="text-sm font-agile text-gray-300 uppercase tracking-wider">Transformation Framework</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-mooxy font-black text-white mb-6 floating-text">
            Proven Framework for
            <span className="block bg-gradient-to-r from-[#00f0ff] to-[#b967ff] bg-clip-text text-transparent">
              AI-Native Transformation
            </span>
          </h2>
          <p className="text-xl font-agile text-gray-400 max-w-4xl mx-auto">
            Our systematic approach ensures comprehensive transformation across all organizational dimensions
          </p>
        </div>

        {/* Hexagonal Framework Grid */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Central Connecting Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 border border-[#00f0ff]/20 rounded-full opacity-50" />
            <div className="absolute w-64 h-64 border border-[#b967ff]/20 rounded-full opacity-30" />
            <div className="absolute w-32 h-32 border border-[#ffd700]/20 rounded-full opacity-20" />
          </div>

          {/* Framework Elements */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {framework.map((item, index) => (
              <div key={index} className="group">
                <div className="glass-card p-6 text-center hover-zoom transition-all duration-500 group-hover:bg-white/10 h-full">
                  
                  {/* Hexagonal Icon Container */}
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} p-0.5 mx-auto group-hover:scale-110 transition-all duration-300`}>
                      <div className="w-full h-full rounded-full bg-[#0a0e17] flex items-center justify-center">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Pulsing Glow */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-xl mx-auto group-hover:opacity-40 transition-opacity duration-300 animate-pulse`} />
                    
                    {/* Connection Node */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#00f0ff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-sm font-agile font-bold text-white group-hover:text-[#00f0ff] transition-colors duration-300 leading-tight">
                    {item.label}
                  </h3>

                  {/* Progress Indicator */}
                  <div className="mt-3 bg-gray-800 rounded-full h-1 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out group-hover:w-full`}
                      style={{ width: '60%' }}
                    />
                  </div>

                  {/* Hover Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Framework Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "6", label: "Core Dimensions", color: "text-[#00f0ff]" },
            { value: "100%", label: "Integration Coverage", color: "text-[#b967ff]" },
            { value: "85%", label: "Success Rate", color: "text-[#ffd700]" },
            { value: "3-6", label: "Month Timeline", color: "text-green-400" }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-4 text-center hover-zoom">
              <div className={`data-counter text-2xl font-black mb-1 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-agile font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenFramework;
