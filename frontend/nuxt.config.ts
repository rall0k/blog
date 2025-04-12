// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi', '@nuxtjs/i18n'],
  // I18n
  i18n: {
    strategy: 'prefix_and_default', // Používanie URL s prefixom pre každý jazyk, napr. /en, /sk
    defaultLocale: '', // Predvolený jazyk
    locales: ['en', 'sk'],
	fallbackLocale: '', // Ak nie je preklad, použije sa predvolený jazyk
  },
  // STRAPI
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api', // ak si nemenil default
    version: 'v4',
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL
      }
    }
  }
})