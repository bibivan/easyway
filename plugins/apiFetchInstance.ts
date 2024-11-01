export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const api = $fetch.create({
    baseURL: config.public.baseURL,
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })

  nuxtApp.provide('api', api)
})
