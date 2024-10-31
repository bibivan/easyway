import type { IPagination, IPaginationRaw } from '~/types'

export const toNullable = (value: any) => {
  return value === '' || value === undefined || value === null ? null : value
}

export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) {
    return true
  }

  if (typeof value === 'number') {
    return value === 0
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }

  return false
}

export const isValidJSON = (str: any): str is string => {
  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}

export const parseJSON = <T>(str: any): T | any => {
  try {
    return JSON.parse(str)
  } catch (e) {
    return str
  }
}

export const paginationRawToPagination = (obj: IPaginationRaw): IPagination => {
  return {
    page: Number(obj.currentPage),
    pages: Number(obj.totalPages)
  }
}

export const arrayHasElem = <T extends Record<string, any>>(
  array: T[],
  key: keyof T,
  value: any
): boolean => {
  return array.some((item) => item[key] === value)
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null

  return (...args: Parameters<T>) => {
    const context = this

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

// export const throttle = <T extends (...args: any[]) => void>(
//   func: T,
//   limit: number
// ): ((...args: Parameters<T>) => void) => {
//   let lastFunc: ReturnType<typeof setTimeout> | null = null
//   let lastRan: number | null = null
//
//   return (...args: Parameters<T>) => {
//     const context = this
//
//     if (!lastRan) {
//       func.apply(context, args)
//       lastRan = Date.now()
//     } else {
//       if (lastFunc) {
//         clearTimeout(lastFunc)
//       }
//
//       lastFunc = setTimeout(
//         () => {
//           if (Date.now() - (lastRan as number) >= limit) {
//             func.apply(context, args)
//             lastRan = Date.now()
//           }
//         },
//         limit - (Date.now() - (lastRan as number))
//       )
//     }
//   }
// }

export const formatNumberWithSpaces = (num: number): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export const smoothScroll = (container: HTMLElement, targetPosition: number, duration: number) => {
  const startPosition = container.scrollTop
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1) // Ограничиваем прогресс до 1

    container.scrollTop = startPosition + distance * progress

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

// export const getRandomNumber = (min: number, max: number): number => {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }

// export const getRandomColor = (): string => {
//   const letters = '0123456789ABCDEF'
//   let color = '#'
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)]
//   }
//   return color
// }
