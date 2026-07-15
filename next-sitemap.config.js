const path = require('path');

const STATIC_CATEGORY_ROUTES = new Set(['granite', 'headstones']);
const EXCLUDED_CATEGORY_SLUGS = new Set(['information', 'natural-stones']);

const getCategoriesArray = (categoriesRaw) => {
  if (Array.isArray(categoriesRaw)) return categoriesRaw;
  if (Array.isArray(categoriesRaw?.data)) return categoriesRaw.data;
  if (Array.isArray(categoriesRaw?.results)) return categoriesRaw.results;
  if (Array.isArray(categoriesRaw?.categories)) return categoriesRaw.categories;
  if (Array.isArray(categoriesRaw?.value)) return categoriesRaw.value;
  return [];
};

const addUrl = (urls, url) => {
  if (!url) return;
  urls.add(url.endsWith('/') ? url : `${url}/`);
};

module.exports = {
  siteUrl: 'https://www.stonediscover.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 50000,
  outDir: './public',
  sourceDir: path.resolve(__dirname, '.next'),

  exclude: [
    '/blog/preview*',
    '/blog/tag*',
    '/blog/category*',
    '/blog/author*',
    '/thank-you',
    '/natural-stones',
    '/natural-stones*',
    '/blog/stonemason',
    '/blog/limestone-vs-sandstone-which-is-the-better-choice',
    '/blog/popular-granite-colors',
    '/blog/difference-between-limestone-and-marble',
    '/blog/which-natural-stone-is-most-durable',
    '/blog/white-granite-colors',
    '/blog/general-contractor-vs-construction-company'
  ],

  additionalPaths: async (config) => {
    const res = await fetch(
      'https://stonediscoverusaapi.onrender.com/api/frontend/categories/'
    );
    const categories = getCategoriesArray(await res.json());

    const urls = new Set();

    for (const cat of categories) {
      if (!cat?.slug || EXCLUDED_CATEGORY_SLUGS.has(cat.slug)) continue;

      if (STATIC_CATEGORY_ROUTES.has(cat.slug)) {
        addUrl(urls, `/${cat.slug}/`);
      }

      if (Array.isArray(cat.subcategories)) {
        for (const sub of cat.subcategories) {
          if (!sub?.slug) continue;

          if (STATIC_CATEGORY_ROUTES.has(cat.slug)) {
            addUrl(urls, `/${cat.slug}/${sub.slug}/`);
          }
        }
      }
    }

    const staticUrls = [
      // '/catalog-download/',
      // '/contact-us/',
     '/location/' 
    ];

    const allUrls = [...new Set([...urls, ...staticUrls])];

    return Promise.all(
      allUrls.map((url) => config.transform(config, url))
    );
  },
};
