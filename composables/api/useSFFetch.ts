import { defu } from 'defu'

export const useSFFetch = <T>(path: string, options = {}) => {
  const config = useRuntimeConfig()
  const optionsWithToken = defu(options, { body: { token: config.public.token } })

  return $fetch<T>(path, {
    baseURL: config.public.sfApiUrl,
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    ...optionsWithToken
  })
}
