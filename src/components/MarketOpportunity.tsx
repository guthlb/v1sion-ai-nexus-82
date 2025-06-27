
import React, { useState, useEffect } from 'react';

const MarketOpportunity = () => {
  const [counts, setCounts] = useState({
    market: 0,
    growth: 0,
    adoption: 0,
    lost: 0,
    production: 0
  });

  useEffect(() => {
    const targets = {
      market: 7.5,
      growth: 26.2,
      adoption: 59,
      lost: 257,
      production: 8
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        market: Math.round(targets.market * progress * 10) / 10,
        growth: Math.round(targets.growth * progress * 10) / 10,
        adoption: Math.round(targets.adoption * progress),
        lost: Math.round(targets.lost * progress),
        production: Math.round(targets.production * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: `₹${counts.market}T`, label: "Market by 2035", color: "text-green-600" },
    { value: `${counts.growth}%`, label: "AI Consulting CAGR", color: "text-blue-600" },
    { value: `${counts.adoption}%`, label: "Enterprise AI Adoption", color: "text-teal-600" },
    { value: `₹${counts.lost}T`, label: "Lost to Poor Implementation", color: "text-red-600" },
    { value: `${counts.production}%`, label: "AI Models Reach Production", color: "text-orange-600" }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Market Opportunity Snapshot
          </h2>
          <p className="text-lg text-slate-600">
            The AI transformation landscape presents unprecedented opportunities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
