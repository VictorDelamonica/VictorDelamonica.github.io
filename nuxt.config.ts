// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  // Development tools
  devtools: { enabled: true },

  // Development server configuration
  devServer: {
    port: 3000,
  },


  // Auto-import components (default Nuxt behavior)
  components: true,

  // Modules
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/mdc'],

  // Color mode configuration
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },

  // Nitro configuration for GitHub Pages
  nitro: {
    preset: 'github_pages',
    compressPublicAssets: true,
  },

  // Security headers
  routeRules: {
    '/**': {
      headers: {
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    },
  },

  // Disable SSR for static site generation
  ssr: false,

  // Global CSS
  css: ['~/assets/css/fonts.css'],

  // App configuration
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'IncluSens - Association pour la visibilité du handicap invisible',
      meta: [
        { name: 'description', content: '12 millions de personnes en France vivent avec un handicap invisible. IncluSens rend visibles ces réalités.' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:title', content: 'IncluSens - Association pour la visibilité du handicap invisible' },
        { property: 'og:description', content: '12 millions de personnes en France vivent avec un handicap invisible. IncluSens rend visibles ces réalités.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/logo.png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'IncluSens' },
        { name: 'twitter:description', content: '12 millions de personnes en France vivent avec un handicap invisible.' },
        { name: 'twitter:image', content: '/logo.png' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo.png',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false, // Enable during development if needed
  },

  // Build optimization
  experimental: {
    payloadExtraction: false,
  },

  // Vite configuration
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'heroicons': ['@heroicons/vue'],
          },
        },
      },
    },
    // Define to avoid eval in production
    define: {
      __VUE_PROD_DEVTOOLS__: false,
    },
  },
})
