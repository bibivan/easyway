// middleware/my-middleware.ts
import { useRoute } from 'vue-router'

export default defineNuxtRouteMiddleware(() => {
  const route = useRoute()
})
