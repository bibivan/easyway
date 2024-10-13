import type { $Fetch, NitroFetchOptions, NitroFetchRequest } from 'nitropack'
import type { UseFetchOptions } from 'nuxt/app'

export const useClientFetch = <T>(
  path: string,
  options: NitroFetchOptions<NitroFetchRequest> = {}
) => {
  const { $api } = useNuxtApp()
  const apiFetch: $Fetch<unknown, NitroFetchRequest> = $api as $Fetch<T, NitroFetchRequest>
  const optionsWithToken = addTokenToRequest(options) as NitroFetchOptions<NitroFetchRequest>

  return apiFetch<T>(path, {
    ...optionsWithToken,
    baseURL: getBaseUrl()
  })
}
