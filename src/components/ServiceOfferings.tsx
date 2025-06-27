
import React from 'react';

const ServiceOfferings = () => {
  const services = [
    {
      title: "AI Readiness Audits",
      price: "₹25,000 - ₹75,000",
      period: "per engagement",
      features: [
        "Comprehensive AI maturity assessment",
        "Technology stack evaluation",
        "Skills gap analysis",
        "Strategic roadmap recommendations"
      ]
    },
    {
      title: "Strategic AI Roadmaps",
      price: "₹50,000 - ₹2,00,000",
      period: "per project",
      features: [
        "Custom AI transformation strategy",
        "Implementation timeline",
        "Resource allocation planning",
        "ROI projections and KPIs"
      ]
    },
    {
      title: "Implementation Services",
      price: "₹1,00,000 - ₹5,00,000",
      period: "per deployment",
      features: [
        "End-to-end AI solution deployment",
        "System integration and testing",
        "Training and knowledge transfer",
        "Performance optimization"
      ]
    },
    {
      title: "Fractional CAIO",
      price: "₹25,000 - ₹75,000",
      period: "per month",
      features: [
        "Part-time Chief AI Officer services",
        "Strategic AI leadership",
        "Team mentoring and guidance",
        "Ongoing optimization support"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Service Offerings & Pricing
          </h2>
          <p className="text-lg text-slate-600">
            Flexible engagement models tailored to your transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-teal-600">{service.price}</span>
                <span className="text-slate-600 text-sm ml-1">{service.period}</span>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-slate-600 flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
