import React from 'react';
import './ToursSection.css';

const ToursSection = () => {
  const tours = [
    { id: 1, date: '2222-22-23', city: 'London', link: '/buy-tickets' },
    { id: 2, date: '2222-22-24', city: 'Paris', link: '/buy-tickets' },
    { id: 3, date: '2222-22-25', city: 'Berlin', link: '/buy-tickets' },
    { id: 4, date: '2222-22-26', city: 'New York', link: '/buy-tickets' },
    { id: 5, date: '2222-22-27', city: 'Tokyo', link: '/buy-tickets' },
  ];

  return (
    <section className="tours-section">
      <h2 className="tours-header">Группа Palc мчит в ваш город (нет), не упусти возможность купить билет!</h2>
      <div className="tours-container">
        {tours.map(tour => (
          <div className="tour-card" key={tour.id}>
            <div className="tour-info">
              <span className="tour-date">{tour.date}</span>
              <span className="tour-city">{tour.city}</span>
            </div>
            <a href={tour.link} className="tour-link">Купить билет (если получится)</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToursSection;
