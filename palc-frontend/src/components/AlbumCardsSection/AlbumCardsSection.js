import React from 'react';
import './AlbumCardsSection.css';

const AlbumCardsSection = () => {
  const albums = [
    { id: 1, title: 'Музыка', image: '/assets/album1.jpg', link: '/tours' },
    { id: 2, title: 'Клипы', image: '/assets/album2.jpg', link: '/store' },
    { id: 3, title: 'Туры', image: '/assets/album3.jpg', link: '/news' },
    { id: 4, title: 'Мерч', image: '/assets/album4.jpg', link: '/music' },
  ];

  return (
    <section className="album-cards-section">
      <div className="cards-container">
        {albums.map(album => (
          <a href={album.link} className="card" key={album.id}>
            <img src={album.image} alt={album.title} />
            <div className="card-title">{album.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AlbumCardsSection;
