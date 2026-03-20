import React, { useRef, useState, Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

/* ─── 3D CNC Machine Component ─── */
function CNCMachine({ mouse }) {
  const { scene } = useGLTF('/CNC_Meachine.glb');
  const meshRef = useRef();

  useEffect(() => {
    // Apply industrial material tint
    scene.traverse((child) => {
      if (child.isMesh) {
        if (child.material) {
          child.material.envMapIntensity = 1.2;
          child.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (meshRef.current) {
      // Slow auto-rotation
      meshRef.current.rotation.y += 0.002;
      // Subtle mouse influence
      const targetX = (mouse.current.y * 0.1);
      const targetZ = (mouse.current.x * 0.05);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.02);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetZ, 0.02);
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={0.022}
      position={[2.5, -1.5, 0]}
      rotation={[0.1, -0.3, 0]}
    />
  );
}

/* ─── Loading Spinner ─── */
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#207bff" wireframe />
    </mesh>
  );
}

/* ─── Main Landing ─── */
const Landing = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const L = i18n.language;
  const [entered, setEntered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

        .landing-root {
          background-color: #0a0c14;
          color: #c8d0dc;
          font-family: 'Manrope', sans-serif;
          overflow: hidden;
          height: 100vh;
          width: 100vw;
          margin: 0;
          position: relative;
        }

        .landing-root.exit-active {
          animation: exitFade 0.9s ease-in forwards;
        }

        @keyframes exitFade {
          0% { opacity: 1; filter: blur(0); }
          100% { opacity: 0; filter: blur(12px); }
        }

        .landing-3d-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .landing-3d-loader {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .landing-3d-loader-spinner {
          width: 40px; height: 40px;
          border: 3px solid rgba(32, 123, 255, 0.15);
          border-top-color: #207bff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .landing-grain {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: 0.06;
        }

        .landing-blueprint {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(32, 123, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(32, 123, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          z-index: 2;
          pointer-events: none;
        }

        .landing-scanline {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent 0%, #207bff 50%, transparent 100%);
          opacity: 0.2;
          z-index: 50;
          animation: scanDown 6s linear infinite;
          pointer-events: none;
        }

        @keyframes scanDown { 0% { top: -2px; } 100% { top: 100vh; } }

        .landing-vignette {
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(10,12,20,0.85) 100%);
          z-index: 3;
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
          background: #207bff;
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
          color: #f0f2f5;
        }

        .landing-logo-text span { color: #207bff; }

        .landing-meta {
          text-align: right;
          font-family: 'JetBrains Mono', monospace;
          color: #207bff;
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
          color: #f0f2f5;
          animation: fadeSlideUp 1.4s 0.8s ease both;
          text-shadow: 0 0 80px rgba(32,123,255,0.15);
        }

        .landing-title-accent {
          color: #207bff;
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
          color: #c8d0dc;
          opacity: 0.7;
          letter-spacing: 0.03em;
        }

        .landing-cta {
          pointer-events: auto;
          background: #207bff;
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
          background: #4ea5ff;
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
          background: linear-gradient(to bottom, #207bff, transparent);
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

        @media (max-width: 768px) {
          .landing-interface { padding: 1.5rem; }
          .landing-title { font-size: clamp(2rem, 12vw, 4rem); }
          .landing-bottom {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className={`landing-root${entered ? ' exit-active' : ''}`}>
        {/* SVG Grain */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="landing-grain" style={{ filter: 'url(#grain)' }} />
        <div className="landing-blueprint" />
        <div className="landing-scanline" />
        <div className="landing-vignette" />

        {/* 3D Scene */}
        <div className="landing-3d-container">
          {!loaded && (
            <div className="landing-3d-loader">
              <div className="landing-3d-loader-spinner" />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#207bff', letterSpacing: '0.1em' }}>LOADING 3D MODEL</span>
            </div>
          )}
          <Canvas
            camera={{ position: [8, 5, 8], fov: 38 }}
            style={{ background: 'transparent' }}
            onCreated={() => setLoaded(true)}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[8, 10, 5]} intensity={1.2} color="#ffffff" />
            <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#207bff" />
            <pointLight position={[0, 8, 0]} intensity={0.6} color="#4ea5ff" />
            <spotLight position={[5, 12, 5]} angle={0.3} penumbra={0.8} intensity={0.8} color="#ffffff" />

            <Suspense fallback={<Loader />}>
              <CNCMachine mouse={mouse} />
              <ContactShadows position={[0, -1.05, 0]} opacity={0.4} scale={12} blur={2.5} far={4} />
              <Environment preset="warehouse" />
            </Suspense>

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              maxPolarAngle={Math.PI / 2.2}
              minPolarAngle={Math.PI / 4}
            />
          </Canvas>
        </div>

        {/* Interface Overlay */}
        <div className="landing-interface">
          <div className="landing-logo">
            <img src="/logo-id.png" alt="ID" style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'white', padding: '2px' }} />
            <div className="landing-logo-text">
              Industrial<span>Decision</span>
            </div>
          </div>

          <div className="landing-meta">
            <div>SYSTEM STATUS: ACTIVE</div>
            <div>DRS BENCHMARK: 30 OEM</div>
            <div>REGIONS MAPPED: 13</div>
          </div>

          <h1 className="landing-title">
            ENGINEERING<br />
            <span className="landing-title-accent">BETTER</span><br />
            DECISIONS
          </h1>

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

        <div className="landing-scroll-hint" />
      </div>
    </>
  );
};

export default Landing;
