
import React from 'react';
import Hero from '../components/Hero';
import WhyAIFails from '../components/WhyAIFails';
import MarketOpportunity from '../components/MarketOpportunity';
import OurApproach from '../components/OurApproach';
import ServiceOfferings from '../components/ServiceOfferings';
import ProvenFramework from '../components/ProvenFramework';
import Differentiators from '../components/Differentiators';
import BusinessImpact from '../components/BusinessImpact';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhyAIFails />
      <MarketOpportunity />
      <OurApproach />
      <ServiceOfferings />
      <ProvenFramework />
      <Differentiators />
      <BusinessImpact />
      <ContactSection />
    </div>
  );
};

export default Index;
