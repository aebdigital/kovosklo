import { projectsData } from '../lib/projects';
import { services } from '../lib/services';
import { SITE_URL } from '../lib/seo';

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/o-nas', priority: '0.8', changefreq: 'monthly' },
    { path: '/referencie', priority: '0.9', changefreq: 'weekly' },
    { path: '/kontakt', priority: '0.8', changefreq: 'monthly' },
  ];

  const servicePages = Object.keys(services).map((slug) => ({
    path: `/sluzba/${slug}`,
    priority: '0.85',
    changefreq: 'monthly',
  }));

  const projectPages = Object.keys(projectsData).map((slug) => ({
    path: `/projekt-detail/${slug}`,
    priority: '0.7',
    changefreq: 'yearly',
  }));

  const urls = [...staticPages, ...servicePages, ...projectPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.path === '/' ? '' : u.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  res.write(generateSitemap());
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
