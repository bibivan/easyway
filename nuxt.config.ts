// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/jpg+xml', href: '/favicon.jpg' }]
    }
  },
  css: ['normalize.css', '~/assets/scss/main.scss'],
  devtools: { enabled: true },
  imports: {
    dirs: ['utils/typeguards']
  },
  modules: ['@pinia/nuxt', 'nuxt-swiper', 'vue3-perfect-scrollbar/nuxt'],
  pinia: {
    storesDirs: ['./stores/**']
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_API_URL,
      sfApiUrl: process.env.NUXT_COMMON_API_URL,
      token: process.env.NUXT_API_TOKEN,
      dadataUrl: process.env.NUXT_DADATA_URL,
      dadataToken: process.env.NUXT_DADATA_TOKEN,
      yamapToken: process.env.NUXT_YAMAP_TOKEN
    }
  },
  ssr: true,
  typescript: {
    typeCheck: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/core";'
        }
      }
    }
  },
  vue: {
    compilerOptions: {
      directiveTransforms: {
        script: () => ({
          props: [],
          needRuntime: true
        })
      }
    }
  }
})
