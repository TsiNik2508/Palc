import React from "react";
import "./Gallery.css";
import palcAlbum1 from "../../images/palcAlbum1.jpg";
import palcAlbum2 from "../../images/palcAlbum2.jpg";
import palcAlbum3 from "../../images/palcAlbum3.jpg";
import palcAlbum4 from "../../images/palcAlbum4.jpg";
import palcAlbum5 from "../../images/palcAlbum5.jpg";
import palcAlbum6 from "../../images/palcAlbum6.jpg";
import palcAlbum7 from "../../images/palcAlbum7.jpg";
import palcAlbum8 from "../../images/palcAlbum8.jpg";
import palcAlbum9 from "../../images/palcAlbum9.jpg";
import palcAlbum10 from "../../images/palcAlbum10.jpg";
import palcAlbum11 from "../../images/palcAlbum11.jpg";
import palcAlbum12 from "../../images/palcAlbum12.jpg";
import palcAlbum13 from "../../images/palcAlbum13.jpg";

// Массив с данными об альбомах
const albums = [
  {
    id: 1,
    image: palcAlbum1,
    title: "PALC @VK GIPSY (Москва 11.11.23)",
    link: "https://vk.com/album-120547275_299173677",
  },
  {
    id: 2,
    image: palcAlbum2,
    title: "PALC @CЕРДЦЕ (Санкт-Петербург 10.11.23)",
    link: "https://vk.com/album-120547275_299775231",
  },
  {
    id: 3,
    image: palcAlbum3,
    title: "PALC @REBORN (Казань 20.11.23)",
    link: "https://vk.com/album-120547275_299775536",
  },
  {
    id: 4,
    image: palcAlbum4,
    title: "PALC @DUST (Тбилиси, 01.04.23)",
    link: "https://vk.com/album-120547275_294318218",
  },
  {
    id: 5,
    image: palcAlbum5,
    title: "PALC @STOP (Ереван, 02.04.23)",
    link: "https://vk.com/album-120547275_293226202",
  },
  {
    id: 6,
    image: palcAlbum6,
    title: "PALC @Backdoor Bar (Батуми, 31.03.23)",
    link: "https://vk.com/album-120547275_293225993",
  },
  {
    id: 7,
    image: palcAlbum7,
    title: "PALC @Подземка (Ростов-на-Дону, 28.03.23)",
    link: "https://vk.com/album-120547275_293225305",
  },
  {
    id: 8,
    image: palcAlbum8,
    title: "PALC @Время N (Санкт-Петербург, 17.03.23)",
    link: "https://vk.com/album-120547275_293109302",
  },
  {
    id: 9,
    image: palcAlbum9,
    title: "PALC @PAPA BAR (Москва, 18.03.23)",
    link: "https://vk.com/album-120547275_292860801",
  },
  {
    id: 10,
    image: palcAlbum10,
    title: "PALC @УРБАН (25.10.22)",
    link: "https://vk.com/album-120547275_288288756",
  },
  {
    id: 11,
    image: palcAlbum11,
    title: "PALC @ ВРЕМЯ N (22.10.22)",
    link: "https://vk.com/album-120547275_287689736",
  },
  {
    id: 12,
    image: palcAlbum12,
    title: "PALC @ AGLOMERAT (06.06.21)",
    link: "https://vk.com/album-120547275_280094383",
  },
  {
    id: 13,
    image: palcAlbum13,
    title: "PALC @ 16 ТОНН (27.10.20)",
    link: "https://vk.com/album-120547275_275872238",
  },
];

// Компонент Gallery, представляющий секцию галереи
const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="gallery__title">Галерея</h2>
      <div className="gallery__grid">
        {albums.map((album) => (
          <article className="gallery__item" key={album.id}>
            <a
              href={album.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery__link"
            >
              <div className="gallery__image-wrapper">
                <img
                  src={album.image}
                  alt={album.title}
                  className="gallery__image"
                />
              </div>
              <div className="gallery__overlay">
                <div className="gallery__text">{album.title}</div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
