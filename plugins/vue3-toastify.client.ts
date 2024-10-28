import Vue3Toastify, { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    toastClassName: 'base-toastify__item',
    containerClassName: 'base-toastify',
    bodyClassName: 'base-toastify__body',
    progressClassName: 'base-toastify__progress-bar',
    hideProgressBar: true,
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000
  })

  return {
    provide: { toast }
  }
})
