import React, { useState } from 'react';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import './MerchSection.css';

const MerchSection = () => {
  const merchItems = [
    { id: 1, title: 'А', price: '$20', image: '/assets/merch5.jpg' },
    { id: 2, title: 'Тут', price: '$40', image: '/assets/merch5.jpg' },
    { id: 3, title: 'Мог', price: '$15', image: '/assets/merch5.jpg' },
    { id: 4, title: 'Быть', price: '$10', image: '/assets/merch5.jpg' },
    { id: 5, title: 'Мерч', price: '$30', image: '/assets/merch5.jpg' },
    { id: 6, title: 'Но', price: '$12', image: '/assets/merch5.jpg' },
    { id: 7, title: 'Его', price: '$5', image: '/assets/merch5.jpg' },
    { id: 8, title: 'Нет', price: '$8', image: '/assets/merch5.jpg' },
  ];

  const [cart, setCart] = useState(Array(merchItems.length).fill(false));

  const toggleCart = (index) => {
    const newCart = [...cart];
    newCart[index] = !newCart[index];
    setCart(newCart);
  };

  return (
    <section className="merch-section">
      <div className="merch-container">
        {merchItems.map((item, index) => (
          <div className="merch-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="merch-info">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
            <div className="merch-icon" onClick={() => toggleCart(index)}>
              {cart[index] ? <FaCheck /> : <FaShoppingCart />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchSection;
