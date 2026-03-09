import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'sonner';
import './i18n/config';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import CorporateLayout from './layouts/CorporateLayout';

// Decision Interface Pages
import SystemStatus from './pages/SystemStatus';
import MarketPressure from './pages/MarketPressure';
import DecisionReadiness from './pages/DecisionReadiness';
import DecisionScenarios from './pages/DecisionScenarios';
import ProcessVisibility from './pages/ProcessVisibility';
import ProofBlocks from './pages/ProofBlocks';
import DecisionGates from './pages/DecisionGates';
import DecisionAmplifiers from './pages/DecisionAmplifiers';
import COMEXOverview from './pages/COMEXOverview';
import SourcesMethod from './pages/SourcesMethod';

// Corporate Pages
import About from './pages/About';
import Sectors from './pages/Sectors';
import Expertise from './pages/Expertise';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

import './App.css';

// Navigation Mode Context
export const NavigationModeContext = createContext();

export const useNavigationMode = () => {
  const context = useContext(NavigationModeContext);
  if (!context) {
    throw new Error('useNavigationMode must be used within NavigationModeProvider');
  }
  return context;
};

function NavigationModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('navMode') || 'corporate';
  });
  
  const toggleMode = () => {
    const newMode = mode === 'corporate' ? 'decision' : 'corporate';
    setMode(newMode);
    localStorage.setItem('navMode', newMode);
  };
  
  return (
    <NavigationModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </NavigationModeContext.Provider>
  );
}

// Route wrapper to determine which layout to use
function LayoutWrapper() {
  const location = useLocation();
  
  // Decision Interface routes use Dashboard layout
  const decisionRoutes = [
    '/',
    '/market-pressure',
    '/decision-readiness',
    '/decision-scenarios',
    '/process-visibility',
    '/proof-blocks',
    '/decision-gates',
    '/decision-amplifiers',
    '/comex-overview',
    '/sources-method'
  ];
  
  const isDashboard = decisionRoutes.includes(location.pathname);
  
  if (isDashboard) {
    return (
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<SystemStatus />} />
          <Route path="/market-pressure" element={<MarketPressure />} />
          <Route path="/decision-readiness" element={<DecisionReadiness />} />
          <Route path="/decision-scenarios" element={<DecisionScenarios />} />
          <Route path="/process-visibility" element={<ProcessVisibility />} />
          <Route path="/proof-blocks" element={<ProofBlocks />} />
          <Route path="/decision-gates" element={<DecisionGates />} />
          <Route path="/decision-amplifiers" element={<DecisionAmplifiers />} />
          <Route path="/comex-overview" element={<COMEXOverview />} />
          <Route path="/sources-method" element={<SourcesMethod />} />
        </Routes>
      </DashboardLayout>
    );
  }
  
  return (
    <CorporateLayout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/sectors/:sectorId" element={<Sectors />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/expertise/:serviceId" element={<Expertise />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:articleId" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </CorporateLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavigationModeProvider>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LayoutWrapper />
        <Toaster 
          position="bottom-right" 
          theme="dark"
          toastOptions={{
            style: {
              background: 'hsl(var(--background-card))',
              border: '1px solid hsl(var(--border))',
              color: 'hsl(var(--foreground))'
            }
          }}
        />
      </NavigationModeProvider>
    </BrowserRouter>
  );
}

export default App;
