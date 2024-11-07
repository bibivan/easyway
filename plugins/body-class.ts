export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    document.body.classList.add('body')
  }
})
