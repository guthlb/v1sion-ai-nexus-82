
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 frosted-glass px-6 py-3 mb-8 hover-lift">
            <TrendingDown className="w-5 h-5 text-red-600 animated-icon" />
            <span className="text-sm font-semibold text-gray-800 uppercase tracking-wider">The Challenge</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-mooxy font-bold text-gray-900 mb-8 fade-in-up">
            Why AI Transformations
            <span className="block text-red-600 mt-4">Fail</span>
          </h2>
          <p className="text-2xl font-agile text-gray-600 max-w-4xl mx-auto fade-in-up leading-relaxed" style={{animationDelay: '0.2s'}}>
            Understanding the critical barriers that prevent successful AI adoption
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <div key={index} className="group fade-in-up" style={{animationDelay: `${0.2 * index}s`}}>
              <div className="frosted-glass p-8 text-center hover-lift h-full relative overflow-hidden">
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 digital-mesh opacity-20" />
                
                {/* Stat Badge */}
                <div className="absolute top-6 right-6 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-mono font-bold border border-red-200">
                  {challenge.stat}
                </div>

                {/* Animated Icon */}
                <div className="relative mb-8 z-10">
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded-3xl flex items-center justify-center group-hover:bg-red-50 transition-all duration-500 border border-gray-200">
                    <challenge.icon className="w-10 h-10 text-gray-700 group-hover:text-red-600 transition-all duration-500 animated-icon" />
                  </div>
                </div>

                <h3 className="text-2xl font-agile font-bold text-gray-900 mb-6 relative z-10">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed text-lg relative z-10">
                  {challenge.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Insight */}
        <div className="mt-20 text-center fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="frosted-glass inline-block px-12 py-6 hover-lift">
            <span className="stat-counter text-3xl font-bold text-red-600 mr-3">₹257T</span>
            <span className="text-gray-700 font-agile text-xl">lost annually to poor AI implementation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAIFails;
