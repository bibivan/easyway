import { defineNuxtRouteMiddleware } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthorizationStore()
  const { goToAuth } = authStore
  const { token } = storeToRefs(authStore)

  if (!token.value) goToAuth()
})
