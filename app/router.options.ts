import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  async scrollBehavior(to, from, savedPosition) {
    const defaultPosition = { left: 0, top: 0, behavior: 'smooth' }
    if (process.client && window.innerWidth > 1024) return defaultPosition

    // Если есть сохраненная позиция (например, при нажатии на кнопку назад)
    if (savedPosition) {
      return { left: savedPosition.left, top: savedPosition.top, behavior: 'smooth' }
    }

    if (to.hash) {
      const findElement = async (hash: string, attempts = 10) => {
        const element = document.querySelector(hash)
        if (element && 'offsetTop' in element && typeof element.offsetTop === 'number') {
          return {
            top: element.offsetTop - 90,
            behavior: 'smooth'
          }
        } else if (attempts > 0) {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(findElement(hash, attempts - 1))
            }, 100)
          })
        } else {
          return { left: 0, top: 0, behavior: 'smooth' }
        }
      }

      return findElement(to.hash)
    }

    return defaultPosition
  }
}
