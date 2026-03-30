'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
    // Enable GA
    if (window.gtag) {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  };

  const refuse = () => {
    localStorage.setItem('cookie-consent', 'refused');
    setVisible(false);
    if (window.gtag) {
      window.gtag('consent', 'update', { analytics_storage: 'denied' });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#e2e8f0] shadow-xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-[#1a1a1a] font-medium mb-1">Nous respectons votre vie privée</p>
          <p className="text-xs text-[#718096] leading-relaxed">
            Ce site utilise des cookies pour mesurer l'audience et améliorer votre expérience. Aucun cookie publicitaire n'est utilisé.{' '}
            <Link href="/legal/privacy" className="text-[#207bff] underline">En savoir plus</Link>
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button onClick={refuse} className="px-4 py-2 text-xs font-medium text-[#718096] border border-[#e2e8f0] rounded-lg hover:bg-[#f5f7fa] transition-all">
            Refuser
          </button>
          <button onClick={accept} className="px-4 py-2 text-xs font-semibold text-white bg-[#207bff] rounded-lg hover:bg-[#1a62cc] transition-all">
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
