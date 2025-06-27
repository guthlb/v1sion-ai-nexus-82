
import React from 'react';
import { CheckCircle, Zap, Star, Crown } from 'lucide-react';

const ServiceOfferings = () => {
  const services = [
    {
      icon: Zap,
      title: "AI Readiness Audits",
      price: "₹25,000 - ₹75,000",
      period: "per engagement",
      color: "from-blue-400 to-cyan-600",
      tier: "Foundation",
      features: [
        "Comprehensive AI maturity assessment",
        "Technology stack evaluation",
        "Skills gap analysis",
        "Strategic roadmap recommendations"
      ]
    },
    {
      icon: Star,
      title: "Strategic AI Roadmaps",
      price: "₹50,000 - ₹2,00,000",
      period: "per project",
      color: "from-[#00f0ff] to-[#0080ff]",
      tier: "Strategy",
      features: [
        "Custom AI transformation strategy",
        "Implementation timeline",
        "Resource allocation planning",
        "ROI projections and KPIs"
      ]
    },
    {
      icon: Crown,
      title: "Implementation Services",
      price: "₹1,00,000 - ₹5,00,000",
      period: "per deployment",
      color: "from-[#b967ff] to-[#8b4eff]",
      tier: "Enterprise",
      popular: true,
      features: [
        "End-to-end AI solution deployment",
        "System integration and testing",
        "Training and knowledge transfer",
        "Performance optimization"
      ]
    },
    {
      icon: CheckCircle,
      title: "Fractional CAIO",
      price: "₹25,000 - ₹75,000",
      period: "per month",
      color: "from-[#ffd700] to-[#ffb700]",
      tier: "Executive",
      features: [
        "Part-time Chief AI Officer services",
        "Strategic AI leadership",
        "Team mentoring and guidance",
        "Ongoing optimization support"
      ]
    }
  ];

  return (
    <section id="services" className="cinematic-section bg-gradient-to-b from-[#151922] to-[#0a0e17]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Crown className="w-5 h-5 text-[#ffd700]" />
            <span className="text-sm font-agile text-gray-300 uppercase tracking-wider">Service Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-mooxy font-black text-white mb-6 floating-text">
            Service Offerings
            <span className="block bg-gradient-to-r from-[#ffd700] to-[#ffb700] bg-clip-text text-transparent">
              & Pricing
            </span>
          </h2>
          <p className="text-xl font-agile text-gray-400">
            Flexible engagement models tailored to your transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="glass-card px-4 py-1 bg-gradient-to-r from-[#b967ff] to-[#8b4eff] border border-[#b967ff]/30">
                    <span className="text-xs font-agile font-bold text-white uppercase tracking-wider">Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`glass-card p-6 hover-zoom transition-all duration-500 h-full relative overflow-hidden ${service.popular ? 'border-[#b967ff]/50 shadow-lg shadow-[#b967ff]/20' : ''}`}>
                
                {/* Service Tier Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-full bg-[#0a0e17] flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className={`text-xs font-agile font-bold px-3 py-1 rounded-full bg-gradient-to-r ${service.color} bg-opacity-20 text-white`}>
                    {service.tier}
                  </span>
                </div>

                <h3 className="text-xl font-agile font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Pricing */}
                <div className="mb-6">
                  <span className={`data-counter text-2xl font-black bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </span>
                  <span className="text-gray-400 text-sm font-agile block">
                    {service.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-300 flex items-start font-inter">
                      <CheckCircle className="w-4 h-4 text-[#00f0ff] mr-3 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-lg font-agile font-semibold text-white transition-all duration-300 bg-gradient-to-r ${service.color} hover:scale-105 hover:shadow-lg relative overflow-hidden group`}>
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </button>

                {/* Hover Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block px-8 py-4">
            <p className="text-gray-300 font-agile">
              <span className="text-[#ffd700] font-bold">Custom Enterprise Packages:</span> Tailored solutions for unique requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
