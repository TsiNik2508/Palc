import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MerchSection.css';
import merchImage from '../../images/merch1.jpg';

const MerchSection = () => {
  const [selectedMerch, setSelectedMerch] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const timerRef = useRef(null); // Ref для хранения таймера

  const merchItems = [
    { id: 1, title: 'Тут', price: '1000 руб', description: 'А вообще очень ждем разные коллекции' },
    { id: 2, title: 'Мог', price: '1000 руб', description: 'А вообще очень ждем разные коллекции' },
    { id: 3, title: 'Бы', price: '1000 руб', description: 'А вообще очень ждем разные коллекции' },
    { id: 4, title: 'Быть', price: '1000 руб', description: 'А вообще очень ждем разные коллекции' },
    { id: 5, title: 'Мерч', price: '1000 руб', description: 'А вообще очень ждем разные коллекции' },
    { id: 6, title: 'Но', price: '1000 руб', description: 'А вообще очень ждем разные коллекции' },
    { id: 7, title: 'Его', price: '1000 руб', description: 'А вообще очень ждем разные коллекции' },
    { id: 8, title: 'Нет:(', price: '1000 руб', description: 'А вообще очень ждем разные коллекции' },
  ];

  const handleCardClick = (index) => {
    setSelectedMerch(merchItems[index]);
  };

  const handleClosePopup = () => {
    setSelectedMerch(null);
  };

  // Функция для запуска таймера
  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % merchItems.length);
    }, 15000);
  };

  useEffect(() => {
    startTimer(); // Запуск таймера при монтировании компонента

    return () => clearInterval(timerRef.current); // Очистка таймера при размонтировании компонента
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClosePopup();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    startTimer(); // Сброс таймера при изменении слайда
  }, [currentSlide]);

  const getCarouselProps = () => {
    if (windowWidth < 768) {
      return {
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        selectedItem: currentSlide,
        centerMode: false,
        swipeable: true,
        emulateTouch: true,
        onChange: (index) => setCurrentSlide(index),
        showArrows: true,
      };
    }

    if (windowWidth < 1085) {
      return {
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        selectedItem: currentSlide,
        centerMode: true,
        centerSlidePercentage: 80,
        swipeable: true,
        emulateTouch: true,
        onChange: (index) => setCurrentSlide(index),
        showArrows: true,
      };
    }

    return {
      showThumbs: false,
      showStatus: false,
      infiniteLoop: true,
      selectedItem: currentSlide,
      centerMode: true,
      centerSlidePercentage: 40,
      swipeable: true,
      emulateTouch: true,
      onChange: (index) => setCurrentSlide(index),
    };
  };

  return (
    <div className="merch-section">
      <h2>Наш мерч</h2>
      <Carousel {...getCarouselProps()}>
        {merchItems.map((merch, index) => (
          <div
            key={merch.id}
            className={`merch-card ${index === currentSlide ? 'center-card' : 'semi-transparent'}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={merchImage} alt={merch.title} />
            <div className="merch-info">
              <h3>{merch.title}</h3>
              <p>{merch.price}</p>
              <Link to={`/merch`} className="buy-button" onClick={(e) => e.stopPropagation()}>Купить</Link>
            </div>
          </div>
        ))}
      </Carousel>
      {selectedMerch && (
        <div className="merch-popup" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={handleClosePopup}>&times;</span>
            <img src={merchImage} alt={selectedMerch.title} />
            <h3>{selectedMerch.title}</h3>
            <p>{selectedMerch.description}</p>
            <p>{selectedMerch.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchSection;
