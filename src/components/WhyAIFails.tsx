
import React from 'react';
import { AlertTriangle, Users, Zap } from 'lucide-react';

const WhyAIFails = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fragmented Implementation",
      description: "Organizations deploy disconnected AI tools without integration strategy"
    },
    {
      icon: Users,
      title: "Skills Gap Crisis",
      description: "30% of companies lack AI expertise to drive meaningful transformation"
    },
    {
      icon: AlertTriangle,
      title: "Change Management Failure",
      description: "Technology without cultural transformation leads to adoption failure"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why AI Transformations Fail
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Understanding the critical barriers that prevent successful AI adoption
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{reason.title}</h3>
              <p className="text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAIFails;
