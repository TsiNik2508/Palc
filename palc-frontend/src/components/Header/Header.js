import React, { useState } from 'react';
import './Header.css';
import { FaTelegramPlane, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import { SlSocialVkontakte } from "react-icons/sl";
import { IoMdMusicalNote } from "react-icons/io";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">Palc</a>
      </div>
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul>
        <li><a href="/music">Музыка</a></li>
        <li><a href="/music">Клипы</a></li>
          <li><a href="/tour">Туры</a></li>
          <li><a href="/news">Галерея</a></li>
          <li><a href="/store">Мерч</a></li>
        </ul>
      </nav>
      <div className="header__social">
        <a href="https://vk.com/palcband" target="_blank" rel="noopener noreferrer"><SlSocialVkontakte /></a>
        <a href="https://t.me/palcband" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
        <a href="https://www.instagram.com/_palc/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.youtube.com/@PALCeva" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://band.link/snovaosen" target="_blank" rel="noopener noreferrer"><IoMdMusicalNote /></a>
      </div>
      <div className="header__menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
