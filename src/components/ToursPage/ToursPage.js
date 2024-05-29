import React from "react";
import ToursSection from "../ToursSection/ToursSection.js";
import MerchSection from "../MerchSection/MerchSection.js";
import "./ToursPage.css";

// Компонент ToursPage, представляющий страницу туров
const ToursPage = ({ addToCart }) => {
  return (
    <div className="tours-page">
      <ToursSection />
      <h2 className="section-title">Туровый мерч</h2>
      <MerchSection showTitle={false} addToCart={addToCart} /> {/* Передаем пропс для скрытия заголовка */}
    </div>
  );
};

export default ToursPage;
