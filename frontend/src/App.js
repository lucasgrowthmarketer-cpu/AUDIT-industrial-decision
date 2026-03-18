import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import './i18n/config';

import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Expertise from './pages/Expertise';
import Sectors from './pages/Sectors';
import Insights from './pages/Insights';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Routes>
        {/* Landing page — standalone, no layout */}
        <Route path="/" element={<Landing />} />
        
        {/* Main site with header/footer layout */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/expertise/:serviceId" element={<Expertise />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/insights" element={<Insights />} />
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
