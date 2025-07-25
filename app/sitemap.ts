import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://expandmatrix.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/o-nas',
    '/sluzby', 
    '/vps',
    '/portfolio',
    '/kontakt'
  ];
  

  const sitemap: MetadataRoute.Sitemap = [];

  // Add Czech pages
  routes.forEach(route => {
    sitemap.push({
      url: `${baseUrl}/cs${route}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    });
  });

  // Add English pages
  const enRoutes = ['', '/about-us', '/services', '/vps', '/contact'];
  enRoutes.forEach(route => {
    sitemap.push({
      url: `${baseUrl}/en${route}`,
      lastModified,
      changeFrequency: 'weekly', 
      priority: route === '' ? 1 : 0.8,
    });
  });

  return sitemap;
}
