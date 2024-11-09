import type { UseFetchOptions } from 'nuxt/app'
import type { NitroFetchRequest } from 'nitropack'

export function useAuthFetch<ResT, DataT>(
  request: NitroFetchRequest,
  options: UseFetchOptions<ResT, DataT> = {}
) {
  const authStore = useAuthorizationStore()
  const { goToAuth } = authStore
  const { token } = storeToRefs(authStore)

  if (!token.value) goToAuth()

  return useFetch(request, {
    baseURL: getBaseUrl(),
    timeout: 20000,
    headers: {
      Authorization: `Bearer ${token.value}`
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        goToAuth()
      }
    },
    ...options
  })
}
