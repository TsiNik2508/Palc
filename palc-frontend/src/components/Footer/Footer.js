import React from 'react';
import './Footer.css';
import { FaVk, FaTelegramPlane, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://vk.com/palcband" target="_blank" rel="noopener noreferrer"><FaVk size={24} /></a>
        <a href="https://t.me/palcband" target="_blank" rel="noopener noreferrer"><FaTelegramPlane size={24} /></a>
        <a href="https://www.instagram.com/_palc/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
        <a href="https://www.youtube.com/@PALCeva" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
        <a href="https://band.link/snovaosen" target="_blank" rel="noopener noreferrer"><FaSpotify size={24} /></a>
      </div>
    </footer>
  );
};

export default Footer;
