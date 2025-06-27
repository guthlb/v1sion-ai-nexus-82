
import React, { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Globe, AlertCircle, Target } from 'lucide-react';

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

    const duration = 3000;
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
    { 
      icon: Globe,
      value: `₹${counts.market}T`, 
      label: "Market by 2035", 
      color: "from-green-400 to-emerald-600",
      glow: "shadow-green-500/20"
    },
    { 
      icon: TrendingUp,
      value: `${counts.growth}%`, 
      label: "AI Consulting CAGR", 
      color: "from-blue-400 to-cyan-600",
      glow: "shadow-blue-500/20"
    },
    { 
      icon: Target,
      value: `${counts.adoption}%`, 
      label: "Enterprise AI Adoption", 
      color: "from-[#00f0ff] to-[#0080ff]",
      glow: "shadow-cyan-500/20"
    },
    { 
      icon: AlertCircle,
      value: `₹${counts.lost}T`, 
      label: "Lost to Poor Implementation", 
      color: "from-red-400 to-rose-600",
      glow: "shadow-red-500/20"
    },
    { 
      icon: DollarSign,
      value: `${counts.production}%`, 
      label: "AI Models Reach Production", 
      color: "from-orange-400 to-yellow-600",
      glow: "shadow-orange-500/20"
    }
  ];

  return (
    <section className="cinematic-section bg-gradient-to-b from-[#151922] to-[#0a0e17]">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <TrendingUp className="w-5 h-5 text-[#00f0ff]" />
            <span className="text-sm font-agile text-gray-300 uppercase tracking-wider">Market Intelligence</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-mooxy font-black text-white mb-6 floating-text">
            Market Opportunity
            <span className="block bg-gradient-to-r from-[#00f0ff] to-[#b967ff] bg-clip-text text-transparent">
              Snapshot
            </span>
          </h2>
          <p className="text-xl font-agile text-gray-400">
            The AI transformation landscape presents unprecedented opportunities
          </p>
        </div>

        {/* Holographic Dashboard */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Central Quantum Core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <div className="quantum-orbit">
              <div className="orbit-ring w-full h-full opacity-30" />
              <div className="orbit-ring w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" style={{animationDuration: '15s'}} />
              <div className="orbit-ring w-1/2 h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" style={{animationDuration: '10s'}} />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className={`glass-card p-6 text-center hover-zoom transition-all duration-500 group-hover:${stat.glow} shadow-2xl`}>
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} p-0.5 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-full bg-[#0a0e17] flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    {/* Icon Glow */}
                    <div className={`absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-lg mx-auto group-hover:opacity-40 transition-opacity duration-300`} />
                  </div>

                  {/* Value */}
                  <div className={`data-counter text-2xl md:text-3xl font-black mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-xs md:text-sm text-gray-400 font-agile font-medium leading-tight">
                    {stat.label}
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-4 bg-gray-800 rounded-full h-1 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                      style={{ 
                        width: `${
                          stat.label.includes('Market') ? (counts.market / 7.5) * 100 :
                          stat.label.includes('CAGR') ? (counts.growth / 26.2) * 100 :
                          stat.label.includes('Adoption') ? (counts.adoption / 59) * 100 :
                          stat.label.includes('Lost') ? (counts.lost / 257) * 100 :
                          (counts.production / 8) * 100
                        }%` 
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block px-8 py-4 max-w-2xl">
            <p className="text-gray-300 font-agile">
              <span className="data-counter text-[#00f0ff] font-bold">Only 8%</span> of AI models reach production - 
              <span className="text-white font-semibold"> massive opportunity for systematic transformation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
