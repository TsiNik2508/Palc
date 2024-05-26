import React from 'react';
import MerchSection from '../MerchSection/MerchSection';
import './MerchPage.css';

const MerchPage = () => {
  return (
    <div className="merch-page">
      <MerchSection showTitle={false} />
    </div>
  );
};

export default MerchPage;
