'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, Shield } from 'lucide-react';

const DEMO_URL = 'https://industrial-decision-production.up.railway.app/';
const ACCESS_CODE = 'ID2025';

export default function DemoClient() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem('demo-access');
    if (saved === 'granted') setGranted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.toUpperCase() === ACCESS_CODE) {
      sessionStorage.setItem('demo-access', 'granted');
      setGranted(true);
      setError('');
    } else {
      setError('Code d\'accès incorrect');
    }
  };

  if (granted) {
    return (
      <div className="animate-fade-in py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-[#10b981]/10 rounded-2xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-[#10b981]" />
          </div>
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Accès autorisé</h1>
          <p className="text-[#4a5568] mb-8">Cliquez ci-dessous pour accéder à notre plateforme d'intelligence décisionnelle.</p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#207bff] text-white font-semibold rounded-lg hover:bg-[#1a62cc] transition-all text-lg"
          >
            Ouvrir la plateforme <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-6 text-xs text-[#718096]">Cette plateforme est un outil de démonstration. Les données présentées sont réelles mais anonymisées.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in py-20 bg-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-6 bg-[#207bff]/10 rounded-2xl flex items-center justify-center">
            <Lock className="w-8 h-8 text-[#207bff]" />
          </div>
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Accès démo</h1>
          <p className="text-[#4a5568]">Cette plateforme est réservée à nos prospects et partenaires. Entrez le code d'accès fourni lors de votre rendez-vous.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Code d'accès"
            value={code}
            onChange={(e) => { setCode(e.target.value); setError(''); }}
            className="w-full px-4 py-3.5 bg-[#f5f7fa] border border-[#e2e8f0] rounded-xl text-[#1a1a1a] text-center text-lg font-mono tracking-widest focus:outline-none focus:border-[#207bff] focus:ring-2 focus:ring-[#207bff]/10"
            autoFocus
          />
          {error && <p className="text-[#ef4444] text-sm text-center">{error}</p>}
          <button type="submit" className="w-full py-3.5 bg-[#207bff] text-white font-semibold rounded-xl hover:bg-[#1a62cc] transition-all">
            Accéder à la plateforme
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-xs text-[#718096] mb-2">Vous n'avez pas de code ?</p>
          <Link href="/contact" className="text-sm text-[#207bff] font-medium flex items-center gap-1 justify-center hover:gap-2 transition-all">
            Demander une démo <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
