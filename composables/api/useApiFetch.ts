import type { UseFetchOptions } from 'nuxt/app'
import type { NitroFetchRequest } from 'nitropack'
import { defu } from 'defu'

export function useApiFetch<ResT, DataT>(
  request: NitroFetchRequest,
  options: UseFetchOptions<ResT, DataT> = {}
) {
  const defaults: typeof options = {
    baseURL: getBaseUrl(),
    timeout: 20000,
    onResponseError: ({ error }) => {
      console.error(error)
      throw new Error('Что-то пошло не так. Попробуйте повторить попытку')
    }
  }
  const params = defu(options, defaults)

  return useFetch(request, params)
}
