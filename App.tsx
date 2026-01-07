import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Disciplines from './pages/Disciplines';
import Team from './pages/Team';
import Shop from './pages/Shop';
import Partners from './pages/Partners';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import Links from './pages/Links';
import LegalNotice from './pages/LegalNotice';
import Privacy from './pages/Privacy';
import Fighters from './pages/Fighters';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-black selection:bg-brand-red selection:text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disciplines" element={<Disciplines />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/links" element={<Links />} />
            <Route path="/legal" element={<LegalNotice />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/fighters" element={<Fighters />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;