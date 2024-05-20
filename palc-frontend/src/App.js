import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header.js';
import Footer from '../src/components/Footer/Footer.js';
import './styles/App.css';
import LogoSection from '../src/components/LogoSection/LogoSection.js';
import AlbumCardsSection from '../src/components/AlbumCardsSection/AlbumCardsSection.js';
import MerchSection from '../src/components/MerchSection/MerchSection.js';
import ToursSection from '../src/components/ToursSection/ToursSection.js';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <LogoSection />
                  <AlbumCardsSection />
                  <MerchSection />
                  <ToursSection />
                </div>
              }
            />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const MusicPage = () => <div>Музыка</div>;
const ToursPage = () => <div>Туры</div>;
const GalleryPage = () => <div>Галерея</div>;

export default App;
