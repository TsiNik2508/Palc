import React from 'react';
import { Link } from 'react-router-dom';
import './AlbumCardsSection.css';
import album1 from '../../images/album1.jpg';
import album2 from '../../images/album2.jpg';
import album3 from '../../images/album3.jpg';
import album4 from '../../images/album4.jpg';

const AlbumCardsSection = () => {
  return (
    <section className="album-cards-section">
      <div className="album-card">
        <Link to="/creativity">
          <img src={album1} alt="Album 1" />
          <div className="card-caption">Творчество</div>
        </Link>
      </div>
      <div className="album-card">
        <Link to="/tours">
          <img src={album2} alt="Album 2" />
          <div className="card-caption">Туры</div>
        </Link>
      </div>
      <div className="album-card">
        <Link to="/merch">
          <img src={album3} alt="Album 3" />
          <div className="card-caption">Мерч</div>
        </Link>
      </div>
      <div className="album-card">
        <Link to="/gallery">
          <img src={album4} alt="Album 4" />
          <div className="card-caption">Галлерея</div>
        </Link>
      </div>
    </section>
  );
};

export default AlbumCardsSection;
