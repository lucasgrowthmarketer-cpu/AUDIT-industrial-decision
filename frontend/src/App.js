import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import './i18n/config';

// Layout
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Expertise from './pages/Expertise';
import Sectors from './pages/Sectors';
import Insights from './pages/Insights';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/expertise/:serviceId" element={<Expertise />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/sectors/:sectorId" element={<Sectors />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:articleId" element={<Insights />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            color: '#1a1a1a'
          }
        }}
      />
    </BrowserRouter>
  );
}

export default App;
