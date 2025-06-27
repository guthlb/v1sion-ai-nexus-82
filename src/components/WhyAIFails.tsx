
import React from 'react';
import { AlertTriangle, Users, Zap, TrendingDown } from 'lucide-react';

const WhyAIFails = () => {
  const challenges = [
    {
      icon: Zap,
      title: "Fragmented Implementation",
      description: "Organizations deploy disconnected AI tools without integration strategy",
      stat: "70%"
    },
    {
      icon: Users,
      title: "Skills Gap Crisis", 
      description: "Companies lack AI expertise to drive meaningful transformation",
      stat: "30%"
    },
    {
      icon: AlertTriangle,
      title: "Change Management Failure",
      description: "Technology without cultural transformation leads to adoption failure",
      stat: "85%"
    }
  ];

  return (
    <section className="section-spacing bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 hover-lift">
            <TrendingDown className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">The Challenge</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-mooxy font-bold text-gray-900 mb-6 fade-in-up">
            Why AI Transformations
            <span className="block text-red-600 mt-2">Fail</span>
          </h2>
          <p className="text-xl font-agile text-gray-600 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            Understanding the critical barriers that prevent successful AI adoption
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <div key={index} className="group fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
              <div className="glass-card p-8 text-center hover-lift h-full relative overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 code-bg opacity-20" />
                
                {/* Stat Badge */}
                <div className="absolute top-4 right-4 bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-mono font-semibold">
                  {challenge.stat}
                </div>

                {/* Icon */}
                <div className="relative mb-6 z-10">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300">
                    <challenge.icon className="w-8 h-8 text-gray-700 group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-agile font-semibold text-gray-900 mb-4 relative z-10">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed relative z-10">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Insight */}
        <div className="mt-16 text-center fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="glass-card inline-block px-8 py-4 hover-lift">
            <span className="stat-counter text-2xl font-bold text-red-600 mr-2">₹257T</span>
            <span className="text-gray-600 font-agile">lost annually to poor AI implementation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAIFails;
