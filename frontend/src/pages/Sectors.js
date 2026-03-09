import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Factory, Cog, Cpu, Truck, Building2 } from 'lucide-react';

const sectors = [
  {
    id: 'manufacturing',
    icon: Factory,
    nameEn: 'Manufacturing',
    nameFr: 'Industrie Manufacturière',
    descEn: 'Strategic support for industrial manufacturers facing market pressure.',
    descFr: 'Accompagnement stratégique pour les industriels face à la pression du marché.',
    stats: { failures: 12500, growth: '+8%' }
  },
  {
    id: 'automotive',
    icon: Cog,
    nameEn: 'Automotive & Mobility',
    nameFr: 'Automobile & Mobilité',
    descEn: 'Decision clarity for OEMs and suppliers in transition.',
    descFr: 'Clarté décisionnelle pour les OEM et équipementiers en transition.',
    stats: { failures: 3200, growth: '+15%' }
  },
  {
    id: 'technology',
    icon: Cpu,
    nameEn: 'Industrial Technology',
    nameFr: 'Technologie Industrielle',
    descEn: 'Web architecture and digital strategy for tech-driven industrial firms.',
    descFr: 'Architecture web et stratégie digitale pour les entreprises industrielles tech.',
    stats: { failures: 2100, growth: '+12%' }
  },
  {
    id: 'logistics',
    icon: Truck,
    nameEn: 'Logistics & Supply Chain',
    nameFr: 'Logistique & Supply Chain',
    descEn: 'Strategic clarity for supply chain optimization decisions.',
    descFr: 'Clarté stratégique pour les décisions d\'optimisation supply chain.',
    stats: { failures: 4800, growth: '+6%' }
  },
  {
    id: 'construction',
    icon: Building2,
    nameEn: 'Industrial Construction',
    nameFr: 'Construction Industrielle',
    descEn: 'Decision support for industrial construction and infrastructure.',
    descFr: 'Aide à la décision pour la construction industrielle et les infrastructures.',
    stats: { failures: 8900, growth: '+18%' }
  }
];

export default function Sectors() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { sectorId } = useParams();
  
  const selectedSector = sectorId ? sectors.find(s => s.id === sectorId) : null;
  
  if (selectedSector) {
    return <SectorDetail sector={selectedSector} lang={currentLang} />;
  }
  
  return (
    <div className="animate-fade-in" data-testid="sectors-page">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#262626]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {currentLang === 'fr' ? 'Secteurs' : 'Sectors'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {currentLang === 'fr' 
              ? 'Expertise sectorielle pour des décisions industrielles éclairées.'
              : 'Sector expertise for informed industrial decisions.'}
          </p>
        </div>
      </section>
      
      {/* Sectors Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.id}
                  to={`/sectors/${sector.id}`}
                  className="group bg-[#2a2a2a] border border-white/5 rounded-lg p-6 hover:border-[#e89565]/30 transition-all"
                  data-testid={`sector-${sector.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#e89565]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-[#e89565]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-[#e89565] transition-colors">
                        {currentLang === 'fr' ? sector.nameFr : sector.nameEn}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {currentLang === 'fr' ? sector.descFr : sector.descEn}
                      </p>
                      <div className="flex items-center gap-4 mt-4">
                        <span className="text-xs text-muted-foreground">
                          {sector.stats.failures.toLocaleString()} {currentLang === 'fr' ? 'défaillances' : 'failures'}
                        </span>
                        <span className="text-xs text-[#ef4444]">{sector.stats.growth} YoY</span>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-muted-foreground group-hover:text-[#e89565] transition-colors" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {currentLang === 'fr' ? 'Votre secteur n\'est pas listé ?' : 'Your sector not listed?'}
          </h2>
          <p className="text-muted-foreground mb-8">
            {currentLang === 'fr' 
              ? 'Contactez-nous pour discuter de vos besoins spécifiques.'
              : 'Contact us to discuss your specific needs.'}
          </p>
          <Link to="/contact" className="btn btn-primary">
            {currentLang === 'fr' ? 'Nous contacter' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </div>
  );
}

function SectorDetail({ sector, lang }) {
  const Icon = sector.icon;
  
  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-muted-foreground">
            <Link to="/sectors" className="hover:text-foreground">{lang === 'fr' ? 'Secteurs' : 'Sectors'}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{lang === 'fr' ? sector.nameFr : sector.nameEn}</span>
          </nav>
        </div>
      </div>
      
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#e89565]/10 rounded-lg flex items-center justify-center">
              <Icon size={32} className="text-[#e89565]" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              {lang === 'fr' ? sector.nameFr : sector.nameEn}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {lang === 'fr' ? sector.descFr : sector.descEn}
          </p>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ef4444]">{sector.stats.failures.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">{lang === 'fr' ? 'Défaillances 2024' : '2024 Failures'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f59e0b]">{sector.stats.growth}</div>
              <div className="text-sm text-muted-foreground mt-1">YoY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#e89565]">12%</div>
              <div className="text-sm text-muted-foreground mt-1">{lang === 'fr' ? 'Part industrielle' : 'Industrial Share'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#10b981]">High</div>
              <div className="text-sm text-muted-foreground mt-1">{lang === 'fr' ? 'Pression' : 'Pressure'}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {lang === 'fr' ? 'Besoin de clarté pour votre décision ?' : 'Need clarity for your decision?'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/decision-gates" className="btn btn-primary">
              {lang === 'fr' ? 'Points d\'entrée' : 'Entry Points'}
            </Link>
            <Link to="/" className="btn btn-secondary">
              {lang === 'fr' ? 'Interface Décision' : 'Decision Interface'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
