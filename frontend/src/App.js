import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import './i18n/config';

import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Expertise = lazy(() => import('./pages/Expertise'));
const Sectors = lazy(() => import('./pages/Sectors'));
const Insights = lazy(() => import('./pages/Insights'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));

import './App.css';
import CookieConsent from './components/CookieConsent';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Suspense fallback={<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',background:'#f5f7fa'}}><div style={{width:'32px',height:'32px',border:'3px solid #e2e8f0',borderTopColor:'#207bff',borderRadius:'50%',animation:'spin 0.8s linear infinite'}} /><style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style></div>}>
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
          <Route path="/sectors/:sectorId" element={<Sectors />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/legal/:page" element={<Legal />} />
        </Route>
      </Routes>
      </Suspense>
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
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
