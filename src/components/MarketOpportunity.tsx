
import React, { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Globe, Target } from 'lucide-react';

const MarketOpportunity = () => {
  const [counts, setCounts] = useState({
    market: 0,
    growth: 0,
    adoption: 0,
    production: 0
  });

  useEffect(() => {
    const targets = {
      market: 7.5,
      growth: 26.2,
      adoption: 59,
      production: 8
    };

    const duration = 2500;
    const steps = 50;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        market: Math.round(targets.market * progress * 10) / 10,
        growth: Math.round(targets.growth * progress * 10) / 10,
        adoption: Math.round(targets.adoption * progress),
        production: Math.round(targets.production * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { 
      icon: Globe,
      value: `₹${counts.market}T`, 
      label: "AI Market by 2035", 
      color: "text-blue-600"
    },
    { 
      icon: TrendingUp,
      value: `${counts.growth}%`, 
      label: "AI Consulting CAGR", 
      color: "text-green-600"
    },
    { 
      icon: Target,
      value: `${counts.adoption}%`, 
      label: "Enterprise Adoption", 
      color: "text-purple-600"
    },
    { 
      icon: DollarSign,
      value: `${counts.production}%`, 
      label: "Models Reach Production", 
      color: "text-orange-600"
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 hover-lift">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">Market Intelligence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-mooxy font-bold text-gray-900 mb-6 fade-in-up">
            Market Opportunity
            <span className="block text-gradient mt-2">Snapshot</span>
          </h2>
          <p className="text-xl font-agile text-gray-600 fade-in-up" style={{animationDelay: '0.2s'}}>
            The AI transformation landscape presents unprecedented opportunities
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="fade-in-up count-up" style={{animationDelay: `${0.1 * index}s`}}>
              <div className="glass-card p-6 text-center hover-lift">
                
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto bg-gray-100 rounded-xl flex items-center justify-center">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>

                {/* Value */}
                <div className={`stat-counter text-2xl md:text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm text-gray-600 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="text-center fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="glass-card inline-block px-8 py-6 max-w-2xl hover-lift">
            <p className="text-gray-700 font-agile text-lg">
              <span className="stat-counter text-orange-600 font-bold">Only 8%</span> of AI models reach production — 
              <span className="font-semibold"> creating massive opportunities for systematic transformation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
