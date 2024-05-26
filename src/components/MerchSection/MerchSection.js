import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MerchSection.css';
import merch1 from '../../images/merch1.jpg';
import merch2 from '../../images/merch2.jpg';
import merch3 from '../../images/merch3.jpg';
import merch4 from '../../images/merch4.jpg';
import merch5 from '../../images/merch5.jpg';
import merch6 from '../../images/merch6.jpg';
import merch7 from '../../images/merch7.jpg';
import merch8 from '../../images/merch8.jpeg';

const MerchSection = ({ showTitle = true }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const merchItems = [
    { id: 1, image: merch1, title: 'Тут', price: '£100', description: 'Описание товара 1' },
    { id: 2, image: merch2, title: 'мог', price: '£1000', description: 'Описание товара 2' },
    { id: 3, image: merch3, title: 'Бы', price: '£320', description: 'Описание товара 3' },
    { id: 4, image: merch4, title: 'Быть', price: '£320.00', description: 'Описание товара 4' },
    { id: 5, image: merch5, title: 'Мерч', price: '£99.99', description: 'Описание товара 5' },
    { id: 6, image: merch6, title: 'Но', price: '£48.00', description: 'Описание товара 6' },
    { id: 7, image: merch7, title: 'Его', price: '£58.00', description: 'Описание товара 7' },
    { id: 8, image: merch8, title: 'Нет', price: '£68.00', description: 'Описание товара 8' }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBuyClick = (e, link) => {
    e.stopPropagation();
    window.location.href = link;
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <section className="merch-section">
      {showTitle && <h2>Наш Мерч</h2>}
      <div className="merch-items">
        {merchItems.map(item => (
          <div className="merch-item" key={item.id} onClick={() => handleItemClick(item)}>
            <img src={item.image} alt={item.title} />
            <div className="merch-info">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <button className="merch-button" onClick={(e) => handleBuyClick(e, '/Palc/merch')}>Купить</button>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>&times;</button>
            <img src={selectedItem.image} alt={selectedItem.title} />
            <div className="popup-info">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.price}</p>
              <p>{selectedItem.description}</p>
              <button className="popup-buy-button" onClick={() => window.location.href = '/Palc/merch'}>Купить</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MerchSection;
