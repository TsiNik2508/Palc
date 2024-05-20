import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header.js';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const HomePage = () => <div>Главная страница</div>;
const MusicPage = () => <div>Музыка</div>;
const ToursPage = () => <div>Туры</div>;
const GalleryPage = () => <div>Галерея</div>;

export default App;
