import React from 'react';
import Navigation from '../components/Navigation';
import OurApproach from '../components/OurApproach';
import ProvenFramework from '../components/ProvenFramework';

const OurApproachPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <OurApproach />
        <ProvenFramework />
      </div>
    </div>
  );
};

export default OurApproachPage;