
import React from 'react';
import { Settings, Layers, Wrench, Users } from 'lucide-react';

const OurApproach = () => {
  const approaches = [
    {
      icon: Settings,
      title: "AI Readiness Audit",
      description: "Comprehensive assessment of your organization's AI maturity and transformation potential"
    },
    {
      icon: Layers,
      title: "Ecosystem Architecture",
      description: "Design integrated AI systems that work seamlessly across your entire organization"
    },
    {
      icon: Wrench,
      title: "Implementation & Integration",
      description: "Deploy AI solutions with proven methodologies and continuous optimization"
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Transform culture and processes to ensure sustainable AI adoption"
    }
  ];

  return (
    <section id="approach" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Approach: <span className="text-teal-600">Ecosystem Architecture</span>, Not Just Tools
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We build comprehensive AI ecosystems that transform your entire organization, not just individual processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors group">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                <approach.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{approach.title}</h3>
              <p className="text-slate-600">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
