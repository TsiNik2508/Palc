import React from 'react';
import './AlbumCardsSection.css';
import album1 from '../../images/album1.jpg';
import album2 from '../../images/album2.jpg';
import album3 from '../../images/album3.jpg';
import album4 from '../../images/album4.jpg';
import backgroundVideo from '../../videos/background.mp4';

const AlbumCardsSection = () => {
  return (
    <section className="album-cards-section">
      <video className="background-video" autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="album-card">
        <a href="/creativity">
          <img src={album1} alt="Album 1" />
          <div className="card-caption">Творчество</div>
        </a>
      </div>
      <div className="album-card">
        <a href="/tours">
          <img src={album2} alt="Album 2" />
          <div className="card-caption">Туры</div>
        </a>
      </div>
      <div className="album-card">
        <a href="/merch">
          <img src={album3} alt="Album 3" />
          <div className="card-caption">Мерч</div>
        </a>
      </div>
      <div className="album-card">
        <a href="/gallery">
          <img src={album4} alt="Album 4" />
          <div className="card-caption">Галлерея</div>
        </a>
      </div>
    </section>
  );
};

export default AlbumCardsSection;
