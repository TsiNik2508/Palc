import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header/Header.js";
import Footer from "../src/components/Footer/Footer.js";
import "./styles/App.css";
import LogoSection from "../src/components/LogoSection/LogoSection.js";
import AlbumCardsSection from "../src/components/AlbumCardsSection/AlbumCardsSection.js";
import MerchSection from "../src/components/MerchSection/MerchSection.js";
import ToursSection from "../src/components/ToursSection/ToursSection.js";
import CreativityPage from "../src/components/CreativityPage/CreativityPage.js";
import ToursPage from "../src/components/ToursPage/ToursPage.js";
import MerchPage from "../src/components/MerchPage/MerchPage.js";
import Gallery from "../src/components/Gallery/Gallery.js";
import ScrollToTop from "../src/utils/ScrollToTop.js";

// Главный компонент приложения
function App() {
  const [cartItems, setCartItems] = useState([]);

  // Функция для добавления товара в корзину
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Функция для увеличения количества товара в корзине
  const addItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Функция для уменьшения количества товара в корзине
  const decreaseItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Функция для удаления товара из корзины
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router basename="/Palc">
      <ScrollToTop /> {/* Компонент для прокрутки страницы вверх при изменении маршрута */}
      <div className="App">
        <Header
          cartItems={cartItems}
          addItem={addItem}
          removeItem={removeItem}
          decreaseItem={decreaseItem}
        /> {/* Шапка сайта */}
        <main className="App__main">
          <Routes>
            {/* Главная страница */}
            <Route
              path="/"
              element={
                <div>
                  <LogoSection />
                  <AlbumCardsSection />
                  <MerchSection addToCart={addToCart} showTitle={true} />
                  <ToursSection />
                </div>
              }
            />
            {/* Страницы сайта */}
            <Route path="/creativity" element={<CreativityPage />} />
            <Route path="/tours" element={<ToursPage addToCart={addToCart} />} />
            <Route path="/merch" element={<MerchPage addToCart={addToCart} />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer /> {/* Подвал сайта */}
      </div>
    </Router>
  );
}

// Временные компоненты для MusicPage и GalleryPage
const MusicPage = () => <div>Музыка</div>;
const GalleryPage = () => <div>Галерея</div>;

export default App;
