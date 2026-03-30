'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  ArrowRight,
  Target,
  Shield,
  Search,
  Zap,
  FileText,
  CheckCircle,
  Database,
  Globe,
  LineChart,
  Play,
  BarChart3,
  TrendingUp,
  Factory,
  Cog,
  Wrench,
  Award,
  AlertTriangle,
  Eye,
  ShieldCheck,
  Route
} from 'lucide-react';

/* ─── DATA ─── */
const services = [
  { id: 'audit-drs', icon: Search, titleEn: 'Decision Readiness Audit', titleFr: 'Audit de Maturité Décisionnelle', descEn: 'Full DRS scoring of your website against 30+ industrial OEMs.', descFr: 'Scoring DRS complet de votre site face à 30+ OEM industriels.', deliverableEn: 'Scored report + action plan', deliverableFr: 'Rapport chiffré + plan d\'action', duration: '2-3 sem.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', year: '2025' },
  { id: 'site-decisionnel', icon: Target, titleEn: 'Decision-Grade Website', titleFr: 'Site Web Décisionnel', descEn: 'Full website redesign as a decision support system.', descFr: 'Refonte complète du site comme outil d\'aide à la décision.', deliverableEn: 'Full website delivery', deliverableFr: 'Livraison site complet', duration: '8-12 sem.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80', year: '2025' },
  { id: 'strategie-acquisition', icon: Zap, titleEn: 'Acquisition Strategy', titleFr: 'Stratégie d\'Acquisition', descEn: 'SEO, content clusters, and visibility layer for industrial buyers.', descFr: 'SEO, clusters de contenu et couche de visibilité pour décideurs.', deliverableEn: 'Strategy + 6-month roadmap', deliverableFr: 'Stratégie + roadmap 6 mois', duration: '4-6 sem.', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=600', year: '2025' },
  { id: 'accompagnement', icon: Shield, titleEn: 'Ongoing Advisory', titleFr: 'Accompagnement Continu', descEn: 'Monthly KPI tracking, content updates, strategic adjustments.', descFr: 'Suivi mensuel KPI, mises à jour contenu, ajustements stratégiques.', deliverableEn: 'Monthly report + steering', deliverableFr: 'Rapport mensuel + pilotage', duration: 'Continu', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600', year: '2024' },
];

const differentiators = [
  { titleEn: 'We know your industry', titleFr: 'Nous connaissons votre industrie', descEn: 'Machine tools, industrial restructuring, asset management — we work exclusively with industrial actors in France.', descFr: 'Machines-outils, restructuration, actifs industriels — nous ne travaillons qu\'avec l\'industrie en France. Point.' },
  { titleEn: 'Data, not opinions', titleFr: 'Des données, pas des opinions', descEn: 'Our recommendations rest on 51,000+ failure analyses, 30 OEM benchmarks, and regional market pressure indices.', descFr: '51 000+ défaillances analysées, 30 OEM benchmarkés, indices de pression régionaux. Chaque recommandation est étayée par des chiffres.' },
  { titleEn: 'We prove it live', titleFr: 'Nous le prouvons en direct', descEn: 'In every first meeting we open our decision intelligence platform and show you your market, your competitors, and your gaps — live.', descFr: 'Premier rendez-vous ? Nous ouvrons notre plateforme et vous montrons votre marché, vos concurrents, vos lacunes — en temps réel.' },
];

const CLIENTS = [
  { name: 'DMG MORI', icon: Cog },
  { name: 'Mazak', icon: Factory },
  { name: 'Hermle', icon: Wrench },
  { name: 'AMADA', icon: Factory },
  { name: 'Makino', icon: Cog },
  { name: 'INDEX-TRAUB', icon: Wrench },
];

/* ─── HERO SUB ─── */
const StatItem = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">{label}</span>
  </div>
);

/* ─── PROBLEM CONNECTOR COMPONENT ─── */
const ProblemConnectors = ({ lang }) => {
  const problems = [
    { en: 'Product catalogs', fr: 'Catalogues sans contexte', icon: AlertTriangle },
    { en: 'Generic forms', fr: 'Formulaires impersonnels', icon: AlertTriangle },
    { en: 'Opaque process', fr: 'Processus invisible', icon: AlertTriangle },
    { en: 'No proof', fr: 'Zéro preuve concrète', icon: AlertTriangle },
  ];
  const solutions = [
    { en: 'Decision scenarios', fr: 'Scénarios adaptés', icon: Target },
    { en: 'Contextual gates', fr: 'Points d\'entrée sur-mesure', icon: Route },
    { en: 'Visible process', fr: 'Processus transparent', icon: Eye },
    { en: 'Verified proof', fr: 'Preuves vérifiables', icon: ShieldCheck },
  ];

  return (
    <div className="relative flex flex-col items-center w-full max-w-3xl mx-auto">
      <style>{`
        .connector-path {
          stroke-dasharray: 100 100;
          animation: connectorDraw 1.5s ease forwards;
        }
        .connector-light {
          offset-anchor: 6px 0px;
          animation: connectorFlow 3s cubic-bezier(0,0,0.2,1) infinite;
          animation-delay: 1s;
        }
        .cl-1 { offset-path: path("M 50 0 v 30 q 0 8 8 8 h 92 q 8 0 8 8 v 30"); }
        .cl-2 { offset-path: path("M 150 0 v 20 q 0 8 8 8 h 42 q 8 0 8 8 v 40"); }
        .cl-3 { offset-path: path("M 250 0 v 20 q 0 8 -8 8 h -42 q -8 0 -8 8 v 40"); }
        .cl-4 { offset-path: path("M 350 0 v 30 q 0 8 -8 8 h -92 q -8 0 -8 8 v 30"); }
        @keyframes connectorDraw {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes connectorFlow {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>

      {/* Problem badges row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full mb-4 relative z-10">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2.5 backdrop-blur-sm">
              <Icon className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span className="text-xs font-medium text-red-300">{lang === 'fr' ? p.fr : p.en}</span>
            </div>
          );
        })}
      </div>

      {/* SVG connectors */}
      <div className="w-full hidden md:block" style={{ height: '90px' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 80" preserveAspectRatio="xMidYMid meet">
          <g stroke="rgba(32,123,255,0.25)" fill="none" strokeWidth="0.8" className="connector-path" pathLength="100">
            <path d="M 50 0 v 30 q 0 8 8 8 h 92 q 8 0 8 8 v 30" />
            <path d="M 150 0 v 20 q 0 8 8 8 h 42 q 8 0 8 8 v 40" />
            <path d="M 250 0 v 20 q 0 8 -8 8 h -42 q -8 0 -8 8 v 40" />
            <path d="M 350 0 v 30 q 0 8 -8 8 h -92 q -8 0 -8 8 v 30" />
          </g>
          {/* Animated lights */}
          <defs>
            <radialGradient id="conn-grad" fx="1">
              <stop offset="0%" stopColor="#207bff" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle className="connector-light cl-1" cx="0" cy="0" r="6" fill="url(#conn-grad)" />
          <circle className="connector-light cl-2" cx="0" cy="0" r="6" fill="url(#conn-grad)" />
          <circle className="connector-light cl-3" cx="0" cy="0" r="6" fill="url(#conn-grad)" />
          <circle className="connector-light cl-4" cx="0" cy="0" r="6" fill="url(#conn-grad)" />
        </svg>
      </div>

      {/* Mobile arrow */}
      <div className="md:hidden flex justify-center py-4">
        <div className="w-px h-12 bg-gradient-to-b from-red-400/50 to-[#207bff]/50 relative">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r border-[#207bff]/50 rotate-45" />
        </div>
      </div>

      {/* Center hub */}
      <div className="relative z-20 flex items-center justify-center rounded-xl border border-[#207bff]/20 bg-[#207bff]/5 px-5 py-2.5 backdrop-blur-sm mb-4">
        <span className="text-xs font-semibold text-[#207bff] tracking-wider uppercase flex items-center gap-2">
          <Zap className="w-3.5 h-3.5" />
          {lang === 'fr' ? 'Méthodologie DRS' : 'Our DRS methodology'}
        </span>
      </div>

      {/* Solution badges row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full relative z-10">
        {solutions.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="flex items-center gap-2 rounded-full border border-[#207bff]/20 bg-[#207bff]/5 px-4 py-2.5 backdrop-blur-sm">
              <Icon className="w-4 h-4 text-[#207bff] flex-shrink-0" />
              <span className="text-xs font-medium text-[#4ea5ff]">{lang === 'fr' ? s.fr : s.en}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ─── SERVICE SHOWCASE — Interactive hover image preview ─── */
const ServiceShowcase = ({ services, lang }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = React.useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef(null);
  const animRef = React.useRef(null);

  React.useEffect(() => {
    const lerp = (a, b, f) => a + (b - a) * f;
    const animate = () => {
      setSmoothPos(prev => ({
        x: lerp(prev.x, mousePos.x, 0.15),
        y: lerp(prev.y, mousePos.y, 0.15),
      }));
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [mousePos]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
      {/* Floating image preview */}
      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-2xl shadow-2xl border border-slate-200/50"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPos.x + 24}px, ${smoothPos.y - 110}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.85,
          transition: 'opacity 0.3s cubic-bezier(0.4,0,0.2,1), scale 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="relative w-[300px] h-[190px] bg-[#f5f7fa] rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <img
              key={s.id}
              src={s.image}
              alt={lang === 'fr' ? s.titleFr : s.titleEn}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: hoveredIndex === i ? 1 : 0,
                scale: hoveredIndex === i ? 1 : 1.1,
                filter: hoveredIndex === i ? 'none' : 'blur(10px)',
                transition: 'all 0.5s ease-out',
              }}
            />
          ))}
          {/* Blue tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#207bff]/20 to-transparent" />
          {/* Duration pill */}
          {hoveredIndex !== null && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-[#207bff]">
              {services[hoveredIndex]?.duration}
            </div>
          )}
        </div>
      </div>

      {/* Service list */}
      <div className="space-y-0">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.id}
              href={`/expertise/${s.id}`}
              className="group block"
              onMouseEnter={() => { setHoveredIndex(i); setIsVisible(true); }}
              onMouseLeave={() => { setHoveredIndex(null); setIsVisible(false); }}
            >
              <div className="relative py-6 border-t border-[#e2e8f0] transition-all duration-300 ease-out">
                {/* Hover bg */}
                <div className={`absolute inset-0 -mx-4 px-4 bg-[#f0f7ff] rounded-xl transition-all duration-300 ease-out ${hoveredIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${hoveredIndex === i ? 'bg-[#207bff] text-white' : 'bg-[#f0f7ff] text-[#207bff]'}`}>
                        <Icon size={20} />
                      </div>
                      <h3 className="text-[#1a1a1a] font-semibold text-lg tracking-tight">
                        <span className="relative">
                          {lang === 'fr' ? s.titleFr : s.titleEn}
                          <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#207bff] transition-all duration-300 ease-out ${hoveredIndex === i ? 'w-full' : 'w-0'}`} />
                        </span>
                      </h3>
                      <ArrowRight className={`w-4 h-4 text-[#207bff] transition-all duration-300 ease-out ${hoveredIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                    </div>
                    <p className={`text-sm mt-2 ml-[52px] leading-relaxed transition-all duration-300 ${hoveredIndex === i ? 'text-[#4a5568]' : 'text-[#718096]'}`}>
                      {lang === 'fr' ? s.descFr : s.descEn}
                    </p>
                    <div className="flex items-center gap-3 mt-2 ml-[52px]">
                      <span className="text-xs text-[#718096] flex items-center gap-1"><FileText size={12} />{lang === 'fr' ? s.deliverableFr : s.deliverableEn}</span>
                    </div>
                  </div>

                  <span className={`text-xs font-mono text-[#718096] tabular-nums mt-1 transition-all duration-300 ${hoveredIndex === i ? 'text-[#207bff]' : ''}`}>
                    {s.year}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
        <div className="border-t border-[#e2e8f0]" />
      </div>
    </div>
  );
};

/* ─── TEAM SHOWCASE — Interactive grid with hover highlight ─── */
const teamMembers = [
  {
    id: 'lucas',
    name: 'Lucas A.',
    role: 'FOUNDER & STRATEGIC ARCHITECT',
    roleFr: 'FONDATEUR & ARCHITECTE STRATÉGIQUE',
    image: '/team/lucas.png',
    linkedin: 'https://www.linkedin.com/in/lucas-ansel-growth-hacker/',
  },
  {
    id: 'ayoub',
    name: 'Ayoub B.',
    role: 'CHIEF TECHNOLOGY OFFICER',
    roleFr: 'DIRECTEUR TECHNIQUE',
    image: '/team/ayoub.png',
    linkedin: 'https://www.linkedin.com/in/ayoub-bouzalmad-ba17a8139/',
  },
  {
    id: 'david',
    name: 'David A.',
    role: 'INDUSTRIAL OPS & ADVISORY',
    roleFr: 'OPÉRATIONS & CONSEIL INDUSTRIEL',
    image: '/team/david.png',
    linkedin: 'https://www.linkedin.com/in/david-ansel-7ab435a8/',
  },
];

const TeamShowcase = ({ lang }) => {
  const [hoveredId, setHoveredId] = React.useState(null);

  return (
    <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-16 select-none w-full max-w-5xl mx-auto">
      {/* Photo grid — masonry offset */}
      <div className="flex gap-3 flex-shrink-0">
        {teamMembers.map((member, i) => {
          const isActive = hoveredId === member.id;
          const isDimmed = hoveredId !== null && !isActive;
          const offsets = [0, 48, 24];
          return (
            <div
              key={member.id}
              className="flex flex-col gap-3"
              style={{ marginTop: `${offsets[i]}px` }}
            >
              <div
                className={`overflow-hidden rounded-2xl cursor-pointer transition-all duration-400 w-[140px] h-[180px] sm:w-[155px] sm:h-[200px] md:w-[175px] md:h-[220px] ${isDimmed ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'}`}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-all duration-500"
                  style={{
                    filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(0.8) brightness(0.8)',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Name list */}
      <div className="flex flex-col gap-6 pt-2 flex-1 w-full">
        {teamMembers.map((member) => {
          const isActive = hoveredId === member.id;
          const isDimmed = hoveredId !== null && !isActive;
          return (
            <div
              key={member.id}
              className={`cursor-pointer transition-opacity duration-300 ${isDimmed ? 'opacity-40' : 'opacity-100'}`}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center gap-3">
                <span className={`w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300 ${isActive ? 'bg-[#207bff] w-6' : 'bg-[#1a1a1a]/20'}`} />
                <span className={`text-lg md:text-xl font-semibold leading-none tracking-tight transition-colors duration-300 ${isActive ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/70'}`}>
                  {member.name}
                </span>
                {/* LinkedIn icon — slides in on hover */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`p-1 rounded text-[#718096] hover:text-[#207bff] hover:bg-[#f0f7ff] transition-all duration-200 hover:scale-110 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}`}
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
              <p className="mt-1.5 pl-[28px] text-[9px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#718096]">
                {lang === 'fr' ? member.roleFr : member.role}
              </p>
            </div>
          );
        })}

        <Link href="/team" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#207bff] hover:gap-3 transition-all pl-[28px]">
          {lang === 'fr' ? 'En savoir plus sur l\'équipe' : 'See full team'}
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════ */
export default function Home() {
  const { i18n } = useTranslation();
  const L = i18n.language;

  return (
    <div data-testid="home-page">
      {/* ════════════════════════════════════════════
          HERO — Glassmorphism (fixed readability)
          ════════════════════════════════════════════ */}
      <div className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans">
        <style>{`
          @keyframes heroFadeSlideIn {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroMarquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .hero-anim { animation: heroFadeSlideIn 0.8s ease-out forwards; opacity: 0; }
          .hero-marquee { animation: heroMarquee 40s linear infinite; }
          .hd-100 { animation-delay: 0.1s; }
          .hd-200 { animation-delay: 0.2s; }
          .hd-300 { animation-delay: 0.3s; }
          .hd-400 { animation-delay: 0.4s; }
          .hd-500 { animation-delay: 0.5s; }
        `}</style>

        {/* Background — industrial CNC imagery */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=1400)',
            maskImage: 'linear-gradient(180deg, transparent 0%, black 10%, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 10%, black 60%, transparent 100%)',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950/80" />
        {/* Blue accent glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#207bff]/8 rounded-full blur-[120px] pointer-events-none z-[1]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

            {/* ─── LEFT COLUMN ─── */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
              {/* Badge */}
              <div className="hero-anim hd-100">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                    {L === 'fr' ? 'Cabinet Digital · Industrie' : 'Industrial Digital Advisory'}
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#207bff] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#207bff]" />
                    </span>
                  </span>
                </div>
              </div>

              {/* Heading — fully opaque white, no mask fade */}
              <h1
                className="hero-anim hd-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {L === 'fr' ? (
                  <>
                    <span className="text-white">Votre site ne</span><br />
                    <span className="text-[#207bff]">convainc pas</span><br />
                    <span className="text-white">vos décideurs</span>
                  </>
                ) : (
                  <>
                    <span className="text-white">Your site doesn't</span><br />
                    <span className="text-[#207bff]">convince</span><br />
                    <span className="text-white">your buyers</span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="hero-anim hd-300 max-w-xl text-lg text-zinc-300 leading-relaxed">
                {L === 'fr'
                  ? 'Nous transformons les sites web industriels en véritables outils d\'aide à la décision. Nos recommandations s\'appuient sur des données vérifiables, pas sur des intuitions.'
                  : 'We audit and transform machine-tool and industrial websites into decision support tools. With data, not promises.'}
              </p>

              {/* CTA Buttons */}
              <div className="hero-anim hd-400 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#207bff] px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#1a62cc] active:scale-[0.98]"
                >
                  {L === 'fr' ? 'Demander un audit gratuit' : 'Request an Audit'}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/expertise"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
                >
                  <Play className="w-4 h-4 fill-current" />
                  {L === 'fr' ? 'Découvrir nos services' : 'See our services'}
                </Link>
              </div>
            </div>

            {/* ─── RIGHT COLUMN — Bento Cards ─── */}
            <div className="lg:col-span-5 space-y-6 lg:mt-12">
              {/* Stats Card */}
              <div className="hero-anim hd-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-[#207bff]/5 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                      <TrendingUp className="h-6 w-6 text-[#207bff]" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold tracking-tight text-white">51,772</div>
                      <div className="text-sm text-zinc-400">
                        {L === 'fr' ? 'Défaillances en France (2025)' : 'Business Failures in France (2025)'}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">{L === 'fr' ? 'Pression industrielle' : 'Industrial Pressure'}</span>
                      <span className="text-[#ef4444] font-medium">+9.5%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#207bff] to-[#ef4444]" />
                    </div>
                  </div>

                  <div className="h-px w-full bg-white/10 mb-6" />

                  {/* Mini Stats */}
                  <div className="grid grid-cols-5 gap-2 text-center">
                    <StatItem value="30" label={L === 'fr' ? 'OEM analysés' : 'OEMs audited'} />
                    <div className="w-px bg-white/10 mx-auto" />
                    <StatItem value="13" label={L === 'fr' ? 'Régions' : 'Regions'} />
                    <div className="w-px bg-white/10 mx-auto" />
                    <StatItem value="4" label={L === 'fr' ? 'Services' : 'Services'} />
                  </div>

                  {/* Tag Pills */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      {L === 'fr' ? 'DONNÉES ACTUALISÉES' : 'DATA UP TO DATE'}
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                      <Award className="w-3 h-3 text-[#e89565]" />
                      {L === 'fr' ? 'MÉTHODOLOGIE DRS' : 'DRS METHODOLOGY'}
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                      <Database className="w-3 h-3 text-[#4ea5ff]" />
                      Banque de France
                    </div>
                  </div>
                </div>
              </div>

              {/* Marquee Card */}
              <div className="hero-anim hd-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-6 backdrop-blur-xl">
                <h3 className="mb-4 px-8 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  {L === 'fr' ? 'OEM analysés dans notre benchmark' : 'OEMs Benchmarked in our audit'}
                </h3>
                <div
                  className="relative flex overflow-hidden"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                  }}
                >
                  <div className="hero-marquee flex gap-12 whitespace-nowrap px-4">
                    {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => {
                      const Icon = client.icon;
                      return (
                        <div key={i} className="flex items-center gap-2 opacity-40 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0">
                          <Icon className="h-5 w-5 text-[#207bff]" />
                          <span className="text-sm font-bold text-white tracking-tight">{client.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          PROBLEM → SOLUTION (Animated Connectors)
          ════════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">
              {L === 'fr' ? 'Ce qui bloque → Ce que nous résolvons' : 'The Problem → Our Solution'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {L === 'fr'
                ? 'Les sites industriels font fuir les décideurs'
                : 'Industrial sites are losing decision-makers'}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {L === 'fr'
                ? 'Chaque point de friction non résolu sur votre site renforce l\'hésitation de vos prospects. Notre méthodologie transforme ces blocages en parcours clairs.'
                : 'Every unresolved friction point increases uncertainty. Our methodology transforms each blocker into a structured pathway.'}
            </p>
          </div>

          <ProblemConnectors lang={L} />
        </div>
      </section>

      {/* ── SERVICES — Interactive Showcase ── */}
      <section className="py-24 bg-[#fafbfc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">{L === 'fr' ? 'Nos services' : 'Our Services'}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">{L === 'fr' ? 'Ce que nous livrons concrètement' : 'What we deliver'}</h2>
            </div>
            <Link href="/expertise" className="text-sm font-medium text-[#207bff] flex items-center gap-1 hover:gap-2 transition-all">
              {L === 'fr' ? 'Voir tout' : 'See all'}<ArrowRight size={14} />
            </Link>
          </div>

          <ServiceShowcase services={services} lang={L} />
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-4 block">{L === 'fr' ? 'Ce qui nous différencie' : 'Why Us'}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12">{L === 'fr' ? 'Trois convictions, pas des slogans' : 'What sets us apart'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <div key={i}>
                <div className="text-6xl font-bold text-[#207bff]/10 mb-4">0{i + 1}</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{L === 'fr' ? d.titleFr : d.titleEn}</h3>
                <p className="text-[#4a5568] leading-relaxed">{L === 'fr' ? d.descFr : d.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD TEASER ── */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#4ea5ff] text-sm font-semibold tracking-widest uppercase mb-4 block">{L === 'fr' ? 'Notre plateforme' : 'Our Proprietary Tool'}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{L === 'fr' ? 'Intelligence décisionnelle en direct' : 'Decision intelligence platform'}</h2>
              <p className="text-[#a0aec0] text-lg leading-relaxed mb-6">{L === 'fr' ? 'En rendez-vous, nous vous montrons tout en direct : pression marché par région, benchmark concurrents, scénarios de décision. Pas un PowerPoint figé — un outil interactif sur vos données de marché.' : 'In meetings, we show you live: market pressure by region, competitor benchmarks, decision scenarios, performance metrics. Not a PowerPoint — an interactive tool built on real data.'}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ v: '13', en: 'Regions mapped', fr: 'Régions couvertes' }, { v: '30+', en: 'OEMs benchmarked', fr: 'OEM comparés' }, { v: '5', en: 'Decision scenarios', fr: 'Scénarios disponibles' }, { v: '4', en: 'Entry gates', fr: 'Points de contact' }].map((s, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#4ea5ff]">{s.v}</div>
                    <div className="text-sm text-[#718096]">{L === 'fr' ? s.fr : s.en}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#207bff] text-white font-semibold rounded-sm hover:bg-[#1a62cc] transition-colors">{L === 'fr' ? 'Réserver une démo gratuite' : 'Book a demo'}<ArrowRight size={18} /></Link>
            </div>
            <div className="bg-[#0f1320] rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-2 mb-6"><div className="w-3 h-3 rounded-full bg-[#ef4444]" /><div className="w-3 h-3 rounded-full bg-[#f59e0b]" /><div className="w-3 h-3 rounded-full bg-[#10b981]" /><span className="text-xs text-[#718096] ml-2">Industrial Decision Platform</span></div>
              <div className="space-y-4">
                <div className="bg-[#1a1f2e] rounded-lg p-4"><div className="text-xs text-[#4ea5ff] mb-1">Industrial Pressure Index</div><div className="text-3xl font-bold text-white">51,772</div><div className="text-xs text-[#ef4444]">+9.5% vs 2024</div></div>
                <div className="grid grid-cols-3 gap-3">{[{ l: 'DRS Avg', v: '3.2' }, { l: 'URI Score', v: '68' }, { l: 'SCI', v: '62' }].map((m, i) => (<div key={i} className="bg-[#1a1f2e] rounded-lg p-3"><div className="text-xs text-[#718096]">{m.l}</div><div className="text-lg font-bold text-white">{m.v}</div></div>))}</div>
                <div className="bg-[#1a1f2e] rounded-lg p-4"><div className="text-xs text-[#718096] mb-2">{L === 'fr' ? 'Régions les plus touchées' : 'Most impacted regions'}</div><div className="space-y-2">{['Île-de-France', 'Auvergne-Rhône-Alpes', 'PACA'].map((r, i) => (<div key={i} className="flex items-center justify-between"><span className="text-sm text-[#a0aec0]">{r}</span><div className="flex-1 mx-3 h-1 bg-[#252b3d] rounded-full overflow-hidden"><div className="h-full bg-[#ef4444] rounded-full" style={{ width: `${85 - i * 15}%` }} /></div></div>))}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM — Interactive Showcase ── */}
      <section className="py-24 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">{L === 'fr' ? 'L\'équipe' : 'The Team'}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">{L === 'fr' ? 'Tech + terrain' : 'Digital strategy + industrial expertise'}</h2>
            <p className="text-[#4a5568] text-lg max-w-2xl mx-auto">{L === 'fr' ? 'Un stratège digital, un CTO développeur, un expert opérations industrielles. Trois profils complémentaires.' : 'A digital strategy architect, a full-stack CTO, and an industrial operations expert.'}</p>
          </div>
          <TeamShowcase lang={L} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{L === 'fr' ? 'Votre site aide-t-il vos prospects à se décider ?' : 'Does your website help prospects decide?'}</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">{L === 'fr' ? 'Demandez un audit gratuit. On analyse votre site avec notre méthodologie DRS et on vous montre concrètement où vous perdez des décideurs.' : 'Request a free decision readiness audit. We analyze your site with our DRS methodology and show you where you\'re losing decision-makers.'}</p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#207bff] font-semibold rounded-sm hover:bg-[#f0f7ff] transition-colors text-lg">{L === 'fr' ? 'Demander mon audit gratuit' : 'Request Free Audit'}<ArrowRight size={20} /></Link>
        </div>
      </section>
    </div>
  );
}
