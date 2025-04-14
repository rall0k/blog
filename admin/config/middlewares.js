module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
//   'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://tvoja-domena.com'], // Sem môžeš pridať adresy, ktoré majú prístup k Strapi API
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },
];
