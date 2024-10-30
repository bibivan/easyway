import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack'
import type { UseFetchOptions } from 'nuxt/app'

export const getShopToken = () => {
  const config = useRuntimeConfig()
  return config.public.token
}

export const getBaseUrl = () => {
  const config = useRuntimeConfig()
  return config.public.baseURL
}

// export const getObjectWithToken = (methodName?: string) => {
//   const token = getShopToken()
//   const method = methodName?.toUpperCase() || 'GET'
//
//   // Проверяем, какой метод используется, и добавляем токен в нужное место
//   if (method && ['POST', 'PUT', 'PATCH'].includes(method)) {
//     return { body: { token } }
//   } else {
//     return { query: { token } }
//   }
// }
