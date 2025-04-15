// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura'
import { pages, locales, defaultLocale } from './i18nConfig' 

export default defineNuxtConfig({
  compatibilityDate: '2025-04-12',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/strapi', '@primevue/nuxt-module'],
  primevue: {
	options: {
		theme: {
			preset: Aura
		}
	}
  },
  i18n: {
	customRoutes: 'config',
    locales,
    defaultLocale,
	pages
  },
  strapi: {
    url: process.env.STRAPI_URL,  // Nastavte URL na vaše Strapi API
    prefix: '/api',               // Prefix cesty, ak máte predponu pre API
  },
})