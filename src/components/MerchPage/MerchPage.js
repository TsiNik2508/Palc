import React from "react";
import MerchSection from "../MerchSection/MerchSection";
import "./MerchPage.css";

// Компонент MerchPage, представляющий страницу с мерчем
const MerchPage = ({ addToCart }) => {
  return (
    <main className="merch-page">
      <MerchSection showTitle={false} addToCart={addToCart} />
    </main>
  );
};

export default MerchPage;
