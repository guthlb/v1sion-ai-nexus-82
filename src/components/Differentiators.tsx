
import React from 'react';
import { Settings, Layers, Users, Folder } from 'lucide-react';

const Differentiators = () => {
  const differentiators = [
    {
      icon: Settings,
      title: "Vendor-Agnostic Approach",
      description: "Technology-neutral recommendations based on your specific needs, not vendor partnerships"
    },
    {
      icon: Layers,
      title: "Persistent Memory Integration",
      description: "Leverage our V0RA platform for enhanced AI system memory and learning capabilities"
    },
    {
      icon: Users,
      title: "Community-Driven Innovation",
      description: "Access to V3RSE talent network for specialized AI expertise and implementation support"
    },
    {
      icon: Folder,
      title: "Measurable ROI Focus",
      description: "Data-driven approach with clear metrics and continuous optimization for maximum returns"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Unique Differentiators
          </h2>
          <p className="text-lg text-slate-600">
            What sets V1S1ON apart in the AI transformation landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differentiators.map((diff, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <diff.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{diff.title}</h3>
                  <p className="text-slate-600">{diff.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
