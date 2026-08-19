import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Evolution from './pages/Evolution';
import Genres from './pages/Genres';
import GenreDetail from './pages/GenreDetail';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="evolution" element={<Evolution />} />
          <Route path="genres" element={<Genres />} />
          <Route path="genres/:id" element={<GenreDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;