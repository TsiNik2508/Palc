import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MerchSection.css";
import merchImage from "../../images/merch1.jpg";

// Компонент MerchSection, представляющий секцию с мерчем
const MerchSection = ({ addToCart }) => {
  const [selectedMerch, setSelectedMerch] = useState(null); // Состояние для выбранного мерча
  const [currentSlide, setCurrentSlide] = useState(0); // Состояние для текущего слайда
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Состояние для ширины окна
  const [showTitle, setShowTitle] = useState(true); // Состояние для отображения заголовка
  const timerRef = useRef(null); // Ref для хранения таймера
  const location = useLocation(); // Получение текущего пути

  // Данные о товарах
  const merchItems = [
    {
      id: 1,
      title: "Тут",
      price: "1000 руб",
      description: "А вообще очень ждем разные коллекции",
      image: merchImage,
    },
    {
      id: 2,
      title: "Мог",
      price: "1000 руб",
      description: "А вообще очень ждем разные коллекции",
      image: merchImage,
    },
    {
      id: 3,
      title: "Бы",
      price: "1000 руб",
      description: "А вообще очень ждем разные коллекции",
      image: merchImage,
    },
    {
      id: 4,
      title: "Быть",
      price: "1000 руб",
      description: "А вообще очень ждем разные коллекции",
      image: merchImage,
    },
    {
      id: 5,
      title: "Мерч",
      price: "1000 руб",
      description: "А вообще очень ждем разные коллекции",
      image: merchImage,
    },
    {
      id: 6,
      title: "Но",
      price: "1000 руб",
      description: "А вообще очень ждем разные коллекции",
      image: merchImage,
    },
    {
      id: 7,
      title: "Его",
      price: "1000 руб",
      description: "А вообще очень ждем разные коллекции",
      image: merchImage,
    },
    {
      id: 8,
      title: "Нет:(",
      price: "1000 руб",
      description: "А вообще очень ждем разные коллекции",
      image: merchImage,
    },
  ];

  // Функция для обработки клика по карточке товара
  const handleCardClick = (index) => {
    if (index === currentSlide) {
      setSelectedMerch(merchItems[index]);
      clearInterval(timerRef.current); // Остановка таймера при открытии попапа
    } else {
      setCurrentSlide(index); // Переключение на выбранный слайд
    }
  };

  // Функция для закрытия попапа
  const handleClosePopup = () => {
    setSelectedMerch(null);
    startTimer(); // Возобновление таймера при закрытии попапа
  };

  // Функция для запуска таймера
  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % merchItems.length);
    }, 8000);
  };

  // Запуск таймера при монтировании компонента
  useEffect(() => {
    startTimer();

    // Очистка таймера при размонтировании компонента
    return () => clearInterval(timerRef.current);
  }, []);

  // Обработчик закрытия попапа по нажатию клавиши Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClosePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Обработчик изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Сброс таймера при изменении слайда, если попап не открыт
  useEffect(() => {
    if (!selectedMerch) {
      startTimer();
    }
  }, [currentSlide, selectedMerch]);

  // Скрытие заголовка "Наш мерч" при переходе на страницу туров
  useEffect(() => {
    if (location.pathname === "/tours") {
      setShowTitle(false);
    } else {
      setShowTitle(true);
    }
  }, [location.pathname]);

  // Получение свойств для карусели в зависимости от ширины окна
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
        showArrows: false, // Скрыть стрелки
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
        showArrows: false, // Скрыть стрелки
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
      showArrows: false, // Скрыть стрелки
    };
  };

  return (
    <section className="merch-section">
      {showTitle && <h2 className="merch-section__title">Наш мерч</h2>}
      <Carousel {...getCarouselProps()}>
        {merchItems.map((merch, index) => (
          <div
            key={merch.id}
            className={`merch-section__card ${
              index === currentSlide
                ? "merch-section__card--center"
                : "merch-section__card--semi-transparent"
            }`}
            onClick={() => handleCardClick(index)}
          >
            <img
              src={merch.image}
              alt={merch.title}
              className="merch-section__image"
            />
            <div className="merch-section__info">
              <h3 className="merch-section__title">{merch.title}</h3>
              <p className="merch-section__price">{merch.price}</p>
              <button
                className="merch-section__buy-button"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(merch);
                }}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </Carousel>
      {selectedMerch && (
        <div className="merch-section__popup" onClick={handleClosePopup}>
          <div
            className="merch-section__popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="merch-section__close-button"
              onClick={handleClosePopup}
            >
              &times;
            </span>
            <img
              src={selectedMerch.image}
              alt={selectedMerch.title}
              className="merch-section__popup-image"
            />
            <h3 className="merch-section__popup-title">
              {selectedMerch.title}
            </h3>
            <p className="merch-section__popup-description">
              {selectedMerch.description}
            </p>
            <p className="merch-section__popup-price">{selectedMerch.price}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MerchSection;
