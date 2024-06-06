import React from "react";
import { Link } from "react-router-dom";
import "./AlbumCardsSection.css";
import album1 from "../../images/album1.jpg";
import album2 from "../../images/album2.jpg";
import album3 from "../../images/album3.jpg";
import album4 from "../../images/album4.jpg";

// Компонент AlbumCardsSection, представляющий секцию с карточками альбомов
const AlbumCardsSection = () => {
  return (
    <section className="album-cards">
      <ul className="album-cards__list">
        <li className="album-cards__item">
          <Link to="/creativity" className="album-cards__link">
            <img src={album1} alt="Album 1" className="album-cards__image" />
            <div className="album-cards__caption">Творчество</div>
          </Link>
        </li>
        <li className="album-cards__item">
          <Link to="/tours" className="album-cards__link">
            <img src={album2} alt="Album 2" className="album-cards__image" />
            <div className="album-cards__caption">Туры</div>
          </Link>
        </li>
        <li className="album-cards__item">
          <Link to="/merch" className="album-cards__link">
            <img src={album3} alt="Album 3" className="album-cards__image" />
            <div className="album-cards__caption">Мерч</div>
          </Link>
        </li>
        <li className="album-cards__item">
          <Link to="/gallery" className="album-cards__link">
            <img src={album4} alt="Album 4" className="album-cards__image" />
            <div className="album-cards__caption">Галлерея</div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default AlbumCardsSection;
