import type { UseFetchOptions } from 'nuxt/app'
import type { NitroFetchRequest } from 'nitropack'

export function useAuthFetch<ResT, DataT>(
  request: NitroFetchRequest,
  options: UseFetchOptions<ResT, DataT> = {}
) {
  const authStore = useAuthorizationStore()
  const { goToAuth, updateToken } = authStore
  const { token } = storeToRefs(authStore)

  if (!token.value) goToAuth()

  return useFetch(request, {
    baseURL: getBaseUrl(),
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`
    },
    timeout: 20000,
    async onResponseError({ response, error }) {
      if (response.status === 401 || response.status === 403) {
        goToAuth()
      } else {
        console.error(error)
        throw new Error('Что-то пошло не так. Попробуйте повторить попытку')
      }
    },
    async onResponse({ response }) {
      updateToken(response._data.token)
    },
    ...options
  })
}
