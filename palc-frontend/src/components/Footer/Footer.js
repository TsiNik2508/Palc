import React from 'react';
import './Footer.css';
import { FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { IoMdMusicalNote } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://vk.com/palcband" target="_blank" rel="noopener noreferrer"><SlSocialVkontakte /></a>
        <a href="https://t.me/palcband" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
        <a href="https://www.instagram.com/_palc/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.youtube.com/@PALCeva" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://band.link/snovaosen" target="_blank" rel="noopener noreferrer"><IoMdMusicalNote /></a>
      </div>
    </footer>
  );
};

export default Footer;
