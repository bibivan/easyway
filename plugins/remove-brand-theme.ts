// plugins/remove-brand-theme.ts
import { EBrand, EProductFilters } from '~/types'

export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.afterEach((to, from) => {
    if (from.name === 'catalog') document.body.removeAttribute('data-theme')
    if (to.name === 'catalog') {
      const brand =
        to.query[EProductFilters.BRAND] === EBrand.EASYFIT ? EBrand.EASYFIT : EBrand.EASYWAY
      document.body.setAttribute('data-theme', brand)
    }
  })
})
