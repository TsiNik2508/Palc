import React from 'react';
import ToursSection from '../ToursSection/ToursSection.js';
import MerchSection from '../MerchSection/MerchSection.js';
import './ToursPage.css';

const ToursPage = () => {
  return (
    <div className="tours-page">
      <ToursSection />
      <h2 className="section-title">Туровый мерч</h2>
      <MerchSection showTitle={false} />
    </div>
  );
};

export default ToursPage;
