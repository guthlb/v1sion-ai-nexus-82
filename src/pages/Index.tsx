import React from 'react';
import Hero from '../components/Hero';
import WhyAIFails from '../components/WhyAIFails';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhyAIFails />
    </div>
  );
};

export default Index;