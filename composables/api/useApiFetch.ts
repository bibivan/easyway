import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'
import type { $Fetch, NitroFetchRequest } from 'nitropack'

export function useApiFetch<ResT, DataT>(
  request: NitroFetchRequest,
  options: UseFetchOptions<ResT, DataT> = {}
) {
  const defaults: typeof options = {
    baseURL: getBaseUrl(),
    $fetch: useNuxtApp().$api as $Fetch<unknown, NitroFetchRequest>
  }

  // Получаем токен
  const optionsWithToken = addTokenToRequest<ResT, DataT>(options) as UseFetchOptions<ResT, DataT>
  const params = defu(optionsWithToken, defaults)

  return useFetch(request, params)
}
