// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,

  app: {
    baseURL: '/VictorDelamonica.github.io/',
    buildAssetsDir: 'assets',
  },

  nitro: {
    preset: 'github_pages'
  }
})
