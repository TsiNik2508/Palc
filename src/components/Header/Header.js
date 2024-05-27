import React, { useState } from 'react';
import './Header.css';
import { FaVk, FaTelegramPlane, FaInstagram, FaYoutube, FaSpotify, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>Palc</Link>
        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/creativity" onClick={closeMenu}>Творчество</Link></li>
            <li><Link to="/tours" onClick={closeMenu}>Туры</Link></li>
            <li><Link to="/merch" onClick={closeMenu}>Мерч</Link></li>
            <li><Link to="/gallery" onClick={closeMenu}>Галерея</Link></li>
          </ul>
          <ul className="social-links">
            <li><a href="https://vk.com/palcband"><FaVk size={24} /></a></li>
            <li><a href="https://t.me/palcband"><FaTelegramPlane size={24} /></a></li>
            <li><a href="https://www.instagram.com/_palc/"><FaInstagram size={24} /></a></li>
            <li><a href="https://www.youtube.com/@PALCeva"><FaYoutube size={24} /></a></li>
            <li><a href="https://band.link/snovaosen"><FaSpotify size={24} /></a></li>
          </ul>
        </nav>
        <div className="burger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
