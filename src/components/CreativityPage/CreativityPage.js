import React from 'react';
import './CreativityPage.css';
import strasho from '../../images/strashno.png';
import boy from '../../images/boy.jpg';
import psycho from '../../images/psycho.jpg';
import tam from '../../images/tam.jpg';
import MiNePo from '../../images/MiNePo.jpg';
import VoDvore from '../../images/VoDvore.jpg';
import TurnIt from '../../images/TurnIt.jpg';

const singles = [
  {
    title: 'Страшно',
    url: 'https://music.yandex.ru/album/30641801',
    img: strasho
  },
  {
    title: 'Мальчик',
    url: 'https://music.yandex.ru/album/30268926',
    img: boy
  },
  {
    title: 'Психонавт',
    url: 'https://music.yandex.ru/album/26288147',
    img: psycho
  },
  {
    title: 'Там',
    url: 'https://music.yandex.ru/album/24855406',
    img: tam
  },
  {
    title: 'Мы не похожи',
    url: 'https://music.yandex.ru/album/16991071',
    img: MiNePo
  },
  {
    title: 'Во дворе',
    url: 'https://music.yandex.ru/album/12483447',
    img: VoDvore
  },
  {
    title: 'TURN IT ON!',
    url: 'https://music.yandex.ru/album/6810187',
    img: TurnIt
  }
];

const CreativityPage = () => {
  return (
    <div className="creativity-page">
      <h2 className="section-title">Наши альбомы</h2>
      {/* Яндекс Музыка альбомы и клипы */}
      <div className="yandex-music-widget">
        <iframe
          frameBorder="0"
          style={{ border: 'none', width: '100%', height: '300px' }}
          width="100%"
          height="300"
          src="https://music.yandex.ru/iframe/album/27616232?theme=dark"
        >
          Слушайте <a href='https://music.yandex.ru/album/27616232'>снова осень</a> — <a href='https://music.yandex.ru/artist/6907498'>PALC</a> на Яндекс Музыке
        </iframe>
      </div>
      <div className="yandex-music-widget">
        <iframe
          frameBorder="0"
          style={{ border: 'none', width: '100%', height: '300px' }}
          width="100%"
          height="300"
          src="https://music.yandex.ru/iframe/album/23144246?theme=dark"
        >
          Слушайте <a href='https://music.yandex.ru/album/23144246'>ВИЖУ</a> — <a href='https://music.yandex.ru/artist/6907498'>PALC</a> на Яндекс Музыке
        </iframe>
        <div className="youtube-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lO_S0V_6VUM?si=0LocJvI91tVzfJ6B"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/x0TA8ox3sTA?si=vwrq8JyZobQlnr0x"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="yandex-music-widget">
        <iframe
          frameBorder="0"
          style={{ border: 'none', width: '100%', height: '300px' }}
          width="100%"
          height="300"
          src="https://music.yandex.ru/iframe/album/15513032?theme=dark"
        >
          Слушайте <a href='https://music.yandex.ru/album/15513032'>ПЕРЕПОВТОР</a> — <a href='https://music.yandex.ru/artist/6907498'>PALC</a> на Яндекс Музыке
        </iframe>
        <div className="youtube-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_n4JwQsyDyc?si=SF2xuCmRUFXZHyeE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="yandex-music-widget">
        <iframe
          frameBorder="0"
          style={{ border: 'none', width: '100%', height: '300px' }}
          width="100%"
          height="300"
          src="https://music.yandex.ru/iframe/album/9375928?theme=dark"
        >
          Слушайте <a href='https://music.yandex.ru/album/9375928'>Пагубное влияние</a> — <a href='https://music.yandex.ru/artist/6907498'>PALC</a> на Яндекс Музыке
        </iframe>
        <div className="youtube-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O79kqF0GjO8?si=4jSmBEXaUwgZAJKB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dzNbvoxQSjU?si=yudCvzl6MsATupnD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="yandex-music-widget">
        <iframe
          frameBorder="0"
          style={{ border: 'none', width: '100%', height: '300px' }}
          width="100%"
          height="300"
          src="https://music.yandex.ru/iframe/album/7285587?theme=dark"
        >
          Слушайте <a href='https://music.yandex.ru/album/7285587'>Скотобойня</a> — <a href='https://music.yandex.ru/artist/6907498'>PALC</a> на Яндекс Музыке
        </iframe>
        <div className="youtube-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0Ce2q6qk6yI?si=ZPV914eXokE-AA5O"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <h2 className="section-title">Наши синглы</h2>
      {/* Карточки синглов */}
      <div className="singles-section">
        {singles.map((single, index) => (
          <div key={index} className="single-card">
            <a href={single.url} target="_blank" rel="noopener noreferrer">
              <img src={single.img} alt={single.title} />
              <div className="single-title">{single.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreativityPage;
