// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: true,
    compatibilityDate: '2025-04-14',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    colorMode: {
        classSuffix: '',
        preference: 'system', // default
    },
    nitro: {
        preset: 'github_pages',
    },
    ssr: false,
    css: ['~/assets/css/fonts.css'],
    app: {
        baseURL: '/',
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap',
                },
            ],
        },
    },
})
