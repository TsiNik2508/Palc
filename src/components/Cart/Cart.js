import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Cart.css";

// Компонент корзины
const Cart = ({ cartItems, addItem, removeItem, decreaseItem, closeCart }) => {
  // Подсчет общего количества товаров в корзине
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Подсчет общей стоимости товаров в корзине
  const totalPrice = cartItems
    .reduce(
      (acc, item) =>
        acc + item.quantity * parseFloat(item.price.replace(" руб", "")),
      0
    )
    .toFixed(2);

  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__title">Ваша корзина</h2>
        <button className="cart__close" onClick={closeCart}>
          &times;
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p className="cart__empty">Здесь пока пусто</p>
      ) : (
        <>
          <ul className="cart__items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart__item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart__item-image"
                />
                <div className="cart__item-info">
                  <h3 className="cart__item-title">{item.title}</h3>
                  <div className="cart__item-controls oval">
                    <button
                      className="cart__item-button"
                      onClick={() => decreaseItem(item.id)}
                    >
                      -
                    </button>
                    <span className="cart__item-quantity">{item.quantity}</span>
                    <button
                      className="cart__item-button"
                      onClick={() => addItem(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="cart__item-remove"
                  onClick={() => removeItem(item.id)}
                >
                  <FaTrash />
                </button>
                <p className="cart__item-price">
                  {(
                    item.quantity * parseFloat(item.price.replace(" руб", ""))
                  ).toFixed(2)}{" "}
                  руб
                </p>
              </li>
            ))}
          </ul>
          <div className="cart__footer">
            <p className="cart__total-label">Итого:</p>
            <p className="cart__total-price">{totalPrice} руб</p>
          </div>
          <button className="cart__checkout-button">Оформить заказ</button>
        </>
      )}
    </div>
  );
};

export default Cart;
