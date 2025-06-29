import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Users, DollarSign, Star, Quote } from 'lucide-react';

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
      color: "text-emerald-700",
      description: "Accelerated implementation cycles"
    },
    {
      icon: DollarSign,
      value: `${metrics.roi}%`,
      label: "Improvement in AI Project ROI",
      color: "text-gray-900",
      description: "Enhanced return on investment"
    },
    {
      icon: Users,
      value: `${metrics.satisfaction}%`,
      label: "Client Satisfaction Scores",
      color: "text-emerald-700",
      description: "Exceptional client experience"
    },
    {
      icon: Target,
      value: `${metrics.costs}%`,
      label: "Reduction in Implementation Costs",
      color: "text-gray-900",
      description: "Optimized resource utilization"
    }
  ];

  const [clientStats, setClientStats] = useState({
    fortune: 0,
    startups: 0,
    countries: 0,
    industries: 0
  });

  useEffect(() => {
    const clientTargets = {
      fortune: 25,
      startups: 100,
      countries: 12,
      industries: 8
    };

    const duration = 2500;
    const steps = 50;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      
      setClientStats({
        fortune: Math.round(clientTargets.fortune * progress),
        startups: Math.round(clientTargets.startups * progress),
        countries: Math.round(clientTargets.countries * progress),
        industries: Math.round(clientTargets.industries * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Chief Technology Officer",
      company: "TechCorp India",
      rating: 5,
      review: "V1S1ON's ecosystem approach transformed our entire organization. The ROI exceeded our projections by 40%, and their V0RA platform integration gave us persistent memory capabilities we never thought possible. Absolutely game-changing.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Digital Innovation",
      company: "FinanceFirst Solutions",
      rating: 5,
      review: "The strategic roadmap V1S1ON developed for us was incredibly detailed and practical. Their change management approach ensured 95% adoption across our teams. The results speak for themselves - 60% faster deployment cycles.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "VP of Operations",
      company: "Global Manufacturing Ltd",
      rating: 4,
      review: "Working with V1S1ON was a revelation. Their vendor-agnostic approach saved us from costly lock-ins, and the V3RSE talent network provided exactly the expertise we needed. Highly recommend for any serious AI transformation.",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 4,
      name: "Anita Desai",
      role: "Chief Data Officer",
      company: "Healthcare Innovations",
      rating: 5,
      review: "V1S1ON's implementation methodology is unmatched. They didn't just deliver technology - they transformed our culture. The persistent memory integration has made our AI systems truly intelligent and adaptive.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-amber-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="impact" className="section-spacing bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-emerald-700" />
            <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">Performance Metrics</span>
          </div>
          
          <h2 className="text-section-title text-gray-900 mb-4 fade-in-up">
            Measurable
            <span className="block text-gradient">Business Impact</span>
          </h2>
          <p className="text-body-large text-gray-600 fade-in-up">
            Proven results that drive real transformation
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {impacts.map((impact, index) => (
            <div key={index} className="group fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
              <div className="frosted-glass p-4 text-center hover-lift h-full relative overflow-hidden">
                
                {/* Icon */}
                <div className="relative mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 p-0.5 mx-auto group-hover:scale-110 transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <impact.icon className={`w-6 h-6 ${impact.color}`} />
                    </div>
                  </div>
                </div>

                {/* Metric Value */}
                <div className={`stat-counter text-xl md:text-2xl font-bold mb-2 ${impact.color}`}>
                  {impact.value}
                </div>

                {/* Label */}
                <div className="text-tiny text-gray-900 font-semibold mb-2 leading-tight">
                  {impact.label}
                </div>

                {/* Description */}
                <div className="text-tiny text-gray-600 mb-3">
                  {impact.description}
                </div>

                {/* Animated Progress Bar */}
                <div className="bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-600 transition-all duration-2000 ease-out"
                    style={{ width: `${impact.value.replace('%', '')}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="frosted-glass p-6 text-center">
            <h3 className="text-subsection-title text-gray-900 mb-4">
              Transforming Organizations Across Industries
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[
                { label: "Fortune 500", value: `${clientStats.fortune}+`, color: "text-emerald-700" },
                { label: "Startups", value: `${clientStats.startups}+`, color: "text-gray-900" },
                { label: "Countries", value: clientStats.countries, color: "text-emerald-700" },
                { label: "Industries", value: clientStats.industries, color: "text-gray-900" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`stat-counter text-xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-tiny text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-body text-gray-700">
              From enterprise transformation to startup acceleration, our proven methodology delivers consistent, 
              <span className="text-emerald-700 font-semibold"> measurable results across diverse organizational contexts</span>.
            </p>
          </div>
        </div>

        {/* Client Testimonials Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-6">
              <Quote className="w-4 h-4 text-emerald-700" />
              <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">Client Success Stories</span>
            </div>
            
            <h3 className="text-subsection-title text-gray-900 mb-4 fade-in-up">
              What Our Clients Say About
              <span className="block text-gradient">Their Transformation</span>
            </h3>
            <p className="text-body text-gray-600 fade-in-up">
              Real experiences from organizations that have transformed with V1S1ON
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="group fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="frosted-glass p-6 hover-lift h-full relative overflow-hidden">
                  
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-8 h-8 text-emerald-700" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="text-tiny text-gray-600 ml-2">({testimonial.rating}/5)</span>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-body text-gray-700 mb-6 leading-relaxed italic relative z-10">
                    "{testimonial.review}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-small">
                        {testimonial.name}
                      </div>
                      <div className="text-tiny text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-tiny text-emerald-700 font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Summary */}
          <div className="text-center mt-12 fade-in-up">
            <div className="frosted-glass inline-block px-8 py-4 hover-lift">
              <div className="flex items-center justify-center gap-6 text-tiny font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {renderStars(5)}
                  </div>
                  <span>4.8/5 Average Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>150+ Success Stories</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-900" />
                  <span>98% Client Retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;