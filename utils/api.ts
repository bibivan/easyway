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

export const addTokenToRequest = <T, U>(
  options: NitroFetchOptions<NitroFetchRequest> | UseFetchOptions<T, U>
): NitroFetchOptions<NitroFetchRequest> | UseFetchOptions<T, U> => {
  const token = getShopToken()
  const method = unref(options.method)?.toUpperCase() || 'GET'

  if (options.method && ['POST', 'PUT', 'PATCH'].includes(method)) {
    options.body = { ...(options.body as object), token }
  } else {
    options.query = { ...(options.query as object), token }
  }

  return options
}
