
import React from 'react';
import { Settings, Layers, Wrench, Users, Folder, FolderCog, Hexagon } from 'lucide-react';

const ProvenFramework = () => {
  const framework = [
    { icon: Settings, label: "Strategy Alignment", color: "text-emerald-700" },
    { icon: Layers, label: "Data Infrastructure", color: "text-gray-900" },
    { icon: Wrench, label: "Technology Stack", color: "text-emerald-700" },
    { icon: Users, label: "Talent Development", color: "text-gray-900" },
    { icon: Folder, label: "Process Optimization", color: "text-emerald-700" },
    { icon: FolderCog, label: "Governance & Ethics", color: "text-gray-900" }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-6">
            <Hexagon className="w-4 h-4 text-emerald-700" />
            <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">Transformation Framework</span>
          </div>
          
          <h2 className="text-section-title text-gray-900 mb-4 fade-in-up">
            Proven Framework for
            <span className="block text-gradient">AI-Native Transformation</span>
          </h2>
          <p className="text-body-large text-gray-600 max-w-4xl mx-auto fade-in-up">
            Our systematic approach ensures comprehensive transformation across all organizational dimensions
          </p>
        </div>

        {/* Framework Elements */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10 max-w-6xl mx-auto">
          {framework.map((item, index) => (
            <div key={index} className="group fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
              <div className="frosted-glass p-4 text-center hover-lift h-full">
                
                {/* Icon Container */}
                <div className="relative mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 p-0.5 mx-auto group-hover:scale-110 transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                  </div>
                </div>

                <h3 className="text-tiny font-semibold text-gray-900 leading-tight">
                  {item.label}
                </h3>

                {/* Progress Indicator */}
                <div className="mt-2 bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-600 transition-all duration-1000 ease-out group-hover:w-full"
                    style={{ width: '60%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Framework Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "6", label: "Core Dimensions", color: "text-emerald-700" },
            { value: "100%", label: "Integration Coverage", color: "text-gray-900" },
            { value: "85%", label: "Success Rate", color: "text-emerald-700" },
            { value: "3-6", label: "Month Timeline", color: "text-gray-900" }
          ].map((stat, index) => (
            <div key={index} className="frosted-glass p-3 text-center hover-lift">
              <div className={`stat-counter text-lg font-bold mb-1 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-tiny text-gray-600 font-medium">
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
