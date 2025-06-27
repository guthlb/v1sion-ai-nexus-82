
import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Users, DollarSign } from 'lucide-react';

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

    const duration = 3000;
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
      icon: TrendingUp,
      value: `${metrics.deployment}%`,
      label: "Faster AI Deployment Timelines",
      color: "from-green-400 to-emerald-600",
      description: "Accelerated implementation cycles"
    },
    {
      icon: DollarSign,
      value: `${metrics.roi}%`,
      label: "Improvement in AI Project ROI",
      color: "from-blue-400 to-cyan-600",
      description: "Enhanced return on investment"
    },
    {
      icon: Users,
      value: `${metrics.satisfaction}%`,
      label: "Client Satisfaction Scores",
      color: "from-[#00f0ff] to-[#0080ff]",
      description: "Exceptional client experience"
    },
    {
      icon: Target,
      value: `${metrics.costs}%`,
      label: "Reduction in Implementation Costs",
      color: "from-[#b967ff] to-[#8b4eff]",
      description: "Optimized resource utilization"
    }
  ];

  return (
    <section id="impact" className="cinematic-section bg-gradient-to-b from-[#0a0e17] to-[#151922]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Target className="w-5 h-5 text-green-400" />
            <span className="text-sm font-agile text-gray-300 uppercase tracking-wider">Performance Metrics</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-mooxy font-black text-white mb-6 floating-text">
            Measurable
            <span className="block bg-gradient-to-r from-green-400 to-[#00f0ff] bg-clip-text text-transparent">
              Business Impact
            </span>
          </h2>
          <p className="text-xl font-agile text-gray-400">
            Proven results that drive real transformation
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {impacts.map((impact, index) => (
            <div key={index} className="group">
              <div className="glass-card p-6 text-center hover-zoom transition-all duration-500 group-hover:bg-white/10 h-full relative overflow-hidden">
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${impact.color} p-0.5 mx-auto group-hover:scale-110 transition-all duration-300`}>
                    <div className="w-full h-full rounded-full bg-[#0a0e17] flex items-center justify-center">
                      <impact.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br ${impact.color} opacity-20 blur-xl mx-auto group-hover:opacity-40 transition-opacity duration-300 animate-pulse`} />
                </div>

                {/* Metric Value */}
                <div className={`data-counter text-4xl font-black mb-2 bg-gradient-to-br ${impact.color} bg-clip-text text-transparent`}>
                  {impact.value}
                </div>

                {/* Label */}
                <div className="text-sm text-white font-agile font-bold mb-2 leading-tight group-hover:text-[#00f0ff] transition-colors duration-300">
                  {impact.label}
                </div>

                {/* Description */}
                <div className="text-xs text-gray-400 font-inter mb-4">
                  {impact.description}
                </div>

                {/* Animated Progress Bar */}
                <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${impact.color} transition-all duration-2000 ease-out`}
                    style={{ width: `${impact.value.replace('%', '')}%` }}
                  />
                </div>

                {/* Hover Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${impact.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${impact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-agile font-bold text-white mb-6">
              Transforming Organizations Across Industries
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {[
                { label: "Fortune 500", value: "25+", color: "text-[#00f0ff]" },
                { label: "Startups", value: "100+", color: "text-[#b967ff]" },
                { label: "Countries", value: "12", color: "text-[#ffd700]" },
                { label: "Industries", value: "8", color: "text-green-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`data-counter text-2xl font-black ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-agile font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-300 font-inter">
              From enterprise transformation to startup acceleration, our proven methodology delivers consistent, 
              <span className="text-[#00f0ff] font-semibold"> measurable results across diverse organizational contexts</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
