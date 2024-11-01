// plugins/api.ts
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const sfApi = $fetch.create({
    baseURL: config.public.sfApiUrl,
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })

  nuxtApp.provide('sfApi', sfApi)
})
