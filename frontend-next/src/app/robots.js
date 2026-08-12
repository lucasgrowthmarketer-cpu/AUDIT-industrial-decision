const BASE = 'https://www.industrialdecision.com';

export default function robots() {
  return {
    rules: [
      // Regle generale : tout autorise sauf les routes techniques
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/health', '/_next/static/chunks/'],
      },
      // Crawlers IA explicitement autorises (visibilite GEO)
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Perplexity-User',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'meta-externalagent',
        allow: '/',
        disallow: ['/api/'],
      },
      // Outils SEO : autorises explicitement (Site Audit, suivi de positions)
      {
        userAgent: 'SemrushBot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'AhrefsBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Scrapers sans valeur SEO ni GEO
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
