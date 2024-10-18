export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  // Expose to useNuxtApp().$customFetch
  return {
    provide: {
      api
    }
  }
})
