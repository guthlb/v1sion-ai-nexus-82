
import React from 'react';
import { AlertTriangle, Users, Zap, TrendingDown } from 'lucide-react';

const WhyAIFails = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fragmented Implementation",
      description: "Organizations deploy disconnected AI tools without integration strategy",
      stat: "70%",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Skills Gap Crisis", 
      description: "30% of companies lack AI expertise to drive meaningful transformation",
      stat: "30%",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: AlertTriangle,
      title: "Change Management Failure",
      description: "Technology without cultural transformation leads to adoption failure",
      stat: "85%",
      color: "from-red-600 to-red-400"
    }
  ];

  return (
    <section className="cinematic-section bg-gradient-to-b from-[#0a0e17] to-[#151922]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <TrendingDown className="w-5 h-5 text-red-400" />
            <span className="text-sm font-agile text-gray-300 uppercase tracking-wider">Critical Analysis</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-mooxy font-black text-white mb-6 floating-text">
            Why AI Transformations
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Fail
            </span>
          </h2>
          <p className="text-xl font-agile text-gray-400 max-w-3xl mx-auto">
            Understanding the critical barriers that prevent successful AI adoption
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative">
              {/* Glass Card with Hover Effects */}
              <div className="glass-card p-8 text-center hover-zoom group-hover:bg-white/10 transition-all duration-500 h-full">
                
                {/* Stat Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center">
                  <span className="data-counter text-lg font-bold">{reason.stat}</span>
                </div>

                {/* Icon with Glow */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${reason.color} p-0.5 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-full bg-[#0a0e17] flex items-center justify-center">
                      <reason.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br ${reason.color} opacity-20 blur-xl mx-auto group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                <h3 className="text-2xl font-agile font-bold text-white mb-4 group-hover:text-[#00f0ff] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-400 font-inter leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block px-8 py-4">
            <span className="data-counter text-3xl mr-4">₹257T</span>
            <span className="text-gray-400 font-agile">lost annually to poor AI implementation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAIFails;
