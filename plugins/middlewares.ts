import { useRoute } from 'vue-router'
import type { TNullable } from '~/types'

export default defineNuxtPlugin(() => {
  const scrollPositions: Record<string, number> = {}
  addRouteMiddleware(
    'use-scrolling-by-hash',
    (to, from) => {
      useRoute()

      if (process.client) return

      // Функция с рекурсией для попыток прокрутки
      const tryScrollToElement = (attempts: number = 0) => {
        const psContainer: TNullable<HTMLElement> = document.querySelector('.ps')
        const element: TNullable<HTMLElement> = document.getElementById(to.hash.slice(1))

        console.log(psContainer)

        if (from.path) {
          scrollPositions[from.path] = psContainer ? psContainer.scrollTop : window.scrollY
        }

        if (psContainer && element) {
          smoothScroll(psContainer, element.offsetTop - 90, 300)
        } else if (attempts < 10 && to.hash) {
          setTimeout(() => tryScrollToElement(attempts + 1), 100)
        } else if (psContainer) {
          const savedPosition = scrollPositions[to.path] || 0
          smoothScroll(psContainer, savedPosition, 300)
        } else {
          smoothScroll(document.body, 0, 300)
        }
      }

      if (process.client && window.innerWidth > 1024) {
        tryScrollToElement()
      }
    },
    { global: true }
  )
})
