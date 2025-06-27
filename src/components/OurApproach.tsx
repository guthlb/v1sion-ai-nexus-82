
import React from 'react';
import { Settings, Layers, Wrench, Users, Atom, Orbit } from 'lucide-react';

const OurApproach = () => {
  const approaches = [
    {
      icon: Settings,
      title: "AI Readiness Audit",
      description: "Comprehensive assessment of your organization's AI maturity and transformation potential",
      color: "text-emerald-700"
    },
    {
      icon: Layers, 
      title: "Ecosystem Architecture",
      description: "Design integrated AI systems that work seamlessly across your entire organization",
      color: "text-gray-900"
    },
    {
      icon: Wrench,
      title: "Implementation & Integration", 
      description: "Deploy AI solutions with proven methodologies and continuous optimization",
      color: "text-emerald-700"
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Transform culture and processes to ensure sustainable AI adoption",
      color: "text-gray-900"
    }
  ];

  return (
    <section id="approach" className="section-spacing bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-6">
            <Atom className="w-4 h-4 text-emerald-700" />
            <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">Our Methodology</span>
          </div>
          
          <h2 className="text-section-title text-gray-900 mb-4 fade-in-up">
            Our Approach:
            <span className="block text-gradient mt-2">Ecosystem Architecture</span>
          </h2>
          <p className="text-body-large text-gray-600 max-w-4xl mx-auto fade-in-up">
            We build comprehensive AI ecosystems that transform your entire organization, not just individual processes
          </p>
        </div>

        {/* Central V1S1ON Core */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="frosted-glass w-24 h-24 rounded-full flex items-center justify-center border-2 border-emerald-200 mx-auto hover-lift">
              <div className="text-center">
                <Orbit className="w-6 h-6 text-emerald-700 mx-auto mb-1" />
                <span className="font-agile font-bold text-gray-900 text-xs">V1S1ON</span>
                <span className="font-agile text-emerald-700 text-tiny block">CORE</span>
              </div>
            </div>
          </div>

          {/* Approach Components */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((approach, index) => (
              <div key={index} className="group fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="frosted-glass p-6 hover-lift h-full relative overflow-hidden">
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 p-0.5 mx-auto group-hover:scale-110 transition-all duration-300">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <approach.icon className={`w-6 h-6 ${approach.color}`} />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-subsection-title text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    {approach.title}
                  </h3>
                  <p className="text-small text-gray-600 leading-relaxed">
                    {approach.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div 
                      className="h-full bg-emerald-600 transition-all duration-1000 ease-out group-hover:w-full"
                      style={{ width: '70%' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center fade-in-up">
          <div className="frosted-glass inline-block px-8 py-4 hover-lift">
            <p className="text-body text-gray-700">
              <span className="text-emerald-700 font-bold">Ecosystem-First Approach:</span> Every component works in harmony
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
