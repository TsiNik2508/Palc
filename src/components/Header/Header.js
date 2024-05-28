import React, { useState } from "react";
import "./Header.css";
import {
  FaVk,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Компонент Header, представляющий верхнюю навигационную панель
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Функция для закрытия меню
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          Palc
        </Link>
        <nav
          className={`header__navigation ${
            isMenuOpen ? "header__navigation--open" : ""
          }`}
        >
          <ul className="header__nav-links">
            <li className="header__nav-item">
              <Link
                to="/creativity"
                className="header__nav-link"
                onClick={closeMenu}
              >
                Творчество
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/tours"
                className="header__nav-link"
                onClick={closeMenu}
              >
                Туры
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/merch"
                className="header__nav-link"
                onClick={closeMenu}
              >
                Мерч
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/gallery"
                className="header__nav-link"
                onClick={closeMenu}
              >
                Галерея
              </Link>
            </li>
          </ul>
          <ul className="header__social-links">
            <li className="header__social-item">
              <a href="https://vk.com/palcband" className="header__social-link">
                <FaVk size={24} />
              </a>
            </li>
            <li className="header__social-item">
              <a href="https://t.me/palcband" className="header__social-link">
                <FaTelegramPlane size={24} />
              </a>
            </li>
            <li className="header__social-item">
              <a
                href="https://www.instagram.com/_palc/"
                className="header__social-link"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li className="header__social-item">
              <a
                href="https://www.youtube.com/@PALCeva"
                className="header__social-link"
              >
                <FaYoutube size={24} />
              </a>
            </li>
            <li className="header__social-item">
              <a
                href="https://band.link/snovaosen"
                className="header__social-link"
              >
                <FaSpotify size={24} />
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="header__burger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && <div className="header__overlay" onClick={toggleMenu} />}
    </header>
  );
};

export default Header;
