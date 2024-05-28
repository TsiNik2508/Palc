import React from 'react';
import './Footer.css';
import { FaVk, FaTelegramPlane, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

// Компонент Footer, представляющий нижний колонтитул страницы
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__social">
        <ul className="footer__social-list">
          <li className="footer__social-item">
            <a href="https://vk.com/palcband" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="VK"><FaVk size={24} /></a>
          </li>
          <li className="footer__social-item">
            <a href="https://t.me/palcband" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Telegram"><FaTelegramPlane size={24} /></a>
          </li>
          <li className="footer__social-item">
            <a href="https://www.instagram.com/_palc/" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Instagram"><FaInstagram size={24} /></a>
          </li>
          <li className="footer__social-item">
            <a href="https://www.youtube.com/@PALCeva" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="YouTube"><FaYoutube size={24} /></a>
          </li>
          <li className="footer__social-item">
            <a href="https://band.link/snovaosen" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Spotify"><FaSpotify size={24} /></a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;