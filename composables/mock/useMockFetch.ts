import { AsyncDataOptions } from '#app/composables/asyncData'

export const useMockFetch = <T>(
  key: string,
  data: T,
  fetchOptions?: AsyncDataOptions<T>,
  errorProbability: number = 100,
  errorMessage: string = 'Ошибка выполнения запроса',
  delay: number = 300
) => {
  return useAsyncData(
    key,
    () => {
      return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() * 100 <= errorProbability) {
            resolve(data)
          } else {
            reject(new Error(errorMessage))
          }
        }, delay)
      })
    },
    fetchOptions
  )
}
