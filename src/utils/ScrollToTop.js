import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Компонент ScrollToTop, автоматически прокручивающий страницу вверх при изменении маршрута
const ScrollToTop = () => {
  const { pathname } = useLocation(); // Получение текущего пути из react-router

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка страницы вверх при изменении пути
  }, [pathname]); // Выполнение эффекта при каждом изменении пути

  return null; // Компонент не рендерит ничего на странице
};

export default ScrollToTop;
