import React from "react";
import MerchSection from "../MerchSection/MerchSection";
import "./MerchPage.css";

// Компонент MerchPage, представляющий страницу с мерчем
const MerchPage = () => {
  return (
    <main className="merch-page">
      <MerchSection showTitle={false} />
    </main>
  );
};

export default MerchPage;
