import React from 'react';
import Navigation from '../components/Navigation';
import BusinessImpact from '../components/BusinessImpact';
import MarketOpportunity from '../components/MarketOpportunity';

const ImpactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <BusinessImpact />
        <MarketOpportunity />
      </div>
    </div>
  );
};

export default ImpactPage;