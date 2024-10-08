import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack'

export const useClientFetch = <T>(
  path: string,
  options: Partial<NitroFetchOptions<NitroFetchRequest>> = {}
) => {
  const config = useRuntimeConfig()

  const apiFetch = $fetch.create<T>({
    baseURL: config.public.baseURL as string,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })

  if (options.method && ['POST', 'PUT', 'PATCH'].includes(options.method.toUpperCase())) {
    if (!isObject(options.body)) options.body = {}
    options.body.token = config.public.token
  } else {
    if (!isObject(options.params)) options.params = {}
    options.params.token = config.public.token
  }

  return apiFetch(path, options)
}
