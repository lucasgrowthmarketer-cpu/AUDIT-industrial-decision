import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Users, 
  Linkedin, 
  Mail,
  ArrowRight,
  CheckCircle,
  Globe
} from 'lucide-react';

export default function About() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <div className="animate-fade-in" data-testid="about-page">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#262626]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {currentLang === 'fr' 
              ? 'Stratégie Digitale & Architecture Web Industrielle'
              : 'Digital Strategy & Industrial Web Architecture'}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {currentLang === 'fr' 
              ? 'Nous aidons les dirigeants industriels à prendre de meilleures décisions grâce à des systèmes de clarté stratégique.'
              : 'We help industrial leaders make better decisions through strategic clarity systems.'}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-primary">
              {currentLang === 'fr' ? 'Interface Décision' : 'Decision Interface'}
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              {currentLang === 'fr' ? 'Nous contacter' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {currentLang === 'fr' ? 'Notre Mission' : 'Our Mission'}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {currentLang === 'fr' 
                  ? 'Dans un contexte de plus de 66 000 défaillances d\'entreprises en France, les dirigeants industriels ont besoin de clarté pour prendre des décisions critiques.'
                  : 'In a context of over 66,000 business failures in France, industrial leaders need clarity to make critical decisions.'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {currentLang === 'fr' 
                  ? 'Industrial Decision fournit les données, les méthodologies et l\'accompagnement nécessaires pour réduire l\'incertitude décisionnelle.'
                  : 'Industrial Decision provides the data, methodologies, and guidance needed to reduce decision uncertainty.'}
              </p>
            </div>
            <div className="bg-[#2a2a2a] border border-white/5 rounded-lg p-8">
              <Target size={40} className="text-[#e89565] mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                {currentLang === 'fr' ? 'Clarifier. Rassurer. Déclencher.' : 'Clarify. Reassure. Trigger.'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === 'fr' 
                  ? 'Notre framework en trois étapes pour accompagner les décisions stratégiques.'
                  : 'Our three-step framework for supporting strategic decisions.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {currentLang === 'fr' ? 'Nos Valeurs' : 'Our Values'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#e89565]/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={28} className="text-[#e89565]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {currentLang === 'fr' ? 'Rigueur' : 'Rigor'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === 'fr' 
                  ? 'Données vérifiées, méthodologies transparentes, résultats mesurables.'
                  : 'Verified data, transparent methodologies, measurable results.'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#e89565]/10 rounded-full flex items-center justify-center mb-4">
                <Globe size={28} className="text-[#e89565]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {currentLang === 'fr' ? 'Clarté' : 'Clarity'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === 'fr' 
                  ? 'Communication directe, sans jargon, orientée action.'
                  : 'Direct communication, jargon-free, action-oriented.'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#e89565]/10 rounded-full flex items-center justify-center mb-4">
                <Users size={28} className="text-[#e89565]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {currentLang === 'fr' ? 'Engagement' : 'Commitment'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === 'fr' 
                  ? 'Accompagnement sur mesure, réactivité, confidentialité.'
                  : 'Tailored support, responsiveness, confidentiality.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {currentLang === 'fr' ? 'Direction' : 'Leadership'}
          </h2>
          
          <div className="max-w-md mx-auto bg-[#2a2a2a] border border-white/5 rounded-lg p-8 text-center">
            <div className="w-24 h-24 mx-auto bg-[#e89565] rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-[#262626]">LA</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Lucas Ansel</h3>
            <p className="text-sm text-[#e89565] mb-4">
              {currentLang === 'fr' ? 'Fondateur & Directeur' : 'Founder & Director'}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {currentLang === 'fr' 
                ? 'Stratégie digitale et architecture web industrielle.'
                : 'Digital strategy and industrial web architecture.'}
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:direction@industrialdecision.com"
                className="text-muted-foreground hover:text-[#e89565] transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/lucas-ansel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#e89565] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#e89565]/10 border-y border-[#e89565]/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {currentLang === 'fr' ? 'Prêt à clarifier vos décisions ?' : 'Ready to clarify your decisions?'}
          </h2>
          <p className="text-muted-foreground mb-8">
            {currentLang === 'fr' 
              ? 'Explorez notre interface décision ou contactez-nous pour un échange confidentiel.'
              : 'Explore our decision interface or contact us for a confidential discussion.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-primary">
              {currentLang === 'fr' ? 'Interface Décision' : 'Decision Interface'}
            </Link>
            <Link to="/decision-gates" className="btn btn-secondary">
              {currentLang === 'fr' ? 'Points d\'entrée' : 'Entry Points'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
