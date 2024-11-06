import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthorizationStore()
  const { openAuthModal } = authStore
  const { token } = storeToRefs(authStore)

  if (!token.value) {
    console.log('in middleware')
    openAuthModal()
    if (to.meta.layout === 'authenticated') return navigateTo({ path: '/' })
  }
})
