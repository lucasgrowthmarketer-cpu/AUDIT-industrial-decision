import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const canvasRef = useRef(null);
  const layersRef = useRef([]);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const L = i18n.language;
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;
      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';
    const timeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  const handleEnter = (e) => {
    e.preventDefault();
    setEntered(true);
    setTimeout(() => navigate('/home'), 900);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

        :root {
          --id-bg: #0a0c14;
          --id-surface: #111827;
          --id-blue: #207bff;
          --id-blue-light: #4ea5ff;
          --id-silver: #c8d0dc;
          --id-white: #f0f2f5;
          --id-accent: #e89565;
          --id-grain: 0.08;
        }

        .landing-root {
          background-color: var(--id-bg);
          color: var(--id-silver);
          font-family: 'Manrope', sans-serif;
          overflow: hidden;
          height: 100vh;
          width: 100vw;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .landing-root.exit-active {
          animation: exitFade 0.9s ease-in forwards;
        }

        @keyframes exitFade {
          0% { opacity: 1; filter: blur(0); }
          100% { opacity: 0; filter: blur(12px); }
        }

        .landing-grain {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: var(--id-grain);
        }

        .landing-viewport {
          perspective: 2000px;
          width: 100vw; height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .landing-canvas {
          position: relative;
          width: 800px; height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .landing-layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(32, 123, 255, 0.08);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .landing-layer-1 {
          background-image: url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=1200');
          filter: grayscale(0.7) contrast(1.2) brightness(0.4) sepia(0.15);
        }
        .landing-layer-2 {
          background-image: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200');
          filter: grayscale(0.6) contrast(1.1) brightness(0.5) sepia(0.1);
          opacity: 0.5;
          mix-blend-mode: screen;
        }
        .landing-layer-3 {
          background-image: url('https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&q=80&w=1200');
          filter: grayscale(0.8) contrast(1.3) brightness(0.6);
          opacity: 0.35;
          mix-blend-mode: overlay;
        }

        .landing-contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(
            circle at 50% 50%,
            transparent 0,
            transparent 40px,
            rgba(32, 123, 255, 0.04) 41px,
            transparent 42px
          );
          transform: translateZ(120px);
          pointer-events: none;
        }

        /* Blue light accent overlay */
        .landing-layer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 30% 70%,
            rgba(32, 123, 255, 0.12) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        .landing-interface {
          position: fixed;
          inset: 0;
          padding: 2.5rem 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        .landing-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          animation: fadeSlideDown 1.2s 0.5s ease both;
        }

        .landing-logo-mark {
          width: 40px; height: 40px;
          background: var(--id-blue);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800;
          font-size: 16px;
          color: white;
          letter-spacing: -0.02em;
        }

        .landing-logo-text {
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--id-white);
        }

        .landing-logo-text span {
          color: var(--id-blue);
        }

        .landing-meta {
          text-align: right;
          font-family: 'JetBrains Mono', monospace;
          color: var(--id-blue);
          font-size: 0.65rem;
          letter-spacing: 0.05em;
          line-height: 1.8;
          animation: fadeSlideDown 1.2s 0.7s ease both;
        }

        .landing-title {
          grid-column: 1 / -1;
          align-self: center;
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: clamp(2.8rem, 8vw, 8rem);
          line-height: 0.88;
          letter-spacing: -0.04em;
          mix-blend-mode: difference;
          color: var(--id-white);
          animation: fadeSlideUp 1.4s 0.8s ease both;
        }

        .landing-title-accent {
          color: var(--id-blue);
          mix-blend-mode: normal;
        }

        .landing-bottom {
          grid-column: 1 / -1;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          animation: fadeSlideUp 1.2s 1.2s ease both;
        }

        .landing-tagline {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          line-height: 1.7;
          color: var(--id-silver);
          opacity: 0.7;
          letter-spacing: 0.03em;
        }

        .landing-cta {
          pointer-events: auto;
          background: var(--id-blue);
          color: white;
          padding: 1rem 2.5rem;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: 'Manrope', sans-serif;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 88% 100%, 0 100%);
          cursor: pointer;
          border: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .landing-cta:hover {
          background: var(--id-blue-light);
          transform: translateY(-4px);
        }

        .landing-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%);
          pointer-events: none;
        }

        .landing-scroll-hint {
          position: absolute;
          bottom: 2rem; left: 50%;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--id-blue), transparent);
          animation: flow 2s infinite ease-in-out;
          z-index: 5;
        }

        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }

        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Scanning line effect */
        .landing-scanline {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent 0%, var(--id-blue) 50%, transparent 100%);
          opacity: 0.3;
          z-index: 50;
          animation: scanDown 6s linear infinite;
          pointer-events: none;
        }

        @keyframes scanDown {
          0% { top: -2px; }
          100% { top: 100vh; }
        }

        /* Blueprint grid lines */
        .landing-blueprint {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(32, 123, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(32, 123, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          z-index: 1;
          pointer-events: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .landing-interface {
            padding: 1.5rem;
          }
          .landing-title {
            font-size: clamp(2rem, 12vw, 4rem);
          }
          .landing-canvas {
            width: 500px; height: 320px;
          }
          .landing-bottom {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className={`landing-root${entered ? ' exit-active' : ''}`}>
        {/* SVG Grain Filter */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="landing-grain" style={{ filter: 'url(#grain)' }} />
        <div className="landing-blueprint" />
        <div className="landing-scanline" />

        {/* Interface Overlay */}
        <div className="landing-interface">
          {/* Top Left — Logo */}
          <div className="landing-logo">
            <div className="landing-logo-mark">ID</div>
            <div className="landing-logo-text">
              Industrial<span>Decision</span>
            </div>
          </div>

          {/* Top Right — System Meta */}
          <div className="landing-meta">
            <div>SYSTEM STATUS: ACTIVE</div>
            <div>DRS BENCHMARK: 30 OEM</div>
            <div>REGIONS MAPPED: 13</div>
          </div>

          {/* Center Title */}
          <h1 className="landing-title">
            ENGINEERING<br />
            <span className="landing-title-accent">BETTER</span><br />
            DECISIONS
          </h1>

          {/* Bottom Bar */}
          <div className="landing-bottom">
            <div className="landing-tagline">
              <p>[ {L === 'fr' ? 'CONSEIL DIGITAL POUR L\'INDUSTRIE' : 'DIGITAL ADVISORY FOR INDUSTRY'} ]</p>
              <p>{L === 'fr' ? 'MACHINES-OUTILS · RESTRUCTURATION · ACTIFS INDUSTRIELS' : 'MACHINE TOOLS · RESTRUCTURING · INDUSTRIAL ASSETS'}</p>
            </div>
            <button className="landing-cta" onClick={handleEnter}>
              {L === 'fr' ? 'DÉCOUVRIR' : 'EXPLORE'}
            </button>
          </div>
        </div>

        {/* 3D Viewport */}
        <div className="landing-viewport">
          <div className="landing-canvas" ref={canvasRef}>
            <div
              className="landing-layer landing-layer-1"
              ref={(el) => (layersRef.current[0] = el)}
            />
            <div
              className="landing-layer landing-layer-2"
              ref={(el) => (layersRef.current[1] = el)}
            />
            <div
              className="landing-layer landing-layer-3"
              ref={(el) => (layersRef.current[2] = el)}
            />
            <div className="landing-contours" />
          </div>
        </div>

        <div className="landing-scroll-hint" />
      </div>
    </>
  );
};

export default Landing;
