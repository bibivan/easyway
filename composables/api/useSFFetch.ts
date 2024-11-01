export const useSFFetch = <T>(path: string, options = {}) => {
  const config = useRuntimeConfig()
  const sfFetch = $fetch.create<T>({
    baseURL: config.public.commonApiUrl,
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  return sfFetch(path, options)
}
