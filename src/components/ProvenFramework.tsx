
import React from 'react';
import { Settings, Layers, Wrench, Users, Folder, FolderCog } from 'lucide-react';

const ProvenFramework = () => {
  const framework = [
    { icon: Settings, label: "Strategy Alignment" },
    { icon: Layers, label: "Data Infrastructure" },
    { icon: Wrench, label: "Technology Stack" },
    { icon: Users, label: "Talent Development" },
    { icon: Folder, label: "Process Optimization" },
    { icon: FolderCog, label: "Governance & Ethics" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Proven Framework for AI-Native Transformation
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our systematic approach ensures comprehensive transformation across all organizational dimensions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {framework.map((item, index) => (
            <div key={index} className="text-center p-4 rounded-xl hover:bg-slate-50 transition-colors group">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-sm font-medium text-slate-800">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenFramework;
