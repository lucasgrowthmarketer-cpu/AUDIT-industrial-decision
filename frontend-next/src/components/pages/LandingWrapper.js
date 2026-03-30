'use client';
import dynamic from 'next/dynamic';
const LandingClient = dynamic(() => import('./LandingClient'), {
  ssr: false,
  loading: () => (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', padding: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1.1, fontFamily: 'Manrope, sans-serif' }}>
          ENGINEERING<br />
          <span style={{ color: '#207bff' }}>BETTER</span><br />
          DECISIONS
        </h1>
        <p style={{ marginTop: '2rem', fontSize: '1.1rem', color: '#a3a3a3', letterSpacing: '0.15em' }}>
          [ CABINET DIGITAL · INDUSTRIE FRANÇAISE ]
        </p>
        <p style={{ fontSize: '0.9rem', color: '#717171', letterSpacing: '0.1em' }}>
          MACHINES-OUTILS · RESTRUCTURATION · SERVICES INDUSTRIELS
        </p>
      </div>
    </div>
  ),
});
export default function LandingWrapper() {
  return <LandingClient />;
}
