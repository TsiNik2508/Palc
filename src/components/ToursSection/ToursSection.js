import React from 'react';
import { Link } from 'react-router-dom';
import './ToursSection.css';

const tours = [
  { date: 'jun. 25, 2024', venue: 'Олимпийский', location: 'Москва, Россия', link: '/tours' },
  { date: 'jun. 26, 2024', venue: 'Средний стадион', location: 'Берлин, Германия', link: '/tours' },
  { date: 'jun. 27, 2024', venue: 'Большой стадион', location: 'Бристоль, Англия', link: '/tours' },
  { date: 'jun. 28, 2024', venue: 'OpenAir', location: 'Рим, Италия', link: '/tours' },
  { date: 'jun. 29, 2024', venue: 'Тут ещё что-то', location: 'Где-то', link: '/tours' },
  { date: 'jun. 30, 2024', venue: 'Соц. Сеть фест', location: 'Санкт-Петербург, Россия', link: '/tours' },
  { date: 'jun. 31, 2024', venue: 'Дикая Сладость', location: 'Париж, Франция', link: '/tours' },
  { date: 'jun. 32, 2024', venue: 'Рок фестиваль', location: 'Атланта, США', link: '/tours' },
  { date: 'jun. 33, 2024', venue: 'Просто потому что я здесь живу', location: 'Санкт-Петербург, Россия', link: '/tours' }
];

const ToursSection = () => {
  return (
    <section className="tours-section">
      <h2>Palc в вашем городе!</h2>
      <p>Или нет, но тут вы могли бы найти свой город</p>
      <div className="tours-table">
        {tours.map((tour, index) => (
          <div className="tour-row" key={index}>
            <div className="tour-date">{tour.date}</div>
            <div className="tour-venue">{tour.venue}</div>
            <div className="tour-location">{tour.location}</div>
            <div className="tour-link">
              <Link to={tour.link} className="tour-button">Билеты</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToursSection;