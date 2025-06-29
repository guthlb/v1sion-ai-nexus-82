import React from 'react';
import Navigation from '../components/Navigation';
import { Package, Download, Star, CheckCircle, ArrowRight, Zap, Target, Users, Code, BookOpen, Wrench } from 'lucide-react';

const KitsPage = () => {
  const kits = [
    {
      id: 1,
      title: "AI Readiness Assessment Kit",
      description: "Comprehensive toolkit to evaluate your organization's AI maturity and transformation potential",
      price: "₹15,000",
      originalPrice: "₹25,000",
      category: "Assessment",
      icon: Target,
      features: [
        "AI Maturity Assessment Framework",
        "Organizational Readiness Checklist",
        "Skills Gap Analysis Templates",
        "ROI Calculation Worksheets",
        "Strategic Planning Templates",
        "Implementation Roadmap Guide"
      ],
      downloads: "2,500+",
      rating: 4.9,
      popular: true
    },
    {
      id: 2,
      title: "AI Strategy Development Kit",
      description: "Complete framework for developing and implementing AI transformation strategies",
      price: "₹35,000",
      originalPrice: "₹50,000",
      category: "Strategy",
      icon: Zap,
      features: [
        "Strategic Planning Framework",
        "Business Case Templates",
        "Technology Stack Guidelines",
        "Change Management Playbook",
        "Risk Assessment Tools",
        "Success Metrics Dashboard"
      ],
      downloads: "1,800+",
      rating: 4.8
    },
    {
      id: 3,
      title: "AI Implementation Toolkit",
      description: "Practical tools and templates for executing AI transformation projects",
      price: "₹45,000",
      originalPrice: "₹65,000",
      category: "Implementation",
      icon: Wrench,
      features: [
        "Project Management Templates",
        "Technical Architecture Guides",
        "Data Governance Framework",
        "Testing & Validation Tools",
        "Training Materials",
        "Performance Monitoring Setup"
      ],
      downloads: "1,200+",
      rating: 4.9
    },
    {
      id: 4,
      title: "AI Leadership Playbook",
      description: "Executive guide for leading AI transformation initiatives",
      price: "₹25,000",
      originalPrice: "₹40,000",
      category: "Leadership",
      icon: Users,
      features: [
        "Executive Decision Framework",
        "Team Building Guidelines",
        "Stakeholder Management Tools",
        "Communication Templates",
        "Budget Planning Worksheets",
        "Governance Structure Guide"
      ],
      downloads: "950+",
      rating: 4.7
    },
    {
      id: 5,
      title: "AI Developer Resources",
      description: "Technical resources and code templates for AI development teams",
      price: "₹30,000",
      originalPrice: "₹45,000",
      category: "Development",
      icon: Code,
      features: [
        "Code Templates & Snippets",
        "API Integration Guides",
        "Model Training Frameworks",
        "Deployment Automation Scripts",
        "Testing Suites",
        "Documentation Templates"
      ],
      downloads: "2,100+",
      rating: 4.8
    },
    {
      id: 6,
      title: "AI Training & Education Kit",
      description: "Comprehensive training materials for AI skill development",
      price: "₹20,000",
      originalPrice: "₹35,000",
      category: "Education",
      icon: BookOpen,
      features: [
        "Training Curriculum Design",
        "Workshop Materials",
        "Assessment Tools",
        "Certification Framework",
        "Learning Path Guides",
        "Progress Tracking Tools"
      ],
      downloads: "1,600+",
      rating: 4.6
    }
  ];

  const categories = ["All", "Assessment", "Strategy", "Implementation", "Leadership", "Development", "Education"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-spacing bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-6">
                <Package className="w-4 h-4 text-emerald-700" />
                <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">AI Transformation Kits</span>
              </div>
              
              <h1 className="text-section-title text-gray-900 mb-4 fade-in-up">
                Ready-to-Use AI
                <span className="block text-gradient">Transformation Kits</span>
              </h1>
              <p className="text-body-large text-gray-600 fade-in-up max-w-3xl mx-auto">
                Accelerate your AI transformation with our comprehensive toolkits, templates, and frameworks designed by industry experts
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-emerald-700 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Kits Grid */}
        <section className="section-spacing bg-gray-50">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kits.map((kit, index) => (
                <div key={kit.id} className="group relative fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                  
                  {/* Popular Badge */}
                  {kit.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="frosted-glass px-3 py-1 bg-emerald-50 border border-emerald-200">
                        <span className="text-tiny font-bold text-emerald-700 uppercase tracking-wider">Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className={`frosted-glass p-6 hover-lift h-full relative overflow-hidden ${kit.popular ? 'border-emerald-300 shadow-lg shadow-emerald-100' : ''}`}>
                    
                    {/* Kit Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 p-0.5 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <kit.icon className="w-6 h-6 text-emerald-700" />
                        </div>
                      </div>
                      <span className="text-tiny font-bold px-3 py-1 rounded-full bg-gray-100 text-emerald-700">
                        {kit.category}
                      </span>
                    </div>

                    <h3 className="text-subsection-title text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                      {kit.title}
                    </h3>
                    
                    <p className="text-small text-gray-600 mb-4 leading-relaxed">
                      {kit.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="stat-counter text-xl font-bold text-emerald-700">
                          {kit.price}
                        </span>
                        <span className="text-gray-500 line-through text-sm">
                          {kit.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-tiny text-gray-600">
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{kit.downloads} downloads</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-500 fill-current" />
                          <span>{kit.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-small font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {kit.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-tiny text-gray-600 flex items-start">
                            <CheckCircle className="w-3 h-3 text-emerald-700 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {kit.features.length > 4 && (
                          <li className="text-tiny text-gray-500 italic">
                            +{kit.features.length - 4} more items...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <button className="w-full professional-button text-center flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Download Kit
                      </button>
                      <button className="w-full professional-button-secondary text-center flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
                      <div 
                        className="h-full bg-emerald-600 transition-all duration-1000 ease-out group-hover:w-full"
                        style={{ width: '60%' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bundle Offer */}
        <section className="section-spacing bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="frosted-glass p-8 hover-lift">
                <h3 className="text-subsection-title text-gray-900 mb-4">
                  Complete AI Transformation Bundle
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  Get all 6 kits at a special bundle price and save ₹80,000
                </p>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="stat-counter text-3xl font-bold text-emerald-700">₹1,50,000</span>
                  <span className="text-gray-500 line-through text-xl">₹2,30,000</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">35% OFF</span>
                </div>
                <button className="professional-button text-lg px-8 py-4">
                  Get Complete Bundle
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="section-spacing bg-gray-50">
          <div className="section-container">
            <div className="text-center">
              <h3 className="text-subsection-title text-gray-900 mb-4">
                Need Help Choosing the Right Kit?
              </h3>
              <p className="text-body text-gray-600 mb-8">
                Our experts can help you select the perfect toolkit for your transformation journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="professional-button">
                  Schedule Consultation
                </button>
                <button className="professional-button-secondary">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KitsPage;