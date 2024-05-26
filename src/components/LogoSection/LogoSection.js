import React from 'react';
import './LogoSection.css';

const LogoSection = () => {
  return (
    <section className="logo-section">
      <div className="video-background">
        <iframe 
          src="https://www.youtube.com/embed/g-zbHE1Q1yA?si=ulV6MF-HoGC7-vlV&autoplay=1&mute=1&loop=1&playlist=g-zbHE1Q1yA&controls=0&showinfo=0&rel=0&vq=hd1080" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>
      </div>
      <div className="content">
        <h1>Palc</h1>
        <p>переповтор, переповтор, пере-пере-переповтор</p>
      </div>
    </section>
  );
};

export default LogoSection;
