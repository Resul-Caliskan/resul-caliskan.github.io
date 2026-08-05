const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://resul-caliskan.github.io';

const staticRoutes = [
  '/',
  '/projeler',
  '/blog',
];

const blogSlugs = [
  'kavramsal-tasarim',
  'neden-yaziyorum',
];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  // Static Routes
  staticRoutes.forEach((route) => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}${route}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="tr" href="${DOMAIN}${route}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}${route}" />\n`;
    xml += `  </url>\n`;
  });

  // Blog Posts
  blogSlugs.forEach((slug) => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/blog/${slug}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.9</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="tr" href="${DOMAIN}/blog/${slug}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}/blog/${slug}" />\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('✅ public/sitemap.xml successfully generated!');

  const robots = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('✅ public/robots.txt successfully generated!');
};

generateSitemap();
