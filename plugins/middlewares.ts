import { useRoute } from 'vue-router'

export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'use-route',
    () => {
      useRoute()
    },
    { global: true }
  )
})
