import React from 'react';
import Navigation from '../components/Navigation';
import ServiceOfferings from '../components/ServiceOfferings';
import Differentiators from '../components/Differentiators';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <ServiceOfferings />
        <Differentiators />
      </div>
    </div>
  );
};

export default ServicesPage;