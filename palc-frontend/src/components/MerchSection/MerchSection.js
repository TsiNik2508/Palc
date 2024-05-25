import React from 'react';
import './MerchSection.css';
import merch1 from '../../images/merch1.jpg';
import merch2 from '../../images/merch2.jpg';
import merch3 from '../../images/merch3.jpg';
import merch4 from '../../images/merch4.jpg';
import merch5 from '../../images/merch5.jpg';
import merch6 from '../../images/merch6.jpg';
import merch7 from '../../images/merch7.jpg';
import merch8 from '../../images/merch8.jpeg';

const MerchSection = () => {
  const merchItems = [
    { id: 1, image: merch1, title: 'Тут', price: '£100', button: 'Добавить в корзину' },
    { id: 2, image: merch2, title: 'мог', price: '£1000', button: 'Добавить в корзину' },
    { id: 3, image: merch3, title: 'Бы', price: '£320', button: 'Добавить в корзину' },
    { id: 4, image: merch4, title: 'Быть', price: '£320.00', button: 'Добавить в корзину' },
    { id: 5, image: merch5, title: 'Мерч', price: '£99.99', button: 'Добавить в корзину' },
    { id: 6, image: merch6, title: 'Но', price: '£48.00', button: 'Добавить в корзину' },
    { id: 7, image: merch7, title: 'Его', price: '£58.00', button: 'Добавить в корзину' },
    { id: 8, image: merch8, title: 'Нет', price: '£68.00', button: 'Добавить в корзину' }
  ];

  return (
    <section className="merch-section">
      <h2>Наш Мерч</h2>
      <div className="merch-items">
        {merchItems.map(item => (
          <div className="merch-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="merch-info">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <button className="merch-button">{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchSection;
