import React from "react";
import { Link } from "react-router-dom";
import "./ToursSection.css";

// Данные о турах
const tours = [
  {
    date: "jun. 25, 2024",
    venue: "Олимпийский",
    location: "Москва, Россия",
    link: "/tours",
  },
  {
    date: "jun. 26, 2024",
    venue: "Средний стадион",
    location: "Берлин, Германия",
    link: "/tours",
  },
  {
    date: "jun. 27, 2024",
    venue: "Большой стадион",
    location: "Бристоль, Англия",
    link: "/tours",
  },
  {
    date: "jun. 28, 2024",
    venue: "OpenAir",
    location: "Рим, Италия",
    link: "/tours",
  },
  {
    date: "jun. 29, 2024",
    venue: "Тут ещё что-то",
    location: "Где-то",
    link: "/tours",
  },
  {
    date: "jun. 30, 2024",
    venue: "Соц. Сеть фест",
    location: "Санкт-Петербург, Россия",
    link: "/tours",
  },
  {
    date: "jun. 31, 2024",
    venue: "Дикая Сладость",
    location: "Париж, Франция",
    link: "/tours",
  },
  {
    date: "jun. 32, 2024",
    venue: "Рок фестиваль",
    location: "Атланта, США",
    link: "/tours",
  },
  {
    date: "jun. 33, 2024",
    venue: "Просто потому что я здесь живу",
    location: "Санкт-Петербург, Россия",
    link: "/tours",
  },
];

// Компонент ToursSection, представляющий секцию с турами
const ToursSection = () => {
  return (
    <section className="tours-section">
      <header className="tours-section__header">
        <h2 className="tours-section__title">Palc в вашем городе!</h2>
        <p className="tours-section__subtitle">
          Или нет, но тут вы могли бы найти свой город
        </p>
      </header>
      <div className="tours-section__table">
        {tours.map((tour, index) => (
          <article className="tours-section__row" key={index}>
            <div className="tours-section__date">{tour.date}</div>
            <div className="tours-section__venue">{tour.venue}</div>
            <div className="tours-section__location">{tour.location}</div>
            <div className="tours-section__link">
              <Link to={tour.link} className="tours-section__button">
                Билеты
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ToursSection;
