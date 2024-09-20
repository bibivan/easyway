// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  modules: ['@pinia/nuxt', 'nuxt-swiper', 'vue3-perfect-scrollbar/nuxt'],
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/core";'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_API_URL,
      token: process.env.NUXT_API_TOKEN,
      dadataUrl: process.env.NUXT_DADATA_URL,
      dadataToken: process.env.NUXT_DADATA_TOKEN,
      yamapToken: process.env.NUXT_YAMAP_TOKEN
    }
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  typescript: {
    typeCheck: true
  },
  imports: {
    dirs: ['utils/typeguards']
  },
  ssr: true
})
