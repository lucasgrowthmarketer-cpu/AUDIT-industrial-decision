import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, FileText, Download, Calendar, Clock } from 'lucide-react';

const insights = [
  {
    id: 'industrial-failures-2025',
    type: 'report',
    titleEn: '2025 Industrial Failures Report',
    titleFr: 'Rapport Défaillances Industrielles 2025',
    excerptEn: 'Analysis of 66,000+ business failures in France and their impact on industrial decision-making.',
    excerptFr: 'Analyse de plus de 66 000 défaillances d\'entreprises en France et leur impact sur la prise de décision industrielle.',
    date: '2025-01-15',
    readTime: '12 min'
  },
  {
    id: 'decision-readiness-benchmark',
    type: 'article',
    titleEn: 'OEM Decision Readiness Benchmark',
    titleFr: 'Benchmark de Préparation à la Décision OEM',
    excerptEn: 'How do industrial OEMs compare in decision readiness? Insights from our 30-company analysis.',
    excerptFr: 'Comment les OEM industriels se comparent-ils en matière de préparation à la décision ? Insights de notre analyse de 30 entreprises.',
    date: '2024-12-20',
    readTime: '8 min'
  },
  {
    id: 'strategic-clarity-framework',
    type: 'whitepaper',
    titleEn: 'The Strategic Clarity Framework',
    titleFr: 'Le Framework de Clarté Stratégique',
    excerptEn: 'A methodology for reducing decision uncertainty in industrial contexts.',
    excerptFr: 'Une méthodologie pour réduire l\'incertitude décisionnelle en contexte industriel.',
    date: '2024-11-10',
    readTime: '15 min'
  },
  {
    id: 'market-pressure-analysis',
    type: 'article',
    titleEn: 'Understanding Market Pressure Indicators',
    titleFr: 'Comprendre les Indicateurs de Pression de Marché',
    excerptEn: 'How to interpret IPI and regional failure data for strategic planning.',
    excerptFr: 'Comment interpréter l\'IPI et les données régionales de défaillances pour la planification stratégique.',
    date: '2024-10-05',
    readTime: '6 min'
  }
];

const getTypeColor = (type) => {
  switch (type) {
    case 'report': return 'bg-[#ef4444]/20 text-[#ef4444]';
    case 'whitepaper': return 'bg-[#3b82f6]/20 text-[#3b82f6]';
    default: return 'bg-[#10b981]/20 text-[#10b981]';
  }
};

export default function Insights() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { articleId } = useParams();
  
  const selectedArticle = articleId ? insights.find(i => i.id === articleId) : null;
  
  if (selectedArticle) {
    return <InsightDetail article={selectedArticle} lang={currentLang} />;
  }
  
  return (
    <div className="animate-fade-in" data-testid="insights-page">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#262626]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {currentLang === 'fr' ? 'Perspectives' : 'Insights'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {currentLang === 'fr' 
              ? 'Articles, rapports et analyses pour éclairer vos décisions stratégiques.'
              : 'Articles, reports, and analyses to inform your strategic decisions.'}
          </p>
        </div>
      </section>
      
      {/* Featured */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link
            to={`/insights/${insights[0].id}`}
            className="block bg-[#2a2a2a] border border-white/5 rounded-lg p-8 hover:border-[#e89565]/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded text-xs font-semibold uppercase ${getTypeColor(insights[0].type)}`}>
                {insights[0].type}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar size={14} />
                {new Date(insights[0].date).toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : 'en-US')}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-[#e89565] transition-colors mb-4">
              {currentLang === 'fr' ? insights[0].titleFr : insights[0].titleEn}
            </h2>
            <p className="text-muted-foreground mb-4">
              {currentLang === 'fr' ? insights[0].excerptFr : insights[0].excerptEn}
            </p>
            <div className="flex items-center text-sm text-[#e89565]">
              {currentLang === 'fr' ? 'Lire l\'article' : 'Read article'}
              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
      
      {/* All Insights */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-8">
            {currentLang === 'fr' ? 'Tous les articles' : 'All Articles'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.slice(1).map((article) => (
              <Link
                key={article.id}
                to={`/insights/${article.id}`}
                className="bg-[#262626] border border-white/5 rounded-lg p-6 hover:border-[#e89565]/30 transition-all group"
                data-testid={`insight-${article.id}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase ${getTypeColor(article.type)}`}>
                    {article.type}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-[#e89565] transition-colors mb-2">
                  {currentLang === 'fr' ? article.titleFr : article.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {currentLang === 'fr' ? article.excerptFr : article.excerptEn}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {currentLang === 'fr' ? 'Restez informé' : 'Stay Informed'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {currentLang === 'fr' 
              ? 'Recevez nos dernières analyses et perspectives.'
              : 'Receive our latest analyses and insights.'}
          </p>
          <Link to="/contact" className="btn btn-primary">
            {currentLang === 'fr' ? 'S\'inscrire' : 'Subscribe'}
          </Link>
        </div>
      </section>
    </div>
  );
}

function InsightDetail({ article, lang }) {
  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-muted-foreground">
            <Link to="/insights" className="hover:text-foreground">{lang === 'fr' ? 'Perspectives' : 'Insights'}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{lang === 'fr' ? article.titleFr : article.titleEn}</span>
          </nav>
        </div>
      </div>
      
      {/* Article */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded text-xs font-semibold uppercase ${getTypeColor(article.type)}`}>
              {article.type}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar size={14} />
              {new Date(article.date).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock size={14} />
              {article.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {lang === 'fr' ? article.titleFr : article.titleEn}
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {lang === 'fr' ? article.excerptFr : article.excerptEn}
            </p>
            
            <div className="bg-[#2a2a2a] border border-white/5 rounded-lg p-6 text-center">
              <FileText size={32} className="text-[#e89565] mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                {lang === 'fr' 
                  ? 'Cet article complet est disponible sur demande.'
                  : 'This full article is available upon request.'}
              </p>
              <Link to="/contact" className="btn btn-primary">
                {lang === 'fr' ? 'Demander l\'accès' : 'Request Access'}
              </Link>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/insights" className="btn btn-secondary">
            <ArrowRight size={16} className="rotate-180" />
            {lang === 'fr' ? 'Retour aux perspectives' : 'Back to Insights'}
          </Link>
        </div>
      </section>
    </div>
  );
}
