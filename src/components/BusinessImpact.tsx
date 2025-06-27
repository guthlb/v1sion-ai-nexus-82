
import React, { useState, useEffect } from 'react';

const BusinessImpact = () => {
  const [metrics, setMetrics] = useState({
    deployment: 0,
    roi: 0,
    satisfaction: 0,
    costs: 0
  });

  useEffect(() => {
    const targets = {
      deployment: 85,
      roi: 60,
      satisfaction: 90,
      costs: 70
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      
      setMetrics({
        deployment: Math.round(targets.deployment * progress),
        roi: Math.round(targets.roi * progress),
        satisfaction: Math.round(targets.satisfaction * progress),
        costs: Math.round(targets.costs * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const impacts = [
    {
      value: `${metrics.deployment}%`,
      label: "Faster AI Deployment Timelines",
      color: "text-green-600"
    },
    {
      value: `${metrics.roi}%`,
      label: "Improvement in AI Project ROI",
      color: "text-blue-600"
    },
    {
      value: `${metrics.satisfaction}%`,
      label: "Client Satisfaction Scores",
      color: "text-teal-600"
    },
    {
      value: `${metrics.costs}%`,
      label: "Reduction in Implementation Costs",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="impact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Measurable Business Impact
          </h2>
          <p className="text-lg text-slate-600">
            Proven results that drive real transformation
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
              <div className={`text-4xl font-bold mb-2 ${impact.color}`}>
                {impact.value}
              </div>
              <div className="text-slate-600 font-medium">
                {impact.label}
              </div>
              <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-2000 ${impact.color.replace('text-', 'bg-')}`}
                  style={{ width: `${impact.value.replace('%', '')}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
