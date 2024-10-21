import type { RouterConfig } from '@nuxt/schema'
import type { TNullable } from '~/types'

export default <RouterConfig>{
  async scrollBehavior(to, from, savedPosition) {
    if (process.client && window.innerWidth > 1024) return { left: 0, top: 0, behavior: 'smooth' }

    // Если есть сохраненная позиция (например, при нажатии на кнопку назад)
    if (savedPosition) {
      return { left: savedPosition.left, top: savedPosition.top, behavior: 'smooth' }
    }

    // Если указан хэш в URL (например, /page#section)
    if (to.hash) {
      // Отложенная проверка на наличие элемента
      const findElement = async (hash: string, attempts = 10) => {
        const element: TNullable<Element> = document.querySelector(hash)
        if (element && 'offsetTop' in element && typeof element.offsetTop === 'number') {
          return {
            top: element.offsetTop - 90, // Отступ сверху
            behavior: 'smooth'
          }
        } else if (attempts > 0) {
          // Повторяем попытку найти элемент, если он ещё не загружен
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(findElement(hash, attempts - 1))
            }, 100) // Повторяем каждые 100 мс
          })
        } else {
          return { left: 0, top: 0, behavior: 'smooth' } // По умолчанию, если элемент не найден
        }
      }

      return findElement(to.hash)
    }

    // По умолчанию скроллим в начало страницы
    return { left: 0, top: 0, behavior: 'smooth' }
  }
}
