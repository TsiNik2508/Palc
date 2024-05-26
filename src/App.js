import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header.js';
import Footer from '../src/components/Footer/Footer.js';
import './styles/App.css';
import LogoSection from '../src/components/LogoSection/LogoSection.js';
import AlbumCardsSection from '../src/components/AlbumCardsSection/AlbumCardsSection.js';
import MerchSection from '../src/components/MerchSection/MerchSection.js';
import ToursSection from '../src/components/ToursSection/ToursSection.js';
import CreativityPage from '../src/components/CreativityPage/CreativityPage.js';
import ToursPage from '../src/components/ToursPage/ToursPage.js';
import MerchPage from '../src/components/MerchPage/MerchPage.js';
import Gallery from '../src/components/Gallery/Gallery.js';
import ScrollToTop from '../src/utils/ScrollToTop.js';

function App() {
  return (
    <Router basename="/Palc">
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <div>
                <LogoSection />
                <AlbumCardsSection />
                <MerchSection showTitle={true} />
                <ToursSection />
              </div>
            } />
            <Route path="/creativity" element={<CreativityPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/merch" element={<MerchPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const MusicPage = () => <div>Музыка</div>;
const GalleryPage = () => <div>Галерея</div>;

export default App;
