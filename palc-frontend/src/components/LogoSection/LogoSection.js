import React from 'react';
import ReactPlayer from 'react-player';
import './LogoSection.css';

const LogoSection = () => {
  return (
    <section className="logo-section">
      <div className="video-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=g-zbHE1Q1yA&modestbranding=1&controls=0&showinfo=0&rel=0&autohide=1"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
      <div className="logo-text">
        <div className="text-background">
          <h1>PALC</h1>
          <p>
            Переповтор<br />
            Пере-пере-пере-пере-переповтор<br />
            Пере-пере-пере-пере, пере-пере-пере-пере<br />
            Пере-пере-пере-пере-переповтор (ну или любая другая инфа)
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
