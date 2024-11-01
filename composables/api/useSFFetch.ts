export const useSFFetch = <T>(path: string, options = { body: {} }) => {
  const config = useRuntimeConfig()
  const sfFetch = $fetch.create<T>({
    baseURL: config.public.commonApiUrl,
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: {
      token: config.public.commonApiUrl,
      ...(options?.body && options.body)
    }
  })
  return sfFetch(path, options)
}
